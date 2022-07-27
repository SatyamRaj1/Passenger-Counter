# Creating button in HTML
*all codes are in code folder*
### HTML  
- in html file `create Increment button with id Increment-btn`
  	in body part write following
		==\<button id = 'Increment-btn'>INCREMENT<\/button>==
		displayed as -> <button id = 'Increment-btn'>INCREMENT</button>
		- *Increment -> name of button  , id -> used for operating/using*	
- for styling use CSS , write following code
		button {
					border: none; 
					padding-top: 10px;
					padding-bottom: 10px;
					color: white;
					font-weight: bold;
					width: 200px;
					margin-bottom: 5px;
					border-radius: 5px;
				}
				
		#increment-btn {
							background: darkred;
							}
		#save-btn {
					background: darkgreen;
					}

					
# making button interactive
steps to be followed ->
- initialise count as 0
- find out when button is clicked
- increase count by 1 whenever button is clicked
- change the count-ht in HTML to reflect count

step 1-3:
- in HTML change button line as
	==\<button id='Increment-btn' onclick='increment()'>Increment<\/button>==
	displayed as -><button id='Increment-btn' onclick='increment()'>Increment</button>
 			*when button will be clicked increment() function will be called*
- create function increment in javascript
	function increment(){
	count += 1;
	}
	


## Reflecting changes in HTML document
- take out element from Javascript which needed to be updated
    - element in HTML which is displayed as counter  
    	==<\h2 id="count-el">0<\/h2>==
		displayed as -> <h2 id="count-el">0</h2> **this headings id is "count-el" so we can obtain it in Javascript by it's ID**
		`to get` -> ==let countEl = document.getElementById("count-el")==
		document - get from HTML document
		getElementById -> to get element
		`to update` -> ==document.getElementById("count-el").innerText=new_variable;==
				or by from above -> ==countEl.innerText=count;==
		*use these in increment function*		
		***cameCase naming system -> in every next letter first letter will be capital***
		
		# Impleting save Button
		- create a save button to save previous in console
		- make save button in HTML with id save-btn with onclick=save()
		`in HTML` 
		==\<button id="save-btn" onclick="save()">Save<\/button>==
		use this to make save button 
		`to display saved value`
		### M1
		==<\h3 id="previous-val">Previous Entry:<\/h3>==
		define h3 in CSS
		*h3 {
				font-size: 30px;
				margin-top: 0;
				margin-bottom: 20px;
			}*
		### M2
		directly use paragraph tag so no need to style
		==<\p id = "previous-val">Previous Entry: </\p>==
		
		`in JavaScript make save()`
		- save function shoud change value of id "previous-val" to current count
		let prev=document.getElementById("previous-val");
		==function save(){
							let str = " " + count + " -";
							prev.innerText += str;
							}==
		- innertext is having problems with `spaces`  as it shows only human readable format and not hidden elements and also is aware of styling so it is better to use ==textContent== in place of that in this situation
		==str = count + " - " 
		prev.textContent += str;==
		- to make count = 0 whenever save() is called add these lines in save function
		==count = -1;
			increment();==
			OR
			==count = 0;
				countEl.textContent = 0;==
		
		
		