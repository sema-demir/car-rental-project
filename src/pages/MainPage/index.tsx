import { useState } from "react";
import CustomFilter from "../../components/CustomFilter";
import Hero from "../../components/Hero";
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";

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
            <CustomFilter title="Yakıt Tipi" />
            <CustomFilter title="Yıl" />
          </div>
        </div>
        {!cars || cars.length < 1 ? (
          <div className="home__error-container">
            <h2>Üzgünüz Herhangi bir sonuç bulunamadı</h2>
          </div>
        ) : (
          <section>
            <Card />
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
