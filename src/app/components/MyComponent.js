import {useState, useEffect} from "react"

function MyComponent(){

    const [name, setName] = useState('test');
    let name2 = 'test';

    // componentDidMount
    useEffect(()=>{
        setName('Hello World!');
        console.log('Hello world');
    }, [])

    return(
        <div>
            <p>{name}</p>
            <p>Hello world</p>
        </div>
    )
}

export default MyComponent