import React from "react";
import CardSpotlightDemo from "./ui/CardSpotlightDemo";

const DrugInfoList: React.FC = () => {
    const drugData = [
        {
          drugCode: "M01AB",
          name: "Non-Steroidal Anti-Inflammatory Drugs (NSAIDs)",
          description: "NSAIDs are a class of drugs that provide analgesic (pain-killing) and anti-inflammatory effects.",
          usage: [
            "Treat conditions such as arthritis.",
            "Relieve muscle pain.",
            "Alleviate headaches.",
          ],
          additionalInfo: "Prolonged use can lead to gastrointestinal issues, and they should be used cautiously in patients with heart conditions."
        },
        {
          drugCode: "M01AE",
          name: "Selective COX-2 Inhibitors",
          description: "These drugs are a subclass of NSAIDs that specifically inhibit the COX-2 enzyme, which is responsible for inflammation and pain.",
          usage: [
            "Treat arthritis.",
            "Manage other inflammatory conditions.",
            "Reduce the risk of gastrointestinal side effects."
          ],
          additionalInfo: "They are less likely to cause stomach ulcers but may increase the risk of cardiovascular events."
        },
        {
          drugCode: "N02BA",
          name: "Salicylates (e.g., Aspirin)",
          description: "Salicylates are a group of drugs that provide analgesic, anti-inflammatory, and antipyretic effects.",
          usage: [
            "Provide pain relief.",
            "Reduce fever.",
            "Prevent blood clots."
          ],
          additionalInfo: "Aspirin is commonly used for heart attack prevention but should not be used in children with viral infections due to the risk of Reye's syndrome."
        },
        {
          drugCode: "N02BE",
          name: "Paracetamol (Acetaminophen)",
          description: "Paracetamol is a widely used over-the-counter pain reliever and fever reducer.",
          usage: [
            "Provide mild to moderate pain relief.",
            "Reduce fever."
          ],
          additionalInfo: "Overdose of paracetamol can cause serious liver damage. It's important to monitor dosage, especially when used in combination with other medications."
        },
        {
          drugCode: "N05B",
          name: "Benzodiazepines",
          description: "Benzodiazepines are a class of psychoactive drugs used to treat anxiety, insomnia, and seizures.",
          usage: [
            "Provide short-term relief of severe anxiety.",
            "Manage sleep disturbances.",
            "Treat seizures."
          ],
          additionalInfo: "They have a potential for dependence and should be used for short durations. Withdrawal symptoms can be severe if discontinued abruptly."
        },
        {
          drugCode: "N05C",
          name: "Hypnotics and Sedatives",
          description: "These drugs are used to induce sleep and relax patients, often in the treatment of insomnia.",
          usage: [
            "Manage sleep disorders.",
            "Treat anxiety-related sleep disturbances."
          ],
          additionalInfo: "Long-term use can lead to dependence and tolerance, requiring careful management by a healthcare provider."
        },
        {
          drugCode: "R03",
          name: "Beta-2 Agonists",
          description: "Beta-2 agonists are bronchodilators used to relieve bronchospasm in conditions such as asthma and COPD.",
          usage: [
            "Manage asthma symptoms.",
            "Prevent asthma attacks.",
            "Treat chronic obstructive pulmonary disease (COPD)."
          ],
          additionalInfo: "Overuse can lead to decreased effectiveness and potential side effects such as tremors and palpitations."
        },
        {
          drugCode: "R06",
          name: "Antihistamines",
          description: "Antihistamines are drugs that counteract the effects of histamine in allergic reactions.",
          usage: [
            "Treat allergy symptoms such as runny nose, itching, and hives.",
            "Manage allergic rhinitis.",
            "Control symptoms of hay fever."
          ],
          additionalInfo: "First-generation antihistamines can cause drowsiness, while second-generation drugs are less likely to have this effect."
        }
      ];

  return (
    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {drugData.map((drug) => (
            <CardSpotlightDemo
              key={drug.drugCode}
              drugCode={drug.drugCode}
              name={drug.name}
              description={drug.description}
              usage={drug.usage}
              additionalInfo={drug.additionalInfo}
            />
          ))}
        </div>
      
  );
};

export default DrugInfoList;
