import React from 'react'
import { Image } from 'react-bootstrap';
import styles from './Loader.module.scss'
const Loader = (props) => {
  return (
    <div className={props.loading ? styles.loader : "d-none"}>
      <Image className={styles.logoLoader} src="assets/images/logo.svg" />
    </div>
  )
}

export default Loader