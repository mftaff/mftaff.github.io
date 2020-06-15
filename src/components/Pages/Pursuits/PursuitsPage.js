import React from 'react';
import styles from './PursuitsPage.module.css';
import PursuitShowcase from './PursuitShowcase';
import actProudAfricaPhoto from "../../../images/pursuits/actProudAfrica.jpg";
import assistantshipPhoto from "../../../images/pursuits/assistantship.jpg";
import musicianPhoto from "../../../images/pursuits/musician.jpeg";
import treeClimbingPhoto from "../../../images/pursuits/treeClimbing.jpeg";
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
                        shortDesc={"Collates my interest in clean water/solar technologies, space exploration, and quantum computing."}
                        url={"/pursuits/physics"}
                    />
                    <PursuitShowcase
                        title={"Class Tutor"}
                        image={tutorPhoto}
                        shortDesc={"My response to Coronavirus shutting down GSU? Creating and teaching an online class of 25+"}
                        url={"/pursuits/tutor"}
                    />
                    <PursuitShowcase
                        title={"Act Proud Africa"}
                        image={actProudAfricaPhoto}
                        shortDesc={"My initative to pair young Africans with inspirational mentors."}
                        url={"/pursuits/africa"}
                    />
                    <PursuitShowcase
                        title={"GSU Assistantship Program"}
                        image={assistantshipPhoto}
                        shortDesc={"Working to highlight GSU Perimeter's history as a place of opportunity for all."}
                        url={"/pursuits/research"}
                    />
                    <PursuitShowcase
                        title={"Musician"}
                        image={musicianPhoto}
                        shortDesc={"Music connects us and inspires us to shine. It uplifts us and motivates us to soar."}
                        url={"/pursuits/music"}
                    />
                    <PursuitShowcase
                        title={"Tree Climbing Enthusiast"}
                        image={treeClimbingPhoto}
                        shortDesc={"What better way is there to stay fit and appreciate nature than to hang out in the treetops?"}
                        url={"/pursuits/climbing"}
                    />
                </div>
            </div>
        )
    }
}

PursuitsPage.propTypes = {};

export default PursuitsPage;