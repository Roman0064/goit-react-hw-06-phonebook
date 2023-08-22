const initialState = {
    contacts: [],
    filter: '',
};

export const contactsReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'contacts/setContacts': {
            return { ...state, contacts: action.payload }
        }

        default: return state;
    }
};