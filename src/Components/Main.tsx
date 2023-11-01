import { useState } from 'react';
import ShipCard from './ShipCard';
import { useQuery } from '@apollo/client';
import { GET_VEHICLES } from '../graphql/queries';
import { fakeData } from './FakeData'
import '../Styles/main.css'

interface ShipData {
  title: string;
  description: string;
  icons: {
    large: string;
    medium: string;
  };
  level: number;
  type: {
    name: string;
    title: string;
    icons: {
      default: string;
    };
  };
  nation: {
    name: string;
    title: string;
    color: string;
    icons: {
      small: string;
      medium: string;
      large: string;
    };
  };
}

function Main() {
  const { loading, error, data } = useQuery(GET_VEHICLES);
  const [searchQuery, setSearchQuery] = useState<string>('');

  let ships: ShipData[] = [];

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error(`Error: ${error.message}`);
    console.log('Use fake data');
    ships = fakeData.vehicles;
  } else {
    ships = data.vehicles;
  }

  const filteredShips = ships.filter((ship) => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    const titleMatch = ship.title.toLowerCase().includes(lowerCaseSearchQuery);
    const descriptionMatch = ship.description.toLowerCase().includes(lowerCaseSearchQuery);
    const nationMatch = ship.nation.name.toLowerCase().includes(lowerCaseSearchQuery);
    const levelMatch = ship.level.toString().includes(searchQuery);
    const classMatch = ship.type.title.toLowerCase().includes(lowerCaseSearchQuery);
    return titleMatch || descriptionMatch || nationMatch || levelMatch || classMatch;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search ships"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredShips.length > 0 ? (
        filteredShips.map((ship) => (
          <ShipCard key={ship.title} ship={ship} />
        ))
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
}


export default Main;
