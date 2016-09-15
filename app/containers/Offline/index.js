/*
 *
 * Offline
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import Temp from 'components/Temp'

export class Offline extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title='nerijusgood'
          meta={[
            { name: 'description', content: 'Description of Offline' },
          ]}
        />

        <Temp>
          <FormattedMessage {...messages.header} />
        </Temp>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapDispatchToProps)(Offline)
