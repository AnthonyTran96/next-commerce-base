import { useEffect, useRef, useState } from 'react';

const CustomSelect = ({
  options
}: {
  options: {
    label: string;
    value: string;
  }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const selectRef = useRef<HTMLDivElement>(null);

  // Function to close the dropdown when a click occurs outside the component
  const handleClickOutside = (event: any) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add a click event listener to the document
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  return (
    <div className="custom-select custom-select-2 relative shrink-0" ref={selectRef}>
      <div
        className={`select-selected whitespace-nowrap ${isOpen ? 'select-arrow-active' : ''}`}
        onClick={toggleDropdown}
      >
        {selectedOption.label}
      </div>
      <div className={`select-items ${isOpen ? '' : 'select-hide'}`}>
        {options.slice(1).map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`select-item ${selectedOption === option ? 'same-as-selected' : ''}`}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
