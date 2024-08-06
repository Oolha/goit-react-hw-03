import css from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.search}>
      <span>Find contacts by me</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
