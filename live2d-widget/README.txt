# Live2D Widget（本地化）

本目录是 [stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget) v1.0.1 的本地副本，用于在不依赖 jsDelivr 的情况下加载看板娘。

## 文件

- `autoload.js`：本站改写的加载入口，只加载本地文件；
- `waifu.css`：看板娘样式，画布 240×240，视口 ≤1365px 时隐藏；
- `waifu-tips.js`、`chunk/`：看板娘逻辑；
- `waifu-tips.json`：提示语和本地模型配置；
- `live2d.min.js`：Cubism 2 Core；
- `models/model_list.json`：本地模型列表，目前只有 `Tia`；
- `models/model/Tia/`：Tia 模型（Cubism 2），含 `model.moc`、动作、63 套皮肤和 `textures.cache`；
- `LICENSE`：上游 GPL-3.0 许可文本。

## 模型来源

- 模型：Tia
- 来源：<https://github.com/imuncle/live2d> 的 `Tia.zip`
- 包内说明：`Tia-README.md`（备份目录）
- 许可：模型收集自互联网，版权归原公司/个人所有；仅用于学习、非营利性网站或项目，不得用于商业用途
- `models/model/Tia/index.json` 是入口模型描述，`textures.cache` 包含 63 套皮肤的贴图列表；
- 点击工具栏的“换装”按钮会在 63 套皮肤之间随机切换。

## 说明

- `autoload.js` 在 `window.innerWidth < 1366` 时直接返回，移动端和窄屏不会下载看板娘资源；
- `waifu-tips.json` 的 `models` 也指向本地 Tia，作为不使用 `cdnPath` 时的备用配置；
- 模型为 Cubism 2，因此只加载本地 `live2d.min.js`；`cubism5Path` 传空字符串，Cubism 3 及以上模型需要另外提供 Cubism 5 Core；
- `Tia/index1.json` ~ `index5.json` 为原作者附带的其他默认皮肤描述，当前入口使用 `index.json`，换装由 `textures.cache` 完成。

## 更换模型

1. 在 `models/model/` 下放入完整模型目录（Cubism 2 需 `index.json`、`model.moc`、贴图、动作等）；
2. 在 `models/model_list.json` 的 `models` 中加入模型目录名，并补充 `messages`；
3. 如需换装，在模型目录放 `textures.cache`（贴图路径数组）；
4. 执行 `npx hexo clean && npx hexo generate`，确认浏览器控制台没有 404 或模型解析错误。

如果换成 Cubism 3 及以上模型，需要额外提供 Cubism 5 Core 并设置 `cubism5Path`，同时确认模型许可。
