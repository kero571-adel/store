import './App.css';
import { useState, Suspense, lazy } from 'react';
import { useCon } from './context/ContextCom';
import { User, ShoppingCart, Heart } from 'react-feather';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Lazy Loading Components
const Home = lazy(() => import('./Home'));
const Shop = lazy(() => import('./Shop'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./contact'));
const Account = lazy(() => import('./Account'));
const Error = lazy(() => import('./Error'));
const Footer = lazy(() => import('./footer'));
const ViewCard = lazy(() => import('./viewCard'));
const CardList = lazy(() => import('./cardList'));
const HeartList = lazy(() => import('./HeartList'));

function App() {
  const { itemsWithCardCount, itemsWithFavCount , profile} = useCon();
  const [showorHide, setshoworHide] = useState("0px");
  const [backgrNav, setbackgrNav] = useState("");
  const [ClichScrollTop, setClichScrollTop] = useState("0");
  const[cardNav,setCardNav]=useState("hide");
  const location = useLocation();
  const currentPath = location.pathname;

  function HorSList() {
    setshoworHide(showorHide === "0px" ? "155px" : "0px");
  }

  window.onscroll = () => {
    setbackgrNav("white");
    if (document.documentElement.scrollTop === 0) {
      setbackgrNav("transparent");
      setClichScrollTop("0");
    }
    if(document.documentElement.scrollTop >= 500){
      setClichScrollTop("1");
    }
  };
  function ClichScrollTopFun(){
    window.scrollTo({top:0})
  }
  const getColor = (path) => (currentPath === path ? "rgb(0, 115, 255)" : "");

  return (
    <>
      <nav style={{ background: backgrNav }}>
        <div className='navcontent'>
          <div className='logo'><b>Coza</b> Store</div>
          <div className='links'>
            <Link to='/'>
              <div style={{ color: getColor("/") }}>HOME</div>
            </Link>
            <Link to='/shop'>
              <div style={{ color: getColor("/shop") }}>Shop</div>
            </Link>
            <Link to='/about'>
              <div style={{ color: getColor("/about") }}>About</div>
            </Link>
            <Link to='/contact'>
              <div style={{ color: getColor("/contact") }}>Contact</div>
            </Link>
          </div>
          <div className='iconNavAndBtn'>
            <div className='iconNav'>
              <Link to='/account'>
                <div>{profile.image?<img src={profile.image}alt="" style={{width:"50px",height:"50px",margin:"auto auto", borderRadius:"50%"}}/>:<User style={{width:"33px",height:"33px",margin:"auto",color: getColor("/account")}}/>}</div>
              </Link>
              <div>
                <ShoppingCart style={{ color: getColor("/viewcard") }} onClick={() => setCardNav("show")} />
                <p>{itemsWithCardCount}</p>
              </div>
              <div>
                <Link to={"/heartlist"}>
                  <Heart style={{ color: getColor("/heartlist"), fill:getColor("/heartlist")}} />
                  <p>{itemsWithFavCount}</p>
                </Link>
              </div>
            </div>
            <div onClick={HorSList} className='navbtn'>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='linksHidden' style={{ height: showorHide }}>
          <Link to='/'>
            <div style={{ color: getColor("/") }}>HOME</div>
          </Link>
          <Link to='/shop'>
            <div style={{ color: getColor("/shop") }}>Shop</div>
          </Link>
          <Link to='/about'>
            <div style={{ color: getColor("/about") }}>About</div>
          </Link>
          <Link to='/contact'>
            <div style={{ color: getColor("/contact") }}>Contact</div>
          </Link>
        </div>
      </nav>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/account' element={<Account />} />
          <Route path='/viewcard' element={<ViewCard />} />
          <Route path='/heartlist' element={<HeartList />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <CardList cardNav={cardNav} setCardNav={setCardNav} />
        <Footer />
      </Suspense>
      <div className='ClichScrollTop' style={{opacity:ClichScrollTop}} onClick={()=>{ClichScrollTopFun()}}>
      <button class="ClichScrollTopButton">
        <svg height="1.2em" class="arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
      </button>
    </div>
    </>
  );
}

export default App;
