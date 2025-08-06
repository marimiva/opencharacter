import React from 'react';

export const runtime = "edge";

export default function PrivacyPolicy() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 text-white mb-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy for Chara</h1>
      <p className="mb-4"><strong>Effective Date: 06/8/2025</strong></p>

      <p className="mb-6">
        Welcome to Chara, a platform operated by Chara Research Corp. Chara is a closed-source AI character platform. This Privacy Policy describes how we collect, use, store, and disclose your information when you use our services through https://chara-research.com. By using our services, you agree to the practices described below.
      </p>

      {[
        {
          title: "1. Information We Collect",
          content: [
            "<strong>Personal Information:</strong> When you create an account or contact us, we may collect personal details such as your username, email address, and any other information you choose to provide.",
            "<strong>Usage Data:</strong> We collect data such as your IP address, browser type, device information, pages visited, time spent, and interaction with AI characters.",
            "<strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to remember preferences, track usage, and improve performance."
          ]
        },
        {
          title: "2. How We Use Your Information",
          content: [
            "To provide and maintain our platform and services",
            "To personalize your experience and offer relevant content",
            "To communicate with you about service updates or promotions",
            "To analyze platform usage and improve functionality",
            "To monitor misuse or violations of our Terms of Service"
          ]
        },
        {
          title: "3. Chat and AI Interactions",
          content: [
            "Your conversations with AI characters may be stored and used for quality improvement, moderation, safety checks, and product development.",
            "These conversations are not shared or sold to advertisers or external parties.",
            "Do not share sensitive personal information during AI chats, as these are processed by automated systems."
          ]
        },
        {
          title: "4. Information Sharing and Disclosure",
          content: [
            "We do not sell your personal information. We may share data in the following limited scenarios:",
            "With service providers under confidentiality agreements to support the platform",
            "To comply with legal obligations or enforce our rights",
            "In the event of a business transfer such as a merger or acquisition"
          ]
        },
        {
          title: "5. Data Retention",
          content: [
            "We retain your data for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law.",
            "You may request deletion of your personal data at any time by contacting us."
          ]
        },
        {
          title: "6. Security",
          content: [
            "We implement appropriate technical and organizational measures to protect your data. However, no system is fully secure and we cannot guarantee absolute security."
          ]
        },
        {
          title: "7. Your Rights and Choices",
          content: [
            "You may access, correct, or delete your account information at any time through your account settings.",
            "You may opt out of marketing emails via the unsubscribe link or contact us directly.",
            "Under applicable laws, you may have additional rights such as data portability or objection to processing."
          ]
        },
        {
          title: "8. International Users",
          content: [
            "Chara is operated from the United States (or applicable region of incorporation). If you are accessing the service from outside this region, your data may be transferred and processed in countries with different data protection laws."
          ]
        },
        {
          title: "9. Children's Privacy",
          content: [
            "You must be at least 13 years old to use Chara. We do not knowingly collect personal information from children under 13. If we become aware of such data, we will delete it promptly."
          ]
        },
        {
          title: "10. Changes to This Privacy Policy",
          content: [
            "We may update this Privacy Policy at any time. When we do, we will update the effective date and may notify users by email or through the platform."
          ]
        },
        {
          title: "11. Contact Us",
          content: [
            "If you have any questions or concerns about this Privacy Policy or your personal data, please contact us at <a href='mailto:privacy@chara-research.com' class='underline'>privacy@chara-research.com</a>."
          ]
        }
      ].map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          {Array.isArray(section.content) ? (
            <ul className="list-disc pl-6 space-y-2">
              {section.content.map((item, itemIndex) => (
                <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          ) : (
            <p dangerouslySetInnerHTML={{ __html: section.content }} />
          )}
        </div>
      ))}
    </div>
  );
}
