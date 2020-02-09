import React, { useLayoutEffect, useEffect, useRef, useState } from 'react'

export const useKeyPress = function(targetKey) {
    const [keyPressed, setKeyPressed] = useState(false);

    function downHandler(e) {
      if (e.key === targetKey) {
        setKeyPressed(true);
      }
    }
    const upHandler = (e) => {
      if (e.key === targetKey) {
        setKeyPressed(false);
      }
    };

    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);

      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    });

    return keyPressed;
};

export const useManyRefs = () => {
    const refs = useRef([])
    const collectOneRef = (new_ref) => {
        if (!refs.current.includes(new_ref)) refs.current.push(new_ref);
    }

    return [refs, collectOneRef]
}

export const useSuggestions = (inputRef, listItemRefs) => {
    /*
     * hides list results if user clicks outside of Autocomplete component
     */
    const [showSuggestions, setShowSuggestions] = useState(false)
    const escapePress = useKeyPress("Escape");

    const pressEscToClose_suggestionList = useLayoutEffect(() => {
        if (escapePress && inputRef.current) {
            inputRef.current.blur()
            setShowSuggestions(false)
        }
    })

    const clickToClose_suggestionList = useLayoutEffect(() => {
        const handleClick = (e) => {
            const listItems = listItemRefs.current.map(ref => ref.current);
            const clickedInput = e.target===inputRef.current,
                  clickedListItem = listItems.includes(e.target),
                  exitClick = !clickedInput && !clickedListItem;

            if(exitClick){
                e.stopPropagation()
                setShowSuggestions(false)
            }
        }
        document.addEventListener('click', handleClick)
        window.addEventListener('click', handleClick)
        return (() => {
            document.removeEventListener('click', handleClick)
            window.addEventListener('click', handleClick)
        });
    }, [])

    return [showSuggestions, setShowSuggestions];
}