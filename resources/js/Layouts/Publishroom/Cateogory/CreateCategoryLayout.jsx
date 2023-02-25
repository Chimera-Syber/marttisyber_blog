import AdminPanel from "@/Components/AdminPanel";
import React from "react";
import {useForm} from "@inertiajs/inertia-react";
import Input from "@/Components/SimpleComponents/AdminComponents/Input/Input";
import Textarea from "@/Components/SimpleComponents/AdminComponents/Textarea/Textarea";

export default function CreateCategoryLayout(props) {

    const { data, setData, errors, post} = useForm({
       title: '',
       description: '',
       seo_keys: '',
       seo_description: '',
    });

    function handleSubmit(e) {
        e.preventDefault();

        post(route('publishroom.category.store'));
    }

    return (
        <>
            <section className="blog-container">
                <div className="content-wrapper">
                    <div className="main-content">
                        <div className="main-content-admin-block">
                            <span className="admin-block-title">Создание категории</span>
                            <form name="createCategory" onSubmit={handleSubmit}>
                                <div className="field">
                                    <label className="label" for="title">Название</label>
                                    <Input
                                        name="title"
                                        id="title"
                                        type="text"
                                        placeholder="Введите название категории"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="field">
                                    <label className="label" for="description">Описание категории</label>
                                    <Textarea
                                        name="description"
                                        id="description"
                                        placeholder="Введите описание категории"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData("description", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="field">
                                    <label className="label" for="seo_keys">SEO Keys</label>
                                    <Textarea
                                        name="seo_keys"
                                        id="seo_keys"
                                        placeholder="Введите seo keys"
                                        value={data.seo_keys}
                                        onChange={(e) =>
                                            setData("seo_keys", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="field">
                                    <label className="label" for="seo_description">SEO Описание</label>
                                    <Textarea
                                        name="seo_description"
                                        id="seo_description"
                                        placeholder="Введите seo описание"
                                        value={data.seo_description}
                                        onChange={(e) =>
                                            setData("seo_description", e.target.value)
                                        }
                                    />
                                </div>
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
