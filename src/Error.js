import {Link} from 'react-router-dom';
import './error.css'
export default function Error(){
    return(          
       <div className='error'>
            <div>ERROR</div>
            <div>this page is not found</div>
            <Link to="/">
              <button>back to the home page</button>
            </Link>
       </div>
    )
}