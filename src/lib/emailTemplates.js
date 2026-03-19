/**
 * Nexus Prime Email System
 * Professionally branded, high-fidelity responsive HTML templates for 
 * identity lifecycle management and administrative notifications.
 */

const BRAND_COLOR = "#2563eb"; // Blue 600
const DARK_COLOR = "#0f172a";  // Slate 900
const LIGHT_COLOR = "#f8fafc"; // Slate 50
const BORDER_COLOR = "#e2e8f0"; // Slate 200

export const generateEmailTemplate = ({ userName, type, actionData, ctaUrl, date }) => {
    let title = "";
    let preheader = "";
    let message = "";
    let ctaLabel = "Login to Nexus";
    let icon = "🛡️";
    let highlightBox = null;

    const formattedDate = date || new Date().toLocaleDateString('en-US', { 
        month: 'long', day: 'numeric', year: 'numeric' 
    });

    switch (type) {
        case "APPROVED":
            title = "Identity Authorized";
            preheader = "Your administrative access has been granted.";
            message = `Welcome to the Nexus, <b>${userName}</b>. Your request for administrative access has been reviewed and authorized by the Super Admin node.`;
            ctaLabel = "Access Dashboard";
            icon = "✅";
            highlightBox = {
                label: "Secure Passkey",
                value: actionData.passkey,
                subtext: "Shred or securely store this key. Do not share."
            };
            break;
        case "DENIED":
            title = "Identity Refused";
            preheader = "Your request for access was declined.";
            message = `Greetings, <b>${userName}</b>. We regret to inform you that your request for administrative admission has been declined following a security review.`;
            ctaLabel = "Resubmit Verification";
            icon = "🚫";
            break;
        case "REMOVED":
            title = "Authority Revoked";
            preheader = "Your access node has been purged.";
            message = `Security Alert: The identity node associated with <b>${userName}</b> has been purged from the Authority Nexus. Your access is now restricted.`;
            ctaLabel = "Contact Security";
            icon = "⚠️";
            break;
        case "VERIFICATION":
            title = "Identity Verification";
            preheader = "Verify your digital signature to proceed.";
            message = `A verification sequence has been initiated for <b>${userName}</b>. Utilize the following token to confirm your identity.`;
            ctaLabel = "Proceed to Terminal";
            icon = "🔑";
            highlightBox = {
                label: "Verification Token",
                value: actionData.code,
                subtext: "This token expires in 5 minutes."
            };
            break;
        case "REVERIFY_APPROVED":
            title = "Authority Restored";
            preheader = "Your identity node has been re-authorized.";
            message = `Identification Complete, <b>${userName}</b>. Your administrative node has been successfully recalibrated and restored in the Nexus.`;
            ctaLabel = "Access Nexus";
            icon = "⚡";
            highlightBox = {
                label: "New Secure Passkey",
                value: actionData.passkey,
                subtext: "Your previous credentials have been invalidated."
            };
            break;
        default:
            title = "Nexus System Notification";
            preheader = "Important update regarding your account.";
            message = `A system event has been logged regarding your identity node at <b>${formattedDate}</b>.`;
    }

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Muhyo Tech — ${title}</title>
    <style>
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: ${LIGHT_COLOR}; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
        .wrapper { width: 100%; table-layout: fixed; background-color: ${LIGHT_COLOR}; padding-bottom: 60px; }
        .main { background-color: #ffffff; margin: 0 auto; width: 100%; max-width: 600px; border-spacing: 0; color: ${DARK_COLOR}; border-radius: 16px; overflow: hidden; margin-top: 40px; }
        .header { background-color: ${DARK_COLOR}; color: #ffffff; padding: 40px 20px; text-align: center; }
        .logo { font-size: 24px; font-weight: 900; letter-spacing: -1px; text-transform: uppercase; font-style: italic; }
        .logo span { color: ${BRAND_COLOR}; }
        .body { padding: 40px 50px; line-height: 1.6; }
        .h1 { font-size: 28px; font-weight: 800; margin-bottom: 20px; letter-spacing: -0.5px; display: flex; align-items: center; gap: 10px; }
        .p { font-size: 16px; color: #475569; margin-bottom: 30px; }
        .cta-container { text-align: center; margin: 40px 0; }
        .button { background-color: ${BRAND_COLOR}; color: #ffffff !important; padding: 18px 36px; text-decoration: none; border-radius: 12px; font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; display: inline-block; box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.4); }
        .highlight-box { background-color: #f1f5f9; border: 1px dashed ${BORDER_COLOR}; border-radius: 16px; padding: 30px; text-align: center; margin: 30px 0; }
        .highlight-label { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; color: #64748b; margin-bottom: 12px; }
        .highlight-value { font-size: 32px; font-weight: 900; letter-spacing: 4px; color: ${DARK_COLOR}; margin-bottom: 8px; font-family: monospace; }
        .highlight-subtext { font-size: 11px; font-weight: 500; color: #94a3b8; }
        .footer { text-align: center; padding: 40px 20px; font-size: 12px; color: #94a3b8; }
        .footer b { color: ${DARK_COLOR}; }
        .footer-links { margin-top: 20px; }
        .footer-links a { color: ${BRAND_COLOR}; text-decoration: none; margin: 0 10px; font-weight: 700; }
        @media screen and (max-width: 600px) { .body { padding: 30px 25px; } .h1 { font-size: 24px; } }
    </style>
</head>
<body>
    <div style="display: none; max-height: 0px; overflow: hidden;">${preheader}</div>
    <div class="wrapper">
        <table class="main" align="center">
            <tr>
                <td class="header">
                    <div class="logo">Muhyo <span>Nexus</span></div>
                </td>
            </tr>
            <tr>
                <td class="body">
                    <div class="h1">${icon} ${title}</div>
                    <div class="p">${message}</div>
                    
                    ${highlightBox ? `
                    <div class="highlight-box">
                        <div class="highlight-label">${highlightBox.label}</div>
                        <div class="highlight-value">${highlightBox.value}</div>
                        <div class="highlight-subtext">${highlightBox.subtext}</div>
                    </div>
                    ` : ''}

                    <div class="cta-container">
                        <a href="${ctaUrl}" class="button">${ctaLabel}</a>
                    </div>

                    <div class="p" style="font-size: 14px; opacity: 0.7; border-top: 1px solid ${BORDER_COLOR}; padding-top: 30px; margin-top: 40px;">
                        If you did not initiate this request or believe this node access is in error, please disregard this communication or contact the Super Admin Root node immediately.
                    </div>
                </td>
            </tr>
            <tr>
                <td class="footer">
                    <p>Verified Administrative Communication • Generated on <b>${formattedDate}</b></p>
                    <p><b>Muhyo Tech Administrative Nexus</b><br>Security Perimeter: Verified SSL/TLS</p>
                    <div class="footer-links">
                        <a href="mailto:pirghulammuhyodin@gmail.com">Security Relay</a>
                        <a href="https://muhyo.tech">Nexus Home</a>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
    `;
};
