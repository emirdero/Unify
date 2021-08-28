import * as React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Context, theme } from "./context/Context";
import Profile from "./screens/Profile";
import Map from "./screens/Map";

const Tab = createBottomTabNavigator();

export default function App() {
  // Login state
  const [user, _setUser] = useState({});

  const setUser = (user) => {
    _setUser(user);
  };

  return (
    <Context.Provider value={{ theme, user, setUser }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveBackgroundColor: theme.primary,
            tabBarInactiveBackgroundColor: theme.primary,
          }}
        >
          <Tab.Screen
            name="Map"
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <MaterialIcons
                  name="map"
                  size={30}
                  color={focused ? theme.secondary : theme.gray_lighter}
                />
              ),
            }}
            component={Map}
          />
          <Tab.Screen
            name="Profile"
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <MaterialIcons
                  name="person"
                  size={30}
                  color={focused ? theme.secondary : theme.gray_lighter}
                />
              ),
            }}
            component={Profile}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}
