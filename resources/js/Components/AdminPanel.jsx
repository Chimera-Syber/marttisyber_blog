import AdminPanelItemsTitle from "@/Components/SimpleComponents/AdminComponents/AdminPanelItemsTitle/AdminPanelItemsTitle";
import AdminPanelItem from "@/Components/SimpleComponents/AdminComponents/AdminPanelItem/AdminPanelItem";
import TitleStyles from "@/Components/SimpleComponents/AdminComponents/AdminPanelItemsTitle/styles/style.module.scss";

export default function AdminPanel() {
    return (
        <>
            <div class="sidebar-block">
                <span class="sidebar-block-title">Панель управления</span>
                <AdminPanelItemsTitle
                    className={TitleStyles.adminPanelItemTitlePosts}
                    title="Посты"
                />
                <AdminPanelItem
                    title="Список записей"
                    route={route('publishroom.index')}
                />
                <AdminPanelItem
                    title="Добавить запись"
                    route={route('publishroom.post.create')}
                />
                <AdminPanelItemsTitle
                    className={TitleStyles.adminPanelItemTitleCategory}
                    title="Категории"
                />
                <AdminPanelItemsTitle
                    className={TitleStyles.adminPanelItemTitleTag}
                    title="Теги"
                />
                <AdminPanelItemsTitle
                    className={TitleStyles.adminPanelItemTitleUser}
                    title="Пользователи"
                />
                <AdminPanelItemsTitle
                    className={TitleStyles.adminPanelItemTitleSite}
                    title="Сайт"
                />
            </div>
        </>
    )
}
