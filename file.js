const passwardbox=document.getElementById("passward")
const length=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789"

const allchars=uppercase + lowercase + number;

function creatpassward(){
    let passward="";
    passward += uppercase[Math.floor(Math.random() * uppercase.length)]
    passward += lowercase[Math.floor(Math.random() * lowercase.length)]
    passward += number[Math.floor(Math.random() * number.length)]

    while(length > passward.length){
        passward += allchars[Math.floor(Math.random() * allchars.length)]
    }
    passwardbox.value = passward;
}

function copypassward(){
    passwardbox.select();
    document.execCommand("copy")

}
