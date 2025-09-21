export const RimacPaths = {
  Login: "/login",
  Plans: "/plans",
  Resume: "/resume",
};

type rimacRoutes = keyof typeof RimacPaths;

export const rimacRouteModules: Record<rimacRoutes, string> = {
  Login: RimacPaths.Login,
  Plans: RimacPaths.Plans,
  Resume: RimacPaths.Resume,
};
