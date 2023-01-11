import { Container, Image, Text } from "@nextui-org/react"

export const NoFavorites = () => {
  return (
    <Container css={{
      display: "flex",
      flexDirection: "column",
      height: 'calc(100vh - 100px)',
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text h1>No hay favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        width={450}
        height={450}
        css={{
          opacity: 0.9,
        }}
      />
    </Container>
  )
};