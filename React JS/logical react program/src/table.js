import {useState} from 'react';
function TableContent()
{
    const[search,setSearch]=useState('');
    const [listTable,setTable]=useState([
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ]);
  return(
    <div> 
         <input type="text" placeholder='Search...' className='form-control' style={{marginTop:40,marginBottom:30,width:"50%" }} onChange={(e)=>{setSearch(e.target.value)}}/>
        <table className='table table-striped'>
            <thead className='thead-dark'>
                <th>Category</th>
                <th>Price</th>
                <th>Stocked</th>
                <th>Name</th>
            </thead>
            <tbody>
                    {
                      listTable.filter((listTable)=>{
                      if(search=="")
                      {
                        return listTable;
                      }  
                      else if(listTable.name.toLowerCase().includes(search.toLowerCase()))
                      {
                        return listTable;
                      }
                      }).map((t)=>
                      <tr key={t.id}>
                      <td>{t.category}</td>
                      <td>{t.price}</td>
                      <td>{t.stocked.toString()}</td>
                      <td>{t.name}</td>
                      </tr> )
                    }
            </tbody>
        </table>
    </div>
  );
}
export default TableContent;