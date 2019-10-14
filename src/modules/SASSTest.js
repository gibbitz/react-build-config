import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'

import './SASSTest.scss'

class SASSTest extends Component {
    // state = {}

    constructor(props) {
        super(props)
        this.state = { clickCount: 0 }
    }


    clickHandler = () => {
        const { clickCount } = this.state

        this.setState({
            clickCount: clickCount + 1
        })
    }

    render = () => {
        const { clickCount } = this.state

        return (
            <Fragment>
                <article className="sass-test">
                    <p>
                        {`React is working in ${process.env.NODE_ENV || 'Ireland'}!`}
                    </p>
                    <button
                        type="button"
                        onClick={this.clickHandler}
                    >
                        Click counter:
                        { clickCount }
                    </button>
                </article>
            </Fragment>
        )
    }
}

export default hot(module)(SASSTest)
