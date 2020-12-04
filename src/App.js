import './App.css';
import { Layout } from 'antd';
import SectorView from './sectorLife/sectors'

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <>
      <Layout>
        <Content>
          <SectorView/>
        </Content>
      </Layout>
      </>
    </div>
  );
}

export default App;
