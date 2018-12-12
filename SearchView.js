/*
 * @Description: 搜索view
 * @Author: HaoYongWei
 * @Email: HowieDeveloper@163.com
 * @Date: 2018-12-11 14:54:10
 * @LastEditors: HaoYongWei
 * @LastEditTime: 2018-12-12 11:40:15
 */

'use strict'

import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import styles from "../Assets/css/Styles";
import SearchResult from "./SearchResult";

export default class SearchView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  fetchData() {
    const request_url = `https://api.douban.com/v2/movie/search?q=${
      this.state.query
    }`;
    fetch(request_url, {
      method: "GET"
    })
      .then(response => {
        // 转换JSON字符串
        console.log(response);
        let res2 = JSON.parse(response._bodyText);
        return res2;
      })
      .then(responseData => {
        // 处理数据
        console.log(responseData);
        this.props.navigator.push({
          title: responseData.title,
          component: SearchResult,
          passProps: { 
            results : responseData.subjects,
          }
        });
      })
      .catch(() => {
        console.warn(error);
      })
      .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchView}>
          <TextInput
            style={styles.searchText}
            placeholder="search input ..."
            clearButtonMode="while-editing"
            returnKeyType="search"

            onChangeText={value => {
              console.log("onChangeText -->" + value);
              this.setState({
                query: value
              });
            }}
            
            onSubmitEditing={() => {
              this.fetchData();
            }}
          />
        </View>
      </View>
    );
  }
}
