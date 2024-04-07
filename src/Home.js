import { useState } from 'react';
import logo from './logo-01.png';
import toofless from './toofless.png';
import wendy from './wendy.png';
import note from './note.png';
import Swal from 'sweetalert2';

export default function Home() {

  const [start, setStart] = useState(0)
  const [input, setInput] = useState('')

  function switchToInput() {
    setStart(1);
  }

  function switchToHome() {
    setStart(0);
  }

  function checkInput(){
    if(input.toUpperCase() === 'ERI-04081999'){
      Swal.fire({
        title: "Blob blob!",
        text: "You've obtained Wendy's mini-album! :0",
        imageUrl: wendy,
        imageHeight: 200,
        confirmButtonText: "Next",
        confirmButtonColor: "#3987e7",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "m l e m",
            html: "You've obtained <b>Toofless!</b> :3",
            imageUrl: toofless,
            imageHeight: 200,
            confirmButtonText: "Next",
            confirmButtonColor: "#3987e7",
            allowOutsideClick: false,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "keke =w=",
                text: "A special note that wasn't included in the physical package :>",
                imageUrl: note,
                imageHeight: 200,
                confirmButtonText: "Read note",
                allowOutsideClick: false,
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "🌻",
                    html: "<em>My dearest love, my sunflower,</em><br><br> Happiest birthday, my love. You are my moon, my constant, who always keeps me company even through my darkest nights, and never fail to light them up. I’m so grateful to be loved by someone so kind, understanding, patient, and generous. You’re a quarter century old now babie, and look at how far you’ve come and grown! But I know you’re also just getting started on your journey at malayo pa ang iyong mararating :> Know that I will always be proud of you and support you in all your endeavors. I’ll always be here rooting for you mahal, no matter how far the destination. Anyways, let’s celebrate this special day as it is your day. Have a wonderful one my love and wishing you more birthdays to come. I love you immensely.<br><br><b>n 3 n</b>",
                    allowOutsideClick: false,
                    showCloseButton: true,
                    showConfirmButton: false
                  })
                }
            })
            }
        })

        }
      })
    } else {
      Swal.fire({
        title: "Oh no!",
        text: "Promo code invalid :(( Please try again!",
        icon: "error",
        confirmButtonColor: "#3987e7",
      });
    }


  }

  return (
    <div className="content">
        {(start === 1) &&
        <button className='btn-crc' onClick={switchToHome}>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M13.729 5.575c1.304-1.074 3.27-.146 3.27 1.544v9.762c0 1.69-1.966 2.618-3.27 1.544l-5.927-4.881a2 2 0 0 1 0-3.088l5.927-4.88Z" clipRule="evenodd"/>
        </svg>

        </button>}
        <div className="container">
            <img src={logo} className="logo" alt="logo" />
            {!start ?
            <button className='btn' onClick={switchToInput}>Blob blob!</button>
            :
            <div className='container'>
              <input placeholder = "Enter promo code" onChange = {(e) => setInput(e.target.value)}/>
              <div>
                <button className='btn' onClick={checkInput}> Proceed </button>
              </div>
            </div>
            }
        </div>
    </div>
  );
}
