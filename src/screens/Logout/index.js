import { Text, TouchableOpacity, View } from 'react-native'
import firebase from '../../config/fireBase';
import { getAuth, signOut } from "firebase/auth";
import styles from '../Logout/style';

export default function Account({navigation}) {
    const signOutFirebase = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.navigate('Login')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <View style={styles.view}>

            <Text style={styles.text}>Deseja realmente sair?</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={signOutFirebase}
            >
                <Text>Sim</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text>Não</Text>
            </TouchableOpacity>
        </View>
    );
}