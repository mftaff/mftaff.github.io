import React from 'react';
import * as styles from './PursuitsPage.module.css';
import PursuitShowcase from './PursuitShowcase';
import actProudAfricaPhoto from "../../../images/pursuits/actProudAfrica.jpg";
import freelancePhoto from "../../../images/pursuits/freelancing.png";
import musicianPhoto from "../../../images/pursuits/porchGuitar.jpg";
import climbingPhoto from "../../../images/pursuits/rockClimbing.jpg";
import tutorPhoto from "../../../images/pursuits/tutor.png";
import physicsPhoto from "../../../images/pursuits/physics.jpg";

class PursuitsPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <div className={styles.grid}>
                    <PursuitShowcase
                        title={"Physics Major"}
                        image={physicsPhoto}
                        shortDesc={"Exploring clean water/solar technologies, space exploration, and quantum computing."}
                        tools={"Honors | 4.0 GPA"}
                        url={"/pursuits/physics"}
                    />
                    <PursuitShowcase
                        title={"Freelance Web Developer"}
                        image={freelancePhoto}
                        shortDesc={"Creating crisp, intuitive, and engaging websites."}
                        url={"/pursuits/freelancing"}
                    />
                    <PursuitShowcase
                        title={"Act Proud Africa"}
                        image={actProudAfricaPhoto}
                        shortDesc={"My initative to pair young Africans with inspirational mentors."}
                        url={"/pursuits/africa"}
                    />
                    <PursuitShowcase
                        title={"Undergraduate Researcher"}
                        image={tutorPhoto}
                        shortDesc={"Developing a method to 3d print a wireframe of a parametric surface using a node/edge graph."}
                        url={"/pursuits/research"}
                    />
                    <PursuitShowcase
                        title={"Musician"}
                        image={musicianPhoto}
                        shortDesc={"Music connects us and inspires us to shine. It uplifts us and motivates us to soar."}
                        url={"/pursuits/music"}
                    />
                    <PursuitShowcase
                        title={"Climbing Enthusiast"}
                        image={climbingPhoto}
                        shortDesc={"Where you'll find me on a Spring weekend...or Fall weekend...or any free chance I get :) "}
                        url={"/pursuits/climbing"}
                    />
                </div>
            </div>
        )
    }
}

PursuitsPage.propTypes = {};

export default PursuitsPage;