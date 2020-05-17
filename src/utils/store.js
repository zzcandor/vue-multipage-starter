/**
 * 存储VueX
 */
import store from 'store'
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  store.set(name, content)
}

/**
 * 获取VueX
 */
export const getStore = name => {
  if (!name) return
  let content = store.get(name)
  return content
}

/**
 * 删除VueX
 */
export const removeStore = name => {
  if (!name) return
  store.remove(name)
}

// 设置cookie
export const setCookie = (cName, value, expireDays) => {
  let exdate = new Date()
  exdate.setDate(exdate.getDate() + expireDays)
  document.cookie = cName + '=' + escape(value) +
    ((expireDays == null) ? '' : ';expires=' + exdate.toGMTString())
}

// 取回cookie
export const getCookie = (cName) => {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(cName + '=')
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1
      let cEnd = document.cookie.indexOf(';', cStart)
      if (cEnd === -1) cEnd = document.cookie.length
      return unescape(document.cookie.substring(cStart, cEnd))
    }
  }
  return ''
}

/**
 * 存储localStorage
 */
export const setLocalStorage = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getLocalStorage = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeLocalStorage = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/**
 * 存储sessionStorage
 */
export const setSessionStorage = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name, content)
}

/**
 * 获取sessionStorage
 */
export const getSessionStorage = name => {
  if (!name) return
  return window.sessionStorage.getItem(name)
}

/**
 * 删除sessionStorage
 */
export const removeSessionStorage = name => {
  if (!name) return
  window.sessionStorage.removeItem(name)
}
