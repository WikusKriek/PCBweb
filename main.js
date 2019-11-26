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
          var panvalue=str.slice(0, 3);
          var tiltvalue=str.slice(4, 6);
          var firingvalue=str.slice(11, 14);
          var firestatus=str.charAt(15);

          document.getElementById("panstatus").innerHTML=`<span class="badge color-orange">${panvalue}</span>`;


          document.getElementById("tiltstatus").innerHTML=`<span class="badge color-orange">${tiltvalue}</span>`;
          document.getElementById("energyvalue").innerHTML=`<span class="badge color-orange">${firingvalue}</span>`;

          if(firestatus=='1'){
          document.getElementById("firestatus").innerHTML='<span class="badge color-green">Ok</span>';
          }else{
            document.getElementById("firestatus").innerHTML='<span class="badge color-red">Error</span>';
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
document.getElementById("firingstatus").innerHTML='<span class="badge color-green">Ready</span>';
  app.request.get(`requests/test.php?a=${app.range.getValue("#panslider")}&b=${app.range.getValue("#tiltslider")}&c=${app.range.getValue("#energyslider")}&d=${localStorage.getItem("url")+"/api/v1/light/brightness"}`

     ,function(login,response,data){
          // The full html of the authenticated page
          var str=data.responseText;
          var panvalue=str.slice(0, 3);
          var tiltvalue=str.slice(4, 6);
          var panstatus=str.charAt(7);
          var tiltstatus=str.charAt(9);
          if(panstatus=='1'){
          document.getElementById("pans").innerHTML='<span class="badge color-green">Ok</span>';
          }else{
            document.getElementById("pans").innerHTML='<span class="badge color-red">Error</span>';
          }
          if(tiltstatus=='1'){
          document.getElementById("tilts").innerHTML='<span class="badge color-green">Ok</span>';
          }else{
            document.getElementById("tilts").innerHTML='<span class="badge color-red">Error</span>';
          }
          document.getElementById("panp").innerHTML=`<span class="badge color-orange">${panvalue}</span>`;
          document.getElementById("tiltp").innerHTML=`<span class="badge color-orange">${tiltvalue}</span>`;
          document.getElementById("energyv").innerHTML=`<span class="badge color-orange">${app.range.getValue("#energyslider")}</span>`;
          console.log(data);
      });

};
function post4(){
  document.getElementById("firingstatus").innerHTML='<span class="badge color-orange">Firing</span>';
  app.request.get(`requests/test1.php?d=${localStorage.getItem("url")+"/echo"}`

     ,function(login,response,data){
          // The full html of the authenticated page
          var str=data.responseText;
          if(str=='1'){
          document.getElementById("firingstatus").innerHTML='<span class="badge color-green">Completed</span>';
          }else{
            document.getElementById("firingstatus").innerHTML='<span class="badge color-red">Error</span>';
          }

      });
};
