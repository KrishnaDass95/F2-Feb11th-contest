/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  arr.map(function(student){
    if(student.marks > 50){
      console.log(student);
    }
  })
}

function PrintStudentsbyForEach() {
  arr.forEach(function (student){
    if(student.marks > 50){
      console.log(student);
    }
  })
}

function addData() {
  arr.push(
    {id:4,name:"susan",age:"20",marks:45}
  );
  console.log(arr[arr.length - 1]);
}

function removeFailedStudent() {
  // adding the indices of the students to be removed
  var toBeRemovedStudentIndex = [];
  arr.forEach(function(student, index){
    if(student.marks < 50){
      toBeRemovedStudentIndex.push(index);
    }
  })
  // lets reverse the array index from above so that splice function does not mess with index ordering
  toBeRemovedStudentIndex.reverse().forEach(function(index){
    arr.splice(index, 1);
  })
  // logging the passed students
  arr.forEach(function(student){
    console.log(student);
  })
}

function concatenateArray() {
  //Write your code here, just console.log
}
