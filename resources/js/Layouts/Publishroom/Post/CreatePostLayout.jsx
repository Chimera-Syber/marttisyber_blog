import AdminPanel from "@/Components/AdminPanel";
import {useForm} from "@inertiajs/inertia-react";


export default function CreatePostLayout(props) {

    const { data, setData, errors, post} = useForm({
        title: '',
    })

    function handleSubmit(e) {
        e.preventDefault();
        post(route('publishroom.post.store'));

        data.title = '';
    }

    return (
        <>
            <section class="blog-container">
                <div class="content-wrapper">
                    <div class="main-content">
                        <div class="main-content-admin-block">
                            <span class="admin-block-title">Создание поста</span>
                            <form name="createPost" onSubmit={handleSubmit}>
                                <label>Название</label>
                                <input
                                    name="title"
                                    id="title"
                                    placeholder="Введите что-то"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                                <br/>
                                <button type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                    <div class="sidebar">
                        <AdminPanel/>
                    </div>
                </div>
            </section>
        </>
    );
}
