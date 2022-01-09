import React from 'react';
import {SafeAreaView} from 'react-native';
import Index from './src/screens/Index';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Index />
    </SafeAreaView>
  );
};
