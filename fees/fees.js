
const express = require('express');
const router = express.Router();

const totalFee = 100000;


router.get('/remaining-fee/:id', (req, res) => {
  const studentId = Number(req.params.id);
 
  const students = [
    {
      Id: 1,
      Name: "Pankaj Pawar",
      ModeOfPayment: "cash",
      Amount_youPay: 20000,
    },
    {
      Id: 2,
      Name: "Sham Pawar",
      ModeOfPayment: "card",
      Amount_youPay: 30000,
    },
    {
      Id: 3,
      Name: "Sagar Khemnar",
      ModeOfPayment: "UPI",
      Amount_youPay: 40000,
    },
    {
      Id: 4,
      Name: "Abhishek Jondhle",
      ModeOfPayment: "cheque",
      Amount_youPay: 50000,
    },
    {
      Id: 5,
      Name: "Rushikesh D Pawar",
      ModeOfPayment: "cash",
      Amount_youPay: 100000,
    },
  ];
  const student = students.find(student => student.Id === studentId);

  if (!student) {
    res.sendStatus(404);
    return;
  }

  const remainingFee = totalFee - student.Amount_youPay;

  res.json({
    Name: student.Name,
    TotalFee:totalFee,
    Amount_youPay: student.Amount_youPay,
    remainingFee: remainingFee
  });
});



module.exports = router;
//http://localhost:3001/api/remaining-fee/2