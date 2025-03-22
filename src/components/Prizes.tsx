import React from "react";
import goldTrophy from "./assets/gold_trophy.jpeg";
import silverTrophy from "./assets/silver_trophy.jpg";
import bronzeTrophy from "./assets/bronze_trophy.png";
import innovationTrophy from "./assets/medal2.jpg";

const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="py-16 bg-gray-950 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
          🏆 Prizes 🏆
        </span>
      </h2>

      {/* Prizes Container */}
      <div className="flex flex-col items-center gap-8">
        {/* First Prize - Centered */}
        <PrizeCard imgSrc={goldTrophy} title="First Prize" amount="₹10,000" bgColor="bg-yellow-500 text-black" />

        {/* Second & Third Prize - Centered Below */}
        <div className="flex flex-wrap justify-center gap-8">
          <PrizeCard imgSrc={silverTrophy} title="Second Prize" amount="₹7,500" bgColor="bg-gray-400 text-black" />
          <PrizeCard imgSrc={bronzeTrophy} title="Third Prize" amount="₹5,000" bgColor="bg-orange-500 text-black" />
          <PrizeCard imgSrc={innovationTrophy} title="Best Innovation" amount="₹2,000" bgColor="bg-orange-500 text-black" />          
        </div>
      </div>
    </section>
  );
};

interface PrizeCardProps {
  imgSrc: string;
  title: string;
  amount: string;
  bgColor: string;
}

const PrizeCard: React.FC<PrizeCardProps> = ({ imgSrc, title, amount, bgColor }) => {
  return (
    <div
      className={`p-6 w-64 rounded-2xl shadow-xl transition-transform transform hover:scale-105 ${bgColor}`}
    >
      <img src={imgSrc} alt={title} className="w-32 mx-auto mb-4" />
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-lg font-medium">{amount}</p>
    </div>
  );
};

export default Prizes;
