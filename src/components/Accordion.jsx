import React, { useState } from 'react';

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const accordionItems = [
    {
      id: 'accordion1',
      question: 'What is Pines?',
      answer: 'Pines is a UI library built for AlpineJS and TailwindCSS.',
    },
    {
      id: 'accordion2',
      question: 'How do I install Pines?',
      answer: 'Add AlpineJS and TailwindCSS to your page and then copy and paste any of these elements into your project.',
    },
    {
      id: 'accordion3',
      question: 'Can I use Pines with other libraries or frameworks?',
      answer: 'Absolutely! Pines works with any other library or framework. Pines works especially well with the TALL stack.',
    },
  ];

  return (
    
    <div className="relative w-full mx-auto overflow-hidden text-sm font-normal border border-gray-200 divide-y divide-gray-200 rounded-md">
      {accordionItems.map((item) => (
        <div key={item.id} className="cursor-pointer group">
          <button
            onClick={() => toggleAccordion(item.id)}
            className="flex items-center justify-between w-full p-4 text-left select-none group-hover:underline"
          >
            <span>{item.question}</span>
            <svg
              className={`w-4 h-4 duration-200 ease-out ${activeAccordion === item.id ? 'rotate-180' : ''}`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          {activeAccordion === item.id && (
            <div className="p-4 pt-0 opacity-70">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;