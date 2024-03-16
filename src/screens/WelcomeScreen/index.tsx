import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '@/routes/stack';

const WelcomePage = () => {

    const navigation = useNavigation<StackTypes>();
  return (
    <View style={{marginTop: 60}}>
      <Text>WelcomePage</Text>
      <Button title='Vamos lá !' onPress={()=>{
        navigation.navigate("Home")
      }}/>
    </View>
  )
}

export default WelcomePage