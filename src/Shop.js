import './shop.css';
import { List, Search,Heart } from 'react-feather';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { useCon } from './context/ContextCom';
import { XSquare } from 'react-feather';
import ModalQuackView from './modals/ModalQuackView';
import { useState } from 'react';
export default function Shop(){
    let[modalquackview,setmodalquackview]=useState("none");
    let[itemdetails,setitemdetails]=useState({img01:"",img02:"",img03:"",id:"",name:"",price:0,size:"",card:0,cardColor:"",fav:false});
    let {filteredItems,clickHeart,xsquare,changeXsquare,productOverView,view,sortOrder,sortOrderFun,priceFilter,priceFilterFun,colorFilter,colorFilterFun,setxsquaire} = useCon();
    function getProduct(){
        let product = filteredItems.map((i)=>{
            return (
                <Card key={i.id} style={{ width: '18rem' , overflow: "hidden"}}>
                    <div className='card-img card-img-top'>
                    <img src={i.img1 || null} className='w-100' alt='your browser do not support it' />
                        <button onClick={()=>{setitemdetails({img01:i.img1,img02:i.img2,img03:i.img3,id:i.id,size:i.size,card:i.card,cardColor:i.colorcard,name:i.name,price:i.price});setmodalquackview("");}}>Quich View</button>
                    </div>
                    <Card.Body>
                        <Card.Title style={{fontSize:"medium"}}><p>{i.name}</p><Heart style={{fill: i.fav?"red":"white", color: i.fav?"red":"gray",cursor:"pointer"}} onClick={()=>{clickHeart(i.id)}}/></Card.Title>
                        <Card.Text>${i.price}</Card.Text>
                    </Card.Body>
                </Card>
            )
        });
        return product;
    }
    function print(){
        console.log("itemdetails.fav = "+itemdetails.fav
            
        );
    }
    return(
        <div>
            <div className='shopcontent'>
                <div className='ProductOverview'>
                    <div className='btns'>
                        <div className='left'>
                            <button onClick={()=>{productOverView("allProducts")}}style={{borderBottom:view.allProducts?"2px #919090 solid":"0",color:view.allProducts?"black":"#5a5858"}}>All Products</button>
                            <button onClick={()=>{productOverView("women")}}      style={{borderBottom:view.women?"2px #919090 solid":"0",color:view.women?"black":"#5a5858"}}>Women</button>
                            <button onClick={()=>{productOverView("men")}}        style={{borderBottom:view.men?"2px #919090 solid":"0",color:view.men?"black":"#5a5858"}}>Men</button>
                            <button onClick={()=>{productOverView("bag")}}        style={{borderBottom:view.bag?"2px #919090 solid":"0",color:view.bag?"black":"#5a5858"}}>Bag</button>
                            <button onClick={()=>{productOverView("shoes")}}      style={{borderBottom:view.shoes?"2px #919090 solid":"0",color:view.shoes?"black":"#5a5858"}}>Shoes</button>
                            <button onClick={()=>{productOverView("watches")}}    style={{borderBottom:view.watches?"2px #919090 solid":"0",color:view.watches?"black":"#5a5858"}}>Watches</button> 
                        </div>
                        <div className='right'>
                            <button onClick={()=>{changeXsquare("filter")}}style={{color:xsquare.styleFilter?"white":"",backgroundColor:xsquare.styleFilter?"rgba(55, 71, 194, 0.456)":"white"}}>{xsquare.filter?<XSquare style={{marginRight:"10px"}}/>:<List style={{marginRight:"10px"}}/>} filter<div style={{opacity:xsquare.filter?"1":"0"}}></div></button>
                            <button onClick={()=>{changeXsquare("search")}}style={{color:xsquare.styleSearch?"white":"",backgroundColor:xsquare.styleSearch?"rgba(55, 71, 194, 0.456)":"white"}}>{xsquare.search?<XSquare style={{marginRight:"10px"}}/>:<Search style={{marginRight:"10px"}}/>}search<div style={{opacity:xsquare.search?"1":"0"}}></div></button>
                        </div>
                    </div>
                    <div className='filter' style={{display:xsquare.filter?"flex":"none"}}>
                        <div className='sort by'>
                            <div>Sort By</div>
                            <button onClick={()=>{sortOrderFun("lowToHigh")}}style={{borderBottom:sortOrder.lowToHigh?"2px rgba(21, 47, 243, 0.456) solid":"2px transparent solid",color:sortOrder.lowToHigh?"rgba(21, 47, 243, 0.456)":"black"}}>Price: Low to High</button>
                            <button onClick={()=>{sortOrderFun("highToLow")}}style={{borderBottom:sortOrder.highToLow?"2px rgba(21, 47, 243, 0.456) solid":"2px transparent solid",color:sortOrder.highToLow?"rgba(21, 47, 243, 0.456)":"black"}}>Price: High to Low</button>
                        </div>
                        <div className='price'>
                            <div>Price</div>
                            <button onClick={()=>{priceFilterFun("all")}}style={{borderBottom:priceFilter.all?"2px rgba(21, 47, 243, 0.456) solid":"2px transparent solid",color:priceFilter.all?"rgba(21, 47, 243, 0.456)":"black"}}>All</button>
                            <button onClick={()=>{priceFilterFun("from0to50")}}style={{borderBottom:priceFilter.from0to50?"2px rgba(21, 47, 243, 0.456) solid":"2px transparent solid",color:priceFilter.from0to50?"rgba(21, 47, 243, 0.456)":"black"}}>$0.00-$50.00</button>
                            <button onClick={()=>{priceFilterFun("from50to100")}}style={{borderBottom:priceFilter.from50to100?"2px rgba(21, 47, 243, 0.456) solid":"2px transparent solid",color:priceFilter.from50to100?"rgba(21, 47, 243, 0.456)":"black"}}>$50.00-$100.00</button>
                            <button onClick={()=>{priceFilterFun("from100to150")}}style={{borderBottom:priceFilter.from100to150?"2px rgba(21, 47, 243, 0.456) solid":"2px transparent solid",color:priceFilter.from100to150?"rgba(21, 47, 243, 0.456)":"black"}}>$100.00-$150.00</button>
                            <button onClick={()=>{priceFilterFun("from150to200")}}style={{borderBottom:priceFilter.from150to200?"2px rgba(21, 47, 243, 0.456) solid":"2px transparent solid",color:priceFilter.from150to200?"rgba(21, 47, 243, 0.456)":"black"}}>$150.00-$200.00</button>
                            <button onClick={()=>{priceFilterFun("from200to")}}style={{borderBottom:priceFilter.from200to?"2px rgba(21, 47, 243, 0.456) solid":"2px transparent solid",color:priceFilter.from200to?"rgba(21, 47, 243, 0.456)":"black"}}>$200.00 +</button>
                        </div>
                        <div className='color'>
                            <div>color</div>
                            <button onClick={()=>{colorFilterFun("black")}}style={{borderBottom:colorFilter.black?"2px rgba(21, 47, 243, 0.456) solid":"2px transparent solid",color:colorFilter.black?"rgba(21, 47, 243, 0.456)":"black"}}><span></span>black</button>
                            <button onClick={()=>{colorFilterFun("blue")}}style={{borderBottom:colorFilter.blue?"2px rgba(21, 47, 243, 0.456) solid":"2px transparent solid",color:colorFilter.blue?"rgba(21, 47, 243, 0.456)":"black"}}><span></span>blue</button>
                            <button onClick={()=>{colorFilterFun("gray")}}style={{borderBottom:colorFilter.gray?"2px rgba(21, 47, 243, 0.456) solid":"2px transparent solid",color:colorFilter.gray?"rgba(21, 47, 243, 0.456)":"black"}}><span></span>Gray</button>
                            <button onClick={()=>{colorFilterFun("green")}}style={{borderBottom:colorFilter.green?"2px rgba(21, 47, 243, 0.456) solid":"2px transparent solid",color:colorFilter.green?"rgba(21, 47, 243, 0.456)":"black"}}><span></span>Green</button>
                            <button onClick={()=>{colorFilterFun("red")}}style={{borderBottom:colorFilter.red?"2px rgba(21, 47, 243, 0.456) solid":"2px transparent solid",color:colorFilter.red?"rgba(21, 47, 243, 0.456)":"black"}}><span></span>Red</button>
                            <button onClick={()=>{colorFilterFun("white")}}style={{borderBottom:colorFilter.white?"2px rgba(21, 47, 243, 0.456) solid":"2px transparent solid",color:colorFilter.white?"rgba(21, 47, 243, 0.456)":"black"}}><span></span>White</button>
                        </div>
                    </div>
                    <div className='search'style={{display:xsquare.search?"block":"none"}}>
                        <input type='text' placeholder='search' value={xsquare.inputSearch}onChange={(e)=>{setxsquaire({...xsquare,inputSearch:e.target.value})}}/>
                    </div>
                </div>
                {/**Items */}
                <Row sm={2} md={3} lg={4} className="g-4 m-2" style={{width:"100%"}}>
                    {getProduct()}
                </Row>
            </div>
            <ModalQuackView setmodalquackview={setmodalquackview} modalquackview={modalquackview} itemdetails={itemdetails} setitemdetails={setitemdetails} print={print}/>
        </div>
    )
}