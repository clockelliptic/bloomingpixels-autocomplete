import React, { useEffect, useState } from 'react'
import { Store, ACTIONS } from '../state'
import { useKeyPress } from '../hooks'

export const useArrowNavigation = (items, inputRef, onSelectionChange = () => {}) => {
  const [selected, setSelected] = useState({id: null});
  const [cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState(undefined);
  const { state, dispatch } = React.useContext(Store);

  /*
   *  USE KEYS FOR NAVIGATION & SELECTION
   */

  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");
  const escapePress = useKeyPress("Escape");

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
          onSelectionChange(items[cursor])
          dispatch({ type: ACTIONS.UPDATE_QUERY, query:items[cursor].name })
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