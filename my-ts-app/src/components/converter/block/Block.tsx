import "./../Converter.css"
import { ConverterProps } from "./../Converter"


export const Block = ({currencies, currentCurrency, onChangeCurrency}: ConverterProps) => (
    <div>
        <div className="currencies">
            {currencies.map((cur:string) => (
                <span className={"currency" + " " + `${currentCurrency === cur ? "active" : ''}`} key={cur} onClick={() => onChangeCurrency(cur)}>{cur}</span>
            ))}
        </div>
        <input type="number" placeholder="0" className="value" />
    </div>
);
export default Block;