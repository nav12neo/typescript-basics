import {sayHello} from './hello';

function showHello (divName:string,name:string){
    const ele = document.getElementById(divName);
    ele.innerHTML = sayHello(name);
}

showHello("hello","Naveen!");