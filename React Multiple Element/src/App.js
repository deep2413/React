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

const App = () => {

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
                <ExpensesComp item={expense}/>
              </div>
    )      
   
}

export default App;
