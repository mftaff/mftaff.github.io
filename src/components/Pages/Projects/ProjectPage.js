import React from "react";
import styles from './ProjectPage.module.css'
import ProjectShowcase from "./ProjectShowcase";
import websitePic from "../../../images/meyertaffel_site_snapshot.png";
import actsWebsite from "../../../images/ACTS_site.png";
import wekkaWebsite from "../../../images/wekka_site.png";
import wekkaForm from "../../../images/wekka_form.png";
import wekkaCRM from "../../../images/wekka_crm.png";
import comingSoon from "../../../images/coming_soon.png";
import activeProject from "../../../images/active_project.png";

class ProjectPage extends React.Component {
    render() {
        return (
            <div className={styles.projects}>
                <div className={styles.grid}>
                    <ProjectShowcase
                        title={"Wekka.co"}
                        tools={"Rails, Jquery, Bootstrap, Postgres"}
                        image={wekkaWebsite}
                        shortDesc={"Online recruitment platform for digital marketers."}
                        url={"https://wekka-staging.herokuapp.com"}
                    />
                    <ProjectShowcase
                        title={"Interactive CRM"}
                        tools={"Ruby on Rails, Jquery UI, Bootstrap"}
                        image={wekkaCRM}
                        shortDesc={"Interactive Customer Relations Manager for applicant tracking."}
                        url={"https://wekka-staging.herokuapp.com"}
                    />
                    <ProjectShowcase
                        title={"ACTS International"}
                        tools={"Wix"}
                        image={actsWebsite}
                        shortDesc={"NonProfit's web presence."}
                        url={"https://africanteams.wixsite.com/acts-international"}
                    />
                    <ProjectShowcase
                        title={"Node.js project"}
                        tools={"Node.js, React"}
                        image={activeProject}
                        shortDesc={"Showcasing latest tech trends."}
                        url={"/projects"}
                    />
                    <ProjectShowcase
                        title={"Personal Website"}
                        tools={"Dev Ops - React, Gatsby"}
                        image={websitePic}
                        shortDesc={"Personal Website build using the power of Dev Ops and Open Source."}
                        url={"https://github.com/mftaff/meyertaffel"}
                    />
                    <ProjectShowcase
                        title={"OrphansUganda"}
                        tools={"Wix"}
                        image={activeProject}
                        shortDesc={"Opening doors for Ugandan orphans to be educated."}
                        url={"/projects"}
                    />
                    <ProjectShowcase
                        title={"Sign Up Form"}
                        tools={"Ruby on Rails, Jquery, Bootstrap"}
                        image={wekkaForm}
                        shortDesc={"Collect the data you need without overwhelming your user."}
                        url={"https://wekka-staging.herokuapp.com"}
                    />
                </div>
            </div>
        )
    }
}

ProjectPage.propTypes = {};

export default ProjectPage;