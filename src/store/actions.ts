import { AppActions } from "../types/app-actions.enum";
import type { UserData } from "../types/user";
import { rimacAPI } from "../services/rimac";
import { type AppDispatch } from "./reducer";

export const getUser = async (
  dispatchApp: AppDispatch,
  userData: UserData
): Promise<void> => {
  console.log(userData);
  try {
    const result = await rimacAPI.getUsers();
    dispatchApp({
      type: AppActions.SetUserInfo,
      payload: result,
    });
    dispatchApp({
      type: AppActions.SetUserData,
      payload: userData,
    });
  } catch (error) {
    console.error("Error loading users:", error);
  }
};

export const getPlans = async (dispatchApp: AppDispatch): Promise<void> => {
  try {
    const result = await rimacAPI.getPlans();
    dispatchApp({
      type: AppActions.SetPlans,
      payload: result,
    });
  } catch (error) {
    console.error("Error loading plans:", error);
  }
};

export const requestGlobalApiActions = {
  getUser,
  getPlans,
};
