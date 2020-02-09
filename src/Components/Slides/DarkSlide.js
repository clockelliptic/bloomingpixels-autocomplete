import React from 'react'
import Autocomplete from '../Autocomplete'
import { fullpageFlexboxStyle, autocompleteContainer_Style } from './styles'


export default function () {
    return (
        <React.Fragment>
            <div style={{...fullpageFlexboxStyle, background: '#111'}} >
                <div className="logo-box" />
                <div style={autocompleteContainer_Style}>
                    <Autocomplete themeClass={"dark"} />
                </div>
            </div>
        </React.Fragment>
    )
}