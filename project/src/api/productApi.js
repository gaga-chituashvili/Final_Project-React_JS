export async function productApi() {
  const response = await fetch(
    `https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b5a2e70e04msh18e6fca8fdd809dp1f0ea2jsne5e12f470732",
        "x-rapidapi-host": "kohls.p.rapidapi.com",
      },
    }
  );

  const result = response.json();
  if (response.ok) {
    return result;
  }
  throw new Error("fetch error");
}
