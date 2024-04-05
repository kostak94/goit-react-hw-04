import { GoSearch } from "react-icons/go";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit, searchQuery, setSearchQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(searchQuery);
  };

  return (
    <header className={css.header}>
      <form className={css.input_container} onSubmit={handleSubmit}>
        <input
          className={css.input}
          value={searchQuery}
          name="searchQuery"
          type="text"
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={css.btn} type="submit">
          <GoSearch className={css.icon} size={24} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
