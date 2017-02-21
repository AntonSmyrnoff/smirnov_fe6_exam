$(function () {

      
      var arr = ['sport', 'city', 'ocean', 'sky', 'nature', 'beauty', 'food', 'computer', 'science', 'technology', 'animal', 
                  'winter', 'summer', 'autumn', 'river', 'mountain', 'office', 'new york', 'waterfall', 'africa', 'america', 
                  'castle', 'horse', 'children', 'school', 'snow', 'sun', 'space'];
      
      for (var i=0; i<7; i++) {
      var rand = Math.floor(Math.random()*arr.length);
      var count = 0;
       
       $.ajax({
             url: "https://pixabay.com/api/?key=3981741-7a8eb8522a5415851535e06c2&q="+arr[rand]+"&image_type=photo&per_page=10",
             dataType : "jsonp",
             success: function(data) {
                var div = document.createElement("div");
                var randomItem = data.hits[Math.floor(Math.random()*10)];

                div.classList.add('grid-item');
                div.style.background = 'url('+randomItem.previewURL+') 50% no-repeat';
                
                var a = document.createElement("a");
                a.setAttribute('href', '#');
                a.innerHTML = randomItem.tags;
                div.append(a);
                $('#wrapper').append(div);


                count+=1;

                if (count == 7) {
                  $('.grid-item:eq(4)').addClass('grid-item--width2');
                  $('.grid-item:eq(5)').addClass('grid-item--width2');
                  $('.grid').isotope({
                              itemSelector: '.grid-item',
                              percentPosition: true,
                              masonry: {
                                columnWidth: '.grid-item',
                              }
                            });
                  $('.grid-item').css({'right': 0, 'background-size': 'cover'});
                }

              },
          });
     }
     



});




