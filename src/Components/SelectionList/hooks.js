import React, { useEffect, useState } from 'react'

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


export const useArrowNavigation = (items, inputRef) => {
  const [selected, setSelected] = useState({id: null, name: null});
  const [cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  /*
   *  USE KEYS FOR NAVIGATION & SELECTION
   */

  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");

  /*
   *  NAMED EFFECTS:
   */

  const downArrow_Navigation = useEffect(() => {
      if (items.length && downPress) {
        setCursor(prevState =>
            prevState < items.length - 1 ? prevState + 1 : prevState
        );
      }
  }, [downPress]);

  const upArrow_Navigation = useEffect(() => {
      if (items.length && upPress) {
          setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
      }
  }, [upPress]);

  const selectWith_Enter = useEffect(() => {
      if (items.length && enterPress) {
          setSelected(items[cursor]);
      }
  }, [cursor, enterPress]);

  const track_hoveredItem = useEffect(() => {
      if (items.length && hovered) {
          setCursor(items.indexOf(hovered));
      }
  }, [hovered]);

  useEffect(() => {
    if (!enterPress && !upPress && !downPress) {
      if (inputRef) inputRef.current.focus();
    }
  }, [])

  return [selected, cursor, setSelected, setHovered]
}