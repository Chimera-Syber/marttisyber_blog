import { Link, Head } from '@inertiajs/inertia-react';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

import MainLayout from "@/Layouts/Publishroom/MainLayout";

export default function Publishroom(props) {
    return (
        <>
            <Head title="Publish Room" />
            <Header
            auth={props.auth}/>

            <MainLayout />

            <Footer />
        </>
    );
}
