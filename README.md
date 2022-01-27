## final project

## 👊 생드백(Thandbag) - FrontEnd

![thandbag_main_thumbnail](https://user-images.githubusercontent.com/87135478/150528634-b8623912-648a-49a9-9a0a-b980a5c45610.png)

<br />

## 🗂 Summary

### 항해99 4기, 실전 프로젝트 7조

> \* 서비스명 : 생드백 (_Think + Sandbag = Thandbag!_)  
> \* 서비스 설명 : 일상 생활속에서 받은 스트레스, 고민을 샌드백을 때리면서 재미있게 풀 수 있는 스트레스 해소 서비스

- [\[사이트 바로가기\]](https://thandbag.com)
- [\[시연영상 바로가기\]](https://youtu.be/TDr55gjFYGs)

<br />

## 👥 멤버

- Back-end: [고성범](https://github.com/SeongBeomKo), [오규화(조장)](https://github.com/59-devv)
- Front-end: [이준명](https://github.com/Leejunmyung), [전용태](https://github.com/yong313), [정상일](https://github.com/jsni94)
- Design : 정서윤, 황지현
- [\[Front-End Github\]](https://github.com/thandbag/thandbag_FE)

<br />

## 🗓 프로젝트 기간

- 2021년 12월 18일 ~ 2022년 01월 28일

<br />

## ♟ Information Architecture

![image](https://user-images.githubusercontent.com/87135478/150537317-d428e046-b7da-4f19-8176-351bd04c1b65.png)

<br />

## 🧩 Architecture

![image](https://user-images.githubusercontent.com/93691859/151114837-01d5afc2-3a89-4678-9272-fc55fe00c351.png)

<br />

## ⚙️ Front-End 기술 스택

|       분류        | 기술                                                                                                                                                                                                                  |
| :---------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     Language      | <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">                                                                                                                    |
|     Framework     | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> |
|      Server       | <img src="https://img.shields.io/badge/aws-232F3E?style=for-the-badge&logo=AmazonAWS&logoColor=white"> <img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white">   |
|        VCS        | <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">                                                                                                                |

<br />

## 📌 API 명세서

- [\[API 명세서 바로가기\]](https://typical-guanaco-54b.notion.site/API-bda198d1807e4eff8de732ebe02f3134)

<br />

## ⛔️ Trouble Shooting

### 1. 웹소켓 간헐적 끊김현상
> **문제** - 사용자가 채팅을 작성시 연속적으로 데이터를 보낼경우 간헐적으로 소켓이 끊기는 현상을 발견. => 데이터 흐름이 원할하지 않음

> **해결책** - websocket.readystate 와 callback 함수를 사용하여 소켓의 연결상태를 주기적으로 확인하고, 웹소켓 연결이 끊어질때 빠르게 소켓연결이 될수 있도록 한다.


<img width="350px" src="https://github.com/Leejunmyung/image/blob/master/%EC%B1%84%ED%8C%85_%EC%A0%81%EC%9A%A9%EC%A0%84.gif?raw=true"/> <img width="350px" src="https://github.com/Leejunmyung/image/blob/master/%EC%B1%84%ED%8C%85_%EC%A0%81%EC%9A%A9%ED%9B%84.gif?raw=true"/>
#### &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Before &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;After

### 2. 애니메이션 타격 효과 적용문제
> **문제** - 사용자가 샌드백을 클릭하면 타격을 하는 느낌으로 애니메이션이 움직이는 모션을 취하는데 모션만 있을경우 타격효과를 내는 것이 부족하다고 판단  

> **해결책** - 타격효과를 내는 애니메이션을 샌드백이 움직이는 순간에만 보이도록 하여 사용자가 직접 타격한다는 느낌을 준다. => 클릭시 샌드백이 움직이는 찰나의 순간을 useState를 통해 상태값을 저장 후 settimeout 함수를 이용해 샌드백이 움직이는 시간을 계산하고 그 시간만큼 타격효과 애니메이션이 보이도록 해준다.


<img width="350px" src="https://github.com/Leejunmyung/image/blob/master/before.gif?raw=true"/> <img width="350px" src="https://github.com/Leejunmyung/image/blob/master/after.gif?raw=true"/>
#### &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Before &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;After

### 3. 실시간 알림소켓 연결문제
> **문제** - 사용자가 어느 페이지에 있던 실시간알림이 전달되어야하는데 알림페이지에 진입하지 않으면 알림이 오지 않는 현상 => 소켓 연결 x

> **해결책** - 알림페이지에 웹소켓을 위치시키지 않고 따로 분리한뒤 사용자가 처음 웹페이지에 진입함과 동시에 알림 소켓이 연결되도록 설계


<br />

## 👀 유저 피드백  
>  \* 피드백 수집일자 : 2022년 1월 22일 ~ 2022년 1월 25일  
>  \* 피드백 수 : 총 30개  
* 서비스 만족도 평균 점수 : 4.23점 (5점)  
* 스트레스 해소 만족도 점수 : 4.2점 (5점)  
* 긍정적인 피드백 Top3  
    * 생드백을 때리면서 스트레스를 해소한다는 아이디어가 참신하고 좋았다.  
    * 생드백을 때릴 때, 생드백이 맞는 모션과 함께 타격감이 있어서 재미있었다.  
    * 간단하게 이용할 수 있고 인터페이스가 익숙하면서 편하다.  
* 개선에 대한 피드백 Top3  
    * 일부 페이지에서 하단 네비게이션 바가 보여지지 않아 불편했다. (네비게이션 바를 모든 페이지에서 볼 수 있도록 개선 완료)  
    * 채팅을 어떨 때 이용할 수 있는지 모르겠다. (채팅 메뉴에서 이용안내 가이드를 볼 수 있도록 개선 완료)  
    * 첫 화면이 로그인이라서, 로그인을 하지 않으면 아무것도 할 수 없다. (게시글 조회는 로그인을 하지 않아도 되도록 개선 완료)  
<br />

## 👣 런칭 성과

> \* 런칭일자 : 2022년 01월 22일(토)  
>  \* 성과 집계일자 : 2022년 01월 25일(화) 16:00

### 1. 인스타그램 광고 진행 성과 요약

- 3일간 인스타그램 광고 진행을 통해 약 2만명에게 도달하였으며 이 중, 182명이 사이트에 방문하였음
- 방문자 중 약 67%는 여성이었음
- 방문자 중 약 91%는 13-17세의 연령층이었음  
  ![image](https://user-images.githubusercontent.com/87135478/150996596-5a31264d-0eef-4ad4-8d77-9170158c42ea.png)

<br />

### 2. 개발자 커뮤니티/포럼 홍보 성과 요약

- Okky, 뽐뿌 개발자포럼을 통해 서비스 홍보를 진행하였음
- 사용자, 세션수 등에서 인스타그램 광고를 통한 성과 지표보다 높은 성과를 얻었음
  ![image](https://user-images.githubusercontent.com/87135478/150999046-b5c3e854-37fe-4dfa-b2c9-20cce48e975d.png)

<br />

### 3. 런칭 이후 누적 데이터 분석

- 가입 회원 수 : 105명
- 작성된 생드백(게시글) 수 : 총 46개
- 터트린 생드백 수 : 17개 (전체 대비 37%)
- 작성된 잽(댓글) 수 : 총 75개
- 가장 많은 생드백이 작성된 고민 카테고리 Top2 : 기타(25개), 대인관계(11개)
- 기간동안 생드백이 맞은 횟수 : 총 4,869대 (1인 평균 46.3대)

<br />



<br />
<br />

