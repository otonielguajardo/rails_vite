console.log('views/product/index.html.erb');

// vue app
import { createApp } from 'vue';
// @ts-ignore
import VueComponent from "~/vue/pages/Product.vue";
createApp(VueComponent).mount("#vue");

// react app
import ReactDOM from 'react-dom';
import React from 'react';
// @ts-ignore
import ReactComponent from "~/react/pages/Product.tsx";
ReactDOM.render(React.createElement(ReactComponent), document.getElementById("react"));
