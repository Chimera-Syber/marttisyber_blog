import AdminPanel from "@/Components/AdminPanel";
import Pagination from "@/Components/SimpleComponents/AdminComponents/Pagination/Pagination";
import React from "react";


export default function CategoryIndexLayout(props) {

    console.log(props.categories.data);
    console.log(props.categories.links);
    return (
        <>
            <section className="blog-container">
                <div className="content-wrapper">
                    <div className="main-content">
                        <div className="main-content-admin-block">
                            <span className="admin-block-title">Список категорий</span>
                                <table className="admin-content-table">
                                    <tr className="admin-content-tr">
                                        <td className="admin-content-td admin-content-table-title">Id</td>
                                        <td className="admin-content-td admin-content-table-title">Title</td>
                                        <td className="admin-content-td admin-content-table-title">Slug</td>
                                        <td className="admin-content-td admin-content-table-title">Links</td>
                                    </tr>


                                    {props.categories.data.map(({ id, title, slug}) => (
                                        <tr className="admin-content-tr">
                                            <td className="admin-content-td">{id}</td>
                                            <td className="admin-content-td">{title}</td>
                                            <td className="admin-content-td">{slug}</td>
                                            <td className="admin-content-td">Links</td>
                                        </tr>
                                    ))}
                                </table>

                                <Pagination className="mt-6" links={props.categories.links}/>
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
