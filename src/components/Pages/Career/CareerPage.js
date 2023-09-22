import React from 'react';
import * as styles from './CareerPage.module.css';
import CareerShowcase from './CareerShowcase';
import temp from "../../../images/theroadboomer.png";
import wekkaSite from "../../../images/wekka_site.png";
import bearfaceSite from "../../../images/bearface_site.png";

class CareerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            freelanceHovering: false,
            wekkaHovering: false,
            bearfaceHovering: false,
        }
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
                                <span>Freelance</span>
                                <span>Web Developer</span>
                            </div>
                        }
                        company={"Freelancing | Upwork.com"}
                        dates={"Aug 2019 - Present"}
                        image={temp}
                        shortDesc={
                            "Freelancing has afforded me the ability to continue to" +
                            " develop stunning sites while leaving me the flexibility" +
                            " to engage in my educational pursuits. Using Upwork.com," +
                            " I have found a niche creating custom solutions for those" +
                            " times when website generators fall short."}
                        roleDesc={
                            <div className={styles.roleDesc}>
                                <p>Notable Projects:</p>
                                <ul>
                                    <li>The Road Boomer
                                        <br></br>
                                        <i>A photojournalist's online presence.</i>
                                    </li>
                                    <li>PictureBuild
                                        <br></br>
                                        <i>A landcaping companies' quote generating portal.</i>
                                    </li>
                                    <li>Todd Boss Originals
                                        <br></br>
                                        <i>An artists' blog. (backend only)</i>
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
                            "Wekka was a digital marketer recruitment platform." +
                            " Using smart matching algorithms and an intuitive" +
                            " hiring UI, Wekka took the friction out of recruitment." +
                            " Wekka also provided digital marketers a sharp canvas with" +
                            " which to highlight their talents."}
                        roleDesc={
                            <div className={styles.roleDesc}>
                                <p>Founder Responsibilities:</p>
                                <ul>
                                    <li>Developed business strategy and kept Wekka on target.</li>
                                    <li>Developed marketing roadmap targeting early adopters.</li>
                                    <li>Developed sales strategy and led implementation.</li>
                                </ul>
                                <p>Technical Responsibilities:</p>
                                <ul>
                                    <li>Created application specific matching algorithm.</li>
                                    <li>Built and managed backend using Rails/PostgreSQL.</li>
                                    <li>Built and managed frontend using Bootstrap/Jquery.</li>
                                </ul>
                            </div>
                        }
                        url={"https://wekka-staging.herokuapp.com"}
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
                            "Bearface Media is a tech firm that utilizes modern" + 
                            " intuitive design and cloud based infrastructure to" +
                            " build custom-fit software solutions. From customer-facing" +
                            " web apps to internal scheduling tools, Bearface Media" +
                            " specializes in delivering quality solutions."}
                        roleDesc={
                            <div className={styles.roleDesc}>
                                <p>Responsibilities:</p>
                                <ul>
                                    <li>Worked with clients to customize their UI for specific needs.</li>
                                    <li>Developed the online scheduling component of BearFace’s app suite.</li>
                                    <li>Developed the quote generating component of BearFace’s app suite.</li>
                                    <li>Updated old source code to bring it in-line with modern best-practices.</li>
                                </ul>
                            </div>
                        }
                        url={"https://www.bearface.io/"}
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