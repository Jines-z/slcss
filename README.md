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
@import 'slcss/scss/index'; // 原子基类
@import 'slcss/scss/reset/index';
@import 'slcss/scss/pc-scrollBar/index';
```
Ps：若打包工具使用 `webpack` 可跳过上一步。

### 2、在LESS文件中使用
```less
@import 'slcss/less/index';
@import 'slcss/less/reset/index';
@import 'slcss/less/pc-scrollBar/index';
```

### 3、在 js 文件中使用
```
import 'slcss'
import 'slcss/css/reset/index.css'
import 'slcss/css/pc-scrollBar/index.css'
```

### 4、在 `wepy` 项目中使用
需要设计稿以 `iphone6` 为基准才可使用。

首先向 `node-sass` 添加 includePaths。
```javascript
// node_modules 在磁盘中的完整路径
includePaths: [path.join(__dirname, 'xxxx', 'node_modules')]
```
引用：
```scss
@import 'slcss/scss/mp/index';
@import 'slcss/scss/mp-hover/index';
@include hover-color('#F8F8F8');
```
### 样式对照表

| 类名 | 说明 |
| :---- | :---- |
| .tc, .tl, .tr, .tj | text-align 相关 |
| .ov-a, .ov-h, .ov-s | overflow 相关 |
| .o-0, .o-05, .o-10 ~ .o-100 | opacity 相关， 10 ~ 100 之间 10 的倍数 |
| .dn, .di, .db, .df, .dib, .dit, .dt, .dtc, .dt-row | display 相关 |
| .ws-normal, .nowrap, .pre | white-space 相关 |
| .strike, .underline, .no-underline | text-decoration 相关 |
| .cur-p, .cur-d | cursor 相关 |
| .v-base, .v-mid, .v-top, .v-btm | vertical-align 相关 |
| .fl, .fr, .fn | float 相关 |
| .br0, .br-50, .br-100, .br-pill | border-radius 相关 |
| .relative, .absolute, .fixed, .static | position相关 |
| .absolute--fill   | absolute 全局居中 |
| .absolute--middle | absolute 纵向居中 |
| .absolute--center | absolute 水平居中 |
| .lh-solid | line-height: 1; |
| .border-box | box-sizing: border-box; |
| .m-0, .p-0 | margin: 0 !important; padding: 0 !important; |

| 类名 | 数值范围 | 示例/说明 |
| :---- | :---- | :---- |
| .mt-#{$i}, .mr-#{$i}, .mb-#{$i}, .ml-#{$i} | 0 ≤ $i ≤ 100 偶数和 5 的倍数 | .mt-50 (margin-top: 50px;) |
| .pt-#{$i}, .pr-#{$i}, .pb-#{$i}, .pl-#{$i} | 0 ≤ $i ≤ 100 偶数和 5 的倍数 | .pt-50 (padding-top: 50px;) |
| .w#{$i}, .h#{$i} | 0 ≤ $i ≤ 100 偶数和 5 的倍数 | .w50 (width: 50px;) |
| .w#{$i}p, .h#{$i}p | 0 ≤ $i ≤ 100 10 的倍数 | .w50p (width: 50%;) |
| .mw#{$i}p, .mh#{$i}p | 0 ≤ $i ≤ 100 10 的倍数 | .mw50p (max-width: 50%;) |
| .top-#{$i}, .right-#{$i}, .bottom-#{$i}, .left-#{$i} | 0 ≤ $i ≤ 100 5 的倍数 | .top-50 (top: 50px;) |
| .lh#{$i} | 0 ≤ $i ≤ 50 偶数和 5 的倍数 | .lh50 (line-height: 50px;) |
| .fw#{$i} | 0 < $i < 10 数值乘以 100 | .fw5 (font-weight: 500;) |
| .f#{$i} | 12 ≤ $i ≤ 30 | .f25 (font-size: 25px;) |
