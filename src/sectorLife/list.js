import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import './list.css';
import DomainProduction from '../domain';
import { List, message, Spin } from 'antd';
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';

import timing from '../util'

const loadStateUrl = `/query/states?`;

const opacity = 0.8

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

        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];

          if (element.Sec < 60) {
            element.style = {
              background: '#60B158',
              opacity: opacity,
            }
          } else if (element.Sec < 60*5){
            element.style = {
              background: '#FEBC2C',
              opacity: opacity,
            }
          } else {
            element.style = {
              background: '#A4423F',
              opacity: opacity,
            }
          }
        }

        this.setState({
          data: res.data,
          total: res.total,
        });
      }, this.state.offset, this.state.size);

      this.ticker = setInterval(() => {
        this.fetchData(res => {
          for (let i = 0; i < res.data.length; i++) {
            const element = res.data[i];
  
            if (element.Sec < 60) {
              element.style = {
                background: '#60B158',
                opacity: opacity,
              }
            } else if (element.Sec < 60*5){
              element.style = {
                background: '#FEBC2C',
                opacity: opacity,
              }
            } else {
              element.style = {
                background: '#A4423F',
                opacity: opacity,
              }
            }
          }

          this.setState({
            data: res.data,
            total: res.total,
          });
        }, 0, 5000);
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
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];

          if (element.Sec < 60) {
            element.style = {
              background: '#60B158',
              opacity: opacity,
            }
          } else if (element.Sec < 60*5){
            element.style = {
              background: '#FEBC2C',
              opacity: opacity,
            }
          } else {
            element.style = {
              background: '#A4423F',
              opacity: opacity,
            }
          }
        }

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
                  <List.Item style={item.style} className="row-item">
                    <div className="idViwe">{item.SectorNumber}</div>
                    <div className="delayView">{item.Interval}</div>
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