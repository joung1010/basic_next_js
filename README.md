# Next JS 기초
## Next Js란??
웹 계발을 위한 **리액트 프레임워크**이다.  
React를 기반으로 웹 어플리케이션을 만드는데 필요한 전체적인 도구들을 제공해준다.  
* Full-Stack(Frontend,Backend)
* File-base routing
* Optimization(파일,이미,폰트 최적화)
* SSR 뿐만 아니라 다양한 하이브리드 렌더링 가능
  
### Next.js의 6가지 원칙
1. 복잡한 설정을 하지 않아도 손쉽게 프레임워크를 사용
2. 자바스크립트 만으로 모든것을 해결
3. 자동으로 code-splitting 과 서버랜더링 지원
   1. code-splitting: 우리가 작성한 코드를 전부 사용자에게 전달하는 것이 아니라 현재 사용자가 보고있는 페이지의 코드만 부분적으로 잘라서 사용자에게 전달
4. data-fetching 설정가능
5. 요청사항을 예상을 예측한다.
6. 배포를 손쉽게!

## 발전 과정 
* 2016년 git 허브 오픈소스 프로젝트로 공개(2015년 창립된 **Vercel**이라는 회사)
  * Vercel: 미국 클라우드 회사로서 **Pass** 제공
  * Vercel 에서 제공하는 Pass를 이용하면 Next.js로 만든 웹앱 배포 및 관리가 쉬움
* 2023.09 : v9.3
  * Rewrite, reDirect, Incremental Static Generation 추가
* 2022.10: v13
  * new Routing
  * layouts
  * Server Components
  * streaming
  * new toolchain(Turbopack: 번들링 툴)

## Rendering
### CSR(Client Side Rendering)
렌더링 하는 주체자가 클라이언트(브라우저)  
1. 클라이언트 측에서 서버로 요청을 하면 빈 html파일을 전달
2. React 라이브러리 파일과 JS 파일(소스코드) 전달
3. React 라이브러리가 실행하면서 root요소에 우리가 작성한 JS파일(컴포넌트)를 연결하면서 DOM 요소로 변환
  
#### 즉 사용자에게 화면을 보여주기 위해서 브라우저가 서버로부터 HTML,UI 라이브러리,JS 파일등을 다운받아서 클라이언트측에서 다운로드 받은 소스를 바탕으로 DOM요소로 변환하여 표기한다.  
  
### 장점
1. 한번 로딩 되면, 빠른 UX 제공
2. 서버의 부하가 작음
### 단점
1. 페이지 로딩 시간(TTV: Time to View)이 길다 -> FCP(First Contentful Paint) 시간이 길다
2. 자바스크립트 활성화 필수
   1. 사용자가 브라우저의 자바스크립트를 비활성화 하면 동작하지 않는다.(기본적으로 UI 요소가 HTML에 없기 때문)
3. SEO 최적화가 힘듬
4. 보안에 취약함
   1. 모든 코드들이 클라이언트측으로 넘어가야 하기때문
5. CDN에 캐시가 안됨
   1. CDN(Content Deliver Network): 사용자와 원본 서버 사이의 물리적 거리를 줄여 콘텐츠 로딩에 소요되는 시간을 최소화하는 기술
      1. CDN은 전 세계에 분산된 서버 네트워크를 사용합니다. 사용자의 요청이 들어오면 가장 가까운 CDN 서버가 콘텐츠를 전달합니다. 이로써 사용자는 원본 서버에서 콘텐츠를 직접 다운로드하지 않아도 되므로, 콘텐츠 로딩 속도가 향상됩니다.
  
#### 이러한 문제점을 해결하기 위해서 나온 렌더링 방식이 SSG, SSR 이다.