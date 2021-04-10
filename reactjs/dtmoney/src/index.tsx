import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de App',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-05-05 10:00:00'),
        },
        {
          id: 2,
          title: 'Freelance de Site',
          type: 'deposit',
          category: 'Dev',
          amount: 12000,
          createdAt: new Date('2021-05-05 10:00:00'),
        },
        {
          id: 3,
          title: 'Conta de luz',
          type: 'withdraw',
          category: 'Casa',
          amount: 300,
          createdAt: new Date('2021-05-05 10:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

