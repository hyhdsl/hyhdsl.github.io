# Live2D Widget（本地化）

本目录是 [stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget) v1.0.1 的本地副本，用于在不依赖 jsDelivr 的情况下加载看板娘。

## 文件

- `autoload.js`：本站改写的加载入口，只加载本地文件；
- `waifu.css`：看板娘样式，已把画布改为 250×250，并在视口 ≤1365px 时隐藏；
- `waifu-tips.js`、`chunk/`：看板娘逻辑；
- `waifu-tips.json`：提示语和本地模型配置；
- `live2d.min.js`：Cubism 2 Core；
- `models/hijiki/`：黑猫模型，来自 npm 包 `live2d-widget-model-hijiki@1.0.5`；
- `LICENSE`：上游 GPL-3.0 许可文本。

## 说明

- `autoload.js` 在 `window.innerWidth < 1366` 时直接返回，移动端和窄屏不会下载看板娘资源；
- `waifu-tips.json` 的 `models` 已改为本地 `/live2d-widget/models/hijiki/hijiki.model.json`，不再请求 `fghrsh/live2d_api`；
- 模型为 Cubism 2，因此只加载本地 `live2d.min.js`；`cubism5Path` 传空字符串，Cubism 3 及以上模型需要另外提供 Cubism 5 Core；
- 模型素材版权归 Live2D 及原作者，包元数据标注 GPL-2.0；代码遵循上游 GPL-3.0-or-later。

## 更换模型

1. 在 `models/` 下放入完整模型目录（Cubism 2 需 `.model.json`、`.moc`、贴图、动作等）；
2. 修改 `waifu-tips.json` 的 `models[0].paths` 为新模型 JSON 的站点路径；
3. 执行 `npx hexo clean && npx hexo generate`，确认浏览器控制台没有 404 或模型解析错误。

如果换成 Cubism 3 及以上模型，需要额外提供 Cubism 5 Core 并设置 `cubism5Path`，同时确认模型许可。
