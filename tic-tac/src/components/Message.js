import { ScrollView, Text, StyleSheet } from "react-native";
import colors from '../constants/color.js';

const Message = ({ text }) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.message,
        borderColor: colors.messageBorder,
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 25,
        marginBottom: 20,
        maxHeight: '75%',
        width: '90%',
    },
    text: {
        color: colors.text,
        fontSize: 20,
    },
});

export default Message;