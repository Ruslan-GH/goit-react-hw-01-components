import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <tbody key={id}>
            <tr>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;

// {items.map(item => {
//     const {id, type, amount, currency} = item;
//     return (
//         <tbody key={id}>
//             <tr>
//                 <td>{type}</td>
//                 <td>{amount}</td>
//                 <td>{currency}</td>
//             </tr>
//         </tbody>
//     )
//     }
// )}
