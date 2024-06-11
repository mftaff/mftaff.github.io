import React from 'react'
import * as style from './BorderedButton.module.css'
import {Link} from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-gtag'

const BorderedButton = ({href, to, target, name}) => {

    if (to != null) {
        return (
            <Link to={to} target={target} className={style.largeButton} data-ripple="true" onClick={trackEvent}>
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

function trackEvent() {
    trackCustomEvent({
        category: "Current Pursuits Button",
        action: "Click",
        // label: "Gatsby Plugin Example Campaign",
        value: 1,
    })
}

export default BorderedButton;
