import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';

import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import ContactList from '../ContactsList';

import { Container } from './styles';

export default function App() {
  return (

    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Container>
        <Header />
        <ContactList />
      </Container>
    </ThemeProvider>
  );
}
