import React, { useEffect } from "react";
import Layout from "@/Layouts/Layout";

const Shelf = (props) => {
    useEffect((props) => {
        console.log("categories page.");
    }, []);

    return (
        <>
            <div>
                <h1 className="text-blue-300 font-bold text-2xl">
                    This is Shelf page.
                </h1>
            </div>
        </>
    );
};

Shelf.layout = (page) => <Layout children={page} title="Shelf" />;

export default Shelf;
