import React, { useRef } from "react";

const SearchMovie:React.FC<{onSearch:(text:string)=> void}> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e:React.FormEvent)=> {
      e.preventDefault();
      const enteredInput = inputRef.current!.value;
   
      props.onSearch(enteredInput)
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Serch film by title</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Search</button>
    </form>
  );
};

export default SearchMovie;
