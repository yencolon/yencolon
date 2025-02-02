import { LucideProps } from "lucide-react";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";

type IconType = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

const ShortcutIcon = ({
  Icon,
  alt,
  label,
  color = "blue",
}: {
  Icon: IconType;
  alt: string;
  label: string;
  color?: "green" | "red" | "blue" | "yellow" | "purple";
}) => {
  const colorMap = {
    green: "bg-green-500",
    red: "bg-red-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
  };

  return (
    <div className="w-28 h-28 flex flex-col items-center justify-center gap-1 transition duration-300 hover:scale-125">
      <div className={` group ${colorMap[color]} p-2  rounded-2xl shadow-lg`}>
        <Icon size={48} strokeWidth={1} className="stroke-white" />
        <span className="absolute p-1 bottom-1/4 left-20 text-xs group-hover:opacity-70 opacity-0 rounded-lg bg-stone-100 w-full">
          {alt}
        </span>
      </div>
      <span className="text-center text-xs font-sans text-white ">{label}</span>
    </div>
  );
};

export { ShortcutIcon };
