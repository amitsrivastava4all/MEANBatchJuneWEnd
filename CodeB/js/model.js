const salaryOperations = {
    basicSalary:0,
    /*takeSalary:function(){

    }*/
    takeSalary(salary){
        this.basicSalary = salary;
    },
    hra(){
        return this.basicSalary * 0.30;
    },
    da(){
        return this.basicSalary * 0.20;
    },
    ta(){
        return this.basicSalary * 0.10;
    },
    pf(){
        return this.basicSalary * 0.05;
    },
    gs(){
        return this.basicSalary + this.hra() + this.da() + this.ta() - this.pf();
    },
    tax(){
        return this.gs() * 0.10;
    },
    ns(){
        return this.gs() - this.tax();
    }

}