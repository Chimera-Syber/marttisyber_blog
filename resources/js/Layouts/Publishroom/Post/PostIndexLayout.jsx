import styles from "@/Layouts/Publishroom/Cateogory/styles/style.module.scss";
import AdminPanel from "@/Components/AdminPanel";
import React from "react";


export default function PostIndexLayout(props) {
    return (
        <>
            <section class="blog-container">
                <div class="content-wrapper">
                    <div class="main-content">
                        <div class="main-content-admin-block">
                            <span class="admin-block-title">Список постов</span>

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
