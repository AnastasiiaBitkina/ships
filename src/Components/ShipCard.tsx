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

interface ShipCardProps {
  ship: ShipData;
}

const ShipCard: React.FC<ShipCardProps> = ({ ship }) => {
  return (
    <div className="ship-card">
      <img src={ship.icons.large} alt={ship.title} />
      <h3>{ship.title}</h3>
      <ul>
        <li>Class: {ship.type.title}</li>
        <li>Nation: {ship.nation.title}</li>
        <li>Level: {ship.level}</li>
        <li>Description: {ship.description}</li>
      </ul>
    </div>
  );
}

export default ShipCard;
