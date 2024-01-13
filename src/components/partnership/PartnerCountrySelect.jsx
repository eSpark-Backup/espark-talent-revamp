// import { CountryCode } from 'constants/CountryCodes';
import React from 'react';

const PartnerCountrySelect = ({
  options,
  selectedOption,
  setSelectedOption,
  // setSelectedFlag,
}) => {
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select
        className="partner-country-dropdown partner-form input"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options?.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PartnerCountrySelect;
