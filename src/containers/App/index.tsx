import { RenderRemoteData } from "aidbox-react/lib/components/RenderRemoteData";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SignIn } from "../../components/SignIn";
import { useApp } from "./hooks";

function App() {
  const { userResponse } = useApp();

  return (
    <BrowserRouter>
      <RenderRemoteData
        remoteData={userResponse}
        renderFailure={(error) => (
          <div style={{ width: "100%", padding: "2.5%" }}>
            {JSON.stringify(error)}
          </div>
        )}
      >
        {(user) => {
          console.log("App --- user", user);
          return (
            <Routes>
              {user ? (
                <>
                  {/* <Route path="main" element={<Main />} /> */}
                  <Route path="*" element={<Navigate to="/signin" />} />
                </>
              ) : (
                <>
                  <Route path="signin" element={<SignIn />} />
                  <Route
                    path="*"
                    element={
                      <Navigate
                        to="/signin"
                        replace
                        state={{ from: location.pathname }}
                      />
                    }
                  />
                </>
              )}
            </Routes>
          );
        }}
      </RenderRemoteData>
    </BrowserRouter>
  );
}

export default App;
