import React from 'react'

export default class Search extends React.Component {

    render() {
        return (
            <input type='text' onchange={event => this.props.handleChange(event)} />
        )
    }
}