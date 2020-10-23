import React from 'react';
import { View , Text, StyleSheet, StatusBar } from 'react-native';

// React native não possui valor semântico (significado).
// Não possuem estilização própria.
// Todos os componentes possuem por padrão display flex;

// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3, h4, h5

export default function App() {
    return (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1"></StatusBar>
        <View style={styles.container}>
            <Text style={styles.title}>Hello World React-Native Mobile</Text>
        </View>
    </>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title:{
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
});