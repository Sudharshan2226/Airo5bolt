import { Calendar, Clock, MapPin } from "lucide-react";
import GradientText from './ui/GradientText';

const Description = () => {
  const features = [
    {
      title: "Innovative Challenges",
      description:
        "Tackle real-world problems in Cybersecurity, AI/ML, Blockchain, and IoT domains with creative solutions.",
    },
    {
      title: "Networking Opportunities",
      description:
        "Connect with industry professionals, mentors, and like-minded innovators from across the country.",
    },
    {
      title: "Learning Experience",
      description:
        "Gain hands-on experience with cutting-edge technologies and enhance your problem-solving skills.",
    },
    {
      title: "Internship Opportunity",
      description:
        "Winners will receive an interview opportunity  upon selection g from interview, can join us for a real-time internship of 3 to 6 months.",
    },
  ];

  return (
    <section id="event" className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium mb-2 text-center font-avartar tracking-wider">
            <GradientText 
            colors={["#8fa8d8", "#6b9eff", "#8fa8d8", "#6b9eff", "#6b9eff", "#8fa8d8"]}
            animationSpeed={4} 
            showBorder={false} 
            className="font-avartar"
            style={{ fontFamily: "'AvartarWater', sans-serif" }}
            >
            About Airo 5.O
            </GradientText>
          </h2>

          <div className="bg-black/20 backdrop-blur-sm border border-[#4079ff]/20 rounded-xl p-6 md:p-8 shadow-xl shadow-[#4079ff]/10 mb-12">
            <p className="text-gray-300 mb-6 leading-relaxed">
            AIRO 5.0 - The Power of Ideas, The Spirit
of Innovation!
AIRO 5.0 marks the 5th edition of the
National-Level Tech Fest organized by the
Department of Artificial Intelligence and
Data Science. This vibrant fest is a celebration
of technology, creativity, and collaboration,
bringing together students from across the
country to showcase their skills and
imagination
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <EventDetail icon={Calendar} label="Date" value="Sep 12, 2025" />
              <EventDetail icon={Clock} label="Duration" value="24 Hours" />
              <EventDetail icon={MapPin} label="Location" value="Sri Sairam Engineering College" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <div className="bg-black/20 backdrop-blur-sm border border-[#4079ff]/10 rounded-lg p-6 hover:border-[#4079ff]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#4079ff]/10 group">
    <h3 className="text-base font-medium mb-3 text-gray-200 group-hover:text-[#6b9eff] transition-colors">
      {title}
    </h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

type EventDetailProps = {
  icon: React.ElementType;
  label: string;
  value: string;
};

const EventDetail = ({ icon: Icon, label, value }: EventDetailProps) => (
  <div className="flex items-center gap-3">
    <Icon className="text-[#4079ff]" size={24} />
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

export default Description;
