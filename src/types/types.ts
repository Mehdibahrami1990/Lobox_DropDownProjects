export type SelectorOptionProps = {
  label: string;
  value: string;
};
export type SelectDropdownProps = {
  options: SelectorOptionProps[];
  onChange: (selected: SelectorOptionProps[]) => void;
    placeholder?: string;
};
