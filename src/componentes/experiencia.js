import React from "react";
import { View, Text} from "react-native";
import { Button } from '@rneui/themed';
import { StyleSheet } from "react-native";

export default function Experiencias({navigation}){
    return(
        <View style = {styles.principal}>
         <Text>
        <Text style = {styles.h1Style}>{`Experiências profissionais \n`}</Text>
        <Text style = {styles.titulo}>{`CO.liga \n`}</Text>
        <Text style = {styles.linhas}>{`Estagiária - 2 anos \n`}</Text>
        <Text style = {styles.titulo}>{`Correios \n`}</Text>
        <Text style = {styles.linhas}>{`Estagiária Adm - 1 ano \n`}</Text>
        <Text style = {styles.titulo}>{`Fiepe \n`}</Text>
        <Text style = {styles.linhas}>{`Estagiária em Comunicação - Atualmente \n`}</Text>
        </Text>
        <Button
        size="lg"
        title="Próxima Página"
        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
        titleStyle={{ color: 'white', marginHorizontal: 20 }}
        onPress = {() => navigation.navigate('Formacao')}
        />
        </View>
    );
}
const styles = StyleSheet.create({
    h1Style: {
        fontSize: 60,
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
    }
})