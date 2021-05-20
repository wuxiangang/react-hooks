### issue 1
> webpack 5中，webpack-dev-server热更新与browserslist冲突失效问题，如果postcss不需要browserslist， 可以删除。或者在webpack配置中添加target: "web";降级webpack 4不建议。

### issue 2
> webpack-dev-server开启history模式下404问题： historyApiFallback: true