import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import dataSlice from './Slice/dataSlice'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'

const store=configureStore({reducer:{dataSlice}})

ReactDOM.render(
  <Provider store={store}><App /></Provider>,document.getElementById('root'));