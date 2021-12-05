//task 1

let customConcoleObject = {
    clear: function (message) {
        console.clear('Custom log', message)
    }
}
customConcoleObject.clear('Hello World');
console.log('');



let customConcoleObject1 = {
    log: function (message) {
        console.log('Custom log', message)

    }

}
customConcoleObject1.log('Hello World');
console.log('');


let customConcoleObject2 = {
    error: function (message) {
        console.error('Custom log', message)
    }
}
customConcoleObject2.error('Hello World');
console.log('');


let customConcoleObject3 = {
    warn: function (message) {
        console.warn('Custom log', message)
    }
}
customConcoleObject3.warn('Warning');
console.log('');


let customConcoleObject4 = {
    count: function (message) {
        console.count('Custom log', message)
    }
}
customConcoleObject4.count('Hello World');
console.log('');


let customConcoleObject5 = {
    dir: function (message) {
        console.dir('Custom log', message)
    }
}
customConcoleObject5.dir('Say Hello');
console.log('');



let customConcoleObject6 = {
    dirxml: function (message) {
        console.dirxml('Custom log', message)
    }
}
customConcoleObject6.dirxml('Say Hello');
console.log('');


let customConcoleObject7 = {
    group: function (message) {
        console.group('Custom log', message)
    }
}
customConcoleObject7.group('Hello World');
console.log('');


let customConcoleObject8 = {
    table: function (message) {
        console.table('Custom log', message)
    }
}
customConcoleObject8.table('Hello World');
console.log('');


let customConcoleObject9 = {
    info: function (message) {
        console.info('Custom log', message)
    }
}
customConcoleObject9.info('Say Hello!');
console.log('');


let customConcoleObject10 = {
    timeEnd: function (message) {
        console.timeEnd('Custom log', message)
    }
}
customConcoleObject10.timeEnd('Say Hello');
console.log('');


let customConcoleObject11 = {
    timeLog: function (message) {
        console.timeLog('Custom log', message)
    }
}
customConcoleObject11.timeLog('Say Hello!!!');
console.log('');


let customConcoleObject12 = {
    trace: function (message) {
        console.trace('Custom log', message)
    }
}
customConcoleObject12.trace('Say Hello!!!');
console.log('');


let customConcoleObject13 = {
    groupEnd: function (message) {
        console.groupEnd('Custom log', message)
    }
}
customConcoleObject13.groupEnd('Say Hello!!!');
console.log('');


let customConcoleObject14 = {
    groupCollapsed: function (message) {
        console.groupCollapsed('Custom log', message)
    }
}
customConcoleObject14.groupCollapsed('Say Hello!!!');
console.log('');