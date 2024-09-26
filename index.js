// Q1. Create a Function

let Name = {
    name: "John",
    
  };
  
  function setter(NameObj){
    console.log(NameObj.name);
  }
  
  setter(Name);
  
  //Q2. Delete a Parameter
  
  let data = {
    name :"John",
    rollNo: 101
    
  };
  
  function delRoll(dataObj){
    delete dataObj.rollNo;
     return data;
  }
  delRoll(data);
  if (data.rollno===undefined){
      console.log("true");
  
  }else{
    console.log("false");
  }
  
  //Q3. Check whether the Package is Dream Package or not

  let pack ={
    salary : "400000"
  }

  function dreamPackage(packObj){
    if (packObj.salary >= 500000){
        console.log("Dream Package");
    }else{
        console.log("Not Dream Package");
    }

  }

  dreamPackage(pack);

//Q4. Check whether the Object has a parameter or not

  function checkObject(obj) {
    
    if (Object.keys(obj).length === 0) {
        return false;
    } else {
        return true;
    }
}


console.log(checkObject({}));
console.log(checkObject({ name: 'John', age: 25 })); 

// Q5. Merge the Objects

let data1={name:"Aman",id:101};
let data2={city:"Haryana",pin:110096};

function mergeObjects(obj1,obj2){
    let employee = Object.assign(obj1, obj2);
    console.log(employee);
}

mergeObjects(data1,data2);

// Q6. Object Multiplyer

let detail_ad ={id:prompt("enter id") , houseNo:prompt("enter house no.")};
let n=prompt("enter number to multiply");

function mutliplyer(num,delObj){
    delObj.id=delObj.id*num;
    delObj.houseNo=delObj.houseNo*num;
    return detail_ad;
}

console.log(mutliplyer(n,detail_ad));

// Q7. Find the sum of Object Members

let number = {p1:12,p2:10,p3:20};
let sum=0;

function check(numObj){
    sum=numObj.p1+numObj.p2+numObj.p3;
    return sum;
}

console.log(check(number));

// Q8. Check whether the Objects are same or not.

let dataset={name:prompt("enter name"),id:prompt("enter id")};

function sameObject(nm,id,dSetObj){
    if(dSetObj.name==nm && dSetObj.id==id){
        console.log("True");
    }else{
        console.log("False");
    }
}

(sameObject("Aman",101,dataset));
