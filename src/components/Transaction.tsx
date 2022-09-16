import React from "react";
import './transaction.css'

const Transaction =()  => {
    const data = [
        { id: "M0127543", date: '18.05.2022', description: "Code 0HG693G", status:'completed', descriptions:'$33000' },
        { id: "P0127543", date: '18.05.2022', description: "Code 0HG69FG", status:'completed', descriptions:'$33000' },
        { id: "M0127547", date: '18.05.2022', description: "Code 0HG693G", status:'completed', descriptions:'$33000' },
        { id: "M0127549", date: '18.05.2022', description: "Code 0HG693G", status:'completed', descriptions:'$33000' },
        { id: "M0127540", date: '18.05.2022', description: "Code 0HG693G", status:'completed', descriptions:'$33000' },
      ]
return (
    <div className="transaction-container">
        {/* <section className="first-heading-transaction">
            <p>Recent Transactions</p>
            <p>Export</p>
        </section>
        <section className="second-heading-transaction">
            <p>Incoming</p>
            <p>Invoices</p>
        </section> */}
        {/* <section className="first-heading-transaction">
            <p>Recent Transactions</p>
            <p>Export</p>
        </section> */}
        <table className="table-one">
            <tr className="first-heading">
                <td className="recent-transactions">Recnt transactions</td>
                <td className="export-btn">Export</td>
            </tr>
        </table>
        <table className="table-two">
            <tr className="second-heading">
                <td className="item1">Incoming</td>
                <td className="item2">Invoices</td>
            </tr>
        </table>
        <table className="transaction-table">
        <tr className="main-table-row">
          <th className="tableEmelent"><input type="checkbox" />Invoice ID</th>
          <th className="tableEmelent">Date</th>
          <th className="tableEmelent">Description</th>
          <th className="tableEmelent">Status</th>
          <th className="tableEmelent">Description</th>
        </tr>
       {data.map((val, key) => {
        return (
            <tr className="main-table-row" key={key}>
                <td className="tableEmelent"><input type="checkbox" />{val.id}</td>
                <td className="tableEmelent">{val.date}</td>
                <td className="tableEmelent">{val.description}</td>
                <td className="tableEmelent completed">{val.status}</td>
                <td className="tableEmelent">{val.descriptions}</td>
            </tr>
        )
       })}
      </table>
    </div>
)
}

export default Transaction;
