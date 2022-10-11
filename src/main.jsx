import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/reset.css'
import './styles/global.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

// apollo client
const client = new ApolloClient({
  uri: `https://rgsu7qju.api.sanity.io/v1/graphql/production/default`,
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
)
