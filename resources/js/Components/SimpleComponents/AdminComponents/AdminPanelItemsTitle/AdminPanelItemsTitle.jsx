import styles from './styles/style.module.scss';

export default function AdminPanelItemsTitle({ className, title}) {
    return (
      <span className={styles.adminPanelItemTitle + ' ' + className}>{title}</span>
    );
}
