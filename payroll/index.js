const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const payRollFunc = require('./logic/PayRollFunc');


const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'pass123',
    database : 'project'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MYSQL Connected...');
});

const app = express();

app.use(express.json());

app.use(cors())

//post emp
app.post('/api/addemployee',(req,res) => {
    //sample emp obj
    // let employee = {emp_name:'suresh',emp_contact_no:'7066936671',emp_DOB:'2002-10-15',emp_state:'maharashtra',emp_city:'pune',emp_DOJ:'2020-10-15',Dept_id:'1'};
    let employee = req.body;
    let sql = 'insert into employee set ?';
    let query = db.query(sql,employee,(err,result) => {
        if(err) throw err;

        // console.log(result);
        const emp_contact_no = employee.emp_contact_no;
        let sql = 'select * from employee where emp_contact_no = ?';
        db.query(sql,[emp_contact_no],(err,result) => {
            if(err) throw err;
            const emp = result;
            const dept_id=emp[0].Dept_id;
                let sql = 'select * from pay_grade where dept_id = ?';
            db.query(sql,[dept_id],(err,result) => {
                if(err) throw err;
                const grade = result;
                let payroll = payRollFunc(emp,grade);
                // console.log(payroll);
                let sql = 'insert into payroll set ?';
                db.query(sql,payroll,(err,result) => {
                    if(err) throw err;
                    console.log(result);
                });
            });
        });


        res.send('employee added ...');
    });
})

// post dept
app.post('/api/adddept',(req,res) => {
    //sample dept obj
    console.log(req.body);
    let department = req.body;
    let sql = 'insert into department set ?';
    let query = db.query(sql,department,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('department added ...');
    });
})

//post paygrade
app.post('/api/addpaygrade',(req,res) => {
    //sample paygrade obj
    // let pay_grade = {grade_name:'GRA1',grade_basic:'10000',grade_da:'500',grade_ta:'500',grade_bonus:'1000',grade_pf:'1500',Dept_id:'1'};
    console.log(req.body);
    let pay_grade = req.body;
    let sql = 'insert into pay_grade set ?';
    let query = db.query(sql,pay_grade,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('paygrade added ...');
    });
})


//get payroll
app.get('/api/getpayroll/:id',(req,res) => {
    const emp_id = req.params.id;
    let sql = 'select * from payroll where emp_id = ?';
    let query = db.query(sql,[emp_id],(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
})


app.listen('3000',()=>{
    console.log('server started on port 3000');
});
