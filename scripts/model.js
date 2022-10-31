//srp
//es6  object shorthand use


export const salaryOperations = {
    // key and value format;
    // hra:function(){

    // },
    // da:function(){

    // },
    // ta:function(){

    // }
    basicSalary:0,
    hra(){
       return this.basicSalary * 0.50; 
       //if we want to acess global var we need object. or this keyword otherwise it will take it as local variable which is var under the function
    },
    da(){
        return this.basicSalary * 0.20; 
    },
    ta(){
        return this.basicSalary * 0.30; 
    },
    ma(){
        return this.basicSalary * 0.25; 
    },
    pf(){
        return this.basicSalary * 0.05; 
    },
    tax(){
        return this.gs() * 0.10; 
    },
    gs(){
        return this.basicSalary + this.hra() + this.ma() + this.ta() + this.pf(); 
    },
    ns(){
        return this.gs() - this.tax() - this.pf();
    }
}
// export default salaryOperations;
// function hra(){ // attach window (current tab) overriding issue

// }

// function da(){

// }

// function ta(){

// }