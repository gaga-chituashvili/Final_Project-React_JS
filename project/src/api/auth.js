export async function authHandler() {
  const response = await fetch(
    `https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens`,
    {
      method: "GET",
      headers: {
        'x-rapidapi-key': '2b68a7c7aamsh4e9bc19bfe15d62p1bbc33jsnf60319b38b47',
        'x-rapidapi-host': 'kohls.p.rapidapi.com'
      }
    }
  );

  const result = response.json();

  if (response.ok) {
    return result;
  }
  throw new Error(result.msg || "error messagge");

}


