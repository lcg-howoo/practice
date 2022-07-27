import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import store from "./store/index";
// 컴포넌트의 가장 상단
// 리액트-리덕스는 store props가있다. 여기 리덕스 스토어를 연결.
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
