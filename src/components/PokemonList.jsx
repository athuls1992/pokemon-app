import SinglePokemon from "./SinglePokemon";

// It takes two props: data (an array of Pokemon) and setDetailsId (a function to set the ID of the Pokemon to show details for)
const PokemonList = ({ data, setDetailsId }) => {
	return (
		// The component returns a div with the class "pokemon-list"
		<div className="pokemon-list">
			{data.map((pokemon, i) => ( // The key prop is set to the index of the Pokemon in the array
                // The pokemon prop is set to the current Pokemon
                // The setDetailsId prop is passed through from the PokemonList props
				<SinglePokemon key={i} pokemon={pokemon} setDetailsId={setDetailsId} />
			))}
		</div>
	);
};

export default PokemonList;
