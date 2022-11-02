import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from "./styles";

const DataItem = (props) => {
    const { title, subtitle } = props;
    return (
        <View style={styles.dataContainer}>
            <ImageBackground 
                source={require("../../assets/images/stack.png")}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    )
}

export default DataItem;