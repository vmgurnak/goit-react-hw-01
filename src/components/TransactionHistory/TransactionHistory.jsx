import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={css.transactionTable}>
        <thead className={css.transactionHead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={css.transactionCont}>
          {items.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
