import { RiMenuFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { Menu } from "@headlessui/react";

const DropdownBurger = () => {
    return (
        <div className="flex justify-items-end">
            <Menu as="relative">
                <Menu.Button className="flex items-center justify-center h-[48px] w-[48px] bg-white bg-opacity-60 rounded-lg border-2 border-white border-opacity-30 hover:bg-opacity-70">
                    <IconContext.Provider
                        value={{ color: "white", size: "30px" }}
                    >
                        <RiMenuFill />
                    </IconContext.Provider>
                </Menu.Button>

                <Menu.Items className="origin-top-right absolute right-0 mt-4 mr-5 px-2 w-fit shadow-lg bg-white bg-opacity-60 rounded-xl border-2 border-white border-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-xl">
                    <div className="py-1">
                        <Menu.Item>
                            <div className="groip flex items-center px-4 py-3 text-xl font-semibold border-b-2 border-white border-opacity-30  text-white backdrop-filter-none backdrop-blur-none">
                                HOME
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <div className="groip flex items-center px-4 py-3 text-xl font-semibold border-b-2 border-white border-opacity-30  text-white backdrop-filter-none backdrop-blur-none">
                                CATEGORIES
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <div className="groip flex items-center px-4 py-3 text-xl font-semibold border-b-2 border-white border-opacity-30  text-white backdrop-filter-none backdrop-blur-none">
                                SHELF
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <div className="groip flex items-center px-4 py-3 text-xl font-semibold border-b-2 border-white border-opacity-30  text-white backdrop-filter-none backdrop-blur-none">
                                NOTES
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <div className="groip flex items-center px-4 py-3 text-xl font-semibold text-white">
                                PROFILE
                            </div>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Menu>
        </div>
    );
};

export default DropdownBurger;
