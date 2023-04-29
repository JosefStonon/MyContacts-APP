import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/theme/default';

import GlobalStyles from '../../assets/styles/global';

import Header from '../Header';
import ContactsList from '../ContactsList';

import { Container } from './styles';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}
