import React from "react";
import { Button } from 'react-native';
import { createStackNavigator } from "react-navigation";

import LoginScreen from '../container/LoginScreen';
import StudentListScreen from '../container/StudentListScreen';
import AddStudentScreen from '../container/AddStudentScreen';
import UpdateStudentScreen from '../container/UpdateStudentScreen';

import NavigationService from '../navigation/NavigationService';

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: (/* { navigation } */) => ({
                // headerTitle instead of title
                headerTitle: 'Log In',
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }/* ,
                headerRight: (
                    <Button
                        title='Info'
                        color="#f4511e"
                        onPress={() => navigation.navigate('StudentList')}
                    />
                ) */
            })
        },
        StudentList: {
            screen: StudentListScreen,
            navigationOptions: () => ({
                // headerTitle instead of title
                headerTitle: 'Student',
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: null,
                headerRight: (
                    <Button
                        title='Add'
                        color="#f4511e"
                        onPress={() => NavigationService.navigate('AddStudent')}
                    />
                )
            })
        },
        AddStudent: {
            screen: AddStudentScreen,
            navigationOptions: () => ({
                // headerTitle instead of title
                headerTitle: 'Add Student',
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: null
            })
        },
        UpdateStudent: {
            screen: UpdateStudentScreen,
            navigationOptions: () => ({
                // headerTitle instead of title
                headerTitle: 'Update Student',
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: null
            })
        }
    }, { initialRouteName: 'Login' }
);

export default AppNavigator;