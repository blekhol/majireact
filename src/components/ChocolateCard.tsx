export interface ChocolateCardProps {
    name: string,
    brand: string,
    isDark: boolean,
    cocoaPercentage: number,
    ingredients: string[]
}

function ChocolateCard(
  props: ChocolateCardProps
) {
  const hozzavalok = props.ingredients.map((ingredient) => <li>{ingredient}</li>);

  return (
    <>
      <div className="csokikartya">
        <h2>Csokoládé neve: {props.name}</h2>
        <h3>Márka: {props.brand}</h3>
        <h3 style={props.isDark ? {backgroundColor: "#333", color: "#fff"} : {backgroundColor: "#f2f2f2", color: "#000"}}>{props.isDark ? "Ez egy étcsoki" : "Ez tejcsoki vagy más típus."}</h3>
        <h3>Kakaó: {props.cocoaPercentage}%</h3>
        <div>
          <h3>Hozzávalók:</h3>
          <ul>{hozzavalok}</ul>
        </div>
      </div>
    </>
  );
}

export default ChocolateCard;
