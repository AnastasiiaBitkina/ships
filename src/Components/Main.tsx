import ShipCard from "./ShipCard";
import { useQuery } from '@apollo/client';
import { GET_VEHICLES } from '../graphql/queries';

function Main() {
    const { loading, error, data } = useQuery(GET_VEHICLES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    const shipData = data.vehicles[0];

    return (

        <div>
            <ShipCard ship={shipData} />
        </div>
    )
}

export default Main;