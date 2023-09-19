import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import defaultTheme from '../../assets/styles/theme/default';

import GlobalStyles from '../../assets/styles/global';

import Header from '../Header';
import Router from '../../Router';
import { Container } from './styles';

import ToastContainer from '../Toast/ToastContainer';

export default function App() {
  return (

    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />

        <Container>
          <Header />
          <Router />
        </Container>
      </ThemeProvider>
    </BrowserRouter>

  );
}
