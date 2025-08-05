import styles from "./SearchField.module.css";

const SearchField = ({ handleChange, handleSearch }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <input
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(e.target.value);
            }
          }}
          placeholder="Filter dishes..."
          type="text"
        />
      </div>
    </>
  );
};

export default SearchField;
