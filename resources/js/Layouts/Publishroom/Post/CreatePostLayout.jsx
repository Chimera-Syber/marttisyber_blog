import AdminPanel from "@/Components/AdminPanel";
import {useForm} from "@inertiajs/inertia-react";
import Input from "@/Components/SimpleComponents/AdminComponents/Input/Input";
import Textarea from "@/Components/SimpleComponents/AdminComponents/Textarea/Textarea";
import React from "react";

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
            <section className="blog-container">
                <div className="content-wrapper">
                    <div className="main-content">
                        <div className="main-content-admin-block">
                            <span className="admin-block-title">Создание поста</span>
                            <form name="createPost" onSubmit={handleSubmit}>
                                <label className="label" for="title">Название</label>
                                <Input
                                    name="title"
                                    id="title"
                                    type="text"
                                    placeholder="Введите что-то"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                                <label className="label" for="content">Контент</label>
                                <Textarea
                                    name="content"
                                    id="content"
                                    placeholder="Content"
                                    value={data.content}
                                    onChange={(e) =>
                                        setData('content', e.target.value)
                                    }
                                >
                                </Textarea>
                                <button type="submit" className="button is-primary">Сохранить</button>
                            </form>
                        </div>
                    </div>
                    <div className="sidebar">
                        <AdminPanel/>
                    </div>
                </div>
            </section>
        </>
    );
}
