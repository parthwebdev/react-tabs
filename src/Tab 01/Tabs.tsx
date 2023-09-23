import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: 1, label: "Home" },
  { id: 2, label: "About" },
  { id: 3, label: "Service" },
  { id: 4, label: "Contact" },
];

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);
  const handleActiveTab = (tabId : number) => (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setActiveTab(tabId)}
  return (
    <div className="flex gap-20">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={handleActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-white/60"
          } text-2xl font-medium px-4 py-1.5 relative`}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="bubble"
              className="absolute inset-0 bg-purple-700 rounded-full -z-10"
              transition={{ type: "spring", duration: 0.6 }}
            ></motion.div>
          )}

          {tab.label}
        </button>
      ))}
    </div>
  );
};
