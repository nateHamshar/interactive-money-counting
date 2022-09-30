import './App.css';
import { useState } from 'react';



function App() {

  const [goal, setGoal] = useState(0);
  const [current, setCurrent] = useState(0);

  const [hundred, setHundred] = useState(0);
  const [fifty, setFifty] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [ten, setTen] = useState(0);
  const [five, setFive] = useState(0);
  const [one, setOne] = useState(0);

  const [quarter, setQuarter] = useState(0);
  const [dime, setDime] = useState(0);
  const [nickel, setNickel] = useState(0);
  const [penny, setPenny] = useState(0);


  const handleReset = () => {
    setCurrent(0)
    setHundred(0)
    setFifty(0)
    setTwenty(0)
    setTen(0)
    setFive(0)
    setOne(0)
    setQuarter(0)
    setDime(0)
    setNickel(0)
    setPenny(0)
  }
  const handleNext = () => {
    if (parseInt(current) === parseInt(goal)) {
      alert("Nice Job!")
      handleReset()
      setGoal((Math.random() * 1000).toFixed(2))
    } else  if (parseInt(current) < parseInt(goal)) {
      alert("You still need to add $" + (parseFloat(goal).toFixed(2) - parseFloat(current).toFixed(2)).toFixed(2) + "!")
    } else if (parseInt(current) > parseInt(goal)) {
      alert("You need to take away $" + (parseFloat(current).toFixed(2) - parseFloat(goal).toFixed(2)).toFixed(2) + "!")
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////          SECTION FOR UPDATING AMOUNT OF BILLS       ////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////

  const increaseBy100 = () => {
    setHundred(hundred + 1)
    setCurrent(current + 100)
  }
  const decreaseBy100 = () => {
    if (hundred) {
      setHundred(hundred - 1)
      setCurrent(current - 100)
    } else return;
  }
  const increaseBy50 = () => {
    setFifty(fifty + 1)
    setCurrent(current + 50)
  }
  const decreaseBy50 = () => {
    if (fifty) {
      setFifty(fifty - 1)
      setCurrent(current - 50)
    } else return;
  }
  const increaseBy20 = () => {
    setTwenty(twenty + 1)
    setCurrent(current + 20)
  }
  const decreaseBy20 = () => {
    if (twenty) {
      setTwenty(twenty - 1)
      setCurrent(current - 20)
    } else return;
  }
  const increaseBy10 = () => {
    setTen(ten + 1)
    setCurrent(current + 10)
  }
  const decreaseBy10 = () => {
    if (ten) {
      setTen(ten - 1)
      setCurrent(current - 10)
    } else return;
  }
  const increaseBy5 = () => {
    setFive(five + 1)
    setCurrent(current + 5)
  }
  const decreaseBy5 = () => {
    if (five) {
      setFive(five - 1)
      setCurrent(current - 5)
    } else return;
  }
  const increaseBy1 = () => {
    setOne(one + 1)
    setCurrent(current + 1)
  }
  const decreaseBy1 = () => {
    if (one) {
      setOne(one - 1)
      setCurrent(current - 1)
    } else return;
  }
  ////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////          SECTION FOR UPDATING AMOUNT OF COINS       ////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////

  const increaseByQuarter = () => {
    setQuarter(quarter + 1)
    setCurrent(current + .25)
  }
  const decreaseByQuarter = () => {
    if (quarter) {
      setQuarter(quarter - 1)
      setCurrent(current - .25)
    } else return;
  }
  const increaseByDime = () => {
    setDime(dime + 1)
    setCurrent(current + .10)
  }
  const decreaseByDime = () => {
    if (dime) {
      setDime(dime - 1)
      setCurrent(current - .10)
    } else return;
  }
  const increaseByNickel = () => {
    setNickel(nickel + 1)
    setCurrent(current + .05)
  }
  const decreaseByNickel = () => {
    if (nickel) {
      setNickel(nickel - 1)
      setCurrent(current - .05)
    } else return;
  }
  const increaseByPenny = () => {
    setPenny(penny + 1)
    setCurrent(current + .01)
  }
  const decreaseByPenny = () => {
    if (penny) {
      setPenny(penny - 1)
      setCurrent(current - .01)
    } else return;
  }


  return (
    <div className="App" id='screen'>
      <div className="titleDiv">
        <h1 className="title">Practice Counting Money!</h1>
      </div>
      <div className="totalsArea">
        <section className="goalSection totals">
          <h1 className="goalHeader">Goal</h1>
          <p className="goalNumber number">${goal}</p>
        </section>
        <section className="buttonArea totals">
          <button className="resetBtn" onClick={() => {handleReset()}}>Reset</button>
          <button className="nextBtn" onClick={() => {handleNext()}}>Next</button>
        </section>
        <section className='currentSection totals'>
          <h1 className="currentHeader">Current</h1>
          <p className="currentNumber number">${current.toFixed(2)}</p>
        </section>
      </div>
      <div className="billsArea">
        <div className="hundred">
          <h1>$100</h1>
          <button className="increaseBtn" onClick={() => {increaseBy100()}}>+</button>
            <h3 className='hundred-amount amounts'>{hundred}</h3>
          <button className="decreaseBtn" onClick={() => {decreaseBy100()}}>-</button>
        </div>
        <div className="fifty">
          <h1>$50</h1>
          <button className="increaseBtn" onClick={() => {increaseBy50()}}>+</button>
          <h3 className='fifty-amount amounts'>{fifty}</h3>
          <button className="decreaseBtn" onClick={() => {decreaseBy50()}}>-</button>
        </div>
        <div className="twenty">
          <h1>$20</h1>
          <button className="increaseBtn" onClick={() => {increaseBy20()}}>+</button>
          <h3 className='twenty-amount amounts'>{twenty}</h3>
          <button className="decreaseBtn" onClick={() => {decreaseBy20()}}>-</button>
        </div>
        <div className="ten">
          <h1>$10</h1>
          <button className="increaseBtn" onClick={() => {increaseBy10()}}>+</button>
          <h3 className='ten-amount amounts'>{ten}</h3>
          <button className="decreaseBtn" onClick={() => {decreaseBy10()}}>-</button>
        </div>
        <div className="five">
          <h1>$5</h1>
          <button className="increaseBtn" onClick={() => {increaseBy5()}}>+</button>
          <h3 className='five-amount amounts'>{five}</h3>
          <button className="decreaseBtn" onClick={() => {decreaseBy5()}}>-</button>
        </div>
        <div className="one">
          <h1>$1</h1>
          <button className="increaseBtn" onClick={() => {increaseBy1()}}>+</button>
          <h3 className='one-amount amounts'>{one}</h3>
          <button className="decreaseBtn" onClick={() => {decreaseBy1()}}>-</button>
        </div>
      </div>
      <div className="coinsArea">
        <div className="quarter">
          <h1>.25</h1>
          <button className="increaseBtn" onClick={() => {increaseByQuarter()}}>+</button>
          <h3 className='quarter-amount amounts'>{quarter}</h3>
          <button className="decreaseBtn" onClick={() => {decreaseByQuarter()}}>-</button>
        </div>
        <div className="dime">
          <h1>.10</h1>
          <button className="increaseBtn" onClick={() => {increaseByDime()}}>+</button>
          <h3 className='dime-amount amounts'>{dime}</h3>
          <button className="decreaseBtn" onClick={() => {decreaseByDime()}}>-</button>
        </div>
        <div className="nickel">
          <h1>.05</h1>
          <button className="increaseBtn" onClick={() => {increaseByNickel()}}>+</button>
          <h3 className='nickel-amount amounts'>{nickel}</h3>
          <button className="decreaseBtn" onClick={() => {decreaseByNickel()}}>-</button>
        </div>
        <div className="penny">
          <h1>.01</h1>
          <button className="increaseBtn" onClick={() => {increaseByPenny()}}>+</button>
          <h3 className='penny-amount amounts'>{penny}</h3>
          <button className="decreaseBtn" onClick={() => {decreaseByPenny()}}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
