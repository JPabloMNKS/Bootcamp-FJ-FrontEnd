import  {getPokemonImageUri, pokemonColorMap} from './utils';
import PokemonCard from './pokemonCard';


fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=45")
.then((response) => response.json())
.then((pokemons) => {
  pokemons.results.forEach((pokemon, index) => {
    const card = document.createElement("poke-card");
    const backgroundColor = pokemonColorMap[index + 1];
    const color = backgroundColor[1] === "f" ? "#000" : "#fff";
    card.setAttribute("id", index + 1);
    card.setAttribute("name", pokemon.name);
    card.setAttribute("image", getPokemonImageUri(index + 1));
    card.setAttribute("backgroundColor", backgroundColor);
    card.setAttribute("text-color", color);
    document.getElementById("poke_container").appendChild(card);
  });

  customElements.define("poke-card", PokemonCard);
});