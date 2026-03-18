import { View, Text, StyleSheet } from "react-native";
import colors from '../constants/color.js';

const Title = ({ label }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: colors.titleBorder,
        borderWidth: 1,
        backgroundColor: colors.title,
        borderRadius: 8,
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 25,
        marginVertical: 25,
        width: '90%',
    },
    text: {
        color: colors.text,
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Title;