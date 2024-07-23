import { useState } from "react";
import CustomFilter from "../../components/CustomFilter";
import Hero from "../../components/Hero";
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";
import { fuels, years } from "../../constants";

const MainPage = () => {
  const [cars, setCars] = useState([1]);
  return (
    <div>
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="catalogue">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin Arabaları Keşfet </p>
        </div>
        {/* filtereleme alanı */}
        <div className="home__filters ">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Yakıt Tipi" options={fuels} />
            <CustomFilter title="Yıl" options={years} />
          </div>
        </div>
        {!cars || cars.length < 1 ? (
          <div className="home__error-container">
            <h2>Üzgünüz Herhangi bir sonuç bulunamadı</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              <Card />
              <Card />
              <Card />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
