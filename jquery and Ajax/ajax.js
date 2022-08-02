function show()
{
    let id=$("#user").val();
    let title=$("#title").val();
    let body=$("#body").val();
    let details={};
    details.id=id;
    details.title=title;
    details.body=body;
    console.log(details);
    api();
    
}
function api()
{
    $.ajax({
            url:"https://jsonplaceholder.typicode.com/posts",
            type:"post",
            data:"details",
            success:function(res)
                    {
                        console.log("Success");
                        $("#out").html("Success");
                    },
            error:function(err)
                 {
                    console.log(err);
                 }   

          });
}
function getData()
{
    $.ajax({
          url:"https://jsonplaceholder.typicode.com/posts",
          type:"get",
          success:function(response){
            console.log(response);
            let tr_container="";
            for(let i=0;i<response.length;i++)
            {
              tr_container+=`<tr>
                             <td>${response[i].id}</td>
                             <td>${response[i].userId}</td>
                             <td>${response[i].title}</td>
                             <td>${response[i].body}</td>
                             </tr>`
                             
            }
            $("#content").html(tr_container);
          }
    })
}