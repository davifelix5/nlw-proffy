import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import { Teacher } from '../../components/TeacherItem'

import api from '../../services/api'

function TeacherList() {
    const [areFiltersVisible, setAreFiltersVisible] = useState(true)
    const [favorites, setFavorites] = useState<number[]>([])
    const [subject, setSubject] = useState('')
    const [weekday, setWeekday] = useState('')
    const [time, setTime] = useState('')
    const [teachers, setTeachers] = useState<Teacher[]>([])

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(res => {
            if (res) {
                const favoriteTeachersList = JSON.parse(res)
                const favoriteIds = favoriteTeachersList.map((teacher: Teacher) => {
                    return teacher.id
                })
                setFavorites(favoriteIds)
            }
        })
    }

    function toggleFilters() {
        setAreFiltersVisible(!areFiltersVisible)
    }

    async function handleSubmitFilters() {
        loadFavorites()
        const response = await api.get('classes', {
            params: { subject, weekday, time }
        })
        setTeachers(response.data)
        setAreFiltersVisible(false)
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={toggleFilters}>
                        <Feather style={{ padding: 15 }} name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                )}
            >
                {areFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matérias</Text>
                        <TextInput
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            style={styles.input}
                            placeholder="Digite a matéria"
                            placeholderTextColor="#c1bccc"
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    value={weekday}
                                    onChangeText={text => setWeekday(text)}
                                    style={styles.input}
                                    placeholder="Digite o dia"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    style={styles.input}
                                    placeholder="Digite o horário"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>
                        <RectButton
                            style={styles.submitButton}
                            onPress={handleSubmitFilters}
                        >
                            <Text style={styles.submitButtonText}>
                                Filtrar
                            </Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map(teacher => (
                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorite={favorites.includes(teacher.id)}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default TeacherList