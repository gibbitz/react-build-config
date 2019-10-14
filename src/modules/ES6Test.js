import React, { Component } from 'react'

import './ES6Test.scss'

class ES6Test extends Component {
    level = 6

    log = msg => console.log(msg)

    print = msg => {
        const message = msg || 'provide a message, please.'
        this.log(message)
        return (
            <div>
                {message}
            </div>
        )
    }

    render = () => (
        <article>
            {this.print(`react is working in: ${process.env.NODE_ENV || 'Scotland'}!`)}
        </article>
    )
}

export default ES6Test
