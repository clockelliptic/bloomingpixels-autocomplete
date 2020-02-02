import React, { useLayoutEffect, useRef, useState } from 'react'

export const useManyRefs = () => {
    const refs = useRef([])
    const collectOneRef = (new_ref) => {
        if (!refs.current.includes(new_ref)) refs.current.push(new_ref);
    }

    return [refs, collectOneRef]
}

export const useSmartListDisplay = (inputRef, listItemRefs) => {

    /*
     * hides list results if user clicks outside of Autocomplete component
     */

    const [listDisplay, setListDisplay] = useState(false)

    useLayoutEffect(() => {
        const handleClick = (e) => {
            const listItems = listItemRefs.current.map(ref => ref.current);
            const clickedInput = e.target===inputRef.current,
                  clickedListItem = listItems.includes(e.target),
                  exitClick = !clickedInput && !clickedListItem;

            if(exitClick){
                e.stopPropagation()
                setListDisplay(false)
            }
        }
        document.addEventListener('click', handleClick)
        window.addEventListener('click', handleClick)
        return (() => {
            document.removeEventListener('click', handleClick)
            window.addEventListener('click', handleClick)
        });
    }, [])

    return [listDisplay, setListDisplay];
}