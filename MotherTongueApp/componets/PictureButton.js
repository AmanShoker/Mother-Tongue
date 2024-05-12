import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function PictureButton({ onPress }) {
    return (
        <View style={styles.pictureBorder}>
            <TouchableOpacity 
                style={styles.pictureButton} 
                onPress={() => alert('You pressed a button.')} 
            />
        </View>
    );
}

const styles = StyleSheet.create({

    pictureButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#fff',
    },
    pictureBorder: {
        width: 84,
        height: 84,
        borderWidth: 4,
        borderColor: '#fff',
        borderRadius: 42,
        padding: 3,
    },
});