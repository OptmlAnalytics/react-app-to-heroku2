import LogIn from "./Components/Authentication/LogIn";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Components/Utils/PrivateRoute";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "./Components/UI/Loader";

function App() {
  const { isLoading } = useAuth0();

  const content = (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route
            element={
              <>
                <Dashboard />
              </>
            }
            path="/dashboard"
          />
        </Route>
        <Route path="/" element={<LogIn />} />
      </Routes>
      {/* {isAuthenticated ? (
    <>
      <Navbar isCollapsed={isCollapsed} />
      <Sidebar
        isCollapsed={isCollapsed}
        collapseHandler={collapseHandler}
      />
      <Dashboard isCollapsed={isCollapsed} />
    </>
  ) : (
    <LogIn />
  )} */}
    </BrowserRouter>
  );

  return <>{isLoading ? <Loader /> : content}</>;
  // return <Loader />;
}

export default App;
