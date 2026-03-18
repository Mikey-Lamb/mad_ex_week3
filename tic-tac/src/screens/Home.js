// Home.js
import { View, Text, StyleSheet } from "react-native";
import TButton from '../components/TButton.js';
import Title from '../components/Title.js';
import Board from '../components/Board.js';
import colors from '../constants/color.js';

const plays = ["O", "O", "X", "X", "O", "", "X", "", "O"];

export default function Home({ navigation }) {
    const navToRules = () => navigation.navigate('Rules');
    const navToCredits = () => navigation.navigate('Credits');
    return (
        <View style={styles.container}>
            <Title label="Tic Tac Toe" />
            <Board plays={plays} />
            <View style={styles.buttonRow}>
                <TButton label="Rules" onPress={navToRules} />
                <TButton label="Credits" onPress={navToCredits} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 70,
        marginVertical: 70,
    },
})