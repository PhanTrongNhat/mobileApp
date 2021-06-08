import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Products from './screens/products';
import Detail from './screens/productDetail';

const appNavigator = createStackNavigator();

export default appNavigator;