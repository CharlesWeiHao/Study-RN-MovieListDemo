/*
 * @Description: 北美电影票房列表页
 * @Author: HaoYongWei
 * @Email: HowieDeveloper@163.com
 * @Date: 2018-12-07 19:47:30
 * @LastEditors: HaoYongWei
 * @LastEditTime: 2018-12-12 11:39:48
 */

'use strict'

import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ListView,
  TouchableHighlight,
  ActivityIndicator
} from "react-native";

import MovieDetail from "./MovieDetail";
import styles from "../Assets/css/Styles";

export default class USBox extends Component {
  // 定义结构函数
  constructor(props) {
    super(props);
    // 指定数据
    this.state = {
      movies: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      // 是否加载完成
      loaded: false
    };
    // 调用加载数据
    this.fetchData();
  }

  // 请求数据
  fetchData() {
    // 豆瓣电影列表数据
    let request_url = "https://api.douban.com/v2/movie/us_box";
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
          //设置数据源刷新界面
          movies: this.state.movies.cloneWithRows(responseData.subjects),
          loaded: true // 改变加载ListView
        });
      })
      .catch(() => {
        console.warn(error);
      })
      .done();
  }

  // 跳转电影详情页面
  showMovieDetail(movie) {
    console.log(movie.subject.title);
    this.props.navigator.push({
      title: movie.subject.title,
      component: MovieDetail,
      passProps: { movie }
    });
  }

  // 重新加载电影列表数据
  renderMovieList(movie) {
    return (
      <TouchableHighlight
        underlayColor="rgba(0, 0, 0, 0.1)"
        onPress={() => this.showMovieDetail(movie)}
      >
        <View style={styles.item}>
          {/* 电影海报 */}
          <View style={styles.itemImage}>
            <Image
              source={{ uri: movie.subject.images.large }}
              style={styles.image}
            />
          </View>

          {/* 电影的内容 */}
          <View style={styles.itemContent}>
            {/* 电影标题 */}
            <Text style={styles.itemHeader}>{movie.subject.title}</Text>
            {/* 电影子标题和年份 */}
            <Text style={styles.itemMate}>
              {movie.subject.original_title} ({movie.subject.year})
            </Text>
            {/* 电影评分 */}
            <Text style={styles.redText}>{movie.subject.rating.average}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    // 显示加载中。。。
    if (!this.state.loaded) {
      return (
        // 数据请求的加载中视图
        <View style={styles.container}>
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </View>
      );
    }

    // 加载列表数据
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.movies}
          renderRow={this.renderMovieList.bind(this)}
        />
      </View>
    );
  }
}
