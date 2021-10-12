import React from 'react'
import { View, Text, StyleSheet, Image, FlatList,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
const ResultList = ({ title, results}) => {
    const navigation = useNavigation()
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={results => results.id}
               
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('ShowResult',{id:item.id})}>
                        <View  style = {{marginLeft:15}}>
                            <Text>{item.name} [{item.price}]</Text>
                            <Image source={{ uri: item.image_url }} style={styles.image} />
                            <Text>{item.rating} Stars, {item.review_count} Reviews</Text>
                        </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );

}
export default ResultList
const styles = StyleSheet.create({

    input: {

        fontSize: 20,
        height: 50,
        width: 350,
        marginHorizontal: 10,

    },
    image: {

        width: 200,
        height: 150,
        borderRadius: 5,
        marginBottom: 5,
    },


})
