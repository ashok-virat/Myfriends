$(document).ready(()=>{
    var friends=[
       {
        name:"ashok",
        firstname:"ashok",
        favoritecricketplayer:"virat",
        nickname:"ak",
        favoritefood:"dhosa",
        status:"single",
        favoritegame:"free fire",
        dept:"mechanical",
        goal:"no"
       },
       {
        name:"prashanth",
        firstname:"prashanth",
        favoritecricketplayer:"virat",
        nickname:"weightu",
        favoritefood:"piryani",
        status:"committed",
        favoritegame:"free fire",
        dept:"mechanical",
        goal:"ias"
       },
       {
        name:"bejo jeffrin",
        firstname:"bejo jeffrin",
        favoritecricketplayer:"maxwell",
        nickname:"bejo",
        favoritefood:"upma",
        status:"single",
        favoritegame:"free fire",
        dept:"mechanical",
        goal:"coder"
       },
       {
        name:"arjun",
        firstname:"arjun anbalagan",
        favoritecricketplayer:"rohit",
        nickname:"sudhagar annan",
        favoritefood:"hostel thakkali soru",
        status:"commited",
        favoritegame:"free fire",
        dept:"mechanical",
        goal:"no"
       },
       {
        name:"seenivasagan",
        firstname:"seenivasagan",
        favoritecricketplayer:"yuvi",
        nickname:"seeni",
        favoritefood:"parotta",
        status:"single",
        favoritegame:"mini millitia",
        dept:"civil",
        goal:"no"
       },
       {
        name:"anand",
        firstname:"anand",
        favoritecricketplayer:"jadeja",
        nickname:"anand",
        favoritefood:"keerthanahotel parotta",
        status:"committed",
        favoritegame:"none",
        dept:"mechanical",
        goal:"railway officer"
       },
       {
        name:"sheik",
        firstname:"sheik",
        favoritecricketplayer:"dhoni",
        nickname:"pubg",
        favoritefood:"piriyani",
        status:"single",
        favoritegame:"pubg",
        dept:"ece",
        goal:"pubg owner"
       },
       {
        name:"vinoth",
        firstname:"vinoth",
        favoritecricketplayer:"dhoni",
        nickname:"vinoth",
        favoritefood:"panipuri",
        status:"single",
        favoritegame:"none",
        dept:"mechanical",
        goal:"ias"
       },
       {
        name:"nimal",
        firstname:"nimal chandhar",
        favoritecricketplayer:"none",
        nickname:"nimal",
        favoritefood:"parotta",
        status:"play boy",
        favoritegame:"free fire",
        dept:"ece",
        goal:"no"
       },
       {
        name:"gokul",
        firstname:"gokul",
        favoritecricketplayer:"dhoni",
        nickname:"google",
        favoritefood:"seamiya",
        status:"single",
        favoritegame:"free fire",
        dept:"mechanical",
        goal:"ias"
       },
       {
        name:"arun pandi",
        firstname:"arun pandi",
        favoritecricketplayer:"dhoni",
        nickname:"bahava",
        favoritefood:"dhosai",
        status:"single",
        favoritegame:"free fire",
        dept:"civil",
        goal:"ias"
       },
       {
        name:"fathil",
        firstname:"fathil",
        favoritecricketplayer:"none",
        nickname:"dude",
        favoritefood:"piriyani",
        status:"single",
        favoritegame:"free fire",
        dept:"civil",
        goal:"no"
       },
       {
        name:"saravanan",
        firstname:"saravanan",
      favoritecricketplayer:"none",
        nickname:"saro",
        favoritefood:"smosa",
        status:"single",
        favoritegame:"talkingtom",
        dept:"civil",
        goal:"no"
       }
    ]
  
   
    $("#list").click(()=>{
      let searchterm=$("#list").val()
      $("#searchbtn").click(()=>{
        if(searchterm) {
          searchforfriend(searchterm)
        }
       
       })  
    
    })
     

   function searchforfriend(searchterm) {
       for (var x of friends){
           if(x.name===searchterm){
               console.log(x)
               init(x);
   } } }


    
    function init(x) {
      
        switch (x.name){
            case "ashok":
            $(".background-img").css("background-image", "url('images/ashok.jpg')")
           break;
          case "bejo jeffrin":
           $(".background-img").css("background-image", "url('images/bejo.jpg')")
           break;
          case "arjun":
          $(".background-img").css("background-image", "url('images/arjun.jpg')")
           break;
            case "anand":
          $(".background-img").css("background-image", "url('images/anand.jpg')")
           break;
           case "prashanth":
          $(".background-img").css("background-image", "url('images/prashanth.jpg')")
           break;
           case "arun pandi":
          $(".background-img").css("background-image", "url('images/arun pandi.jpg')")
           break;
           case "seenivasagan":
           $(".background-img").css("background-image", "url('images/seeni.png')")
            break;
            case "fathil":
            $(".background-img").css("background-image", "url('images/fathil.jpg')")
             break;
             case "saravanan":
             $(".background-img").css("background-image", "url('images/saro.jpg')")
              break;
              case "sheik":
              $(".background-img").css("background-image", "url('images/sheik.png')")
               break;
               case "gokul":
               $(".background-img").css("background-image", "url('images/gokul.jpg')")
                break;
                case "vinoth":
                $(".background-img").css("background-image", "url('images/snow.jpg')")
                 break;
                 case "nimal":
                 $(".background-img").css("background-image", "url('images/nimal.jpg')")
                  break;

           default:
          $("body").css("background-image", "url('image/default.jpg')")
           break;
        } 

    let resultofthename=x.firstname;
    $("#nameofthecandidate").text("Name:"+resultofthename)
    let resultoffavcricketplayer=x.favoritecricketplayer;
    $("#nameofthefavcricketplayer").text("Favourite player:"+resultoffavcricketplayer)
    let resultofthestatus=x.status;
    $("#statusofthecanddidate").text("status:"+resultofthestatus)
    let resultofthedept=x.dept;
    $("#department").text("Department:"+resultofthedept)
    let resultofnickname=x.nickname;
    $("#nicknameofthecandidate").text("Nick Name:"+resultofnickname)
    let resultofthefavouirtefood=x.favoritefood;
    $("#favouritefood").text("Favourite Food:"+resultofthefavouirtefood)
    let resultofthefavouirtegame=x.favoritegame;
    $("#favouritegame").text("Favourite Game:"+resultofthefavouirtegame)
    let resultofgaol=x.goal;
    $("#goalofthecandidate").text("Goal:"+resultofgaol)
    displaysetposition(x)
} 

function displaysetposition(values) {
  $(".logo-design").addClass("setposition");
  $(".header-style").addClass("setposition")

}
})