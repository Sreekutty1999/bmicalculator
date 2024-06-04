import { useState } from 'react';
import './App.css';

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiValue, setBmiValue] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");

  const handleReset = () => {
    setHeight("");
    setWeight("");
    setBmiValue("");
    setBmiMessage("");
  }

  const calculateBMI = (e) => {
    e.preventDefault(); // Prevent form submission
    if (height && weight) {
      const heightInMeter = height / 100;
      const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);

      setBmiValue(bmi);

      if (bmi < 18.5) {
        setBmiMessage("You are underweight.");
      } else if (bmi >= 18.5 && bmi < 25) {
        setBmiMessage("You are normal weight.");
      } else if (bmi >= 25 && bmi < 30) {
        setBmiMessage("You are overweight.");
      } else {
        setBmiMessage("You are obese.");
      }
    } else {
      setBmiValue("");
      setBmiMessage("");
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}>
      <div className='bg-light p-4 rounded' style={{ width: '500px' }}>
        <h1>BMI Calculator</h1>
        <h4 className='text-primary fw-100'>Check your ideal weight at a glance</h4>
        <form className='mt-5'>
          <div className="input-container mb-3 shadow">
            <label className='height'>Enter Your Height <span className='text-danger'>(cm)</span>:</label>
            <input type="number" name="height" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <br />

          <div className="input-container mb-3 shadow">
            <label className='weight'>Enter Your Weight <span className='text-danger'>(kg)</span>:</label>
            <input type="number" name="weight" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <br />

          <div className='d-flex justify-content-between w-100 mt-4'>
            <button className='calculate-btn btn btn-success shadow' onClick={calculateBMI}>Calculate BMI</button>
            <button className='reset-btn btn btn-warning shadow' onClick={handleReset}>Reset BMI</button>
          </div>

          {bmiValue && bmiMessage && (
            <div className="result mt-3">
              <p>Your BMI is: <span className='bmi-value'>{bmiValue}</span></p>
              <p>Result: <span className='bmi-message'>{bmiMessage}</span></p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default App;
