import React from 'react';
import * as styles from './CareerPage.module.css';
import CareerShowcase from './CareerShowcase';
import umdLogo from "../../../images/pursuits/umdLogo241x174.png"
import temp from "../../../images/theroadboomer.png";
import wekkaSite from "../../../images/wekka_site.png";
import bearfaceSite from "../../../images/bearface_site.png";

class CareerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            researchHovering: false,
            freelanceHovering: false,
            wekkaHovering: false,
            bearfaceHovering: false,
        }
    }

    hoverResearchHandler = () => {
        this.setState({researchHovering: !this.state.researchHovering})
    }

    hoverFreelanceHandler = () => {
        this.setState({freelanceHovering: !this.state.freelanceHovering})
    }

    hoverWekkaHandler = () => {
        this.setState({wekkaHovering: !this.state.wekkaHovering})
    }
    
    hoverBearfaceHandler = () => {
        this.setState({bearfaceHovering: !this.state.bearfaceHovering})
    }

    render() {
        return (
            <div className={styles.career}>
                <div className={styles.grid}>
                    <CareerShowcase
                        title={
                            <div>
                                <span>Remote Sensing</span>
                                <span>Data Analysis</span>
                            </div>
                        }
                        company={"Lathrop Labs @ UMD"}
                        dates={"Summer 2022 - Present"}
                        image={umdLogo}
                        shortDesc={
                            "Lab member focusing on R&D for drone-based applied physics/geophysics."
                        }
                        roleDesc={
                            <div className={styles.roleDesc}>
                                <p>Research Responsibilities</p>
                                <ul>
                                    <li>Development of landing gear and payload integration. CAD (Fusion360, AutoCad), RPT, CFRP FDM, Machining</li>
                                    <li>Using Magnetic Gradiometry and burial depth data inversions to locate subsurface anomalies. Matlab, Python, QGIS, Leafmap.</li>
                                    <li>Part-107 pilot</li>
                                    <li><small>Taffel, M., et al. Use of Magnetic Gradiometry for near surface detection and mapping. (In preparation).</small></li>
                                </ul>
                            </div>
                        }
                        url={"https://complex.umd.edu/"}
                        target={"_blank"}
                        hovering={this.state.researchHovering}
                        hoverOn={this.hoverResearchHandler}
                        hoverOff={this.hoverResearchHandler}
                    />
                    <CareerShowcase
                        title={
                            <div>
                                <span>Freelance</span>
                                <span>Web Developer</span>
                            </div>
                        }
                        company={"Freelance | Upwork.com"}
                        dates={"Aug 2019 - Fall 2021"}
                        image={temp}
                        shortDesc={
                            "Freelancer specializing in creating niche solutions for those" +
                            " times when website generators fall short."}
                        roleDesc={
                            <div className={styles.roleDesc}>
                                <p>Notable Projects:</p>
                                <ul>
                                    <li>TotalDietetics
                                        <br></br>
                                        <i>Diet Planner imbedded in a Wix site.</i>
                                    </li>
                                    <li>The Road Boomer
                                        <br></br>
                                        <i>Photojournalist's online presence.</i>
                                    </li>
                                    <li>PictureBuild
                                        <br></br>
                                        <i>Landcaping companies' quote generating portal.</i>
                                    </li>
                                    <li>Todd Boss Originals
                                        <br></br>
                                        <i>Artists' blog. (backend only)</i>
                                    </li>
                                </ul>
                            </div>
                        }
                        url={"https://www.upwork.com/fl/meyertaffel"}
                        target={"_blank"}
                        hovering={this.state.freelanceHovering}
                        hoverOn={this.hoverFreelanceHandler}
                        hoverOff={this.hoverFreelanceHandler}
                    />
                    <CareerShowcase
                        title={
                        <div>
                            <span>Co Founder</span>
                            <span>Director of R&amp;D</span>
                        </div>
                        }
                        company={"Wekka.co"}
                        dates={"Dec 2017 - Mar 2019"}
                        image={wekkaSite}
                        shortDesc={
                            "As co-founder I had a hand in all aspects of growing an MVP. Primarily responsible for software dev."
                        }
                        roleDesc={
                            <div className={styles.roleDesc}>
                                <p>Founder Responsibilities:</p>
                                <ul>
                                    <li>Developed business strategy and kept Wekka on target.</li>
                                    <li>Grew Wekka to over 1k users in the first 6 months of operations.</li>
                                </ul>
                                <p>Technical Responsibilities:</p>
                                <ul>
                                    <li>Designed and coded matching algorithm I.P.</li>
                                    <li>Chiefly responsible for developing all aspects of our stack. <small>(Rails/PostgreSQL/Bootstrap/Jquery).</small></li>
                                </ul>
                            </div>
                        }
                        // url={"https://wekka-staging.herokuapp.com"}
                        target={"_blank"}
                        hovering={this.state.wekkaHovering}
                        hoverOn={this.hoverWekkaHandler}
                        hoverOff={this.hoverWekkaHandler}
                    />
                    <CareerShowcase
                        title={
                            <div>
                                <span>Full Stack Web</span>
                                <span>Developer</span>
                            </div>
                        }
                        company={"BearFace Media"}
                        dates={"Nov 2017 - Mar 2018"}
                        image={bearfaceSite}
                        shortDesc={
                            "First foray into full-stack web dev after completing an 18 month bootcamp."
                        }
                        roleDesc={
                            <div className={styles.roleDesc}>
                                <p>Responsibilities:</p>
                                <ul>
                                    <li>Worked directly with clients to customize UI for their needs.</li>
                                    <li>Developed the scheduler & quote generator for BF’s app suite.</li>
                                    <li>Updated old source code to bring it in-line with modern best-practices.</li>
                                </ul>
                            </div>
                        }
                        // url={"https://www.bearface.io/"}
                        target={"_blank"}
                        hovering={this.state.bearfaceHovering}
                        hoverOn={this.hoverBearfaceHandler}
                        hoverOff={this.hoverBearfaceHandler}
                    />
                </div>
            </div>
        )
    }
}

CareerPage.propTypes = {};

export default CareerPage;