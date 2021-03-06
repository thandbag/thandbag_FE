## final project

## ๐ ์๋๋ฐฑ(Thandbag) - FrontEnd

![thandbag_main_thumbnail](https://user-images.githubusercontent.com/87135478/150528634-b8623912-648a-49a9-9a0a-b980a5c45610.png)

<br />

## ๐ Summary

### ํญํด99 4๊ธฐ, ์ค์  ํ๋ก์ ํธ 7์กฐ

> \* ์๋น์ค๋ช : ์๋๋ฐฑ (_Think + Sandbag = Thandbag!_)  
> \* ์๋น์ค ์ค๋ช : ์ผ์ ์ํ์์์ ๋ฐ์ ์คํธ๋ ์ค, ๊ณ ๋ฏผ์ ์๋๋ฐฑ์ ๋๋ฆฌ๋ฉด์ ์ฌ๋ฏธ์๊ฒ ํ ์ ์๋ ์คํธ๋ ์ค ํด์ ์๋น์ค

- [\[์ฌ์ดํธ ๋ฐ๋ก๊ฐ๊ธฐ\]](https://thandbag.com)
- [\[์์ฐ์์ ๋ฐ๋ก๊ฐ๊ธฐ\]](https://youtu.be/TDr55gjFYGs)

<br />

## ๐ฅ ๋ฉค๋ฒ

- Back-end: [๊ณ ์ฑ๋ฒ](https://github.com/SeongBeomKo), [์ค๊ทํ(์กฐ์ฅ)](https://github.com/59-devv)
- Front-end: [์ด์ค๋ช](https://github.com/Leejunmyung), [์ ์ฉํ](https://github.com/yong313), [์ ์์ผ](https://github.com/jsni94)
- Design : ์ ์์ค, ํฉ์งํ
- [\[Back-End Github\]](https://github.com/thandbag/thandbag_BE)

<br />

## ๐ ํ๋ก์ ํธ ์ค๋ช

- ๊ฐ๋ฐ๊ธฐ๊ฐ: 2021๋ 12์ 18์ผ ~ 2022๋ 01์ 28์ผ
- ๊ฐ๋ฐ์ธ์ด: JavaScript
- ๊ฐ๋ฐ ๋ผ์ด๋ธ๋ฌ๋ฆฌ:
	- React.js v17.0.2
		-์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ, ์น ์ธํฐํ์ด์ค๋ฅผ ๋ง๋ค๊ธฐ ์ํด ์ฌ์ฉ๋จ
- ๋ฐฐํฌ ํ๊ฒฝ:
	- Amazon S3, CloundFront
- Yarn v1.22.10 / npm v6.14.13 / npx v6.14.13
	- ์๋ฐ์คํฌ๋ฆฝํธ ํจํค์ง ๋งค๋์ 
    
- ํ์ ํด: git / notion / figma / slack
- ํ๋ก์ ํธ ์ทจ์ง: ์ผ์์ํ์์ ์ฌ๋๋ค์ด ๋ฐ๋ ์คํธ๋ ์ค, ๊ณ ๋ฏผ๋ค์ ๋ค๋ฅธ ์ฌ๋๋ค๊ณผ ๊ณต์ ํ๊ณ  ๊ณต๊ฐ์ ๋ฐ๊ณ  ์คํธ๋ ์ค๋ฅผ ํด์ํ  ์ ์๋ ์ปค๋ฎค๋ํฐ๋ฅผ ๋ง๋ค๊ณ ์ ํ์์ต๋๋ค.

<br />

## โ Information Architecture

![image](https://user-images.githubusercontent.com/87135478/150537317-d428e046-b7da-4f19-8176-351bd04c1b65.png)

<br />

## ๐งฉ Architecture

![image](https://user-images.githubusercontent.com/93691859/151114837-01d5afc2-3a89-4678-9272-fc55fe00c351.png)

<br />

<br />

## ๐ API ๋ช์ธ์

- [\[API ๋ช์ธ์ ๋ฐ๋ก๊ฐ๊ธฐ\]](https://typical-guanaco-54b.notion.site/API-bda198d1807e4eff8de732ebe02f3134)

<br />

## โ๏ธ Front-End ๊ธฐ์  ์คํ

- Styled-Component
   * CSS-in-JS ๋ผ์ด๋ธ๋ฌ๋ฆฌ
   * CSS ํ์ผ์ ๋ฐ์ ๋์ง ์๊ณ , ์ปดํฌ๋ํธ ๋ด๋ถ์ ๋ฃ๊ธฐ ๋๋ฌธ์, CSS๊ฐ ์ ์ญ์ผ๋ก ์ค์ฒฉ๋์ง ์๋๋ก ๋ง๋ค์ด์ฃผ๋ ์ฅ์ ์ด ์๋ค.
- Redux, redux-actions, immer, redux-thunk / redux-logger
   * state ๊ด๋ฆฌ๋ฅผ ์ ์ญ์ผ๋ก ํ  ์ ์๊ณ , ๋ฌด๋ถ๋ณํ prop-drilling์ ๋ฐฉ์งํ๋ค.
   * ๋ฐ์ดํฐ๊ฐ ์ง์คํ ๋์ด์์ด ์์ธก๊ฐ๋ฅํ๋ฉฐ ๋ฐ์ดํฐ ํ๋ฆ์ด ๋จ๋ฐฉํฅ์ด๋ผ์ ๋๋ฒ๊นํ๊ธฐ ์ฝ๋ค๋ ์ฅ์ ์ด ์๋ค.
   * ๋ฏธ๋ค์จ์ด๋ก ์๋ฒ์์ ๋น๋๊ธฐ ์ก์๋ณด๋ค ํธํ๊ฒ ๋ค๋ฃจ๊ธฐ ์ํด redux-thunk, ๊ฐ๋ฐํ๊ฒฝ์์ state / action ๋ฑ ์ฝ๊ฒ ์ถ์ ํ๊ณ  ๊ด๋ฆฌํ๊ธฐ ์ํด redux-logger์ฌ์ฉ

- sockjs
   * sockjs๋ WebSocket๊ณผ ์ ์ฌํ ๊ฐ์ฒด๋ฅผ ์ ๊ณตํ๋ ๋ธ๋ผ์ฐ์  JavaScript ๋ผ์ด๋ธ๋ฌ๋ฆฌ์๋๋ค. sockjs๋ ๋ธ๋ผ์ฐ์ ์ ์น ์๋ฒ๊ฐ์ ๋ฎ์ ๋๊ธฐ ์๊ฐ, ์ ์ด์ค, ๋๋ฉ์ธ ๊ฐ ํต์  ์ฑ๋์ ์์ฑํ๋ ์ผ๊ด๋ ํฌ๋ก์ค ๋ธ๋ผ์ฐ์  Javascript API๋ฅผ ์ ๊ณตํฉ๋๋ค.
- stomp
   * stomp๋ ๋จ์ ํ์คํธ ์งํฅ ๋ฉ์์ง ํ๋กํ ์ฝ์ด๋ค. spring์ ์ข์์ ์ด๊ณ , ์น์์ผ ์์์ ๋์ํ๋ ํ๋กํ ์ฝ๋ก์จ, ํด๋ผ์ด์ธํธ๊ฐ ์๋ฒ์ ์ ์กํ  ๋ฉ์์ง ์ ํ, ํ์, ๋ด์ฉ๋ค์ ์ ์ํ๋ ๋ฉ์ปค๋์ฆ์ด๋ค.
- react-ga
   * ๊ตฌ๊ธ ์ ๋๋ฆฌํฑ์ค๋ฅผ ์ฌ์ฉํ๊ธฐ์ํ ๋ฆฌ์กํธ ํจํค์ง
- axios
   * ์๋ฒ์ ํต์ ์ ์ํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ

- react-spring

   * ๊ธฐ์กด์ ์ ๋๋ฉ์ด์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ํ๋ฉด animated ์ react-motion ์ด ๋ง์ด ๋์ค๋๋ฐ, animated์ ์ฌ์ด ์ฌ์ฉ๊ณผ react-motion์ ๊ฐ๊ฒฐํ ๊ตฌ์กฐ์ ์ฅ์ ์ ํฉ์น๊ฒ์ด react-spring์ด๋ค.
   * ํ์ ์ด์ฉํ ์ฌ์ฉ๋ฒ์ด ๊ฐ๊ฒฐํ๊ณ  ์ฌ์ ๋ ์ฅ์ ์ด ์์๊ณ , ์ ๋๋ฉ์ด์ ์์ง์ ๋ํ ๋ถ๋๋ฌ์ ๋ค.

<img width="350px" src="https://user-images.githubusercontent.com/85574104/152375860-bc0e2f30-b07f-45c9-81cb-140543d40623.gif"/><img width="350px" src="https://user-images.githubusercontent.com/85574104/152375826-d705b1ca-38b8-45c4-bd47-f086e2398bb2.gif"/>


- React Quill

   * ์๋๋ฐฑ ์์ฑ ์ ์ฌ์ฉ์์ ๊ฐ์ ์ ํ์คํธ ์๋ํฐ์ ๊ธ์ ์์๋ณ๊ฒฝ, ๋ฐ์ค ๋ฑ์ผ๋ก ์ข ๋ ๋ค์ฑ๋ก์ด ๊ฐ์ ํํ์ด ๊ฐ๋ฅํ๊ฒ ํ๊ธฐ ์ํด ์ฌ์ฉ
   * API ๊ธฐ๋ฐ ๋์์ธ ๋๋ถ์ ๋ค๋ฅธ ํ์คํธ ํธ์ง๊ธฐ ์์์ฒ๋ผ HTML์ด๋ ๋ค๋ฅธ DOM ํธ๋ฆฌ๋ฅผ ๊ตฌ๋ฌธ ๋ถ์ ํ  ํ์๊ฐ ์๋ค.
   * ํธ์ง๊ธฐ ์คํ์ผ๋ง์์ํ ์ฌ์  ์ค์ ์ผ๋ก ์ฌ์ฉ์ ์ ์ ์ฝํ์ธ  ๋ฐ ์์ ์ง์.
   * ํฌ๋ก์ค ํ๋ซํผ ๋ฐ ํฌ๋ก์ค ๋ธ๋ผ์ฐ์  ์ง์์ ์ ๊ณต
   * ์ฌ์ด ์ค์ .

<br />

<img width="350px" src=https://user-images.githubusercontent.com/85574104/152324423-dcd1eed5-7a1d-4183-bd2b-6073224eb3a0.gif>

<br />

- swiper.js

   * ๋ชจ๋ฐ์ผ ํ๊ฒฝ์์์ ํฐ์น ์ด๋ฒคํธ(์ค์์ดํ์)์ ์ ๋ฐ์ํ๋ Slider๋ฅผ ํํํ๊ธฐ ์ํด ์ ํ
   * PC, ๋ชจ๋ฐ์ผ ์๋นํ ๋ถ๋๋ฝ๊ณ  ์์ ์ 
   * ์ต์๋ค์ ์ฝ๊ฒ ์กฐ์ ํ  ์ ์๋ค
   * ํจ๊ณผ, ๊ธฐ๋ฅ์ด ๋ง์ (์์ง ์ฌ๋ผ์ด๋, ์ํ ์ฌ๋ผ์ด๋, ์์ง์ํ ์ฌ๋ผ์ด๋, ๋์์ ์ฌ๋ผ์ด๋, 3D, ํจ๋ด๋์ค ํจ๊ณผ ๋ฑ๋ฑ)

<br />

<img width="450px" src=https://user-images.githubusercontent.com/85574104/152328500-104a1e9b-5a49-484b-a79f-6dcb494d429c.gif>
<br />

## โ๏ธ Trouble Shooting

### 1. ์น์์ผ ๊ฐํ์  ๋๊นํ์
> **๋ฌธ์ ** - ์ฌ์ฉ์๊ฐ ์ฑํ์ ์์ฑ์ ์ฐ์์ ์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ๋ณด๋ผ๊ฒฝ์ฐ ๊ฐํ์ ์ผ๋ก ์์ผ์ด ๋๊ธฐ๋ ํ์์ ๋ฐ๊ฒฌ. => ๋ฐ์ดํฐ ํ๋ฆ์ด ์ํ ํ์ง ์์

> **ํด๊ฒฐ์ฑ** - websocket.readystate ์ callback ํจ์๋ฅผ ์ฌ์ฉํ์ฌ ์์ผ์ ์ฐ๊ฒฐ์ํ๋ฅผ ์ฃผ๊ธฐ์ ์ผ๋ก ํ์ธํ๊ณ , ์น์์ผ ์ฐ๊ฒฐ์ด ๋์ด์ง๋ ๋น ๋ฅด๊ฒ ์์ผ์ฐ๊ฒฐ์ด ๋ ์ ์๋๋ก ํ๋ค.


<img width="350px" src="https://user-images.githubusercontent.com/61734933/151477426-397abc83-c3d8-4e66-9c45-8e1e53efe8f6.gif"/> <img width="350px" src="https://user-images.githubusercontent.com/61734933/151477422-738753df-2e11-4ef9-a25c-886ba877c576.gif"/>
#### &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Before &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;After

### 2. ์ ๋๋ฉ์ด์ ํ๊ฒฉ ํจ๊ณผ ์ ์ฉ๋ฌธ์ 
> **๋ฌธ์ ** - ์ฌ์ฉ์๊ฐ ์๋๋ฐฑ์ ํด๋ฆญํ๋ฉด ํ๊ฒฉ์ ํ๋ ๋๋์ผ๋ก ์ ๋๋ฉ์ด์์ด ์์ง์ด๋ ๋ชจ์์ ์ทจํ๋๋ฐ ๋ชจ์๋ง ์์๊ฒฝ์ฐ ํ๊ฒฉํจ๊ณผ๋ฅผ ๋ด๋ ๊ฒ์ด ๋ถ์กฑํ๋ค๊ณ  ํ๋จ  

> **ํด๊ฒฐ์ฑ** - ํ๊ฒฉํจ๊ณผ๋ฅผ ๋ด๋ ์ ๋๋ฉ์ด์์ ์๋๋ฐฑ์ด ์์ง์ด๋ ์๊ฐ์๋ง ๋ณด์ด๋๋ก ํ์ฌ ์ฌ์ฉ์๊ฐ ์ง์  ํ๊ฒฉํ๋ค๋ ๋๋์ ์ค๋ค. => ํด๋ฆญ์ ์๋๋ฐฑ์ด ์์ง์ด๋ ์ฐฐ๋์ ์๊ฐ์ useState๋ฅผ ํตํด ์ํ๊ฐ์ ์ ์ฅ ํ settimeout ํจ์๋ฅผ ์ด์ฉํด ์๋๋ฐฑ์ด ์์ง์ด๋ ์๊ฐ์ ๊ณ์ฐํ๊ณ  ๊ทธ ์๊ฐ๋งํผ ํ๊ฒฉํจ๊ณผ ์ ๋๋ฉ์ด์์ด ๋ณด์ด๋๋ก ํด์ค๋ค.


<img width="350px" src="https://user-images.githubusercontent.com/61734933/151477396-16a355f6-77b5-49cf-a031-0a7470896ed3.gif"/> <img width="350px" src="https://user-images.githubusercontent.com/61734933/151477408-98cd88fb-02c8-44d6-8f7a-a8b5203818c3.gif"/>
#### &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Before &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;After

### 3. ์ค์๊ฐ ์๋ฆผ์์ผ ์ฐ๊ฒฐ๋ฌธ์ 
> **๋ฌธ์ ** - ์ฌ์ฉ์๊ฐ ์ด๋ ํ์ด์ง์ ์๋ ์ค์๊ฐ์๋ฆผ์ด ์ ๋ฌ๋์ด์ผํ๋๋ฐ ์๋ฆผํ์ด์ง์ ์ง์ํ์ง ์์ผ๋ฉด ์๋ฆผ์ด ์ค์ง ์๋ ํ์ => ์์ผ ์ฐ๊ฒฐ x

> **ํด๊ฒฐ์ฑ** - ์๋ฆผํ์ด์ง์ ์น์์ผ์ ์์น์ํค์ง ์๊ณ  ๋ฐ๋ก ๋ถ๋ฆฌํ๋ค ์ฌ์ฉ์๊ฐ ์ฒ์ ์นํ์ด์ง์ ์ง์ํจ๊ณผ ๋์์ ์๋ฆผ ์์ผ์ด ์ฐ๊ฒฐ๋๋๋ก ์ค๊ณ

<br/>
<br/>
<br/>


### 4. ๋ฌดํ์คํฌ๋กค์ ๋ฐ์ดํฐ๋ฅผ ๋ค ๋ถ๋ฌ์์์๋ ์ง์์ ์ผ๋ก dispatch๊ฐ ์ผ์ด๋๋ ํ์

> ๋ฌธ์ ์  : ํด๋น api ํธ์ถ์ onScroll์ ๊ฑธ์ด๋จ๊ธฐ ๋๋ฌธ์ ๋ฐ์ดํฐ๋ฅผ ๋ค ๋ถ๋ฌ์๋ ์คํฌ๋กค์ด ์ผ์ด๋ ๋๋ง๋ค ์๋ฏธ์๋ apiํธ์ถ(๋น๋ฐฐ์ด)์ด ์ง์์ ์ผ๋ก ์ผ์ด๋จ.
>
> โ As-Is  
> ![image](https://user-images.githubusercontent.com/93691859/151382936-c7e6599d-8294-4343-9f10-295f4094c29c.png)
> 
> ๐ก To-Be  
> ![image](https://user-images.githubusercontent.com/93691859/151383020-0dccd112-a3f3-463c-b1af-4ba5fe795629.png)
>
> !![image](https://user-images.githubusercontent.com/93691859/151383713-453f5c64-d737-4238-bb44-71bcd1892012.png)

>โ๏ธ ํด๊ฒฐ : is_card_list_load_complete์ก์์ ๋ง๋ค์ด ๋ค ๋ถ๋ฌ์ค์ง ์์ ์ํ๋ฅผ false๋ก ๊ธฐ๋ณธ๊ฐ ์ง์  ํ if๋ฌธ์ ์ฌ์ฉํด (action.payload.notice.length === 0)
>          ์ฆ ๋์ด์ ํธ์ถํ  ๋ฐ์ดํฐ๊ฐ ์์๊ฒฝ์ฐ ์ํ๊ฐ์ true๋ก ๋ฐ๊ฟ์ค. ํ ํด๋น ์ปดํฌ๋ํธ์์ useSelector๋ฅผ ํ์ฉํด is_card_list_load_complete ์ํ๋ฅผ ๋ถ๋ฌ์จ ํ
>          ํด๋น๊ฐ์ด true์ผ ๊ฒฝ์ฐ ์๋ฌด๊ฒ๋ ๋ฆฌํดํ์ง ์๋๋ก ์์ ํด์ ๋ฌธ์ ๋ฅผ ํด๊ฒฐ.

<br />
<br />


### 5. ๋ฌดํ์คํฌ๋กค์ ์ ์ฒด ๋ฐ์ดํฐ๊ฐ ๋ถ๋ฌ์์ง ์ํ์์ ํ์ด์ง ์ด๋ ํ ํด๋น ๋ฌดํ์คํฌ๋กค ํ์ด์ง๋ก ๋์์์๋ ๋ฌดํ์คํฌ๋กค์ด ๋์ํ์ง ์๋ ํ์

> ๋ฌธ์ ์  : ๋ฐ์ดํฐ๋ฅผ ๋ค ๋ถ๋ฌ์จ ์ํ์์ ์ถ๊ฐ์ ์ธ apiํธ์ถ์ ๋ง์์ฃผ๋ ์ํ๊ฐ(is_card_list_load_complete)์ ๋ฌธ์ .
>
> โ As-Is  
> ![image](https://user-images.githubusercontent.com/93691859/151380276-44afd21d-cd14-41e2-ad75-2ba3e8b391b9.png)
> 
> ๐ก To-Be  
> ![image](https://user-images.githubusercontent.com/93691859/151380568-65818e92-1fa1-47be-be3b-3711a0a15320.png)
>
> ![image](https://user-images.githubusercontent.com/93691859/151380770-e268d497-5d47-4c08-ae06-f6c354da020d.png)

>โ๏ธ ํด๊ฒฐ : ํด๋น ์นด๋๋ฅผ ํด๋ฆญํ ๋๋ง๋ค setPageNumber ์ก์์ ์ผ์ผ์ผ ๋ฌดํ ์คํฌ๋กค์ ์ด๊ธฐํ(pageNumber๋ฅผ ๋ค์ 0์ผ๋ก, ๋ฐ์ดํฐ๋ฅผ ๋ค ๋ถ๋ฌ์์์ ๋์ด์์ ์ถ๊ฐ์ ์ธ ๋์คํจ์น๊ฐ ์ผ์ด๋์ง ์๊ฒ
>          ํด์ฃผ๋ is_card_list_load_complete๋ฅผ ๋ค์ flase๋ก ๋ฐ๊ฟ์ค) ์์ผ์ฃผ์ด์ ๋ค์ ๋์ํ  ์ ์๋๋ก ํจ.

<br/>
<br />


### 6. ๋๊ธ ์ ๋๋ฉ์ด์์ด Input๋ฐ์ค์ ํฌ๊ธฐ๋ฅผ ๋ฒ์ด๋๋ ํ์

> ๋ฌธ์ ์  : ํด๋น ์ ๋๋ฉ์ด์์ input cursor๋ฅผ ๋ฐ๋ผ๊ฐ๋๋ก ํด์ cursor๊ฐ input์ ํฌ๊ธฐ๋ฅผ ๋ฒ์ด๋๋๋ผ๋ ์ ๋๋ฉ์ด์์ด ์ง์์ ์ผ๋ก ๋ฐ์.
>
> โ As-Is  
> ![image](https://user-images.githubusercontent.com/93691859/151387904-188c0989-3997-4ea3-a61a-ca05af6fb41a.png)
> ![image](https://user-images.githubusercontent.com/93691859/151386592-682910e5-748e-44ce-92e2-a511db7b88ce.png)

> 
> ๐ก To-Be  
> ![image](https://user-images.githubusercontent.com/93691859/151386685-ec295c60-7984-4780-accf-1b4a9b8b0655.png)
>
> 
>โ๏ธ ํด๊ฒฐ : ๋จผ์  input์ ํฌ๊ธฐ(offsetWidth)๋ฅผ ๊ตฌํด์ ์ปค์์ ์์น๊ฐ input์ ํฌ๊ธฐ๋ณด๋ค ์์๊ฒฝ์ฐ์ ์ ๋๋ฉ์ด์์ด ์ปค์์ ์์น๋ฅผ ๋ฐ๋ผ๊ฐ๋๋ก ํ๊ณ 
>          ๊ทธ๊ฒ ์๋๊ฒฝ์ฐ ์ ๋๋ฉ์ด์์ด input์ ์ต๋ ํฌ๊ธฐ ์์น์ ๋ฉ์ถฐ ์๋๋ก ์์ ํจ. 


<br />


## ๐ ์ ์  ํผ๋๋ฐฑ  
>  \* ํผ๋๋ฐฑ ์์ง์ผ์ : 2022๋ 1์ 22์ผ ~ 2022๋ 1์ 25์ผ  
>  \* ํผ๋๋ฐฑ ์ : ์ด 30๊ฐ  
* ์๋น์ค ๋ง์กฑ๋ ํ๊ท  ์ ์ : 4.23์  (5์ )  
* ์คํธ๋ ์ค ํด์ ๋ง์กฑ๋ ์ ์ : 4.2์  (5์ )  
* ๊ธ์ ์ ์ธ ํผ๋๋ฐฑ Top3  
    * ์๋๋ฐฑ์ ๋๋ฆฌ๋ฉด์ ์คํธ๋ ์ค๋ฅผ ํด์ํ๋ค๋ ์์ด๋์ด๊ฐ ์ฐธ์ ํ๊ณ  ์ข์๋ค.  
    * ์๋๋ฐฑ์ ๋๋ฆด ๋, ์๋๋ฐฑ์ด ๋ง๋ ๋ชจ์๊ณผ ํจ๊ป ํ๊ฒฉ๊ฐ์ด ์์ด์ ์ฌ๋ฏธ์์๋ค.  
    * ๊ฐ๋จํ๊ฒ ์ด์ฉํ  ์ ์๊ณ  ์ธํฐํ์ด์ค๊ฐ ์ต์ํ๋ฉด์ ํธํ๋ค.  
* ๊ฐ์ ์ ๋ํ ํผ๋๋ฐฑ Top3  
    * ์ผ๋ถ ํ์ด์ง์์ ํ๋จ ๋ค๋น๊ฒ์ด์ ๋ฐ๊ฐ ๋ณด์ฌ์ง์ง ์์ ๋ถํธํ๋ค. (๋ค๋น๊ฒ์ด์ ๋ฐ๋ฅผ ๋ชจ๋  ํ์ด์ง์์ ๋ณผ ์ ์๋๋ก ๊ฐ์  ์๋ฃ)  
    * ์ฑํ์ ์ด๋จ ๋ ์ด์ฉํ  ์ ์๋์ง ๋ชจ๋ฅด๊ฒ ๋ค. (์ฑํ ๋ฉ๋ด์์ ์ด์ฉ์๋ด ๊ฐ์ด๋๋ฅผ ๋ณผ ์ ์๋๋ก ๊ฐ์  ์๋ฃ)  
    * ์ฒซ ํ๋ฉด์ด ๋ก๊ทธ์ธ์ด๋ผ์, ๋ก๊ทธ์ธ์ ํ์ง ์์ผ๋ฉด ์๋ฌด๊ฒ๋ ํ  ์ ์๋ค. (๊ฒ์๊ธ ์กฐํ๋ ๋ก๊ทธ์ธ์ ํ์ง ์์๋ ๋๋๋ก ๊ฐ์  ์๋ฃ)  

<br />

## ๐ฃ ๋ฐ์นญ ์ฑ๊ณผ
>  \* ๋ฐ์นญ์ผ์ : 2022๋ 01์ 22์ผ(ํ )  
>  \* ์ฑ๊ณผ ์ง๊ณ์ผ์ : 2022๋ 01์ 27์ผ(๋ชฉ) 15:00

### 1. ์ธ์คํ๊ทธ๋จ ๊ด๊ณ  ์งํ ์ฑ๊ณผ ์์ฝ
* 3์ผ๊ฐ ์ธ์คํ๊ทธ๋จ ๊ด๊ณ  ์งํ์ ํตํด ์ฝ 2๋ง๋ช์๊ฒ ๋๋ฌํ์์ผ๋ฉฐ ์ด ์ค, 182๋ช์ด ์ฌ์ดํธ์ ๋ฐฉ๋ฌธํ์์  
* ๋ฐฉ๋ฌธ์ ์ค ์ฝ 67%๋ ์ฌ์ฑ์ด์์  
* ๋ฐฉ๋ฌธ์ ์ค ์ฝ 91%๋ 13-17์ธ์ ์ฐ๋ น์ธต์ด์์  
![image](https://user-images.githubusercontent.com/87135478/150996596-5a31264d-0eef-4ad4-8d77-9170158c42ea.png)

<br />

### 2. ๊ฐ๋ฐ์ ์ปค๋ฎค๋ํฐ/ํฌ๋ผ ํ๋ณด ์ฑ๊ณผ ์์ฝ
* Okky, ๋ฝ๋ฟ ๊ฐ๋ฐ์ํฌ๋ผ์ ํตํด ์๋น์ค ํ๋ณด๋ฅผ ์งํํ์์
* ์ฌ์ฉ์, ์ธ์์ ๋ฑ์์ ์ธ์คํ๊ทธ๋จ ๊ด๊ณ ๋ฅผ ํตํ ์ฑ๊ณผ ์งํ๋ณด๋ค ๋์ ์ฑ๊ณผ๋ฅผ ์ป์์
![image](https://user-images.githubusercontent.com/87135478/150999046-b5c3e854-37fe-4dfa-b2c9-20cce48e975d.png)


<br />

### 3. ๋ฐ์นญ ์ดํ ๋์  ๋ฐ์ดํฐ ๋ถ์ (DataBase)
* ๊ฐ์ ํ์ ์ : 141๋ช
* ์์ฑ๋ ์๋๋ฐฑ(๊ฒ์๊ธ) ์ : ์ด 86๊ฐ 
* ํฐํธ๋ฆฐ ์๋๋ฐฑ ์ : 36๊ฐ (์ ์ฒด ๋๋น 41.8%)
* ์์ฑ๋ ์ฝ(๋๊ธ) ์ : ์ด 93๊ฐ
* ๊ฐ์ฅ ๋ง์ ์๋๋ฐฑ์ด ์์ฑ๋ ๊ณ ๋ฏผ ์นดํ๊ณ ๋ฆฌ Top3 : ๊ธฐํ(27๊ฐ), ๊ณต๋ถ(13๊ฐ), ์ง๋ก๊ณ ๋ฏผ(13๊ฐ)
* ๊ธฐ๊ฐ๋์ ์๋๋ฐฑ์ด ๋ง์ ํ์ : ์ด 6,995๋ (1์ธ ํ๊ท  49.6๋)

<br />

### 4. ๋ฐ์นญ ์ดํ ๋์  ๋ฐ์ดํฐ ๋ถ์ (Google Analytics)
* ์ฌ์ฉ์ : 741๋ช (First Visit ๊ธฐ์ค)
* Page View : 1๋ง
* ์ด๋ฒคํธ ์ : 1.5๋ง
* ๋ชจ๋ฐ์ผ / PC ๋น์จ : 6.5 / 3.5
* ์ฌ์ฉ์ ์ฌ๋ฐฉ๋ฌธ : 12.6%

<br />

### 2. ๊ฐ๋ฐ์ ์ปค๋ฎค๋ํฐ/ํฌ๋ผ ํ๋ณด ์ฑ๊ณผ ์์ฝ

- Okky, ๋ฝ๋ฟ ๊ฐ๋ฐ์ํฌ๋ผ์ ํตํด ์๋น์ค ํ๋ณด๋ฅผ ์งํํ์์
- ์ฌ์ฉ์, ์ธ์์ ๋ฑ์์ ์ธ์คํ๊ทธ๋จ ๊ด๊ณ ๋ฅผ ํตํ ์ฑ๊ณผ ์งํ๋ณด๋ค ๋์ ์ฑ๊ณผ๋ฅผ ์ป์์
  ![image](https://user-images.githubusercontent.com/87135478/150999046-b5c3e854-37fe-4dfa-b2c9-20cce48e975d.png)

<br />

### 3. ๋ฐ์นญ ์ดํ ๋์  ๋ฐ์ดํฐ ๋ถ์

- ๊ฐ์ ํ์ ์ : 105๋ช
- ์์ฑ๋ ์๋๋ฐฑ(๊ฒ์๊ธ) ์ : ์ด 46๊ฐ
- ํฐํธ๋ฆฐ ์๋๋ฐฑ ์ : 17๊ฐ (์ ์ฒด ๋๋น 37%)
- ์์ฑ๋ ์ฝ(๋๊ธ) ์ : ์ด 75๊ฐ
- ๊ฐ์ฅ ๋ง์ ์๋๋ฐฑ์ด ์์ฑ๋ ๊ณ ๋ฏผ ์นดํ๊ณ ๋ฆฌ Top2 : ๊ธฐํ(25๊ฐ), ๋์ธ๊ด๊ณ(11๊ฐ)
- ๊ธฐ๊ฐ๋์ ์๋๋ฐฑ์ด ๋ง์ ํ์ : ์ด 4,869๋ (1์ธ ํ๊ท  46.3๋)

<br />
<br />

