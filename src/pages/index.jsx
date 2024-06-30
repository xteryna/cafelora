import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header';
import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import { Contact } from '../components/contact';
import { Gallery } from '../components/galerry';
import { Menu } from '../components/menu';
import { fetchDrink } from '../funtions/fc';

const idDrink = 0
const drinks = await fetchDrink(idDrink) //načtení hodnot pro konkrétního nápoj
console.log(drinks)

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header/>
    <main>
      <Banner/>
      <Menu drinks={drinks}/>
      <Gallery/>
      <Contact/>
    </main>
    <Footer/>
  </div>
);


const hamburgerMenu = document.querySelector(".nav-btn")
const rollOut = document.querySelector(".rollout-nav")
const orderBtns = document.querySelectorAll(".drink__controls")

hamburgerMenu.addEventListener("click", ()=> {
  rollOut.classList.toggle("nav-closed")
})

rollOut.addEventListener("click", ()=> {
  rollOut.classList.toggle("nav-closed")
})

// Přidání posluchače událostí na každý objednávací formulář
orderBtns.forEach((orderBtn) => {
  orderBtn.addEventListener("submit", async(e) => {
    e.preventDefault(); // Zabrání výchozímu chování (odeslání formuláře a reloadu stránky)
    const drinkId = Number(e.target.dataset.id); // Získání id nápoje pomocí dataset.id
    console.log(`Drink ID: ${drinkId}`);
    
    const edDrink = drinks.find((d) => d.id === drinkId)
    console.log(`edDrink: ${edDrink}`)
    const drinkOrderedValue = !edDrink.ordered;
    console.log(`drinkOrderedValue: ${drinkOrderedValue}`)

  
    const response = await fetch(`http://localhost:4000/api/drinks/${drinkId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{ op: 'replace', path: '/ordered', value: drinkOrderedValue }]),
    });
    const data = await response.json();
    console.log('API Response:', data);
    window.location.reload();
  });
});