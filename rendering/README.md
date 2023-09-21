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
