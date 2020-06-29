import React from "react";
import PropTypes from 'prop-types';
import styles from './PursuitInfo.module.css';
import BorderedButton from '../Common/BorderedButton';

const PursuitInfo = ({title}) => (
  <div>
    {/* <p className={styles.title} >{title}</p> */}
    <p className={styles.title} >
      {
        (Math.floor(Math.random() * (Math.floor(1392110) - Math.ceil(48764))) + Math.ceil(48764)).toLocaleString() +
        " typewriter-wielding monkeys are drafting this page's content."
      }
    </p>
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