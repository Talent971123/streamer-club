# How to use Redux

```
import { useState } from 'react'
import { connect } from "react-redux"
import { SampleInfo } from "/redux/actions/Sample"

function Home(props) {
    const { name, getSample } = props

    return (
        content
    )
}

const mapStateToProps = state => {
    return { name: state.sample.name }
}

const mapDispatchToProps = {
    getSample
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
```

.
