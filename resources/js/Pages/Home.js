import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Layout from "@/Layouts/Layout";

const Home = (props) => {
    console.log(props.popular);
    return (
        <>
            <div>
                <h1 className="text-blue-300 font-bold text-2xl">
                    This is just a test!
                </h1>
            </div>
        </>
    );
};

Home.layout = (page) => <Layout children={page} title="Home" />;

export default Home;
