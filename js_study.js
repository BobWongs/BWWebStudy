/**
 * Created by BobWong on 16/9/2.
 */


/*--------------------------
 JavaScript变量
 -------------------------*/
var var0 = 100;
var var1 = 55.5;
var var2 = "abc";


/*--------------------------
 JavaScript数据类型
     字符串、数字、布尔、数组、对象、Null、Undefined
     JavaScript拥有动态类型
 -------------------------*/
var var_string = "string";
var var_numeric = 666;
var var_bool = true;
var var_array0 = new Array("first", "second", "third");
var var_array1 = ["first", "second", "third"];
var var_array2 = {
    first: "one",
    second: "two",
    third: "three"
};
var var_object = new Object();
var var_null = null;


/*--------------------------
 JavaScript对象
     JavaScript中的所有事物都是对象：字符串、数字、数组、日期，等等。
     在JavaScript中，对象是拥有属性和方法的数据。
 -------------------------*/
person = new Object();
person.firstname = "Bill";
person.lastname = "Gates";
person.age = 56;


/*--------------------------
 JavaScript函数
     函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。
 -------------------------*/
function myFunction0()
{
    alert("Hello World!");
}

function myFunction1(var0, var1)
{
    return var0 >= var1 ? true : false;
}


/*--------------------------
 JavaScript运算符
 -------------------------*/
var var_opration_result = 55 + "55";  // result is 5555


/*--------------------------
 JavaScript if-else语句
 JavaScript Switch语句
     首先设置表达式 n（通常是一个变量）。随后表达式的值会与结构中的每个 case 的值做比较。如果存在匹配，则与该 case 关联的代码块会被执行。请使用 break 来阻止代码自动地向下一个 case 运行。
     default关键词来规定匹配不存在时做的事情.
 -------------------------*/


/*--------------------------
 JavaScript For循环
     Break 和 Continue 语句
 -------------------------*/
var array_loop = {
    fname: "John",
    lname: "Don",
    age: 25
};
var x;
var txt = "";

for (x in array_loop) {
    txt = txt + array_loop[x];
}


/*--------------------------
 JavaScript 错误 - Throw、Try 和 Catch
 -------------------------*/


/*--------------------------
 JavaScript 表单验证
     JavaScript 可用来在数据被送往服务器前对 HTML 表单中的这些输入数据进行验证。
 -------------------------*/


/*--------------------------
 JavaScript HTML DOM
     通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。
     当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。
     HTML DOM 模型被构造为对象的树。

     JavaScript 能够改变页面中的所有 HTML 元素
     JavaScript 能够改变页面中的所有 HTML 属性
     JavaScript 能够改变页面中的所有 CSS 样式
     JavaScript 能够对页面中的所有事件做出反应
 -------------------------*/
var element_by_id = document.getElementById("demo");
var element_by_class = document.getElementsByClassName("demo");
element_by_id.innerHTML = "new text";  // 改变 HTML 内容
//element_by_id.some_attribute = new value;  // 改变 HTML 属性
element_by_id.style.color = "blue";  // 改变 CSS


/*--------------------------
 JavaScript HTML DOM 事件
 HTML DOM 使 JavaScript 有能力对 HTML 事件做出反应。
 -------------------------*/


/*--------------------------
 添加和删除节点（HTML 元素）
 -------------------------*/


/*
 开发记录
    如果在文档已完成加载后执行 document.write，整个 HTML 页面将被覆盖;
    调试技巧
        alert();
        document.write();
        document.getElementById("demo").innerHTML=txt;
 */