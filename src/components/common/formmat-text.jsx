const StructuredTextDisplay = ({ text, className }) => {
    const formatText = (inputText) => {
      const lines = inputText.split('\n');
      
      let formattedHtml = '';
      let inList = false;
  
      lines.forEach(line => {
        line = line.trim();
        if (line.match(/^[a-z]\./)) {
          // This is a main point (e.g., "a.")
          if (inList) {
            formattedHtml += '</ul>';
            inList = false;
          }
          formattedHtml += `<p className="font-medium mt-2">${line}</p>`;
        } else if (line.startsWith('•')) {
          // This is a bullet point
          if (!inList) {
            formattedHtml += '<ul className="list-disc pl-5 mt-1">';
            inList = true;
          }
          formattedHtml += `<li class="ps-1">• ${line.substring(1).trim()}</li>`;
        } else if (line) {
          // This is regular text
          if (inList) {
            formattedHtml += '</ul>';
            inList = false;
          }
          formattedHtml += `<p>${line}</p>`;
        }
      });
  
      if (inList) {
        formattedHtml += '</ul>';
      }
  
      return formattedHtml;
    };
  
    return (
      <div className={className} dangerouslySetInnerHTML={{ __html: formatText(text) }} />
    );
  };
  
  export default StructuredTextDisplay;