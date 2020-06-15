import React from 'react';
import styles from './PursuitPage.module.css';
import PursuitInfo from '../../../Common/PursuitInfo';

class AfricaPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <div className={styles.grid}>
                    <PursuitInfo title={"Africa"} />
                </div>
            </div>
        )
    }
}

AfricaPage.propTypes = {};

export default AfricaPage;