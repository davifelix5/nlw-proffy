import React, { useState } from 'react'
import { View, Text, Image, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsAppIcon from '../../assets/images/icons/whatsapp.png'

import api from '../../services/api'

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
    teacher: Teacher,
    favorite: boolean,
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorite }) => {

    const [isFavorite, setIsFavorite] = useState(favorite)

    function heandleDeepLinkToWhatsApp() {
        api.post('connections', {
            user_id: teacher.id
        })
        const message = `Olá, ${teacher.name}. Estou interessado(a) nas suas aulas de ${teacher.subject}!`
        Linking.openURL(`whatsapp://send?text=${message}&phone=+55${teacher.whatsapp}`)
    }

    async function handleToggleFavorite() {
        const favorites = await AsyncStorage.getItem('favorites')
        let favoritesArray = []

        if (favorites) {
            favoritesArray = JSON.parse(favorites)
        }

        if (isFavorite) {
            favoritesArray = favoritesArray.filter((favoriteTeacher: Teacher) => {
                return favoriteTeacher.id !== teacher.id
            })
            setIsFavorite(false)
        } else {
            favoritesArray.push(teacher)
            setIsFavorite(true)
        }

        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
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
                <RectButton
                    onPress={handleToggleFavorite}
                    style={[
                        styles.favoriteButton,
                        isFavorite ? styles.favorite : {}
                    ]}
                >
                    {isFavorite ? (
                        <Image source={unfavoriteIcon} />
                    ) : (
                            <Image source={heartOutlineIcon} />
                        )}
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