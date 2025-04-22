export async function productApi() {
  const response = await fetch(
    `https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens`,
    {
      method: "GET",
      headers: {
       'x-rapidapi-key': '369a1dcae3msh90a6e167793f33ap1d2dc3jsnb97a80e5a733',
		'x-rapidapi-host': 'kohls.p.rapidapi.com'
      },
    }
  );

  const result = response.json();
  if (response.ok) {
    return result;
  }
  throw new Error("fetch error");
}
