import { useEffect, useRef, useState } from "react";

export function TimelineSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (!timelineRef.current) {
      console.warn("⏳ timelineRef.current is NULL! Retrying...");
      return;
    }

    console.log("✅ timelineRef Found:", timelineRef.current);
    const timelineItems = timelineRef.current.querySelectorAll(".timeline-item");
    if (timelineItems.length === 0) return;

    const firstItem = timelineItems[0] as HTMLElement;
    const lastItem = timelineItems[timelineItems.length - 1] as HTMLElement;
    const firstOffset = firstItem.offsetTop + firstItem.clientHeight / 2;
    const lastOffset = lastItem.offsetTop + lastItem.clientHeight / 2;
    setLineHeight(lastOffset - firstOffset + 50);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          } else {
            entry.target.classList.remove("opacity-100", "translate-y-0");
            entry.target.classList.add("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const timelineEvents = [
    { time: "March 11, 2025", title: "AIRO 5.O Launch", description: "Official launch of AIRO 5.O"},
    { time: "March 12, 2025", title: "Problem Statements Unleashed", description: "Kickoff and problem statement reveal" },
    { time: "March 13, 2025", title: "Registration Opens", description: "Registration for HackTronix begins"},
    { time: "March 13, 2025", title: "Start of Idea Submission", description: "Participants start submitting their ideas"},
    { time: "April 5, 2025",timeref: "April 10, 2025", title: "Idea Submission Deadline", description: "Round 1 ends at 11:59 PM" },
    { time: "April 5, 2025",timeref: "April 12, 2025", title: "Finalists Announcement", description: "Top 30 teams are announced"},
    { time: "April 6, 2025",timeref: "April 13, 2025", title: "Round 2 Registration Starts", description: "Registration for the next round begins" },
    { time: "April 7-8, 2025",timeref: "April 29-30, 2025", title: "Grand Finale", description: "Final round of AIRO 5.O. Buckle up!"},
  ];

  return (
    <section id="timeline" className="relative py-16 overflow-hidden">

      <div className="absolute inset-0 z-0"></div>

      {/* Timeline Content */}
      <div className="max-w-4xl mx-auto relative z-10 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#4079ff] to-[#ffab40] font-avartar tracking-wider">
          Event Timeline
        </h2>

        {/* Timeline Line */}
        <div
          className="eventline absolute left-6 sm:left-10 md:left-1/2 w-1 bg-gradient-to-b from-[#4079ff] to-[#ffab40] transform -translate-x-1/2"
          style={{ height: `${lineHeight}px`, top: "100px" }}
        ></div>

        {/* Timeline Events */}
        <div ref={timelineRef} className="relative space-y-8">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`eventCards timeline-item flex items-center w-full opacity-0 translate-y-8 transition-all duration-700 ease-out transform ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Circle Indicator */}
              <div className="circle absolute left-6 sm:left-10 md:left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 border-4 border-[#ffab40] bg-gray-900 rounded-full flex items-center justify-center shadow-lg shadow-[#4079ff]/50">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-[#4079ff] rounded-full animate-pulse"></div>
              </div>

              {/* Event Card - Custom Media Queries */}
              <div
                className={`w-full md:w-2/5 max-w-[300px] md:max-w-none bg-black/20 border border-[#4079ff]/20 text-white p-4 md:p-6 rounded-2xl shadow-xl transition-transform duration-500 ease-in-out hover:scale-105 hover:border-[#ffab40] hover:shadow-[#ffab40]/50 ${index % 2 === 0 ? "md:ml-16" : "md:mr-16"
                  }`}
              >
                <p className="text-xs md:text-sm font-semibold text-[#ffab40] line-through">{event.time}</p>
                <p className="text-xs md:text-sm font-semibold text-[#ffab40]">{event.timeref}</p>
                <h3 className="text-lg md:text-xl font-bold text-[#4079ff]">{event.title}</h3>
                <p className="text-gray-300 text-xs md:text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Tailwind Media Queries */}
      <style>{`
        @media (max-width: 640px) {
          .timeline-item {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .eventCards {
            padding-left:5vw;
          }
          .circle {
            display: none;
          }
          .eventline {
            display: none;
          }
        }
        @media (min-width: 640px) and (max-width: 1024px) {
          .timeline-item {
            flex-direction: row !important;
          }
          .timeline-item:nth-child(even) {
            flex-direction: row-reverse !important;
          }
        }
        @media (min-width: 1024px) {
          .timeline-item {
            flex-direction: row !important;
          }
          .timeline-item:nth-child(even) {
            flex-direction: row-reverse !important;
          }
        }
      `}</style>
    </section>
  );
}
