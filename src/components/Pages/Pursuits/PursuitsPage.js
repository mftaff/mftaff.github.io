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
                      title={"Pursuit Name"}
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