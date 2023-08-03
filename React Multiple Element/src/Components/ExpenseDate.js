

const ExpenseDate = (props) => {

    const month = props.date.toLocaleString('en-US',{month: 'long'}) ;
    const year =  props.date.getFullYear();
    const day=  props.date.toLocaleString('en-US',{day: '2-digit'}) ;

    return(

        <div className="col-md-2 first-column text-center fw-bold ">
                  <div>{ month + "/" }</div>
                  <div>{ day + "/"}</div>
                  <div>{ year }</div>
        </div>
    );

};

export default ExpenseDate;
