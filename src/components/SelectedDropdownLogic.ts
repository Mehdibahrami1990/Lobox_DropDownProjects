import React, { useState, useEffect, useRef } from "react";
import classes from "../styles/SelectedDropdown.module.scss";
import type { SelectorOptionProps,SelectDropdownProps } from "../types/types";

const SelectedDropdownLogic   = ({options, onChange}:SelectDropdownProps)=> {
      const [inputDropValue, setInputDropValue] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<SelectorOptionProps[]>(
    [] 
  );
  const [internalOptions, setInternalOptions] = useState<SelectorOptionProps[]>(options);
  const wrapperRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
    setInternalOptions(options);
  }, [options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDropValue(e.target.value);
    setDropdownOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputDropValue.trim() !== "") {
      const newOption = { label: inputDropValue, value: inputDropValue };

      if (!selectedOptions.find((opt) => opt.value === newOption.value)) {
        const updatedSelected = [...selectedOptions, newOption];
        setSelectedOptions(updatedSelected);
        onChange(updatedSelected);
      }

      if (!internalOptions.find((opt) => opt.value === newOption.value)) {
        setInternalOptions([...internalOptions, newOption]);
      }

      setInputDropValue("");
    }
  };

  const handleOptionClick = (option: SelectorOptionProps) => {
    if (!selectedOptions.find((opt) => opt.value === option.value)) {
      const updated = [...selectedOptions, option];
      setSelectedOptions(updated);
      onChange(updated);
    }
    setInputDropValue("");
    setDropdownOpen(false);
  };

 return {
     classes,
     wrapperRef,
     dropdownOpen,
     inputDropValue,
     internalOptions,
     selectedOptions,
     setDropdownOpen,
     handleKeyDown,
     handleOptionClick,
     handleInputChange,

  };
}

export default SelectedDropdownLogic