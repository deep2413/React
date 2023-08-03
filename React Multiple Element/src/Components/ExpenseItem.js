import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props){
    
    return(

        <div>
           <Card className="container-fluid">
               <div className="row bg-primary pb-3 pt-3 p-2">
                 <ExpenseDate date={props.date}/>
                 <div className="col-md-8  second-column text-center fw-bold">
                   {props.title}
                 </div>
                 <div className="col-md-2  third-column fw-bold">
                   <div className='third-column-text d-flex justify-content-center align-item-center pt-2'>
                    <h3>${props.amount}</h3>
                   </div>
                 </div>
              </div>
           </Card>

        </div>

    );
};

export default ExpenseItem;
