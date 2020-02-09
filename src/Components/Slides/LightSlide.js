import React from 'react'
import Autocomplete from '../Autocomplete'
import { fullpageFlexboxStyle, autocompleteContainer_Style } from './styles'

export default function () {
    return (
        <React.Fragment>
            <div style={{...fullpageFlexboxStyle, background: '#fff'}} >

                <div className="message-alert">
                    Please scroll or <em>swipe to the right</em> to navigate examples.
                </div>

                <div className="logo-box" />

                <div style={autocompleteContainer_Style}>
                    <Autocomplete themeClass={"light"} />
                </div>

            </div>
        </React.Fragment>
    )
}
