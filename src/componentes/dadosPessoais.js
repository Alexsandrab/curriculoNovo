import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View} from "react-native";
import { Button, Text, ThemeProvider } from '@rneui/themed';
import api from "../services/api.js";

export default function DadosPessoais({navigation}){

    async function consultando() {

        const response = await api.get('/dadosPessoais');
        console.log(response)
        
    }
    return(
        <View style = {styles.principal}>
        <Text>
        <Text style = {styles.titulo}>{`Endereço \n`}</Text>
        <Text style = {styles.linhas}> {}</Text>
        <Text style = {styles.titulo}>{`Telefone \n`}</Text>
        <Text style = {styles.linhas}>{}</Text>
        <Text style = {styles.titulo}>{`Email \n`}</Text>
        <Text style = {styles.linhas}>{}</Text>
        </Text>
        <Button
        size="lg"
         title="Próxima Página"
         buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
         titleStyle={{ color: 'white', marginHorizontal: 20 }}
         onPress = {() => navigation.navigate('Experiencia')}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    h1Style: {
        fontSize: 70,
        color: 'purple'
      },
    titulo: {
        color: '#997755',
        fontSize: 25,
        
    },
    linhas: {
    fontSize: 20,
    },
    principal:{
        textAlign: 'center',
        margin: 20,
        backgroundColor: 'pink'
    }
  
})