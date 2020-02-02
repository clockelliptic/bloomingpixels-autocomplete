import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useArrowNavigation } from './hooks'
import './SelectionList.css'


export default function SelectionList ({items, shouldDisplay, inputRef, exposeRef }) {
    const listRef = useRef(null);
    const [
        selectedItem,
        scrollCursorIndex,
        setSelected,
        setHovered
    ] = useArrowNavigation(items, inputRef)
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
                                isSelected={selectedItem.name === item.name}
                                item={item}
                                setSelected={setSelected}
                                setHovered={setHovered}
                                onClick={(e) => {
                                    inputRef.current.focus()
                                }}
                                exposeRef={exposeRef}
                            />
                        ))
                    }
            </div>
        </div>
    );
};

const ListItem = ({ item, isActive, isSelected, setSelected, setHovered, exposeRef }) => {
    const ref = useRef(null)
    exposeRef(ref)
    return (
        <div
            className={`item ${isActive ? "active" : ""} ${isSelected ? "selected" : ""}`}
            onClick={() => setSelected(item)}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(undefined)}
            ref={ref}
        >
            <span className="name">{item.name}</span>
            <span className="description">{item.description}</span>
        </div>
    );
}