let m = document.getElementById("select");
// m.addEventListener("click",myfunction());
var select = document.getElementById("select");
const months = ["January","February","March","April","May","June","July","August","September","October","November","Decmeber"];
    for(let a=0; a<months.length;a++)
    {
        var option = document.createElement("option");
            txt=document.createTextNode(months[a]);
            option.appendChild(txt);
            select.insertBefore(option,select.lastChild)
    }
    var date = new Date();
    var year =date.getFullYear();
    var firstdate = new Date(year,date.getMonth()-1).getDay();
    var lastdate = new Date(year,date.getMonth()+1,0).getDate();
    console.log(firstdate);
    console.log(lastdate);
    
    document.getElementsByTagName("td").innerHTML = " ";    
    let k=1; 
    let z=firstdate;
for(let i=1;i<6;i++)
{
    var row= document.createElement("tr");
    
         for(let s=1; s<=firstdate; s++)
                {
                 var cell = document.createElement("td");
                cell.innerHTML="";
                if(i!=1)
                {
                    z=0;
                    break;
                }
                 row.appendChild(cell);
                }
   
        
                        for(let j=1;j<31; j++)
                        {
                                            
                            if(j>=8-z)
                                {
                                  var row = document.createElement("tr");
                                }
                             
                 
                                 else if(k <=31)
                                 {
                                     var cell = document.createElement("td");
                                     var cellText = document.createTextNode(k);
                                     cell.appendChild(cellText);
                                     row.appendChild(cell);
                                     table.appendChild(row);
                                     k++;   
                                 }
                           }
            
}
