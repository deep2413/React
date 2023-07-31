import './ExpenseItem.css';

function ExpenseItem(props){
    const month = props.date.toLocaleString('en-US',{month: 'long'}) ;
    const year =  props.date.getFullYear();
    const day=  props.date.toLocaleString('en-US',{day: '2-digit'}) ;
    return(

        <div>
           
           <div className="container-fluid">
            
               <div className="row bg-primary pb-3">
                 <div className="col-md-2 first-column text-center fw-bold ">
                  <div>{ month + "/" }</div>
                  <div>{ day + "/"}</div>
                  <div>{ year }</div>
                 </div>
                 <div className="col-md-8 second-column text-center fw-bold">
                   {props.title}
                 </div>
                 <div className="col-md-2  third-column fw-bold">
                   <div className='third-column-text d-flex justify-content-center align-item-center pt-2'>
                    <h3>${props.amount}</h3>
                   </div>
                 </div>
              </div>
           </div>

        </div>

    );
};

export default ExpenseItem;