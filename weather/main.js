let app = new Vue({
    el:".container",
    data:{
        city:'北京',
        List:[]
    },
    methods:{
        search:function(){
            // alert("hello");
            // console.log(this.city);
            let that = this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city).then(function(response){
                // console.log(response.data.data.forecast);
                that.List = response.data.data.forecast;
            }).catch(function(error){});
        },
        changeCity:function(city){
            this.city = city;
            this.search();
        },
        blur:function(){
            this.city = "";
        }
    }
})
