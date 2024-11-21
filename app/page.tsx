import { Card, CardContent } from "@/components/ui/card";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Image from "next/image";

export default function Component() {
  const profileImageUrl = "https://github.com/yencolon.png";

  const socialLinks = [
    {
      href: "https://github.com/yencolon",
      icon: GithubIcon,
      alt: "GitHub",
      label: "Visit GitHub profile",
    },
    {
      href: "https://www.linkedin.com/in/yencolon/",
      icon: LinkedinIcon,
      alt: "LinkedIn",
      label: "Visit LinkedIn profile",
    },
    {
      href: "mailto:yenjcc@gmail.com",
      icon: MailIcon,
      alt: "Email",
      label: "Send email",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-800 p-8 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-black opacity-50"></div>
      <Card className="relative w-full max-w-xl bg-black bg-opacity-40 text-white backdrop-blur-lg rounded-3xl shadow-2xl">
        <CardContent className="p-12 flex flex-col gap-6 relative z-10">
          <div className="flex justify-center mb-4">
            <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-indigo-500 shadow-lg">
              <Image
                src={profileImageUrl}
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
              Yen Colon
            </h1>
            <p className="text-gray-300">
              Crafting software solutions with a passion for innovation and creativity.
            </p>
          </div>
          <div className="flex justify-center gap-8 mt-8">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110 bg-gradient-to-br from-indigo-600 to-purple-700 p-4 rounded-full flex items-center justify-center text-white shadow-inner hover:shadow-xl"
                  aria-label={link.label}
                >
                  <Icon className="h-8 w-8" />
                </a>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}