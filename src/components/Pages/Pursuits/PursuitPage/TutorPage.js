import React from 'react';
import styles from './PursuitPage.module.css';
import PursuitInfo from '../../../Common/PursuitInfo';

class TutorPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <div className={styles.grid}>
                    <PursuitInfo title={"Tutor"} />
                </div>
            </div>
        )
    }
}

TutorPage.propTypes = {};

export default TutorPage;