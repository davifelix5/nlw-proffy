import React from 'react'
import { View } from 'react-native'

import PageHeader from '../../components/PageHeader'

import styles from './styles'

function FavoriteTeachers() {
    return (
        <View style={styles.container}>
            <PageHeader title="Favoritos" />
        </View>
    )
}

export default FavoriteTeachers
