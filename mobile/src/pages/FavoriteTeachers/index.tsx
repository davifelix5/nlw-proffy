import React, { useState, useCallback } from 'react'
import { View, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'

function FavoriteTeachers() {
    const [favorites, setFavorites] = useState<Teacher[]>([])
    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(res => {
            if (res) {
                setFavorites(JSON.parse(res))
            }
        })
    }
    useFocusEffect(
        useCallback(() => {
            loadFavorites()
        }, [])
    )
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys favoritos" />
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {favorites.map(teacher => (
                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorite
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default FavoriteTeachers
