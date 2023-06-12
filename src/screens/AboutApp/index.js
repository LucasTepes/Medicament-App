import { Text, Touch, TouchableOpacity, View } from 'react-native';
import styles from '../AboutApp/style';


export default function AboutApp(){
    return (
        <View style={styles.view}>
            <Text style={styles.text}>Ao encontrar um medicamento específico, o MediInfo fornecerá detalhes completos, incluindo a composição, indicações de uso, dosagem recomendada, efeitos colaterais comuns, interações medicamentosas e contraindicações. Você também encontrará informações sobre a disponibilidade do medicamento, seu preço médio e locais próximos onde pode ser adquirido.</Text>
            <Text style={styles.text}>O MediInfo oferece uma interface intuitiva e amigável, projetada para fornecer respostas rápidas e precisas sobre medicamentos. Com apenas alguns toques, você pode pesquisar pelo nome do medicamento, ingrediente ativo ou mesmo pelo nome do fabricante. Além disso, o aplicativo também permite que você escaneie o código de barras do medicamento para obter informações instantâneas.</Text>
        </View>
    );
}