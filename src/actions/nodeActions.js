import { uuid } from 'uuidv4';
import { ACTIONS } from '../actions';


export const addNode = () => {
    const id = uuid();
    const parent = null;
    const title = `this is title of ${id}`;
    const description = `this is description of ${id}`;
    return{
        type: ACTIONS.ADD_NODE,
        payload: { id, parent, title, description }
    }; 
};