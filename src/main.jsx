import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'
import './index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store,  persistor } from './redux/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        </BrowserRouter>
      </PersistGate>
      
    </Provider>
    
  </React.StrictMode>,
)