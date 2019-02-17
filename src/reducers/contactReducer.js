import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from '../actions/type';

const initialState = {
    // contacts: [
    //     {
    //       id: 1,
    //       name: 'John Doe',
    //       email: 'john@gmail.com',
    //       phone: '555-555-5555'
    //     },
    //     {
    //       id: 2,
    //       name: 'Karen Williams',
    //       email: 'karen@gmail.com',
    //       phone: '444-444-4444'
    //     },
    //     {
    //       id: 3,
    //       name: 'Henry Johnson',
    //       email: 'henry@gmail.com',
    //       phone: '333-333-333'
    //     }
    //   ]
    contacts: [] //using http request
};

export default function(state= initialState, action) {
    console.log("reducers calling");
    switch(action.type) {
        case GET_CONTACTS:
        //  return{
        //     ...state
        //  }; 
        return {
            ...state,
            contacts: action.payload
        }
         case DELETE_CONTACT:
         return {
             ...state,
             contacts: state.contacts.filter((contact) =>
             contact.id !== action.payload
            )
         };
         case ADD_CONTACT:
         return {
             ...state,
             contacts: [action.payload, ...state.contacts]
            // contacts: state.contacts.unshift(action.payload)
         };
         console.log("contacts", state.contacts)
        default:
            return state;
    }
}