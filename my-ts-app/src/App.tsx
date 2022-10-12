import React, { useState } from 'react';
import './App.css';
import Converter from './components/converter/Converter';
import Header from './components/header/Header';

const defaultCurrencies: string[] = ["UAH", "USD", "EUR"]

interface IRatesParams {
    r030: number
    txt: string
    rate: number
    cc: string
    exchangedate: string
}
interface IRates {
  rates: IRatesParams[]
}

function App() {
    const [rates, setRates] = useState<IRates | null>(null)
    const [fromCurrency, setFromCurrency] = useState("UAH")
    const [toCurrency, setToCurrency] = useState("EUR")
    
    React.useEffect(() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then((res) => res.json())
    .then(json => {
      setRates(json)
      console.log(json)})
    }, []);
    
  return (
    <>
      <Header currencies={defaultCurrencies} />
      <Converter currencies={defaultCurrencies} fromCurrency={fromCurrency} toCurrency={toCurrency} 
       onChangeFromCurrency={setFromCurrency} onChangeToCurrency={setToCurrency} />
    </>
  );
}

export default App;
