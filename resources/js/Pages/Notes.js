import React, { useEffect } from "react";
import Layout from "@/Layouts/Layout";

const Notes = (props) => {
    useEffect((props) => {
        console.log("categories page.");
    }, []);

    return (
        <>
            <div>
                <h1 className="text-blue-300 font-bold text-2xl">
                    This is Notes page.
                </h1>
            </div>
        </>
    );
};

Notes.layout = (page) => <Layout children={page} title="Notes" />;

export default Notes;
