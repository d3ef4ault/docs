# package.json

[TOC]

[来自《JavaScript 标准参考教程（alpha）》，by 阮一峰](http://javascript.ruanyifeng.com/nodejs/packagejson.html)

[npm package.json](https://docs.npmjs.com/files/package.json)

[yarn package.json](https://yarnpkg.com/zh-Hans/docs/package-json)

## 介绍

- 每个项目的根目录下面，一般都有一个`package.json`文件，定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。
- `npm install` 或 `yarn install`命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。
- 是一个`JSON`对象，该对象的每一个成员就是当前项目的一项设置

### 完整示例

```json
{
  "name": "Hello World",
  "version": "0.0.1",
  "author": "张三",
  "description": "第一个node.js程序",
  "keywords":["node.js","javascript"],
  "repository": {
    "type": "git",
    "url": "https://path/to/url"
  },
  "license":"MIT",
  "engines": {"node": "0.10.x"},
  "bugs":{"url":"http://path/to/bug","email":"bug@example.com"},
  "contributors":[{"name":"李四","email":"lisi@example.com"}],
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "latest",
    "mongoose": "~3.8.3",
    "handlebars-runtime": "~1.0.12",
    "express3-handlebars": "~0.5.0",
    "MD5": "~1.2.0"
  },
  "devDependencies": {
    "bower": "~1.2.8",
    "grunt": "~0.4.1",
    "grunt-contrib-concat": "~0.3.0",
    "grunt-contrib-jshint": "~0.7.2",
    "grunt-contrib-uglify": "~0.2.7",
    "grunt-contrib-clean": "~0.5.0",
    "browserify": "2.36.1",
    "grunt-browserify": "~1.3.0",
  }
}
```

## 初始化 `package.json`

```bash
npm init | npm init -y

或

yarn init | yarn init -y
```

不带 `-y` 初始化时需要手动填写确认一些基本字段的值，带参数表示使用默认配置

## 字段说明

### `name` 项目名称也是包的名字，它在 `URL` 中、作为命令行参数、作为 `node_modules` 里的目录名使用

- 规则
  - 必须少于或等于 `214` 个字符（对于限定域的包来说包括 `@scope/`）。
  - 不能以句点 (`.`) 或者下划线 (`_`) 开头。
  - 名字里不能有`大写字母`。
  - 必须只使用 `URL` 安全的字符。

- Tips
  - 不要使用和 `Node.js` 核心模块相同的名字。
  - 不要在名字里包含 `js` 或者 `node` 单词。
  - 短小精悍，让人看到名字就大概了解包的功能，记住它也会被用在 `require()` 调用里。
  - 保证名字在 `registry` 里是唯一的

### `version` 项目版本号（**`大版本.次要版本.小版本`**）

`0.0.0` 或 `1.0.0` 都可

### `description` 项目描述

```json
{
  "description": "项目或者包的简短描述"
}
```

### `keywords` 项目关键字

```json
{
  "keywords": ["short", "relevant", "keywords", "for", "searching"]
}
```

### `license` 指定许可证

```json
{
  "license": "MIT",
  "license": "(MIT or GPL-3.0)",
  "license": "SEE LICENSE IN LICENSE_FILENAME.txt",
  "license": "UNLICENSED"
}
```

所有包都应该指定许可证，以便让用户了解他们是在什么授权下使用此包，以及此包还有哪些附加限制

**license字段必须是以下之一：**

- 如果你使用标准的许可证，需要一个有效地 [SPDX 许可证标识](https://spdx.org/licenses/)
- 如果你用多种标准许可证，需要有效的 [SPDX 许可证表达式2.0语法表达式](https://www.npmjs.com/package/spdx)
- 如果你使用非标准的许可证，一个 `SEE LICENSE IN <文件名>` 字符串指向你的包里顶级目录的一个 `<文件名>`
- 如果你不想在任何条款下授权其他人使用你的私有或未公开的包，一个 `UNLICENSED` 字符串

### `homepage` 包的项目主页或者文档首页

```json
{
  "homepage": "https://your-package.org"
}
```

### `bugs` 问题反馈系统的 `URL`，或者是 `email` 地址之类的链接。别人可以通过该途径反馈问题

```json
{
  "bugs": "https://github.com/user/repo/issues"
}
```

### `repository` 代码托管的位置

```json
{
  "repository": { "type": "git", "url": "https://github.com/user/repo.git" },
  "repository": "github:user/repo",
  "repository": "gitlab:user/repo",
  "repository": "bitbucket:user/repo",
  "repository": "gist:a1b2c3d4e5f"
}
```

### `author` 项目的维护者，一个人信息

```json
{
  "author": {
    "name": "Your Name",
    "email": "you@example.com",
    "url": "http://your-website.com"
  },
  "author": "Your Name <you@example.com> (http://your-website.com)"
}
```

### `contributors` 贡献者信息，可能很多人

```json
{
  "contributors": [
    { "name": "Your Friend", "email": "friend@example.com", "url": "http://friends-website.com" }
    { "name": "Other Friend", "email": "other@example.com", "url": "http://other-website.com" }
  ],
  "contributors": [
    "Your Friend <friend@example.com> (http://friends-website.com)",
    "Other Friend <other@example.com> (http://other-website.com)"
  ]
}
```

### `files` 指定包含在项目中的文件，以及项目的入口文件

```json
{
  "files": ["filename.js", "directory/", "glob/*.{js,json}"]
}
```

### `directories` 当包安装时，你可以指定确切的位置来放二进制文件、man pages、文档、例子等

```json
{
  "directories": {
    "lib": "path/to/lib/",
    "bin": "path/to/bin/",
    "man": "path/to/man/",
    "doc": "path/to/doc/",
    "example": "path/to/example/"
  }
}
```

### `scripts`

指定了运行脚本命令的`npm 或 yarn`命令行缩写，比如`start`指定了运行`npm run start`时，所要执行的命令

如下的设置指定了`npm run preinstall`、`npm run postinstall`、`npm run start`、`npm run test`时，所要执行的命令

```json
"scripts": {
  "preinstall": "echo here it comes!",
  "postinstall": "echo there it goes!",
  "start": "node index.js",
  "test": "tap test/*.js"
}
```

### `dependencies` 和 `devDependencies`

- `dependencies`指定了**项目运行**所依赖的模块
- `devDependencies`指定了**项目开发**所需要的模块

它们都指向一个对象。该对象的各个成员，分别由模块名和对应的版本要求组成，表示依赖的模块及其版本范围

```json
{
  "devDependencies": {
    "browserify": "~13.0.0",
    "karma-browserify": "~5.0.1"
  }
}
```

**对应的版本可以加上各种限定，主要有以下几种**

- **指定版本**：比如1.2.2，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。
- **波浪号（tilde）+指定版本**：比如~1.2.2，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装- 1.3.x，也就是说安装时不改变大版本号和次要版本号。
- **插入号（caret）+指定版本**：比如ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
- **latest**：安装最新版本。

将依赖模块写入 `dependencies` 和 `devDependencies` 有不同的命令

- `npm install vue --save` 表示将该模块写入`dependencies`属性字段
- `npm install vue --save-dev` 表示将该模块写入`devDependencies`属性字段

### `peerDependencies`

有时，你的项目和所依赖的模块，都会同时依赖另一个模块，但是所依赖的版本不一样。比如，你的项目依赖A模块和B模块的1.0版，而A模块本身又依赖B模块的2.0版。

大多数情况下，这不构成问题，B模块的两个版本可以并存，同时运行。但是，有一种情况，会出现问题，就是这种依赖关系将暴露给用户。

最典型的场景就是插件，比如A模块是B模块的插件。用户安装的B模块是1.0版本，但是A插件只能和2.0版本的B模块一起使用。这时，用户要是将1.0版本的B的实例传给A，就会出现问题。因此，需要一种机制，在模板安装的时候提醒用户，如果A和B一起安装，那么B必须是2.0模块。

`peerDependencies`字段，就是用来供插件指定其所需要的主工具的版本

```json
{
  "name": "chai-as-promised",
  "peerDependencies": {
    "chai": "1.x"
  }
}
```

上面代码指定，安装`chai-as-promised`模块时，主程序`chai`必须一起安装，而且chai的版本必须是1.x。如果你的项目指定的依赖是chai的2.0版本，就会报错

**注意，从npm 3.0版开始，peerDependencies不再会默认安装了**

### `optionalDependencies` 可选依赖可以用于你的包，但不是必需的。如果可选包没有找到，安装还可以继续

```json
{
  "optionalDependencies": {
    "package-5": "^1.6.1"
  }
}
```

### `bundledDependencies` 打包依赖是发布你的包时将会一起打包的一个包名数组

```json
{
  "bundledDependencies": ["package-4"]
}
```

### `bin`

用来指定各个内部命令对应的可执行文件的位置

```json
"bin": {
  "someTool": "./bin/someTool.js"
}
```

上面代码指定，`someTool` 命令对应的可执行文件为 `bin` 子目录下的 `someTool.js`。
Npm会寻找这个文件，在`node_modules/.bin/`目录下建立符号链接。
在上面的例子中，`someTool.js`会建立符号链接`npm_modules/.bin/someTool`。
由于`node_modules/.bin/`目录会在运行时加入系统的PATH变量，因此在运行npm时，就可以不带路径，直接通过命令来调用这些脚本。

因此，像下面这样的写法可以采用简写

```json
scripts: {
  start: './node_modules/someTool/someTool.js build'
}

// 简写为

scripts: {
  start: 'someTool build'
}
```

所有`node_modules/.bin/`目录下的命令，都可以用`npm run [命令]`的格式运行。
在命令行下，键入`npm run`，然后按tab键，就会显示所有可以使用的命令

### main

指定了加载的入口文件，`require('moduleName')`就会加载这个文件。
这个字段的默认值是模块根目录下面的`index.js`

### config

用于添加命令行的环境变量

```json
{
  "name" : "foo",
  "config" : { "port" : "8080" },
  "scripts" : { "start" : "node server.js" }
}
```

然后，在`server.js`脚本就可以引用`config`字段的值

```js
http
  .createServer(...)
  .listen(process.env,npm_package_config_port)
```

用户执行`npm run start`命令时，这个脚本就可以得到值
用户可以改变这个值

```bash
npm config set foo:port 80
```

## 其它字段

### `browser`

指定该模板供浏览器使用的版本。Browserify这样的浏览器打包工具，通过它就知道该打包那个文件

```json
"browser": {
  "tipso": "./node_modules/tipso/src/tipso.js"
},
```

### `engines`

指明了该模块运行的平台，比如 Node 的某个版本或者浏览器

```json
{ "engines" : { "node" : ">=0.10.3 <0.12" } }

该字段也可以指定适用的npm版本。

{ "engines" : { "npm" : "~1.0.20" } }
```

### `man`

指定当前模块的man文档的位置

```json
"man": [ "./doc/calc.1" ]
```

### `preferGlobal`

值是布尔值，表示当用户不将该模块安装为全局模块时（即不用–global参数），要不要显示警告，表示该模块的本意就是安装为全局模块

### `style`

指定供浏览器使用时，样式文件所在的位置。样式文件打包工具parcelify，通过它知道样式文件的打包位置。

```json
"style": [
  "./node_modules/tipso/src/tipso.css"
]
```