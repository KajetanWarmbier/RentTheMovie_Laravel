import React, { useState } from "react";
import Layout from "@/Layouts/Layout";
import { IconContext } from "react-icons";
import { RiMovie2Fill } from "react-icons/ri";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const emailInput = (event) => {
        setEmail(event.target.value);
    };

    const passwordInput = (event) => {
        setPassword(event.target.value);
    };

    const passwordRepeatInput = (event) => {
        setPasswordRepeat(event.target.value);
    };

    const signUp = () => {
        // do sth here
    };

    const submitSignUp = () => {
        // do sth here
        if (password === passwordRepeat) {
            // do sth
            console.log("Działa");
        }
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
                    <div>
                        <input
                            type="password"
                            placeholder="Repeat Password"
                            onChange={passwordRepeatInput}
                            className="w-[200px] h-[40px] lg:w-[300px] lg:h-[55px] mb-2 placeholder-slate-400 bg-white bg-opacity-60 rounded-xl border-2 border-white border-opacity-30"
                        ></input>
                    </div>
                    <button
                        className="w-[150px] h-[30px] lg:w-[200px] lg:h-[40px] my-2 bg-white bg-opacity-80 rounded-xl border-2 border-white border-opacity-60 hover:bg-opacity-90 text-lg font-semibold "
                        onClick={submitSignUp}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

Signup.layout = (page) => <Layout children={page} title="Signup" />;

export default Signup;
