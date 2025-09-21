import { lazy, type FC } from "react";
import { RimacPaths } from "./routes";
import Header from "./components/layout/Header/Header";
import "./App.scss"; // Cambiamos por un archivo CSS principal
import {
  Route,
  Routes,
  Navigate as Redirect,
  useLocation,
} from "react-router-dom";
import { useGlobalAppState } from "./store/app-context";
import Stepper from "./shared/components/Stepper/Stepper";

const Login = lazy(() => import("./pages/Login/Login"));
const Plans = lazy(() => import("./pages/Plans/Plans"));
const Resume = lazy(() => import("./pages/Resume/Resume"));

const App: FC = () => {
  const { user } = useGlobalAppState();
  const location = useLocation();

  const steps = ["Planes y coberturas", "Resumen"];
  const currentStep =
    location.pathname === RimacPaths.Plans
      ? 1
      : location.pathname === RimacPaths.Resume
      ? 2
      : 0; // 0 = fuera del stepper

  const showStepper =
    location.pathname === RimacPaths.Plans ||
    location.pathname === RimacPaths.Resume;

  return (
    <>
      <Header />
      {showStepper && <Stepper steps={steps} currentStep={currentStep} />}
      <div className="app">
        <Routes>
          <Route path={RimacPaths.Login} element={<Login />} />
          <Route
            element={
              !Boolean(user?.name) ? <Redirect to={RimacPaths.Login} /> : null
            }
          >
            <Route path={RimacPaths.Plans} element={<Plans />} />
            <Route path={RimacPaths.Resume} element={<Resume />} />
          </Route>
          <Route
            path="*"
            element={<Redirect to={RimacPaths.Login} replace />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
