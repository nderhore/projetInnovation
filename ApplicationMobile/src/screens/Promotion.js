import React, {useEffect, useState} from 'react';
import CustomButton from '../components/CustomButton';
import {View, Text} from 'react-native';
import Title from "../components/Title";


function Promotion ({ route, navigation })  {
    const { hashQrCode } = route.params;
    const [data, setData] = useState([]);

    //si ngrok
    const url = `http://7a41ef528d6d.ngrok.io/Promotion/${hashQrCode}`;

    //si sur ordi
    //const url = `http://localhost:8081/Promotion/${hashQrCode}`;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error));
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            <Title id="titlePromotion"  title="Résultat de la recherche" />
            <Text id="descrPromotion" >Description de la promotion : {data.description}</Text>
            <Text id="dateDebutPromotion">Date de début de la promotion : {data.dateDebut}</Text>
            <Text id="dateFinPromotion">Date de fin de la promotion : {data.dateFin}</Text>
            <Text id="pourcePromotion">Promotion : {data.pourcentagePromo}%</Text>
            <CustomButton id="buttonBackHome" title="Retourner à la page d'accueil" onPress={() => navigation.navigate('Home')} />
        </View>
    );

}

export default Promotion;
