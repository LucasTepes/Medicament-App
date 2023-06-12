import { Text, Touch, TouchableOpacity, View, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import styles from './style';
import firebase from '../../config/fireBase'
import{getFirestore} from 'firebase/firestore'
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
const db = getFirestore(firebase)


export default function CreateMedicament({navigation}) {
    const [nome, setNome] = useState("")
    const [hora, setHora] = useState("")
    const [dosagem, setDosagem] = useState("")
    const [error, setError] = useState(null)

    const validate = () => {
        if (nome == "" || hora == "" || dosagem == "" ) {
            setError("Preencha todos os campos!");
        } else {
            setError(null)
           CreateMedicament();
        }
    }

    const CreateMedicament = () => {
        const newProduct= addDoc(collection(db,'Medicaments'),{
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
                <Text style={styles.textButton}>Cadastrar medicamentos</Text>
            </TouchableOpacity>
        </View>
    );
}