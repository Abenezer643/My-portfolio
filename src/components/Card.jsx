import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-[#1f1f1f] border border-white/10 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
