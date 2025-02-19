import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componenti/Card.jsx'
{/*import TodoList from './componenti/stato/Todolist.jsx'
import UserProfile from './componenti/stato/UserProfile.jsx'*/}
//import Parent from './componenti/ChildtoParent/Parent.jsx'
import Parent2 from './componenti/ChildtoParent/Parent2.jsx'

function alertClick(){
  alert ("CIAOOO");
}

function handleChange(e){
  console.log(e)
}

function handleSubmit(e){
  e.preventDefault()
  console.log(e)
}

function App() {
  const [count, setCount] = useState(0)
  const personaggi=[
    {
      id:0,
      name:"Nonna Papera",
      desc:"Nonna Papera è la classica signora di campagna, arzilla nonostante l'età.",
      img:"NonnaPapera",
      isTopo: false
    },
    {
      id:1,
      name:"Ciccio",
      desc:"Ciccio è di indole estremamente bonaria, difficile da infastidire, ancor più difficile da far arrabbiare.",
      img:"Ciccio",
      isTopo: false
    },
    {
      id:2,
      name:"Paperino",
      desc:"Paolino Paperino (Paperopoli 9 giugno 1920), semplicemente noto come Paperino.",
      img:"Paperino",
      isTopo: false
    },
    {
      id:3,
      name:"Paperon De Paperoni",
      desc:"Paperon de' Paperoni (Glasgow, 1867; in originale Scrooge McDuck).",
      img:"PaperonDePaperoni",
      isTopo: false
    },
    {
      id:4,
      name:"Topolino",
      desc:"Topolino è un piccolo topo antropomorfo caratterizzato dalle iconiche grandi orecchie tonde, coda filiforme e piccolo muso sporgente.",
      img:"Topolino",
      isTopo: true
    },
    {
      id:5,
      name:"Minni",
      desc:"Minni viene creata da Walt Disney e Ub Iwerks nel 1928, contemporaneamente a Topolino.",
      img:"Minni",
      isTopo: true
    }
  ]

  return (
    <>

      {/*<TodoList></TodoList>
      <UserProfile></UserProfile>*/}
      {/*<Card img="NonnaPapera" titolo="Nonna Papera" descrizione="Nonna Papera è la classica signora di campagna, arzilla nonostante l'età."/>
      <Card img="Ciccio" titolo="Ciccio" descrizione="Ciccio è di indole estremamente bonaria, difficile da infastidire, ancor più difficile da far arrabbiare." />
      <Card img="Paperino" titolo="Paperino" descrizione="Paolino Paperino (Paperopoli 9 giugno 1920), semplicemente noto come Paperino." />
      <Card img="PaperonDePaperoni" titolo="Paperon de Paperoni"  descrizione="Paperon de' Paperoni (Glasgow, 1867; in originale Scrooge McDuck)."/>*/}

      <Parent2></Parent2>

      {personaggi.filter((personaggio) => personaggio.isTopo).map((personaggio) =>(
        <Card key={personaggio.id}
        titolo={personaggio.name}
        descrizione={personaggio.desc}
        img={personaggio.img}/>
      ))}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={(alertClick)}>
          alert
        </button>
        <input type="text" onChange={handleChange}/>
        <form onSubmit={handleSubmit}>
          <button type='submit'> Clicca Qui </button>
        </form>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
