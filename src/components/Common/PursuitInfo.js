import React from "react";
import PropTypes from 'prop-types';
import * as styles from './PursuitInfo.module.css';
import BorderedButton from '../Common/BorderedButton';

const PursuitInfo = ({heading, body, closer}) => (
  <div>
    <p className={styles.heading} >{heading}</p>
    <p className={styles.body} >{body}</p>
    <p className={styles.closer} >{closer}</p>

    <p className={styles.monkeys} >
      {
        (Math.floor(Math.random() * (Math.floor(1392110) - Math.ceil(48764))) + Math.ceil(48764)).toLocaleString() +
        " typewriter-wielding monkeys helped draft this page's content."
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