import type { Dispatch } from "react";
import type { AppState } from "../domain/app-store";
import type { UserInfo, UserData } from "../domain/user";
import type { Plans } from "../domain/plans";
import { AppActions } from "../domain/app-actions.enum";

export type DispatchAction<T = any> = {
  type: string;
  payload?: T;
};

export type AppDispatch = Dispatch<DispatchAction>;

export const initialState: AppState = {
  userData: null,
  user: null,
  plans: [],
  planSelected: null,
};

export const appReducer = (
  state: AppState,
  action: DispatchAction
): AppState => {
  switch (action.type) {
    case AppActions.SetUserInfo:
      return {
        ...state,
        user: action.payload as UserInfo,
      };
    case AppActions.SetUserData:
      return {
        ...state,
        userData: action.payload as UserData,
      };
    case AppActions.SetPlans:
      return {
        ...state,
        plans: action.payload as Plans[],
      };
    case AppActions.SetPlanSelected:
      return {
        ...state,
        planSelected: action.payload as Plans,
      };

    default:
      return state;
  }
};
