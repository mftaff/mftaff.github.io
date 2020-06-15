import React from "react";
import PropTypes from 'prop-types';
import styles from './PursuitInfo.module.css';
import BorderedButton from '../Common/BorderedButton';

const PursuitInfo = ({title}) => (
  <div>
    <p className={styles.title} >{title}</p>
    <div className={styles.buttons}>
      <BorderedButton
        to="/pursuits/"
        name="More Pursuits"
      />
    </div>
  </div>
);

PursuitInfo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PursuitInfo;