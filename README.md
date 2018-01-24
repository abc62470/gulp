# gulp

> gulp + browserify + browserSync

这是一个使用gulp搭配的开发环境，能够同时多端同步测试，包括ES6的编译、JS模块化。

## Build Setup

``` bash
# 安装依赖包
npm install

# 开发环境
npm run dev

# 生产环境，生成上线文件，目录为dist
npm run build

```

手机测试需要将 localhost:3000 改成 自己ip:3000

## Project Structure
```
.
├── dist/                       # 最终上线文件
│   ├── js                # 编译压缩后JS目录
│       └── ...
│   ├── css                     # 编译压缩后CSS目录
│       └── ...
│   ├── images                     # 压缩后图片目录
│       └── ...
│   └── index.html                 # 首页
├── dev/                       # 开发环境
│   ├── js                # 开发环境 - JS目录
│       └── ...
│   ├── css                     # 开发环境 - CSS目录
│       └── ...
│   ├── images                     # 开发环境 - 图片目录
│       └── ...
│   └── index.html                 # 首页
├── src/							# 源文件
│   ├── js/                   # JS放置目录
│       └── es6/ 				# es6文件放置目录
│   		├── main.js 		# js主入口
│			└── ...
│   ├── less/                   # less放置目录
│       ├── main.less 			# 样式文件主入口
│       ├── reset.less 			# 初始化样式文件
│		└── ...
│   ├── images/                   # 图片放置目录
│       └── ...
│   └── index.html                 # 首页
├── .gitignore              # git bash文件上传忽略配置文件
├── gulpfile.js                  # gulp配置文件
├── package.json                    # 构建脚本和依赖项
└── README.md                  # 说明文档

```