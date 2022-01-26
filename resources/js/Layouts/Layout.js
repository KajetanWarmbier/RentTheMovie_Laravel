import React, { useEffect } from "react";
import Navbar from "@/Components/Navbar";

export default function Layout({ children }) {
    return (
        <main>
            <div className="fixed h-screen w-screen bg-gradient-to-b from-[#BAABF4] to-[#417ED7]/[50]">
                <Navbar />
                <div className="mt-5 mx-5 lg:mt-5 lg:mx-28">
                    <article>{children}</article>
                </div>
            </div>
        </main>
    );
}
