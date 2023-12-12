// for main
const   FormIndex = document.createElement('section');

FormIndex.innerHTML = `
<section class="container">   

<main class="box2">
    <h3>Contact Norwich Local Sustainability Advsiory Comitee</h3>
    <div>
        <p class="form">
            required information is marked with an asterisk (*)
        </p>
        <form action="" method="post" id="form">
            <fieldset>
                
            <legend>Contact form
                <i class="fa-brands fa-wpforms"></i>
            </legend>
            

            

            <label for ="name"> Name* <i class="fa-solid fa-signature"></i> :</label>
            <input id = "name" type="text" name="name" size = "25" required autocomplete="on" /> 
            
            <label for = "email" >Email* <i class="fa-regular fa-envelope" alt="Email"></i> :</label>
            <input id = "email" type="email" required autocomplete="on"/>
            
        
            <label for = "message">Message <i class="fa-regular fa-message"></i> :</label>
            <textarea id = "message" type="text" required> </textarea> 
            <button id = "submit" type="submit">Send Now  <i class="fa-regular fa-paper-plane"></i> </button>
            <div id = "render" ></div>
            </fieldset>
            </form>
        
        

    
</main>
        



        
      

</div>
</section>
<Footer><p>Copyright ©2022 Norwich Local Sustainability Advsiory Comitee <a href="mailto:pbv23ueu@uea.ac.uk">Fudail Ahmed</a></p></Footer>
`
  



  
   

const FormLoading = document.querySelector("body")
FormLoading.appendChild(FormIndex)