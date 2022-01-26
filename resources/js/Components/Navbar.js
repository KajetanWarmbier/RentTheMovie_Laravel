import { Link } from "@inertiajs/inertia-react";
import { RiMovie2Fill, RiUserFill } from "react-icons/ri";
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
                            className="ml-3 h-[48px] w-[290px] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-white bg-opacity-60 border-2 border-white border-opacity-70"
                        ></input>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="">
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
                    <div className="ml-10">
                        <button>
                            <NavButton
                                btnText={<RiUserFill />}
                                btnStyle="rounded-xl border-x-2 border-y-2"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
