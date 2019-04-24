import { SET_USERS, SET_SEARCH, SET_SORT } from "./actions";

const defaultState = {
   list: [],
   searchStr: '',
   sortBy: ''
};

export const usersReducer = (state = defaultState, { type, payload}) => {
   switch (type) {
      case SET_USERS: 
         const mappedPayload = payload.map((item, index) => {
            item.index = index + 1
            return item;
         });
         return {
            ...state,
            list: [...mappedPayload]
         };
      case SET_SEARCH:
         return {
            ...state,
            searchStr: payload
         }
         
      case SET_SORT: 
         return {
            ...state,
            sortBy: payload
         }
   }

   return state;
}