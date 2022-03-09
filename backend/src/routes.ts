const express = require("express");
const router = express.Router();
import {mainController} from "../src/controllers/mainController"

router.route("/api/areas").get(function(req, res){
    res.send("this a response for areas")
    console.log("areas")
})

router.route("/api/devices")
.get(mainController.devicesController.getAllDevices)
.post(function(req, res){
    res.send("create a new device")
})

router.route("/api/lights").get(function(req, res){
    res.send("these are all the lights")
})

router.route("/api/expenses")
.get(mainController.expensesController.getAllExpenses)
.post(mainController.expensesController.createExpense)

router.route("/api/expenses/:id")
.delete(mainController.expensesController.deleteExpense)
.get(mainController.expensesController.getOneExpense)

module.exports = router