import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import CustomText from 'components/CustomText';
import Smile from 'assets/smile.svg';
import { LanguageButton } from 'components/LanguageButton';
import Counter from 'components/Counter';
import { useTranslation } from 'react-i18next';
import CustomScreen from 'components/CustomScreen';
import {useStore} from '../store';
const Home = () => {
  const { t } = useTranslation();

  const setToken = useStore(({ setToken }) => setToken);
  const getCards = useStore(({ getCards }) => getCards);
  const token = useStore((state) => state.token);
  const cardList = useStore((state) => state.cardList);
  useEffect(() => {
    getCards()
  }, [])
  
  useEffect(() => {

  }, [cardList])
  

  return (
    <CustomScreen justifyContent={'space-evenly'} testID={'HomeScreen'}>
      <Counter />
      <View>
        <LanguageButton language={'en'} />
        <LanguageButton language={'ro'} />
      </View>
      <CustomText
        fontWeight={'700'}
        textAlign={'center'}
        onPress={() => {
          setToken('');
        }}
        my={20}
        testID={'btnLogout'}>
        {t('logout')}
      </CustomText>
      <Smile />
    </CustomScreen>
  );
};

const Button = styled.TouchableOpacity`
  margin: 20px;
  height: 48px;
  justify-content: space-evenly;
`;

Home.whyDidYouRender = true;

export default Home;
