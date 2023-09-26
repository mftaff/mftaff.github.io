import React from 'react';
import * as styles from './PursuitsPage.module.css';
import PursuitShowcase from './PursuitShowcase';
import AfricaPhoto from "../../../images/pursuits/kidsWaving.png";
import freelancePhoto from "../../../images/pursuits/freelancing.png";
import climbingPhoto from "../../../images/pursuits/rockClimbingFlipped.png";
import tutorPhoto from "../../../images/pursuits/tutor.png";
import pilotPhoto from "../../../images/pursuits/uasController.png";
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
                        title={"Undergraduate Researcher"}
                        image={tutorPhoto}
                        shortDesc={"Developing a method to 3d print a wireframe of a parametric surface using a node/edge graph."}
                        url={"/pursuits/research"}
                    />
                    <PursuitShowcase
                        title={"sUAS Pilot"}
                        image={pilotPhoto}
                        shortDesc={"FAA-certified sUAS pilot."}
                        url={"/pursuits/pilot"}
                    />
                    <PursuitShowcase
                        title={"ACTS International"}
                        image={AfricaPhoto}
                        shortDesc={"Coordinator of U.S Chapter providing education for young Ugandans."}
                        url={"/pursuits/africa"}
                    />
                    <PursuitShowcase
                        title={"Rock Climber"}
                        image={climbingPhoto}
                        shortDesc={"Climbs: Critter Crack 5.6, Seneca. Frosty Cone 5.7, Joshua Tree. Superslab 5.10d, Safe Harbor."}
                        url={"/pursuits/climbing"}
                    />
                </div>
            </div>
        )
    }
}

PursuitsPage.propTypes = {};

export default PursuitsPage;