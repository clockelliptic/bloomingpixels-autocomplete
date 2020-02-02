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

  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");

  useEffect(() => {
      if (items.length && downPress) {
      setCursor(prevState =>
          prevState < items.length - 1 ? prevState + 1 : prevState
      );
      }
  }, [downPress]);

  useEffect(() => {
      if (items.length && upPress) {
          setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
      }
  }, [upPress]);

  useEffect(() => {
      if (items.length && enterPress) {
          setSelected(items[cursor]);
      }
  }, [cursor, enterPress]);

  useEffect(() => {
      if (items.length && hovered) {
          setCursor(items.indexOf(hovered));
      }
  }, [hovered]);

  useEffect(() => {
    if ( !enterPress && !upPress && !downPress) {
      if (inputRef) inputRef.current.focus();
    }
  }, [])

  return [selected, cursor, setSelected, setHovered]
}