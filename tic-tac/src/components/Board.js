import { StyleSheet, Text, View } from "react-native";
import colors from '../constants/color.js';

const Cell = ({ play }) => {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{play}</Text>
        </View>
    );
};

const Board = ({ plays }) => {
    return (
        <View style={styles.board}>
            {plays.map((p, i) => (
                <Cell key={i} play={p} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    board: {
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: colors.cellBorder,
        borderRadius: 10,
        backgroundColor: colors.boardBorder,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingTop: 30,
    },
    box: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: colors.cellBorder,
        backgroundColor: colors.cell,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 50,
        fontWeight: "bold",
        color: colors.boardText,
    },
});

export default Board;