import React, { useRef } from "react";
import { useArrowNavigation } from './hooks'
import { Store, ACTIONS } from '../state'
import './SelectionList.css'


export default function SelectionList ({
    shouldDisplay,
    inputRef,
    listItemRefCollector,
    onSelectionChange,
    _onSelectionChange,
}) {
    const { state, dispatch } = React.useContext(Store);
    const items = state.suggestions

    const listRef = useRef(null);
    const [
        selectedItem,
        scrollCursorIndex,
        setSelected,
        setHovered
    ] = useArrowNavigation(items, inputRef, onSelectionChange)

    return (
        <div
            ref={listRef}
            className={`selectionList`}
            onWheel={e => e.stopPropagation()}
        >
            <div
                className={`${(shouldDisplay) ? 'show' : 'hide'}`}
            >
                    {
                        items.map((item, i) => (
                            <ListItem
                                key={item.id}
                                isActive={i === scrollCursorIndex}
                                isSelected={selectedItem.id === item.id}
                                item={item}
                                setSelected={setSelected}
                                setHovered={setHovered}
                                onClick={(e) => {
                                    inputRef.current.focus()
                                }}
                                refCollector={listItemRefCollector}
                                onSelectionChange={onSelectionChange}
                                _onSelectionChange={_onSelectionChange}
                            />
                        ))
                    }
            </div>
        </div>
    );
};

const ListItem = ({
    item,
    isActive,
    isSelected,
    setSelected,
    setHovered,
    refCollector,
    onSelectionChange,
    _onSelectionChange
}) => {
    const { state, dispatch } = React.useContext(Store);
    const ref = useRef(null)
    refCollector(ref)
    return (
        <div
            className={`item ${isActive ? "active" : ""} ${isSelected ? "selected" : ""}`}
            onClick={() => {
                setSelected(item)
                onSelectionChange(item)
                _onSelectionChange(item)
                dispatch({ type: ACTIONS.UPDATE_QUERY, query:item.name })
            }}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(undefined)}
            ref={ref}
        >
            <span className="name">{item.name}</span>
            <span className="description">{item.description}</span>
        </div>
    );
}