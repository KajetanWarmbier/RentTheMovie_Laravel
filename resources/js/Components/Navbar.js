import { Link } from "@inertiajs/inertia-react";
import { RiMovie2Fill, RiUserFill, RiCloseFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { useState } from "react";
import NavButton from "./NavButton";
import DropdownBurger from "./DropdownBurger";
import DropdownCategories from "./DropdownCategories";

const Navbar = () => {
    const [inputValue, setInputValue] = useState("");
    const [profileDestinations, setProfileDestinations] = useState("/signin");

    // useEffect(() => {
    //     if (ZALOGOWANY) {
    //         setProfileDestinations("/profile");
    //     }
    // });

    const handleSearchInput = (event) => {
        setInputValue(event.target.value);
    };

    const resetSearchInput = () => {
        setInputValue("");
    };

    return (
        <div className="h-[60px] w-full mt-7">
            <div className="flex items-center justify-between xl:mx-28 mx-5">
                <div className="flex items-center">
                    <RiMovie2Fill className="float-left h-[50px] w-[50px] text-white opacity-80" />
                    <h1 className="font-semibold text-[46px] text-white opacity-80 lg:visible invisible lg:w-fit lg:h-fit w-[0px] h-[0px]">
                        RTM
                    </h1>
                    <div className="flex mx-2 lg:mx-8">
                        <div>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="h-[48px] w-[166] rounded-xl lg:rounded-none lg:rounded-l-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-white bg-opacity-60 border-2 border-white border-opacity-70 lg:w-[242px]"
                                value={inputValue}
                                onChange={handleSearchInput}
                            ></input>
                        </div>
                        <button
                            className="flex items-center justify-center h-0 w-0 invisible lg:visible lg:h-[48px] lg:w-[48px] rounded-r-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-white bg-opacity-60 border-y-2 border-r-2 border-white border-opacity-70 hover:bg-opacity-80 cursor-pointer"
                            onClick={resetSearchInput}
                        >
                            <IconContext.Provider
                                value={{
                                    color: "rgba(255, 255, 255, 0.8)",
                                    size: "35px",
                                    style: { verticalAlign: "middle" },
                                }}
                            >
                                <RiCloseFill />
                            </IconContext.Provider>
                        </button>
                    </div>
                </div>

                <div>
                    <div className="flex items-center visible lg:invisible lg:w-[0px] lg:h-[0px]">
                        <DropdownBurger />
                    </div>
                    <div className="flex items-center invisible w-[0px] h-[0px] lg:visible lg:w-fit lg:h-fit">
                        <div className="flex">
                            <Link href="/">
                                <NavButton
                                    btnText="HOME"
                                    btnStyle="rounded-l-xl border-l-2 border-y-2"
                                />
                            </Link>

                            <DropdownCategories />

                            <Link href="/shelf">
                                <NavButton
                                    btnText="SHELF"
                                    btnStyle="border-y-2"
                                />
                            </Link>
                            <Link href="/notes">
                                <NavButton
                                    btnText="NOTES"
                                    btnStyle="rounded-r-xl border-r-2 border-y-2"
                                />
                            </Link>
                        </div>
                        <Link href={profileDestinations}>
                            <div className="flex items-center justify-center ml-6 bg-white bg-opacity-60 h-[48px] w-[48px] rounded-xl border-2 border-white border-opacity-30 cursor-pointer hover:bg-opacity-70">
                                <IconContext.Provider
                                    value={{
                                        color: "rgba(255, 255, 255, 0.8)",
                                        size: "30px",
                                        style: { verticalAlign: "middle" },
                                    }}
                                >
                                    <RiUserFill />
                                </IconContext.Provider>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
