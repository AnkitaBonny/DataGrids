var details = [
    {   name: "Europe",
        plan: "$10,525,200",
        forecast: "$12,700,200",
        bestcase: [
            {id: "$12,700,200" },
            {id: "$11,700,400" }
        ],
       commit: [
            {id: "$1" },
            {id: "$2" }
        ],
        monthlyplan: "Yes",
        comments:"a"
    },
    {
        name: "Belgium",
        plan: "$2,525,200",
        forecast: "$3,125,200",
         bestcase: [
            {id: "$2,900,450" },
            {id: "$2,890,120" }
        ],
         commit: [
            {id: "$12,700" },
            {id: "$11,700" }
        ],
        monthlyplan: "No",
        comments:"b"
    },
    {
        name: "England",
        plan: "$4,600,400",
        forecast: "$2,500,600",
         bestcase: [
            {id: "$3,900,300" },
            {id: "$2,900,300" }
        ],
         commit: [
            {id: "$700,200" },
            {id: "$700,400" }
        ],
        monthlyplan: "Yes",
        comments:"d"
    },
    {
        name: "Sweden",
        plan: "$2,425,200",
        forecast: "$5,425,200",
         bestcase: [
            {id: "$6,200,200" },
            {id: "$2,400,900" }
        ],
        commit: [
            {id: "$200" },
            {id: "$400" }
        ],        
        monthlyplan: "No",
        comments:"f"
    },
    {
        name: "Finland",
        plan: "$1,700,200",
        forecast: "$4,700,200",
         bestcase: [
            {id: "$4,702,120" },
            {id: "$4,300,200" }
        ],
         commit: [
            {id: "$12200" },
            {id: "$11400" }
        ],
        monthlyplan: "Yes",
        comments:"h"    
    }
];

window.onload = function(){
    createDataTable();
}



/*Creating DataGrid */
function createDataTable() {
var myDiv= document.getElementById("myDiv"); 
while (myDiv.firstChild) {
    myDiv.removeChild(myDiv.firstChild);
}
// Start reading JSON file and update grid accordingly
for(var i = 0; i < details.length; i++) {
var product = details[i];
if (i == 0){  //creating header grids
    var divh = document.createElement('div');
    var hatt = document.createAttribute("class");       
    hatt.value = "wrapperdiv";                         
    divh.setAttributeNode(hatt);
    var hidatt = document.createAttribute("id"); 
    hidatt.value = "wrapperheaderid" + i;  
    divh.setAttributeNode(hidatt);
    //console.log(hidatt.value);
    myDiv.appendChild(divh);
    var headerindex=0;
    var init =0;
    for (var headerkey in product) {         
        init++;
        var gridheader = document.createElement('div');
        var gridheaderatt = document.createAttribute("class");   
        gridheaderatt.value = "griddiv" + headerindex;                      
        gridheader.setAttributeNode(gridheaderatt);

        divh.appendChild(gridheader);
        //console.log("header:" + gridheaderatt.value);  
        gridheader.innerHTML = headerkey.toUpperCase();
        headerindex++;          
        if (init <6){                    
            if (init == 5){
                createDropdown();
                 gridheader.style.display = 'inline-block';                           
            }
            else {
                gridheader.style.display = 'inline-block';
            }
        }           
         else if (init >= 6){

                    gridheader.style.display = 'none';
        }             
    }

}

    // creating data grids

var initrow=0;
var div = document.createElement('div');
var att = document.createAttribute("class");       
att.value = "wrapperdiv";                         
div.setAttributeNode(att);

var idatt = document.createAttribute("id"); 
idatt.value = "wrapperid" + i;  
div.setAttributeNode(idatt);
console.log(idatt.value);
myDiv.appendChild(div);
var index= 0;
for (var key in product){
    initrow++;
    var grid = document.createElement('div');
    var gridatt = document.createAttribute("class");   
    gridatt.value = "griddiv" + index;                    
    grid.setAttributeNode(gridatt);
    div.appendChild(grid);
    //console.log("cells:" + gridatt.value);
    if ( (key == "bestcase")){
        var bIndex=0;
        product.bestcase.forEach(function(key) {
        //grid.innerHTML = key.id;
            var para = document.createElement("div");
            var paraatt = document.createAttribute("class");   
            paraatt.value = "paraindiv" + bIndex;                     
            para.setAttributeNode(paraatt);
            grid.appendChild(para);
            para.innerHTML = key.id;
            bIndex++

        });
    }

    else if ((key == "commit")){
        var pIndex=0;
        product.commit.forEach(function(key) {
            var para = document.createElement("div");
            var paraatt = document.createAttribute("class");   
            paraatt.value = "paraindiv" + pIndex;                     
            para.setAttributeNode(paraatt);
            grid.appendChild(para);
            para.innerHTML = key.id;
            pIndex++
        });

    }

    else {
        grid.innerHTML = product[key];
        index++;

    }

    if (initrow <6){
        grid.style.display = 'inline-block';
    }
    else{
        grid.style.display = 'none';
    }

}


}

}// end of createDataTable

