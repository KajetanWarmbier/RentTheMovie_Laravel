import React, { useState, useEffect } from "react";
import Layout from "@/Layouts/Layout";
import MovieCard from "@/Components/MovieCard";

const Home = (props) => {
    const [pupularMoviesList, setPopularMoviesList] = useState([]);

    useEffect(() => {
        setPopularMoviesList(props.popular);
    }, []);

    return (
        <div className="h-screen overflow-auto pb-[200px] scrollbar-hide">
            <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-x-5 gap-y-12">
                {pupularMoviesList.map((movie) => {
                    return <MovieCard movieData={movie} />;
                })}
            </div>
        </div>
    );
};

Home.layout = (page) => <Layout children={page} title="Home" />;

export default Home;
