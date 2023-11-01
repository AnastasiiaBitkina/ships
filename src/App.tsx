import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import Background from './Components/Background';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css'

const client = new ApolloClient({
  uri: 'url', 
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Background />
      <Header />
      <Main />
      <Footer />
    </ApolloProvider>
  )
}

export default App
