import React from 'react';

const StructuredTextDisplay = ({ text, className }) => {

  // Helper function to render formatted JSX based on the input text.
  const formatText = (inputText) => {
    const lines = inputText.split('\n');
    const elements = [];
    let inList = false;
    let listItems = [];

    lines.forEach((line, index) => {
      line = line.trim();

      if (line.match(/^[a-z]\./)) {
        // Main point (e.g., "a.")
        if (inList) {
          elements.push(
            <ul className="list-disc pl-5 mt-1" key={`list-${index}`}>
              {listItems}
            </ul>
          );
          inList = false;
          listItems = [];
        }
        elements.push(
          <p className="font-medium mt-2" key={`point-${index}`}>{line}</p>
        );
      } else if (line.startsWith('•')) {
        // Bullet point
        if (!inList) {
          inList = true;
        }
        listItems.push(
          <li className="ps-1" key={`bullet-${index}`}> {line.substring(1).trim()}</li>
        );
      } else if (line) {
        // Regular text
        if (inList) {
          elements.push(
            <ul className="list-disc pl-5 mt-1" key={`list-${index}`}>
              {listItems}
            </ul>
          );
          inList = false;
          listItems = [];
        }
        elements.push(
          <p key={`text-${index}`}>{line}</p>
        );
      }
    });

    // Push any remaining list items
    if (inList) {
      elements.push(
        <ul className="list-disc pl-5 mt-1" key="remaining-list">
          {listItems}
        </ul>
      );
    }

    return elements;
  };

  return (
    <div className={className}>
      {formatText(text)}
    </div>
  );
};

export default StructuredTextDisplay;
