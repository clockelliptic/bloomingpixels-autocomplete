import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useManyRefs, useSuggestions } from './hooks'
import './Autocomplete.css'
import SelectionList from './SelectionList'
import InputField from './InputField'
import { Store, StoreProvider, ACTIONS } from './state'

function Autocomplete({themeClass, onSelectionChange}){
    const { state, dispatch } = React.useContext(Store);
    /*
     * REFS
     */
    const inputRef = useRef(null)
    const [listItemRefs, collectListItemRef] = useManyRefs()

    /*
     * UI EFFECTS
     */
    const [showSuggestions, setShowSuggestions] = useSuggestions(inputRef, listItemRefs)

    /*
     * (PRIVATE/INTERNAL) USER-INPUT CYCLE CALLBACKS
     */
    const _onSelectionChange = (item) => {
        setShowSuggestions(false)
    }

    return (
            <div className={themeClass}>
                <div className="autocomplete">
                    <InputField
                        inputRef={inputRef}
                        setShowSuggestions={setShowSuggestions}
                    />
                    <SelectionList
                        shouldDisplay={showSuggestions && inputRef.current.value}
                        inputRef={inputRef}
                        listItemRefCollector={collectListItemRef}
                        onSelectionChange={onSelectionChange}
                        _onSelectionChange={_onSelectionChange}
                    />
                </div>
            </div>
    );
}

Autocomplete.defaultProps = {
    themeClass: 'light',
    onSelectionChange: () => {}
}

Autocomplete.propTypes = {
    themeClass: PropTypes.string,
    onSelectionChange: PropTypes.func
}

export default function(props) {
    return (
        <StoreProvider>
            <Autocomplete {...props} />
        </StoreProvider>
    )
}