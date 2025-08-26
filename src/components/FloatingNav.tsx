import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconClock,
  IconUsers,
  IconFileText,
  IconTrophy,
} from "@tabler/icons-react";

export function FloatingNav() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Timeline",
      icon: (
        <IconClock className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#timeline",
    },
    {
      title: "Team",
      icon: (
        <IconUsers className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/team",
    },
    {
      title: "Guidelines",
      icon: (
        <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/guidelines",
    },
    {
      title: "Results",
      icon: (
        <IconTrophy className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/results",
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock
        items={links}
        desktopClassName="bg-black/80 backdrop-blur-sm border border-red-900/30"
        mobileClassName="bg-black/80 backdrop-blur-sm border border-red-900/30"
      />
    </div>
  );
}
