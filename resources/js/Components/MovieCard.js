import { RiAddCircleFill } from "react-icons/ri";
import { IconContext } from "react-icons";

const MovieCard = (props) => {
    return (
        <div className="h-[366px] w-[230px] rounded-xl border-2 border-white border-opacity-60 bg-white bg-opacity-30">
            <img
                className="h-[300px] w-[230px] rounded-t-xl object-cover"
                src={`https://image.tmdb.org/t/p/w500${props.movieData.poster_path}`}
                alt="Movie"
            />
            <div className="grid grid-cols-4 h-[66px] w-[230px] items-center px-1 justify-items-center">
                <div
                    className="col-span-2 max-w-[230px] font-semibold text-white text-sm text-center line-clamp-3"
                    title={props.movieData.title}
                >
                    {props.movieData.title}
                </div>
                <div className="flex h-[40px] w-[40px] items-center justify-center cursor-pointer">
                    <IconContext.Provider
                        value={{ color: "white", size: "40px" }}
                    >
                        <RiAddCircleFill />
                    </IconContext.Provider>
                </div>
                <div className="flex h-[40px] w-[40px] rounded-xl border-2 border-white border-opacity-60 bg-white bg-opacity-30 text-center text-white text-2xl items-center justify-center">
                    {props.movieData.vote_average * 10}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
