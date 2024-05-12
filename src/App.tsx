import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login, Register } from "./assets/component/appAuthentication";
import Main from "./assets/pages/main";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
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
function App() {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    setUserId(`${auth.currentUser?.uid}`);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/privacyPolicyy" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path={`/${userId}`} element={<Main />} />
          <Route
            path="/"
            element={
              auth.currentUser != null ? (
                <Navigate to={`/${auth.currentUser?.uid}`} replace />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
