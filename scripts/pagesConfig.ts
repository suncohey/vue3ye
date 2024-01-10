/*
 * @Author: sunguohui
 * @Date: 2023-07-04 09:16:23
 * @LastEditors: sunguohui
 * @LastEditTime: 2023-08-29 08:54:07
 * @FilePath: \code\scripts\pagesConfig.ts
 * @Description: 多页面配置
 */

// 引入多页面配置文件
import project from './multiPages.json';
// 获取npm run dev后缀 配置的环境变量
export const npmConfigPage: string = process.env.npm_config_page ?? '';
export let PageTitle = '';
// 命令行报错提示
const errorLog = (error: string) => { console.log('error', error); };
// 获取指定的单页面入口
export const getEnterPages = () => {
  if (!npmConfigPage) {
    errorLog(
      '--------------请在命令行后以 `--page=页面名称` 格式指定页面名称！---------------'
    );
  }
  const filterArr = project.filter(
    (item: any) => item.chunk.toLowerCase() === npmConfigPage.toLowerCase()
  );
  if (!filterArr.length) {
    errorLog(
      '-----------------------不存在此页面，请检查页面名称！-------------------------'
    );
  }

  PageTitle = filterArr[0].chunkName;

  return `src/Project/${npmConfigPage}/index.html`;
};
