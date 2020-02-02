import React, { useState, useRef } from 'react'
import { useManyRefs, useSmartListDisplay } from './hooks'
import './Autocomplete.css'
import SelectionList from '../SelectionList'

export default function Autocomplete({themeClass}){
    /*
     * REFS
     */
    const inputRef = useRef(null)
    const [listItemRefs, collectListItemRef] = useManyRefs()

    /*
     * UI EFFECTS
     */
    const [listDisplay, setListDisplay] = useSmartListDisplay(inputRef, listItemRefs)

    /*
     * ASYNC DATA
     */
    const [predictions, setPredictions] = useState({predictions: []});

    return (
        <div className={themeClass}>
            <div className="autocomplete">
                <div className="input-container">
                    <input
                        onFocus={() => setListDisplay(true)}
                        placeholder={"Search Locations"}
                        type="text"
                        name="search_places"
                        onChange={(e) => {
                            if (e.target.value) {
                                fetchPredictions(setPredictions, e.target.value);
                            } else {
                                setPredictions({predictions: []})
                            }
                        }}
                        ref={inputRef}
                    />
                    <div className={"searchIcon"} />
                </div>
                <SelectionList
                    items={predictions['predictions']}
                    shouldDisplay={listDisplay}
                    inputRef={inputRef}
                    exposeRef={collectListItemRef}
                />
            </div>
        </div>
    );
}

/*
 * *************************************
 *          ASYNC HELPER - fetch search results
 * *************************************
 */

const fetchPredictions = async (handlePredictions, queryStr) => {
    const res = await fetch("https://coding-challenge.echoandapex.com/locations?q="+queryStr)
    res .json()
        .then(res => {
            if (res.predictions.length) handlePredictions(res)
        })
        .then(err => {
            if (err) handlePredictions({predictions: []})
        });
}
