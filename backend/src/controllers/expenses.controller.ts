const Expenses = require("../models/Exprenses")

  async function getAllExpenses(req, res, next){
    try{
    const allExpenses = await Expenses.find()
    res.send(allExpenses)
    console.info(allExpenses)
    next()
    }
    catch{
        console.info("Couldnt retrieve expenses")
    }
}

async function createExpense(req, res, next){
  try {
      const newExpense = new Expenses();
          newExpense.year = req.body.year;
          newExpense.month = req.body.month;
          newExpense.day = req.body.day;
          newExpense.hour = req.body.hour;
          newExpense.minutes = req.body.hour;
          newExpense.order= req.body.year.toString() + req.body.month + req.body.day + req.body.hour + req.body.minutes;
          newExpense.type = req.body.type;
          newExpense.amount = req.body.amount;
          newExpense.description = req.body.description;
          newExpense.isHouseExpense = req.body.isHouseExpense;
      const savedExpense = await newExpense.save();
      res.send({ Data: savedExpense._id, newExpense });
      console.log("New expense saved correctly");
    } catch (err) {
      console.error(err);
      res.send("Error saving new expense");
    }
}

async function deleteExpense(req, res, next) {
  const id = req.params.id;
  await Expenses.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete expense with id=${id}.`,
        });
      } else {
        res.send({
          message: "Expense was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete electricity bill data entry with id=" + id,
      });
    });
}


export const expensesController = { getAllExpenses, createExpense, deleteExpense}