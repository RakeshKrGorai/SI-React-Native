import { useState } from "react";
import { View } from "react-native";
import GettingStarted from "./components/GettingStarted";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Favorites from "./components/Favorites";
import { Provider as PaperProvider } from "react-native-paper";
import { UserProvider } from "./UserContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  // const [currentPage, setCurrentPage] = useState("GettingStarted");
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <PaperProvider>
      <NavigationContainer>
        <UserProvider>
          <Stack.Navigator initialRouteName="GettingStarted">
            <Stack.Screen
              name="GettingStarted"
              component={GettingStarted}
              options={{
                title: "Getting Started",
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                title: "Sign Up",
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: "Login",
              }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                title: "Dashboard",
              }}
            />
            <Stack.Screen
              name="Favorites"
              component={Favorites}
              options={{
                title: "Favorites",
              }}
            />
          </Stack.Navigator>
          {/* <View style={{ flex: 1 }}>
            {currentPage === "GettingStarted" && (
              <GettingStarted onSignUpPress={handleSignUp} />
            )}
            {currentPage === "SignUp" && (
              <SignUp onCompletion={handleSetData} />
            )}
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
          </View> */}
        </UserProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}
