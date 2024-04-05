import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/router/stack-navigator';
import BadgeContextProvider from './src/context/provider';

// UI Kitten
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

const App = () => {
  return (
    <BadgeContextProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </BadgeContextProvider>
  );
};

export default App;
