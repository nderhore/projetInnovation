import 'react-native-gesture-handler';
import  React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/Home";
import ListPromotions from "./src/screens/ListPromotions";
import Scan from "./src/screens/Scan";
import Promotion from "./src/screens/Promotion";



export default function App(){
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ListPromotions" component={ListPromotions} />
                <Stack.Screen name="Scan" component={Scan} />
                <Stack.Screen name="Promotion" component={Promotion} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

