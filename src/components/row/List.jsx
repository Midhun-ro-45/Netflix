import "./list.css"
import MovieCard from "../movieCard/MovieCard";

const List = ({ data }) => {
    return (
        <>
            <div className="cardPosition">
                {data?.map((item, index) => (
                    <MovieCard key={index} movie={item} />
                ))}
            </div>
        </>
    );
};
export default List;