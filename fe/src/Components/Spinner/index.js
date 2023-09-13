import PropTypes from 'prop-types';
import { StyledSpiner } from './styles';

export default function Spinner({ size = 32 }) {
  return <StyledSpiner size={size} />;
}

Spinner.propTypes = {
  size: PropTypes.number,
};
