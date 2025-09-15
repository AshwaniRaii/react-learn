import { useCallback, useState, useEffect , useRef} from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|<>?/~";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length  );
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password) 
    setCopied(true) 
    setTimeout(()=> setCopied(false),2000)
  },[password,copied])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-xl rounded-md p-4 m-2 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className="outline-none w-full py-1 px-3 bg-white" placeholder='Password' readOnly ref={passwordRef} />
          <button className='bg-green-400 px-3 py-1 cursor-pointer' onClick={copyPasswordToClipboard}>{copied ? 'Copied' : 'Copy'}</button>
        </div>
        <div className='flex items-center text-white gap-3'>
          <div className='flex text-sm gap-x-2'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer text-white' onChange={(event) => { setLength(event.target.value) }} />
            <label>Length: {length}</label>
          </div>
          <div className='flex text-sm gap-x-2'>
            <input type='checkbox' checked={numberAllowed} onChange={(e) => setNumberAllowed(e.target.value)} />
            <label>Numbers</label>
          </div>
          <div className='flex text-sm gap-x-2'>
            <input type='checkbox' checked={charAllowed} onChange={(e) => setCharAllowed(e.target.value)} />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
