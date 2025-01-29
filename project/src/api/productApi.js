export async function productApi() {
    const response = await fetch(
      `https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens`,
      {
        method: "GET",
        headers: {
          'x-rapidapi-key': 'c0a7f3c104msh8b91d66fdf2ef76p185c6djsn0795cba25ed9',
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
  
