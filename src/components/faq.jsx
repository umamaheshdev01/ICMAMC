import React, { useState } from 'react';

const FAQBox = ({ question, answer }) => {
  const [showFullAnswer, setShowFullAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowFullAnswer(!showFullAnswer);
  };

  return (
    <div className="faq-box bg-white shadow-md p-4 mb-4 rounded-md" onClick={toggleAnswer}>
      <div className="flex justify-between items-center">
        <div className="faq-question font-bold text-lg">{question}</div>
        <button className="faq-toggle">
          {showFullAnswer ? (
            <i className="fas fa-chevron-up text-indigo-600"></i>
          ) : (
            <i className="fas fa-chevron-down text-indigo-600"></i>
          )}
        </button>
      </div>
      <div className={`faq-answer mt-2 ${showFullAnswer ? 'block' : 'hidden'}`}>
        {answer}
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="faq-section">
      <FAQBox
        question="When will be the conference conducted?"
        answer="March 1st - 3rd, 2024"
      />
      <FAQBox
        question="What is the aim of the conference?"
        answer="To promote the advancement of mathematical techniques and computational tools that underpin various scientific and engineering disciplines."
      />
      {/* Add more FAQBox components as needed */}
    </div>
  );
};

export default FAQSection;
