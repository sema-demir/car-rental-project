import Hero from "../../components/Hero";
import SearchBar from "../../components/SearchBar";

const MainPage = () => {
  return (
    <div>
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="catalogue">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin Arabaları Keşfet </p>
        </div>
        {/* filtereleme alanı */}
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
