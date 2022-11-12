import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';




export function Boton({navigation}){
    return(
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Menu')}> 
       <LinearGradient
                    // Button Linear Gradient
                    colors={['purple', 'blue']}
                    start={{x:0, y:0}}
                    end={{x:1, y:1}}
                    style={styles.button}>
                    <Text style={styles.text}>Iniciar sesión</Text>
         </LinearGradient>
    </TouchableOpacity>
    );
    }





const styles = StyleSheet.create({
    container: {
       alignItems: 'center',
       justifyContent: 'center',
        marginTop: 30,
        width: 200,
      },

    text:{
    color: '#fff',
    fontSize: 14, 
    fontWeight: 'bold',

    },
    button: {
     width: '80%',
     alignItems: 'center',
     justifyContent: 'center',
     height: 50,
     borderRadius: 25,
     padding: 10,
     alignItems: 'center',

    }
  });