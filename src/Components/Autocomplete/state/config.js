export const initialStore = {
    query: '',
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