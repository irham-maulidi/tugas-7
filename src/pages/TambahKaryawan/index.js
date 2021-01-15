import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native'
import { InputData } from '../../components'
import FIREBASE from '../../config/FIREBASE'

export default class TambahKaryawan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama: '',
            nomorHp: '',
            email: '',
            alamat: '',
        }
    }

    onChangeText = (namaState, value) => {
        this.setState({
            [namaState]: value
        })
    }

    onSubmit = () => {
        if(this.state.nama && this.state.nomorHp && this.state.email && this.state.alamat) {
        const karyawanReferensi = FIREBASE.database().ref('Karyawan');
        const karyawan = {
            nama: this.state.nama,
            nomorHp: this.state.nomorHp,
            email: this.state.email,
            alamat: this.state.alamat
        }

        karyawanReferensi
        .push(karyawan)
        .then((data) => {
            Alert.alert('Sukses', 'Data Tersimpan');
            this.props.navigation.replace('Home');
        })
        .catch((error) => {
            console.log("Error : ", error);
        })

    }else {
        Alert.alert('Error', 'Kolom Wajib di Isi !!!');
    }
};


    render() {
        return (
            <View style={styles.pages}>
                <InputData label="Nama" placeholder="Masukkan Nama" onChangeText={this.onChangeText} value={this.state.nama} namaState="nama" />
                <InputData label="No. Hp" placeholder="Masukkan No. Hp" keyboardType="number-pad" onChangeText={this.onChangeText} value={this.state.nomorHp} namaState="nomorHp" />
                <InputData label="Email" placeholder="Masukkan Email" onChangeText={this.onChangeText} value={this.state.email} namaState="email" />
                <InputData label="Alamat" placeholder="Masukkan Alamat" isTextArea={true} onChangeText={this.onChangeText} value={this.state.alamat} namaState="alamat" />
                <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}><Text style={styles.textTombol}>SUBMIT</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        padding: 30
    },
    tombol: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    textTombol: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '16'
    }
})
