import { Link, Head } from '@inertiajs/inertia-react';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

import PostIndexLayout from "@/Layouts/Publishroom/Post/PostIndexLayout";

export default function PostIndex(props) {
    return (
      <>
          <Head title="Post List" />
          <Header
              auth={props.auth}/>

          <PostIndexLayout/>

          <Footer />
      </>
    );
}
