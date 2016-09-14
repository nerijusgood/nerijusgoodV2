/**
*
* Button
*
*/

import React from 'react'
import styles from './styles.css'

class Button extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <button className={styles.button}>
        Test button - please
      </button>
    )
  }
}

export default Button
