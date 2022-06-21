import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/language/LanguageList";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Settings from "./pages/settings/Settings";
import Profile from "./pages/profile/Profile";
import Error404 from "./pages/404 page/Error404"
import Quiz from "./pages/quiz/Quiz"
import "./style/dark.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { languageInputs } from "./formSource";





function App() {
 

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={<Home />} />
            
            <Route path="languages">
              <Route index element={<List />} />
             <Route path=":languageId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={languageInputs} title="Add New Language" />}
              />
            </Route>
            {/* <Route path="students">
              <Route index element={<List />} />
              <Route path=":studentId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={studentInputs} title="Add New Student" />}
              />
            </Route> */}
            <Route path="settings">
              <Route index element={<Settings />}></Route>
            </Route>
            <Route path="profile">
              <Route index element={<Profile />}></Route>
            </Route>
            <Route path="isetquiz">
              <Route index element={<Quiz />}></Route>
            </Route>
            <Route>
              <Route path="*" element={<Error404 />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
