import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from './src/screens/Login/';
import CreateUser from './src/screens/CreateUser/';
import CreateMedicament from './src/screens/CreateMedicament/';
import Home from './src/screens/Home/';
import AboutApp from './src/screens/AboutApp/';
import Logout from './src/screens/Logout';
import Edit from './src/screens/Edit';
import { MaterialIcons } from "@expo/vector-icons"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#000000' }, //Cor de de fundo do topo
                    headerTintColor: '#FFF', // Cor da fonte no topo
                    headerTitleAlign: 'center' // Alinhamento do texto
                }}
            >
                <Stack.Screen name="Login" component={Login} options={{headerShown: false }} />
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
                <Stack.Screen name="CreateUser" component={CreateUser} options={{ title: 'Cadastro de Usuário' }} />
                <Stack.Screen name="CreateMedicament" component={CreateMedicament} options={{ title: 'Criar Medicamento' }} />
                <Stack.Screen name="Edit" component={Edit} options={{ title: 'Editar' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name == "Home") {
                        iconName = "home";
                    } else if (route.name == "Sobre") {
                        iconName = "info";
                    } else if (route.name == "Logout") {
                        iconName = "logout";
                    }
                    return <MaterialIcons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: "#fff", //Cor de ícones ativos
                tabBarInactiveTintColor: "#2f7632", //Cor de ícones inativos
                tabBarStyle: { backgroundColor: "#000000" }, //Cor de fundo da Tab Navigator
                headerShow: true, // Exibição do cabecalho da página interna
                headerTintColor: "#2f7632", //Cor do texto do topo
                headerTitleAlign: "center", //alinhamento do texto do topo
                headerStyle: { backgroundColor: '#000000' } //Cor de fundo do topo
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Logout" component={Logout} />
            <Tab.Screen name="Sobre" component={AboutApp} />
        </Tab.Navigator>
    );
}