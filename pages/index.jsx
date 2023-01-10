import { Grid, } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";
import { pokeApi } from "../api";

const Home = (props) => {
  return (
    <Layout title={'Listado de Pokemons'}>
      <Grid.Container gap={2} justify='flex-start'>
        {props.pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

// solo se pueden usar dentro de las paginas
// solo se ejecutan del lado del servidor
export const getStaticProps = async (context) => {
  // todo lo que se ejecute aqui solo se ejecuta del lado del servidor
  // no se ejecuta en el cliente
  // se queda en el servidor
  console.log('lo de aqui solo se ejecuta del lado del servidor');
  /////////////////////////////////////////////////////////////////////////
  // aqui se puede hacer una peticion a una api
  const { data } = await pokeApi.get('/pokemon?limit=151');

  const pokemons = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
  }));

  return {
    // este objeto props de abajo se envian al componente de arriba
    props: {
      note: 'solo estas props llegan al cliente',
      pokemons: pokemons,
    },
  }
}


export default Home;
