// Write your solution in this file!
const employee = {
    name: "Jake Broffman",
    streetAddress: "131 Vandalia Street, Buffalo, NY, 14204"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};

function deleteFromEmployeeByKey(obj, key) {
let newEmployee ={...obj}
delete newEmployee[key]
return newEmployee
};

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    
    delete employee[key]
    return employee
};