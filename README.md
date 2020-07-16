# react-demo
react项目模版

推荐使用 npm 安装依赖:

```bash
npm install
```

## 开发

启动开发服务:
```bash
# 生成 Dll 文件, 只需执行一次
npm run dll

# 启动开发服务
npm run dev
```

npm Scripts 说明:

|`npm run <script>` |Description|
|-------------------|-----------|
|`dev`              |启动服务 `localhost:--`|
|`build`            |打包项目|
|`dll`              |静态文件打包，和业务代码包分离，加快热更新和打包速度|

## 项目结构

```
.
├── public                          # 静态资源
├── scripts                         # 存储一些项目用到的脚本
│   ├── wp.config.base.js           # webpack 基础配置
│   ├── wp.config.dev.js            # webpack 开发环境配置
│   ├── wp.config.prod.js           # webpack 生产环境配置
├── src                             # 源代码
│   ├── index.html                  # HTML 模板
│   ├── index.js                    # 入口文件
│   ├── components                  # 公用的组件
│   │   └── ant                     # antd外部组件引用
│   │   └── dumb                    # 自定义的木偶组件
│   ├── layouts                     # 布局
│   │   └── Basic                   # 基础布局
│   │   └── Blank                   # 空布局
│   ├── modules                     # 按照业务拆分的模块
│   │   └── models.js               # 页面注册model
│   ├── store                       # Redux 的 Store
│   │   └── index.js                # 整合Model, 生成Store
│   ├── utils                       #
│   │   └── constant.js             # 枚举值
│   │   └── util.js                # 公共方法
│   │   └── request.js              # 请求封装
│   │   └── theme.js                # 覆盖 antd 的样式变量
│   └── routes.js                   # 页面路由
└── dist                            # 打包生成的文件
```
