import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconCalendar,
  IconUsers,
  IconMapPin,
  IconQuestionMark,
} from "@tabler/icons-react";

export function FloatingNav() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-white" />
      ),
      href: "/",
    },
    {
      title: "Events",
      icon: (
        <IconCalendar className="h-full w-full text-white" />
      ),
      href: "/events",
    },
    {
      title: "Our Team",
      icon: (
        <IconUsers className="h-full w-full text-white" />
      ),
      href: "/team",
    },
    {
      title: "Location",
      icon: (
        <IconMapPin className="h-full w-full text-white" />
      ),
      href: "/#location",
    },
    {
      title: "FAQ",
      icon: (
        <IconQuestionMark className="h-full w-full text-white" />
      ),
      href: "/#faq",
    },
  ];

  return (
    <>
      {/* Desktop - bottom center */}
      <div className="hidden md:block fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock
          items={links}
          desktopClassName="bg-black/80 backdrop-blur-sm border border-red-900/30"
        />
      </div>
      
      {/* Mobile - bottom right, larger size */}
      <div className="block md:hidden fixed bottom-6 right-6 z-50">
        <FloatingDock
          items={links}
          mobileClassName="bg-black/80 backdrop-blur-sm border border-red-900/30"
        />
      </div>
    </>
  );
}