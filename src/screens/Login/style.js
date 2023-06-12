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

        formInput: {
            fontSize: 18,
            borderRadius: 10,
            backgroundColor: "#DDD",
            padding: 20,
            marginBottom: 20,
            width: "100%"
        },

        formButton: {
            backgroundColor: "#000000",
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
            width: "100%",
        },

        textButton: {
            color: "#FFF",
            fontSize: 24,
            textAlign: "center",
        },

        btnCreate: {
            marginBottom: 10,
        },

        btnCreateText: {
            color: "#000000"
        }
    }
);

export default styles;