import React from 'react';

function HistoryPage(props) {

  return (
    <div style={{ width: '80%', margin: '3rem auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Bestellliste</h1>
      </div>
      <br />

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Payment</th>
          </tr>
        </thead>

        <tbody>

        </tbody>
      </table>
    </div>
  )
}

export default HistoryPage