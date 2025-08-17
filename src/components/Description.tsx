import { Calendar, Clock, MapPin } from "lucide-react";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
              About Hacktronix
            </span>
          </h2>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-900/20 rounded-xl p-6 md:p-8 shadow-xl shadow-red-900/5 mb-12">
            <p className="text-gray-300 mb-6 leading-relaxed">
            Welcome to AIRO 5.O, A 24-hour tech marathon where innovation meets determination. This hackathon helps in pushing boundaries, solving real-world problems, and turning ideas into reality. Whether you're an expert coder, a budding developer, or someone with a big idea, AIRO 5.O is the perfect platform to learn, collaborate, and create something incredible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <EventDetail icon={Calendar} label="Date" value="April 29-30, 2025" />
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
  <div className="bg-gray-900/30 backdrop-blur-sm border border-red-900/10 rounded-lg p-6 hover:border-red-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/5 group">
    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-red-500 transition-colors">
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
    <Icon className="text-red-500" size={24} />
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

export default Description;
