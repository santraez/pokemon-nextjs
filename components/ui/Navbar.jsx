import Image from "next/image";
import NextLink from "next/link";
import { Spacer, Text, useTheme } from "@nextui-org/react";

export const Navbar = () => {
  const { theme, } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        padding: '0 20px',
        backgroundColor: theme.colors.gray300.value,
      }}
    >
      <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png" width={70} height={70} alt="icono de la app" />
      <NextLink href="/">
        <Text css={{ margin: '0' }} color="white" h3>Pokemon</Text>
      </NextLink>
      <Spacer css={{ flex: .7, }} />
      <NextLink href="/favorites">
        <Text css={{ textTransform: 'uppercase', marginTop: '7px',fontWeight: '700' }} color="white">favorites</Text>
      </NextLink>
    </div>
  );
};