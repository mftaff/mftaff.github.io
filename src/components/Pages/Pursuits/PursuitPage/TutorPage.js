import React from 'react';
import * as styles from './PursuitPage.module.css';
import CardPage from '../../../Common/CardPage';
import PursuitInfo from '../../../Common/PursuitInfo';

class TutorPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <CardPage title={"Class Tutor | Supplemental Instructor"}>
                    <div className={styles.grid}>
                        <PursuitInfo title={"Infinite monkeys are drafting this page's content."} />
                    </div>
                </CardPage>
            </div>
        )
    }
}

TutorPage.propTypes = {};

export default TutorPage;