import { useState } from "react";
import { defaultOptions } from "../constants/DropDownDtates";
import type { SelectorOptionProps } from "../types/types";

const ShowDropDownSelectorLogic = () => {
  const [selected, setSelected] = useState<SelectorOptionProps[]>([]);
  return {
    selected,
    setSelected,
    defaultOptions,
  };
};

export default ShowDropDownSelectorLogic;
