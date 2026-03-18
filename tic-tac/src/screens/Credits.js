// Credits.js
import { View, StyleSheet } from "react-native";
import TButton from '../components/TButton.js';
import Title from '../components/Title.js';
import colors from '../constants/color.js';
import Message from '../components/Message.js';

const creditsText = "In the realm of X's and O's, upon the grid they go,\n" +
    "Where two contenders face off, in tic-tac-toe.\n" +
    "A pencil mark, a battle stark, lines cross like ancient runes,\n" +
    "Each player seeks, with tactic sleek, to align their threes and twos.\n\n" +
    "First goes X, with hopes to vex, in the corner she resides,\n" +
    "Then O's response, a parry, a taunt, beside the X she slides.\n" +
    "The square becomes a battleground, where silent warriors clash,\n" +
    "With every mark, they leave their spark, in this timeless match.\n\n" +
    "A diagonal attempt, an intercept, the X's make their claim.\n" +
    "But O is shrewd, not easily subdued, and blocks the path to fame.\n" +
    "They dance in turns, the board it churns, with symbols old as time,\n" +
    "A line unbroken, a token, a sign, of a strategy sublime.";

export default function Credits({ navigation }) {
    const navToHome = () => navigation.navigate('Home');
    return (
        <View style={styles.container}>
            <Title label="Credits" />
            <Message text={creditsText} />
            <TButton label="Back" onPress={navToHome} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.background,
    }
})