# API 라우터
V12 에서 page 디렉토리 안에 v13버전 이후는 app 디렉토리안에 api라는 디렉토리가 존재한다.  
React를 이용해서 front-end를 개발하고 있는데 별도로 서버를 가지고 있지는 않다.  
하지만 Next.js 를 이용하면 front-end 뿐만아니라 back-end 작업도 할 수 있다고 했는데 이를 가능하게 하는 것이 이 api 디렉토리 이다.  

![](../../public/api.png)  
이러한 함수를 Vercel에 등록만하면  
![](../../public/api1.png)  
해당 경로로 요청이 들어오면 우리가 등록한 함수가 호출되여 마치 서버처럼 동작한다.  
![](../../public/api2.png)  
  
## 구조
```
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({name: 'John Doe'});
}
```
  
우리가 등록한 **handler**함수를 보면 파라미터로  
* req
  * client에서 보낸 요청에 관한 정보를 가지고 있다
    * NextApiRequest
      * HTTP 요청의 모든 정보를 포함하고 있으며, 이를 통해 개발자는 요청의 메서드, URL, 헤더, 바디 등을 확인하고 처리할 수 있습니다.
      * 속성:
        * method: HTTP 메서드
        * url: 요청 URL
        * headers: HTTP 헤더
        * query: URL 쿼리 파라미터
        * body: 요청 바디
      * ```
        // 요청 메서드 확인
        const method = req.method;  
        // 요청 URL 확인
        const url = req.url;
        // HTTP 헤더 확인
        const headers = req.headers;
        // URL 쿼리 파라미터 확인
        const query = req.query;
        // 요청 바디 확인
        const body = req.body;
        ```
* res
  * 결과 값을 반환할 수 있는 res 가 있다.
  * NextApiResponse<Data>
    * HTTP 응답의 모든 정보를 포함하고 있으며, 이를 통해 개발자는 응답의 상태 코드, 헤더, 바디 등을 설정할 수 있습니다.
    * 속성:
      * status: HTTP 상태 코드
      * headers: HTTP 헤더
      * body: 응답 바디
    * ```
      // 응답 상태 코드 설정
      res.status(200);
      // HTTP 헤더 설정
      res.setHeader('Content-Type', 'application/json');
      // 응답 바디 설정
      res.json({
        message: 'Hello, World!',
      });
      ```
      
  
V12에 불편한점중 하나는 HTTP Method를 구분할 수 없다는 것이다.  
만약 요청을 구분하고 싶다면  
```
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    
  }
  res.status(200).json({name: 'John Doe'});
}
```
이런식으로 함수 내부에서 요청문을 구분해서 처리해야만 한다.  
  
## V13
V13 부터는 app 디렉토리안에 api 디렉토리를 이용해서 라우팅이 가능해졌다.  
요청 경로에 따라 GET,POST.. 와같이 HTTP Method 형태로 구분이 가능해졌다.  
```
export async function GET(request: Request) {}

export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}
```

```
export async function POST() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
    body: JSON.stringify({ time: new Date().toISOString() }),
  })
 
  const data = await res.json()
 
  return Response.json(data)
}
```

[라우트 핸들러 공식문서](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)