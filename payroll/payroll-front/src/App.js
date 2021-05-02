import logo from './logo.svg';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Container>
        <Main/>
      </Container>
    </div>
  );
}

export default App;
