import React from 'react';
// Import desired icons
import { 
  FaPaintBrush, 
  FaBug, 
  FaPlug, 
  FaCode, 
  FaCogs, 
  FaPuzzlePiece, 
  FaTags, 
  FaBoxes, 
  FaGift, 
  FaRandom, 
  FaShoppingCart,
  FaEnvelope
} from 'react-icons/fa'; 
import { IconType } from 'react-icons';

// Update interface to include icon
interface SkillCardProps {
  title: string;
  description: string; 
  icon: IconType;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon: Icon }) => { // Destructure and rename icon prop
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
      {/* Wrap icon in a styled span */}
      <span className="text-4xl text-teal-300 mb-4">
        <Icon /> {/* Render icon without className */}
      </span>
      <h3 className="text-lg font-semibold text-slate-200 mb-2">{title}</h3>
    </div>
  );
};

const Skills = () => {
  // Add icon component to each skill object
  const skillsList = [
    { title: "Theme Development", description: "...", icon: FaPaintBrush },
    { title: "Debugging Code", description: "...", icon: FaBug }, // Renamed from 'Debugging existing code' for brevity?
    { title: "App Integrations", description: "...", icon: FaPlug },
    { title: "Creating Custom Apps", description: "...", icon: FaCode }, // Shortened title
    // Added new skills
    { title: "Shopify Functions", description: "...", icon: FaCogs },
    { title: "Checkout Extensibility", description: "...", icon: FaPuzzlePiece },
    { title: "Discounts", description: "...", icon: FaTags },
    { title: "Bundles", description: "...", icon: FaBoxes },
    { title: "Gift Cards / Store Credit", description: "...", icon: FaGift },
    { title: "Cart Transformation", description: "...", icon: FaRandom },
    { title: "Side Cart Integration", description: "...", icon: FaShoppingCart },
    { title: "Klaviyo", description: "...", icon: FaEnvelope },
  ];

  return (
    <section id="skills" className="mb-8 scroll-mt-24 md:mb-12 lg:mb-16 lg:scroll-mt-24" aria-label="Skills">
      <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl mb-8">
        My Skills
      </h2>
      {/* Grid for skill cards - adjust columns as needed */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsList.map((skill) => (
          <SkillCard key={skill.title} title={skill.title} description={skill.description} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
