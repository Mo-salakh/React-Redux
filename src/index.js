import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const root = ReactDOM.createRoot(document.getElementById('root'));


let reducer = (state, action) => {
 if(action.type === "Change") {
  return state + 1
 } return 0
}
const store = createStore(reducer)



root.render(

    <div className="App">
    <Provider store={store}>
      <App />
    </Provider>
    </div>

);


