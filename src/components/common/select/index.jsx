import { useEffect, useState } from "react";
import Select from "react-select";

// ++++++++++ images import ++++++++++
import ArrowIcon from "../../../assets/images/down.png";

export const SelectBox = ({ field, form, label, placeholder, options, selectedOption }) => {
  // ---------- states ----------
  const [option, setOption] = useState()

  // ---------- variables ----------
  const customStyles = {
    control: (
      provided,
      state
      // props: ControlProps<ISelectOption, boolean, GroupBase<any>>
    ) => ({
      ...provided,
      borderColor: "#e5e7eb !important",
      borderRadius: "6px",
      height: "42px",
      cursor: "pointer",
      fontSize: "16px",
      backgroundColor: "#FFF",
      boxShadow: "none"
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#99a1b7",
      fontSize: 14,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      cursor: "pointer",
    }),
    clearIndicator: (provided) => ({
      ...provided,
      pointerEvents: "auto",
      cursor: "pointer",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "gray" : "black",
      backgroundColor: state.isSelected ? "#EFEFEF" : "white",
      cursor: "pointer",
      outline: "none",
      zIndex: "50",
      overflow: "hidden"
    }),
  };
  const { name } = field;
  const { setFieldValue } = form;

  // ---------- functions ----------
  const handleChange = (selected) => {
    setFieldValue(name, selected.value);
    setOption(selected)
  };

  // ---------- lifeCycle ----------
  useEffect(() => {
    if (selectedOption) {
      setOption(selectedOption)
    }
  }, [selectedOption])

  // ---------- render jsx ----------
  return (
    <div className="w-full">
      { label && <label className="text-16 text-custom-dark">{label}</label> }
      <Select
        options={options}
        isSearchable={false}
        styles={customStyles}
        placeholder={placeholder}
        onChange={handleChange}
        value={option}
        maxMenuHeight={200}
        className={`${label && "mt-2"}`}
      />
    </div>
  );
};
