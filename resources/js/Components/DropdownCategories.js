import { Menu } from "@headlessui/react";
import { Link } from "@inertiajs/inertia-react";
//import route from "vendor/tightenco/ziggy/src/js";
import route from 'ziggy-js';
//import Ziggy from './Ziggy';

const DropdownCategories = () => {
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
        <div className="flex justify-items-end">
            <Menu as="relative">
                <Menu.Button className="h-[48px] w-fit px-4 font-semibold text-white bg-white bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-xl border-white border-opacity-70 border-y-2 hover:bg-opacity-80">
                    CATEGORIES
                </Menu.Button>
                <Menu.Items className="origin-top-right absolute right-0 mt-4 mr-[92px] xl:mr-[184px] px-2 w-fit shadow-lg bg-white bg-opacity-60 rounded-xl border-2 border-white border-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-xl">
                    <div className="grid grid-cols-3 py-1">
                        {genresList.map((genre) => {
                            return (
                                <Menu.Item>
                                    <Link href={route('categories.show', {id: genre.id})}>
                                        <div className="group flex items-center px-4 py-3 m-1 text-xl font-semibold border-1 border-white border-opacity-30  text-white backdrop-filter-none backdrop-blur-none rounded-xl hover:bg-opacity-10 hover:bg-black">
                                            {genre.name}
                                        </div>
                                    </Link>
                                </Menu.Item>
                            );
                        })}
                    </div>
                </Menu.Items>
            </Menu>
        </div>
    );
};

export default DropdownCategories;
