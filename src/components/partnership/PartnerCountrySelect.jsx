// import { CountryCode } from 'constants/CountryCodes';
import React, { useState } from 'react';

const PartnerCountrySelect = ({
  options,
  selectedOption,
  setSelectedOption,
  setSelectedFlag,
}) => {
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select
        className="partner-country-dropdown"
        value={selectedOption}
        // onChange={handleSelectChange}
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
