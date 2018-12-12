/*
 * @Description: 全局定义的样式
 * @Author: HaoYongWei
 * @Email: HowieDeveloper@163.com
 * @Date: 2018-12-11 10:45:55
 * @LastEditors: HaoYongWei
 * @LastEditTime: 2018-12-12 11:36:08
 */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(100, 53, 201, 0.1)',
    padding: 10,
    flex: 1,
  },

  itemContent: {
    flex: 1,
    marginLeft: 13,
    marginTop: 6,
  },

  itemHeader: {
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: '#6435c9',
    marginBottom: 10,
  },

  itemMate: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.6)',
    marginBottom: 6,
  },

  redText: {
    color: '#db2828',
    fontSize: 15,
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemImage: {
    width: 120,
    height: 160,
    marginTop: 0,
  },

  image: {
    flex: 1,
    borderRadius: 3,
  },

  container: {
    backgroundColor: '#eae7ff',
    flex: 1,
    paddingTop: 88,
    paddingBottom: 83,
  },

  detailContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 90,
  },

  itemText: {
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: 'rgba(0, 0, 0, 0.8)',
    lineHeight: 26,
  },

  searchView: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },

  searchText: {
    height: 30,
  },

  searchResult: {
    backgroundColor: '#eae7ff',
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },

});

export default styles;

