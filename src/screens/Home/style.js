import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    view: {
        padding: 20,
        flex: 1,
        backgroundColor: '#2f7632'
    },

    viewMed: {
        borderRadius: 20,
        marginBottom: 70
    },  

    Medicament:{
        backgroundColor: "#FFF",
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    
    },

    itemName:{
        fontSize: 25,
        marginRight: 15,
    },

    logo: {
        width: 150,
        height: 100,
        marginTop: 10,
        marginBottom: 40,
        marginLeft: 100
    },

    btnCreate: {
        backgroundColor: '#000000',
        width: 60,
        height: 60,
        borderRadius: 50,
        position: 'absolute',
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignContent: 'center'
    },

    btnTextCreate: {
        fontSize: 24,
        textAlign: 'center',
        color: '#FFF'
    }
});

export default styles;