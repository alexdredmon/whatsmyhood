import React from 'react'

import ChipInput from 'lib/components/third_party/ChipInput'

import './styles.css'


class ChipInputComponent extends React.Component {
  render = () => {
    return (
      <div className="chip-input">
        <ChipInput
          variant="outlined"
          {...this.props}
        />
      </div>
    )
  }
}

export default ChipInputComponent
