import React from "react";
import styles from "./styles/styles.module.scss";
import {Link} from "@inertiajs/inertia-react";
export default class AdminPanelItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: (window.location.href === this.props.route)
        }
    }

    render() {
        return (
            <>
                <div className={styles.adminPanelItem}>
                    <div className={styles.blockDefault + ' ' + (this.state.active ? styles.blockActive : '')}></div>
                    <Link className={styles.title} href={this.props.route}>{this.props.title}</Link>
                </div>
            </>
        );
    }
}
