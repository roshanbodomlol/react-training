import React from 'react';

import asd, { frontend } from './utilities/test';

export function App() {
  return (
    <div>
      <table>
        <tr>
          <th>Backend</th>
          <th>Frontend</th>
        </tr>
        <tr>
          <td>{asd}</td>
          <td>{frontend}</td>
        </tr>
      </table>
    </div>
  );
}
