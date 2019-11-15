// 将多个 observables 转换成单个 observable 
import { interval, merge } from 'rxjs';

// 每1秒发出值
const first = interval(1000)
// 每3秒发出值
const second = interval(3000)

// 从一个 observable 中发出输出值
const example = merge(
  first,
  second
);
example.subscribe(val => console.log(val));