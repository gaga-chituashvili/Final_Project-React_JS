export async function productApi() {
    const response = await fetch(
      `https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens`,
      {
        method: "GET",
        headers: {
          'x-rapidapi-key': '440e7b5462msh7008c9a84159ab0p1e34c7jsn44a447782ed9',
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
  
