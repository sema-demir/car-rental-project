const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e4f5ce1768msh41219fbd34033ffp143b1bjsn94b55b3d9b12",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};
export async function fetchCars(filters) {
  fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`);
}
