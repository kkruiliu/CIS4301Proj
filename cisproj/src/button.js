import { useState } from "react";

const Home = () => {
    //let name = 'jonathan';
    const [name, setName] = useState('mario');

    const handleClick = () => {
        setName('mango');
    }

    const handleClickagain = (name) => {
        console.log('hello ' + name);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {handleClickagain('mario')}}>Click me too</button>
        </div>
     );
}
 
export default Home;