import React from 'react';
import ReactDOM from 'react-dom';
import{ BrowserRouter} from 'react-router-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './components/App';
import theme from './theme';
import treeReducer from './reducer/reducer'


const store = createStore(treeReducer);

const app =(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);

ReactDOM.render(app, document.querySelector('#root'));
