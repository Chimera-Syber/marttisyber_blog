import { Link, Head } from '@inertiajs/inertia-react';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

import CreatePostLayout from "@/Layouts/Publishroom/Post/CreatePostLayout";

export default function CreatePost(props) {
    return (
        <>
            <Head title="Publish Room" />
            <Header
                auth={props.auth}/>

            <CreatePostLayout />

            <Footer />
        </>
    );
}
