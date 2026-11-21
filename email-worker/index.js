// Email Worker "artly-email": forwards every message to all addresses in env.FORWARD_TO (a secret).
// Routed from support@ and privacy@artly.com.pl via Email Routing ("Send to a Worker").

function parseRecipients(value) {
  return [...new Set(String(value ?? "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean))];
}

export default {
  async email(message, env, ctx) {
    const recipients = parseRecipients(env.FORWARD_TO);
    const tag = `from=${message.from} to=${message.to} size=${message.rawSize}`;

    if (recipients.length === 0) {
      console.error(`[artly-email] FORWARD_TO is empty; rejecting ${tag}`);
      message.setReject("Mailbox unavailable");
      return;
    }
    // Absent in local dev (undefined), so only treat an explicit false as "cannot forward".
    if (message.canBeForwarded === false) {
      console.error(`[artly-email] message cannot be forwarded; rejecting ${tag}`);
      message.setReject("Message cannot be delivered");
      return;
    }

    // Try every recipient independently; one failure (e.g. unverified destination) must not stop the others.
    const results = await Promise.allSettled(recipients.map((addr) => message.forward(addr)));

    const failed = [];
    results.forEach((r, i) => {
      if (r.status === "rejected") {
        const reason = r.reason instanceof Error ? r.reason.message : String(r.reason);
        failed.push(i);
        console.error(`[artly-email] forward to recipient #${i + 1} failed: ${reason} (${tag})`);
      }
    });

    if (failed.length === recipients.length) {
      console.error(`[artly-email] all ${recipients.length} forwards failed; rejecting ${tag}`);
      message.setReject("Unable to deliver message to recipient");
      return;
    }
    console.log(`[artly-email] forwarded to ${recipients.length - failed.length}/${recipients.length} (${tag})`);
  },
};
