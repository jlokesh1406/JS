/* 


1.what is DOM
2.What is node and type of node
3.selecting elements using DOM
    1.getElementsById()
    2.getElementsByName()
    3.getElementsByTagName()
    4.getElementsByClassName()
    5.querySelector()
    6.querySelectorAll()
4.Tranversing elements
    1.selecting parent element
    2.selecting child element
    3.selecting silbling elements
5.Manipulating HTML elements
    1.createElement()
    2.appendChild()
    3.textContent()
    4.innerHTML
    5.after
    6.append()
    7.prepend()
    8.insertAdjacentHTML()
    9.replaceChild()
    10.cloneNode()
    11.removeChild()
    12.insertBefore()
6.Attribute methods
    1.getAttribute()
    2.setAttribute()
    3.hasAttribute()
    4.removeAttribute()
7.Manipulating Element's styles
    1.style property
    2.cssText()
    3.getComputedStyle()
    4.className property
    4.classList property
8.Javascript Events
    1.What is event
    2.Event Bubbling & Event Capturing
    3.Event Handler int HTML Attributes
    4.DOM Level 0 event handlers
    5.addEvenListener()
    6.removeEventListener()
    7.Event Objects
    8.Different Type of Event
*/

//1.
//  The Document Object Model(DOM) is an application programming interface(API) for manipulating HTML documents
//   The DOM provides funtcions that allow you to add,remove,modify parts of the documents by effective



  //1.selecting elements using DOM
    //1.getElementsById()
    let msg1 = document.getElementById("getId1");
    console.log(msg1);//null

//2.getElementsByName()
    let msg2 = document.getElementsByName("temp1");  
    console.log(msg2);  //NodeList(2) [input#gebn, input#gebn]
    console.log(msg2[0]);//<input type="text" name="temp1" id="gebn" value="lokesh">

//3.getElementsByTagName()
    let msg3 = document.getElementsByTagName("h1");
    console.log(msg3); //HTMLCollection(6) [h1, h1, h1, h1, h1, h1]
    console.log(msg3[0]); // <h1> 1.getElementsById() </h1>

//4.getElementsByClassName()
    let msg4 = document.getElementsByClassName("msg");
    console.log(msg4);//HTMLCollection(3) [h2.msg, h2.msg, h2.msg]
    console.log(msg4[0]);//<h2 class="msg">first</h2>

    let temp1 = document.getElementById("inner");
    let msg5  = temp1.getElementsByClassName("msg1");
    console.log(msg5); //HTMLCollection(2) [h2.msg1, h2.msg1]
    
//5.querySelector()
    let msg6 = document.querySelector(".QS");
    console.log(msg6); //<h1 class="QS">LOKESH</h1>

//6.querySelectorAll()
    let msg7 = document.querySelectorAll(".QSA");
    console.log(msg7);//NodeList(3) [h1.QSA, h1.QSA, h1.QSA]
    console.log(msg7[2]); //<h1 class="QSA">LOKESH3</h1>

// 2.Tranversing elements
// 1.selecting parent element
    let msg8 = document.querySelector(".spe");
    console.log(msg8.parentNode);//<div class="spe_container">…</div>

//2.selecting child elements
    let msg9 = document.querySelector(".sce_container1");
    let temp2 = msg9.firstElementChild; 
    console.log(temp2);//<p>lokeh 1</p>

    let temp3 = msg9.lastElementChild; 
    console.log(temp3);//<p>lokeh 4</p>

    let msg10 = document.querySelector(".sce_container1");
    let temp4 = msg10.childNodes; 
    console.log(temp4);//NodeList(9) [text, p, text, p, text, p, text, p, text]

    let msg11 = document.querySelector(".sce_container2");
    let temp5 = msg11.childNodes; 
    console.log(temp5);//NodeList(4) [p, p, p, p]

    // sibling
    let msg12 = document.querySelector(".second");
    console.log(msg12.nextElementSibling); //<p>lokeh 3</p>
    console.log(msg12.previousElementSibling); //<p>lokeh 1</p>

