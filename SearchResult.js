/*
 * @Description: 电影列表页
 * @Author: HaoYongWei
 * @Email: HowieDeveloper@163.com
 * @Date: 2018-12-07 19:47:30
 * @LastEditors: HaoYongWei
 * @LastEditTime: 2018-12-12 11:40:12
 */

'use strict'

import React, { Component } from "react";

import {
    View,
    Text,
    Image,
    ListView,
    TouchableHighlight,
} from "react-native";

import MovieDetail from "./MovieDetail";
import styles from "../Assets/css/Styles";

export default class SearchResult extends Component {
    // 定义结构函数
    constructor(props) {
        super(props);

        let dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        })

        // 指定数据
        this.state = {
            movies : dataSource.cloneWithRows(this.props.results)
        }
    }

    // 跳转电影详情页面
    showMovieDetail(movie) {
        console.log(movie.title);
        this.props.navigator.push({
            title: movie.title,
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
                        <Image source={{ uri: movie.images.large }} style={styles.image} />
                    </View>

                    {/* 电影的内容 */}
                    <View style={styles.itemContent}>
                        {/* 电影标题 */}
                        <Text style={styles.itemHeader}>{movie.title}</Text>
                        {/* 电影子标题和年份 */}
                        <Text style={styles.itemMate}>
                            {movie.original_title} ({movie.year})
            </Text>
                        {/* 电影评分 */}
                        <Text style={styles.redText}>{movie.rating.average}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        // 加载列表数据
        return (
            <View style={styles.searchResult}>
                <ListView
                    dataSource={this.state.movies}
                    renderRow={this.renderMovieList.bind(this)}
                />
            </View>
        );
    }
}
