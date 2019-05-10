# SLCSS

这是一个css集合，适用于所有基于 `node-sass`、`less` 打包的项目。

### 1、在SCSS文件中使用
首先向 `node-sass` 添加 includePaths。
```javascript
// node_modules 在磁盘中的完整路径
includePaths: [path.join(__dirname, 'xxxx', 'node_modules')]
```
引用：
```scss
@import 'slcss'; // 原子基类
@import 'slcss/scss/reset/index';
@import 'slcss/scss/pc-scrollBar/index';
```
Ps：若打包工具使用 `webpack` 可跳过上一步。

### 2、在 js 文件中使用
```
import 'slcss'
import 'slcss/css/reset/index.css'
import 'slcss/css/pc-scrollBar/index.css'
```

### 3、在 `wepy` 项目中使用
需要设计稿以 `iphone6` 为基准才可使用。

首先向 `node-sass` 添加 includePaths。
```javascript
// node_modules 在磁盘中的完整路径
includePaths: [path.join(__dirname, 'xxxx', 'node_modules')]
```
引用：
```scss
@import 'slcss/scss/mp/index'; // 原子基类
@import 'slcss/scss/mp-hover/index';
@include hover-color('#F8F8F8');
```