// 5.Manipulating HTML elements
    let div = document.createElement("div");
    div.innerHTML="<p>APPENDING</p>";
    div.className="append1";
    div.style.color="red";
    document.body.append(div);
    console.log(div);//<div class="append1" style="color: red;">…</div>

    //2.appenfchils
    let temp6 = document.getElementById("menu1");
    let li = document.createElement("li");
    li.innerHTML="project";
    temp6.appendChild(li);
    console.log(temp6);//<ul id="menu1">..</ul>
    console.log(temp6.textContent);
    //        home
    //     about
    //     blog
    //  project
    console.log(temp6.innerText);
    // home
    // about
    // blog
    // project

    // let menu = document.getElementById("menu1");
    // menu.textContent="LOKESH";  // lokesh show list of elments

    // let menu = document.getElementById("menu1");
    // menu.textContent="<h1>LOKESH</h1>";  // <h1>LOKESH</h1> show list of elments

    // let menu = document.getElementById("menu1");
    // menu.innerHTML="<h1>LOKESH</h1>";  // lokesh show list of elments

    //--after---
    let menu2 = document.getElementById("menu2");
    menu2.before("Lokesh ","Jayaseelan1");
    menu2.after("Lokesh ","Jayaseelan2");
    menu2.append("Lokesh ","Jayaseelan3");
    menu2.prepend("Lokesh ","Jayaseelan4");

    // insertAdjacentHtml
    let menu4 = document.getElementById("menu4");
    menu4.insertAdjacentHTML("afterbegin","<li>loki1</li>");
    menu4.insertAdjacentHTML("afterend","<li>loki2</li>");
    menu4.insertAdjacentHTML("beforebegin","<li>loki3</li>");
    menu4.insertAdjacentHTML("beforeend","<li>loki4</li>");

    //10.cloneNode() copy of another node
    let newmenu1 = menu4.cloneNode();
    console.log(newmenu1); //<ul id="menu4"></ul>

    let newmenu2 = menu4.cloneNode(true);
    console.log(newmenu2); //<ul id="menu4">..... </ul>

    let newmenu3 = menu4.cloneNode(false);
    console.log(newmenu3); //<ul id="menu4"></ul>


    //11.removechild

    let removechild1 = document.getElementById("menu4");
    console.log(removechild1.innerText);
    //loki1
    // home
    // about
    // blog
    // loki4
    removechild1.removeChild(removechild1.lastElementChild);
    console.log(removechild1);
    //loki1
    // home
    // about
    // blog

    let inputbox = document.getElementById("username");
    console.log(inputbox.attributes);//NamedNodeMap {0: type, 1: id, 2: placeholder, type: type, id: id, placeholder: placeholder, length: 3}
    console.log(inputbox.getAttribute("placeholder")); //username

    inputbox.setAttribute("class","username");
    console.log(inputbox);//<input type="text" id="username" placeholder="username" class="username">

    console.log(inputbox.hasAttribute("class")); //true
    console.log(inputbox.hasAttribute("style"));//false

    inputbox.removeAttribute("class");
    console.log(inputbox);//<input type="text" id="username" placeholder="username">
    console.log(inputbox.getAttribute("id")); //username




// 7.Manipulating Element's styles
// 1.style property
    let SP1=document.getElementById("SP1");
    console.log(SP1.style.backgroundColor);//red
    console.log(SP1.style.fontSize);//20px

    SP1.style.padding="10px";
    console.log(SP1);//<div style="background-color: red; font-size: 20px; padding: 10px;" id="SP1"> LOKESH </div>

    // 2.cssText

    let CT = document.getElementById("cssText");
    CT.style.margin="10px";
    CT.style.cssText+="width:100px; height:100px;";


    //3.className property
    let temp8 = document.getElementById("CNP");
    console.log(temp8);//<h1 id="CNP" class="main clasName1">GREAT</h1>

    temp8.classList = "lokesh";
    console.log(temp8);//<h1 id="CNP" class="lokesh">GREAT</h1>

    temp8.classList.add("new");
    console.log(temp8);//<h1 id="CNP" class="lokesh new">GREAT</h1>

    temp8.classList.add("new1","new2");
    console.log(temp8);//<h1 id="CNP" class="lokesh new new1 new2">GREAT</h1>

    temp8.classList.remove("new")
    console.log(temp8);//<h1 id="CNP" class="lokesh new1 new2">GREAT</h1>

    
    temp8.classList.remove("new1","new2")
    console.log(temp8);//<h1 id="CNP" class="lokesh">GREAT</h1>


        
    temp8.classList.replace("lokesh","GOAT")
    console.log(temp8);//<h1 id="CNP" class="GOAT">GREAT</h1>

    console.log(temp8.classList.contains("GOAT")); //true

    temp8.classList.toggle("GOAT");
    console.log(temp8);//<h1 id="CNP" class>GREAT</h1>

    temp8.classList.toggle("GOAT");
    console.log(temp8); //<h1 id="CNP" class="GOAT">GREAT</h1>

    temp8.classList.toggle("new");
    console.log(temp8); //<h1 id="CNP" class="GOAT new">GREAT</h1>

    temp8.classList.toggle("new");
    console.log(temp8); //<h1 id="CNP" class="GOAT">GREAT</h1>

    // 8.Javascript Events
    // 1.What is event
    function error_msg()
    {
        console.log("--Button2 Click--");
    }

    let temp9 = document.getElementById("loki1");
    temp9.onclick = function()
    {
        console.log("--hello--");
        console.log(this.id);
    }

    //2.addeventlistner
    let temp10 = document.getElementById("AE_1");
    temp10.addEventListener("click",function()
    {
        console.log("--addeventlistner1---");
    })


    let temp11 = document.getElementById("AE_2");
    temp11.addEventListener("click",function(event)
    {
        console.log("---c---");  
    })

    function dd()
    {
        console.log("---c1---");
    }
    let temp12 = document.getElementById("AE_3");
    temp12.addEventListener("click",dd);

    let temp13 = document.getElementById("AE_4");
    temp13.addEventListener("click",dd);
    temp13.removeEventListener("click",dd);

