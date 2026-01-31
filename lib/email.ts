import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type PurchaseEmailData = {
  email: string;
  sessionId: string;
  paymentIntentId: string;
};

export async function sendPurchaseEmail({ email, sessionId, paymentIntentId }: PurchaseEmailData) {
  const downloadUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/download?session=${sessionId}`;

  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #000; color: #fff; padding: 20px; text-align: center; }
          .content { padding: 30px 20px; }
          .button { display: inline-block; background: #000; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .code-block { background: #f4f4f4; padding: 15px; border-radius: 5px; font-family: monospace; font-size: 13px; margin: 10px 0; }
          .footer { background: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #666; }
          .check { color: #22c55e; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Welcome to PM Skills!</h1>
          </div>

          <div class="content">
            <p>Thank you for purchasing PM Skills for Claude Code!</p>

            <p>You now have lifetime access to 60+ Product Management skills including RICE prioritization, AARRR metrics, user interviews, roadmapping, and more.</p>

            <a href="${downloadUrl}" class="button">Download All Skills →</a>

            <h2>📚 How to Install Your Skills</h2>

            <h3>Step 1: Download the skills</h3>
            <p>Click the download button above to get all skill files. Each skill is a SKILL.md file.</p>

            <h3>Step 2: Create skills directory</h3>
            <p>Open your terminal and run:</p>
            <div class="code-block">mkdir -p ~/.claude/skills</div>

            <h3>Step 3: Add skills to Claude</h3>
            <p>For each skill, copy it to its own folder:</p>
            <div class="code-block">cp rice-framework.md ~/.claude/skills/rice-framework/SKILL.md</div>

            <h3>Step 4: Use in Claude Code</h3>
            <p>Open Claude Code and type the skill name with a slash:</p>
            <div class="code-block">/rice-framework</div>

            <h2>✅ What's Included</h2>
            <ul>
              <li><span class="check">✓</span> 60+ PM Skills for Claude Code</li>
              <li><span class="check">✓</span> Instant download access</li>
              <li><span class="check">✓</span> Lifetime updates</li>
              <li><span class="check">✓</span> Email support</li>
            </ul>

            <h2>💚 Need Help?</h2>
            <p>Having trouble with installation? Reply to this email and we'll help you out.</p>

            <p><strong>New to Claude Code?</strong> Visit <a href="https://claude.ai/code">claude.ai/code</a> to learn more.</p>

            <p>Happy building!<br>The PM Skills Team</p>
          </div>

          <div class="footer">
            <p>Payment ID: ${paymentIntentId}</p>
            <p>Questions? Email us at support@pmskills.com</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const data = await resend.emails.send({
      from: 'PM Skills <noreply@pmskills.com>',
      to: [email],
      subject: '🎉 Your PM Skills are Ready to Download!',
      html: emailHtml,
    });

    return data;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}
