console.log("LAB.RIO");
function scrollBanner() {
  var scrollPos;
  var headerText = document.querySelector('.header-paralax h1');
  scrollPos = window.scrollY;

  if (scrollPos <= 400) {
      headerText.style.transform =  "translateY(" + (-scrollPos/3) +"px" + ")";
      headerText.style.opacity = 1 - (scrollPos/600);
  }
}

window.addEventListener('scroll', scrollBanner);


  
  
 


if ($("body").hasClass("mapeando")) {
    // mapeando
      $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=129889428@N02&tags=mapeandorio&format=json&jsoncallback=?", function(data){
      		$.each(data.items, function(i,item){
      			 var image = (item.media.m).replace("_m.jpg", "_d.jpg");
             var title = item.title;
             var blank = "_blank";
             if(i<21){
      			    $("<div>")
                .attr({"style":"background-image: url("+image+")","class":"flickr-image", "data-title":title})
                 .appendTo(".mapeandorio").wrap("<a href='" + item.link + "'></a>");
      			    }    
      		});
      });
}
if ($("body").hasClass("imersao")) {
    
    //FlickrAPi

  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=129889428@N02&tags=imersao2016&format=json&jsoncallback=?", function(data){
  		$.each(data.items, function(i,item){
  			 var image = (item.media.m).replace("_m.jpg", "_d.jpg");
             var title = item.title;
             var blank = "_blank";
             
         if(i<21){
  			    $("<div>")
            .attr({"style":"background-image: url("+image+")","class":"flickr-image", "data-title":title})
             .appendTo(".imersao2016").wrap("<a target='" + blank + "' href='" + item.link + "'></a>");
  			    }    
  		});
  });
  
  
  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=129889428@N02&tags=imersao2015&format=json&jsoncallback=?", function(data){
  		$.each(data.items, function(i,item){
  			 var image = (item.media.m).replace("_m.jpg", "_d.jpg");
         var title = item.title;
         var blank = "_blank";
         if(i<21){
  			    $("<div>")
            .attr({"style":"background-image: url("+image+")","class":"flickr-image", "data-title":title})
             .appendTo(".imersao2015").wrap("<a target='" +blank+ "'href='" + item.link + "'></a>");
  			    }    
  		});
  });
    
}

if ($("body").hasClass("conselho")) {

    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=129889428@N02&tags=conselhodajuventude&format=json&jsoncallback=?", function(data){
      		$.each(data.items, function(i,item){
      			 var image = (item.media.m).replace("_m.jpg", "_d.jpg");
             var title = item.title;
             var blank = "_blank";
             if(i<21){
      			    $("<div>")
                .attr({"style":"background-image: url("+image+")","class":"flickr-image", "data-title":title})
                 .appendTo(".conselho").wrap("<a target='" +blank+ "'href='" + item.link + "'></a>");
      			    }    
      		});
      });
}