import React, { useState } from 'react';
import './TextTransformer.css';

const TextTransformer = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const transformText = (type) => {
    switch (type) {
      case 'uppercase':
        setOutputText(inputText.toUpperCase());
        break;
      case 'lowercase':
        setOutputText(inputText.toLowerCase());
        break;
      case 'camelcase':
        setOutputText(inputText.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
          index === 0 ? word.toLowerCase() : word.toUpperCase()
        ).replace(/\s+/g, ''));
        break;
      case 'kebabcase':
        setOutputText(inputText.toLowerCase().replace(/\s+/g, '-'));
        break;
      case 'reverse':
        setOutputText(inputText.split('').reverse().join(''));
        break;
      default:
        setOutputText(inputText);
    }
  };

  return (
    <div className="container">
      <h1>LexiShift</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your text here"
      />
      <div className="button-container">
        <button onClick={() => transformText('uppercase')}>UPPERCASE</button>
        <button onClick={() => transformText('lowercase')}>lowercase</button>
        <button onClick={() => transformText('camelcase')}>camelCase</button>
        <button onClick={() => transformText('kebabcase')}>kebab-case</button>
        <button onClick={() => transformText('reverse')}>Reverse</button>
      </div>
      <textarea
        value={outputText}
        readOnly
        placeholder="Transformed text will appear here"
      />
    </div>
  );
};

export default TextTransformer;