/*!
 * Live2D Widget - local loader for blog.nekobiglazyer.work
 * Upstream: https://github.com/stevenjoezhang/live2d-widget (GPL-3.0-or-later)
 * 仅加载本地文件；模型为 Cubism 2 的 hijiki。
 */
const live2d_path = '/live2d-widget/';

// 封装异步资源加载
function loadExternalResource(url, type) {
  return new Promise((resolve, reject) => {
    let tag;
    if (type === 'css') {
      tag = document.createElement('link');
      tag.rel = 'stylesheet';
      tag.href = url;
    }
    else if (type === 'js') {
      tag = document.createElement('script');
      tag.type = 'module';
      tag.src = url;
    }
    if (tag) {
      tag.onload = () => resolve(url);
      tag.onerror = () => reject(url);
      document.head.appendChild(tag);
    }
  });
}

(async () => {
  // 移动端和窄屏不加载，避免看板娘遮挡正文。
  // 1366px 是阈值：再窄时左侧留白不足以放下 250px 宽的模型。
  if (window.innerWidth < 1366) return;

  // 避免贴图跨域导致 canvas 被污染，影响“拍照”功能。
  const OriginalImage = window.Image;
  window.Image = function (...args) {
    const img = new OriginalImage(...args);
    img.crossOrigin = 'anonymous';
    return img;
  };
  window.Image.prototype = OriginalImage.prototype;

  await Promise.all([
    loadExternalResource(live2d_path + 'waifu.css', 'css'),
    loadExternalResource(live2d_path + 'waifu-tips.js', 'js')
  ]);

  initWidget({
    waifuPath: live2d_path + 'waifu-tips.json',
    cubism2Path: live2d_path + 'live2d.min.js',
    cubism5Path: '', // 只用 Cubism 2 模型，不加载 Cubism 5 Core
    modelId: 0,
    tools: ['hitokoto', 'photo', 'info', 'quit'],
    logLevel: 'warn',
    drag: false,
  });
})();
