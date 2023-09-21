import React from 'react'
import * as style from './BorderedButton.module.css'
import Link from 'gatsby';

const BorderedButton = ({href, to, target, name}) => {

    if (to != null) {
        return (
            <Link to={to} target={target} className={style.largeButton} data-ripple="true">
                <h3 className={style.text}>
                    {name}
                </h3>
            </Link>
        );
    } else {
        return (
            <a href={href} target={target} className={style.largeButton} data-ripple="true">
                <h3 className={style.text}>
                    {name}
                </h3>
            </a>
        );
    }
};

export default BorderedButton;
