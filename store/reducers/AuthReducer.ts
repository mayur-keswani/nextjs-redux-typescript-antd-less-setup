import { ActionType } from "../action-creators/action-types";
import { ActionDispatch } from "../types/ReduxUtilsType";

export type initialType = {
  isAuthenticated: boolean;
  user_details: {
    username: string;
    user_id: string;
  };
  access_token: null | string;
};
export const initialState: initialType = {
  isAuthenticated: false,
  user_details: {
    username: "",
    user_id: "",
  },
  access_token: null,
 
};

const AuthReducer = (
  state: initialType = initialState,
  action: ActionDispatch
) => {
//   switch (action.type) {
//       case ActionType.something {
            //...
//       }
//   }
};

export default AuthReducer;
