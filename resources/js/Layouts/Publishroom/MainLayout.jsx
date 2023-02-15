import AdminPanel from "@/Components/AdminPanel";

export default function MainLayout(props) {
    return (
        <>
            <section class="blog-container">
                <div class="content-wrapper">
                    <div class="main-content">
                        <div class="main-content-admin-block">
                            <span class="admin-block-title">Панель управления блогом</span>
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
