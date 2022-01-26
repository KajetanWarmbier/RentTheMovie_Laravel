import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Layout from "@/Layouts/Layout";

const Categories = (props) => {
    console.log(props.category)
    return (
        <>
            <div>
                <h1 className="text-blue-300 font-bold text-2xl">
                    This is categories page.
                </h1>
            </div>
        </>
    );
};

Categories.layout = (page) => <Layout children={page} title="Home" />;

export default Categories;
