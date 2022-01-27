import React, { useState } from "react";
import Layout from "@/Layouts/Layout";

const Profile = () => {
    return (
        <div className="w-full h-full">
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 justify-items-center">
                    <circle className="bg-white h-[40px] w-[40px]"></circle>
                </div>
            </div>
        </div>
    );
};

Profile.layout = (page) => <Layout children={page} title="Profile" />;

export default Profile;