/*Implementing more & less options*/

var more = document.getElementById("option1");
var less = document.getElementById("option2");

more.addEventListener("click", function() {
    var elems1 = document.getElementsByClassName('paraindiv0');
    for (var i=0;i<elems1.length;i+=1){
        elems1[i].style.display = 'block';
    }
    var elems2 = document.getElementsByClassName('paraindiv1');
    for (var i=0;i<elems2.length;i+=1){
        elems2[i].style.display = 'block';
    }

 });

less.addEventListener("click", function() {
    var elems1 = document.getElementsByClassName('paraindiv0');
    for (var i=0;i<elems1.length;i+=1){
        elems1[i].style.display = 'block';
        //elems1[i].style.margin = '5px';
    }
    var elems2 = document.getElementsByClassName('paraindiv1');
    for (var i=0;i<elems2.length;i+=1){
        elems2[i].style.display = 'none';
    }
});

/* First time DropDown content*/
function createDropdown() {
   
var gridhead = document.getElementsByClassName("griddiv4");
var gridheader = gridhead[0];
var dropdownDiv = document.createElement('div');
var dropdownDivAtt = document.createAttribute("class");   
dropdownDivAtt.value = "dropdown";                      
dropdownDiv.setAttributeNode(dropdownDivAtt);
gridheader.appendChild(dropdownDiv);
    
var dropButton = document.createElement("BUTTON");
var t = document.createTextNode("DropDown");
dropButton.appendChild(t);
var dropdownBtnAtt = document.createAttribute("class");   
dropdownBtnAtt.value = "dropbtn";
dropButton.setAttributeNode(dropdownBtnAtt);
dropButton.onclick = function() {
    var div = document.getElementById('dropdown-content');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }   
}
dropdownDiv.appendChild(dropButton);

var dropdownContent = document.createElement('div');
var dropdownContentAtt = document.createAttribute("id");   
dropdownContentAtt.value = "dropdown-content";
dropdownContent.setAttributeNode(dropdownContentAtt);
dropdownDiv.appendChild(dropdownContent);

var checkboxCount=0;
for (var key in details[0]) {
    checkboxCount++;
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.setAttribute("value", key);
    x.setAttribute("name", "props[]");
        //x.setAttribute("value", "key");
    var checkClass=document.createAttribute("class");
    checkClass.value="checkBoxClass";
    x.setAttributeNode(checkClass);
                            
    if(checkboxCount<6) {
            x.setAttribute("checked", "true");
    }

    dropdownContent.appendChild(x); 
    var t = document.createTextNode(key);
    dropdownContent.appendChild(t);

    var b = document.createElement("br");
    dropdownContent.appendChild(b);

}

 // limiting to select max 5 checkbox
