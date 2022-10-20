import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Main from "./components/Main";
import Settings from "./components/Settings";
import Profile from "./components/Profile";

const Stack = createStackNavigator();
export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Main"
            component={Main}
            options={{title:"Главная"}}
            />
             <Stack.Screen
            name="Settings"
            component={Settings}
            options={{title:"Настройки"}}
            />
             <Stack.Screen
            name="Profile"
            component={Profile}
            options={{title:"Профиль"}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}