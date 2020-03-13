(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74d4a6a6","chunk-2d0d03f7","chunk-2d0dd10e","chunk-2d0e19d2"],{"0a3c":function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("d2-container",[t("template",{slot:"header"},[n._v("表单事件监听")]),t("d2-crud",{ref:"d2Crud",attrs:{columns:n.columns,data:n.data,rowHandle:n.rowHandle,"edit-template":n.editTemplate,"form-options":n.formOptions},on:{"row-edit":n.handleRowEdit,"dialog-cancel":n.handleDialogCancel,"form-data-change":n.handleFormDataChange}}),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-markdown",{attrs:{source:n.doc}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-highlight",{attrs:{code:n.code}})],1),t("d2-link-btn",{attrs:{slot:"footer",title:"文档",link:"https://d2.pub/zh/doc/d2-crud-v2"},slot:"footer"})],2)},o=[],d=(t("8099"),t("7ad6")),s=t.n(d),i=t("66bc"),l={data:function(){return{doc:s.a,code:i["default"],columns:[{title:"日期",key:"date"},{title:"姓名",key:"name"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",forbidEdit:!0,showEditButton:!0},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",forbidEdit:!1,showEditButton:!0},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",forbidEdit:!1,showEditButton:!1},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",forbidEdit:!1,showEditButton:!0}],rowHandle:{columnHeader:"编辑表格",edit:{icon:"el-icon-edit",text:"点我进行编辑",size:"small"}},editTemplate:{date:{title:"日期",value:""},name:{title:"姓名",value:""},address:{title:"地址",value:""},forbidEdit:{title:"禁用按钮",value:!1,component:{show:!1}},showEditButton:{title:"显示按钮",value:!0,component:{show:!1}}},formOptions:{labelWidth:"80px",labelPosition:"left",saveLoading:!1}}},methods:{handleFormDataChange:function(n){var e=n.key,t=n.value;console.log(e),console.log(t)},handleRowEdit:function(n,e){var t=this,a=n.index,o=n.row;this.formOptions.saveLoading=!0,setTimeout((function(){console.log(a),console.log(o),t.$message({message:"编辑成功",type:"success"}),e(),t.formOptions.saveLoading=!1}),300)},handleDialogCancel:function(n){this.$message({message:"取消编辑",type:"warning"}),n()}}},r=l,c=t("2877"),u=function(n){n.options.__source="src/views/demo/d2-crud/demo30/index.vue"},m=u,h=Object(c["a"])(r,a,o,!1,null,null,null);"function"===typeof m&&m(h);e["default"]=h.exports},"66bc":function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      :rowHandle=\"rowHandle\"\n      :edit-template=\"editTemplate\"\n      :form-options=\"formOptions\"\n      @row-edit=\"handleRowEdit\"\n      @dialog-cancel=\"handleDialogCancel\"\n      @form-data-change=\"handleFormDataChange\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄',\n          forbidEdit: true,\n          showEditButton: true\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄',\n          forbidEdit: false,\n          showEditButton: true\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄',\n          forbidEdit: false,\n          showEditButton: false\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄',\n          forbidEdit: false,\n          showEditButton: true\n        }\n      ],\n      rowHandle: {\n        columnHeader: '编辑表格',\n        edit: {\n          icon: 'el-icon-edit',\n          text: '点我进行编辑',\n          size: 'small'\n        }\n      },\n      editTemplate: {\n        date: {\n          title: '日期',\n          value: ''\n        },\n        name: {\n          title: '姓名',\n          value: ''\n        },\n        address: {\n          title: '地址',\n          value: ''\n        },\n        forbidEdit: {\n          title: '禁用按钮',\n          value: false,\n          component: {\n            show: false\n          }\n        },\n        showEditButton: {\n          title: '显示按钮',\n          value: true,\n          component: {\n            show: false\n          }\n        }\n      },\n      formOptions: {\n        labelWidth: '80px',\n        labelPosition: 'left',\n        saveLoading: false\n      }\n    }\n  },\n  methods: {\n    handleFormDataChange ({ key, value }) {\n      console.log(key)\n      console.log(value)\n    },\n    handleRowEdit ({ index, row }, done) {\n      this.formOptions.saveLoading = true\n      setTimeout(() => {\n        console.log(index)\n        console.log(row)\n        this.$message({\n          message: '编辑成功',\n          type: 'success'\n        })\n        done()\n        this.formOptions.saveLoading = false\n      }, 300)\n    },\n    handleDialogCancel (done) {\n      this.$message({\n        message: '取消编辑',\n        type: 'warning'\n      })\n      done()\n    }\n  }\n}\n<\/script>"},"7ad6":function(n,e){n.exports="通过 `form-data-change` 事件可以监听表单内的数据变化，监听在crud内部是通过change事件触发的（这意味着input类组件失去焦点才会触发事件，单纯输入不会触发），接收一个对象参数 {key, value}，`key` 为改变的字段，`value` 为改变后的值。代码如下：\n"},8099:function(n,e,t){"use strict";t.r(e);var a=t("8bbf"),o=t.n(a),d=t("d075"),s=t.n(d);o.a.use(s.a)}}]);