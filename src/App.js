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
  const [ClichScrollTop, setClichScrollTop] = useState("none");
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
    }
    if(document.documentElement.scrollTop >= 500){
      setClichScrollTop("");
    }
  };

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
      <div> 
        <button class="button">
          <svg class="svgIcon" viewBox="0 0 384 512">
            <path
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            ></path>
          </svg>
        </button>
    </div>
    </>
  );
}

export default App;
