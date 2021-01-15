import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import FIREBASE from '../../config/FIREBASE';

export default class DetailKaryawan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            karyawan: {},
        };
    }

    componentDidMount() {
        FIREBASE.database()
        .ref('Karyawan/'+ this.props.route.params.id)
        .once('value',(querySnapShot) => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let karyawanItem = {...data};

            this.setState({
                karyawan: karyawanItem,
            });
        });
    }

    render() {
        const {karyawan} = this.state;
        return (
            <View style={styles.pages}>
                <Text>Nama : </Text>
                <Text style= {styles.text}>{karyawan.nama} </Text>

                <Text>Nomor HP : </Text>
                <Text style= {styles.text}>{karyawan.nomorHp} </Text>

                <Text>Email : </Text>
                <Text style= {styles.text}>{karyawan.email} </Text>

                <Text>Alamat : </Text>
                <Text style= {styles.text}>{karyawan.alamat} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pages : {
        margin : 30,
        padding: 20,
        backgroundColor: 'yellow',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text :{
        fontSize : 16,
        fontWeight: 'bold',
        marginBottom : 10
    }
});
