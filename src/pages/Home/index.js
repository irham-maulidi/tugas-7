import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import FIREBASE from '../../config/FIREBASE'
import { CardKaryawan } from '../../components'


export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            karyawans: {},
            karyawansKey: [],
        };
    }

    componentDidMount() {
        this.ambilData();
    }

    ambilData = () => {
        FIREBASE.database()
            .ref("Karyawan")
            .once('value', (querySnapShot) => {
                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let karyawanItem = { ...data };

                this.setState({
                    karyawans: karyawanItem,
                    karyawansKey: Object.keys(karyawanItem)
                })
            })
    }

    removeData = (id) => {
        // Alert.alert(
        //     "Info",
        //     "Yakin Mnghapus Data ?",
        //     [
        //         {
        //             text: "Cancel",
        //             onPress: () => console.log("Cancel Pressed"),
        //             style: "cancel"
        //         },
        //         {
        // text: "OK", onPress: () => {
        FIREBASE.database()
            .ref('Karyawan/' + id)
            .remove()
            .then((data) => console.log("Berhasil dihapus!"))
        this.ambilData();
        //                 Alert.alert('Hapus', 'Sukses Hapus Data');
        //             },
        //         },
        //     ],
        //     { cancelable: false },
        // );
    };

    render() {
        const { karyawans, karyawansKey } = this.state
        return (
            <View style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>Daftar Karyawan</Text>
                    <View style={styles.garis} />
                </View>

                <View style={styles.listKaryawan}>
                    {karyawansKey.length > 0 ? (
                        karyawansKey.map((key) => (
                            <CardKaryawan id={key} karyawanItem={karyawans[key]}{...this.props} removeData={this.removeData} key={key} />
                        ))
                    ) : (
                            <Text>Daftar Kosong</Text>
                        )}
                </View>

                <View style={styles.wrapperButton}>
                    <TouchableOpacity style={styles.btnTambah} onPress={() => this.props.navigation.navigate('TambahKaryawan')}>
                        <Ionicons name="md-add" size={25} color="green" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    header: {
        paddingHorizontal: 30,
        paddingTop: 30
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    garis: {
        borderWidth: 1,
        marginTop: 10,
    },
    listKaryawan: {
        paddingHorizontal: 30,
        marginTop: 20,
    },
    wrapperButton: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 30
    },
    btnTambah: {
        padding: 20,
        backgroundColor: 'skyblue',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})