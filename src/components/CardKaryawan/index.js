import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const CardKaryawan = ({ id, karyawanItem, navigation, removeData }) => {
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('DetailKaryawan', { id: id })}>
                <View>
                    <Text style={styles.nama}>{karyawanItem.nama}</Text>
                    <Text style={styles.noHP}>No. HP : {karyawanItem.nomorHp}</Text>
                </View>


                <View style={styles.icon}>
                    <TouchableOpacity onPress={() => navigation.navigate('EditKaryawan', { id: id })}>
                    <Ionicons name="md-pencil-outline" size={25} color="yellow" /> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => removeData(id)}>
                        <Ionicons name="md-trash" size={25} color="red" /> 
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default CardKaryawan

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    nama: {
        fontWeight: 'bold',
        fontSize: 16
    },
    noHP: {
        fontSize: 13,
        color: 'gray'
    },
    icon: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});
