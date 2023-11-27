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
                        title={"Undergraduate Researcher"}
                        image={physicsPhoto}
                        shortDesc={"Using geophysical methods to collect and analyze data for detection/ID of near-surface anomolies."}
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
                        title={"Senior, B.S Physics"}
                        image={physicsPhoto}
                        shortDesc={"Applied Physics, R&D, Renewable Energy, Sustainability"}
                        tools={"Spring '24 | GPA 3.7"}
                        url={"/pursuits/physics"}
                    />
                    <PursuitShowcase
                        title={"sUAS Pilot"}
                        image={pilotPhoto}
                        shortDesc={"FAA-licensed sUAS pilot. (Part 107)"}
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
                        shortDesc={"Favorite Climbs:"} 
                        tools={"Critter Crack 5.6, Seneca Rocks. Frosty Cone 5.7, Joshua Tree. Superslab 5.10d, Safe Harbor."}
                        url={"/pursuits/climbing"}
                    />
                </div>
            </div>
        )
    }
}

PursuitsPage.propTypes = {};

export default PursuitsPage;