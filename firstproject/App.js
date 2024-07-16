import { useState } from "react";
import { View } from "react-native";
import GettingStarted from "./components/GettingStarted";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [currentPage, setCurrentPage] = useState("GettingStarted");
  const [userName, setUserName] = useState("");

  function handleSignUp() {
    console.log("Inside handle sign up  page");
    setCurrentPage("SignUp");
  }

  function handleLogIn() {
    setCurrentPage("Login");
  }

  function handleDashboard() {
    setCurrentPage("Dashboard");
  }

  function handleLogOut() {
    setCurrentPage("GettingStarted");
  }

  function handleSetName(name) {
    setUserName(name);
    handleLogIn();
  }

  return (
    <View style={{ flex: 1 }}>
      {currentPage === "GettingStarted" && (
        <GettingStarted onSignUpPress={handleSignUp} />
      )}
      {currentPage === "SignUp" && <SignUp onCompletion={handleSetName} />}
      {currentPage === "Login" && <Login onLogin={handleDashboard} />}
      {currentPage === "Dashboard" && (
        <Dashboard onLogOut={handleLogOut} userName={userName} />
      )}
    </View>
  );
}
