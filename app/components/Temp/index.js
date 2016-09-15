/**
*
* Temp
*
*/

import React from 'react'
// import { FormattedMessage } from 'react-intl'
// import messages from './messages'
import styles from './styles.css'
import Granim from 'granim'

class Temp extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // componentDidMount() {
  //   this.handleBgEffects()
  // }
  //
  // handleBgEffects() {
  //   this.granimInstance = new Granim({
  //     element: '#canvas-basic',
  //     name: 'basic-gradient',
  //     direction: 'left-right',
  //     opacity: [1, 1],
  //     isPausedWhenNotInView: true,
  //     states: {
  //       'default-state': {
  //         gradients: [
  //           ['#AA076B', '#61045F'],
  //           ['#02AAB0', '#00CDAC'],
  //           ['#DA22FF', '#9733EE'],
  //         ],
  //       },
  //     },
  //   })
  // }

  render() {
    return (
      <div id='canvas-basic' className={styles.Temp}>
        {/* <FormattedMessage {...messages.header} /> */}
        <div className={styles.Content}>
          Hello
        </div>
      </div>
    )
  }
}

export default Temp
