import { useEffect, useState } from "react";
import CustomFilter from "../../components/CustomFilter";
import Hero from "../../components/Hero";
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";
import { fuels, years } from "../../constants";
import { useSearchParams } from "react-router-dom";
import { fetchCars } from "../../utils";
import { CarType } from "../../types";
import ShowMore from "../../components/ShowMore";

const MainPage = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    //bir obje içindeki değerleri anahtar-değer cifti seklinde bir nesne olusturur.
    const paramsObj = Object.fromEntries(params.entries());
    fetchCars(paramsObj).then((res: CarType) => setCars(res));
  }, [params]);
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
              {cars.map((car, i) => (
                <Card car={car} key={i} />
              ))}
            </div>
          </section>
        )}
        <ShowMore />
      </div>
    </div>
  );
};

export default MainPage;
