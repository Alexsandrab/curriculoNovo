import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DadosPessoais from './src/componentes/dadosPessoais';
import Experiencias from './src/componentes/experiencia';
import Formacao from './src/componentes/formacao';
import Hobbies from './src/componentes/hobbies';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DadosPessoais'>
        <Stack.Screen name= "DadosPessoais" component={DadosPessoais}/>
        <Stack.Screen name= "Experiencia" component={Experiencias}/>
        <Stack.Screen name= "Formacao" component={Formacao}/>
        <Stack.Screen name= "Hobbies" component={Hobbies}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
