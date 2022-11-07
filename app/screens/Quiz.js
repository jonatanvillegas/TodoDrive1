import React  from 'react'
import { StyleSheet, Text, View , SafeAreaView, StatusBar, TouchableOpacity , Modal, Animated} from 'react-native';
import { COLORS,SIZES } from '../constants';
import infor from '../data/QuizData'
import MaterialCommunityIcons from  "react-native-vector-icons/MaterialCommunityIcons"
import { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Quiz = ({navigation}) => {
    const allQuestions = infor;
    const [currentQuestionIndex , setcurrentQuestionIndex] = useState(0)
    const [currentOptionSelect , setcurrentOptionSelect] = useState(null)
    const [correctOption , setcorrectOption] = useState(null)
    const [isOptionsDisabled, setisOptionsDisabled] = useState(false)
    const [score, setScore] = useState(0)
    const [showNextButton , setshowNextButton] = useState(false)
    const [showScoreModal , setshowScoreModal] = useState(false)

    const validateAnswer = (selectOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setcurrentOptionSelect(selectOption);
        setcorrectOption(correct_option);
        setisOptionsDisabled(true);
        if(selectOption == correct_option){
            //mostrar resultado
            setScore(score+1)
        }
        //mostrar boton
        setshowNextButton(true)
    }
    const handleNext = () =>{
        if (currentQuestionIndex == allQuestions.length-1) {
            
            setshowScoreModal(true)
        }else{
            setcurrentQuestionIndex(currentQuestionIndex+1);
            setcurrentOptionSelect(null);
            setcorrectOption(null);
            setisOptionsDisabled(false);
            setshowNextButton(false);
        }

        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const renderQuestion = () => {
        return(
            <View style={{
                marginVertical: 10
            }}>
                {/*contador de preguntas*/}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    <Text style={{color: COLORS.white, fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex+1}</Text>
                    <Text style= {{color: COLORS.white, fontSize: 18, opacity: 0.6}}>/ {allQuestions.length}</Text>
                </View>
                {/*preguntas*/}
                <Text style={{
                    color: COLORS.white,
                    fontSize: 20,

                }}
                
                > {allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
         )
    }  
    
    const renderOption = () => {
        return(
            <View>
                {
                    allQuestions[currentQuestionIndex]?.option.map(option => (
                        <TouchableOpacity
                        onPress={() => validateAnswer(option)}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            borderWidth: 3, borderColor: option == correctOption 
                            ? COLORS.success
                            : option == currentOptionSelect 
                            ? COLORS.error 
                            : COLORS.secondary+'40',
                            backgroundColor: option == correctOption 
                            ? COLORS.success + 20
                            : option == currentOptionSelect
                            ? COLORS.error + '20'
                            : COLORS.secondary+'20',
                            height:90, borderRadius:20, 
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            marginTop: 20

                        }}
                        >
                            <Text style={{color: COLORS.white, fontSize: 15}} >{option}</Text>

                            {/*mostrar icono de check o equis si la pregunta es correcta*/}
                            {
                                option == correctOption ? (
                                    <View style= {{
                                        width: 30, height: 30, borderRadius:30/2,
                                        backgroundColor: COLORS.success,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name='check' style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ): option == currentOptionSelect ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius:30/2,
                                        backgroundColor: COLORS.error,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name='close' style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />

                                    </View>
                                ): null
                            }

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }

    const renderNextButton = () =>{
        if (showNextButton) {
            return( 
                <TouchableOpacity
                onPress={handleNext}
                style={{
                    marginTop: 20, width: '100%', backgroundColor: COLORS.secondary, padding: 20, borderRadius: 5
                }}
                >
                    <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>Siguiente</Text>
                </TouchableOpacity>
            )
        }else{
            return null
        }
    }

    const [progress , setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange:['0%','100%']
    })
    const renderProgressBar = () =>{
        return(
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020',
            }}> 
                <Animated.View style={[{
                    height:20,
                    borderRadius: 20,
                    backgroundColor: COLORS.secondary
                },{ 
                    width: progressAnim
                }]}>
                  
                </Animated.View>

            </View>
        )
    }

    const restartQuiz = () =>{
        setshowScoreModal(false);
        setcurrentQuestionIndex(0);
        setScore(0);
        setcurrentOptionSelect(null);
        setcorrectOption(null);
        setisOptionsDisabled(false)
        setshowNextButton(false)
        
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
            
        }).start();
    }


  return (
    <SafeAreaView  style={{
        flex: 1
    }}>
      <StatusBar barStyle='light-content' backgroundColor={COLORS.primary}/>
      <View  style={{
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 16,
        backgroundColor: COLORS.background,
        position: 'relative'
      }}>
        {/*barra de progreso*/}
        {renderProgressBar()}

        {/*preguntas*/}
        {renderQuestion()}

        {/*opciones*/}
        {renderOption()}

        {/*Boton Siguiente*/}
        {renderNextButton()}

        {/*ventana Modal*/}
            <Modal
            animationType='slide'
            transparent={true}
            visible={showScoreModal}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: COLORS.primary,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        backgroundColor: COLORS.white,
                        width: '90%',
                        borderRadius: 20,
                        padding: 20,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 20, fontWeight: 'bold' 
                            }}>
                                {score > (allQuestions.length/2)? 'Felicidades estas lito!' : 'Oops! sigue intentando'}
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginVertical: 30
                        }}>
                            <Text style={{
                                fontSize: 20,
                                color: score < (allQuestions.length / 2) ? COLORS.error : COLORS.success
                            }}>
                                {score}</Text>
                            <Text style={{
                                fontSize:18, color: COLORS.black
                            }}>/ {allQuestions.length}</Text>

                        </View>
                        {/*Comensar de nuevo*/}
                        {
                            score < 18 ? (
                                <>
                                    <TouchableOpacity onPress={restartQuiz} style={{
                                        backgroundColor: COLORS.secondary,
                                        padding: 20, width: '100%', borderRadius: 20
                                    }}>
                                        <Text style={{ 
                                            textAlign: 'center', color:COLORS.white, fontSize: 20
                                        }}> Reintentar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPressOut={restartQuiz} onPress={() => navigation.navigate('Menu') } style={{
                                    backgroundColor: COLORS.secondary,
                                    padding: 20, width: '100%', borderRadius: 20 ,marginTop: 20
                                    }}>
                                    <Text  style={{ 
                                        textAlign: 'center', color:COLORS.white, fontSize: 20
                                    }}>Regresar a Menu</Text>
                                 </TouchableOpacity>
                                </>
                                
                                
                            ):(
                                <TouchableOpacity onPressOut={restartQuiz} onPress={() => navigation.navigate('Menu') } style={{
                                    backgroundColor: COLORS.secondary,
                                    padding: 20, width: '100%', borderRadius: 20
                                }}>
                                    <Text  style={{ 
                                        textAlign: 'center', color:COLORS.white, fontSize: 20
                                    }}>Regresar a Menu</Text>
                                </TouchableOpacity>
                                
                            )

                        }
                        
                    </View>
                </View>
            </Modal>
      </View>
      
    </SafeAreaView>
  )
}

export default Quiz
