import React from 'react';
import * as styles from './PursuitPage.module.css';
import CardPage from '../../../Common/CardPage';
import PursuitInfo from '../../../Common/PursuitInfo';

class PhysicsPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <CardPage title={"Physics Major"}>
                    <div className={styles.grid}>
                        <PursuitInfo
                            heading={"Lorem Ipsum Dolor"}
                            body={"Sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                            closer={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."} />
                    </div>
                </CardPage>
            </div>
        )
    }
}

PhysicsPage.propTypes = {};

export default PhysicsPage;