import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Order } from '../components/order';
import { fetchOrderedDrink } from '../funtions/fc';

const items = await fetchOrderedDrink()

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">

      <Header showMenu={false}/>
      <Order items = {items}/>
  


      <Footer/>
    </div>
  </div>
);
