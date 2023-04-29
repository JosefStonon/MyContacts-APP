import { Container, InputSearchContainer } from './styles';

import logo from '../../assets/images/logo-svg.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width="201" />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar por nome..." />
      </InputSearchContainer>
    </Container>
  );
}
