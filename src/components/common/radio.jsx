const Radio = ({ isSelected,stroke }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <circle cx="10" cy="10" r="9.25" stroke={stroke||"#1CD29B"} strokeWidth="1.5" />
        {isSelected && <circle cx="10" cy="10" r="7" fill="#1CD29B" />}
      </svg>
    );
  };

  export default Radio