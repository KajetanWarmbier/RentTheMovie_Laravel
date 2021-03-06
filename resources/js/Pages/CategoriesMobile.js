import React, { useEffect } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import route from "ziggy-js";
import Layout from "@/Layouts/Layout";

const CategoriesMobile = (props) => {
    const genresList = [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Family" },
        { id: 14, name: "Fantasy" },
        { id: 36, name: "History" },
        { id: 27, name: "Horror" },
        { id: 10402, name: "Music" },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Science Fiction" },
        { id: 10770, name: "TV Movie" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "War" },
        { id: 37, name: "Western" },
    ];

    return (
        <div className="h-screen overflow-auto pb-[200px] scrollbar-hide">
            <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-x-1 gap-y-8">
                {genresList.map((genre) => {
                    return (
                        <Link href={route("categories.show", { id: genre.id })}>
                            <div className="flex items-center justify-center w-[200px] h-[40px] lg:w-[250px] lg:h-[50px] bg-white bg-opacity-60 rounded-xl border-2 border-white border-opacity-30 text-2xl text-white text-center font-semibold hover:bg-opacity-80 cursor-pointer">
                                {genre.name}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

CategoriesMobile.layout = (page) => (
    <Layout children={page} title="CategoriesMobile" />
);

export default CategoriesMobile;
