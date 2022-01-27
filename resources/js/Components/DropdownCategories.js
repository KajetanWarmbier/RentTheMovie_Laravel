import { Menu } from "@headlessui/react";
import { Link } from "@inertiajs/inertia-react";

const DropdownCategories = () => {
    const genresList = [
        "HORROR",
        "ACTION",
        "ROMANCE",
        "THRILLER",
        "ANIMATION",
        "ADVENTURE",
        "COMEDY",
        "CRIME",
        "DOCUMENTARY",
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
                                    <div className="group flex items-center px-4 py-3 m-1 text-xl font-semibold border-1 border-white border-opacity-30  text-white backdrop-filter-none backdrop-blur-none rounded-xl hover:bg-opacity-10 hover:bg-black">
                                        {genre}
                                    </div>
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
