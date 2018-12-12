/*
 * @Description: 电影详情列表
 * @Author: HaoYongWei
 * @Email: HowieDeveloper@163.com
 * @Date: 2018-12-10 19:48:53
 * @LastEditors: HaoYongWei
 * @LastEditTime: 2018-12-12 11:40:20
 */

'use strict'

import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";

import styles from "../Assets/css/Styles";

export default class MovieDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieDetail: "",
      // 是否加载完成
      loaded: false
    };

    let request_url = "";
    if (this.props.movie.subject) {
      // 北美票房
      request_url = `https://api.douban.com/v2/movie/subject/${
        this.props.movie.subject.id
      }`;
    } else {
      // 推荐电影
      request_url = `https://api.douban.com/v2/movie/subject/${
        this.props.movie.id
      }`;
    }
    // 请求数据
    this.fetchData(request_url);
  }

  // 请求数据
  fetchData(request_url) {
    // 豆瓣电影列表数据
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
        console.log(responseData.subjects);
        this.setState({
          // 通过setState（）方法重新渲染界面
          movieDetail: responseData,
          // 是否加载完成
          loaded: true
        });
      })
      .catch(() => {
        console.warn(error);
      })
      .done();
  }

  render() {
    // 显示加载中。。。
    if (!this.state.loaded) {
      return (
        // 数据请求的加载中视图
        <View style={styles.detailContainer}>
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </View>
      );
    }

    let movie = this.state.movieDetail;

    let summary = movie.summary.split("\n").map((value, key) => {
      return (
        <View style={{ marginBottom: 15, paddingLeft: 10, paddingRight: 10 }} 
              key = {key}
        >
          <Text style={styles.itemText}
                key = {key}
           >{value}</Text>
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "column" }}>{summary}</View>
      </View>
    );
  }
}
