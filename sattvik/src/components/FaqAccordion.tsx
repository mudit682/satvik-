import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Define the types for the props
interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

// A separate component for each item
const AccordionItem = ({ item, isOpen, onClick }: { item: FaqItem, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-calPoly-200">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-calPoly-700">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-hunter-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-calPoly-600 leading-relaxed whitespace-pre-line">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

// The main Accordion component
export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {faqs.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={index === openIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}