import React from "react";
import * as styles from './EducationShowcase.module.css'
import SchoolShowcase from "./SchoolShowcase";
import thinkfulLogo from "../../../images/thinkful_logo.png";
import umdLogo from "../../../images/umd_logo.png";
import gsuLogo from "../../../images/gsu_logo.png";
import decLogo from "../../../images/dec_logo.jpg";

class EducationShowcase extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <div className={styles.grid}>
                    <SchoolShowcase
                        name={"University of Maryland"}
                        title={"B.S Physics"}
                        location={"College Park, MD"}
                        imgSrc={umdLogo}
                        gpa={"3.8"}
                        url={"/education/"}
                        target={"_blank"}
                        year={"Spring '24"}
                        status={"Expected"}
                    />
                    <SchoolShowcase
                        name={"Perimeter Honours College"}
                        title={"Physics"}
                        location={"Atlanta, GA"}
                        imgSrc={gsuLogo}
                        gpa={"4.0"}
                        url={"https://meritpages.com/meyertaffel"}
                        target={"_blank"}
                        year={"Spring '21"}
                        status={"Transferred"}
                    />
                    <SchoolShowcase
                        name={"Thinkful.com"}
                        title={"Software Development Track (Full Stack)"}
                        location={"Online (Formerly Bloc.io)"}
                        imgSrc={thinkfulLogo}
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