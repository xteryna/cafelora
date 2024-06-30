import { OrderItem } from '../orderItem'
import './index.css'

export const Order = ({items}) => {
    console.log(items)
    let orderHTML = <p className="empty-order">Zatím nemáte nic objednáno</p>
    if (items.length > 0) {
        orderHTML = (                
            <div className="order__items">
                {items.map((item) => (
                    <OrderItem name ={item.name} image={item.image} key={item.id}/>
                ))}
            </div>
        )
    }

    return (
        <main className="order">
            <div className="container order__content">
                <h1>Vaše objedávnka</h1>
                {orderHTML}

            </div>
        </main>   
    )
}