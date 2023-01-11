import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";

export const FavoriteCardPokemon = ({ pokemonId }) => {

  const router = useRouter();
  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`);
  };
  return (
    <Grid onClick={onFavoriteClicked} key={pokemonId} xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          alt={`Pokemon ${pokemonId}`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  );
};
