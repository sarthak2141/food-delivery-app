 import { View, Text, TouchableOpacity } from 'react-native'
 import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import RestaurentScreen from './screens/RestaurentScreen';
import * as Icon from "react-native-feather";
// import * as Icon from "react-native-feather";
// import Icon from 'react-native-vector-icons/FontAwesome';
import { themeColors } from './theme/theme';

import OrderPreparing from './screens/orderprepairingScreen'
import Cartscreen from './components/cartscreen';
import Delivery from './screens/delivery';

  const Stack=createNativeStackNavigator();
 const Navigation = () => {
   return (
    <NavigationContainer>
        <Stack.Navigator 
      
        >
            <Stack.Screen name='Home' component={HomeScreen} options={{
              headerShown:false
            }}/>
            <Stack.Screen name='Restaurent' component={RestaurentScreen} options={
              {
                headerShown:false,
                

              //   headerTransparent:true,
              //   title:'',
              //   headerBackVisible:true, 
              //   headerBackImage:()=>(
              //     <Icon name="arrow-left" size={24} color={themeColors.bgcolor} />
              //   )

              }
            }/>
            <Stack.Screen  name='Cart' component={Cartscreen} options={
              {
                headerShown:false,
                
                presentation:"modal",
                animation:'slide_from_bottom'
              }
            }/>
      
            <Stack.Screen name='OrderPreparing'component={OrderPreparing} options={{
              presentation:"fullScreenModal",
              animation:'slide_from_bottom',
                headerShown:false
            }}/>
            <Stack.Screen name='Delivery'component={Delivery} options={{
              presentation:"fullScreenModal",
              animation:'slide_from_bottom',
                headerShown:false
            }}/>
            
        </Stack.Navigator>
    </NavigationContainer>
   )
 }
 
 export default Navigation