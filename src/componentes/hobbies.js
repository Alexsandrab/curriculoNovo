import React from "react";
import { View, Text} from "react-native";
import { Button } from '@rneui/themed';
import { StyleSheet } from "react-native";

export default function Hobbies({navigation}){
    return(
        <View style = {styles.principal}>
        <Text style = {styles.h1Style}>
        Um pouco sobre mim</Text>
        <Text style = {styles.linhas}>Olá, esse é o momento de falar um pouco de mim. Tenho 22 anos e estou sempre
            disposta a aprender. Meus hobbies são mais concentrados na produção de textos, principalmente relacionados
            a narrativas poéticas e roteiros cinematográficos. Além disso, eu gosto muito de aprender novas ferramentas
            através de cursos voltados à economia criativa, através de experiência visual e novas perspectivas.
        </Text>
        <Button
        size="lg"
        title="Retornar a página principal"
        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
        titleStyle={{ color: 'white', marginHorizontal: 20 }}
        onPress = {() => navigation.navigate('DadosPessoais')}
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
        backgroundColor: 'pink',
        textAlign: 'center',
        margin: 20,
    },
})