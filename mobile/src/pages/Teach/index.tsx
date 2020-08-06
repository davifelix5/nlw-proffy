import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import teachBackgroundImage from '../../assets/images/give-classes-background.png'

function Teach() {

    const { goBack } = useNavigation()

    function handleGoBackToLanding() {
        goBack()
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="contain"
                source={teachBackgroundImage}
                style={styles.content}
            >
                <Text style={styles.title}>Quer ensinar na plataforma Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web
                </Text>
            </ImageBackground>

            <RectButton onPress={handleGoBackToLanding} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo bem!</Text>
            </RectButton>
        </View>
    )
}

export default Teach
