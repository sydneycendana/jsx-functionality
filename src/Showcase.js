import pokeImage from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <h2>
        {favPokemon} is a{" "}
        <span style={{ backgroundColor: "green", color: "white" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        and their move is{" "}
        <span style={{ backgroundColor: "white", color: "green" }}>
          {pokeCharacteristics.move}
        </span>
      </h2>
      <img src={pokeImage} alt={favPokemon}></img>
    </div>
  );
}

export default Showcase;
