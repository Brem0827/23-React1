<!-- header 영역 -->
<p align="center">
 <img width="100px" src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">201930324 이현종</h2>
 <p align="center">📖 웹 애플리케이션 전공</p>
</p>

<h3 align="center">📚 Tech Stack 📚</h3>
<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>&nbsp 
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/Windows-0078D6?style=flat-square&logo=Windows&logoColor=white"/></a></br>
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"></a>&nbsp
  <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"></a>&nbsp
  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"></a><br/>
  <a href="https://github.com/soaple/first-met-react-practice-v18">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">
  </a>
</p>

[![Solved.ac 프로필](http://mazassumnida.wtf/api/v2/generate_badge?boj=guswhd284)](https://www.acmicpc.net/user/guswhd284)

<!-- main 영역 -->

## 강의 목록
1. [5주차](#5주차)➡️
2. [4주차](#4주차)➡️
3. [3주차](#3주차)➡️
4. [2주차](#2주차)➡️
5. [1주차](#1주차)➡️


---

## 5주차

* 03/30

<details><summary>📖 엘리먼트</summary>

* 엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들 입니다.
* 앨리먼트는 원래 웹사이트에 대한 모든 정보를 담고있는 객체인 DOM에서 사용하는 용어 입니다.
* 리액트 엘리먼트는 DOM 엘리먼트의 가상 표현
</details>

<details><summary>📖 엘리먼트의 생김새</summary>

* 리액트 엘리먼트는 자바스크립트 객체 형태로 존재합니다.
* 컴포넌트, 속성 및 내부 모든 Children을 포함하는 일반 JS 객체 입니다.
* 이 객체는 마음대로 변경할 수 없는 불변성을 가지고 있습니다.

<div class="colorscripter-code" style="color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#fafafa;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #e5e5e5"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#666;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div><div style="line-height:130%">6</div><div style="line-height:130%">7</div><div style="line-height:130%">8</div><div style="line-height:130%">9</div><div style="line-height:130%">10</div><div style="line-height:130%">11</div><div style="line-height:130%">12</div><div style="line-height:130%">13</div><div style="line-height:130%">14</div><div style="line-height:130%">15</div><div style="line-height:130%">16</div><div style="line-height:130%">17</div><div style="line-height:130%">18</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">function</span>&nbsp;Button(props){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">return</span>(</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>button&nbsp;className<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>{`bg<span style="color:#ff3399"></span><span style="color:#a71d5d">-</span>${props.color}`}<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>b<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.children}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>b<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>button<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;)</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">function</span>&nbsp;ConfirmDialog(props){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">return</span>(</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>div<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>p<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span>내용을&nbsp;확인하셨으면&nbsp;확인&nbsp;버튼을&nbsp;눌러주세요.<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>p<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>button&nbsp;color<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span><span style="color:#63a35c">"green"</span><span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span>확인<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>button<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>div<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;)</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div></div><div style="text-align:right;margin-top:-13px;margin-right:5px;font-size:9px;font-style:italic"><a href="http://colorscripter.com/info#e" target="_blank" style="color:#e5e5e5text-decoration:none">Colored by Color Scripter</a></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration:none;color:white"><span style="font-size:9px;word-break:normal;background-color:#e5e5e5;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>
</details>

<details><summary>📖 Root DOM node</summary>

* `<div id="root"></div>`

* `const element = <h1>안녕, 리액트!</h1>`
* `ReactDom.render(element, document.getElementById('root'));`

</details>

<details><summary>📖 렌더링된 엘리먼트 업데이트 하기 </summary>

* 다음 코느느 tick( )함수를 정의하고 있습니다.
* 이 함수는 현재 시간을 포함한 element를 생성해서 root div에 렌더링 해 줍니다.
* 그런데 라인 12를 보면 setInterval( ) 함수를 이용해서 위에서 정의한 tick( )를 1초에 한번씩 호출 하고 있습니다.
* 결국 1초에 한번씩 element를 새로 만들고 그것을 교체하는 것 입니다.
* 다음 코드를 실행하고, 크롬 개발자 도구에서 확인해보면 시간 부분만 업데이트 되는 것을 확인할 수 있습니다.

<div class="colorscripter-code" style="color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#fafafa;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #e5e5e5"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#666;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div><div style="line-height:130%">6</div><div style="line-height:130%">7</div><div style="line-height:130%">8</div><div style="line-height:130%">9</div><div style="line-height:130%">10</div><div style="line-height:130%">11</div><div style="line-height:130%">12</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">function</span>&nbsp;tick(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">const</span>&nbsp;element&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;(</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>div<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>h1<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span>안녕,&nbsp;리액트<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>h1<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>h2<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span>현재&nbsp;시간&nbsp;:&nbsp;{<span style="color:#a71d5d">new</span>&nbsp;<span style="color:#066de2">Date</span>().toLocaleTimeString()}<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>h2<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>div<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;);</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;ReactDOM.render(element,&nbsp;<span style="color:#066de2">document</span>.<span style="color:#066de2">getElementById</span>(<span style="color:#63a35c">'root'</span>));</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#066de2">setInterval</span>(tick,&nbsp;<span style="color:#0099cc">1000</span>);</div></div><div style="text-align:right;margin-top:-13px;margin-right:5px;font-size:9px;font-style:italic"><a href="http://colorscripter.com/info#e" target="_blank" style="color:#e5e5e5text-decoration:none">Colored by Color Scripter</a></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration:none;color:white"><span style="font-size:9px;word-break:normal;background-color:#e5e5e5;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>

</details>

<details><summary>📖 컴포넌트</summary>

* 리액트를 컴포넌트 기반이라고 부르는 것은 작은 컴포넌트들이 모여 하나의 컴포넌트를 구성하고, 컴포넌트들이 모여서 전체 페이지를 구성하기 때문입니다.
* 컴포넌트 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 줄일 수 있습니다.
* 컴포넌트는 자바스크립트 함수와 입력과 출력이 있다는 면에서는 유사합니다.
* 다만 입력과 출력은 입력은 Props가 담당하고, 출력은 리액트 엘리먼트의 형태로 출력 됩니다.
* 리액트 컴포넌트가 해주는 역할은 어떠한 속성을 입력으로 받아서 그에 맞는 리액트 엘리먼트를 생성하여 리턴해주는 것 입니다.
* 리액트 엘리먼트는 리액트 앱을 구성하는 가장 작은 빌딩 블록들
* 엘리먼트를 필요한 만큼 만들어 사용한다는 면에서는 객체 지향의 개념과 비슷합니다.
</details>

<details><summary>📖 props</summary>

* 리액트에서는 리액트 컴포넌트의 속성 이라는 뜻으로 사용 됩니다.
* 컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력 됩니다
* props는 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체 입니다.
* 리액트 컴포넌트에서는 props를 바꿀 수 없다. (읽기 전용)
</details>

<details><summary>📖 pure함수</summary>

* 입력 값을 변경하지 않으며, 같은 입력값에 대해서는 항상 같은 출력값을 낸다. (순수하다.)

<div class="colorscripter-code" style="color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#fafafa;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #e5e5e5"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#666;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#999999">//&nbsp;pure&nbsp;함수</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#999999">//&nbsp;input을&nbsp;변경하지&nbsp;않으며&nbsp;같은&nbsp;input에&nbsp;대해서&nbsp;항상&nbsp;같은&nbsp;output을&nbsp;리턴</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">function</span>&nbsp;sum(a,&nbsp;b){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#a71d5d">return</span>&nbsp;a&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">+</span>&nbsp;b;</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div></div><div style="text-align:right;margin-top:-13px;margin-right:5px;font-size:9px;font-style:italic"><a href="http://colorscripter.com/info#e" target="_blank" style="color:#e5e5e5text-decoration:none">Colored by Color Scripter</a></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration:none;color:white"><span style="font-size:9px;word-break:normal;background-color:#e5e5e5;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>
</details>

<details><summary>📖 Impure함수</summary>

* 입력으로 받은 파라미터의 값을 변경 (순수하지 않다.)
<div class="colorscripter-code" style="color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#fafafa;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #e5e5e5"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#666;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#999999">//&nbsp;Impure&nbsp;함수</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#999999">//&nbsp;input을&nbsp;변경함</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">function</span>&nbsp;withdraw(account,&nbsp;amount){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;account.total&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">-</span><span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;amount;</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div></div><div style="text-align:right;margin-top:-13px;margin-right:5px;font-size:9px;font-style:italic"><a href="http://colorscripter.com/info#e" target="_blank" style="color:#e5e5e5text-decoration:none">Colored by Color Scripter</a></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration:none;color:white"><span style="font-size:9px;word-break:normal;background-color:#e5e5e5;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>
</details>

<details><summary>📖 Props 사용법</summary>

* JSX를 사용할 경우 컴포넌트에 키-값 쌍 형태로 넣어 주면 됨
* 문자열 이외에 정수, 변수, 그리고 다른 컴포넌트 등이 들어갈 경우에는 중괄호를 사용해서 감싸주어야 함
* JSX를 사용하지 않는 경우에는 createElement() 함수의 두 번째 파라미터로 자바스크립트 객체를 넣어주면 됨

<div class="colorscripter-code" style="color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#fafafa;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #e5e5e5"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#666;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div><div style="line-height:130%">6</div><div style="line-height:130%">7</div><div style="line-height:130%">8</div><div style="line-height:130%">9</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">function</span>&nbsp;App(props){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#a71d5d">return</span>(</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>Profile</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#066de2">name</span><span style="color:#a71d5d">=</span><span style="color:#63a35c">"Brem0827"</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;introduction<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span><span style="color:#63a35c">"안녕하세요,&nbsp;Brem0827입니다."</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;viewCount<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span><span style="color:#0099cc">1500</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">/</span><span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;);</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div></div><div style="text-align:right;margin-top:-13px;margin-right:5px;font-size:9px;font-style:italic"><a href="http://colorscripter.com/info#e" target="_blank" style="color:#e5e5e5text-decoration:none">Colored by Color Scripter</a></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration:none;color:white"><span style="font-size:9px;word-break:normal;background-color:#e5e5e5;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>
</details>

<details><summary>📖 컴포넌트 만들기</summary>

  <details><summary>📚 컴포넌트의 종류</summary>
  * 클래스 컴포넌트와 함수 컴포넌트로 나뉨
  </details>
  <details><summary>📚 함수 컴포넌트</summary>
  * 함수 형태로 된 컴포넌트
  </details>
  <details><summary>📚 클래스 컴포넌트</summary>
  * ES6의 클래스를 사용하여 만들어진 컴포넌트
  </details>
  <details><summary>📚 컴포넌트 이름 짓기</summary>
  * 컴포넌트의 이름은 항상 대문자로 시작해야 함
  * 소문자로 시작할 경우 컴포넌트를 DOM 태그로 인식하기 때문
  </details>
  <details><summary>📚 컴포넌트 렌더링</summary>
  * 컴포넌트로부터 엘리먼트를 생성하여 이를 리액트 DOM에 전달
  </details>
</details>

---

## 4주차

* 03/23

📖 JSX란?
* 자바스크립트의 확장 문법

📖 JSX의 장점
* 코드가 간결 해진다.
* 가독성이 향상 된다.
* Injection Attack이라 불리는 해킹 방법을 방어함으로써 보안성 향상

📖 JSX 사용 방법
* 기본적으로 모든 자바스크립트 문법을 지원
* 자바스크립트에 XML과 HTML을 섞어서 사용
* JSX에서는 중괄호를 사용하면 무조건 자바스크립트 코드가 들어간다.

---

## 3주차

* 03/16
* JavaScript 라이브러리 설명
* DeepL
* 클래스 형 컴포넌트 & 함수 형 컴포넌트

📖 리액트의 장점

* 동기식 & 비 동기식
* 컴포넌트 기반의 구조
* 재사용성 & 의존성
* 활발한 지식 공유와 커뮤니티
* 리액트 네이티브

📖 리액트의 단점

* 방대한 학습량
* 높은 상태 관리 복잡도

---

## 2주차

* 03/09
* Github 와 Git 사용 방법 안내
* README 작성방법 안내
* 자바스크립트, ES6, Js자료형

---

## 1주차

* 03/02
* 오리엔테이션 및 강의 안내