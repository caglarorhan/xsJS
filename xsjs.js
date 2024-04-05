const xsJS ={
    xs: null,
    init(){
        this.xs = document.querySelectorAll("[xsjs]");
        this.extend();
    },
    extend(){
        this.xs.forEach(el=>{
            console.log(el.tagName);
            if(el.hasAttribute("do")){
                console.log(el.getAttribute("do"));
                this.parseExtend({src:el, data: el.getAttribute("do")});
            }
        })
    },
    parseExtend(o={src:HTMLElement, data:String}){
        let parsedData = JSON.parse(o.data);
        Object.entries(parsedData).forEach(([k,v])=>{
            o.src[k] = v;
        })
    },
    do(o={what:String, to:HTMLElement, with:Object}){

    }

}



const windowListener = window.addEventListener('load',()=>{
    xsJS.init();
    window.removeEventListener("load", windowListener, true);
    return false;
})
