import React, { useContext } from 'react'
import { Store, ACTIONS } from '../state'
import './InputField.css'

export default function InputField ({inputRef, setShowSuggestions, value}) {
    const { state, dispatch } = React.useContext(Store);
    const handleResults = (suggestions) => dispatch({ type: ACTIONS.UPDATE_SUGGESTIONS, suggestions});

    return (
        <div className="input-container">
                <input
                    onFocus={() => setShowSuggestions(true)}
                    placeholder={"Search Locations"}
                    value={state.query}
                    type="text"
                    name="search_places"
                    onChange={(e) => {
                        const queryStr = e.target.value;
                        dispatch({ type: ACTIONS.UPDATE_QUERY, query:queryStr })
                        if (queryStr) {
                            fetchSuggestions(queryStr, handleResults);
                        } else {
                            handleResults([])
                        }
                    }}
                    ref={inputRef}
                />
                <div className={"searchIcon"} />
        </div>
    )
}

/*
 * *************************************
 *  ASYNC HELPER - fetch search results
 * *************************************
 */

const fetchSuggestions = async (queryStr, handleResults) => {
    const res = await fetch("https://coding-challenge.echoandapex.com/locations?q="+queryStr)
    res .json()
        .then(res => {
            if (res.predictions.length) {
                handleResults(res.predictions)
            }
        })
        .then(err => {
            if (err) handleResults([])
        });
}