checkgroup= document.getElementsByClassName("checkBoxClass");
for (var i=0; i<checkgroup.length; i++){
    checkgroup[i].onclick=function(){
        var checkedcount=0;
        for (var i=0; i<checkgroup.length; i++) {
            //console.log(checkgroup[i]);
            checkedcount+=(checkgroup[i].checked)? 1 : 0;
        }

        if (checkedcount>5){
            alert("You can only select a maximum of "+5+" checkboxes");
            this.checked=false;

        }
    }

} 
// creating apply button
var applyButton = document.createElement("BUTTON");
var t = document.createTextNode("Apply");
applyButton.appendChild(t);
var applyBtnAtt = document.createAttribute("id");   
applyBtnAtt.value = "applybtn";
applyButton.setAttributeNode(applyBtnAtt);
applyButton.onclick = function() {    
    var checkingArray = [];// array that will store the value of selected checkboxes
    var inpfields = document.getElementsByClassName('checkBoxClass');
    var nr_inpfields = inpfields.length;
          // traverse the inpfields elements, and adds the value of selected (checked) checkbox in selchbox
    for(var i=0; i<nr_inpfields; i++) {
        if(inpfields[i].type == 'checkbox' && inpfields[i].checked == true) checkingArray.push(inpfields[i].value);
    }
         
    var len = checkingArray.length;
    createNewTable(checkingArray, len);       
}
    dropdownContent.appendChild(applyButton);                        

} //end of createdropdown function

/* Check key of JSON object is present in array of checkbox value */
function isInArray(array, search)
{
      if (array.indexOf(search) >= 0) {
        return true;
     }
     else{
        return false;
     }
}


/* Every time User change Checkbox value, this function is called top create new Grid table
Passing Array of checkbox values and length of it*/
function createNewTable(checkArray, length) {
var lengthofArray = length;
console.log("array length: " +length);
var myDiv= document.getElementById("myDiv"); 
while (myDiv.firstChild) {
    myDiv.removeChild(myDiv.firstChild);
}

for(var i = 0; i < details.length; i++)
{
    console.log("json length:" + details.length);
    var product = details[i];

    if (i == 0){  //creating header grids
        var divh = document.createElement('div');
        var hatt = document.createAttribute("class");       
        hatt.value = "wrapperdiv";                         
        divh.setAttributeNode(hatt);

        var hidatt = document.createAttribute("id"); 
        hidatt.value = "wrapperheaderid" + i;  
        divh.setAttributeNode(hidatt);

        console.log(hidatt.value);
        myDiv.appendChild(divh);

        var headerindex=0;
        var init =0;
        for (var headerkey in product) {

            if(isInArray(checkArray, headerkey)) {
                init++;
                var gridheader = document.createElement('div');
                var gridheaderatt = document.createAttribute("class");   
                gridheaderatt.value = "griddiv" + headerindex;                      
                gridheader.setAttributeNode(gridheaderatt);
                divh.appendChild(gridheader);
                //console.log("header:" + gridheaderatt.value);
        
                gridheader.innerHTML = headerkey.toUpperCase();
                headerindex++;               
                if (init <6){ 
                    if (init == lengthofArray){
                        //var ind = init;
                        //var lengthofArray = checkArray.length
                        console.log("inside createNewTable:" + lengthofArray);
                        createNewDropdown(lengthofArray);
                        gridheader.style.display = 'inline-block';                          
                    }

                    else {
                        gridheader.style.display = 'inline-block';
                    }
                }            
                else if (init >= 6){
                    gridheader.style.display = 'none';
                }

            } //end of if check array          
        }
    }

    // creating data grids
    var initrow=0;
    var div = document.createElement('div');
    var att = document.createAttribute("class");       
    att.value = "wrapperdiv";                         
    div.setAttributeNode(att);

    var idatt = document.createAttribute("id"); 
    idatt.value = "wrapperid" + i;  
    div.setAttributeNode(idatt);
    console.log(idatt.value);

    myDiv.appendChild(div);
    var index= 0;

    for (var key in product){

    if(isInArray(checkArray, key)) {
        initrow++;
        var grid = document.createElement('div');
        var gridatt = document.createAttribute("class");   
        gridatt.value = "griddiv" + index;                    
        grid.setAttributeNode(gridatt);
        div.appendChild(grid);
        console.log("cells:" + gridatt.value);
     
        if ( (key == "bestcase")){
            var bIndex=0;
            product.bestcase.forEach(function(key) {
                var para = document.createElement("div");
                var paraatt = document.createAttribute("class");   
                paraatt.value = "paraindiv" + bIndex;                     
                para.setAttributeNode(paraatt);
                grid.appendChild(para);
                para.innerHTML = key.id;
                bIndex++

            });
        }

        else if ((key == "commit")){
                var pIndex=0;
                product.commit.forEach(function(key) {
                    var para = document.createElement("div");
                    var paraatt = document.createAttribute("class");   
                    paraatt.value = "paraindiv" + pIndex;                     
                    para.setAttributeNode(paraatt);
                    grid.appendChild(para);
                    para.innerHTML = key.id;
                    pIndex++
                });

        }
        else {
            grid.innerHTML = product[key];
            index++;
        }

        if (initrow <6){
             grid.style.display = 'inline-block';
        }
         else{
             grid.style.display = 'none';
        }

    }// end of if check array

    } // end of for


}

}// end of createnewtable

