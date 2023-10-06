import React from "react";
import PropTypes from 'prop-types'
import * as styles from './CardInfo.module.css'

const CardInfo = ({title, text, paragraphs}) => (
    <div>
        <p className={styles.title} >{title}</p>
        <p className={styles.text} >{text}</p>

        {paragraphs.map((p, i) => {
            return <p key={"paragraph"+i} className={styles.paragraph}>{p}</p>
        })}
    </div>
);

CardInfo.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    paragraphs: PropTypes.array.isRequired,
};

export default CardInfo;