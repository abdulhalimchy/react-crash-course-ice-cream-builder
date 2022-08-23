import React from 'react'
import './App.css'
import Layout from './components/Layout/Layout.jsx';
import Header from './components/Header/Header.jsx'
import Body from './components/Body/Body.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <Layout>
      <Header />
      <Body />
      <Footer />

    </Layout>
  );
}

export default App;
