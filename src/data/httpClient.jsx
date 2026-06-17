const API = "https://rickandmortyapi.com/api";

export async function getCharacters(page = 1) {
  try {
    const response = await fetch(`${API}/character/?page=${page}`);

    if (!response.ok) {
      throw new Error("No se pudieron obtener los personajes");
    }

    return await response.json(); // Esto devuelve el objeto completo { info, results }
  } catch (error) {
    console.error("Error en la petición:", error);
    return { info: {}, results: [] }; // Retorno seguro en caso de error
  }

}
// 2. Función para los detalles 
export async function getCharacterDetails(id) {
  try {
    const response = await fetch(`${API}/character/${id}`);
    if (!response.ok) {
      throw new Error("No se pudo obtener el personaje");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener detalle:", error);
    return null;
  }
}
