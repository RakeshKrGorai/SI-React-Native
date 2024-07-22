import "./gesture-handler";
import GettingStarted from "./components/GettingStarted";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Favorites from "./components/Favorites";
import { Provider as PaperProvider } from "react-native-paper";
import { UserProvider } from "./contexts/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="GettingStarted"
        component={GettingStarted}
        options={{
          title: "Getting Started",
        }}
      />
      <Drawer.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "Sign Up",
        }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
        }}
      />
      <Drawer.Screen
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
      <Drawer.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: "Drawer",
        }}
      />
      <Drawer.Screen
        name="Tabs"
        component={MyTabs}
        options={{
          title: "Tabs",
        }}
      />
    </Drawer.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="GettingStarted" component={GettingStarted} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}

export default function App() {
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
            <Stack.Screen
              name="Drawer"
              component={MyDrawer}
              options={{
                title: "Drawer",
              }}
            />
            <Stack.Screen
              name="Tabs"
              component={MyTabs}
              options={{
                title: "Tabs",
              }}
            />
          </Stack.Navigator>
        </UserProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}
