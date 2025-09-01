import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  linkedin?: string; 
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, members }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-red-600 text-center mb-8 drop-shadow-neon-red uppercase tracking-wider">
      {title}
    </h2>
    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
      {members.map((member, index) => (
        <div
          key={index}
          className="bg-black rounded-lg w-80 sm:w-80 md:w-80 lg:w-96 xl:w-86 border border-red-500 hover:border-red-700 transition-all duration-300 transform hover:-translate-y-3 shadow-red-neon hover:shadow-red-neon-lg hover:scale-105"
        >
          <div className="p-6 flex flex-col items-center text-center">
            <div className="group relative w-36 h-36">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-red-600 shadow-red-neon">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {member.linkedin && (
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Linkedin 
                      className="text-red-500 hover:text-red-400 transform hover:scale-125 transition-all duration-200" 
                      size={36}
                    />
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-xl font-bold text-red-500 mt-4 mb-1 drop-shadow-neon-red">
              {member.name}
            </h3>
            <p className="text-gray-400">{member.position}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const OrganizersPage: React.FC = () => {

  // KEY PERSONS (CEO, Principal, HOD)
  const keyPersons: TeamMember[] = [
    { name: "Dr. Sai Prakash Leomuthu", position: "CEO", image: "sairam_ceo.png", linkedin: "https://www.linkedin.com/in/sairamceo/" },
    { name: "Dr. J Raja", position: "Principal", image: "principal.jpg", linkedin: "https://www.linkedin.com/in/raja-j-32b44164/" },
    { name: "Dr. Swagata Sarkar", position: "HOD", image: "1591960457895.jpeg", linkedin: "https://www.linkedin.com/in/swagatabsarkar/" }
  ];

  // STAFF CO-ORDINATORS (AI-DS)
  const staffCoordinators: TeamMember[] = [
    { name: "MRS G GOMATHY", position: "ASSISTANT PROFESSOR", image: "gomathy.jpg", linkedin: "https://www.linkedin.com/in/swagatabsarkar/" },
    { name: "MRS K P AISHWARYA", position: "ASSISTANT PROFESSOR", image: "Aish.jpg", linkedin: "https://www.linkedin.com/in/aishwarya-k-p-344171338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
  ];

  // OVERALL CO-ORDINATORS
  const overallCoordinators: TeamMember[] = [
    { name: "R KRISHNA KUMAR", position: "Overall Co-Ordinator", image: "kkr.jpg", linkedin: "https://www.linkedin.com/in/krishna-kumar-data-analyst?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "S SAATHWEE", position: "Overall Co-Ordinator", image: "SaathweePic.jpg", linkedin: "https://www.linkedin.com/in/saathwee-sridharan/" }
  ];

  // SECRETARIES
  const secretaries: TeamMember[] = [
    { name: "S ROBIN", position: "Secretary", image: "Robin.jpg", linkedin: "https://www.linkedin.com/in/robin-s-041239292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "K DAKSHINI", position: "Secretary", image: "DakshiniPic.jpg", linkedin: "https://www.linkedin.com/in/dakshini-kannan-a8864a28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
  ];

  // TREASURERS (new section)
  const treasurers: TeamMember[] = [
    { name: "C VIJAYAKUMAR", position: "Treasurer", image: "VkPic.jpg", linkedin: "https://www.linkedin.com/in/vijayakumar-c-731279312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "M ATHISHTA", position: "Treasurer", image: "AthishtaPic.jpg", linkedin: "https://www.linkedin.com/in/athishta-mannavan-51a155283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
  ];

  // WEB DEVELOPERS
  const webDevelopers: TeamMember[] = [
    { name: "B SUDHARSHAN", position: "Web Developer", image: "profile4.jpg", linkedin: "https://www.linkedin.com/in/sudharshan-b-1227bb280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "R D JAYANAGAVARSHINI", position: "Web Developer", image: "JAYANAGAVARSHINI R D 2023-2027.jpg", linkedin: "https://www.linkedin.com/in/jayanagavarshini-rd-73193a28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
    ];


  // const mediaTeam: TeamMember[] = [
  //   { name: "N", position: "Media Team", image: "Naaga Dheva Dharshan.jpeg", linkedin: "https://www.linkedin.com/in/naagadhevadharshann/" },
  //   { name: "H", position: "Media Team", image: "Hemanathan.jpg", linkedin: "https://www.linkedin.com/in/r-hemanathan-a5a504257" },
  //   { name: "J", position: "Media Team", image: "Gokul J.jpg" }
  // ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-black text-white animate-bg-flicker">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 drop-shadow-neon animate-glow-red uppercase tracking-wide animate-text-pulse">
            MEET THE TEAM
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto animate-expand-line-fast"></div>
        </div>
        <TeamSection title="KEY PERSONS" members={keyPersons} />
        <TeamSection title="STAFF CO-ORDINATORS (AI-DS)" members={staffCoordinators} />
        <TeamSection title="OVERALL CO-ORDINATORS" members={overallCoordinators} />
        <TeamSection title="SECRETARIES" members={secretaries} />
        <TeamSection title="TREASURERS" members={treasurers} />
        <TeamSection title="WEB DEVELOPERS" members={webDevelopers} />
      </div>
    </div>
  );
};
export default OrganizersPage;
