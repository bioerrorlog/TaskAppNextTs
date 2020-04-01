import { ACTIONS } from "../actions";

const initialState = {
    nodeCounter: 0
}

const treeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_NODE: {
            return {
                ...state,
                nodeCounter: state.nodeCounter + 1
            }
        }
    default:
        return state;
    }
};

export default treeReducer;