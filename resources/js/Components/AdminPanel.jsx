import AdminPanelItemsTitle from "@/Components/SimpleComponents/AdminComponents/AdminPanelItemsTitle/AdminPanelItemsTitle";
import AdminPanelItem from "@/Components/SimpleComponents/AdminComponents/AdminPanelItem/AdminPanelItem";
import TitleStyles from "@/Components/SimpleComponents/AdminComponents/AdminPanelItemsTitle/styles/style.module.scss";

export default function AdminPanel() {
    return (
        <>
            <div class="sidebar-block">
                <a href={route('publishroom.index')} class="sidebar-block-title">Панель управления</a>
                {/* Posts menu */}
                <AdminPanelItemsTitle
                    className={TitleStyles.adminPanelItemTitlePosts}
                    title="Посты"
                />
                <AdminPanelItem
                    title="Список записей"
                    route={route('publishroom.post.index')}
                />
                <AdminPanelItem
                    title="Добавить запись"
                    route={route('publishroom.post.create')}
                />
                {/* Category menu */}
                <AdminPanelItemsTitle
                    className={TitleStyles.adminPanelItemTitleCategory}
                    title="Категории"
                />
                <AdminPanelItem
                    title="Список категорий"
                    route={route('publishroom.category.index')}
                />
                <AdminPanelItem
                    title="Добавить категорию"
                    route={route('publishroom.category.create')}
                />
                {/* Tags menu */}
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
