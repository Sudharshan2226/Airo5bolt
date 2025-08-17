import { FaFire, FaShieldAlt, FaDragon, FaExclamationTriangle } from "react-icons/fa";

const rules = [
  {
    category: "General Rules",
    icon: <FaShieldAlt className="text-yellow-500 text-3xl" />,
    details: [
      "Each team must consist of a minimum of 2 members and a maximum of 4 members.",
      "Teams are allowed to select and work on only one problem statement.",
      "Inter-college teams: Allowed. Team members can be from the different colleges.",
      "Inter-specialization teams: Allowed. Team members can be from different specializations within the same college.",
      "All solutions must be submitted before the specified deadline.",
      "Any form of plagiarism will result in immediate disqualification of the team.",
      "At least two participants from the registered team must be physically present for the grand finale round.",
      "Mentors are not considered part of the team.",
      "Participants are responsible for the safety and security of their personal belongings.",
      "Participants must maintain cleanliness, follow a proper dress code, and uphold discipline at the venue.",
      "Travel expenses must be borne by the participants.",
      "The event will take place from 8:00 AM on April 7th to 3:00 PM on April 8th IST. Participants should plan accordingly.",
      "If the chosen problem statement requires hardware components, participants must bring their own as the organizing team will not provide any hardware.",
      "College students must bring their college ID card (a photocopy is acceptable) for verification at the grand finale.",
      "All project work must be completed during the Hackathon, and the code repository must be initialized at the start of the event.",
      "Teams are permitted to use libraries, frameworks, and open-source code, but pre-developed projects or open-sourced solutions specifically created for this event are not allowed.",
      "Product development must cease once the allotted time is over. Minor debugging and fixes are permitted post-deadline.",
      "The organizers reserve the right to disqualify any team for violating rules, displaying unsporting behavior, or breaching the code of conduct.",
      "The Hackathon judging criteria will be disclosed one hour before the event begins.",
      "In case of any disputes, the final decision will rest with the organizers.",
      "Participants must follow the official social media channels to stay updated and qualify for the grand finale."
    ],
  },
  {
    category: "AIRO 5.O Rules",
    icon: <FaDragon className="text-red-500 text-3xl" />,
    details: [
      "Teams must upload the problem statement PPT and obtain approval during registration.",
      "Any form of plagiarism will lead to immediate disqualification.",
      "Sharing project-related information outside the team is strictly prohibited. Violations may result in disqualification.",
      "Teams or individuals may bring a faculty member (optional).",
      "Participants may select a mentor (optional).",
      "All project phases must be completed and submitted within the given deadlines.",
      "Communication must only occur via the registered email ID.",
      "From all registered teams, the top 30 teams will advance to the grand finale.",
      "Bonus points will be awarded for proper version control on GitHub.",
      "Teams must follow the provided PPT template for submissions.",
      "Participants must regularly check the AIRO 5.O website for updates.",
      "Teams interested in donating their projects for public use are welcome to do so."
    ],
  },
  {
    category: "Compliance and Enforcement",
    icon: <FaExclamationTriangle className="text-orange-500 text-3xl" />,
    details: [
      "Failure to adhere to the above rules may result in warnings, penalties, or disqualification.",
      "The organizing committee reserves the right to modify the rules if necessary, with prior notification to the participants.",
      "Participants must acknowledge and accept these rules before registering for the event."
    ],
  },
];

const Guidelines = () => {
  return (
    <div className="w-full bg-gray-950 py-12 px-6 md:px-16">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
            HackTronix Guidelines
          </span>
        </h2>
        <p className="text-gray-300 mt-3 text-lg">
          Follow these rules to ensure fair play and an amazing experience.
        </p>
      </div>

      {/* Rules Section */}
      <div className="space-y-10">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105"
          >
            {/* Rule Category */}
            <div className="flex items-center space-x-4">
              {rule.icon}
              <h3 className="text-2xl font-semibold text-white">{rule.category}</h3>
            </div>

            {/* Rule List */}
            <ul className="mt-4 space-y-2 text-gray-300">
              {rule.details.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <FaFire className="text-red-500 mr-2 mt-1" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guidelines;
