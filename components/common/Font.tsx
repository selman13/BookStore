"use client";
import React, { useState, useEffect } from 'react';

const Font = () => {
  const [fontSize, setFontSize] = useState('14px'); 

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedSize = e.target.value;
    setFontSize(selectedSize);
  };

  useEffect(() => {
    document.body.style.fontSize = fontSize; 
  }, [fontSize]); 

  return (
    <div className='flex gap-4'>
      <label className='flex items-center'>
        <input 
          type="radio" 
          name="fontSize" 
          value="0.7rem" 
          onChange={handleFontSizeChange} 
          className="rounded-full mr-3" 
        />
        Kiçik
      </label>
      <label className='flex items-center'>
        <input 
          type="radio" 
          name="fontSize" 
          value="0.9rem" 
          onChange={handleFontSizeChange} 
          className="rounded-full mr-3" 
        />
        Orta
      </label>
      <label className='flex items-center'>
        <input 
          type="radio" 
          name="fontSize" 
          value="1rem" 
          onChange={handleFontSizeChange} 
          className="rounded-full mr-3" 
        />
        Böyük
      </label>
    </div>
  );
};

export default Font;
