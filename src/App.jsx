
import './App.css'
import Button from './Components/Button/Button'
import ContactForm from './Components/ContactForm/ContactForm'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import Navigation from './Components/Navigation/Navigation'

function App() {
  return (
    <>
     <Navigation />
     <main className='main_container'>
     <ContactHeader />
     <ContactForm />
     </main>
    </>
  )
}

export default App
