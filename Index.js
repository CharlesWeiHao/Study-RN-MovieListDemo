/*
 * @Description: 程序启动的入口
 * @Author: HaoYongWei
 * @Email: HowieDeveloper@163.com
 * @Date: 2018-12-10 16:18:23
 * @LastEditors: HaoYongWei
 * @LastEditTime: 2018-12-12 11:40:16
 */

'use strict'

import React, { Component } from "react";

import { StyleSheet, Text, View, TabBarIOS, NavigatorIOS } from "react-native";

import MoviesList from "./MoviesList";
import USBoxList from "./USBoxList";
import SearchView from "./SearchView";

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: "tabbarOne"
    };
  }

  render() {
    return (
      // 推荐电影
      <TabBarIOS barTintColor="white" tintColor="#ff4c48">
        <TabBarIOS.Item
          // systemIcon='featured'
          title="推荐电影"
          icon={{ uri: "tab_home", scale: 2.6 }}
          selectedIcon={{ uri: "tab_home_select", scale: 2.6 }}
          selected={this.state.selectedTab === "tabbarOne"}
          onPress={() => {
            this.setState({
              selectedTab: "tabbarOne"
            });
          }}
        >
          {/* 添加导航栏 */}
          <NavigatorIOS
            style={{ flex: 1 }}
            barTintColor="white"
            titleTextColor="black"
            initialRoute={{
              title: "推荐电影",
              component: MoviesList
            }}
          />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          // systemIcon='featured'
          title="搜索"
          icon={{ uri: "tab_cart", scale: 2.6 }}
          selectedIcon={{ uri: "tab_cart_select", scale: 2.6 }}
          selected={this.state.selectedTab === "tabbarTwo"}
          onPress={() => {
            this.setState({
              selectedTab: "tabbarTwo"
            });
          }}
        >
          {/* 添加导航栏 */}
          <NavigatorIOS
            style={{ flex: 1 }}
            barTintColor="white"
            titleTextColor="black"
            initialRoute={{
              title: "搜索电影",
              component: SearchView
            }}
          />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          // systemIcon='history'
          title="北美电影"
          icon={{ uri: "tab_mine", scale: 2.6 }}
          selectedIcon={{ uri: "tab_mine_select", scale: 2.6 }}
          selected={this.state.selectedTab === "tabbarThree"}
          onPress={() => {
            this.setState({
              selectedTab: "tabbarThree"
            });
          }}
        >
          {/* 添加导航栏 */}
          <NavigatorIOS
            style={{ flex: 1 }}
            barTintColor="white"
            titleTextColor="black"
            initialRoute={{
              title: "北美电影排行榜",
              component: USBoxList
            }}
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
