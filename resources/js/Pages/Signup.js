import React, { useState } from "react";
import Layout from "@/Layouts/Layout";
import { RiMovie2Fill } from "react-icons/ri";
import { useForm } from "@inertiajs/inertia-react";
import route from "ziggy-js";

const Signup = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        password_confirmation: "",
    });

    function submit(e) {
        e.preventDefault();
        if (password === password_confirmation) {
            post(route("user.create"));
        }
    }

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

                    <form onSubmit={submit}>
                        <div>
                            <input
                                type="text"
                                name="email"
                                value={data.email}
                                placeholder="E-mail"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="w-[200px] h-[40px] lg:w-[300px] lg:h-[55px] placeholder-slate-400 bg-white bg-opacity-60 rounded-xl border-2 border-white border-opacity-30"
                            ></input>
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                value={data.password}
                                placeholder="Password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="w-[200px] h-[40px] lg:w-[300px] lg:h-[55px] my-2 placeholder-slate-400 bg-white bg-opacity-60 rounded-xl border-2 border-white border-opacity-30"
                            ></input>
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                placeholder="Confirm Password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                className="w-[200px] h-[40px] lg:w-[300px] lg:h-[55px] mb-2 placeholder-slate-400 bg-white bg-opacity-60 rounded-xl border-2 border-white border-opacity-30"
                            ></input>
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-[150px] h-[30px] lg:w-[200px] lg:h-[40px] my-2 bg-white bg-opacity-80 rounded-xl border-2 border-white border-opacity-60 hover:bg-opacity-90 text-lg font-semibold "
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

Signup.layout = (page) => <Layout children={page} title="Signup" />;

export default Signup;
