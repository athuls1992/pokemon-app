import { useGetMoreDetailsQuery } from "../services/pokemon/pokemonSlice";

const SinglePokemon = ({ pokemon, setDetailsId }) => {
	    // Using the useGetMoreDetailsQuery hook to get more details about the pokemon
	const moreInfo = useGetMoreDetailsQuery(pokemon.name);

	return (
		 // The component returns a div that, when clicked, sets the details ID to the pokemon's name
        // and scrolls to the top of the page if the window's inner width is less than or equal to 500
		<div
			onClick={() => {
				setDetailsId(pokemon.name);
				window.innerWidth <= 500 &&
					window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
			}}
			className="single-pokemon"
		>
			<img
				src={
					moreInfo.data?.sprites?.front_default ||
					moreInfo.data?.sprites?.other?.["official-artwork"]?.front_default ||
					moreInfo?.data?.sprites?.front_default
				}
				alt="indicator-img"
				loading="lazy"
			/>
			<p>{pokemon.name}</p>
		</div>
	);
};

export default SinglePokemon;
