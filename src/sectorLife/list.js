import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import './list.css';

import { List, message, Spin } from 'antd';

import reqwest from 'reqwest';

import InfiniteScroll from 'react-infinite-scroller';

const count = 3;
const fakeDataUrl = `http://localhost:9090/query/states?name=PreCommit1&name=SealPreCommit1Failed`;

class ListView extends React.Component {
    constructor(props) {
      super(props);
    }

    state = {
      data: [],
      loading: false,
      hasMore: true,
    };
  
    componentDidMount() {
      this.fetchData(res => {
        this.setState({
          data: res.data,
        });
      });
    }
  
    fetchData = callback => {
      reqwest({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: res => {
          callback(res);
        },
      });
    };
  
    handleInfiniteOnLoad = () => {
      let { data } = this.state;
      this.setState({
        loading: true,
      });
      if (data.length > 50) {
        message.warning('Infinite List loaded all');
        this.setState({
          hasMore: false,
          loading: false,
        });
        return;
      }
      this.fetchData(res => {
        data = data.concat(res.data);
        this.setState({
          data,
          loading: false,
        });
      });
    };
  
    render() {
      return (
        <div className="demo-infinite-container">
            <InfiniteScroll
              initialLoad={false}
              pageStart={0}
              loadMore={this.handleInfiniteOnLoad}
              hasMore={!this.state.loading && this.state.hasMore}
              useWindow={false}
            >
              <List
                dataSource={this.state.data}
                renderItem={item => (
                  <List.Item className="row-item">
                    <div>{item.SectorNumber}</div>
                  </List.Item>
                )}
              >
                {this.state.loading && this.state.hasMore && (
                  <div className="demo-loading-container">
                    <Spin />
                  </div>
                )}
              </List>
            </InfiniteScroll>
          </div>
      );
    }
  }

export default ListView;