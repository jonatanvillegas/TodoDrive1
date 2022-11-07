import { StyleSheet, Text, View,Image } from 'react-native';
import { COLORS } from '../../constants';
import barra from './barra.png'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function Ayuda() {
  return (
      
        <View style={styles.container}> 
            <AntDesign name='filetext1' color={COLORS.secondary} size={55} marginTop={50}/>  

                <View style={styles.text}>
                <Text style={{color: 'white', textAlign: 'center', fontSize: 24}}>Examen</Text>

                <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>Simulacion del Exmamen real para que practique antes de realizarlo en  la policia nacional,
                    se mostrara una seria de 20 preguntas obtenidas del libro ley 431 </Text>
                </View>
                
        </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'
  },
  text: {
    padding: 20,
    backgroundColor:'#1e90ff',
    borderRadius: 20,
    fontSize: 24,
    marginTop:80,
    paddingEnd: 50,
    marginLeft:40,
    marginRight:40,

  }
});
