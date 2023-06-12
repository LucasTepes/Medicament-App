import { Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import styles from './style';
import firebase from '../../config/fireBase';
import {collection, getFirestore , serverTimestamp,updateDoc,doc} from 'firebase/firestore';
const db = getFirestore(firebase);


export default function Edit({navigation, route}) {
    const [nome, setNome] = useState(route.params.nome)
    const [hora, setHora] = useState(route.params.hora)
    const [dosagem, setDosagem] = useState(route.params.dosagem)
    const [error, setError] = useState(null)

    const validate = () => {
        if (nome == "" || hora == "" || dosagem == "" ) {
            setError("Preencha todos os campos!");
        } else {
            setError(null)
            editMedicament();
        }
    }

    const editMedicament = () => {
        const Medicament = doc(db,'Medicaments', route.params.id);
        updateDoc(Medicament,{
            nome: nome,
            hora: hora,
            dosagem: dosagem,
            data_registro: serverTimestamp()

        });

        navigation.navigate('Tabs')
       
    }

    return (
        <View style={styles.view}>
            {error != null &&
                <Text style={styles.alert}>{error}</Text>
            }

            <TextInput
                style={styles.formInput}
                placeholder='nome'
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.formInput}
                placeholder='Hora de uso '
                keyboardType="numeric"
                value={hora}
                onChangeText={setHora}
            />
            <TextInput
                style={styles.formInput}
                placeholder='dosagem'
                value={dosagem}
                onChangeText={setDosagem}
            />
         

            <TouchableOpacity
                style={styles.formButton}
                onPress={validate}
            >
                <Text style={styles.textButton}>Atualizar informações</Text>
            </TouchableOpacity>
        </View>
    );
}