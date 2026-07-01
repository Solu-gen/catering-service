import { useState } from 'react';

const Accordion = ({ items }) => {
  // Храним индекс открытого элемента (null — все закрыты)
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className={`w-full flex justify-between items-center p-4 text-left transition-colors
                ${isOpen ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'}`}
              aria-expanded={isOpen}
            >
              <span className="font-medium">{item.title}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden
                ${isOpen ? 'max-h-96 p-4' : 'max-h-0'}`}
            >
              <p className="text-gray-600">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;