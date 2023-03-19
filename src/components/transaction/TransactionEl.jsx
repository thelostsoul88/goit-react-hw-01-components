import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionEl({ type, amount, currency }) {
  return (
    <tr className={css.tr}>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
  );
}

TransactionEl.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
