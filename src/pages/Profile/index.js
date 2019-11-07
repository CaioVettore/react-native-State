import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Alert } from 'react-native'

class Profile extends React.Component {

    state = {
        name: '',
        age: '',
        professional: '',
    }

    handleSubit(){
        Alert.alert('seus dados', `nome: ${this.state.name}\nidade: ${this.state.age}\nprofissão: ${this.state.professional}`)
    }

    render() {
        console.log(this.state)
        return (
            <View style={styles.viewBackground}>
                <Text style={styles.textWelcome}>Bem vindo</Text>
                <Text style={styles.yourInfo} >Suas Informações</Text>

                <View style={styles.viewData}>
                    <Text style={styles.textInfo}>Nome: {this.state.name} </Text>
                    <TextInput placeholder="Seu Nome" style={styles.inputInfo} onChangeText={(Text) => this.setState({name:Text})} />

                    <Text style={styles.textInfo}>Idade:  {this.state.age} </Text>
                    <TextInput placeholder="Seu Idade" style={styles.inputInfo} onChangeText={(Text) => this.setState({age:Text}) } />

                    <Text style={styles.textInfo}>Profissão:  {this.state.professional} </Text>
                    <TextInput placeholder="Sua Profissão" style={styles.inputInfo} onChangeText={(Text) => this.setState({professional:Text}) }  />

                    <TouchableOpacity style={styles.buttoSubmith} onPress ={() => this.handleSubit()}>
                        <Text style={styles.textSubmit}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    viewBackground: {
        flex: 1,
        backgroundColor: '#19181f',
        alignItems: "center"
    },
    textWelcome: {
        color: "#ffffff",
        fontSize: 64,
    },
    yourInfo: {
        color: "#ffffff",
        fontSize: 24,
        marginTop: 84,

    }, viewData: {
        marginTop: 80,
        width: '80%',
        alignItems: "center",
    },
    textInfo: {
        color: "#fff",
        fontSize: 20,
    },
    inputInfo: {
        width: "100%",
        backgroundColor: "#676280",
        borderRadius: 5,
        marginBottom: 24
    },
    buttoSubmith: {
        backgroundColor: '#333140',
        padding: 20,
        borderRadius: 5,
        width: "50%",
        alignItems: "center",
        marginTop: 20,

    },
    textSubmit: {
        color: "#fff",
        fontSize: 22,
    }

})
export default Profile