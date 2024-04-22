# Quick Start

## Installation#

Flume can be installed from npm like so:

`npm install flume`

or alternatively

`yarn add flume`

# Basic Usage#

To get started, import and render the node editor like so:

```import React from 'react'
import { NodeEditor } from "flume";

const App = () => {
return (
    <div style={{width: 800, height: 600}}>
        <NodeEditor />
    </div>
  )
}
```

As you may guess, this alone will render only a blank editor grid with no nodes. This obviously isn't very useful, so lets get started configuring our first node editor.
