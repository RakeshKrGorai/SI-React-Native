import { useState } from "react";
import { View } from "react-native";
import GettingStarted from "./components/GettingStarted";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [currentPage, setCurrentPage] = useState("GettingStarted");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  function handleSetData(name, email, password) {
    setUserName(name);
    setEmail(email);
    setPassword(password);
    handleLogIn();
  }

  return (
    <View style={{ flex: 1 }}>
      {currentPage === "GettingStarted" && (
        <GettingStarted onSignUpPress={handleSignUp} />
      )}
      {currentPage === "SignUp" && <SignUp onCompletion={handleSetData} />}
      {currentPage === "Login" && (
        <Login onLogin={handleDashboard} email={email} password={password} />
      )}
      {currentPage === "Dashboard" && (
        <Dashboard onLogOut={handleLogOut} userName={userName} />
      )}
    </View>
  );
}
