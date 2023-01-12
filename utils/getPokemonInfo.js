import { pokeApi } from "../api";

const getPokemonInfo = async (nameOrId) => {
  try {
    const { data } = await pokeApi.get(`/pokemon/${nameOrId}`);
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    return null;
  };
};

export default getPokemonInfo;