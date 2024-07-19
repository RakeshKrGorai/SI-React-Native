import { useState } from "react";
import { View } from "react-native";
import GettingStarted from "./components/GettingStarted";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Favorites from "./components/Favorites";
import { Provider as PaperProvider } from "react-native-paper";
import { UserProvider } from "./UserContext";

export default function App() {
  const [currentPage, setCurrentPage] = useState("GettingStarted");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = [
    {
      id: "1",
      title: "Google Pixel 7 Pro",
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70&crop=false%202x,%20https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70&crop=false%201",
      description: "12 GB RAM | 128 GB ROM",
    },
    {
      id: "2",
      title: "Google Pixel 8 Pro",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/f/m/-original-imagtwh5rbhf7ngh.jpeg?q=70&crop=false",
      description: "12 GB RAM | 128 GB ROM",
    },
    {
      id: "3",
      title: "Google Pixel 8 Pro",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/f/m/-original-imagtwh5rbhf7ngh.jpeg?q=70&crop=false",
      description: "12 GB RAM | 128 GB ROM",
    },
    {
      id: "4",
      title: "Google Pixel 7 Pro",
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70&crop=false%202x,%20https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70&crop=false%201",
      description: "12 GB RAM | 128 GB ROM",
    },
    {
      id: "5",
      title: "Google Pixel 8 Pro",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/f/m/-original-imagtwh5rbhf7ngh.jpeg?q=70&crop=false",
      description: "12 GB RAM | 128 GB ROM",
    },
    {
      id: "6",
      title: "Google Pixel 8 Pro",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/f/m/-original-imagtwh5rbhf7ngh.jpeg?q=70&crop=false",
      description: "12 GB RAM | 128 GB ROM",
    },
  ];

  function handleSignUp() {
    setCurrentPage("SignUp");
  }

  function handleLogIn() {
    setCurrentPage("Login");
  }

  function handleDashboard() {
    setCurrentPage("Dashboard");
  }

  function handleFavorites() {
    setCurrentPage("Favorites");
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
    <PaperProvider>
      <UserProvider>
        <View style={{ flex: 1 }}>
          {currentPage === "GettingStarted" && (
            <GettingStarted onSignUpPress={handleSignUp} />
          )}
          {currentPage === "SignUp" && <SignUp onCompletion={handleSetData} />}
          {currentPage === "Login" && (
            <Login
              onLogin={handleDashboard}
              email={email}
              password={password}
            />
          )}
          {currentPage === "Dashboard" && (
            <Dashboard
              onLogOut={handleLogOut}
              onFavorites={handleFavorites}
              userName={userName}
              data={data}
            />
          )}
          {currentPage === "Favorites" && (
            <Favorites onDashboard={handleDashboard} />
          )}
        </View>
      </UserProvider>
    </PaperProvider>
  );
}
