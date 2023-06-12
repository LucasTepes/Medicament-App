
import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        view: {
            backgroundColor: "#2f7632",
            flex: 1,
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
        },

        logo: {
            width: 230,
            height: 100,
            marginBottom: 30,
        },
        
        alert: {
            fontSize: 18,
            color: "#FFF",
            textAlign: "center",
            marginBottom: 20
        },

        text: {
            fontSize: 20,
            marginBottom: 20,
            color: '#fff'
        },

        button: {
            alignItems: "center",
            backgroundColor: "#ddd",
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
            width: "50%",
        },

        textButton: {
            color: "#FFF",
            fontSize: 24,
            textAlign: "center",
        },
    }
);

export default styles;