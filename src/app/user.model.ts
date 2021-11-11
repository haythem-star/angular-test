export class User {
    public id: string | undefined;
    public name: string | undefined;
    public next_payment: Date | undefined;
    public amount: number | undefined;
    public validation: Date | undefined;
    public last_payment: Date | undefined;
    public recurring_period: number | undefined;
    public verified: string | undefined;

    constructor(id : string,name : string,next: Date,amount : number,valid : Date,last : Date,recurring : number,verified: string){
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.next_payment = next;
        this.amount =amount;
        this.validation = valid;
        this.last_payment = last;
        this.recurring_period = recurring;
        this.verified = verified;
    }
}