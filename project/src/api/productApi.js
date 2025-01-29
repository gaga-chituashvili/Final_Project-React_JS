export async function productApi() {
    const response = await fetch(
      `https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens`,
      {
        method: "GET",
        headers: {
          'x-rapidapi-key': '3a6b4f9f18msh7bc189fc92d5596p17004cjsn64306e8e5738',
          'x-rapidapi-host': 'kohls.p.rapidapi.com'
        }
      }
    );
  
    const result = response.json();
    if (response.ok) {
      return result;
    }
    throw new Error("fetch error");
  
  }
  
