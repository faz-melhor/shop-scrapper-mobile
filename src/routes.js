import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Sales from './pages/Sales';

const Routes = createAppContainer(
  createStackNavigator(
    { Sales },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7b297d',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
