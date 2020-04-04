import { ACTIONS } from "../actions";

const initialState = {
    nodes: []
};
// const node = {
//     id: id,
//     nodes: [],
//     title: title,
//     description: description
// }

const treeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_NODE: {
            const { id, parent, title, description } = action.payload;
            const node = {
                id: id,
                nodes: [],
                title: title,
                description: description
            }

            return {
                ...state, 
                nodes: [...state.nodes, node]
            };
        }
    default:
        return state;
    }
};

export default treeReducer;