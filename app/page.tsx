import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GamepadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  CameraIcon,
} from "lucide-react";
import Image from "next/image";

export default function Component() {
  const profileImageUrl = "https://github.com/yencolon.png";

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/yencolon/",
      icon: LinkedinIcon,
      alt: "LinkedIn",
      label: "Visit LinkedIn profile",
      openInNewTab: true,
    },
    {
      href: "https://github.com/yencolon",
      icon: GithubIcon,
      alt: "GitHub",
      label: "Visit GitHub profile",
      openInNewTab: true,
    },

    {
      href: "mailto:yenjcc@gmail.com",
      icon: MailIcon,
      alt: "Email",
      label: "Send email",
      openInNewTab: true,
    },
    {
      href: "https://geo-guess-game.vercel.app/",
      icon: GamepadIcon,
      alt: "Prove your geo knowledge",
      label: "Geo Play",
      openInNewTab: true,
    },
    {
      href: "https://vsco.co/yencolon/",
      icon: CameraIcon,
      alt: "See the world through my lens",
      label: "Photography",
      openInNewTab: true,
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-slate-50 dark:bg-gray-900">
      <div className="bg-orange-300 dark:bg-gray-800 border-2 border-neutral-800 dark:border-green-300 h-screen sm:h-auto">
        <div className="bg-green-200 ">
          <div>U+00A5 U+003A</div>
        </div>
        <div className="m-10">
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-black dark:text-white">
            developer
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-black dark:text-white">
            explorer
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-black dark:text-white">
            photogr...
          </h2>
        </div>
        <div className="m-10">
          <p className="text-lg text-gray-800 dark:text-gray-200 font-mono typewriter flex-wrap">
            Hi! My name is Yen Colon and I&#39;m a software developer who loves
            crafting things.
          </p>
        </div>
        <div className="m-10 flex flex-row space-x-8 ">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target={link.openInNewTab ? "_blank" : "_self"}
                rel={link.openInNewTab ? "noopener noreferrer" : ""}
                aria-label={link.label}
              >
                <Icon className="text-black dark:text-white" />
              </a>
            );
          })}
        </div>
        <div className="m-10">
          <a
            className="bg-black p-4 text-white dark:bg-white dark:text-black"
            href="https://drive.google.com/file/d/1wzJ7rZCmVJn6o5y5V7t1Zk9X1V2b4wYg/view?usp=sharing"
            target="_blank"
          >
            View my resume
          </a>
        </div>
      </div>
    </div>
  );
}
