import ReactSelect from "react-select";
import Select from "react-select";

const SearchButton = ({ styling }) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      <img src="/magnifying-glass.svg" alt="" />
    </button>
  );
};

const SearchBar = () => {
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <ReactSelect className="w-full" />
        <SearchButton styling={"sm:hidden"} />
      </div>
    </form>
  );
};

export default SearchBar;
