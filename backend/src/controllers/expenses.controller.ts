async function getAllExpenses(req, res, next) {
    try {
      const expenses = [{type: "food", amount:3.5, date:"03-03-2022" }, {type: "tech", amount:39.99, date:"01-02-2022" }, {type: "travel", amount:10.15, date:"05-02-2022" } ]
      console.log("expenses required")
      res.send(expenses);
      next();
    } catch {
      console.info("No expenses registered");
      next();
    }
  }

  export const expensesController = { getAllExpenses}