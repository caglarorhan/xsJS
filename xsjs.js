const xsJS ={
    init(){
        document.querySelectorAll("[xsjs]").forEach(item=>{
            console.log(item);
        })
    }
}

const windowListener = window.addEventListener('load',()=>{
    xsJS.init();
    window.removeEventListener("load", windowListener, true);
    return false;
})
