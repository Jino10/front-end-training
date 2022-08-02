function getValues()
{
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let age=document.getElementById("age").value;
    store({name,email,age});
}
function store(getObject)
{
    if(localStorage.getItem("details"))
    {
        let existingList=JSON.parse(localStorage.getItem("details"));
        existingList.push(getObject);
        localStorage.setItem("details",JSON.stringify(existingList));
    }
    else
    {
        localStorage.setItem("details",JSON.stringify([getObject]));
    }
    display();
}
function display()
{
    var final=JSON.parse(localStorage.getItem("details"));
    console.log(final);
}