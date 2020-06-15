import React from "react";
import PropTypes from 'prop-types'
import styles from './ConnectInfo.module.css'

const ConnectInfo = ({title, email, phone, social, socialUrl}) => (
  <div>
      <p className={styles.title} >{title}</p>
      <p className={styles.email} >{email}</p>
      <p>{phone}</p>
      <a className={styles.social} href={socialUrl} target={"_blank"} >{social}</a>
  </div>
);

ConnectInfo.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  socialUrl: PropTypes.string
};

export default ConnectInfo;