import './App.css';
import { Layout } from 'antd';
import SectorView from './sectorLife/sectors'

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <>
      <Layout>
        {/* <Header>
          <h3 style={{color: "white"}}>扇区生命周期</h3>
        </Header> */}

        <Content>
          <SectorView/>
        </Content>
      </Layout>
      </>
    </div>
  );
}

export default App;
