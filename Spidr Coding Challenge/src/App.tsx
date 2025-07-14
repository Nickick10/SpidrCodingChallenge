import './App.css'
import spidrLogo from './assets/spidr.png'
import spidrTitle from './assets/spidrTitle.png'
import airfryer from './assets/airfryer.png'
import React from 'react';

function App() {
  const [buttonText, setButtonText] = React.useState('Submit');
  const [formData, setFormData] = React.useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    airFryerCost: '',
    spidrPin: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Only log to console if all fields are filled
    const hasBlank = Object.values(formData).some(v => v.trim() === '');
    if (!hasBlank) {
      console.log(formData);
      setButtonText('Submitted to Console!');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <>
      <div className='page-background'>

        <div> {/* Top Left Spidr Logo */}
          <img src={spidrLogo} alt="Spidr Logo" className='spidr-logo' />
          <img src={spidrTitle} alt="Spidr Logo" className='spidr-title-logo' />
        </div>

        <div className='form-and-image-container'>
          <form className='centered-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              
              <label htmlFor="airFryerCost" className='form-text'>Guess the air fryer’s cost (dollar amount):</label>
              <input 
                type="number" 
                id="airFryerCost" 
                name="airFryerCost" 
                className='form-input'
                placeholder="Enter your guess"
                min="0"
                value={formData.airFryerCost}
                onChange={handleChange}
              />

              <label htmlFor="name" className='form-text'>Name:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className='form-input'
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />

              <label htmlFor="lastName" className='form-text'>Last Name:</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                className='form-input'
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
              />

              <label htmlFor="phone" className='form-text'>Phone Number:</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className='form-input'
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />

              <label htmlFor="email" className='form-text'>Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className='form-input'
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

              <label htmlFor="spidrPin" className='form-text'>A very, very secret 16-digit Spidr PIN:</label>
              <input 
                type="text" 
                id="spidrPin" 
                name="spidrPin" 
                className='form-input'
                placeholder="####-####-####-####"
                maxLength={19}
                pattern="\d{4}-\d{4}-\d{4}-\d{4}"
                inputMode="numeric"
                value={formData.spidrPin}
                onChange={handleChange}
              />

              <button type="submit" className='form-submit'>{buttonText}</button>
            </div>
          </form>

          <div className='airfryer-image-container'>
            <div className='airfryer-image-text'>Try to guess the cost of this air fryer! <br></br> Good Luck!</div>
            <img src={airfryer} alt="Airfryer" className='airfryer-image' />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
