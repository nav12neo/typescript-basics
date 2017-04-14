// generics where we can transfer the parameters of different types.
class Trigger<T> {
    triggerMessage: T;
    constructor(message: T) {
        this.triggerMessage = message; 
    }

    callTrigger() { 
        alert(this.triggerMessage); 
    };
}

// with string type
var a = new Trigger<string>('naveen');
a.callTrigger();

// with number type
var b = new Trigger<number>(1234);
b.callTrigger();


