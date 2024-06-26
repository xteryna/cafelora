import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header';
import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import { Contact } from '../components/contact';
import { Gallery } from '../components/galerry';
import { Menu } from '../components/menu';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header/>
    <main>
      <Banner/>
      <Menu/>
      <Gallery/>
      <Contact/>
    </main>
    <Footer/>
  </div>
);



const hamburgerMenu = document.querySelector(".nav-btn")
const rollOut = document.querySelector(".rollout-nav")

hamburgerMenu.addEventListener("click", ()=> {
  rollOut.classList.toggle("nav-closed")
})

rollOut.addEventListener("click", ()=> {
  rollOut.classList.toggle("nav-closed")
})