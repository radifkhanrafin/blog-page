import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Main_Page from './Component/Main Page/Main_Page'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from './Component/Question/Question';
function App() {

  return (
    <div className="App">
     <div className='w-11/12 mx-auto'>
     <Header></Header>
      <Main_Page></Main_Page>
      <ToastContainer></ToastContainer>
      <Question></Question>
     </div>
    </div>
  )
}

export default App
