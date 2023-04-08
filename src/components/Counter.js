import {useState, useEffect} from 'react';

function   Counter() {
    const [number, setNumber] = useState(0);
    // const [name, setName] = useState('Sude');
  useEffect(() => {
    console.log('Component mount edildi');

   const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);

    return () => clearInterval();

  },[]);
  //[] bağımlılık olarak geçiyor,eğer boş kalırsa component mount edildiği anı yakalar demektir
  
 

  useEffect(() => {
    console.log('number state güncellendi')
  },[number, ]);
  
  // useEffect(() => {
  //   console.log(' name state güncellendi')
  // },[ name]);
  
  
  return (
    <div>
    <h1>{number}</h1>
    <button onClick={() => setNumber(number + 1)}>Click</button>
{/*     
    <hr></hr>

    <h1>{name}</h1>
    <button onClick={() => setName('Meryem')}>Click</button> */}

    </div>
  )
}

export default Counter ;
