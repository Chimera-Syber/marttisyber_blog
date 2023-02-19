import React from "react";
import styles from "./styles/styles.module.scss";
export default class AdminPanelItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className={styles.adminPanelItem}>
                    <div className={this.props.active ? styles.blockActive : styles.blockDefault}></div>
                    <span className={styles.title}>
                    {this.props.title}
                </span>
                </div>
            </>
        );
    }
}
