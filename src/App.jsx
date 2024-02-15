import { useEffect, useRef, useState } from 'react';
import './App.css';
import FormIntput from './Components/FormInput';

function App() {
  const [state, setState] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = '';
    inputRef.current.focus();
  }, [state]);

  const handleSubmit = () => {
    setState((prevState) => {
      console.log(prevState);
      return [...prevState, inputRef.current.value];
    });
  };

  return (
    <>
      <h1>React Crash Course - part 2</h1>
      <FormIntput ref={inputRef} onSubmit={handleSubmit}/>
      <button onClick={handleSubmit}>Add</button>

      {state.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </>
  );
}

export default App;
