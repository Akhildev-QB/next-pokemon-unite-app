import { useRouter, withRouter } from 'next/router';

const PokemonDetailsPage = () => {
  const router = useRouter();
  const { pokemonId } = router.query;

  return (
    <div>
      <h1>Pokemon Details Page</h1>
      <p>{pokemonId}</p>
    </div>
  );
};

export default PokemonDetailsPage;
