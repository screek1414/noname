(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{72:function(t,s,i){"use strict";i.r(s);var a={name:"Add",data:function(){return{course:[],is_admin:!1}},mounted:function(){this.init()},methods:{init:function(){var t=this;window.axios.post(window.location.origin+"/courses/show",{id:this.$route.params.id}).then((function(s){t.is_admin=s.data.is_admin,t.course=s.data.course}))}}},e=i(0),n=Object(e.a)(a,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-header"},[t._v("Add Component")]),t._v(" "),i("div",{staticClass:"card-body d-inline-flex justify-content-between"},[i("router-link",{staticClass:"btn btn-primary",attrs:{to:"/courses"}},[t._v("Все курсы\n                    ")])],1),t._v(" "),i("div",{staticClass:"col-10 justify-content-center m-auto"},[i("div",{staticClass:"card align-items-center text-center m-2"},[i("div",{staticClass:"card-img-top ml-auto"},[i("img",{staticClass:"p-3",staticStyle:{height:"20rem","object-fit":"cover","border-radius":"20px"},attrs:{src:t.course.img}})]),t._v(" "),i("div",{staticClass:"card-title font-weight-bold",staticStyle:{"font-size":"24px"}},[t._v(t._s(t.course.name))]),t._v(" "),i("div",{staticClass:"card-body text-align-justify"},[i("p",[i("span",{staticClass:"font-weight-bold"},[t._v("Автор:")]),t._v(" "+t._s(t.course.author))]),t._v(" "),i("p",[i("span",{staticClass:"font-weight-bold"},[t._v("Описание:")]),t._v(" "+t._s(t.course.description))])]),t._v(" "),i("div",{staticClass:"row align-items-center w-100 pb-2"},[t._m(0),t._v(" "),i("div",{staticClass:"col-6"},[i("a",{staticClass:"btn btn-outline-secondary",attrs:{href:t.course.link}},[t._v("Сайт курса")])])])])]),t._v(" "),i("div",{staticClass:"card-body d-inline-flex justify-content-end"},[i("router-link",{directives:[{name:"show",rawName:"v-show",value:!0===t.is_admin,expression:"is_admin === true"}],staticClass:"btn btn-primary",attrs:{to:"/courses/edit/"+t.course.id}},[t._v("Редактировать курс\n                    ")])],1)])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-6"},[s("a",{staticClass:"btn btn-outline-secondary",attrs:{onclick:"history.back(-1)"}},[this._v("Назад")])])}],!1,null,"1f07b1f8",null);s.default=n.exports}}]);