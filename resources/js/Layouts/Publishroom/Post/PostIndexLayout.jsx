import AdminPanel from "@/Components/AdminPanel";
import React from "react";


export default function PostIndexLayout(props) {
    return (
        <>
            <section className="blog-container">
                <div className="content-wrapper">
                    <div className="main-content">
                        <div className="main-content-admin-block">
                            <span className="admin-block-title">Список постов</span>

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
