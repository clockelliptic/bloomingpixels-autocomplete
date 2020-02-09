export default ({
    RESET : 'RESET',

    UPDATE_QUERY : 'UPDATE_QUERY',

    UPDATE_SUGGESTIONS : 'UPDATE_SUGGESTIONS',
    RESET_PREDICTIONS: 'RESET_PREDICTIONS',

    UPDATE_SELECTED_DATA : 'UPDATE_SELECTED_DATA',
    UPDATE_SELECTED_LOC : 'UPDATE_SELECTED_LOC',

    UPDATE_HOVERED : 'UPDATE_HOVERED'
})


/****************************************
    The shape of the store:

        {
            userInput: '',
            suggestions: [],
            selected: {
                data: {
                    id: '',
                    name: '',
                    description: '',
                    tags: []
                },
                loc: {
                    longitude: '',
                    latitude: '',
                    address: ''
                }
            },
            hovered: {
                id: ''
            }
        }
*****************************************/