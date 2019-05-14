// ---- button links
function toHome (){
    window.location.href = "index.html";
}

function toWork (){
    window.location.href = "work.html";
}

function toGD(){
    window.location.href = "graphicdesign.html";
}

function toIL(){
    window.location.href = "illustration.html";
}

function toMG(){
    window.location.href = "motiongraphic.html";
}

function toWA(){
    window.location.href = "webapp.html";
}

function toContact (){
    window.location.href = "contact.html";
}

function toAbout (){
    window.location.href = "about.html";
}

function toLinkedIn (){
    window.open("https://www.linkedin.com/in/kathleen-hung-940882182/");
}

function toIns (){
    window.open("https://instagram.com");
}

//---- interaction -----
$(".button").mouseover(function(){
    $(this).css("background-color","#ffbf4f");
    $(this).css("color","#fff");
});

$(".button").mouseout(function(){
    $(this).css("background-color","rgba(0,0,0,0)");
    $(this).css("color","#000");
});





// ----- contact form ------


function submitMsg (){
    var vname = document.getElementById("name").value,
        vjob = document.getElementById("job").value,
        vmsg = document.getElementById("msg").value;

    
    db.collection("contact form").add({
        firstname: vname,
        lastname: vjob,
        msg: vmsg
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });  
    
    alert("Form submitted!");
    document.querySelector(".contact-form form").reset();
    
}






// ----- Work ------

$(document).ready(function(){
  $.getJSON("js/work.json",function(data){
     $.each(data["gd"], function (i, val){
         $(".gd").append(
             '<div class="work-piece"><h3>'+ val.name +'</h3><div class="work-img"> <img src=" '+ val.img[0]  + ' "/> <img src="'+ val.img[1]+ '" /></div><p>' + val.des + '</p></div>' 
         );  
     }); 
  });
});

$(document).ready(function(){
  $.getJSON("js/work.json",function(data){
     $.each(data["mg"], function (i, val){
         $(".mg").append(
             '<div class="work-piece"><h3>'+ val.name +'</h3><div class="work-img"> <img src=" '+ val.img  + ' "/> </div> <p>'+ val.des + '</p> <a href="' + val.link + '">Watch video here ></a> </div>' 
         );  
     }); 
  });
});

$(document).ready(function(){
  $.getJSON("js/work.json",function(data){
     $.each(data["il"], function (i, val){
         $(".il").append(
             '<div class="work-piece"><h3>'+ val.name +'</h3><div class="work-img"> <img src=" '+ val.img + ' "/></div> <p>' + val.des + '</p></div>' 
         );  
     }); 
  });
});



$(document).ready(function(){
  $.getJSON("js/work.json",function(data){
     $.each(data["wa"], function (i, val){
         $(".wa").append(
             '<div class="work-piece"><h3>'+ val.name +'</h3> <div class="work-img"> <img src=" '+ val.img  + ' "/></div> <p>'+ val.des + '</p> <a href="' + val.link + '">See the app here > </a> </div>'   
         );  
     }); 
  });
});





