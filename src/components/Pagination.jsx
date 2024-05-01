const Pagination = ({ handleNext, handlePrevious, offset, count }) => {
// Defining a functional component called Pagination
// It takes four props: handleNext, handlePrevious, offset, and count
	return (
		<div className="pagination">
			<button onClick={handlePrevious} disabled={offset <= 0}>
				{"<"} Previous
			</button>
			<button onClick={handleNext} disabled={offset >= count?.count}>
				Next {">"}{" "}
			</button>
		</div>
	);
};

export default Pagination;
