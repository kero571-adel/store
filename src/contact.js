import './contact.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Mail , MapPin , Phone} from 'react-feather';
export default function Contact(){
    return(
        <>
            <div className="contact">
                <img src={`${process.env.PUBLIC_URL}/images/bg-02.webp`} alt=""/>
                <div>Contact</div>
            </div>
            <div className='Comcontactcontent'>
                <div className='contactBody'>
                    <div>
                        <h1><b>Send Us A Message</b></h1>
                        <form>
                            <InputGroup className="mb-5 mt-5">
                                <InputGroup.Text id="basic-addon1"><Mail/></InputGroup.Text>
                                <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                required
                                />
                            </InputGroup>
                            <InputGroup className="mb-5 mt-5">
                                <Form.Control as="textarea" aria-label="With textarea" placeholder='How can we help you?' required/>
                            </InputGroup>
                            <input type='submit'className='bg-primary submit' value={"submit"}/>
                        </form>
                    </div>
                    <div>
                        <div><MapPin style={{marginRight:"30px"}}/>Address</div>
                        <p style={{marginLeft:"52px"}}>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
                        <div><Phone style={{marginRight:"30px"}}/>Lets Talk</div>
                        <p style={{marginLeft:"52px"}}>+1 800 1236879</p>
                        <div><Mail style={{marginRight:"30px"}}/>Sale Support</div>
                        <p style={{marginLeft:"52px"}}>contact@example.com</p>
                    </div>
                </div>
            </div>
        </>
    );
}