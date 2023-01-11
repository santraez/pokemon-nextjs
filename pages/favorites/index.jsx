import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import localFavorites from '../../utils/localFavorites';

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState([]);
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);
  return (
    <Layout title="Favorites">
      <NoFavorites />
    </Layout>
  );
};

export default FavoritesPage;