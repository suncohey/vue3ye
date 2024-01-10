/*
 * @Author: sunguohui
 * @Date: 2023-09-21 08:56:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-12-25 15:20:22
 * @FilePath: \vue\scripts\serveConfig.ts
 * @Description: serve, preview config
 */
export const serveProxy = {
  // 选项写法
  '/gw': {
    // target: 'https://apics.yjt361.com/',
    // target: 'https://c.yjt361.com/',
    // target: 'https://new.yjt361.com/',
    target: 'https://cs.yjt361.com/',
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^gw\//, 'gw/')
  },
  '/cfg': {
    // target: 'https://apics.yjt361.com/',
    // target: 'https://c.yjt361.com/',
    // target: 'https://new.yjt361.com/',
    target: 'https://cs.yjt361.com/',
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^cfg\//, 'cfg/')
  },
  '/appnass': {
    // target: 'https://apics.yjt361.com/',
    target: 'https://cs.yjt361.com/',
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^appnass\//, 'appnass/')
  },
  '/protal': {
    target: 'https://cs.yjt361.com/',
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^protal\//, 'protal/')
  },
  '/ucsui': {
    target: 'https://cs.yjt361.com/',
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^ucsui\//, 'ucsui/')
  },
  '/tqms': { // 题库里面的图片
    target: 'https://cs.yjt361.com/',
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^tqms\//, 'tqms/')
  },
  '/qgoss/': {
    target: 'https://cs.yjt361.com',
    changeOrigin: true
  },
  '/img/': {
    target: 'https://cs.yjt361.com',
    changeOrigin: true
  },
  '/h5_res_1': {
    target: 'https://capp.yjt361.com',
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^h5_res_1\//, 'h5_res_1/')
  },
  '/national_appnass': {
    target: 'https://cs.yjt361.com',
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^national_appnass\//, 'national_appnass/')
  },
  '/appnass/v1/share': {
    target: 'https://cs.yjt361.com/',
    changeOrigin: true
    // rewrite: (path) => path.replace(/^appnass/v1/share\//, 'appnass/v1/share/')
    // rewrite: {
    //   '^appnass/v1/share/': 'appnass/v1/share/'
    // }
  },
  '/ub': {
    target: 'https://apics.yjt361.com/',
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^ub\//, 'ub/')
  },
  '/sun_test': {
    target: 'http://10.1.201.149/',
    changeOrigin: true,
    pathRewrite: {
      '^sun_test/': 'sun_test/'
    }
  }
};