import {
  type FC,
  createContext,
  type PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { type AppDispatch, initialState, appReducer } from "./reducer";
import type { AppState } from "../types/app-store";

type AppGlobalContextProviderProps = PropsWithChildren<{
  testStateProps?: Partial<AppState>;
  testDispatch?: AppDispatch;
}>;

const AppStateContext = createContext<AppState | undefined>(undefined);
const AppDispatchContext = createContext<AppDispatch | undefined>(undefined);

const GlobalAppProvider: FC<AppGlobalContextProviderProps> = ({
  children,
  testStateProps = {},
  testDispatch,
}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={{ ...state, ...testStateProps }}>
      <AppDispatchContext.Provider value={testDispatch || dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useGlobalAppState = (): AppState => {
  const context = useContext(AppStateContext) as AppState;

  if (context === undefined) {
    throw new Error("useGlobalAppState must be used within a AppStateContext");
  }

  return context;
};

const useGlobalAppDispatch = (): AppDispatch => {
  const context = useContext(AppDispatchContext) as AppDispatch;

  if (context === undefined) {
    throw new Error(
      "useGlobalAppDispatch must be used within a AppDispatchContext"
    );
  }

  return context;
};

export { GlobalAppProvider, useGlobalAppState, useGlobalAppDispatch };
