import React from 'react';
import styles from './PursuitPage.module.css';
import CardPage from '../../../Common/CardPage';
import PursuitInfo from '../../../Common/PursuitInfo';

class PhysicsPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <CardPage title={"Physics Major"}>
                    <div className={styles.grid}>
                        <PursuitInfo title={"Infinite monkeys are drafting this page's content."} />
                    </div>
                </CardPage>
            </div>
        )
    }
}

PhysicsPage.propTypes = {};

export default PhysicsPage;