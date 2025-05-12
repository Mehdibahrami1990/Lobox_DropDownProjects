import SelectedDropdown from "../components/SelectedDropdown";
import classes from "../styles/SelectedDropdown.module.scss";
import ShowDropDownSelectorLogic from "./ShowDropDownSelectorLogic";
const ShowDropDownSelector = () => {
  const { selected, setSelected, defaultOptions } = ShowDropDownSelectorLogic();
  return (
    <div style={{ padding: "40px" }}>
      <h2>Select Categories</h2>
      <SelectedDropdown
        options={defaultOptions}
        onChange={(selectedOptions) => setSelected(selectedOptions)}
      />
      <div style={{ marginTop: "20px" }}>
        <strong>Selected Options:</strong>
        <ul className={classes.selectedTagsBelow}>
          {selected.map((opt) => (
            <li key={opt.value} className={classes.tag}>
              {opt.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShowDropDownSelector;
