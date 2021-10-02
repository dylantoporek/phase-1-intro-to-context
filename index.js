
  
  
// function payRollSystem(){
  
//   }
  
//   function createEmployeeRecord(array){
//       return {
//         firstName: array[0], 
//         familyName: array[1], 
//         title: array[2], 
//         payPerHour: array[3], 
//         timeInEvents: [],
//         timeOutEvents: []
//       }
    
    
      
//     }
    
//     //createEmployeeRecord(testEmployee)
    
    
    
//     //let employeeRecord = {}
//     function createEmployeeRecords(array){
//        return array.map(employee => {
//           return createEmployeeRecord(employee)
        
          
      
        
//       })
      
//     //console.log(array)
//     }

    

//     // function createTimeInEvent(employeeObj, date){
//     //   let dateHour = date.split(' ')
//     //   employeeObj.timeInEvents.push({
//     //     type: 'TimeIn',
//     //     hour: parseInt(dateHour[1]),
//     //     date: dateHour[0]
//     //   })
//     //   return employeeObj;
//     // }
    
  

//   let createTimeInEvent = function(employee, dateStamp){
//     let [date, hour] = dateStamp.split(' ')

//     employee.timeInEvents.push({
//         type: "TimeIn",
//         hour: parseInt(hour, 10),
//         date,
//     })

//     return employee
// }

// let createTimeOutEvent = function(employee, dateStamp){
//     let [date, hour] = dateStamp.split(' ')

//     employee.timeOutEvents.push({
//         type: "TimeOut",
//         hour: parseInt(hour, 10),
//         date,
//     })

//     return employee
// }

// //   function createTimeOutEvent(employeeObj, date){
// //     let dateHour = date.split(' ')
// //       employeeObj.timeOutEvents.push({
// //         type: 'TimeOut',
// //         hour: parseInt(dateHour[1]),
// //         date: dateHour[0]
// //       })
// //       //console.log(employeeObj['timeInEvents'][0]['hour'])
// //       return employeeObj
      
// //   }





// function hoursWorkedOnDate(employeeObj, date){
//   var inDate = employeeObj.timeInEvents.find(date =>{
//       return date.date = date
//   })
//   var outDate = employeeObj.timeOutEvents.find(date =>{
//       return date.date = date
//   })

//   return ((outDate.hour - inDate.hour)/100)
// }
  
  





// function wagesEarnedOnDate(employeeObj, date){
//   let hoursWorked = hoursWorkedOnDate(employeeObj, date);
//     return parseFloat((hoursWorked * employeeObj['payPerHour']).toString())
// }

// // wagesEarnedOnDate(
// //   {
// //   firstName: 'Julius',
// //   familyName: 'Caesar',
// //   title: 'General',
// //   payPerHour: 27,
// //   timeInEvents: [ { type: 'Time In', hour: '0900', date: '0044-03-15' } ],
// //   timeOutEvents: [ { type: 'Time Out', hour: '1100', date: '0044-03-15' } ]
// // }, '0044-03-15'
// // )

// // function allWagesFor(employeeObj){
// //     for(i = 0; i < employeeObj['timeInEvents'].length; i++ ){
// //       console.log(employeeObj['timeInEvents'][i]['date'])
// //       console.log(wagesEarnedOnDate(employeeObj, (employeeObj['timeInEvents'][i]['date']).toString()))
// //       }
// //     }
   

// function allWagesFor(obj){
//   let dates = obj.timeInEvents.map(function(e){
//     return e.date
//   })
//   console.log(dates)
//   let pay = dates.reduce((a, c) => {
//     return a + wagesEarnedOnDate(obj, c)
//   }, 0)
//   //console.log(pay)
//   return pay
// }

// // allWagesFor(
// //  {
// //   firstName: 'Julius',
// //   familyName: 'Caesar',
// //   title: 'General',
// //   payPerHour: 27,
// //   timeInEvents: [
// //     { type: 'Time In', hour: '0900', date: '0044-03-15' },
// //     { type: 'Time In', hour: '0900', date: '0044-03-14' }
// //   ],
// //   timeOutEvents: [
// //     { type: 'Time Out', hour: '1100', date: '0044-03-15' },
// //     { type: 'Time Out', hour: '2100', date: '0044-03-14' }
// //   ]
// // }
// // )

// // createTimeInEvent(
// //    {
// //   firstName: 'Julius',
// //   familyName: 'Caesar',
// //   title: 'General',
// //   payPerHour: 27,
// //   timeInEvents: [ { type: 'Time In', hour: '0900', date: '0044-03-15' } ],
// //   timeOutEvents: [ { type: 'Time Out', hour: '1100', date: '0044-03-15' } ]
// // }, "0044-03-14 0900"
// // )

// // createTimeOutEvent(
// //   {
// //   firstName: 'Julius',
// //   familyName: 'Caesar',
// //   title: 'General',
// //   payPerHour: 27,
// //   timeInEvents: [
// //     { type: 'Time In', hour: '0900', date: '0044-03-15' },
// //     { type: 'Time In', hour: '0900', date: '0044-03-14' }
// //   ],
// //   timeOutEvents: [ { type: 'Time Out', hour: '1100', date: '0044-03-15' } ]
// // }, "0044-03-14 2100"
// // )


// //"0044-03-14 2100"out
// //"0044-03-14 0900"in

// // {
// //   firstName: 'Julius',
// //   familyName: 'Caesar',
// //   title: 'General',
// //   payPerHour: 27,
// //   timeInEvents: [
// //     { type: 'Time In', hour: '0900', date: '0044-03-15' },
// //     { type: 'Time In', hour: '0900', date: '0044-03-14' }
// //   ],
// //   timeOutEvents: [
// //     { type: 'Time Out', hour: '1100', date: '0044-03-15' },
// //     { type: 'Time Out', hour: '2100', date: '0044-03-14' }
// //   ]
// // }




///////////////////////////////////////////////////////////////////////////////////
let createEmployeeRecord = function(row){
  return {
      firstName: row[0],
      familyName: row[1],
      title: row[2],
      payPerHour: row[3],
      timeInEvents: [],
      timeOutEvents: []
  }
}

let createEmployeeRecords = function(employeeRowData) {
  return employeeRowData.map(function(row){
      return createEmployeeRecord(row)
  })
}

let createTimeInEvent = function(employee, dateStamp){
  let [date, hour] = dateStamp.split(' ')

  employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
  })

  return employee
}

let createTimeOutEvent = function(employee, dateStamp){
  let [date, hour] = dateStamp.split(' ')

  employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
  })

  return employee
}
let hoursWorkedOnDate = function(employee, soughtDate){
  let inEvent = employee.timeInEvents.find(function(e){
      return e.date === soughtDate
  })

  let outEvent = employee.timeOutEvents.find(function(e){
      return e.date === soughtDate
  })

  return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function(employee, dateSought){
  let rawWage = hoursWorkedOnDate(employee, dateSought)
      * employee.payPerHour
  return parseFloat(rawWage.toString())
}

let allWagesFor = function(employee){
  let eligibleDates = employee.timeInEvents.map(function(e){
      return e.date
  })

  let payable = eligibleDates.reduce(function(memo, d){
      return memo + wagesEarnedOnDate(employee, d)
  }, 0)

  return payable
}

function calculatePayroll(array){
  let wages = []
  array.forEach(element => {
    wages.push(allWagesFor(element))
  })
  console.log(wages)
  return wages.reduce(function(a, b){
    console.log(a + b)
    return a + b
  })
    
}