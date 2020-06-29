import React from 'react';
import styles from './PursuitPage.module.css';
import CardPage from '../../../Common/CardPage';
import PursuitInfo from '../../../Common/PursuitInfo';

class SupplementalInstructorPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <CardPage title={"Supplemental Instructor"}>
                    <div className={styles.grid}>
                        <PursuitInfo title={"Infinite monkeys are drafting this page's content."} />
                    </div>
                </CardPage>
            </div>
        )
    }
}

SupplementalInstructorPage.propTypes = {};

export default SupplementalInstructorPage;