import React, { useState, useEffect }  from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";



const ListPromotions = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    //si ngrok
    const url = `http://7a41ef528d6d.ngrok.io/Promotion`;

    //si sur ordi
    //const url = `http://localhost:8081/Promotion`;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);


    return (
        <View style={{ flex: 1, padding: 24 }}>
            <Title id="titleList"  title="Liste des promotions disponibles" />

            {isLoading ? <ActivityIndicator/> : (
                <View>
                    {data.map((prop, key) => {
                            return [
                                <Text key={key}>Code Promotion : {prop.id} - Description : {prop.description}</Text>,
                                <Button onPress={() => navigation.navigate('Promotion', {hashQrCode: prop.id})} title="Plus d'informations"/>
                        ];
                    })}
                </View>
            )}

            <CustomButton id="buttonBackHome" title="Retourner à la page d'accueil" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

export default ListPromotions;
