// 1, Vue.jsで扱うデータを用意する
const myData = {
	appName: "whimsy-TheZodiacSign-fortune-telling",
    message: "あなたの星座の運勢は？",
    theZodiacSigns: [
        {name: "牡羊座", path: "images/aries.png",rank:"0"},
        {name: "牡牛座", path: "images/taurus.png",rank:"0"},
        {name: "双子座", path: "images/gemini.png",rank:"0"},
        {name: "蟹座", path: "images/cancer.png",rank:"0"},
        {name: "獅子座", path: "images/leo.png",rank:"0"},
        {name: "乙女座", path: "images/virgo.png",rank:"0"},
        {name: "天秤座", path: "images/libra.png",rank:"0"},
        {name: "蠍座", path: "images/scorpio.png",rank:"0"},
        {name: "射手座", path: "images/sagittarius.png",rank:"0"},
        {name: "山羊座", path: "images/capricorn.png",rank:"0"},
        {name: "水瓶座", path: "images/aquarius.png",rank:"0"},
        {name: "魚座", path: "images/pisces.png",rank:"0"},
    ],
    showResult: false
}

// 2, Vue.jsの準備をする
const app = Vue.createApp({
	data(){
		return myData;
	},
	created(){
		console.log("created!!");
	},
    methods: {
        shuffle(){
            console.log("shuffle!!");
            // シャッフル
            for(let i=this.theZodiacSigns.length-1; 0<=i; i--){
                for(let j=0; j<i; j++){
                    let rdm = Math.floor(Math.random()*i);
                    let tmp = this.theZodiacSigns[rdm];
                    this.theZodiacSigns[rdm] = this.theZodiacSigns[i];
                    this.theZodiacSigns[i] = tmp;
                }
            }
            // ランキング
            for(let i=0; i<this.theZodiacSigns.length; i++){
                this.theZodiacSigns[i].rank = i + 1;
            }
            
            // 結果表示
            this.showResult = !this.showResult;
         }
    },
    computed:{
        getBest3(){
            return this.theZodiacSigns.concat().slice(0, 3); 
        },
        getWorst3(){
            return this.theZodiacSigns.concat().slice(9, 12);
        }

    }
});
app.mount("#app");// 3, Vue.jsを起動する