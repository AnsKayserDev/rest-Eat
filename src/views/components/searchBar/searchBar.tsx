
import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput, Image
} from 'react-native';
import styles from './styles';
import { Search_Icon_Image } from '../../../infrastructure/assets/themes/images';

export default function Searchbar({ value, updateSearch, style }: any) {

    const [query, setQuery] = useState();
    const [error, setError]: any = useState()
    return (
        <View style={[styles.container, style]}>
            <View style={styles.searchContainer}>
                <View style={styles.vwSearch}>
                    <Image
                        style={styles.icSearch}
                        source={{ uri: Search_Icon_Image }} />
                </View>
                <TextInput
                    value={query}
                    placeholder="Search"
                    style={styles.textInput}
                    onChangeText={(text: any) => {
                        var letters = /^$|^[a-zA-Z._\b ]+$/;
                        if (text.length > 12)
                            setError("Please Enter 12 characters minimum")
                        else if (text.match(letters)) {
                            setQuery(text)
                            updateSearch(text)
                            if (error)
                                setError(false)
                        }
                        else setError("Please only enter alphabets")
                    }}
                />
                {
                    query ?
                        <TouchableOpacity
                            onPress={() => setQuery('')}
                            style={styles.vwClear}>
                            <Image
                                source={{ uri: 'https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-back-vector-icon-png-image_470452.jpg' }} />
                        </TouchableOpacity>
                        : <View style={styles.vwClear} />
                }

            </View>
            {
                error &&
                <Text style={styles.txtError}>
                    {error}
                </Text>
            }
        </View >
    )
}
