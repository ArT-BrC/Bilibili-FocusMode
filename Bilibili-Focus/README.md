# Bilibili Focus (B站专注模式)

一个轻量级的 Chrome/Edge 浏览器插件，用于在 B 站视频页开启“专注模式”，隐藏干扰元素，让你专注看视频

## 功能

- 一键开关学习模式，页面实时响应，无需刷新
- 隐藏右侧推荐视频列表以及完播后视频推荐
- 隐藏视频下方评论区
- 隐藏播放页面所有广告
- 自动保存开关状态，刷新页面不丢失

## 安装方法（开发者模式）

由于未上架插件商店，需要通过开发者模式手动安装：

1. 点击本页面右上角的 Code 按钮，选择 Download ZIP，并解压到本地
2. 打开 Chrome/Edge 浏览器，找到> 管理扩展
3. 打开页面右上角的“开发者模式”开关
4. 点击左上角的“加载已解压的扩展程序”
5. 选择刚才解压的 Bilibili-Focus 文件夹
6. 安装完成。点击浏览器右上角的拼图图标，将插件固定到工具栏即可

## 效果截图

![预览图](https://via.placeholder.com/800x400.png?text=Replace+with+your+screenshot)

## 技术实现

- 基于 Manifest V3 规范开发
- 使用原生 JavaScript 和 CSS，无第三方库依赖
- 通过 Content Script 向页面注入 CSS，通过控制 `<html>` 标签的 class 类名来实现元素的显示与隐藏
- 处理了 B 站评论区的外层 Shadow DOM (宿主元素 `#commentapp`)，确保隐藏逻辑准确生效
- 使用 `chrome.storage.local` 存储开关状态，并通过 `chrome.storage.onChanged` 监听状态变化，实现 Popup 与页面内容的实时通信

## 后续计划

- 预计加入自定义屏蔽选项

## 补充说明

- 本插件只是一个大学生练手作品，有不足之处请多指教（＾-＾）

## License

本项目基于 [MIT License](LICENSE) 协议开源，仅供个人学习和交流使用