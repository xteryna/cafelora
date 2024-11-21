import { Layer } from '../layer'
import './index.css'

export const Drink = ({id,name, ordered, image, layers}) => {
    let btnText = "Objednat"
    let btnClass = "order-btn"
    if (ordered === true) {
        btnText = "Zrušit",
        btnClass = "order-btn order-btn--ordered"
    }
    


    return(
        <div className="drink">
            <div className="drink__product">
                <div className="drink__cup">
                    <img src={image}/>
                </div>
                <div className="drink__info">
                    <h3>{name}</h3>
                    {layers.map((layer, index) => (
                        <Layer key={id} color={layer.color} label={layer.label}/>
                    ))}
                </div>
            </div>
            <form className="drink__controls" data-id={id}>
                <input type="hidden" className="order-id" value="0"/>
                <button className={btnClass}>
                    {btnText}
                </button>
            </form>
        </div>
    )
}
