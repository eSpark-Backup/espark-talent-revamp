const PartnerCountrySelect = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  /**
   * Handles the change event for a select input.
   *
   * @param {Object} event - The event object triggered by the select input.
   * @param {Object} [event.target] - The target element of the event.
   * @param {string} [event.target.value] - The selected value from the input.
   */
  const handleSelectChange = (event) => {
    setSelectedOption(event?.target?.value);
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
