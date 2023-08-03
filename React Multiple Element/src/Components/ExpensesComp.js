
import ExpenseItem from "./ExpenseItem";

const ExpensesComp = (props) => {

    return(

        <div >
        <h1>Expense Detail</h1>
       <ExpenseItem 
           date={props.item[0].date} 
          title={props.item[0].title} 
          amount={props.item[0].amount}>
         </ExpenseItem>

         <ExpenseItem 
           date={props.item[1].date} 
          title={props.item[1].title} 
          amount={props.item[1].amount}>
         </ExpenseItem>

         <ExpenseItem 
           date={props.item[2].date} 
          title={props.item[2].title} 
          amount={props.item[2].amount}>
         </ExpenseItem>

         <ExpenseItem 
           date={props.item[3].date} 
          title={props.item[3].title} 
          amount={props.item[3].amount}>
         </ExpenseItem>
   </div>

    )
};

export default ExpensesComp