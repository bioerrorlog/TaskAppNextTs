import { ACTIONS } from "../actions";

const initialState = {
    nodes: [6, 2]
};

const treeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_NODE: {
            const newNodeId = action.payload;

            // const newNode = {
            //     nodeId: newNodeId
            // }
            return {
                ...state, 
                nodes: [...state.nodes, newNodeId]
            };
        }
    default:
        return state;
    }
};

export default treeReducer;