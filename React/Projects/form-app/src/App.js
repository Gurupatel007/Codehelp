import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setformData] = useState({ firstName: "", lastName: "", email: "",country : "", address: "", city:"" , state: "", zipcode: "" ,emailViaComments : false, emailViaCandidates : false, emailViaOffers : false, notificationVia: "" });
  console.log(formData);

  function changeHandler(event) {
    const { name, type, checked, value } = event.target;
    setformData(prevformData => {
      return {
        ...prevformData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the entire form data")
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <section className='inputSection'>
          <label htmlFor='firstName'>First name</label>
          <input type='text' name='firstName' value={formData.firstName} id='firstName' placeholder='Guru' onChange={changeHandler} />
          <br></br>

          <label htmlFor='lastName'>Last name</label>
          <input type='text' name='lastName' id='lastName' value={formData.lastName} placeholder='Patel' onChange={changeHandler} />
          <br></br>

          <label htmlFor='email'>Email address</label>
          <input type='email' name='email' id='email' value={formData.email} placeholder='gurupatel21@gnu.ac.in' onChange={changeHandler}/>
          <br></br>

          <label>Country</label>
          <select name='country' onChange={changeHandler}>
            <option value='India'>India</option>
            <option value='USA'>USA</option>
            <option value='UK'>UK</option>
          </select>
          <br></br>

          <label>Street address</label>
          <textarea name='address' value={formData.address} placeholder='Enter your address here' onChange={changeHandler}></textarea>
          <br></br>

          <label>City</label>
          <input type='text' name='city' value={formData.city} placeholder='Ahmedabad' onChange={changeHandler} />
          <br></br>

          <label>State / Province</label>
          <input type='text' name='state' value={formData.state} placeholder='Gujarat' onChange={changeHandler} />
          <br></br>

          <label>Postal / Zip code</label>
          <input type='text' name='zipcode' value={formData.zipcode} placeholder='380015' onChange={changeHandler} />
          <br></br>
        </section>

        <section className='checkboxSection'>
          <label>By Email</label>
          <div className='checkbox'>
            <input type='checkbox' name='emailViaComments' id='comments' onChange={changeHandler} checked = {formData.emailViaComments} />
            <label htmlFor="comments">
              <p><b>Comments</b></p>
              <p className='fade'>Get notified when someones posts a comment on a posting.</p>
            </label>
          </div>

          <div className='checkbox'>
            <input type='checkbox' name='emailViaCandidates' id='candidates' onChange={changeHandler} checked={formData.emailViaCandidates} />
            <label htmlFor="candidates">
              <p><b>Candidates</b></p>
              <p className='fade'>Get notified when a Candidate applies for a job.</p>
            </label>
          </div>

          <div className='checkbox'>
            <input type='checkbox' name='emailViaOffers' id='offers' onChange={changeHandler} checked={formData.emailViaOffers} />
            <label htmlFor="offers">
              <p><b>Offers</b></p>
              <p className='fade'>Get notified when Candidate accepts or rejects a offer.</p>
            </label>
          </div>
        </section>


        <section className='radioSection'>
          <label>Push Notifications</label>
          <p className='fade'>These are delivered via SMS to your mobile phone.</p>
          <br></br>

          <input type='radio' name='notificationVia' value="Everything" id='Everything' onChange={changeHandler} checked={formData.notificationVia === "Everything"}/>
          <label htmlFor='Everything'>Everything</label>
          <br></br><br></br>
          
          <input type='radio' name='notificationVia' value="SameAsEmail" id='SameAsEmail' onChange={changeHandler} checked={formData.notificationVia === "SameAsEmail"} />
          <label htmlFor='SameAsEmail'>Same as email</label>
          <br></br><br></br>

          <input type='radio' name='notificationVia' value="NoNotification" id='NoNotification' onChange={changeHandler} checked={formData.notificationVia === "NoNotification"} />
          <label htmlFor='NoNotification'>No push notification</label>
        </section>

        <br></br>
        <button className='btn'>Save</button>
      </form>
    </div>
  );
}

export default App;
