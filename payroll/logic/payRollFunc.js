function payRollFunc(emp,grade){
    //let employee = {emp_name:'suresh',emp_contact_no:'7066936671',emp_DOB:'2002-10-15',emp_state:'maharashtra',emp_city:'pune',emp_DOJ:'2020-10-15',Dept_id:'1'};
    //let pay_grade = {grade_name:'GRA1',grade_basic:'10000',grade_da:'500',grade_ta:'500',grade_bonus:'1000',grade_pf:'1500',Dept_id:'1'};
    // console.log(emp);
    // console.log(grade);


    let payroll = new Object();
    payroll.emp_net_sal=grade[0].grade_basic;
    payroll.reinbursment_dat='2019-05-29';
    payroll.emp_gross=grade[0].grade_basic+grade[0].grade_da+grade[0].grade_ta+grade[0].grade_bonus-grade[0].grade_pf;
    payroll.emp_sal_month=grade[0].grade_basic;
    payroll.emp_sal_year=grade[0].grade_basic*12;
    payroll.emp_id=emp[0].emp_id;
    payroll.grade_id=grade[0].grade_id;

    console.log(payroll);

    return payroll;

}
module.exports = payRollFunc;