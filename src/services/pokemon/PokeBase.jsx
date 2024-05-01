import { useEffect, useState } from "react";
import PokemonList from "../../components/PokemonList";
import SideView from "../../components/SideView";
import Pagination from "../../components/Pagination";
import {
	useGetAllPokemonQuery,
	useGetMoreDetailsQuery,
	useGetRangeDataQuery,
} from "./pokemonSlice";
import Loading from "../../components/Loading";

const PokeBase = () => {
	const responseInfo = useGetAllPokemonQuery();  // Using the useGetAllPokemonQuery hook to fetch all Pokemon
	
	const [data, setData] = useState([]);
	const [offset, setOffset] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [detailsId, setDetailsId] = useState(Math.ceil(Math.random() * 19).toString());

	const moreDetails = useGetMoreDetailsQuery(detailsId);
	const nextPrevData = useGetRangeDataQuery(offset);

	// When the responseInfo changes, setting the data and loading state
	useEffect(() => {
		responseInfo.isSuccess && setData(responseInfo.data?.results);
		setIsLoading(responseInfo.isLoading);
	}, [responseInfo]);
	// When the nextPrevData or offset changes, setting the data and loading state
	
	useEffect(() => {
		nextPrevData.isSuccess && setData(nextPrevData.data?.results);
		setIsLoading(nextPrevData.isLoading);
	}, [nextPrevData, offset]);

	// Defining the handlePrevious and handleNext functions for pagination
	const handlePrevious = () => {
		setIsLoading(true);
		setOffset((prev) => offset >= 20 && prev - 20);
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	const handleNext = () => {
		setIsLoading(true);
		setOffset((prev) => offset + 20 <= responseInfo.currentData?.count && prev + 20);
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	if (responseInfo.isError) return <h2 className="error-heading">An error occurred, {responseInfo.error.error}</h2>;
   
	// Returning the main component, which includes the PokemonList, Pagination, and SideView components
	return (
		<div className="row">
			<div className="column-6 button-view">
				{isLoading ? <Loading /> : <PokemonList data={data} setDetailsId={setDetailsId} />}
				<Pagination
					handleNext={handleNext}
					handlePrevious={handlePrevious}
					offset={offset}
					count={responseInfo.data}
				/>
			</div>
			<div className="column-6 content-view">
				<SideView moreDetails={moreDetails} />
			</div>
		</div>
	);
};

export default PokeBase;
