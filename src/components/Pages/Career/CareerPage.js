import React from 'react';
import styles from './CareerPage.module.css';
import CareerShowcase from './CareerShowcase';
import activeProject from "../../../images/active_project.png";

class CareerPage extends React.Component {
  render() {
      return (
          <div className={styles.projects}>
              <div className={styles.grid}>
                  <CareerShowcase
                      title={"Career Title"}
                      tools={"Company"}
                      image={activeProject}
                      shortDesc={"Job Description / Responsibilities"}
                      url={"/"}
                  />
              </div>
          </div>
      )
  }
}

CareerPage.propTypes = {};

export default CareerPage;