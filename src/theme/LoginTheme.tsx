import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    formContainer: {
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'center',
        height: 800,
        padding: -10
    },
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',

    },
    label: {
        marginTop: 25,
        color: 'black',
        fontWeight: 'bold',
    },
    inputField: {
        color: 'black',
        fontSize: 20
    },
    inputFieldIOS: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingBottom: 4
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        borderWidth: 2,
        borderColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: 'black'
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    buttonTextRegister: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        alignItems: 'center'
    },
    newUserContainer: {
        alignItems: 'flex-end',
        marginTop: 20,
    },
    buttonReturn: {
        position: 'absolute',
        top: 50,
        left: 20,
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 100
    }

}
);