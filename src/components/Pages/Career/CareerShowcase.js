import React from "react";
import PropTypes from 'prop-types'
import * as styles from './CareerShowcase.module.css'

class CareerShowcase extends React.Component {
    render() {
        return (
            <a
                className={styles.container}
                href={this.props.url}
                target={this.props.target}
                onMouseEnter={this.props.hoverOn}
                onMouseLeave={this.props.hoverOff}
            >
                <h3 className={styles.title}>{this.props.title}</h3>
                <hr className={styles.breakline}/>
                <div className={styles.company}>{this.props.company}</div>
                <div className={styles.dates}>{this.props.dates}</div>

                {this.props.image &&
                <img className={[ styles.image, styles[this.props.hovering ? "hidden" : "unhidden"] ].join(' ')} src={this.props.image} alt={""}/>
                }

                <div className={[ styles.desc, styles[this.props.hovering ? "hidden" : "unhidden"] ].join(' ')}>
                    <span>{this.props.shortDesc}</span>
                    <span className={styles.moreBtn}>Read more.</span>
                </div>

                <div className={[ styles.roleDesc, styles[this.props.hovering ? "unhidden" : "hidden"] ].join(' ')}>
                    {this.props.roleDesc}
                </div>
            </a>
        )
    }
}

CareerShowcase.propTypes = {
    title: PropTypes.object.isRequired,
    company: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    shortDesc: PropTypes.string,
    roleDesc: PropTypes.object,
    url: PropTypes.string,
    target: PropTypes.string,
    hovering: PropTypes.bool.isRequired
};

export default CareerShowcase;