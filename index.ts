import { MyInterface, BAR } from "./MyInterface";
import { MyOtherInterface, FOO } from "./MyOtherInterface"

class MyInstance implements MyInterface {
    doIt() {
        throw new Error("Method not implemented.");
    }
}

class MyOtherInstance implements MyOtherInstance {
    doIt() {
        throw new Error("Method not implemented.");
    }
}

class main {
    foo = FOO;
    bar = BAR;
    inst = new MyInstance();
    inst2 = new MyOtherInstance();
}