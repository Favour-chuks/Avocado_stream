import { Dashboard } from "./dashboard";
import SideBar from "../component/sidebar";
import { Login } from "../component/login";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import Profile from './profile';
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
export default function Main() {
  return (
    <>
      {" "}
      {auth.currentUser != null
        ? (console.log("a user has been found"),
          (
            <SideBar notification={4}>
              {/* <Profile/> */}
              <Dashboard />
            </SideBar>
          ))
        : (console.log("user has not been found"), (<Login />))}
    </>
  );
}
