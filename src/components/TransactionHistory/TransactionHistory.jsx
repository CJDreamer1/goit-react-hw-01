import css from "../TransactionHistory/TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <div className={css.container}>
      <table className={css.mainBorder}>
        <thead className={css.head}>
          <tr>
            <th className={css.headCeil}>Type</th>
            <th className={css.headCeil}>Amount</th>
            <th className={css.headCeil}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className={css.ceil}>{transaction.type}</td>
              <td className={css.ceil}>{transaction.amount}</td>
              <td className={css.ceil}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
