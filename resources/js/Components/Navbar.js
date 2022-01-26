import { Link } from "@inertiajs/inertia-react";
import { RiMovie2Fill } from "react-icons/ri";
import NavButton from "./NavButton";

const Navbar = () => {
    return (
        <div className="h-[60px] w-full mt-7">
            <div className="flex items-center justify-between mx-28">
                <div className="flex items-center">
                    <RiMovie2Fill className="float-left h-[50px] w-[50px] text-white opacity-80" />
                    <h1 className="font-semibold text-[46px] text-white opacity-80">
                        RTM
                    </h1>
                    <div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="ml-3 h-[48px] w-[290px] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-white border-opacity-60"
                        ></input>
                    </div>
                </div>
                <div className="">
                    <div>
                        <NavButton btnText="HOME" btnStyle="rounded-l-xl" />
                        <NavButton btnText="CATEGORIES" btnStyle="" />
                        <NavButton btnText="SHELF" btnStyle="" />
                        <NavButton btnText="NOTES" btnStyle="rounded-r-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
