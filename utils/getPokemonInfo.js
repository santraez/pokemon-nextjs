import { pokeApi } from "../api";

const getPokemonInfo = async (nameOrId) => {
  const { data } = await pokeApi.get(`/pokemon/${nameOrId}`);
  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};

export default getPokemonInfo;