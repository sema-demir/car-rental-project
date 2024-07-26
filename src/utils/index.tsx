const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e4f5ce1768msh41219fbd34033ffp143b1bjsn94b55b3d9b12",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};
export async function fetchCars(filters) {
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
  console.log(res.json());
}
