import React from 'react'

import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
        {/* Icon */}
        <div className="text-5xl mb-6">🚀</div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to <span className="text-blue-600">Data Scraper</span>
        </h1>

        {/* Description */}
        <p className="mt-5 text-gray-500 leading-relaxed">
          Before you can start scraping,
          <br />
          connect your accounts.
        </p>

        {/* Step */}
        <p className="mt-8 text-sm font-medium text-gray-500">
          Step 1 of 2
        </p>

        {/* Button */}
        
          <button 
            className="mt-8 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold transition hover:bg-blue-700" 
            onClick={() => navigate('/Connection')}
          >
            
            Continue

          </button>
        
        
      </div>
    </div>
  );
    
  
}

export default Welcome
