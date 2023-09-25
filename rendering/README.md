# V12 vs V13
## V12
페이지 단위로 렌더링 방식을 규정하였다.  
그래서 `getStaticProps()`를 사용하면 SSG(Static Site Generation)    
`getServerSideProps()`를 사용하면 SSR(Server Side Rendering),  
즉 어떤 함수를 사용함에 따라 렌더링 방식을 결정할 수 있었다.  
`getStaticProps()` 함수에서 특정 주기를 설정하여  
페이지를 계속 렌더링하게 만들어 ISR(Incremental Static Regeneration)를 사용할 수도 있었다.  
  
### 이 모든 것들이 페이지 단위로 규정되어 있었다.
  
## V13
페이지 단위로 특정 렌더링 방식을 규정하는 것이 아니라  
`Server Component`,`Client Component`라는 개념이 도입되었다.  
React.js에서 18전 이후부터  Next.js 와 같이 SSR이 가능한 프레임워크를 위해서 `Server Component` 라는 개념을 추가하였다.  
> Server Component  
> 서버 상에서만 동작하는 컴포넌트
  
### 컴포넌트 단위로 렌더링 방식을 규정  
한 페이지 안에서도 `Server Component`,`Client Component` 혼합하여 보다 효율적으로 웹페이지를 구성할 수 있게 되었다.  
  
# Server Component
app 디렉토리 안에 있는 Component는 기본적으로 모두 Server Component 이다.  
이를 확인하기 위해서 간단하게 `console.log`로 확인이 가능하다.  
```
import Image from 'next/image';
import styles from './page.module.css';


export default function Home() {
  console.log('Hello!');
  return <h1>홈페이지다!!</h1>;
}
```
`Hello`가 브라우저 콘솔창에 나오면 브라우저에서 서버에서 나오면 서버에서 실행되는지 알 수 있다.  
![sc](../public/SC.png)  
우리가 출력한 `Hello`가 터미널에서 컴파일되면서 출력되는 것을 확인할 수 있다.  
**즉, Server Component는 서버에서 실행이된다. 따라서 우리가 작성한 Component코드는 서버에서 실행되어 HTML 형태로 브라우저에게 전달된다. 그래서 우리가 작성한 console.log 코드는 브라우저에서 출력이 되지 않는다.**  
  
또한, **서버에서 동작하기 때문에 브라우저에서 제공하는 API는 사용할 수 없다. 대신 Node 환경에서 제공하는 노드 API를 사용할 수 있다.**  
노드 API 확인하기  
```
import os from 'os';  // 노드APIS

export default function Home() {
  console.log('Hello!');
  console.log(os.hostname())
  return <h1>홈페이지다!!</h1>;
}
```
![sc](../public/SC1.png)  
  
**서버에서 동작하기때문에 브라우저에서 동작하는데 필요한 상태관리등은 Server Component에서는 불가능하다.**  
```
import os from 'os';// 노드APIS
import {useState} from "react";  

export default function Home() {
  console.log('Hello!');
  console.log(os.hostname())
  const [name, setName] = useState('');
  return <h1>홈페이지다!!</h1>;
}
```  
![sc](../public/SC2.png)  
  
### 그래서 Next.js를 사용할때는 Server Component 와 Client Component의 차이점과 각각 Component에서 할 수 있는 것과 없는 것을 명확하게 인지해야한다.




