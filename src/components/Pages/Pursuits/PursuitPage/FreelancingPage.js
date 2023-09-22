import React from 'react';
import * as styles from './PursuitPage.module.css';
import CardPage from '../../../Common/CardPage';
import PursuitInfo from '../../../Common/PursuitInfo';

class Freelancing extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <CardPage title={"Freelance Web Developer"}>
                    <div className={styles.grid}>
                        <PursuitInfo title={"Infinite monkeys are drafting this page's content."} />
                    </div>
                </CardPage>
            </div>
        )
    }
}

Freelancing.propTypes = {};

export default Freelancing;