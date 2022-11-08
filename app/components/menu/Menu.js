import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
const Menu = () => {
   
    return (
    
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenido</Text>
            <Text style={styles.text2}>🚦🚘🛑</Text>
            <Text style={styles.text3}>Disfruta tu estancia en la app.</Text>

        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
    fontSize: 60,
    marginTop: 100,
    color: 'blue',
    fontWeight: 'bold'
    
    },

    text2:{
    marginTop: 40,
    fontSize: 70,
    color: 'blue',
    },

    text3:{  
    marginTop: 200,
    fontSize: 20,
    color: 'blue',
                    
    }
  
  });

export default Menu
