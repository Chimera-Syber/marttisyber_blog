import { Link, Head } from '@inertiajs/inertia-react';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

import CreateCategoryLayout from "@/Layouts/Publishroom/Cateogory/CreateCategoryLayout";

export default function CreateCategory(props) {
    return (
        <>
            <Head title="Publish Room" />
            <Header
                auth={props.auth}/>

            <CreateCategoryLayout />

            <Footer />
        </>
    );
}
