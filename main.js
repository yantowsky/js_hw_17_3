class BankAccount {
    constructor(funds) {
        this.funds = funds;
    }

    getBalance() {
        console.log('=============================================');
        return (this.funds < 0 || typeof (this.funds) !== 'number') ? `Ви ввели не корректне значення для депозиту` :
            (this.funds === 0) ? 'На Вашому рахунку нічого не залишилось' :
                `На Вашому рахунку: ${this.funds}`;
    }

    deposit(funds) {
        return (this.funds <= 0 || typeof (this.funds) !== 'number') ? console.log('Операція внесення коштів не можлива') :
            (funds <= 0 || typeof (funds) !== 'number') ? console.log('Ви ввели не корректне значення для внесення коштів') :
                this.funds += funds;
    }

    withdraw(funds) {
        return (this.funds <= 0 || typeof (this.funds) !== 'number') ? console.log('Операція зняття коштів не можлива') :
            (funds <= 0 || typeof (funds) !== 'number') ? console.log('Ви ввели не корректне значення для зняття коштів') :
                (this.funds < funds) ? console.log(`Недостатньо коштів на рахунку для зняття ${funds}`) :
                    this.funds -= funds;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300