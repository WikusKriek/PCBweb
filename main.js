var app = new Framework7({
  root: '#app',
  name: 'My App',
  id: 'com.myapp.test',
  routes: [
    // Add your routes here
    // Example:
    /*
    {
      path: '/about/',
      url: 'about.html',
    },
    */
  ],
});

var mainView = app.views.create('.view-main');

function post1(){
  app.request.get(`requests/test1.php?d=${localStorage.getItem("url")+"/hello"}`

     ,function(login,response,data){
          // The full html of the authenticated page
          var str=data.responseText;
          var panstatus=str.charAt(0);
          var tiltstatus=str.charAt(1);
          if(panstatus=='1'){
          document.getElementById("panstatus").innerHTML='<span class="badge color-green">Ok</span>';
          }else{
            document.getElementById("panstatus").innerHTML='<span class="badge color-red">Error</span>';
          }
          if(tiltstatus=='1'){
          document.getElementById("tiltstatus").innerHTML='<span class="badge color-green">Ok</span>';
          }else{
            document.getElementById("tiltstatus").innerHTML='<span class="badge color-red">Error</span>';
          }
      });
};
function post2(pan,tilt,energy,url){
  app.request.get("http://192.168.1.17/hello"

     ,function(login,response,data){
          // The full html of the authenticated page
          console.log(data);
      });

};

function post3(){

  app.request.get(`requests/test.php?a=${app.range.getValue("#panslider")}&b=${app.range.getValue("#tiltslider")}&c=${app.range.getValue("#energyslider")}&d=${localStorage.getItem("url")+"/api/v1/light/brightness"}`

     ,function(login,response,data){
          // The full html of the authenticated page
          console.log(data);
      });

};
