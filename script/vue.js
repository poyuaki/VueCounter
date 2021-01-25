let count = 0;

const app = new Vue({
    el: "#mainCounter",
    data(){
        return{
            count: count
        }
    },
    methods:{
        increment(){
            this.count++;
        },
        decrement(){
            if(this.count <= 0) this.count = 0;
            else this.count--;
        },
        resetCount(){
            let res = confirm("リセットしてもいいですか？");
            if(res) this.count = 0;
        }
    }
})

addEventListener("keydown",event => {
    let key = event.key;
    console.log(key);
    if(key === "ArrowUp") app.increment();
    else if(key === "ArrowDown") app.decrement();
    else if(key === "Escape") app.resetCount();
})