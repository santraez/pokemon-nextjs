import { useState } from "react";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { Layout } from "../../components/layouts";
import localFavorites from "../../utils/localFavorites";
import getPokemonInfo from "../../utils/getPokemonInfo";

const PokemonPage = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id));
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
    if (isInFavorites) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 0.885,
        y: 0.04,
      },
    });
  };

  /*
  este console log no encuentra LOcalStorage porqeu se ejecuta en servidor
  console.log({ existeWindow: typeof window !== 'undefined' })

  useEffect(() => {
    //este console log si encuentra LOcalStorage porqeu se ejecuta en cliente
    console.log({ existeWindow: typeof window !== 'undefined' })
  }, []);
  */

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px', }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px', }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'} 
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header className='button-favorite__container' css={{ display: 'flex', justifyContent: 'space-between', }}>
              <Text h1 transform="capitalize">{pokemon.name}</Text>
              <Button
                onPress={onToggleFavorite}
                color="gradient"
                ghost={!isInFavorites}
              >
                {isInFavorites ? "En favoritos" : "Guardar en favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image 
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image 
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image 
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image 
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

//primero sucede esto
export const getStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((_, index) => `${index + 1}`);
  return {
    paths: pokemons151.map((id) => ({
      params: { id: id, },
    })),
    //fallback: false,
    fallback: 'blocking',
  };
};

//luego pasa a aqui
export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const pokemon = await getPokemonInfo(id)
  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  };
  return {
    props: { pokemon: pokemon, },
    revalidate: 86400, //24 horas
  };
};

export default PokemonPage;