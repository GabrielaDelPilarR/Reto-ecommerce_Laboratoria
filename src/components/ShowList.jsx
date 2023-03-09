export default function ShowList({products}) {

   
     return (
       <>
         <form action="" className='FormList'>
          <section className='ListContainer'>
             <table>
               <thead>
                 <tr>
                   <th className='titleList'>Productos</th>
                   <th className='titleList'>s/.</th>
                   <th className='titleList'></th>
                 </tr>
               </thead>
               <tbody>
                  
                   {products.map((prod,i) => {
                                                           
                     return (
                       
                       <tr key ={i}>
                         <td id= 'products'>{prod.title}</td>
                         <td id= 'total'>{(prod.price)*(prod.qty)}</td>
                         <td id= 'delete'>x</td>
                                                 
                       </tr>   
                     )})}
    
               </tbody>
             </table>
             <div>
                 <hr/>
                 <p><b>Total s/.{}</b></p>
             </div>
          </section>    
       </form>
     </>   
     )
   }