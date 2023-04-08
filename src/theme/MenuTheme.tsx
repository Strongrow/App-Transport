import { StyleSheet } from "react-native";

export const menuStyles = StyleSheet.create({

    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        position: 'absolute',
        alignItems: 'center',
        right: 180,
        top: 100


    }, containerBell: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        top: 350,
        width: 200,
        height: 300,
        borderColor: 'black',
        right: -200
    },
    button: {
        borderWidth: 2,
        borderColor: 'balck',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: 'green'
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    badge: {
        position: 'relative',
        top: -80,
        right: -40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 20,
        height: 20,
    },
    count: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: -35
    },
    containerUser: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        top: 60,
        width: 200,
        height: 300,
        borderColor: 'black',
        right: -5
    },
    badgeUser: {
        position: 'relative',
        top: -45,
        right: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 20,
        height: 20,
    },
    userPlus: {
        position: 'relative',
        top: -23,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 20,
        height: 20,
    },
    textUser: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 20,
    },
    containerPosition: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        top: -400,
        width: 200,
        height: 300,
        borderColor: 'black',
        right: -5
    },
    containerChat: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        top: -700,
        width: 200,
        height: 300,
        borderColor: 'black',
        right: -200
    },
    containerLogOut: {
        position: 'absolute',
        top: -1000,
        alignItems: 'center',
        justifyContent: 'center',
        right: 280
    },
    containerInicio: {
        position: 'absolute',
        top: -1000,
        alignItems: 'center',
        justifyContent: 'center',
        right: 140
    }
});