import React from "react";
import { View, Text} from "react-native";
import { Button } from '@rneui/themed';
import { StyleSheet } from "react-native";

export default function Formacao({navigation}){
    return(
        <View style = {styles.principal}>
        <Text>
        <Text style = {styles.h1Style}>{`Formações \n`}</Text>
        <Text style = {styles.titulo}>{`Ensino Médio Completo \n`}</Text>
        <Text style = {styles.linhas}>{`Concluido em 2013 \n`}</Text>
        <Text style = {styles.titulo}>{`Ensino Superior Cursando \n`}</Text>
        <Text style = {styles.linhas}>{`Publicidade e Propaganda \n`}</Text>
        <Text style = {styles.titulo}>{`Inglês Fluente \n`}</Text>
        <Text style = {styles.linhas}>{`Concluido em 2015 \n`}</Text>
        <Text style = {styles.titulo}>{`Introdução à Cinema \n`}</Text>
        <Text style = {styles.linhas}>{`Concluido em 2020 \n`}</Text>
        </Text>
        <Button
        size="lg"
        title="Próxima Página"
        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
        titleStyle={{ color: 'white', marginHorizontal: 20 }}
        onPress = {() => navigation.navigate('Hobbies')}
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