/* creating dropdown along with new table every time checkbox value changed.
Passing length of array of checkbox value*/
function createNewDropdown(ind) {
    var nam= "griddiv"+(ind-1);
    console.log("class name of last grids :" + nam);
    var gridhead = document.getElementsByClassName(nam);
    var gridheader = gridhead[0];
    console.log("grid heade value: " +gridheader );
    var dropdownDiv = document.createElement('div');
    var dropdownDivAtt = document.createAttribute("class");   
    dropdownDivAtt.value = "dropdown";                      
    dropdownDiv.setAttributeNode(dropdownDivAtt);
    gridheader.appendChild(dropdownDiv);
    
    var dropButton = document.createElement("BUTTON");
    var t = document.createTextNode("DropDown");
    dropButton.appendChild(t);
    var dropdownBtnAtt = document.createAttribute("class");   
    dropdownBtnAtt.value = "dropbtn";
    dropButton.setAttributeNode(dropdownBtnAtt);
    dropButton.onclick = function() {
        var div = document.getElementById('dropdown-content');
        if (div.style.display !== 'none') {
            div.style.display = 'none';
        }
        else {
            div.style.display = 'block';
        }   
    }
    dropdownDiv.appendChild(dropButton);

    var dropdownContent = document.createElement('div');
    var dropdownContentAtt = document.createAttribute("id");   
    dropdownContentAtt.value = "dropdown-content";
    dropdownContent.setAttributeNode(dropdownContentAtt);
    dropdownDiv.appendChild(dropdownContent);

    var checkboxCount=0;
    for (var key in details[0]) {
        checkboxCount++;
        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        x.setAttribute("value", key);
        x.setAttribute("name", "props[]");
        var checkClass=document.createAttribute("class");
        checkClass.value="checkBoxClass";
        x.setAttributeNode(checkClass);
                            

        if(checkboxCount<6) {
            x.setAttribute("checked", "true");
        }

        dropdownContent.appendChild(x); 
        var t = document.createTextNode(key);
        dropdownContent.appendChild(t);

        var b = document.createElement("br");
        dropdownContent.appendChild(b);

    }
 // limiting 5 checkbox
    checkgroup= document.getElementsByClassName("checkBoxClass");
    for (var i=0; i<checkgroup.length; i++){
            checkgroup[i].onclick=function(){
                var checkedcount=0;
                for (var i=0; i<checkgroup.length; i++) {
                    //console.log(checkgroup[i]);
                    checkedcount+=(checkgroup[i].checked)? 1 : 0;
                }

                if (checkedcount>5){
                    alert("You can only select a maximum of "+5+" checkboxes");
                    this.checked=false;

                }
            }

    } 

    // creating apply button
    var applyButton = document.createElement("BUTTON");
    var t = document.createTextNode("Apply");
    applyButton.appendChild(t);
    var applyBtnAtt = document.createAttribute("id");   
    applyBtnAtt.value = "applybtn";
    applyButton.setAttributeNode(applyBtnAtt);
    applyButton.onclick = function() {
        var checkingArray = [];// array that will store the value of selected checkboxes
        var inpfields = document.getElementsByClassName('checkBoxClass');
        var nr_inpfields = inpfields.length;
          // traverse the inpfields elements, and adds the value of selected (checked) checkbox in selchbox
        for(var i=0; i<nr_inpfields; i++) {
            if(inpfields[i].type == 'checkbox' && inpfields[i].checked == true) checkingArray.push(inpfields[i].value);
        }  
        var len = checkingArray.length;
        createNewTable(checkingArray, len);       
    }
    dropdownContent.appendChild(applyButton);                        

}

/**/




    