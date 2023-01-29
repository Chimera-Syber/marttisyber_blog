import { Link, Head } from '@inertiajs/inertia-react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

import MainLayout from "@/Layouts/Blog/MainLayout";

export default function Home(props) {
    return (
        <>
            <Head title="Martti Syber Blog"/>
            <Header
            auth={props.auth}/>
            <MainLayout />
            <Footer />
        </>
    );
}
