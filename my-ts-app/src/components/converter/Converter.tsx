import "./Converter.css"
import Block from "./block/Block"
import { HookCallbacks } from "async_hooks"

 export interface ConverterProps {
    currencies: string[]
    currentCurrency?: string
    fromCurrency?: string
    toCurrency?: string
    onChangeFromCurrency?: CallableFunction
    onChangeToCurrency?: CallableFunction
    onChangeCurrency?: any

 }

export const Converter = ({currencies, fromCurrency, toCurrency, onChangeFromCurrency, onChangeToCurrency}: ConverterProps) => {
return (
    <div className="converter">
        <Block currencies={currencies} currentCurrency={fromCurrency} onChangeCurrency={onChangeFromCurrency} />
        <Block currencies={currencies} currentCurrency={toCurrency} onChangeCurrency={onChangeToCurrency} />
    </div>
)
}

export default Converter