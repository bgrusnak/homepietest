"use strict"

import { observable, action } from 'mobx'
import axios from 'axios'


class AppStore {

  static instance
  static axios

  static getInstance() {
    this.instance = this.instance || new AppStore()
    return this.instance
  }

  constructor() {
    let ap = {
      baseURL: "http://localhost:5400/api/",
      timeout: 1000,
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    }
    this.axios = axios.create(ap)
  }

  async getData(uri, params) {
    let { data, headers, status } = await this.axios.get(uri, { params: params })
    return data
  }

  async postData(uri, body) {
    let { data } = await this.axios.post(uri, body)
    return data
  }

  async putData(uri, body) {
    let { data } = await this.axios.put(uri, body)
    return data
  }

  async deleteData(uri, params) {
    let { data } = await this.axios.delete(uri, {
      params: params
    })
    return data
  }

  async  getPages() {
    let pages = await this.getData('page')
    return pages
  }

  async  getPage(pageId) {
    let pages = await this.getData('page/' + pageId)
    return pages
  }

  async updatePage(pageId, page) {
    let updated = await this.putData('page/' + pageId, page)
    return updated
  }

  async addPage(page) {
    let added = await this.postData('page', page)
    return added
  }

  async swapPages(first, second) {
    let pages = await this.postData('swap', { first, first, second })
    return pages
  }
}



export const createStore = () => AppStore.getInstance()