import "./page.css";
import VolunteerPageClient from "./VolunteerPageClient";

export const metadata = {
  title: "Volunteer at II&M | Initiative on Islam & Medicine",
  description:
    "Support II&M’s mission by contributing your time, skills, and perspective to advance research, education, and community engagement at the intersection of Islam and medicine.",
  keywords: [
    "Volunteer",
    "II&M Volunteering",
    "Islamic Bioethics",
    "Muslim Community Health",
    "Community Engagement",
    "Healthcare Ethics",
  ],
  openGraph: {
    title: "Volunteer at II&M — Make a Meaningful Contribution",
    description:
      "Support II&M’s mission by contributing your time, skills, and perspective to advance research, education, and community engagement.",
    url: "/volunteer",
    siteName: "Initiative on Islam & Medicine",
    type: "website",
  },
};

export default function VolunteerPage() {
  return <VolunteerPageClient />;
}
