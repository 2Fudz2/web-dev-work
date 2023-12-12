// for main
const MainIndex = document.createElement('section');

MainIndex.innerHTML = `
    
<section class="container">   
    
           
        
      
        
<main class="box1">
    
    <h2>What is the NLSAC</h2>
    <p>xxxx</p>
    <h3>Why is the NLSAC is important?</h3>
    <ul class="">
        <li>xxxx</li>
        <li>xxxx</li>
        <li>xxxx</li>
        <li>xxxx</li>
    </ul>
<section>
    <article class="service">
            <h3>Title</h3>
            <p>xxxxxxxx</p>
    </article>

    <article class="service">
        <h3>Title</h3>
        <p>xxxxxxxxxxxx</p>
    </article>
    <p><button class="btn">Sign Up/Login</button></p>


</main>


</section>
<Footer><p>Copyright ©2022 Norwich Local Sustainability Advsiory Comitee <a href="mailto:pbv23ueu@uea.ac.uk">NLSAC</a></p></Footer>
`
MainLoading = document.querySelector("body")
MainLoading.appendChild(MainIndex)

// for header

const HeaderIndex = document.createElement("header")

HeaderIndex.innerHTML = `

<h1>NLSAC</h1>

<nav id="mainNav">
    <ul>
     <li class = "nav active"><a href="index.html">Home</a></li>
     <li class = "nav"><a href="classes.html">Meet our Team</a></li>
     <li class = "nav"><a href="schedule.html">Goals</a></li>
     <li class = "nav"><a href="Forms.html">Sign Up</a></li>
    </ul> 
 </nav>

`
HeaderLoading = document.querySelector("head")
HeaderLoading.appendChild(HeaderIndex)
