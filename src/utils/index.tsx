import { colors } from "../constants";
import { CarType, filterType } from "../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e4f5ce1768msh41219fbd34033ffp143b1bjsn94b55b3d9b12",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};
export async function fetchCars(filters: filterType) {
  const {
    make = "bmv",
    model = "",
    limit = "",
    year = "",
    fuel = "",
  } = filters;
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&fuel_type=${fuel}&year=${year}&limit=${limit}`,
    options
  );
  return await res.json();
}

export const generateImage = (car: CarType, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model);
  url.searchParams.append("zoomType", "fullscreen");
  if (angle) {
    url.searchParams.append("angle", angle);
  }
  const i = Math.round(Math.random() * colors.length);
  url.searchParams.append("paintId", colors[i]);

  return String(url);
};
