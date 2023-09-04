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