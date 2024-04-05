import { GoSearch } from "react-icons/go";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit, searchQuery, setSearchQuery }) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit(searchQuery);
  //   setSearchQuery("");
  // };
  return (
    <header className={css.header}>
      <div className={css.input_container}>
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
        <GoSearch
          onClick={onSubmit}
          type="submit"
          className={css.icon}
          size={24}
        />
      </div>
    </header>
  );
};

export default SearchBar;
