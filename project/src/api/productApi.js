export async function productApi() {
  const response = await fetch(
    `https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ad54ba3b92mshcbdada7bf392ee0p1bce04jsn249223a8d259",
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
