import React from 'react'
import * as style from './FlatButton.module.css'
import { Link } from "gatsby";
import PropTypes from "prop-types";

const FlatButton = ({to, name}) => (

    <Link to={to} className={style.link} data-ripple="true">
        {name}
    </Link>

);

FlatButton.propTypes = {
    to: PropTypes.string,
    name: PropTypes.string,
};

export default FlatButton;
