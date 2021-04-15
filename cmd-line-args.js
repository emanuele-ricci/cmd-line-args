
// Fast and Easy way to assign options arguments from command-line

// command example: node script.js -a -d 55 -c 'scan' -b

// Object with options available and types
const opt = {
    a:false,
    b:false,
    c:{pos:'',val:''},
    d:{pos:'',val:''},
    e:{pos:'',val:''},
    f:{pos:'',val:''}
}

// Assign automatically without follow options order 
for (let key in options) {

    if(typeof opt[key]==='boolean'){
        (process.argv.indexOf(`-${key}`)!==-1) ?  opt[key] = true : opt[key] = false
    }
    else{
        opt[key].pos = process.argv.indexOf(`-${key}`);
        (opt[key].pos!==-1) ? opt[key].val = process.argv[opt[key].pos + 1] : opt[key].val = false
    }

}



