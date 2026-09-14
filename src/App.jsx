import Entry from "./Entry"
import data from "./data"
export default function App(){
  
  const ans =data.map((entry)=>{
    return (
      <Entry
        key={entry.id}
        entry={entry}
      />
    )
  })
  return (
    <>
    <header>
      <img src="https://files.softicons.com/download/toolbar-icons/vista-base-software-icons-2-by-icons-land/ico/Globe2.ico" alt="globe icon"/>
      <span>Travel journal</span>
    </header>
    <main>
      {ans}
    </main>
    </>
  )
}