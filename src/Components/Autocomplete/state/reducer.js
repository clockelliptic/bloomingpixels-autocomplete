import ACTIONS from './actions'

/*
 * *****************************************
 *              REDUCER HEAD
 * *****************************************
 */

export default function reducer (store, action) {
    return ({
            ...store,
            query: updateQuery(store.query, action),
            suggestions: updateSuggestions(store.suggestions, action),
            selected: updateSelected(store.selected, action),
            hovered: updateHovered(store.hovered, action)
    })
}

/*
 * *****************************************
 *           SUB-TREE REDUCERS
 * *****************************************
 */

const updateQuery = (store, action = ({type: undefined})) => {
    switch (action.type){
        case ACTIONS.UPDATE_QUERY:
            return action.query;
        default:
            return store;
    }
}

const updateSuggestions = (store, action = ({type: undefined})) => {
    switch (action.type){
        case ACTIONS.UPDATE_SUGGESTIONS:
            return action.suggestions;
        case ACTIONS.RESET_SUGGESTIONS:
            return [];
        default:
            return store;
    }
}

const updateSelected = (store, action = ({type: undefined})) => {
    switch (action.type){
        case ACTIONS.UPDATE_SELECTED_LOC:
            return ({
                ...store.selected,
                loc: action.loc
            });
        case ACTIONS.UPDATE_SELECTED_DATA:
            return ({
                ...store.selected,
                data: action.data
            });
        default:
            return store;
    }
}

const updateHovered = (store, action = ({type: undefined})) => {
    switch (action.type){
        case ACTIONS.UPDATE_HOVERED:
            return action.id;
        default:
            return store;
    }
}