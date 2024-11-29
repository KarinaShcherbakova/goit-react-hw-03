import styles from './SearchBox.module.css'; 

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Find contacts by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button type="button" onClick={() => {}}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;