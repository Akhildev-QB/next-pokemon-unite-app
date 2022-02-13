import Link from 'next/link';

const PokemonPage = () => {
  const pokemonList = [
    {
      id: '1',
      name: 'Aegislash',
      range: 'Melee',
      difficulty: 'Expert',
      role: 'All-Rounder'
    },
    {
      id: '2',
      name: 'Absol',
      range: 'Melee',
      difficulty: 'Expert',
      role: 'Speedster'
    },
    {
      id: '3',
      name: 'Blastoise',
      range: 'Ranged',
      difficulty: 'Intermediate',
      role: 'Defender'
    },
    {
      id: '4',
      name: 'Blissey',
      range: 'Melee',
      difficulty: 'Novice',
      role: 'Supporter'
    },
    {
      id: '5',
      name: 'Charizard',
      range: 'Melee',
      difficulty: 'Novice',
      role: 'All-Rounder'
    },
    {
      id: '6',
      name: 'Cinderace',
      range: 'Ranged',
      difficulty: 'Novice',
      role: 'Attacker'
    },
    {
      id: '7',
      name: 'Cramorant',
      range: 'Ranged',
      difficulty: 'Expert',
      role: 'Attacker'
    },
    {
      id: '8',
      name: 'Crustle',
      range: 'Melee',
      difficulty: 'Novice',
      role: 'Defender'
    },
    {
      id: '9',
      name: 'Decidueye',
      range: 'Ranged',
      difficulty: 'Intermediate',
      role: 'Attacker'
    },
    {
      id: '10',
      name: 'Dragonite',
      range: 'Ranged',
      difficulty: 'Novice',
      role: 'All-Rounder'
    },
    {
      id: '11',
      name: 'Eldegoss',
      range: 'Ranged',
      difficulty: 'Novice',
      role: 'Supporter'
    },
    {
      id: '12',
      name: 'Garchomp',
      range: 'Melee',
      difficulty: 'Intermediate',
      role: 'All-Rounder'
    },
    {
      id: '13',
      name: 'Gardevoir',
      range: 'Ranged',
      difficulty: 'Intermediate',
      role: 'Attacker'
    },
    {
      id: '14',
      name: 'Gengar',
      range: 'Melee',
      difficulty: 'Expert',
      role: 'Speedster'
    },
    {
      id: '15',
      name: 'Greedent',
      range: 'Melee',
      difficulty: 'Expert',
      role: 'Defender'
    },
    {
      id: '16',
      name: 'Greninja',
      range: 'Ranged',
      difficulty: 'Expert',
      role: 'Attacker'
    },
    {
      id: '17',
      name: 'Lucario',
      range: 'Melee',
      difficulty: 'Expert',
      role: 'All-Rounder'
    },
    {
      id: '18',
      name: 'Machamp',
      range: 'Melee',
      difficulty: 'Intermediate',
      role: 'All-Rounder'
    },
    {
      id: '19',
      name: 'Mamoswine',
      range: 'Melee',
      difficulty: 'Intermediate',
      role: 'Defender'
    },
    {
      id: '20',
      name: 'Mr.Mime',
      range: 'Melee',
      difficulty: 'Intermediate',
      role: 'Supporter'
    },
    {
      id: '21',
      name: 'Ninetales',
      range: 'Ranged',
      difficulty: 'Intermediate',
      role: 'Attacker'
    },
    {
      id: '22',
      name: 'Pikachu',
      range: 'Ranged',
      difficulty: 'Novice',
      role: 'Attacker'
    },
    {
      id: '23',
      name: 'Slowbro',
      range: 'Ranged',
      difficulty: 'Intermediate',
      role: 'Defender'
    },
    {
      id: '24',
      name: 'Snorlax',
      range: 'Melee',
      difficulty: 'Novice',
      role: 'Defender'
    },
    {
      id: '25',
      name: 'Sylveon',
      range: 'Ranged',
      difficulty: 'Intermediate',
      role: 'Attacker'
    },
    {
      id: '26',
      name: 'Talonflame',
      range: 'Melee',
      difficulty: 'Novice',
      role: 'Speedster'
    },
    {
      id: '27',
      name: 'Trevenant',
      range: 'Melee',
      difficulty: 'Intermediate',
      role: 'Defender'
    },
    {
      id: '28',
      name: 'Tsareena',
      range: 'Melee',
      difficulty: 'Expert',
      role: 'All-Rounder'
    },
    {
      id: '29',
      name: 'Venusaur',
      range: 'Ranged',
      difficulty: 'Intermediate',
      role: 'Attacker'
    },
    {
      id: '30',
      name: 'Wigglytuff',
      range: 'Melee',
      difficulty: 'Intermediate',
      role: 'Supporter'
    },
    {
      id: '31',
      name: 'Zeraora',
      range: 'Melee',
      difficulty: 'Expert',
      role: 'Speedster'
    }
  ];

  return (
    <div>
      <h1>Pokemon Page</h1>
      <ul>
        {pokemonList.map((pokemon) => {
          return (
            <li key={pokemon.id}>
              <Link href={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PokemonPage;
