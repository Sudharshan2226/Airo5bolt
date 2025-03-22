import { useState } from "react";
import { UiverseButton} from "./Buttons";

type Question = {
  id: string;
  title: string;
  answer: string;
};

const questions: Question[] = [
  { id: "HT01", title: "Sustainable Technology", answer: "Develop an interactive platform that promotes eco-friendly habits. Implement a reward-based system where users earn points for sustainable actions. Integrate immersive technologies like AR/VR to enhance user engagement." },
  { id: "HT02", title: "Blockchain for Supply Chain", answer: "Develop a dual-blockchain solution: a private blockchain for secure supplier, manufacturer, and warehouse data management, and a public blockchain for transparent product tracking, real-time shipment updates, and automated payment settlements to enhance supply chain trust and efficiency." },
  { id: "HT03", title: "IoT & Smart Transportation", answer: "Implement a real-time vehicle-to-vehicle (V2V) communication system for safer and more efficient traffic management. Enable vehicles to exchange critical data on road conditions, traffic, and hazards. Improve road safety and optimize traffic flow for smart city applications." },
  { id: "HT04", title: "Autonomous Cybersecurity", answer: "Create an AI-driven cybersecurity solution for real-time IoT threat detection. Implement self-healing mechanisms to isolate and recover compromised nodes. Ensure scalable protection for heterogeneous networks with minimal downtime." },
  { id: "HT05", title: "Artificial Intelligence & Machine Learning", answer: "Explore AI-driven solutions to solve real-world problems. Implement models for automation, prediction, or decision-making. Utilize AI techniques like deep learning, NLP, computer vision, or reinforcement learning. Optimize processes using AI-powered analytics and intelligent systems. Innovate in fields like healthcare, finance, security, education, and more." },
  { id: "HT06", title: "Augmented Reality & Virtual Reality", answer: "Develop immersive AR/VR applications for real-world problem-solving. Create interactive simulations, training modules, or entertainment experiences. Integrate spatial computing for enhanced user engagement. Explore AI-powered AR/VR solutions for education, healthcare, or industrial applications." },
  { id: "HT07", title: "Robotics & Automation", answer: "Build intelligent robotic systems for automation and efficiency. Integrate AI and IoT for real-time decision-making in robotics. Develop robotic applications for industries like healthcare, agriculture, and manufacturing. Work on autonomous navigation, robotic vision, or human-robot interaction." },
  { id: "HT08", title: "Open Innovation & Disruptive Solutions", answer: "Solve real-world challenges with out-of-the-box thinking. Develop groundbreaking solutions across any domain—tech, healthcare, sustainability, or education. Integrate AI, blockchain, IoT, or any emerging technology to drive impact. Focus on scalability, user experience, and innovation-driven problem-solving. No boundaries. No limits. Just pure innovation!" },
];

const Domains = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
    <div className="mb-6 text-center">
  <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
    Problem Statement
  </h1>
  {/* Full-width Horizontal Line */}
  <div className="w-full border-t-2 border-red-600 my-4"></div>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
    <UiverseButton 
      text="PPT_Template" 
      href="https://docs.google.com/presentation/d/1nKZcI3bf1qQ3l2ifRkYlElMbTPchn-uXCpuAZXE7Sw4/edit?usp=sharing" 
    />
  </div>
</div>


      {questions.map((q) => (
        <div key={q.id} className="mb-4 border-b pb-2">
          <div
            className="ps-question cursor-pointer text-lg font-semibold flex justify-between items-center p-6 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg transition-transform transform hover:scale-105"
            onClick={() => toggleQuestion(q.id)}
          >
            {q.id}: {q.title}
            <span>{openQuestion === q.id ? "▲" : "▼"}</span>
          </div>
          <div
            className={`ps-answer mt-2 p-4 bg-orange-100 rounded-lg text-gray-900 overflow-hidden transition-all duration-500 ease-in-out ${openQuestion === q.id ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}
          >
            <p>{q.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Domains;
