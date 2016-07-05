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

//FlickrAPi

  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=129889428@N02&tags=imersao2016&format=json&jsoncallback=?", function(data){
  		$.each(data.items, function(i,item){
  			 var image = (item.media.m).replace("_m.jpg", "_d.jpg");
         var title = item.title;
         if(i<21){
  			    $("<div>")
            .attr({"style":"background-image: url("+image+")","class":"flickr-image", "data-title":title})
             .appendTo(".imersao2016").wrap("<a target='"_blank"' href='" + item.link + "'></a>");
  			    }    
  		});
  });
  
  
  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=129889428@N02&tags=imersao2015&format=json&jsoncallback=?", function(data){
  		$.each(data.items, function(i,item){
  			 var image = (item.media.m).replace("_m.jpg", "_d.jpg");
         var title = item.title;
         if(i<21){
  			    $("<div>")
            .attr({"style":"background-image: url("+image+")","class":"flickr-image", "data-title":title})
             .appendTo(".imersao2015").wrap("<a href='" + item.link + "'></a>");
  			    }    
  		});
  });
 
