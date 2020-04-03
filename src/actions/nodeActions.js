import { uuid } from 'uuidv4';
import { ACTIONS } from '../actions';


export const addNode = () => {
    const newNodeId = uuid();
    return{
        type: ACTIONS.ADD_NODE,
        payload: newNodeId
    }; 
};