import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Button, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import Card from './componts/Card';

function App() {

  const [liste, setListe] = useState([])
  const [input, setInput] = useState("")

  function ekle(){
    if(input){
      setListe((prev) => [...prev, input])
      setInput("")
    }
  }

  function sil(index) {
    setListe((prev) => prev.filter((_, i) => i !== index));
}

  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.ust}>
      <Text style={styles.yazi}>Yapılacaklar</Text>
      <Text style={styles.yazi}>{liste.length}</Text>
    </View>
    

    <FlatList 
      data={liste}
      renderItem={({item, index}) => (
        <View style={styles.card}>
          <Text style={styles.kartYazi}>{item}</Text>
          <TouchableOpacity onPress={() => sil(index)}>
            <Text>Sil</Text>
          </TouchableOpacity>
        </View>
  )}
    />


   <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
    <View style={styles.inputView}>
      <TextInput placeholder="Yapılacak" onChangeText={setInput} style={styles.input} value={input}/>
      <TouchableOpacity onPress={ekle} style={styles.buton}>
        <Text style={styles.butonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
   </KeyboardAvoidingView>


    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#102027"
  },

  ust: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },

  yazi: {
    fontSize: 30,
    color: "#fff"
  },

  inputView: {
    backgroundColor: "#fff",
    width: 400,
    borderRadius: 20,
    margin: 10,
  },

  input: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1
  },

  buton: {
    backgroundColor: "red",
    color: "#fff",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    
  },
  
  butonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },

  card: {
    backgroundColor: "#f9a201",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  inputContainer: {
    position: "absolute",
    bottom: 20,
  },

});
