import PropTypes from 'prop-types';
import { StyledSpiner } from './styles';

export default function Spinner({ size }) {
  return (
    <StyledSpiner size={size} />
  );
}

Spinner.propTypes = {
  size: PropTypes.number,
};

Spinner.defaultProps = {
  size: 32,
};
