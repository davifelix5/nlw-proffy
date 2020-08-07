import React from 'react'
import { View, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsAppIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://avatars2.githubusercontent.com/u/62623519?s=460&u=dbd29539a84507b93df8a4f9738cd34856d6e6a2&v=4' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Davi Félix</Text>
                    <Text style={styles.subject}>Física</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                Apaixonado pela física e principalmente pelo universo que nos rodeia
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 50,00</Text>
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.favoriteButton, styles.favorite]}>
                    {/* <Image source={heartOutlineIcon} /> */}
                    <Image source={unfavoriteIcon} />
                </RectButton>
                <RectButton style={styles.contactButton}>
                    <Image source={whatsAppIcon} />
                    <Text style={styles.contactButtonText}>
                        Entre em contato
                    </Text>
                </RectButton>
            </View>
        </View>
    )
}

export default TeacherItem