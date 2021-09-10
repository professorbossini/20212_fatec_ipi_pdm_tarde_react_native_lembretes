import React, { useState } from 'react';
import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState('')
  const [lembretes, seteLembretes] = useState([])
  const [contador, setContador] = useState(0)

  const capturarLembrete = (lembrete) => {
    setLembrete(lembrete)
  }

  const adicionarLembrete = () => {
    seteLembretes(lembretes => {
      setContador(contador + 1)
      let aux = {key: contador.toString(), value: lembrete}
      setLembrete('')
      return [aux , ...lembretes]
    })
    // console.log(`Adicionando: ${lembrete}`)
  }

  return (
    <View style={styles.telaPrincipalView}>
      <View style={{marginBottom: 12}}>
        {/* Usuário vai inserir lembretes aqui */}
        <TextInput 
          placeholder="Lembrar..."
          style={styles.lembreteTextInput}
          onChangeText={capturarLembrete}
          value={lembrete}
        />
        <Button 
          title="Adicionar lembrete"
          onPress={() => adicionarLembrete()}
        />
      </View>
      <View>
      {/* a lista de lembretes será exibida aqui */}
      <FlatList 
        data={lembretes}
        renderItem={
          (lembrete) => (
            <View
              style={styles.itemNaLista}>
                <Text>{lembrete.item.value}</Text>
            </View>
          )
        }
      />
      {/* <ScrollView>

        {
          lembretes.map(lembrete => (
            <View 
              key={lembrete}
              style={styles.itemNaLista}>
              <Text >{lembrete}</Text>
            </View>
          ))
        }
      </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 50,
  },
  lembreteTextInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 2,
    marginBottom: 4,
    padding: 8
  },
  itemNaLista: {
    padding: 16,
    backgroundColor: '#EEE',
    borderColor: '#BBB',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center'
  }
});


