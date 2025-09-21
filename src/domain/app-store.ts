import type { Plans } from "./plans";
import type { UserInfo, UserData } from "./user";

export interface AppState {
  userData: UserData | null;
  user: UserInfo | null;
  plans: Plans[];
  planSelected: Plans | null;
}
