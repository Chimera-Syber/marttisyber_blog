import { Link, Head } from '@inertiajs/inertia-react';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

import CategoryIndexLayout from "@/Layouts/Publishroom/Cateogory/CategoryIndexLayout";

export default function CategoryIndex(props) {
    return (
        <>
            <Head title="Category list" />
            <Header
                auth={props.auth}/>

            <CategoryIndexLayout />

            <Footer />
        </>
    );
}
