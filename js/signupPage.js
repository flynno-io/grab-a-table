// js/signupPage.js

class SignupPage extends HTMLElement {
	constructor() {
		super()
	}

    static css = `
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    }

 section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: gray;
    }
    
    .wrapper{
    width: 420px;
    background: orange;
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;
    } 
    .wrapper h1 {
    font-size: 30px;
    text-align: center;
    }

    .wrapper .input-box {
    width: 100%;
    height: 50px;
    background: orange;
    }

    .input-box input {
    width: 100%;
    height:100%;
    background: transparent;
    border:none;
    outline: none;
    border: 2px solid gray;
    border-radius: 40px;
    font-size: 16px;
    color:black;
    padding: 20px 45px 20px 20px;
    }

    .input-box input::placeholder {
    color: black;
    }

    .input-box i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform:translateY(-50%);
    font-size: 20px;
    }
    .wrapper .btn {
    width: 100%;
    height: 45px;
    background: white;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px black;
    cursor: pointer;
    font-size: 15px;
    color: black;
    font-weight: 600;
    }

    `

    render() {
        this.innerHTML = `
            <style>${SignupPage.css}</style>
            <section>
             <body>
             <div class="wrapper">
            <form action="">
            <h1> Signup </h1>
            <div class="input-box">
            <input type="text" placeholder="Username" id="username1">
            </div>
            <div class="input-box">
            <input type="email" placeholder="Email" id="email1">
            </div>
           <div class="input-box">
            <input type="Password" placeholder="Password" id="password1">
            </div>
             <div class="input-box">
            <input type="Password" placeholder="Repeat Password" >
            </div>
            <button type="submit" class="btn">Signup</button>
            </form>
            </div>
            </div>
            </body>
            </section>
        `
    }

    connectedCallback() {
        this.render()

        //select variable to select required elements in the reservation form
        const Username = document.querySelector("#username1");
        const email = document.querySelector("#email1");
        const pass = document.querySelector("#password1");
        const signupButton = document.querySelector(".btn");

        // TODO: update code to meet Javascript naming conventions and remove unused code.
        //function to grab the entries in the reservation form and save it in local storage. The function also shows an error if the user has left any field blank.

        function signup(event) {
            event.preventDefault();
            if (!Username.value || !email.value || !pass.value) { // FIXME: updated 'result' to correct element being selectdatatime
            //   let element = document.querySelector ('#error');
            //   element.innerHTML = "All fields are mandatory. Update fields and resubmit";
            //   element.style = "color:red";
            //  return;
            //    }
            const signupData = {
                username: document.getElementById("username1").value,
                email: document.getElementById("email1").value,
                password: document.getElementById("pass1").value,
            };
            localStorage.setItem("signupData", JSON.stringify(signupData));
            // window.location.href = "reservationconfirmation.html";
        //window.location.hash = "#/confirmation"


            }   
        }
        signupButton.addEventListener('click', signup);
    }
}
customElements.define("signup-page", SignupPage)


