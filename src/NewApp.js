import React from 'react'
import Split from '@uiw/react-split';

const NewApp = () => {
  return (
  <Split style={{ height: 500, border: '1px solid #d5d5d5', borderRadius: 3 }}>
    <Split mode="vertical">
      <div style={{ height: '50%' }}>
        Top Pane
      </div>
      <Split style={{ height: '50%' }}>
        <div style={{ flex: 1 }}>
          Right Pane
        </div>
      </Split>
    </Split>
    <div style={{ flex: 1 }}>
      Right Pane
    </div>
  </Split>
  )
}

export default NewApp
