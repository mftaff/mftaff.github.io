import React from 'react';
import styles from './PursuitsPage.module.css';
import PursuitShowcase from './PursuitShowcase';
import activeProject from "../../../images/active_project.png";

class PursuitsPage extends React.Component {
    render() {
        return (
            <div className={styles.projects}>
                <div className={styles.grid}>
                    <PursuitShowcase
                        title={"Act Proud Africa"}
                        tools={"Tagline goes here"}
                        image={activeProject}
                        shortDesc={"Describe your pursuit in one sharp and crisp line here."}
                        url={"/"}
                    />
                    <PursuitShowcase
                        title={"Physics Major"}
                        tools={"Tagline goes here"}
                        image={activeProject}
                        shortDesc={"Describe your pursuit in one sharp and crisp line here."}
                        url={"/"}
                    />
                    <PursuitShowcase
                        title={"Tutor Teacher"}
                        tools={"Tagline goes here"}
                        image={activeProject}
                        shortDesc={"Describe your pursuit in one sharp and crisp line here."}
                        url={"/"}
                    />
                    <PursuitShowcase
                        title={"GSU Historical Research Project"}
                        tools={"Tagline goes here"}
                        image={activeProject}
                        shortDesc={"Describe your pursuit in one sharp and crisp line here."}
                        url={"/"}
                    />
                    <PursuitShowcase
                        title={"Writing an album"}
                        tools={"Tagline goes here"}
                        image={activeProject}
                        shortDesc={"Describe your pursuit in one sharp and crisp line here."}
                        url={"/"}
                    />
                    <PursuitShowcase
                        title={"Climbing trees"}
                        tools={"Tagline goes here"}
                        image={activeProject}
                        shortDesc={"Describe your pursuit in one sharp and crisp line here."}
                        url={"/"}
                    />
                </div>
            </div>
        )
    }
}

PursuitsPage.propTypes = {};

export default PursuitsPage;