import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './component/FirstComponent';

let a: number | null = 10;
let name: string = 'it-kamasutra';
let isSamurai: boolean | null = true;
isSamurai = null;

let sex: 'male' | 'female';
// sex = 'man';   

let names: Array<string> = ["Ivan", "Viktor", "Valera"];
// another way to explicitly type let names2: string[] = ["Dimych", "Viktor", "valera"];
alert(names[0].toUpperCase())

type AddresesType = {
  city?: string | null // city is not necessary because of - ?
  country: string | null
}

type UserType = {
  sayHello: (message: string) => void
  name: string
  age: number
  isSamurai: boolean
  address: AddresesType | null
}

let user: UserType = {
  sayHello(messga: string) { alert('yo') },
  name: "Ivan",
  age: 30,
  isSamurai: true,
  address: {

    country: "Russia"
  }
}


// type InitialType = {
//   name: string
//   age: number
//   isSamurai: boolean
//   address: AddressType | null
//   counter: number
// }

export type InitialStateType = typeof initialState; // InitialType replaces InitialStateType

let initialState = {
  name: null as string | null,
  age: null as number | null,
  isSamurai: null as boolean | null,
  addreses: [] as Array<AddresesType>,
  counter: 0
}

let state: InitialStateType = {
  isSamurai: true,
  name: null,
  age: null,
  addreses: [{
    country: "cc",
    city: "eee"
  }],
  counter: 10
}

let GET_TASKS = "APP/GET_TASKS";
type GetTasksActionType = {
  id: number,
  type: typeof GET_TASKS
}
let action: GetTasksActionType = {
  type: GET_TASKS,
  id: 12
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <FirstComponent />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
