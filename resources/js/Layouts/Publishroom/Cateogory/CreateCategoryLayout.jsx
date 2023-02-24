import AdminPanel from "@/Components/AdminPanel";
import React from "react";
import styles from "./styles/style.module.scss";
import {useForm} from "@inertiajs/inertia-react";

export default function CreateCategoryLayout(props) {

    const { data, setData, errors, post} = useForm({
       title: '',
       description: '',
       seo_keys: '',
       seo_description: '',
    });

    return (
        <>
            <section class="blog-container">
                <div class="content-wrapper">
                    <div class="main-content">
                        <div class="main-content-admin-block">
                            <span class="admin-block-title">Создание категории</span>
                            <form name="createCategory">
                                <label className={styles.label} for="title">Название</label>
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
