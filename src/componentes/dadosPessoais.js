import React, { useEffect, useState } from "react";
import { StyleSheet, View} from "react-native";
import { Button, Text, ThemeProvider } from '@rneui/themed';
import api from "../services/api.js";

export default function DadosPessoais({navigation}){
    //tentei fazer essa funcao e depois chamar um botão, mas sem sucesso, ele não conseguiu achar a rota
    async function consulta(){
        const response = await api.get('dados');
        alert(response);
    }   

    return(
        <View style = {styles.principal}>
        <Text>
        <Text style = {styles.h1Style}>{`RUTE BEATRIZ DA SILVA \n`}</Text>
        <Text style = {styles.titulo}>{`Endereço \n`}</Text>
        <Text style = {styles.linhas}> {`Rua da Aurora - 14 - Paulista - PE \n`}</Text>
        <Text style = {styles.titulo}>{`Telefone \n`}</Text>
        <Text style = {styles.linhas}>{`81 - 981143296 \n`}</Text>
        <Text style = {styles.titulo}>{`Email \n`}</Text>
        <Text style = {styles.linhas}>{`Rute@gmail.com \n`}</Text>
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