import React from "react";
import styles from "./styles/style.module.scss";

export default class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <input
                    className={styles.input}
                    name={this.props.name}
                    id={this.props.id}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                />
            </>
        );
    }
}
