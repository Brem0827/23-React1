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
1. [12주차](#12주차)➡️
2. [11주차](#11주차)➡️
3. [10주차](#10주차)➡️
4. [9주차](#9주차)➡️
5. [7주차](#7주차)➡️
6. [6주차](#6주차)➡️
7. [5주차](#5주차)➡️
8. [4주차](#4주차)➡️
9. [3주차](#3주차)➡️
10. [2주차](#2주차)➡️
11. [1주차](#1주차)➡️


---

## 12주차

<details><summary>📘 합성 vs .상속 </summary>

  <details><summary>📖 합성이란? </summary>

  * 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것
  * 다양하고 복잡한 컴포넌트를 효율적으로 개발할 수 있음

  <img src="./src/image/Composition.png"/>

  ```jsx

  function FancyBorder(props){
    return(
      <div className={'FancyBorder FancyBorder-' + props.color}>
      </div>
    );
  }

  ```

  ```jsx

  React.createElement(
    type,
    [props],
    [...children]
  )

  ```

  </details> 

  <details><summary>📖 Containment </summary>

  * 하위 컴포넌트를 포함하는 형태의 합성방법
  * 컴포넌트에 따라서는 어떤 자식 엘리먼트가 들어올지 미리 예상할 수 없는 경우가 있습니다.
  * 범용적인 '박스' 역할을 하는 Sidebar 혹은 Dialog와 같은 컴포넌트에서 특히 자주 볼 수 있습니다.
  * 리액트 컴포넌트의 props에 기본적으로 들어있는 children 속성을 사용
  * 여러 개의 children 집합이 필요한 경우 별도로 props를 각각 정의해서 사용

  ```jsx

  function FancyBorder(props){
    return(
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

  ```

  ```jsx

  function WelcomeDialog(props){
    return(
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          어서오세요
        </h1>
        <p className="Dialog-message">
          우리 사이트에 방문하신 것을 환영합니다.
        </p>
      </FancyBorder>
    );
  }

  ```

  ```jsx

  function SplitPane(props){
    return(
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left};
        </div>
        <div className="SplitPane-right">
          {props.right};
        </div>
      </div>
    );
  }

  function App(props){
    return(
      <SplirPane
        left={
          <Contacts />
        }
        right={
          <Chat />
        }
      />
    );
  }

  ```

  </details>

  <details><summary>📖 React.createElement() </summary>

  ```jsx

  const jsxElement = <h1 className="jsx">JSX Element</h1>

  ```

  ```jsx

  const reactElement = React.createElement(
    'h1', // tag
    {className : 'obj' }, // props
    'Element', // child element
  )

  ```

  ```jsx

  React.createElement(
    type,
    [props],
    [...children]
  )

  ```

  </details>

  <details><summary>📖 Specialization </summary>

  * 범용적인 개념을 구별되게 구체화하는것
  * 객체지향 언어에서는 상속을 특수화 하여 구현
  * 리액트에서는 합성을 사용하여 특수화를 구현
  * 범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 별도로 props를 각각 정의해서 사용

  ```jsx

  function Dialog(props){
    return(
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
      </FancyBorder>
    );
  }

  function WelcomeDialog(props){
    return(
      <Dialog
        title="어서오세요"
        message="우리 사이트에 방문하신 것을 환영합니다."
      />
    );
  }

  ```

  </details>

  <details><summary>📖 Containment와 Specialization를 함께 사용 </summary>

  * props.children을 통해 하위 컴포넌트를 포함시키기(Containment)
  * 별도의 props를 선언하여 구체화 시키기(Specialization)

  ```jsx

  function Dialog(props){
    return(
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
    )
  }

  function SignUpDialog(props){
    const [nickname, setNickname] = useState("");

    const handleChange = (event) => {
      setNickname(event.target.value);
    }

    const handleSignUp = () => {
      alert(`어서 오세요, ${nickname}님!`);
    }

    return(
      <Dialog>
        title="화성 탐사 프로그램"
        message="닉네임을 입력해 주세요."
        <input
          title={nickname}
          onChange={handleChange}
        />
        <button onClick={handleSignUp}>
          가입하기
        </button>
      </Dialog>
    );
  }

  ```

  </details>

  <details><summary>📖 상속 </summary>

  * 다른 컴포넌트로부터 상속받아서 새로운 컴포넌트를 만드는 것
  * 상속을 사용하여 컴포넌트를 만드는 것을 추천할 만한 사용 사례를 찾지 못함
  * 리액트에서는 상속이라는 방법을 사용하는 것 보다는 합성을 사용하는 것이 더 좋음

  </details>

</details>

<details><summary>📘 컨텍스트 </summary>

  <details><summary>📘 컨텍스트란 무엇인가? </summary>

  * 컴포넌트들 사이에서 데이터를 props를 통해 전달하는 것이 아닌 컴포넌트 트리를 통해 곧바로 데이터를 전달하는 방식
  * 어떤 컴포넌트든지 컨텍스트에 있는 데이터에 쉽게 접근할 수 있음

  <img src="./src/image/RootDOMNodeProps.png"/>
  <img src="./src/image/Context.png"/>

  </details>

  <details><summary>📘 언제 컨텍스트를 사용해야 하는가? </summary>

  * 여러 컴포넌트에서 계속해서 접근이 일어날 수 있는 데이터들이 있는 경우
  * Provider의 모든 하위 컴포넌트가 얼마나 깊이 위치해 있는지 관계없이 컨텍스트의 데이터를 읽을수 있음

  ```jsx

  function App(props){
    return <Toolbar theme="dark" />;
  }

  function Toolbar(props){
    // 이 Toolbar 컴포넌트는 ThemeButton에 theme를 넘겨주기 위해 'theme.props'을 가져가야 합니다.
    //  혅 ㅐ테마를 알아야 하는 모든 버튼에 대해서 props로 전달하는 것은 굉장히 비 효율적 입니다.
    return(
      <div>
        <ThemeButton theme={props.theme} />
      </div>
    );
  }

  function ThemeButton(props){
    return <Button theme={props.theme} />;
  }

  ```

  ```jsx

  // 컨텍스트는 데이터를 매번 컴포넌트를 통해 전달할 필요 없이 컴포넌트 트리로 곧바로 전달하게 해 줍니다.
  // 여기에서는 현재 테마를 위한 컨텍스트를 생성하며, 기본값은 'light'입니다.
  const ThemeContext = React.createContext("light");

  // Provider를 사용하여 하위 컴포넌트들에게 현재 테마 데이터를 전달합니다.
  // 모든 하위 컴포넌트들은 컴포넌트 트리 하단에 얼마나 깊이 있는지에 관계없이 데이터를 읽을 수 있습니다.
  // 여기에서는 현재 테마값으로 'dark'를 전달하고 있습니다.
  function App(props){
    return(
      <ThemeContext.Provider value="dark">
        <Toolbar />
      <ThemeContext.Provider>
    );
  }

  // 이제 중간에 위치한 컴포넌트는 테마 데이터를 하위 컴포넌트로 전달할 필요가 없습니다.
  function Toolbar(props){
    return(
      <div>
        <ThemedButton />
      </div>
    );
  }

  function ThemedButton(props){
    // 리액트는 가장 가까운 상위 테마 Provider를 찾아서 해당되는 값을 사용합니다.
    // 만약 해단되는 Provider가 없을 경우 기본값을 사용합니다.
    // 여기에서는 상위 Provider가 있기 때문에 현재 테마의 값은 'dark'가 됩니다.
    return(
      <ThemeContext.Consumer>
        {value => <Button theme={value} />}
      <ThemeContext.Consumer>
    );
  }

  ```

  </details>

  <details><summary>📘 컨텍스트 사용전 고려해야 할 점 </summary>

  * 컴포넌트와 컨텍스트가 연동되면 재 사용성이 떨어짐
  * 다른 레벨의 많은 컴포넌트가 데이터를 필요로 하는 경우가 아니라면, 기존 방식대로 props를 통해 데이터를 전달하는 것이 더 적합

  ```jsx

  // Page 컴포넌트는 PageLayout 컴포넌트를 렌더링
  <Page user={user} avatarSize={avatarSize} />

  // PageLayout 컴포넌트는 NavigationBar 컴포넌트를 렌더링
  <PageLayout user={user} avatarSize={avatarSize} />

  // NavigationBar 컴포넌트는 Link 컴포넌트를 렌더링
  <NavigationBar user={user} avatarSize={avatarSize} />

  // Link 컴포넌트는 Avatar 컴포넌트를 렌더링
  <Link href={user.permalink}>
    <Avatar user={user} avatarSize={avatarSize} />
  </Link>

  ```

  ```jsx

  function Page(props){
      const user = props.user;

      const userLink = (
        <Link href={user.permalink}>
          <Avatar user={user} size={props.avatarSize} />
        </Link>
      );

      // Page 컴포넌트는 PageLayout 컴포넌트를 렌더링
      // 이때 props로 userLink를 함께 전달함
      return <PageLayout userLink={userLink} />;
  }

  // PageLayout 컴포넌트는 NavigationBar 컴포넌트를 렌더링
  <PageLayout userLink={...} />

  // NavigationBar 컴포넌트눈 props로 전달받은 userLink element를 리턴
  <NavigationBar userLink={...} />

  ```

  ```jsx

  function Page(props){
    const user = props.user;

    const userLink = (
      <NavigationBar>
        <Link href={user.permalink}>
          <Avatar user={user} size={props.avatarSize} />
        </Link>
      </NavigationBar>
    );
    const content = <Feed user={user} />;

    return(
      <PageLayout
        topBar={topBar}
        content={content}
      />
    );
  }

  ```


  </details>

  <details><summary>📘 컨텍스트 API </summary>

  * React.create.Context()
  1. 컨텍스트를 생성하기 위한 함수
  2. 컨텍스트 객체를 리턴함
  3. 기본값으로 undefined를 넣으면 기본값이 사용되지 않음

  ```jsx

  const MyContext = React.createContext(기본값);

  ```

  * Context.Provider
  1. 모든 컨텍스트 객체는 Provider라는 컴포넌트를 갖고 있음
  2. Provider 컴포넌트로 하위 컴포넌트들을 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트의 데이터에 접근할 수 있게 됨
  3. Provider에는 value라는 prop이 있으며, 이것이 데이터로써 하위에 있는 컴포넌트들에게 전달됨
  4. 여러 개의 Provider 컴포넌트를 중첩시켜 사용할 수 있음

  ```jsx

  <MyContext.Provider value={/* some value */}>

  ```

  * Class.contextType
  1. Provider 하위에 있는 클래스 컴포넌트에서 컨텍스트의 데이터에 접근하기 위해 사용
  2. 단 하나의 컨택스트만을 구독할 수 있음

  ```jsx

  class MyClass extends React.Component {
    componentDidMount(){
      let value = this.context;
    }

    componentDidUpdate(){
      let value = this.context;
    }

    componentWillMount(){
      let value = this.context;
    }

    render(){
      let value = this.context;
    }
  }

  MyClass.contextType = MyContext;

  ```

  * Context.Consumer
  1. 컨텍스트의 데이터를 구독하는 컴포넌트
  2. 데이터를 소비한다는 뜻에서 consumer 컴포넌트라고도 부름
  3. consumer 컴포넌트는 컨텍스트 값의 변화를 지켜보다가 값이 변경되면 재렌더링됨
  4. 하나의 Provider 컴포넌트는 여러 개의 consumer 컴포넌트와 연결될 수 있음
  5. 상위 레벨에 매칭되는 Provider가 없을 경우 기본값 적용

  * Context.displayName
  1. 크롬의 리액트 개발자 도구에서 표시되는 컨텍스트 객체의 이름

  ```jsx

  <MyContext.Consumer>
    {value => /* 컨텍스트의 값에 따라서 컴포넌트들을 렌더링 */}
  </MyContext.Consumer>

  ```

  ```jsx

  const MyContext = React.createContext(/* some Value */);
  MyContext.displayName = 'MyDisplayName';


  <MyContext.Provider>

  <MyContext.Consumer>

  ```

  </details>

  <details><summary>📘 NOTE.Provider value에서 주의해야 할 사항 </summary>

  * 컨텍스트는 재렝더링 여부를 결정할 때 레퍼런스 정보를 사용하기 때문에 Provider의 부모 컴포넌트가 재렌더링되었을 경우, 의도치 않게 consumer 컴포넌트의 재렌더링이 일어날 수 있습니다.
  
  ```jsx

  function App(props){
    return(
      <MyContext.Provider value={{ something : 'something' }}>
        <Toolbar />
      </ MyContext.Provider>
    );
  }

  ```

  ```jsx

  function App(props){
    const [value, setValue] = useState({ something : "something" });
    return(
      <MyContext.Provider value={value}>
        <Toolbar />
      </ MyContext.Provider>
    );
  }

  ```

  </details>

  <details><summary>📘 function as a child </summary>

  * 컴포넌트의 자식으로 함수를 사용하는 방법입니다.
  * 리액트에서는 기본적으로 하위 컴포넌트들을 children이라는 prop으로 전달해 주는데 children으로 컴포넌트 대신 함수를 사용합니다.

  ```jsx

  //  children이라는 props를 직접 선언
  <Profile children={name => <p>이름 : {name}</p>}>

  // Profile 컴포넌트로 감싸서 children으로 만드는 방식
  <Profile>{name => <p>이름 : {name}</p>}</Profile>

  ```

  </details>

  <details><summary>📘 여러 개의 컨텍스트 사용 </summary>

  * Provider 컴포넌트와 Consumer 컴포넌트를 여러 개 중첩해서 사용하면 됨

  ```jsx

  const ThemeContext = React.createContext("light");

  const UserContext = React.createContext({
    name : 'Guest',
  });

  class App extends React.Component {
    render() {
      const { signedInUser, theme } = this.props;

      return(
        <ThemeContext.Provider value={theme}>
          <UserContext.Provider value={signedInUser}>
            <Layout />
          </UserContext.Provider>
        </ThemeContext.Provider>
      );
    }
  }

  function Layout(){
    return(
      <div>
        <Sidebar />
        <Content />
      </div>
    );
  }

  function Content(){
    return(
      <ThemeContext.Consumer>
        {theme => (
          <UserContext.Consumer>
            {user => (
              <ProfilePage user={user} theme={theme} />
            )}
          </UserContext.Consumer>  
        )}
      </ThemeContext.Consumer>
    );
  }

  ```

  </details>

  <details><summary>📘 useContext() </summary>

  * 함수 컴포넌트에서 컨텍스트를 쉽게 사용할 수 있게 해주는 훅
  * React.createContext() 함수 호출로 생성된 컨텍스트 객체를 인자로 받아서 현재 컨텍스트의 값을 리턴
  * 컨텍스트의 값이 변경되면 변경된 값과 함께 useContext() 훅을 사용하는 컴포넌트가 재렌더링됨

  ```jsx

  function MyComponent(props){
    const value = useContext(MyContext);

    return(
      ...
    )
  }

  ```

  ```jsx

  useContext(MyContext);

  useContext(MyContext.Consumer);
  useContext(MyContext.Provider);

  ```

  </details>

</details> 


---

## 11주차

* 05/11

<details><summary>📘 State 끌어올리기 </summary>

  <details><summary>📘 shared State </summary>

  * 하위 컴포넌트가 공통된 부모 컴포넌트의 state를 공유하여 사용하는 것

  </details> 

  <details><summary>🖊️ 하위 컴포넌트에서 state 공유하기 </summary>

  * 물의 끓음 여부를 알려주는 컴포넌트

  ```jsx

  function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
  }

  ```

  ```jsx

  function Calculator(props){
    const [ temperature, setTemperature ] = useState(" ");

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }

    return(
        <fieldset>
            <legend>섭씨 온도를 입력하세요 </ legend>
            <input
                value={temperature}
                onChange={handleChange} />
                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
        </fieldset>
    )
  }

  ```

  * 입력 컴포넌트 추출하기

  ```jsx

  const scaleNames = {
    c : '섭씨',
    f : '화씨'
  };

  function TemperatureInput(props){
    const [ temperature, setTemperature ] = useState(' ');

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }

    return(
        <fieldset>
            <legend>온도를 입력하세요 (단위 : {scaleNames[props.scale]}) </ legend>
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    )
  }

  ```

  ```jsx

  function Calculator(props){
    return(
        <div>
            <TemPeratureInput scale="c" />
            <TemPeratureInput scale="f" />
        </div>
    );
  }

  ```

  * 온도 변환 함수 작성하기

  ```jsx

  function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
  }

  function toFahrenheit(celsius){
    return (celsius * 5 / 9) - 32;
  }

  ```

  ```jsx

  function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return ' ';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  ```

  </details> 

  <details><summary>📘 state 끌어올리기 </summary>

  * 하위 컴포넌트의 state를 공통된 부모 컴포넌트로 끌어올려서 공유하는 방식

  ```jsx

  return (
    ...
    // 변경 전 <input value={temperature} onChange={handleChange} />
    <input value={props.temperature} onChange={handleChange} />
    ...
  )

  ```

  ```jsx

  const handleChange = (event) => {
    // 변경 전 setTemperature(event.target.value);
    props.onTemperatureChange(event.target.value);
  }

  ```

  ```jsx

  function TemperatureInput(props){
    const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  }

    return(
        <fieldset>
            <legend>온도를 입력하세요 (단위 : {scaleNames[props.scale]}) </ legend>
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    )
  }

  ```

  * Calculator 컴포넌트 변경하기

  ```jsx

  function Calculator(props){
    const [ temperature, setTemperature ] = useState(' ');
    const [ scale, setScale ] = useState('c');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    }

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature ;
    const fahrenheit = scale === 'f' ? tryConvert(temperature, toFahrenheit) : temperature ;

    return(
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput
                scale="f"
                temperature={celsius}
                onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict
                    celsius={parseFloat(celsius)} />
        </div>
    )
  }

  ```

  </details> 

  <details><summary>🖊️ 섭씨온도와 화씨온도 표시하기 </summary>


  ```jsx

  const scaleNames = {
    c : '섭씨',
    f : '화씨'
  };

  function TemperatureInput(props){
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    }

    return(
        <fieldset>
            <legend>온도를 입력하세요 (단위 : {scaleNames[props.scale]}) </ legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
  }

  export default TemperatureInput;

  ```

  ```jsx

  import React, { useState } from "react";
  import TemperatureInput from "./Temperatureinput";

  function BoilingVerdict(props){
      if(props.celsius >= 100){
          return <p>물이 끓습니다.</p>
      }
      return <p>물이 끓지 않습니다.</p>
  }

  function toCelsius(fahrenheit){
      return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius){
      return (celsius * 9) / 5 + 32;
  }

  function tryConvert(temperature, convert){
      const input = parseFloat(temperature);
      if(Number.isNaN(input)){
          return "";
      }

      const output = convert(input);
      const rounded = Math.round(output * 1000) / 1000;
      return rounded.toString();
  }

  function Calculator(props){
      const [temperature, setTemperature] = useState("");
      const [scale, setScale] = useState("c");
      
      const handleCelsiusChange = (temperature) => {
          setTemperature(temperature);
          setScale("c");
      };

      const handleFahrenheitChange = (temperature) => {
          setTemperature(temperature);
          setScale("f");
      };

      const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

      return (
          <div>
              <TemperatureInput
                  scale = "c"
                  temperature = {celsius}
                  onTemperatureChange = {handleCelsiusChange}
              />
              <TemperatureInput
                  scale="c"
                  temperature = {temperature}
                  onTemperatureChange = {handleFahrenheitChange}
              />
              <BoilingVerdict celsius={parseFloat(celsius)} />
          </div>
      );
  }

  export default Calculator;

  ```

  </details> 

</details>

---

## 10주차

* 05/04

<details><summary>📘 리스트와 키 </summary>

  <details><summary>📖 리스트 </summary>

  * 자바스크립트의 변수나 객체를 하나의 변수로 묶어놓은 것
  * 같은 아이템을 순서대로 모아놓은 것

  ```jsx

  const numbers = [1, 2, 3, 4, 5];

  ```

  </details>

  <details><summary>📖 키 </summary>

  * 각 객체나 아이템을 구분할 수 있는 고유한 값

  </details>

  <details><summary>📖 여러 개의 컴포넌트 렌더링 </summary>

  * 자바스크립트 배열의 map() 함수를 사용
  * 배열에 들어있는 각 변수에 어떤 처리를 한 뒤 결과(엘리먼트)를 배열로 만들어서 리턴
  * map() 함수 안에 있는 엘리먼트는 꼭 키가 필요함

  ```jsx

  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li>{number}</li>
    );

  ```

  ```jsx

  ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
  );

  ```

  ```jsx

  ReactDOM.render(
    <ul>
        <li>{1}</li>
        <li>{2}</li>
        <li>{3}</li>
        <li>{4}</li>
        <li>{5}</li>
    </ul>,
    document.getElementById('root')
  )

  ```

  </details>

  <details><summary>📖 기본적인 리스트 컴포넌트 </summary>

  ```jsx

  function NumberList(props){
    const { numbers } = props;

    const listItems = numbers.map((number) => 
        <li>{number}</li>
    );

    return(
        <ul>{listItems}</ul>
    );
  }

  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
  );

  ```

  </details>

  <details><summary>📖 리스트의 키 </summary>

  * 리스트에서 아이템을 구분하기 위한 고유한 문자열
  * 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용
  * 리액트에서는 키의 값은 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 됨

  </details>

  <details><summary>📚 숫자 값을 사용 </summary>

  * 배열에 중복된 숫자가 들어있다면 키값도 중복되기 때문에 고유해야 한다는 키값의 조건이 충족되지 않음

  ```jsx

  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => 
       <li key={number.toString()}>
           {number}
       </li>
    );

  ```

  </details>

  <details><summary>📚 id를 사용 </summary>

  * id의 의미 자체가 고유한 값이므로 키값으로 사용하기 적합
  * id가 있는 경우에는 보통 id값을 키값으로 사용
  
   ```jsx

  const todoItems = todos.map((todo) =>
      <li key={todo.id}>
          {todo.text}
      </li>
    );

  ```

  </details>

  <details><summary>📚 인덱스를 사용 </summary>

  * 배열에서 아이템 순서가 바뀔수 있는 경우에는 키값으로 인덱스를 사용하는 것을 권장하지 않음
  * 리액트에서는 키를 명시적으로 넣어 주지 않으면 기본적으로 이 인덱스 값을 키값으로 사용

  ```jsx

  const todoItems = todos.map((todo, index) =>
      <li key={index}>
          {todo.text}
      </li>
    );

  ```

  </details>

</details>  

<details><summary>📖 폼 </summary>

  <details><summary>✅ 폼이란? </summary>

  * 사용자로부터 입력을 받기 위해 사용하는 양식

  ```jsx

  <form>
    <label>
        이름 :
        <input type="text" name="name" />
    </label>
    <button type="submit">제출</button>
  </form>

  ```

  </details> 

  <details><summary>✅ 제어 컴포넌트 </summary>

  * 사용자가 입력한 값에 접근하고 제어할 수 있게 해 주는 컴포넌트
  * 값이 리액트의 통제르 받는 입력 폼 엘리먼트

  ```jsx

  function NameForm(props){
    const [value, setValue] = useState(' ');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 이름 : ' + value);
        event.preventDefault();
    }

    return(
        <form>
            <label>
                이름 :
                <input type="text" name="name" />
            </label>
            <button type="submit">제출</button>
        </form>
    )
  }

  ```

  ```jsx

  const handleChange = (event) => {
        setValue(event.target.value.toUpperCase());
    }

  ```

  </details> 

  <details><summary>🖊️ input type="text" 태그 </summary>

  * 한 줄로 텍스트를 입력받기 위한 HTML 태그
  * 리액트에서는 value라는 arrtibute로 입력된 값을 관리

  </details> 

  <details><summary>🖊️ textarea 태그 </summary>

  * 여러 줄에 걸쳐서 텍스트를 입력받기 위한 HTML 태그
  * 리액트에서는 value라는 arrtibute로 입력된 값을 관리

  ```jsx

  function RequestForm(props){
    const [value, setValue] = useState('요청 사항을 입력하세요');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 요청 사항 : ' + value);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                이름 :
                <textarea value={value} onChange={handleChange}  />
            </label>
            <button type="submit">제출</button>
        </form>
    )
  }

  ```

  </details> 

  <details><summary>🖊️ select 태그 </summary>

  * 드롭다운 목록을 보여주기 위한 HTML 태그
  * 여러 가지 옵션 중에서 하나 또는 여러 개를 선택할 수 있는 기능을 제공
  * 리액트에서는 value라는 arrtibute로 선택된 옵션의 값을 관리

  ```jsx

  function FruitSelect(props){
    const [value, setValue] = useState('grape');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('선택한 과일 : ' + value);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택 하세요 :
                <select value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )
  }

  ```

  </details> 

  <details><summary>🖊️ input type="file" 태그 </summary>

  * 디바이스의 저장 장치로부터 사용자가 하나 또는 여러 개의 파일을 선택할 수 있게 해 주는 HTML 태그
  * 서버로 파일을 업로드 하거나 자바스크립트의 File API를 사용해서 파일을 다룰 때 사용
  * 읽기 전용이기 때문에 리액트에서는 비제어 컴포넌트가 됨

  </details>

  <details><summary>🖊️ 여러 개의 입력 다루기 </summary>

  * 컴포넌트에 여러 개의 state를 선언하여 각각의 입력에 대해 사용하면 됨

  ```jsx

  function Reservation(props){
    const [haveBreakFast, sethaveBreakFast ] = useState(true);
    const [numberOfGuest, setnumberOfGuest ] = useState(2);

    const handleSubmit = (event) => {
        alert(`아침식사 여부 : ${haveBreakFast}, 방문객 수 ${numberOfGuest}`);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                아침식사 여부 :
                <input
                    type="checkbox"
                    checked={haveBreakFast}
                    onChange={(event) => {
                        sethaveBreakFast(event.target.checked);
                    }}/>
                </label>
                <br />
            <label>
                방문객 수 :
                <input
                    type="number"
                    checked={numberOfGuest}
                    onChange={(event) => {
                        setnumberOfGuest(event.target.checked);
                    }}/>
                </label>
                <br />
            <button type="submit">제출</button>
        </form>
    )
  }

  ```

  </details>

  <details><summary>🖊️ Input Null Value </summary>

  * value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶을 경우, 값에 undefined 또는 null을 넣으면 됨

  ```jsx

  ReactDOM.render(
    <input value="h1" /> , rootNode
  );

  setTimeout(
    function() {
        ReactDOM.render(
            <input value={null} /> , rootNode ); 
            }, 1000);

  ```

  </details>

</details>  

<details><summary>📘 state 끌어올리기 </summary>

  <details><summary>📘 shared State </summary>

  * 하위 컴포넌트가 공통된 부모 컴포넌트의 state를 공유하여 사용하는 것

  </details> 

  <details><summary>🖊️ 하위 컴포넌트에서 state 공유하기 </summary>

  * 물의 끓음 여부를 알려주는 컴포넌트

  ```jsx

  function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
  }

  ```

  ```jsx

  function Calculator(props){
    const [ temperature, setTemperature ] = useState(" ");

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }

    return(
        <fieldset>
            <legend>섭씨 온도를 입력하세요 </ legend>
            <input
                value={temperature}
                onChange={handleChange} />
                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
        </fieldset>
    )
  }

  ```

  * 입력 컴포넌트 추출하기

  ```jsx

  const scaleNames = {
    c : '섭씨',
    f : '화씨'
  };

  function TemperatureInput(props){
    const [ temperature, setTemperature ] = useState(' ');

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }

    return(
        <fieldset>
            <legend>온도를 입력하세요 (단위 : {scaleNames[props.scale]}) </ legend>
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    )
  }

  ```

  ```jsx

  function Calculator(props){
    return(
        <div>
            <TemPeratureInput scale="c" />
            <TemPeratureInput scale="f" />
        </div>
    );
  }

  ```

  * 온도 변환 함수 작성하기

  ```jsx

  function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
  }

  function toFahrenheit(celsius){
    return (celsius * 5 / 9) - 32;
  }

  ```

  ```jsx

  function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return ' ';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  ```

  </details> 

  <details><summary>📘 state 끌어올리기 </summary>

  * 하위 컴포넌트의 state를 공통된 부모 컴포넌트로 끌어올려서 공유하는 방식

  ```jsx

  return (
    ...
    // 변경 전 <input value={temperature} onChange={handleChange} />
    <input value={props.temperature} onChange={handleChange} />
    ...
  )

  ```

  ```jsx

  const handleChange = (event) => {
    // 변경 전 setTemperature(event.target.value);
    props.onTemperatureChange(event.target.value);
  }

  ```

  ```jsx

  function TemperatureInput(props){
    const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  }

    return(
        <fieldset>
            <legend>온도를 입력하세요 (단위 : {scaleNames[props.scale]}) </ legend>
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    )
  }

  ```

  * Calculator 컴포넌트 변경하기

  ```jsx

  function Calculator(props){
    const [ temperature, setTemperature ] = useState(' ');
    const [ scale, setScale ] = useState('c');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    }

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature ;
    const fahrenheit = scale === 'f' ? tryConvert(temperature, toFahrenheit) : temperature ;

    return(
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput
                scale="f"
                temperature={celsius}
                onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict
                    celsius={parseFloat(celsius)} />
        </div>
    )
  }

  ```

  </details> 

</details>  

---

## 9주차

* 04/27

<details><summary>📖 이벤트 핸들링 </summary>

  <details><summary>📚 이벤트란? </summary>

  * 사용자가 버튼을 클릭하는 등의 사건을 의미
  * DOM에서는 클릭 이벤트를 처리할 함수를 onclick을 통해서 전달합니다.

  </details>

   <details><summary>📘 DOM의 이벤트 </summary>

  * 이벤트의 이름을 모두 소문자로 표기
  * 이벤트를 처리할 함수를 문자열로 전달
    
  </details>

  <details><summary>📘 리액트의 이벤트 </summary>

  * 이벤트의 이름을 카멜 표기법으로 표기
  * 이벤트를 처리할 함수를 그대로 전달
    
  </details>

  <details><summary>📘 둘의 차이점 </summary>

  * 이벤트 이름이 onclick 에서 onClick으로 변경(Camel case)
  * 전달하려는 함수는 문자열에서 함수 그대로 전달
    
  </details>

  <details><summary>📘 이벤트 핸들러 </summary>

  * 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수
  * 이벤트 리스너 라고 부르기도 함

    <details><summary>📘 이벤트 리스너 코드 </summary>

      ```jsx

      import React from "react";

      class Toggle extends React.Component{
          constructor(props){
              super(props);

              this.state = { isToggleOn : true };

              this.handleClick = this.handleClick.bind(this);
          }

          handleClick(){
              this.setState(prevState = ({
                  isToggleOn: !prevState.isToggleOn
              }));
          }

          render(){
              return(
                  <button onClick={this.handleClick}>
                      {this.state.isToggleOn ? '켜짐' : '꺼짐'}
                  </button>
              );
          }
      }

      ```
      
    </details>

    <details><summary>📘 클래스 컴포넌트 </summary>

    * 클래스의 함수로 정의하고 생성자에서 바인딩해서 사용
    * 클래스 필드 문법도 사용가능
        
    </details>

    <details><summary>📘 함수 컴포넌트 </summary>

    * 함수 안에 함수로 정의하거나 arrow function을 사용하여 정의
        
    </details>
    
  </details>

  <details><summary>📚 bind를 하는 이유 </summary>

  * 기본적으로 클래스 함수들이 바운드(bound)가 되지 않기 때문

  </details>

  <details><summary>📚 클래스 필드 문법 코드 </summary>

    ```jsx

    import React from "react";

    class MyButton extends React.Component{
        handleClick = () => {
            console.log('this is : ', this);
        }

        render(){
            return(
                <button onClick={this.handleClick}>
                    클릭
                </button>
            )
        }
    }

    import React from "react";

    function Toggle(props){
        const [isToggleOn, setIsToggleOn] = useState(true);

        function handleClick(){
            setIsToggleOn((isToggleOn) => !isToggleOn);
        }

        const handleClick = () => {
            setIsToggleOn((isToggleOn) => !isToggleOn);
        }

        return(
            <button onClick={handleClick}>
                {isToggleOn ? "켜짐" : "꺼짐"}
            </button>
        );
    }

    ```

  </details>

  <details><summary>📚 카멜 표기법 </summary>

  * 사막에 있는 낙타의 등 모양을 보고 이름을 지은 것
  * 카멜 표기법은 첫 글자는 소문자로 시작하되, 중간에 나오는 새로운 단어의 첫 글자를 대문자로 사용한 방법입니다.
  * 글자의 크기가 변하는게 마치 나타의 등과 같다고 해서 카멜 표기법으로 이름이 지어졌습니다.

  </details>

  <details><summary>📚 Arguments 전달하기 </summary>

    <details><summary>📘 Arguments란? </summary>

    * 함수에 전달할 데이터
    * 파라미터 또는 매개변수 라고 부르기도 함
    * 함수를 사용할 때에는 아귀먼트 또는 인자 라고 부릅니다.
        
    </details>

    <details><summary>📘 클래스 컴포넌트 </summary>

    * arrow function을 사용하거나 Function.prototype.bind를 사용해서 전달
        
    </details>

    <details><summary>📘 클래스 컴포넌트 </summary>

    * 이벤트 핸들러 호출 시 원하는 순서대로 매개변수를 넣어서 사용
        
    </details>

    <details><summary>📘 MyButton 코드 </summary>

    ```jsx
    
    import React from "react";

    function MyButton(props){
        const handleDelete = (id, event)  =>  {
            console.log(id, event.target);
        };

        return(
            <button onClick={(event) => handleDelete(1, event)}>
                삭제하기
            </button>
        )
    }

    ```
        
    </details>

    <details><summary>📘 클릭 이벤트 처리하기 실습 코드  </summary>

      ```jsx

      import React from "react";

      function ConfirmButton(props){
          const [isConfirmed, setIsConfirmed] = useState(false);

          const handleConfirm = () => {
              setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
          };

          return(
              <button onClick={handleConfirm} disabled={isConfirmed}>
                  {isConfirmed ? "확인됨" : "확인하기"}
              </button>
          );
      }

      /*
      class ConfirmButton extends React.Component{
          constructor(props){
              super(props);

              this.state = {
                  isConfirmed : false,
              };

              this.handleConfirm = this.handleConfirm.bind(this);
          }

          handleConfirm(){
              this.setState((prevState) => ({
                  isConfirmed: !prevState.isConfirmed,
              }));
          }

          render(){
              return(
                  <button 
                  onClick={this.handleConfirm} 
                  disabled={this.state.isConfirmed} >
                      {this.state.isConfirmed ? "확인됨" : "확인하기"}
                  </button>
              );
          }
      }
      */

      export default ConfirmButton;

      ```
        
    </details>

  </details>

</details>

<details><summary>📚 조건부 렌더링 </summary><br />

  <details><summary>📘 조건부 렌더링 </summary>

  * 조건에 따라 렌더링의 결과가 달라지도록 하는 것

  </details>

  <details><summary>📝 조건부 렌더링 코드 </summary>

  ```jsx

  function UserGreeting(props){
    return <h1>다시 오셨군요!</h1>
  }

  function GuestGreeting(props){
    return <h1>회원가입을 해 주세요</h1>

  ```

  </details>

  <details><summary>📝 조건부 렌더링 코드 II </summary>

  ```jsx

  function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  ```

  </details>

  <details><summary>📘 JS의 Truthy와 Falsy </summary>

  * 보통의 프로그래밍 언어에서는 참, 거짓을 구분하기 위해 Boolean 형태의 자료형이 존재하고, 그 값은 true와 false 둘 중 하나가 됩니다.
  * 그리고 boolean과 자료형아 다른 값을 비교하게 되면 오류가 발생하게 됩니다.
  * JS에서 true는 아니지만 true로 여겨지는 값이 truthy입니다.
  * JS에서 false는 아니지만 false로 여겨지는 값이 falsy입니다.

    <details><summary>📘 Truthy </summary>

      * true
      * {} (empty object)
      * [] (empty array)
      * 42 (number, not zero)
      * "0", "false" (string, not empty)

    </details>

    <details><summary>📘 Falsy </summary>

      * false
      * 0, -0 (zero, minus zero)
      * 0n (BigInt zero)
      * '', "", `` (empty string)
      * null
      * undefined
      * NaN (not a Number)

    </details>

  </details>

  <details><summary>📘 엘리먼트 변수 </summary>

  * 리액트 엘리먼트를 변수처럼 지정해서 사용하는 방법

  </details>

  <details><summary>📝 LoginButton 코드 </summary>

    ```jsx

      function LoginButton(props){
        return(
            <button onClick={props.onClick}>
                로그인
            </button>
        );
    }

    function LogoutButton(props){
        return(
            <button onClick={props.onClick}>
                로그아웃
            </button>
        );
    }

    ```

  </details>

  <details><summary>📝 LoginControl 코드 </summary>

    ```jsx

    import React from "react";

    function LoginControl(props){
        const [isLoggedIn, setIsLoggedIn] = useState(false);

        const handleLoginClick = () => {
            setIsLoggedIn(true);
        }

        const handleLogoutClick = () => {
            setIsLoggedIn(false);
        }

        let button;
        if(isLoggedIn){
            button = <LogoutButton onClick={handleLoginClick} />;
        }else{
            button = <LoginButton onClick={handleLoginClick} />;
        }

        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }

    ```

  </details>

  <details><summary>📘 인라인 조건 </summary>

  * 조건문을 코드 안에 집어 넣는 것

    <details><summary>📝 MailBox 코드 </summary>

      ```jsx

      import React from "react";

      function MailBox(props){
          const unreadMessages = props.unreadMessages;

          return(
              <div>
                  <h1>안녕하세요</h1>
                  {unreadMessages.length > 0 &&
                      <h2>
                          현재 {unreadMessages.length}개의 읽지 않은 메세지가 있습니다.
                      </h2>
                  }
              </div>
          );
      }
      
      ```

    </details>

    <details><summary>📝 LoginControl 코드 </summary>

      ```jsx

      import React from "react";

      function LoginControl(props){
          const [isLoggedIn, setIsLoggedIn] = useState(false);

          const handleLoginClick = () => {
              setIsLoggedIn(true);
          }

          const handleLogoutClick = () => {
              setIsLoggedIn(false);
          }

          return(
              <div>
                  <Greeting isLoggedIn={isLoggedIn} />
                  {isLoggedIn
                      ? <LogoutButton onClick={handleLoginClick} />
                      : <LoginButton onClick={handleLoginClick} />
                  }
              </div>
          )
      }
      
      ```

    </details>

    <details><summary>📘 인라인 IF </summary>

    * if문을 필요한 곳에 직접 집어넣어서 사용하는 방법
    * 논리 연산자 &&를 사용 (AND연산)
    * 앞에 나오는 조건문이 true일 경우에만 뒤에 나오는 엘리먼트를 렌더링

    </details>

    <details><summary>📘 인라인 IF~Else </summary>

    * if - Else문을 필요한 곳에 직접 집어넣어서 사용하는 방법
    * 삼항 연산자 ?를 사용
    * 앞에 나오는 조건문이 true이면 첫 번째 항목을 리턴, false면 두 번째 항목을 리턴
    * 조건에 따라 각기 다른 엘리먼트를 렌더링 하고 싶을 때 사용

    </details>

  </details>

  <details><summary>📘 컴포넌트 렌더링 막기 </summary>

  * 리액트에서는 null을 리턴하면 렌더링 되지 않음 
  * 특정 컴포넌트를 렌더링 하고 싶지 않을 경우 null을 리턴

    <details><summary>📝 WarningBanner 코드 </summary>

     ```jsx

    import React from "react";

    function WarningBanner(props){
        if(!props.warning){
            return null;
        }

        return(
            <div>경고!</div>
        );
    }

     ```

    </details>

    <details><summary>📝 MainPage 코드 </summary>

     ```jsx

    import React from "react";

    function MainPage(props){
        const [showWarning, setShowWarning] = useState(false);

        const handleToggleClick = () => {
            setShowWarning(prevShowWarning => !prevShowWarning);
        }

        return(
            <div>
                <WarningBanner warning={showWarning} />
                <button onClick={handleToggleClick}>
                    {showWarning ? '감추기' : '보이기'}
                </button>
            </div>
        )
    }

     ```

    </details>

  </details>

  <details><summary>📝 Toolbar 코드 </summary>

      ```jsx

      import React from "react";

      const styles = {
          wrapper : {
              padding : 16,
              display : "flex",
              flexDirection : "row",
              borderBottom : "1px solid grey",
          },
          greeting: {
              marginRight : 8,
          },
      };

      function Toolbar(props){
          const { isLoggedIn, onClickLogin, onClickLogout } = props;

          return(
              <div style={styles.wrapper}>
                  {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

                  {isLoggedIn ? (
                      <button onClick={onClickLogout}>로그아웃</button>
                  ) : (
                      <button onClick={onClickLogin}>로그인</button>
                  )}
              </div>
          );
      }

      export default Toolbar;

      ```

  </details>

  <details><summary>📝 LandingPage 코드 </summary>

      ```jsx

      import React from "react";
      import Toolbar from "./Toolbar";

      function LandingPage(props){
          const [isLoggedIn, setIsLoggedIn] = useState(false);

          const onClickLogin = () => {
              setIsLoggedIn(true);
          };

          const onClickLogout = () => {
              setIsLoggedIn(false);
          };

          return (
              <div>
                  <Toolbar 
                      isLoggedIn={isLoggedIn}
                      onClickLogin={onClickLogin}
                      onClickLogout={onClickLogout}
                  />
                  <div style={{padding : 16}}>소플과 함께하는 리액트 공부!</div>
              </div>
          );
      }

      export default LandingPage;

      ```

  </details>

</details>

<details><summary>📘 리스트와 키 </summary>

  <details><summary>📖 리스트 </summary>

  * 같은 아이템을 순서대로 모아놓은 것

  </details>

  <details><summary>📖 키 </summary>

  * 각 객체나 아이템을 구분할 수 있는 고유한 값

  </details>

  <details><summary>📖 여러 개의 컴포넌트 렌더링 </summary>

  * 자바스크립트 배열의 map() 함수를 사용
  * 배열에 들어있는 각 변수에 어떤 처리를 한 뒤 결과(엘리먼트)를 배열로 만들어서 리턴
  * map() 함수 안에 있는 엘리먼트는 꼭 키가 필요함

  </details>

  <details><summary>📖 리스트의 키 </summary>

  * 리스트에서 아이템을 구분하기 위한 고유한 문자열
  * 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용
  * 리액트에서는 키의 값은 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 됨

  </details>

</details>  

---

## 7주차

* 04/13

<details><summary>📖 hook </summary>

* 원래 존재하는 어떤 기능에 마치 갈고리를 거는 것처럼 끼어 들어가 같이 수행 되는 것
* 리액트의 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 것
* 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 훅입니다.
* 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현 할 수 있게 되었습니다.
* 훅의 이름은 모두 use로 시작합니다.

  <details><summary>📚 useState </summary>

  * 이름에서 알 수 있듯이 state를 사용하기 위한 훅입니다.
  * 함수 컴포넌트에서는 기본적으로 state라는 것을 제공하지 않기 때문에 클래스 컴포넌트 처럼 state를 사용하지 않고 싶으면 useState() 훅을 사용해야 합니다.
  * 변수 각각에 대하여 set 함수가 따로 존재합니다.
  * 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미합니다.

  * const [변수명, set함수명] = useState(초깃값);

  ```jsx

  import React, { useState } from "react";

  function Counter(props){
      const [count, setCount] = useState(0);

      return(
          <div>
              <p>총 {count}번 클릭했습니다.</p>
              <button onClick={() => setCount(count + 1)}> 클릭 </button>
          </div>
      );
  }

  export default Counter;

  ```

  </details>

  <details><summary>📚 useEffect </summary>

  * useEffect()는 사이드 이펙트를 수행하기 위한 훅입니다.
  * 사이드 이펙트는 사전적으로 부작용 이라는 뜻을 갖고 있습니다.
  * 리액트에서 말하는 사이드 이펙트는 그냥 효과 혹은 영향을 뜻하는 이펙트에 가깝습니다.

  * useEffect() 는 리액트의 함수 컴포넌트에서 사이드 이펙트를 실행할 수 있도록 해주는 훅 입니다.
  * useEffect()는 클래스 컴포넌트에서 제공하는 생명주기 함수인 componentDidMount(), componentDidUpdate() 그리고 componentWillUnmount()와 동일한 기능을 하나로 통합해서 제공합니다.

  * useEffect(이펙트 함수, 의존성 배열);

  * 첫 번째 파라미터는 이펙트 함수가 들어가고, 두 번째 파라미터로는 의존성 배열이 들어갑니다.
  * 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행됩니다.
  * 이펙트 함수는 처음 컴포넌트가 렌더링 된 이후, 그리고 재 렌더링 이후에 실행됩니다.
  * 만약 이펙트 함수가 마운트와 언마운트 될 때만 한 번씩 실행되게 하고 싶으면 빈 배열을 넣으면 됩니다. 이 경우 props나 state에 있는 어떤 값에도 의존하지 않기 때문에 여러 번 실행되지 않습니다.

  ```jsx

  import React, { useState, useEffect } from "react";

  function Counter(props){
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status){
        setIsOnline(status.isOnline);
    }

    useEffect( () => {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    });

    if (isOnline === null){
        return "대기 중...";
    }

    return isOnline ? "온라인" : "오프라인";
  }

  export default Counter;

  ```

  </details>

  <details><summary>📚 useMemo </summary>

  * useMemo() 훅은 Memoized value를 리턴하는 훅입니다.
  * 파라미터로 Memoized value를 생성하는 create 함수와 의존성 배열을 받습니다.
  * useMemo()로 전달된 함수는 렌더링이 일어나는 동안 실행된다.
  * 따라서 렌더링이 일어나는 동안 실행되어서는 안될 작업을 넣으면 안됩니다.

  ```jsx

  const memoizedValue = useMemo(
    () => {
      return computeExpensiveValue(의존성 변수1, 의존성 변수2);
    },
    [의존성 변수1, 의존성 변수2]
  );

  ```

  ```jsx

  const memoizedValue = useMemo(
    () => computeExpensiveValue(a, b);
  )

  ```

  </details>

  <details><summary>📚 esline-plugin-react-hooks 패키지 </summary>

  * useMemo() 에서 의존성 배열에 넣은 변수들은 create 함수의 파라미터로 전달 되지 않습니다.
  * 하지만 useMemo()의 원래의 의미가 의존성 배열에 있는 변수 중 하나라도 변하면 create 함수를 다시 호출하는 것이기 때문에 create 함수에서 참조하는 모든 변수를 의존성 배열에 넣어 주는 것이 맞습니다.

  * https://www.npmjs.com/package/eslint-plugin-react-hooks

  </details>

   <details><summary>📚 useCallback </summary>

  * useCallback() 훅은 이전에 나온 useMemo() 훅과 유사한 역할을 합니다.
  * 한 가지 차이점은 값이 아닌 함수를 반환한다는 점 입니다.

  ```jsx

  const memoizedCallback = useCallback(
    () => {
      doSomething(의존성 변수1, 의존성 변수2);
    }.
    [의존성 변수1, 의존성 변수2]
  );

  ```

  </details>

  <details><summary>📚 메모이제이션 </summary>

  * useMemo()와 useCallback() 훅에서는 메모이제이션이라는 개념이 나옵니다.
  * 컴퓨터 분야에서 메모이제이션은 최적화를 위해 사용하는 개념입니다.
  * 비용이 높은( 연산량이 많이 드는 )함수의 호출 결과를 저장해 두었다가, 같은 입력값으로 함수를 호출하면 새로 함수를 호출하지 않고 이전에 저장해두었던 호출 결과를 바로 반환하는 것 입니다.
  * 이렇게 하면 결과적으로 함수 호출 결과를 받기까지 걸리는 시간도 짧아질뿐더러 불필요한 중복 연산도 하지 않기 때문에 컴퓨터의 자원을 적게 소모합니다.

  </details>

  <details><summary>📚 useRef </summary>

  * useRef() 훅은 레퍼런스를 사용하기 위한 훅입니다.
  * 리액트에서 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미합니다.
  * useRef() 훅은 바로 레퍼런스 객체를 반환합니다.
  * useRef()훅은 변경 가능한.current 라는 속성을 가진 하나의 상자입니다.
  * useRef()훅은 매번 렌더링 될 때마다 항상 같은 ref 객체를 반환합니다.

  * const refContainer = useRef(초깃값);

  </details>

  <details><summary>📚 callback ref </summary>

  * DOM node의 변화를 알기위한 가장 기초적인 방법으로 callback ref를 사용하는 것이 있습니다.
  * 리액트는 ref가 다른 node에 연결될 때 마다 콜백을 호출하게 됩니다.

  ```jsx

  function MeasureExample(props){
    const [height, setHeight] = useState(0);

    const measuredRef = useCallback(node => {
      if(node !== null){
        setHeight(node.getBoundingClientRect().height);
      }
    }, []);

    return(
      <>
        <h1 ref={measuredRef}>안녕, 리액트</h1>
        <h2>위 헤더의 높이는 {Math.round(height)}px 입니다.</h2>
      </>
    )
  }

  ```

  </details>

  <details><summary>📚 훅의 규칙 </summary>

  * 첫 번째 규칙은 훅은 무조건 최상위 레벨에서만 호출해야 합니다.
  * 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안 된다. 라는 뜻 입니다.
  * 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 매번 같은 순서로 호출 되어야 합니다.

  * 두 번째 규칙은 리액트 함수 컴포넌트에서만 훅을 호출해야 한다는 것 입니다.
  * 훅은 리액트 함수 컴포넌트에서 호출하거나 직접 만든 커스텀 훅에서만 호출할 수 있습니다.

  </details>

  <details><summary>📚 나만의 훅 만들기 </summary>

  * 리액트에서 기본적으로 제공하는 훅들 이외에 추가적으로 필요한 기능이 있다면 직접 훅을 만들어서 사용할 수 있습니다. 이것을 커스텀 훅이라고 부르는데 커스텀 훅을 만드는 이유는 여러 컴포넌트에서 반복적으로 사용되는 로직을 훅으로 만들어 재사용하기 위함입니다.

  * 커스텀 훅은 무언가 특별한 것이 아니라 이름이 use로 시작하고 내부에서 다른 훅을 호출하는 하나의 자바스크립트 함수입니다.
  
  * 커스텀 훅은 리액트 기능이 아닌 훅의 디자인에서 자연스럽게 따르는 규칙입니다.
  * 만약 이름이 use로 시작하지 않는다면 특정 함수의 내부에서 훅을 호출하는지 알 수 없기 때문에 훅의 일반 규칙 위반 여부를 자동으로 확인할 수 없습니다.

  </details>

  <details><summary>📚 훅들 사이에서 데이터를 공유하는 방법 </summary>

  ```jsx

  const userList = [
    { id: 1, name: 'Inje' },
    { id: 2, name: 'Inje' },
    { id: 3, name: 'Inje' },
  ];

  function ChatUserSelector(props){
    const [userId, setUserId] = useState(1);
    const isUserOnline = useUserStatus(userId);

    return(
      <>
        <Circle color={isUserOnline ? 'green' : 'red'} />
        <select
          value={userId}
          onchange={event => setUserId(Number(event.target.value))}
         >
         {userList.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
         </option>
         ))}
        </select>
      </>
    );
  }

  ```

  </details>

</details>

---

## 6주차

* 04/06

<details><summary>📖 컴포넌트 추출</summary>

* 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것
* 기능 단위로 구분하는 것이 좋고, 나중에 곧바로 재사용이 가능한 형태로 추출하는 것이 좋음
* 복잡한 컴포넌트를 쪼개어 여러 개의 컴포넌트로 나눌 수도 있습니다.
* 큰 컴포넌트에서 일부를 추출하여 새로운 컴포넌트를 만드는 것 입니다.

</details>


<details><summary>📖 [5장] 댓글 컴포넌트 만들기</summary>

<div class="colorscripter-code" style="color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#fafafa;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #e5e5e5"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#666;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div><div style="line-height:130%">6</div><div style="line-height:130%">7</div><div style="line-height:130%">8</div><div style="line-height:130%">9</div><div style="line-height:130%">10</div><div style="line-height:130%">11</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">import</span>&nbsp;React&nbsp;<span style="color:#a71d5d">from</span>&nbsp;<span style="color:#63a35c">"react"</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">function</span>&nbsp;Comment(props){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#a71d5d">return</span>(</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>div<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>h1<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span>제가&nbsp;만든&nbsp;첫&nbsp;컴포넌트&nbsp;입니다.<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>h1<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>div<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;)</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">export</span>&nbsp;<span style="color:#a71d5d">default</span>&nbsp;Comment;</div></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration:none;color:white"><span style="font-size:9px;word-break:normal;background-color:#e5e5e5;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>

<div class="colorscripter-code" style="color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#fafafa;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #e5e5e5"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#666;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div><div style="line-height:130%">6</div><div style="line-height:130%">7</div><div style="line-height:130%">8</div><div style="line-height:130%">9</div><div style="line-height:130%">10</div><div style="line-height:130%">11</div><div style="line-height:130%">12</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">import</span>&nbsp;React&nbsp;<span style="color:#a71d5d">from</span>&nbsp;<span style="color:#63a35c">"react"</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">import</span>&nbsp;Comment&nbsp;<span style="color:#a71d5d">from</span>&nbsp;<span style="color:#63a35c">"./Comment"</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">function</span>&nbsp;CommentList(props){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">return</span>(</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>div<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>Comment&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">/</span><span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>div<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;);</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">export</span>&nbsp;<span style="color:#a71d5d">default</span>&nbsp;CommentList;</div></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration:none;color:white"><span style="font-size:9px;word-break:normal;background-color:#e5e5e5;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>

<div class="colorscripter-code" style="color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#fafafa;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #e5e5e5"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#666;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div><div style="line-height:130%">6</div><div style="line-height:130%">7</div><div style="line-height:130%">8</div><div style="line-height:130%">9</div><div style="line-height:130%">10</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;...&nbsp;생략&nbsp;...</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">import</span>&nbsp;CommentList&nbsp;<span style="color:#a71d5d">from</span>&nbsp;<span style="color:#63a35c">'./chapter05/js/CommentList'</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">ReactDOM.render(</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>React.StricMode<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>CommentList&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">/</span><span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>&nbsp;React.StricMode<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#066de2">document</span>.<span style="color:#066de2">getElementById</span>(&nbsp;<span style="color:#63a35c">'root'</span>&nbsp;);</div><div style="padding:0 6px; white-space:pre; line-height:130%">);</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div></div><div style="text-align:right;margin-top:-13px;margin-right:5px;font-size:9px;font-style:italic"><a href="http://colorscripter.com/info#e" target="_blank" style="color:#e5e5e5text-decoration:none">Colored by Color Scripter</a></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration:none;color:white"><span style="font-size:9px;word-break:normal;background-color:#e5e5e5;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>

<div class="colorscripter-code" style="color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#fafafa;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #e5e5e5"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#666;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div><div style="line-height:130%">6</div><div style="line-height:130%">7</div><div style="line-height:130%">8</div><div style="line-height:130%">9</div><div style="line-height:130%">10</div><div style="line-height:130%">11</div><div style="line-height:130%">12</div><div style="line-height:130%">13</div><div style="line-height:130%">14</div><div style="line-height:130%">15</div><div style="line-height:130%">16</div><div style="line-height:130%">17</div><div style="line-height:130%">18</div><div style="line-height:130%">19</div><div style="line-height:130%">20</div><div style="line-height:130%">21</div><div style="line-height:130%">22</div><div style="line-height:130%">23</div><div style="line-height:130%">24</div><div style="line-height:130%">25</div><div style="line-height:130%">26</div><div style="line-height:130%">27</div><div style="line-height:130%">28</div><div style="line-height:130%">29</div><div style="line-height:130%">30</div><div style="line-height:130%">31</div><div style="line-height:130%">32</div><div style="line-height:130%">33</div><div style="line-height:130%">34</div><div style="line-height:130%">35</div><div style="line-height:130%">36</div><div style="line-height:130%">37</div><div style="line-height:130%">38</div><div style="line-height:130%">39</div><div style="line-height:130%">40</div><div style="line-height:130%">41</div><div style="line-height:130%">42</div><div style="line-height:130%">43</div><div style="line-height:130%">44</div><div style="line-height:130%">45</div><div style="line-height:130%">46</div><div style="line-height:130%">47</div><div style="line-height:130%">48</div><div style="line-height:130%">49</div><div style="line-height:130%">50</div><div style="line-height:130%">51</div><div style="line-height:130%">52</div><div style="line-height:130%">53</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">import</span>&nbsp;React&nbsp;<span style="color:#a71d5d">from</span>&nbsp;<span style="color:#63a35c">"react"</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">const</span>&nbsp;styles&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;wrapper:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;margin:&nbsp;<span style="color:#0099cc">8</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding:&nbsp;<span style="color:#0099cc">8</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display:&nbsp;<span style="color:#63a35c">"flex"</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;flexDirection:&nbsp;<span style="color:#63a35c">"row"</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border:&nbsp;<span style="color:#63a35c">"1px&nbsp;solid&nbsp;grey"</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;borderRadius:&nbsp;<span style="color:#0099cc">16</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;imageContainer:&nbsp;{},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;image:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;<span style="color:#0099cc">50</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height:&nbsp;<span style="color:#0099cc">50</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;borderRadius:&nbsp;<span style="color:#0099cc">25</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;contentContainer:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;marginLeft:&nbsp;<span style="color:#0099cc">8</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display:&nbsp;<span style="color:#63a35c">"flex"</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;flexDirection:&nbsp;<span style="color:#63a35c">"column"</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;justifyContent:&nbsp;<span style="color:#63a35c">"center"</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;nameText:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color:&nbsp;<span style="color:#63a35c">"black"</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontSize:&nbsp;<span style="color:#0099cc">16</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontWeight:&nbsp;<span style="color:#63a35c">"bold"</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;commentText:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color:&nbsp;<span style="color:#63a35c">"black"</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontSize:&nbsp;<span style="color:#0099cc">16</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">};</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">function</span>&nbsp;Comment(props)&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">return</span>&nbsp;(</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>div&nbsp;style<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>{styles.wrapper}<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>div&nbsp;style<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>{styles.imageContainer}<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>img</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span><span style="color:#63a35c">"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>{styles.image}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">/</span><span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>div<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>div&nbsp;style<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>{styles.contentContainer}<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>span&nbsp;style<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>{styles.nameText}<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span>{props.<span style="color:#066de2">name</span>}<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>span<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>span&nbsp;style<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>{styles.commentText}<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span>{props.comment}<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>span<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>div<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>div<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;);</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">export</span>&nbsp;<span style="color:#a71d5d">default</span>&nbsp;Comment;</div></div><div style="text-align:right;margin-top:-13px;margin-right:5px;font-size:9px;font-style:italic"><a href="http://colorscripter.com/info#e" target="_blank" style="color:#e5e5e5text-decoration:none">Colored by Color Scripter</a></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration:none;color:white"><span style="font-size:9px;word-break:normal;background-color:#e5e5e5;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>

<div class="colorscripter-code" style="color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#fafafa;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #e5e5e5"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#666;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div><div style="line-height:130%">6</div><div style="line-height:130%">7</div><div style="line-height:130%">8</div><div style="line-height:130%">9</div><div style="line-height:130%">10</div><div style="line-height:130%">11</div><div style="line-height:130%">12</div><div style="line-height:130%">13</div><div style="line-height:130%">14</div><div style="line-height:130%">15</div><div style="line-height:130%">16</div><div style="line-height:130%">17</div><div style="line-height:130%">18</div><div style="line-height:130%">19</div><div style="line-height:130%">20</div><div style="line-height:130%">21</div><div style="line-height:130%">22</div><div style="line-height:130%">23</div><div style="line-height:130%">24</div><div style="line-height:130%">25</div><div style="line-height:130%">26</div><div style="line-height:130%">27</div><div style="line-height:130%">28</div><div style="line-height:130%">29</div><div style="line-height:130%">30</div><div style="line-height:130%">31</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">import</span>&nbsp;React&nbsp;<span style="color:#a71d5d">from</span>&nbsp;<span style="color:#63a35c">"react"</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">import</span>&nbsp;Comment&nbsp;<span style="color:#a71d5d">from</span>&nbsp;<span style="color:#63a35c">"./Comment"</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">const</span>&nbsp;comments&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;[</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#066de2">name</span>:&nbsp;<span style="color:#63a35c">"이인제"</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;comment:&nbsp;<span style="color:#63a35c">"안녕하세요,&nbsp;소플입니다."</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#066de2">name</span>:&nbsp;<span style="color:#63a35c">"유재석"</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;comment:&nbsp;<span style="color:#63a35c">"리액트&nbsp;재미있어요~!"</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#066de2">name</span>:&nbsp;<span style="color:#63a35c">"강민경"</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;comment:&nbsp;<span style="color:#63a35c">"저도&nbsp;리액트&nbsp;배워보고&nbsp;싶어요!!"</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">];</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">function</span>&nbsp;CommentList(props)&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">return</span>&nbsp;(</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>div<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{comments.map((comment)&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span><span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">return</span>&nbsp;(</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>Comment&nbsp;<span style="color:#066de2">name</span><span style="color:#a71d5d">=</span>{comment.<span style="color:#066de2">name</span>}&nbsp;comment<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>{comment.comment}&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">/</span><span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>div<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;);</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">export</span>&nbsp;<span style="color:#a71d5d">default</span>&nbsp;CommentList;</div></div><div style="text-align:right;margin-top:-13px;margin-right:5px;font-size:9px;font-style:italic"><a href="http://colorscripter.com/info#e" target="_blank" style="color:#e5e5e5text-decoration:none">Colored by Color Scripter</a></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration:none;color:white"><span style="font-size:9px;word-break:normal;background-color:#e5e5e5;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>

</details>

<details><summary>📖 State란? </summary>

* 리액트에서의 state는 리액트 컴포넌트의 상태를 의미합니다.
* 상태라는 단어가 정상인지 비정상인지를 나타내는 것 이라기 보다는 리액트 컴포넌트의 데이터라는 의미에 더 가깝습니다.
* 리액트 컴포넌트의 변경 가능한 데이터를 state 라고 부릅니다.
* 컴포넌트를 개발하는 개발자가 직접 정의해서 사용
* state가 변경될 경우 컴포넌트가 재렌더링됨

* state를 정의할 때 중요한 점은 꼭 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야 한다는 것 입니다.
</details>

<details><summary>📖 State의 특징 </summary>

* 자바스크립트 객체 형태로 존재
* 직접적인 변경이 불가능
  
  <details><summary>📚 State의 특징 </summary>
   
    * 자바스크립트 객체 형태로 존재
    * 직접적인 변경이 불가능 함

    <details><summary>📚 클래스 컴포넌트 </summary>
   
    * 생성자에서 모든 state를 한 번에 정의
    * state를 변경하고자 할 때에는 꼭 setState() 함수를 사용해야 함
    </details>

    <details><summary>📚 함수 컴포넌트 </summary>
   
    * useState() 훅을 사용하여 각각의 state를 정의
    * 각 state별로 주어지는 set함수를 사용하여 state값을 변경
    </details>
  </details>
</details>

<details><summary>📖 생명주기 </summary>

<img src="./image/Lifecycle.png">

* 각 과정에서 하단에 초록색으로 표시된 부분은 생명주기에 따라 호출되는 클래스 컴포넌트의 함수입니다.
* 이 함수들을 Lifecycle method라고 부르며, 번역하면 생명주기 함수가 됩니다.

* 컴포넌트가 계속 존재하는 것이 아니라 시간의 흐름에 따라 생성되고 업데이트되다가 사라진다는 것 입니다.

  <details><summary>📚 마운트 </summary>

    * 먼저, 컴포넌트가 생성되는 시점을 마운트 라고 부르는데, 이때 컴포넌트의 constructor(생성자)가 실행됩니다.
    * componentDidMount()

    <details><summary>📚 업데이트 </summary>
   
    * 리액트 컴포넌트도 생애 동안 변화를 겪으면서 여러번 렌더링 됩니다.
    * 이를 리액트 컴포넌트로 말하면 업데이트 되는 과정이라고 할 수 있습니다.
    * setState() 함수 호출에 의해 state가 변경될 때
    * forceUpdate() 라는 강제 업데이트 함수가 호출될 때
    * componentDidUpdate()
    </details>

    <details><summary>📚 언마운트 </summary>
   
    * 리액트 컴포넌트도 결국 언젠가 사라지는 과정을 겪게 되는데 이 과정을 언마운트 라고 합니다.
    * 상위 컴포넌트에서 현재 컴포넌트를 더 이상 화면에 표시하지 않게 될 때 언마운트된다고 볼수있습니다.
    * componentWillUnmount()
    </details>
  </details>
</details>

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

  * 컴포넌트의 이름은 항상 대문자로 시작해야 함<br />
  * 소문자로 시작할 경우 컴포넌트를 DOM 태그로 인식하기 때문
  </details>
  <details><summary>📚 컴포넌트 렌더링</summary>

  * 컴포넌트로부터 엘리먼트를 생성하여 이를 리액트 DOM에 전달
  </details>
</details>

<details><summary>📖 컴포넌트 합성</summary>

* 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것
</details>

<details><summary>📖 컴포넌트 추출</summary>

* 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것
* 기능 단위로 구분하는 것이 좋고, 나중에 곧바로 재사용이 가능한 형태로 추출하는 것이 좋음
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