import React from 'react';
import CustomButton from '../components/CustomButton';
import {View} from 'react-native';
import Title from "../components/Title";


function Home ({ navigation })  {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Title id="titleHome"  title="Promotions GoStyle" />
            <CustomButton id="buttonListPromotions" title="Lister les promotions"  onPress={() => navigation.navigate('ListPromotions')} />
            <CustomButton id="buttonScan" title="Scanner un code" onPress={() => navigation.navigate('Scan')} />
        </View>
    );
}

export default Home;
