// Rules.js
import { View, StyleSheet } from "react-native";
import TButton from '../components/TButton.js';
import Title from '../components/Title.js';
import colors from '../constants/color.js';
import Message from '../components/Message.js';

const rulesText =
    "You probably already know how to play Tic-Tac-Toe. It's really a simple game, right? That's what most people think.\n\n" +
    "But if you really wrap your brain around it, you'll discover that Tic-Tac-Toe isn't quite as simple as you think.\n\n" +
    "Rules for Tic-Tac-Toe\n\n" + "1. The game is played on a grid that's 3 squares by 3 squares.\n\n" +
    "2. You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares.\n\n" +
    "3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.\n\n" +
    "4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.";


export default function Rules({ navigation }) {
    const navToHome = () => navigation.navigate('Home');
    return (
        <View style={styles.container}>
            <Title label="Rules" />
            <Message text={rulesText} />
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