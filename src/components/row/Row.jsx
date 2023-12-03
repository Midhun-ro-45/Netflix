import { List } from "./List";
import Crasol from "../carosel/CustomCarosel";
import MovieCard from "../movieCard/MovieCard";

const Row = ({ title, data }) => {
    return (
        <section>
            {title && <h2>{title}</h2>}
            {/* <Crasol data={data} /> */}
            <Crasol data={data} render={(item) => <MovieCard movie={item} />} />
        </section>
    );
};
export default Row;