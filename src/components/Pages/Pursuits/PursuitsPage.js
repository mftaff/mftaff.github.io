import React from 'react';
import * as styles from './PursuitsPage.module.css';
import PursuitShowcase from './PursuitShowcase';
import AfricaPhoto from "../../../images/pursuits/kidsWaving.png";
import climbingPhoto from "../../../images/pursuits/rockClimbingFlipped.png";
import pilotPhoto from "../../../images/pursuits/dronePilot.png";
import physicsPhoto from "../../../images/pursuits/umdLogo241x174.png";
import octagearPhoto from "../../../images/pursuits/AltaXLanded.png";

class PursuitsPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <div className={styles.grid}>
                    <PursuitShowcase
                        title={"Research Assistant"}
                        image={physicsPhoto}
                        shortDesc={"Use of Magnetic Gradiometry and trans-dimensional inversion modeling to locate subsurface anomalies."}
                        url={"/pursuits/research"}
                    />
                    <PursuitShowcase
                        title={"Octagear & Payload Integration"}
                        image={octagearPhoto}
                        shortDesc={"Development of landing gear and payload integration package."}
                        tools={"CAD (Fusion360, AutoCad), RPT, CFRP FDM, Machining"}
                        url={"/pursuits/freelancing"}
                    />
                    <PursuitShowcase
                        title={"B.SC Physics"}
                        image={physicsPhoto}
                        shortDesc={"Applied Physics, R&D, Manufacturing, UAVs"}
                        tools={"Spring '24 | GPA 3.8"}
                        url={"/pursuits/physics"}
                    />
                    <PursuitShowcase
                        title={"Part-107 Pilot"}
                        image={pilotPhoto}
                        shortDesc={"FAA-licensed sUAS pilot"}
                        tools={""}
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
                        shortDesc={"Favorite Crags:"} 
                        tools={"Seneca Rocks, J-Tree, RRG"}
                        url={"/pursuits/climbing"}
                    />
                </div>
            </div>
        )
    }
}

PursuitsPage.propTypes = {};

export default PursuitsPage;