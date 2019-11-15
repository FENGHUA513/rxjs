官话：RxJS 是一个库，它通过使用 observable 序列来编写异步和基于事件的程序。它提供了一个核心类型 Observable，附属类型 (Observer、 Schedulers、 Subjects) 和受 [Array#extras] 启发的操作符 (map、filter、reduce、every, 等等)，这些数组操作符可以把异步事件作为集合来处理。

翻译：他是针对异步数据流的编程，简单的说就是将一切数据，包括HTTP请求，DOM事件或者普通数据等包装成流的形式，然后用强大丰富的操作符对流进行处理，使你能够以同步编程的方式处理异步数据，并组合不同的操作符来轻松实现你所需要的功能。（通俗的讲用它可以处理异步事件 犹如 promise 、async/await 之流,  rxjs相对于前端js 犹如 rxjava 相对于安卓开发） 

常见的异步编程：

1.回调函数
2.事件监听/发布订阅
3.Promise

4.Generators/ yield

5. async/await
6.RxJS （添加的新成员）