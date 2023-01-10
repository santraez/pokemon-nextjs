import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";

const PokemonPage = ({ pokemon }) => {
  return (
    <Layout title='Algun Pokemon'>
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
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between', }}>
              <Text h1 transform="capitalize">{pokemon.name}</Text>
              <Button color="gradient" ghost>
                Guardar en favoritos
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
export const getStaticPaths = async () => {
  const pokemons151 = [...Array(151)].map((_, index) => `${index + 1}`);
  return {
    paths: pokemons151.map((id) => ({
      params: { id: id, },
    })),
    fallback: false,
  };
};

//luego pasa a aqui
export const getStaticProps = async (ctx) => {
  const  { id } = ctx.params;
  const { data } = await pokeApi.get(`/pokemon/${id}`);
  return {
    props: { pokemon: data, },
  }
}

export default PokemonPage;