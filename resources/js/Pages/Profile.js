import React, { useState } from "react";
import {
    RiUserFill,
    RiSettings4Fill,
    RiLogoutCircleRFill,
    RiQuestionFill,
} from "react-icons/ri";
import Layout from "@/Layouts/Layout";

const Profile = () => {
    const [userEmail, setUserEmail] = useState("alaKotek@gmail.com");

    const userLogout = () => {
        // do sth
    };

    return (
        <div className="w-full h-full">
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 justify-items-center gap-y-4">
                    <div className="flex justify-center items-center h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] rounded-full text-white text-opacity-90 text-center bg-white bg-opacity-60 border-opacity-70 border-2 border-white">
                        <RiUserFill className="h-[150px] w-[150px] lg:h-[200px] lg:w-[200px] text-white text-center text-opacity-90" />
                    </div>

                    <div className="font-bold text-2xl lg:text-3xl text-center mx-5 text-white text-opacity-90">
                        <p>{userEmail}</p>
                    </div>
                    <div className="flex items-center justify-start w-[200px] h-[40px] lg:w-[300px] lg:h-[55px] bg-white bg-opacity-60 rounded-xl border-2 border-white border-opacity-30 text-2xl text-white text-center font-semibold hover:bg-opacity-80 cursor-pointer">
                        <RiSettings4Fill className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px] ml-2" />
                        <p className="ml-2">Ustawienia</p>
                    </div>
                    <div className="flex items-center justify-start w-[200px] h-[40px] lg:w-[300px] lg:h-[55px] bg-white bg-opacity-60 rounded-xl border-2 border-white border-opacity-30 text-2xl text-white text-center font-semibold hover:bg-opacity-80 cursor-pointer">
                        <RiQuestionFill className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px] ml-2" />
                        <p className="ml-2">Pomoc</p>
                    </div>
                    <div
                        className="flex items-center justify-start w-[200px] h-[40px] lg:w-[300px] lg:h-[55px] bg-white bg-opacity-60 rounded-xl border-2 border-white border-opacity-30 text-2xl text-white text-center font-semibold hover:bg-opacity-80 cursor-pointer"
                        onClick={userLogout}
                    >
                        <RiLogoutCircleRFill className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px] ml-2" />
                        <p className="ml-2">Wyloguj</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Profile.layout = (page) => <Layout children={page} title="Profile" />;

export default Profile;
