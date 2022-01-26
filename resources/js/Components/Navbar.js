import { Link } from "@inertiajs/inertia-react";
import { RiMovie2Fill, RiUserFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import NavButton from "./NavButton";

const Navbar = () => {
    return (
        <div className="h-[60px] w-full mt-7">
            <div className="flex items-center justify-between xl:mx-28 mx-5">
                <div className="flex items-center">
                    <RiMovie2Fill className="float-left h-[50px] w-[50px] text-white opacity-80" />
                    <h1 className="font-semibold text-[46px] text-white opacity-80 lg:visible invisible lg:w-fit lg:h-fit w-[0px] h-[0px]">
                        RTM
                    </h1>
                    <div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="mx-2 h-[48px] w-[214px] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-white bg-opacity-60 border-2 border-white border-opacity-70 lg:w-[290px] lg:mx-8"
                        ></input>
                    </div>
                </div>

                <div className="flex items-center visible lg:invisible lg:w-[0px] lg:h-[0px]">
                    <div className="h-[48px] w-[48px] bg-white bg-opacity-60 rounded-lg border-2 border-white border-opacity-30 hover:bg-opacity-70"></div>
                </div>

                <div className="flex items-center invisible w-[0px] h-[0px] lg:visible lg:w-fit lg:h-fit">
                    <div>
                        <NavButton
                            btnText="HOME"
                            btnStyle="rounded-l-xl border-l-2 border-y-2"
                        />
                        <NavButton btnText="CATEGORIES" btnStyle="border-y-2" />
                        <NavButton btnText="SHELF" btnStyle="border-y-2" />
                        <NavButton
                            btnText="NOTES"
                            btnStyle="rounded-r-xl border-r-2 border-y-2"
                        />
                    </div>
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
                </div>
            </div>
        </div>
    );
};

export default Navbar;
