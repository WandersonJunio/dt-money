import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: '111111111111111111111111111',
          title: 'Freela',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2022-02-12')
        },
        {
          id: '1111111111111111111111',
          title: 'Aluguel',
          type: 'whitdraw',
          category: 'home',
          amount: 1000,
          createdAt: new Date('2022-02-12')
        },
        {
          id: '221',
          title: 'lemonade.go',
          type: 'deposit',
          category: 'dev',
          amount: 15000,
          createdAt: new Date('2022-02-12')
        }
      ]
    })
  },  

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);