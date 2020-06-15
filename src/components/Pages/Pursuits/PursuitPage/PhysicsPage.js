import React from 'react';
import styles from './PursuitPage.module.css';
import PursuitInfo from '../../../Common/PursuitInfo';

class PhysicsPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <div className={styles.grid}>
                    <PursuitInfo title={"Physics"} />
                </div>
            </div>
        )
    }
}

PhysicsPage.propTypes = {};

export default PhysicsPage;