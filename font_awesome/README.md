## 整理一些这里学到的CSS知识

1. 表格随着内容自动适应宽度：
    ```css
    tr {
        white-space: nowrap;
    }
    td {
        white-space: nowrap;
    }
    ```
2. 表格文本水平居中：
    ```css
    td {
        text-align:center;
    }
    ```
3. 背景全屏覆盖：
    ```css
    body {
        background:url("background.jpg") no-repeat center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    ```
4. 表格全屏居中：
    ```css
    div {
        position: absolute;
        left: 50%;
        transform: translate(-50%,0);
        font-size:2vw;
        color:#ff3300;
    }
    ```

## FontAwesome资料来源
[菜鸟教程](https://www.runoob.com/font-awesome/fontawesome-reference.html)

## 颜色选择器
[菜鸟教程拾色器](https://www.runoob.com/tags/html-colorpicker.html)

## 其他知识
1. 给\<button>添加链接：<code>onclick="location.href='链接'"</code>
