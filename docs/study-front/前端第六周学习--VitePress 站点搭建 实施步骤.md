# 前端第六周学习--VitePress 站点搭建 实施步骤

搭建一个 VitePress 站点按照以下步骤进行：

1. **环境准备**：

   - 确保系统中安装了 Node.js（版本 18 或更高）。
   - 安装一个支持 Markdown 语法的文本编辑器，推荐使用 VSCode。

2. **安装 VitePress**：

   - 在项目目录中，通过终端运行以下命令来安装 VitePress：
     ```sh
     npm add -D vitepress
     ```

3. **初始化 VitePress 站点**：

   - 安装完成后，运行以下命令启动 VitePress 初始化向导：
     ```sh
     npx vitepress init@latest xxx
     ```
   - 根据提示，选择配置文件的初始化位置、站点标题、描述和主题。

4. **或者直接创建项目**

   - 直接选择创建一个新的项目
     ```sh
     npm init vitepress@la
     ```

5. **配置项目**：

   - 在 `package.json` 文件中添加以下脚本：
     ```json
     {
       "scripts": {
         "docs:dev": "vitepress dev docs",
         "docs:build": "vitepress build docs",
         "docs:preview": "vitepress preview docs"
       }
     }
     ```
   - 这些脚本分别用于启动本地开发服务器、构建站点和本地预览构建结果。

6. **启动本地开发服务器**：

   - 运行以下命令来启动本地开发服务器：
     ```sh
     npm run docs:dev
     ```

7. **自定义配置**：

   - 在 `.vitepress` 目录下有 `config.js` 文件来自定义你的站点配置，例如设置导航栏、侧边栏、主题等。

8. **构建和部署**：

   - 当你的站点开发完成后，运行以下命令来构建你的站点：
     ```sh
     npm run docs:build
     ```

9. **其他**：

   - 在进行构建之前可以进行不同功能的编写

   ![image-20241008210615241](https://dbz0423.oss-cn-nanjing.aliyuncs.com/%E7%AB%99%E7%82%B9%E6%90%AD%E5%BB%BAmd%E5%9B%BE%E7%89%87.png)
