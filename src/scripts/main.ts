import {sayHello} from './hello';
import {printVars} from './basic-types';

function showHello (divName:string,name:string){
    const ele = document.getElementById(divName);
    ele.innerHTML = sayHello(name) + "<br/><br/>" + printVars();
}

showHello("hello","Neo!");