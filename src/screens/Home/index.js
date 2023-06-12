import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../Home/style';
import firebase from '../../config/fireBase';
import { getFirestore, collection, orderBy, query ,onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const db = getFirestore(firebase);
import { MaterialIcons } from '@expo/vector-icons';
import Edit from '../Edit';

export default function Home({ navigation }) {
  const [Medicament, setMedicament] = useState([]);

  const deleteMedicament = (id) => {
    deleteDoc(doc(db, "Medicaments", id));
  };

useEffect(() => {
     const q = query(collection(db, "Medicaments"),
     orderBy("data_registro"), 
     orderBy("nome"), 
     orderBy("hora"), 
     orderBy("dosagem")
     );
     const unsubscribe = onSnapshot(q, (querySnapshot) => {
       const Medicaments = [];
       querySnapshot.forEach((doc) => {
         Medicaments.push({ ...doc.data(), id: doc.id });
       });
       setMedicament(Medicaments);
     });
   }, []);



return (
     <View style={styles.view}>

          <Image style={styles.logo} source={require("../../../assets/logo.png")}/>

          <FlatList
               style={styles.viewMed}
               showsHorizontalScrollIndicator={false}
               data={Medicament}
               renderItem={({ item }) =>
                    <View style={styles.Medicament}>
                         <View style={styles.grid}>
                              <Text style={styles.itemName}>{item.nome}</Text>
                              <Text > {item.hora} as horas </Text>
                              <Text > {item.dosagem}mg</Text>
                         </View>
                         <TouchableOpacity
                              onPress={() => deleteMedicament(item.id)}>
                              <MaterialIcons name='delete' size={26} color="#000000"></MaterialIcons>
                         </TouchableOpacity>
                         <TouchableOpacity
                              onPress={()=>navigation.navigate("Edit",{
                              id: item.id,     
                              nome: item.nome,
                              hora: item.hora,
                              dosagem: item.dosagem,
                              }    
                         )}>
                              <MaterialIcons name='refresh' size={26} color="#000000"></MaterialIcons>
                         </TouchableOpacity>
                    </View>

               }
          />
          <TouchableOpacity
               style={styles.btnCreate}
               onPress={() => navigation.navigate('CreateMedicament')}
          >
               <Text style={styles.btnTextCreate}>+</Text>
          </TouchableOpacity>
     </View>
);}