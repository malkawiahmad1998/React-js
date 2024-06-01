
import '../style/table.css';

function Table(){
    
        const items = 
        [
            {id:1,name:'ahmad',amount:100,spendDate:'2021-01-01' ,category:'category1'},
            {id:2,name:'ahmad',amount:100,spendDate:'2021-01-01' ,category:'category2'},
            {id:3,name:'ahmad',amount:100,spendDate:'2021-01-01' ,category:'category3'},
            {id:4,name:'ahmad',amount:100,spendDate:'2021-01-01' ,category:'category4'},
        ]
    
 

        var listItems = items.map(item=>(
            <tr className="bord">
                <td className="bord">{item.id}</td>
                <td className="bord">{item.name}</td>
                <td className="bord">{item.amount}</td>
                <td className="bord">{item.spendDate}</td>
                <td className="bord">{item.category}</td>
            </tr>
            
        ))

        return(
            <div className='a'>
                <table border='1'> 
                    <thead>
                        <tr className="bord">
                            <th className="bord">id</th>
                            <th className="bord">name</th>
                            <th className="bord">amount</th>
                            <th className="bord">spendDate</th>
                            <th className="bord">category</th>
                        </tr>
                    </thead>

                    <tbody id='tbody'> 
                        { listItems }
                    </tbody>
                </table>
            </div>
        )
}

export default Table;