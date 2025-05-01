import { createContext, useState, useContext ,useMemo, useEffect } from "react";
let context = createContext();
export function ContextCom(props) { 
    let [xsquare,setxsquaire] = useState({filter:false,search:false,styleFilter:false,styleSearch:false,inputSearch:""});
    let [view,setview]=useState({allProducts:true,women:false,men:false,bag:false,shoes:false,watches:false});
    let [sortOrder,setsortOrder]=useState({highToLow:false,lowToHigh:false});
    let [priceFilter,setpriceFilter]=useState({all:true,from0to50:false,from50to100:false,from100to150:false,from150to200:false,from200to:false});
    let [colorFilter,setcolorFilter]=useState({black:false,blue:false,red:false,white:false,gray:false,green:false});
    let defaultItems = [
        {
            id:"1",
            name:"esprit ruffle shirt",
            img1:`${process.env.PUBLIC_URL}/images/product-01.webp`,
            img2:`${process.env.PUBLIC_URL}/images/product-01.webp`,
            img3:`${process.env.PUBLIC_URL}/images/product-01.webp`,
            fav:false,
            card:0,
            price:16.64,
            color:"white",
            kind:"women",
            size:"",
            colorcard:""
        },
        {
            id:"2",
            name:"herschel supply",
            img1:`${process.env.PUBLIC_URL}/images/product-02.webp`,
            img2:`${process.env.PUBLIC_URL}/images/product-02.webp`,
            img3:`${process.env.PUBLIC_URL}/images/product-02.webp`,
            fav:false,
            card:0,
            price:35.31,
            color:"white",
            kind:"women",
            size:"",
            colorcard:""
        },
        {
            id:"3",
            name:"only check trouser",
            img1:`${process.env.PUBLIC_URL}/images/product-03.webp`,
            img2:`${process.env.PUBLIC_URL}/images/product-03.webp`,
            img3:`${process.env.PUBLIC_URL}/images/product-03.webp`,
            fav:false,
            card:0,
            price:25.50,
            color:"blue",
            kind:"men",
            size:"",
            colorcard:""
        },
        {
            id:"4",
            name:"classic trench coat",
            img1:`${process.env.PUBLIC_URL}/images/product-04.webp`,
            img2:`${process.env.PUBLIC_URL}/images/product-04.webp`,
            img3:`${process.env.PUBLIC_URL}/images/product-04.webp`,
            fav:false,
            card:0,
            price:75.00,
            color:"brown",
            kind:"women"
        },
        {
            id:"5",
            name:"front pocket jumper",
            img1:`${process.env.PUBLIC_URL}/images/product-05.webp`,
            img2:`${process.env.PUBLIC_URL}/images/product-05.webp`,
            img3:`${process.env.PUBLIC_URL}/images/product-05.webp`,
            fav:false,
            card:0,
            price:34.75,
            color:"gray",
            kind:"women"
        },
        {
            id:"6",
            name:"vintage inspired classic",
            img1:`${process.env.PUBLIC_URL}/images/product-06.webp`,
            img2:`${process.env.PUBLIC_URL}/images/product-06.webp`,
            img3:`${process.env.PUBLIC_URL}/images/product-06.webp`,
            fav:false,
            card:0,
            price:93.20,
            color:"black",
            kind:"watches",
            size:"",
            colorcard:""
        },
        {
            id:"7",
            name:"shirt in stretch cotton",
            img1:`${process.env.PUBLIC_URL}/images/product-07.webp`,
            img2:`${process.env.PUBLIC_URL}/images/product-07.webp`,
            img3:`${process.env.PUBLIC_URL}/images/product-07.webp`,
            fav:false,
            card:0,
            price:52.66,
            color:"gray",
            kind:"women",
            size:"",
            colorcard:""
        },
        {
            id:"8",
            name:"pieces metallic printed",
            img1:`${process.env.PUBLIC_URL}/images/product-08.webp`,
            img2:`${process.env.PUBLIC_URL}/images/product-08.webp`,
            img3:`${process.env.PUBLIC_URL}/images/product-08.webp`,
            fav:false,
            card:0,
            price:18.96,
            color:"white",
            kind:"women",
            size:"",
            colorcard:""
        },
        {
            id:"9",
            name:"converse all star hi plimsolls",
            img1:`${process.env.PUBLIC_URL}/images/product-09.webp`,
            img2:`${process.env.PUBLIC_URL}/images/product-09.webp`,
            img3:`${process.env.PUBLIC_URL}/images/product-09.webp`,
            fav:false,
            card:0,
            price:75.00,
            color:"black",
            kind:"shoes",
            size:"",
            colorcard:""
        },
        {
            id:"10",
            name:"femme t-shirt in stripe",
            img1:`${process.env.PUBLIC_URL}/images/product-10.webp`,
            img2:`${process.env.PUBLIC_URL}/images/product-10.webp`,
            img3:`${process.env.PUBLIC_URL}/images/product-10.webp`,
            fav:false,
            card:0,
            price:25.85,
            color:"black",
            kind:"women",
            size:"",
            colorcard:""
        },
        {
            id:"11",
            name:"Herschel supply",
            img1:`${process.env.PUBLIC_URL}/images/product-11.webp`,
            img2:`${process.env.PUBLIC_URL}/images/product-11.webp`,
            img3:`${process.env.PUBLIC_URL}/images/product-11.webp`,
            fav:false,
            card:0,
            price:63.16,
            color:"blue",
            kind:"men",
            size:"",
            colorcard:""
        },
        {
            id:"12",
            name:"Herschel supply",
            img1:`${process.env.PUBLIC_URL}/images/product-12.webp`,
            img2:`${process.env.PUBLIC_URL}/images/product-12.webp`,
            img3:`${process.env.PUBLIC_URL}/images/product-12.webp`,
            fav:false,
            card:0,
            price:63.15,
            color:"brown",
            kind:"belt",
            size:"",
            colorcard:""
        },
        {
            id:"13",
            name:"T-Shirt with Sleeve",
            img1:`${process.env.PUBLIC_URL}/images/product-13.webp`,
            img2:`${process.env.PUBLIC_URL}/images/product-13.webp`,
            img3:`${process.env.PUBLIC_URL}/images/product-13.webp`,
            fav:false,
            card:0,
            price:18.49,
            color:"white",
            kind:"women",
            size:"",
            colorcard:""
        },
        {
            id:"14",
            name:"pretty little thing",
            img1:`${process.env.PUBLIC_URL}/images/product-14.webp`,
            img2:`${process.env.PUBLIC_URL}/images/product-14.webp`,
            img3:`${process.env.PUBLIC_URL}/images/product-14.webp`,
            fav:false,
            card:0,
            price:54.79,
            color:"black",
            kind:"women",
            size:"",
            colorcard:""
        },
        {
            id:"15",
            name:"mini silver mesh watch",
            img1:`${process.env.PUBLIC_URL}/images/product-15.webp`,
            img2:`${process.env.PUBLIC_URL}/images/product-15.webp`,
            img3:`${process.env.PUBLIC_URL}/images/product-15.webp`,
            fav:false,
            card:0,
            price:86.85,
            color:"black",
            kind:"watches",
            size:"",
            colorcard:""
        },
        {
            id:"16",
            name:"square neck back",
            img1:`${process.env.PUBLIC_URL}/images/product-16.webp`,
            img2:`${process.env.PUBLIC_URL}/images/product-16.webp`,
            img3:`${process.env.PUBLIC_URL}/images/product-16.webp`,
            fav:false,
            card:0,
            price:29.64,
            color:"gray",
            kind:"women",
            size:"",
            colorcard:""
        },
    ];
    let [items, setItem] = useState(() => {
        const localItems = localStorage.getItem("items");
        try {
            const parsed = JSON.parse(localItems);
            return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultItems;
        } catch {
            return defaultItems;
        }
    });
    useEffect(() => {
        if (items.length > 0) {
            localStorage.setItem("items", JSON.stringify(items));
        }
    }, [items]);
    const [profile, setProfile] = useState(() => {
        const savedProfile = localStorage.getItem('userProfile');
        return savedProfile ? JSON.parse(savedProfile) : {
            name: '',
            email: '',
            phone: '',
            image: null,
        };
    });

    function clickHeart(id){
        let editItem = items.map((i)=>{
            if(i.id===id){
                if(i.fav===true)
                    return {...i,fav:false};
                else
                    return {...i,fav:true};
            }else{
                return i;
            }
        });
        setItem(editItem);
    }
    function changeXsquare(nameOp){
        if(nameOp==="filter"){
            if(xsquare.filter){
                setxsquaire({...xsquare,filter:false,styleFilter:false});
            }else{
                setxsquaire({...xsquare,filter:true,styleFilter:true});
            }
        }else{
            if(xsquare.search){
                setxsquaire({...xsquare,search:false,styleSearch:false});
            }else{
                setxsquaire({...xsquare,search:true,styleSearch:true});
            }
        }
    }
    function productOverView(product){
        switch(product){
            case "allProducts":
                setview({allProducts:true,women:false,men:false,bag:false,shoes:false,watches:false});
            break;
            case "women":
                setview({women:true,allProducts:false,men:false,bag:false,shoes:false,watches:false});
            break;
            case "men":
                setview({women:false,allProducts:false,men:true,bag:false,shoes:false,watches:false});
            break;
            case "bag":
                setview({women:false,allProducts:false,men:false,bag:true,shoes:false,watches:false});
            break;
            case "shoes":
                setview({women:false,allProducts:false,men:false,bag:false,shoes:true,watches:false});
            break;
            case "watches":
                setview({women:false,allProducts:false,men:false,bag:false,shoes:false,watches:true});
            break;
            default:
                console.log("unknown");
            break;
        }
    }
    function sortOrderFun(sort){
        if(sort==="lowToHigh"){
            if(sortOrder.lowToHigh){
                setsortOrder({highToLow:false,lowToHigh:false})
            }else{    
                setsortOrder({highToLow:false,lowToHigh:true})
            }
        }else {
            if(sortOrder.highToLow){
                setsortOrder({highToLow:false,lowToHigh:false});
            }else{
                setsortOrder({highToLow:true,lowToHigh:false});
            }
        }
    }
    function priceFilterFun(price){
        switch(price){
            case "all":
                setpriceFilter({all:true,from0to50:false,from50to100:false,from100to150:false,from150to200:false,from200to:false});
            break;
            case "from0to50":
                setpriceFilter({all:false,from0to50:true,from50to100:false,from100to150:false,from150to200:false,from200to:false});
            break;
            case "from50to100":
                setpriceFilter({all:false,from0to50:false,from50to100:true,from100to150:false,from150to200:false,from200to:false});
            break;
            case "from100to150":
                setpriceFilter({all:false,from0to50:false,from50to100:false,from100to150:true,from150to200:false,from200to:false});
            break;
            case "from150to200":
                setpriceFilter({all:false,from0to50:false,from50to100:false,from100to150:false,from150to200:true,from200to:false});
            break;
            case "from200to":
                setpriceFilter({all:false,from0to50:false,from50to100:false,from100to150:false,from150to200:false,from200to:true});
            break;
            default:
                console.log("unknown");
            break;
        }
    }
    function filterItems(list) {
        let result = [...list];
        if (!view.allProducts) {
          const kind = Object.keys(view).find(k => view[k] && k !== 'allProducts');
          if (kind) result = result.filter(i => i.kind === kind);
        }
        if (!priceFilter.all) {
          if (priceFilter.from0to50)      result = result.filter(i => i.price > 0 && i.price <= 50);
          else if (priceFilter.from50to100)  result = result.filter(i => i.price > 50 && i.price <= 100);
          else if (priceFilter.from100to150) result = result.filter(i => i.price > 100 && i.price <= 150);
          else if (priceFilter.from150to200) result = result.filter(i => i.price > 150 && i.price <= 200);
          else                                result = result.filter(i => i.price > 200);
        }
        const activeColor = Object.keys(colorFilter).find(c => colorFilter[c]);
        if (activeColor) {
          result = result.filter(i => i.color === activeColor);
        }
        if (sortOrder.lowToHigh) {
          result.sort((a, b) => a.price - b.price);
        } else if (sortOrder.highToLow) {
          result.sort((a, b) => b.price - a.price);
        }
        if(xsquare.inputSearch!==""){
            result = result.filter((i)=>{
                return i.name.toLowerCase().includes(xsquare.inputSearch.toLowerCase());
            })
        }
        return result;
    }
    function colorFilterFun(color){
        switch(color){
            case "black":
                if(colorFilter.black){
                    setcolorFilter({black:false,blue:false,red:false,white:false,gray:false,green:false});
                }else{
                    setcolorFilter({black:true,blue:false,red:false,white:false,gray:false,green:false});
                }
            break;
            case "blue":
                if(colorFilter.blue){
                    setcolorFilter({black:false,blue:false,red:false,white:false,gray:false,green:false});
                }else{
                    setcolorFilter({black:false,blue:true,red:false,white:false,gray:false,green:false});
                }
            break;
            case "gray":
                if(colorFilter.gray){
                    setcolorFilter({black:false,blue:false,red:false,white:false,gray:false,green:false});
                }else{
                    setcolorFilter({black:false,blue:false,red:false,white:false,gray:true,green:false});
                }
            break;
            case "green":
                if(colorFilter.green){
                    setcolorFilter({black:false,blue:false,red:false,white:false,gray:false,green:false});
                }else{
                    setcolorFilter({black:false,blue:false,red:false,white:false,gray:false,green:true});
                }
            break;
            case "red":
                if(colorFilter.red){
                    setcolorFilter({black:false,blue:false,red:false,white:false,gray:false,green:false});
                }else{
                    setcolorFilter({black:false,blue:false,red:true,white:false,gray:false,green:false});
                }
            break;
            case "white":
                if(colorFilter.white){
                    setcolorFilter({black:false,blue:false,red:false,white:false,gray:false,green:false});
                }else{
                    setcolorFilter({black:false,blue:false,red:false,white:true,gray:false,green:false});
                }
            break;
            default:
                console.log("unknown");
            break;
        }
    }
    const filteredItems = useMemo(
    () => filterItems(items),
    [items, view, priceFilter, colorFilter, sortOrder, xsquare.inputSearch]
    );
    function addcard(id, cardnum, size, colorcard) {
        if(cardnum>0&&size!==""&&size!=="Choose"&&colorcard!==""&&colorcard!=="Choose"){
                console.log()
                const updatedItems = items.map((i) =>
                i.id === id?{ ...i, card: cardnum, size, colorcard }:i
                );
                setItem(updatedItems);
        }
    }
     function Delete(id){
        let del = items.map((i)=>{
            if(i.id===id){
                i.card=0;
                return i;
            }else{
                return i
            }
        });
        setItem(del)
     }
    const card = useMemo(() => {
        return items.filter((i) => i.card > 0);
    }, [items]);
    const heart = useMemo(() => {
        return items.filter((i) => i.fav);
    }, [items]);
    function Deletefav(id){
        let del = items.map((i)=>{
            if(i.id===id){
                i.fav=false;
                return i;
            }else{
                return i
            }
        });
        setItem(del)
     }
    function editItems(edititems){
        let updatedItems = items.map(item => {
            let updated = edititems.find(c => c.id === item.id);
            return updated ? { ...item, ...updated } : item;
        });
        
        setItem(updatedItems);        
    }
    const itemsWithCardCount = useMemo(() => {
        return items.filter(item => item.card > 0).length;
    }, [items]);
    const itemsWithFavCount = useMemo(() => {
        return items.filter(item => item.fav).length;
    }, [items]);
    
    return (
        <context.Provider value={{
            card,
            heart,
            Deletefav,
            filteredItems,
            clickHeart,
            xsquare,
            setxsquaire,
            changeXsquare,
            productOverView,
            view,
            sortOrder,
            sortOrderFun,
            priceFilter,
            priceFilterFun,
            colorFilter,
            colorFilterFun, 
            addcard,
            Delete,
            editItems,
            itemsWithCardCount,
            itemsWithFavCount,
            profile,
            setProfile
        }}>
            {props.children}
        </context.Provider>
    );
}
export let useCon = () => {
    return useContext(context);
};