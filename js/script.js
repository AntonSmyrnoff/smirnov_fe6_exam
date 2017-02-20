$(function () {

        /*$('.grid').isotope({
          itemSelector: '.grid-item',
          masonry: {
            columnWidth: 300
          }
        });*/

    var arr = [];
    var response = $.ajax({
       url: "http://api.pixplorer.co.uk/image?amount=7&size=tb",
       dataType : "JSON",
       success: function(data) {
        console.log(data);
        $.each(data.images, function(i, val){
                            var div = document.createElement("div");

                            div.classList.add('grid-item');
                            if(i==4||i==5) {
                                div.classList.add('grid-item--width2') 
                            };
                            div.style.background = 'url('+data.images[i].imageurl+') no-repeat 50%';
                            $('#wrapper').append(div);
                          
                        });

       }
    });


    
});



