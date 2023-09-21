import React from "react";
import PropTypes from 'prop-types'
import * as styles from './CardInfo.module.css'

const CardInfo = ({title, text, choice1, choice2, choice3}) => (
    <div>
        <p className={styles.title} >{title}</p>
        <p className={styles.text} >{text}</p>
        <p className={styles.choice1} >{choice1}</p>
        <p className={styles.choice2} >{choice2}</p>
        <p className={styles.choice3} >{choice3}</p>
    </div>
);

CardInfo.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    choice1: PropTypes.string.isRequired,
    choice2: PropTypes.string.isRequired,
    choice3: PropTypes.string.isRequired,
};

export default CardInfo;