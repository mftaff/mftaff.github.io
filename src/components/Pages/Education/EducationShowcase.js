import React from "react";
import * as styles from './EducationShowcase.module.css'
import SchoolShowcase from "./SchoolShowcase";
import blocLogo from "../../../images/bloc_logo.png";
import gsuLogo from "../../../images/gsu_logo.png";
import decLogo from "../../../images/dec_logo.jpg";

class EducationShowcase extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <div className={styles.grid}>
                    <SchoolShowcase
                        name={"GSU - Perimeter"}
                        title={"Physics Major"}
                        location={"Atlanta, GA"}
                        imgSrc={gsuLogo}
                        gpa={"4.0"}
                        url={"https://meritpages.com/meyertaffel"}
                        target={"_blank"}
                        year={"Spring '20"}
                        status={"Enrolled"}
                    />
                    <SchoolShowcase
                        name={"Bloc.io"}
                        title={"Software Development Track"}
                        location={"Online - San Francisco, CA"}
                        imgSrc={blocLogo}
                        url={"https://www.bloc.io/"}
                        target={"_blank"}
                        year={"Jan 2018"}
                        status={"Graduated"}
                    />
                    <SchoolShowcase
                        name={"Derech Etz Chaim"}
                        title={"Talmudic Law"}
                        location={"Jerusalem, Israel"}
                        imgSrc={decLogo}
                        gpa={"4.0"}
                        url={"/education/"}
                        year={"Apr 2016"}
                        status={"Graduated"}
                    />
                </div>
            </div>
        )
    }
}

EducationShowcase.propTypes = {};

export default EducationShowcase;