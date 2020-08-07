import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsAppIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

export interface Teacher {
    id: number,
    avatar: string,
    bio: string,
    price: number,
    name: string,
    subject: string,
    whatsapp: string,
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function heandleDeepLinkToWhatsApp() {
        const message = `Olá, ${teacher.name}. Estou interessado(a) nas suas aulas de ${teacher.subject}!`
        Linking.openURL(`whatsapp://send?text=${message}&phone=+55${teacher.whatsapp}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                {teacher.bio}
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ {teacher.price}</Text>
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.favoriteButton, styles.favorite]}>
                    {/* <Image source={heartOutlineIcon} /> */}
                    <Image source={unfavoriteIcon} />
                </RectButton>
                <RectButton style={styles.contactButton} onPress={heandleDeepLinkToWhatsApp}>
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