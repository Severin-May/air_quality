import React from "react";
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqItems = [
    { question: "What format file is supported?", answer: "We support CSV format for file uploads." },
    { question: "Can I trust the result?", answer: "Our predictions are based on algorithms, but for accurate diagnosis, consult a medical professional." },
    { question: "Can cat-therapy help with arrhythmia?", answer: "While pets can have positive effects on health, they are not a substitute for medical treatment. Consult with a healthcare professional for advice." },
    { question: "What is VEB?", answer: "VEB stands for Ventricular Ectopic Beats - type of arrhythmia" },
    { question: "Why was only VEB chosen?", answer: "Considering the scope of bachelor thesis and availability of relevant data for training" },
    { question: "Do I need to segment the input?", answer: "Yes, currently the application does not support automatic segmentation" }
  ];

  return (
    <div className="articles-container">
      <div>
        <ul className="faq-list">
          {faqItems.map(({ question, answer }, index) => (
            <li key={index} className="article-item">
              <div className="faq-question">
                <Link to={`/faq/${index}`} className="faq-link">{question}</Link>
              </div>
              <div className="faq-answer">{answer}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FAQ;
