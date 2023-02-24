import AdminPanel from "@/Components/AdminPanel";
import {useForm} from "@inertiajs/inertia-react";
import Input from "@/Components/SimpleComponents/AdminComponents/Input/Input";
import React from "react";
import styles from "./styles/style.module.scss";

export default function CreatePostLayout(props) {

    const { data, setData, errors, post} = useForm({
        title: '',
        content: '',
    })

    function handleSubmit(e) {
        e.preventDefault();
        post(route('publishroom.post.store'));

        //data.title = '';
    }

    return (
        <>
            <section class="blog-container">
                <div class="content-wrapper">
                    <div class="main-content">
                        <div class="main-content-admin-block">
                            <span class="admin-block-title">Создание поста</span>
                            <form name="createPost" onSubmit={handleSubmit}>
                                <label className={styles.label} for="title">Название</label>
                                <Input
                                    name="title"
                                    id="title"
                                    placeholder="Введите что-то"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                                <br/>
                                <label>Контент</label>
                                <br/>
                                <textarea
                                    name="content"
                                    id="content"
                                    placeholder="Content"
                                    value={data.content}
                                    onChange={(e) =>
                                        setData('content', e.target.value)
                                    }
                                >
                                </textarea>
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
