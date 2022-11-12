import { StatusBar } from 'expo-status-bar';
import foto from './img/foto.png'
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Boton } from './Boton';


 export default function Login({navigation}) {
    return (
      <View style={styles.container}>
        <Image
        style={{width: 180, height: 180}}
        source={foto}
        />
        <Text style={styles.titulo}>TodoDrive</Text>

        <Text style={styles.subTitle}>Inicia sesión con tu cuenta</Text>

        <TextInput 
        placeholder='E-mail'
        style={styles.textInput}
        />

        <TextInput 
        placeholder='Contraseña'
        secureTextEntry={true}
        style={styles.textInput}
        />
        <Text style={styles.forgotpass}>¿Olvidaste tu contraseña?</Text>
          <Boton
          navigation={navigation}
          />
        <Text style={styles.nocuenta}>No tengo cuenta</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      justifyContent: 'center',  
  
    },
    titulo: {
      fontSize: 50,
      color:'blue',
      fontWeight: 'bold',
    },
    subTitle:{
      marginTop: 20,
      fontSize: 17,
      color: 'gray', 
    },
    textInput:{
      padding: 10, 
      paddingStart: 20,
      width: '80%', 
      height: 40,
      marginTop: 15,
      borderRadius: 20, 
      backgroundColor: '#fff',
     
    },
    forgotpass:{
    fontSize: 15,
    color: 'gray',
    marginLeft: 170,
    marginTop: 10,
    },
  
    nocuenta:{
      marginTop: 10,
      fontSize: 15,
      color: 'gray', 
      },
  
  });

 