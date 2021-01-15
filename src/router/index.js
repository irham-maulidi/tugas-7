import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Home, TambahKaryawan, DetailKaryawan, EditKaryawan }from '../pages'

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
            <Stack.Screen name="TambahKaryawan" component={TambahKaryawan} options={{title: 'Tambah Karyawan'}} />
            <Stack.Screen name="DetailKaryawan" component={DetailKaryawan} options={{title: 'Detail Karyawan'}} />
            <Stack.Screen name="EditKaryawan" component={EditKaryawan} options={{title: 'Edit Karyawan'}} />
        </Stack.Navigator>
    )
}

export default Router
