import { Drink } from '../drink'
import './index.css'

export const Menu = () => {
    return (
        <section className="menu" id="menu">
            <div className="container">
                <h2>Naše nabídka</h2>
                <p className="menu-intro">
                    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
                </p>
                <div className="drinks-list">
                    <Drink
                        id={0}
                        name="Espresso"
                        ordered={false}
                        image="/cups/espresso.png"
                        layers={[
                            {
                                color: '#fbdf5b',
                                label: 'citrón',
                            },
                            {
                                color: '#613916',
                                label: 'espresso',
                            },
                        ]}
                    />

                    
                </div>

                <div className="order-detail">
                    <a href="/order.html">Detail objednávky</a>
                </div>
            </div>
        </section>
    )
}