const scaleNames = {
    c : '섭씨',
    f : '화씨'
  };

  function TemperatureInput(props){
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
        // 온도 값이 변경시에는 onTemperatureChange() 
        // 함수를 호출하여 상위 컴포넌트로 변경된 값을 전달
    }

    return(
      // TemperaturInput 컴포넌트는 props로 scale과 temperature를 받아서 표시
        <fieldset>
            <legend>온도를 입력하세요 (단위 : {scaleNames[props.scale]}) </ legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
  }

export default TemperatureInput;