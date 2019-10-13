import React from "react";
import PropTypes from 'prop-types'
import styles from './ContactInfo.module.css'

const ContactInfo = ({title, email, phone}) => (
  <div>
      <p className={styles.title} >{title}</p>
      <p className={styles.email} >{email}</p>
      <p>{phone}</p>
  </div>
);

ContactInfo.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactInfo;