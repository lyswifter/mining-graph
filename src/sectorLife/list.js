import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import './list.css';
import DomainProduction from '../domain';
import { List, message, Spin } from 'antd';
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';

const loadStateUrl = `/query/states?`;

class ListView extends React.Component {
    constructor(props) {
      super(props);
    }

    state = {
      total: 0,
      data: [],
      loading: false,
      hasMore: true,
      offset: 0,
      size: 30,
    };
  
    componentDidMount() {
      console.log(this.props.stat)

      this.fetchData(res => {
        this.setState({
          data: res.data,
          total: res.total,
        });
      }, this.state.offset, this.state.size);

      this.ticker = setInterval(() => {
        this.fetchData(res => {
          this.setState({
            data: res.data,
            total: res.total,
          });
        }, 0, this.state.size);
      }, 5000);
    }

    componentWillUnmount() {
      clearInterval(this.ticker);
    }
  
    fetchData = (callback, offset, size) => {
      let targetUrl =  DomainProduction + loadStateUrl + "name=" + this.props.stat + "&offset=" + offset + "&size=" + size
      console.log(targetUrl)

      reqwest({
        url: targetUrl,
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

      if (data.length >= this.state.total) {
        message.warning('加载完成');
        this.setState({
          hasMore: false,
          loading: false,
        });
        return;
      }

      this.state.offset+=this.state.size

      this.fetchData(res => {
        data = data.concat(res.data);
        this.setState({
          data,
          total: res.total,
          loading: false,
        });
      }, this.state.offset, this.state.size);
    };
  
    render() {
      return (
        <div>
          <div className="col-header">
            <div className="statView">{this.props.stat}</div>
            <div className="totalView">{this.state.total}</div>
          </div>

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
      </div>
      );
    }
  }

export default ListView;