import Header from "./components/Header"
import SalesCard from "./components/SalesCard"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function App() {
  return(
    <>
      <Header/>
      <main>
        <section>
            <SalesCard/>
        </section>
      </main>
    </>
  )
}

export default App
