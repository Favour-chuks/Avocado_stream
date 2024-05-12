import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import Profile from "./profile";
import Settings from "./setting";
import { Dashboard } from "./dashboard";
import SideBar from "../component/sidebar";
const firebaseConfig = {
  apiKey: "AIzaSyBj-hGQjPY1OTM67nMPUdXcxTUaHq7lDtg",
  authDomain: "test-project-56bea.firebaseapp.com",
  databaseURL: "https://test-project-56bea-default-rtdb.firebaseio.com",
  projectId: "test-project-56bea",
  storageBucket: "test-project-56bea.appspot.com",
  messagingSenderId: "394633286716",
  appId: "1:394633286716:web:2a6e83f022e41b1c469f39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
function Main() {
  return (
    <>
        <SideBar notification={"1"} display="">
          <Routes>
            <Route path={`/${auth.currentUser?.uid}`} element={<Dashboard />} />
            <Route
              path={`/${auth.currentUser?.uid}/profile`}
              element={<Profile />}
            />
            <Route path={`/${auth.currentUser?.uid}/settings`} element={<Settings />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </SideBar>
    </>
  );
}

export default Main;
