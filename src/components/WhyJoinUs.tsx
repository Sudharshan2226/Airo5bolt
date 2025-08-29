import { FaUserTie, FaUsers, FaTrophy, FaTools } from "react-icons/fa";

const WhyJoinUs = () => {
  const benefits = [
    {
      icon: <FaUserTie className="text-red-500 text-2xl" />,
      title: "Industry Mentors",
      description: "Connect with experts, mentors, and innovators for real-world guidance.",
    },
    {
      icon: <FaUsers className="text-red-500 text-2xl" />,
      title: "Networking",
      description: "Meet like-minded hackers and future collaborators.",
    },
    {
      icon: <FaTrophy className="text-red-500 text-2xl" />,
      title: "Exciting Prizes & Recognition",
      description: "Win from a prize pool worth ₹30,000 and get noticed by recruiters.",
    },
    {
      icon: <FaTools className="text-red-500 text-2xl" />,
      title: "Hands-on Experience",
      description: "Step out of the classroom and apply your skills to real-world problems.",
    }
  ];

  return (
    <div className="w-full bg-black/20 py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-avartar tracking-wider">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
          Why Join Us?
        </span>
      </h2>
      <p className="text-base text-gray-400 text-center mt-2">
        Here's what's in store for you:
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-black/20 backdrop-blur-sm flex flex-col items-center p-6 rounded-xl shadow-lg transition transform hover:scale-105 w-80 border border-red-500/20 hover:border-red-500/40"
          >
            <div className="mb-4">{benefit.icon}</div>
            <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
            <p className="text-gray-400 text-center mt-2 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyJoinUs;