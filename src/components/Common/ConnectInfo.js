import React from "react";
import PropTypes from 'prop-types'
import * as styles from './ConnectInfo.module.css'

const ConnectInfo = ({title, email, phone, social1, socialUrl1, social2, socialUrl2}) => (
  <div>
      <p className={styles.title} >{title}</p>
      <p className={styles.zed} >{email}</p>
      <p>{phone}</p>

      <div className={styles.socials}>
        <a className={styles.upwrk} href={socialUrl1} target={"_blank"} rel={"noreferrer"}>{social1}</a>
        <a className={styles.lnkdn} href={socialUrl2} target={"_blank"} rel={"noreferrer"} >{social2}</a>
      </div>
  </div>
);

ConnectInfo.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  socialUrl: PropTypes.string
};

export default ConnectInfo;