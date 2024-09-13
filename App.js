import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas
import FormTriagem from './components/atendimentoPessoalTitular';
import Home from './components/home';
import TriagemForm from './components/fichaAtendimentoTitular';
import Carteirinha from './components/carteirinha';
import PrimeirosSocorros from './components/PrimeirosSocorros';
import FormTriagemDependente from './components/atendimentoPessoalDependente'
import scoringSystem from './components/resultado'
import ResultadoTriagemD from './components/resultadoDependente';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function FormTriagemTitular() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="FormTriagem" component={FormTriagem} />
      <Stack.Screen name="TriagemForm" component={TriagemForm} />
      <Stack.Screen name="Resultado" component={scoringSystem} />
    </Stack.Navigator>
  );
}

function FormTriagemD() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="FormTriagem" component={FormTriagemDependente} />
      <Stack.Screen name="TriagemForm" component={TriagemForm} />
      <Stack.Screen name="Resultado" component={ResultadoTriagemD} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <Image source={require('./assets/logo2.png')} style={styles.logo} />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Ionicons
                name="menu"
                size={30}
                color="#fff"
                style={styles.menuIcon}
              />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#6DD9C9',
          },
        })}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Ficha de Atendimento Titular" component={FormTriagemTitular} />
        <Drawer.Screen name="Ficha de Atendimento Dependente" component={FormTriagemD} />
        <Drawer.Screen name="Carteirinha" component={Carteirinha} />
        <Drawer.Screen name="Primeiros Socorros" component={PrimeirosSocorros} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 30,
    marginLeft: -10,
    resizeMode: 'contain',
  },
  menuIcon: {
    marginRight: 15,
  },
});
