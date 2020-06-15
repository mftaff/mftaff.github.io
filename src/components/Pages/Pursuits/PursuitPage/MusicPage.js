import React from 'react';
import styles from './PursuitPage.module.css';
import PursuitInfo from '../../../Common/PursuitInfo';

class MusicPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <div className={styles.grid}>
                    <PursuitInfo title={"Mucis"} />
                </div>
            </div>
        )
    }
}

MusicPage.propTypes = {};

export default MusicPage;