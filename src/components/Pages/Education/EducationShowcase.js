import React from "react";
import styles from './EducationShowcase.module.css'
import SchoolShowcase from "./SchoolShowcase";
import blocLogo from "../../../images/bloc_logo.png";

class EducationShowcase extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <div className={styles.grid}>
                    <SchoolShowcase
                        name={"Bloc.io"}
                        title={"Software Development Track"}
                        location={"Online - San Francisco, CA"}
                        imgSrc={blocLogo}
                        year={2018}
                        month={"Jan"}
                    />
                </div>
            </div>
        )
    }
}

EducationShowcase.propTypes = {};

export default EducationShowcase;