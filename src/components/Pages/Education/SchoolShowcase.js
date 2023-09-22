import React from "react";
import PropTypes from 'prop-types'
import * as styles from './SchoolShowcase.module.css'

class SchoolShowcase extends React.Component {
    render() {
        return (
            <a className={styles.container} href={this.props.url} target={this.props.target}>
                <div className={styles.date}>
                    <span className={styles.year}>{this.props.year}</span>
                    <span className={styles.status}>{this.props.status}</span>
                </div>
                <img className={styles.uniLogo}
                     src={this.props.imgSrc}
                     alt={""}/>
                <div className={styles.infoWrapper}>
                    <div className={styles.uniName}>
                        {this.props.name}
                    </div>
                    <div className={styles.uniLocation}>
                        {this.props.location}
                    </div>
                    <hr/>
                    <div className={styles.uniInfo}>{this.props.title}</div>
                    {this.props.gpa &&
                    <div className={styles.uniGPA}>GPA: {this.props.gpa}</div>}
                </div>
            </a>
        )
    }
}

SchoolShowcase.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    status: PropTypes.string,
    gpa: PropTypes.string,
    url: PropTypes.string,
    target: PropTypes.string,
    imgSrc: PropTypes.string
};

export default SchoolShowcase;