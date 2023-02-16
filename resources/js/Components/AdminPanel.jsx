import AdminPanelItemTitle from "@/Components/simpleComponents/adminComponents/AdminPanelItemTitle";

export default function AdminPanel() {
    return (
        <>
            <div class="sidebar-block">
                <span class="sidebar-block-title">Панель управления</span>
                <AdminPanelItemTitle
                className="admin-panel-item-title-posts"
                title="Посты"
                />
            </div>
        </>
    )
}
