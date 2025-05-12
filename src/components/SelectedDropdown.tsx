import React from "react";
import type { SelectDropdownProps } from "../types/types";
import SelectedDropdownLogic from "./SelectedDropdownLogic";
const SelectedDropdown: React.FC<SelectDropdownProps> = ({
  options,
  onChange,
  placeholder = "Select or add...",
}) => {
  const {
    classes,
    wrapperRef,
    dropdownOpen,
    inputDropValue,
    internalOptions,
    selectedOptions,
    handleKeyDown,
    handleOptionClick,
    handleInputChange,
    setDropdownOpen,
  } = SelectedDropdownLogic({ options, onChange });
  return (
    <div className={classes.dropdownWrapper} ref={wrapperRef}>
      <div
        className={classes.inputContainer}
        onClick={() => setDropdownOpen(true)}
      >
        <input
          type="text"
          placeholder={placeholder}
          value={inputDropValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={classes.inputBox}
        />
        <span className={classes.arrow}>&#x25BE;</span>
      </div>
      {/* {selectedOptions.length > 0 && (
        <div className={classes.selectedTagsBelow}>
          {selectedOptions.map((option) => (
            <div key={option.value} className={classes.tag}>
              {option.label}
            </div>
          ))}
        </div>
      )} */}
      {dropdownOpen && (
        <div className={classes.dropdownMenu}>
          {internalOptions.map((option) => (
            <div
              key={option.value}
              className={
                selectedOptions.some((sel) => sel.value === option.value)
                  ? classes.dropdownItemSelected
                  : classes.dropdownItem
              }
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
              {selectedOptions.some((sel) => sel.value === option.value) && (
                <span className={classes.checkmark}>✔</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedDropdown;
