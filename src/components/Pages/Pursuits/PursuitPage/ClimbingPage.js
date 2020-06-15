import React from 'react';
import styles from './PursuitPage.module.css';
import PursuitInfo from '../../../Common/PursuitInfo';

class ClimbingPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <div className={styles.grid}>
                    <PursuitInfo title={"Climbing"} />
                </div>
            </div>
        )
    }
}

ClimbingPage.propTypes = {};

export default ClimbingPage;