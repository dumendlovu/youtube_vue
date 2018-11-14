var app =new Vue({
  el:'#videoTab',
  data:{
    results:[],
    template: 'it works',
    videoSRC: 'original'
  },
  mounted(){
    var APIkey ='';
    var plLiID ='PL-IVpXTWXdQ2VLSyJaWOkpGA8jR_7nbu0';

    //console.log(this.results);
    axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId='+plLiID+'&key='+APIkey+'').then(function (response){
      this.results = response.data;
      //console.log(response.data);
    });
  }
});
