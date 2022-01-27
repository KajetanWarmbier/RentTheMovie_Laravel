import React, { useState } from "react";
import Layout from "@/Layouts/Layout";
import { RiMovie2Fill } from "react-icons/ri";
import { Link } from "@inertiajs/inertia-react";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailInput = (event) => {
        setEmail(event.target.value);
    };

    const passwordInput = (event) => {
        setPassword(event.target.value);
    };

    const signIn = () => {
        // do sth here
    };

    const submitSignIn = () => {
        // do sth here
    };

    return (
        <div className="w-full h-full">
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 justify-items-center">
                    <div>
                        <RiMovie2Fill className="h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] text-white text-opacity-90 text-center" />

                        <p className="text-[70px] lg:text-[90px] text-white text-opacity-90 text-center">
                            RTM
                        </p>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="E-mail"
                            onChange={emailInput}
                            className="w-[200px] h-[40px] lg:w-[300px] lg:h-[55px] placeholder-slate-400 bg-white bg-opacity-60 rounded-xl border-2 border-white border-opacity-30"
                        ></input>
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={passwordInput}
                            className="w-[200px] h-[40px] lg:w-[300px] lg:h-[55px] my-2 placeholder-slate-400 bg-white bg-opacity-60 rounded-xl border-2 border-white border-opacity-30"
                        ></input>
                    </div>
                    <button
                        className="w-[150px] h-[30px] lg:w-[200px] lg:h-[40px] my-2 bg-white bg-opacity-80 rounded-xl border-2 border-white border-opacity-60 hover:bg-opacity-90 text-lg font-semibold "
                        onClick={submitSignIn}
                    >
                        Sign In
                    </button>
                    <Link href="/signup">
                        <a className="text-white text-xs cursor-pointer">
                            Don't have account? Sign Up!
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Signin.layout = (page) => <Layout children={page} title="Signin" />;

export default Signin;
