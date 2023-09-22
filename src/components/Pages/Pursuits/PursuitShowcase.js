import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import * as styles from './PursuitShowcase.module.css';

class PursuitShowcase extends React.Component {
    render() {
        return (
            <Link className={styles.container} to={this.props.url} data-ripple="true">
                <h3 className={styles.title}>{this.props.title}</h3>
                <hr className={styles.breakline}/>

                {this.props.image &&
                <img className={styles.image} src={this.props.image} alt={""}/>
                }

                <div className={styles.desc}>
                    {this.props.shortDesc}
                </div>
                <div className={styles.tools}>
                    {this.props.tools}
                </div>
            </Link>
        )
    }
}

PursuitShowcase.propTypes = {
    title: PropTypes.string.isRequired,
    tools: PropTypes.string,
    image: PropTypes.string.isRequired,
    shortDesc: PropTypes.string,
    location: PropTypes.string,
    url: PropTypes.string.isRequired,
    code: PropTypes.string
};

export default PursuitShowcase;