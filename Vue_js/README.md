# Vue js

 https://kr.vuejs.org/v2/guide/index.html 

**SPA** : **S**ingle **P**age **A**pplication

-   데이터와 DOM이 연결되어 이제 모든 것이 **반응형**이 된다.
- page가 loading되지 않고, binding 한 부분만 실시간으로 data가 바뀌게 즉각적으로 조작할 수 있다.

- page를 전체 다 바꾸는 것이 아니라 source가 되는 부분만 바꾼다. 때문에 바뀌지 않는 부분에 대한 낭비가 없다.



**Vue.js devtools**

 https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd 



```js
> app.$data.message
> "Hello, Vue!"
> app.message
> "Hello, Vue!"
// plus method 가 실행되면서 브라우저화면의 count가 늘어난다
> app.plus()
> undefined
```



