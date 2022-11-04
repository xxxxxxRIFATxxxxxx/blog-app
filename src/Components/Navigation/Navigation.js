import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../commonStyles/commonStyles';
import CreateBlogScreen from '../../Screens/CreateBlogScreen/CreateBlogScreen';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import MyBlogScreen from '../../Screens/MyBlogScreen/MyBlogScreen';
import ProfileScreen from '../../Screens/ProfileScreen/ProfileScreen';

const Navigation = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } 
                        
                        else if (route.name === 'Create Blog') {
                            iconName = focused ? 'md-create' : 'create-outline';
                        }

                        else if (route.name === 'My Blogs') {
                            iconName = focused ? 'book-sharp' : 'book-outline';
                        }

                        else if (route.name === 'Profile') {
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                
                    tabBarActiveTintColor: commonStyles.blueColor,
                    tabBarInactiveTintColor: commonStyles.silverColor,
                    headerShown: false,
                })}
            >
                <Tab.Screen name='Home' component={HomeScreen} />
                <Tab.Screen name='Create Blog' component={CreateBlogScreen} />
                <Tab.Screen name='My Blogs' component={MyBlogScreen} />
                <Tab.Screen name='Profile' component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;


