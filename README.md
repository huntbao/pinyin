# pinyin
汉字转拼音，浏览器端实现，兼容 Chrome 和 Safari 浏览器

## 注意
本仓库只提供浏览器版本，并且 pinyin 方法是挂在 window 全局对象上的，其他使用场景请自行修改

## 示例
下载仓库后，运行 example 目录的 index.html 即可

## 测试
[汉字库](./test/dict.js) 共有 20892 个基本汉字，本库在 Chrome、Firefox、Safari 浏览器中全部测试通过

## 其他
本库并未在 Node.js 和 IE 浏览器中进行测试，使用时需要谨慎

## 参考
本库参考了 [https://github.com/creeperyang/pinyin/](https://github.com/creeperyang/pinyin/) 的实现，在它的基础做了一点微小的工作
