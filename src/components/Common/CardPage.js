import PropTypes from 'prop-types'
import React from "react";
import * as styles from './CardPage.module.css';

const CardPage = ({title, imgLink, text, children}) => (
    <div className={styles.card}>
        {title &&
        <div>
            <div className={styles.card_top}>
                <h1 className={styles.display1}> {title}</h1>
            </div>
            <hr/>
        </div>
        }

        {text}

        {imgLink &&
        <div className={styles.card_image}>
            <img className={styles.img}
                 src={imgLink}
                 alt={""}/>
        </div>
        }
        {children}
    </div>
);

CardPage.propTypes = {
    title: PropTypes.string,
    imgLink: PropTypes.string,
    text: PropTypes.string,
    width: PropTypes.number,
};

export default CardPage;