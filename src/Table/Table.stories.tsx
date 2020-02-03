import * as React from 'react';
import { Table } from '.';

export default {
  title: 'Table',
};

export const table = () => (
  <div>
    <h2>Table Element</h2>
    <Table>
      <thead>
        <tr>
          <th>Field</th>
          <th>Field</th>
          <th>Field</th>
          <th>Field</th>
          <th>Field</th>
          <th>Field</th>
          <th>Field</th>
          <th>Field</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01/01/2020</td>
          <td>1.2500000 BTC</td>
          <td>Received (bitcoin)</td>
          <td>Cold Card #2</td>
          <td>Unconfirmed (2)</td>
          <td>0.2500000 BTC</td>
          <td>632,764</td>
          <td>View transaction</td>
        </tr>
        <tr>
          <td>01/01/2020</td>
          <td>1.2500000 BTC</td>
          <td>Received (bitcoin)</td>
          <td>Cold Card #2</td>
          <td>Unconfirmed (2)</td>
          <td>0.2500000 BTC</td>
          <td>632,764</td>
          <td>View transaction</td>
        </tr>
        <tr>
          <td>01/01/2020</td>
          <td>1.2500000 BTC</td>
          <td>Received (bitcoin)</td>
          <td>Cold Card #2</td>
          <td>Unconfirmed (2)</td>
          <td>0.2500000 BTC</td>
          <td>632,764</td>
          <td>View transaction</td>
        </tr>
      </tbody>
    </Table>
  </div>
);
