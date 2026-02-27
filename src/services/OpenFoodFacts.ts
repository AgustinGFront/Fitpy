export type OpenFood = {
  id: string;
  name: string;
  caloriesPer100g: number;
};

export async function searchOpenFoodFacts(
  query: string
): Promise<OpenFood[]> {
  try {
    if (query.length < 2) return [];

    const res = await fetch(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(
        query
      )}&search_simple=1&action=process&json=1&page_size=10`
    );

    const json = await res.json();

    if (!json.products) return [];

    return json.products
      .filter((p: any) => p.nutriments?.energy_kcal_100g)
      .map((p: any) => ({
        id: p.code,
        name: p.product_name || "Producto sin nombre",
        caloriesPer100g: Math.round(
          p.nutriments.energy_kcal_100g
        ),
      }));
  } catch (e) {
    console.log("OpenFoodFacts error", e);
    return [];
  }
}
