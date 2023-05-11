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