# ng.dynamicInput

###Feature
- 根据sourceModel动态生成多个input元素
- 同时将input中数据与inputModel绑定


###Usage
- module name: `ng.dynamicInput`
- attr必需声明`data-dynamic-input
  ` `data-input-id="[demoInput]"`
- controller中可用`$scope[demoInput]` 对象声明option，所有方法也都在其命名空间下
- attr中定义的option级别最高，会覆盖`$scope[demoInput]`中的
- `input-id`为了同一页面多个sourceModel渲染

###api
- `sourceModel`: 根据此model生成多个input元素的model名
- `inputModel`: 与input绑定的model名
- `inputStyle`: input元素的class name
- `labelStyle`: label元素的class name
- `wrapperStyle`: wrapper的class name
		
##Demo
[demo](http://embed.plnkr.co/H2SRiaQnuQGv85YAjHOZ/)
		




