import ReactSelect from "react-select";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
type ButtonProps = {
  styling: string;
};

const SearchButton = ({ styling }: ButtonProps) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      <img src="/magnifying-glass.svg" alt="" />
    </button>
  );
};

const SearchBar = () => {
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const [params, setParams] = useSearchParams();
  console.log(params);
  // Eventlarda paramaetrelerin tipini kendimiz tanımlayamayız Reactın kendi içerisinden gelen tipleri kullanırız

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParams({
      make: make.toLowerCase(),
      model: model.toLowerCase(),
    });
  };

  return (
    <form className="searchbar gap-3" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <ReactSelect
          className="w-full"
          onChange={(e) => e && setMake(e.value)}
        />
        <SearchButton styling={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <img
          className="absolute ml-4"
          src="/model-icon.png"
          width={25}
          alt=""
        />
        <input
          className="searchbar__input rounded text-black"
          type="text"
          placeholder="Ör:Civic"
        />
        <SearchButton styling={"sm:hidden"} />
      </div>
      <SearchButton styling={"max-sm:hidden"} />
    </form>
  );
};

export default SearchBar;
