import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from '../constants/color.js';

const TButton = ({ label, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.button,
        paddingVertical: 8,
        paddingHorizontal: 25,
        borderRadius: 25,
        alignItems: 'center',
        marginVertical: 15,
    },
    buttonText: {
        color: colors.text,
        fontSize: 16,
        fontWeight: '600',
    },
});

export default TButton;