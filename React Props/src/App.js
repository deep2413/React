import ExpenseItem from "./Components/ExpenseItem";

// method 1

// function App(){
//     let expenseDate = new Date(2021, 0 , 28);
//     let expenseTitle = "Car Insurance";
//     let expenseAmount = 300;
//     return (
//         <div>
//             <ExpenseItem 
//                date={expenseDate} 
//                title={expenseTitle} 
//                amount={expenseAmount}>
//             </ExpenseItem>
//         </div>
        
//     )
// };

// method 2 with array

function App(){

    const expense = [
        {
            Id : 'e1',
            title : 'Car Insurance',
            amount : 400,
            date : new Date(2021, 0, 28)

        },
        {
            Id : 'e2',
            title : 'School Fees',
            amount : 100,
            date : new Date(2021, 1, 8)

        },
        {
            Id : 'e3',
            title : 'Home Rent',
            amount : 200,
            date : new Date(2021, 1, 18)

        },
        {
            Id : 'e4',
            title : 'Trip Expenses',
            amount : 230.4,
            date : new Date(2021, 2, 10)

        },

    ]

    return (
                <div>
                    <h1>Expense Detail</h1>
                   <ExpenseItem 
                       date={expense[0].date} 
                      title={expense[0].title} 
                      amount={expense[0].amount}>
                     </ExpenseItem>

                     <ExpenseItem 
                       date={expense[1].date} 
                      title={expense[1].title} 
                      amount={expense[1].amount}>
                     </ExpenseItem>

                     <ExpenseItem 
                       date={expense[2].date} 
                      title={expense[2].title} 
                      amount={expense[2].amount}>
                     </ExpenseItem>

                     <ExpenseItem 
                       date={expense[3].date} 
                      title={expense[3].title} 
                      amount={expense[3].amount}>
                     </ExpenseItem>
               </div>
    )      
   
}

export default App;