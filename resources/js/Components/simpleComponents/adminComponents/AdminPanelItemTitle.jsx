export default function AdminPanelItemTitle({ className, title}) {
    return (
      <span className={'admin-panel-item-title ' + className}>{title}</span>
    );
}
