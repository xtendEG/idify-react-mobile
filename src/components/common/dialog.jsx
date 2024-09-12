import React, { useEffect, useRef } from "react";

const Dialog = ({ isOpen, setIsOpen, header, content, footer }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 font-mona">
      <div
        ref={dialogRef}
        className="bg-white rounded-lg shadow-xl max-w-sm w-full"
      >
        <div className="p-6">
          {header}
          {content}
          <div className="flex justify-end">{footer}</div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
