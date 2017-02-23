$(function () {

  init();
  $('#search').on('click', searchPic);
  $("#search-field").keypress(function(e) { //запуск поиска по нажатию Enter;
           if(e.keyCode==13) searchPic()
         });
});

  
  function init () {
    var arr = ['sport', 'city', 'ocean', 'sky', 'nature', 'beauty', 'food', 'computer', 'science', 'technology', 'animal', 
                'winter', 'summer', 'autumn', 'river', 'mountain', 'office', 'new york', 'waterfall', 'africa', 'america', 
                'castle', 'horse', 'children', 'school', 'snow', 'sun', 'space']; // массив из текста запросов для отображения случайных изображений при первой загрузке страницы
    
    for (var i=0; i<7; i++) {
    var rand = Math.floor(Math.random()*arr.length);// формируем индекс случайного значения из массива arr
     
    $.ajax({
           url: "https://pixabay.com/api/?key=3981741-7a8eb8522a5415851535e06c2&q="+arr[rand]+"&image_type=photo&per_page=10", //запрос по случайному значению
           dataType : "jsonp",
           success: function(data) {
              var randomItem = data.hits[Math.floor(Math.random()*10)]; // в ответе на запрос пришло 10 изображений, из них выбираем случайную
 
              createGrid( data.hits[i].tags, randomItem.previewURL );

             $('.grid-item:eq(4)').addClass('grid-item--width2');
             $('.grid-item:eq(5)').addClass('grid-item--width2');
             $(window).load( finishLoad );
             $('.grid-item').css({'right': 0, 'background-size': 'cover'});
            },
        });
    }
  };

  
  function searchPic() {
      
          var txt = $("#search-field").val();
          if (txt==0) {return};
          $('.grid-item').remove(); //очищаем результаты предыдущего поиска
          
          $.ajax({
             url: "https://pixabay.com/api/?key=3981741-7a8eb8522a5415851535e06c2&q="+txt+"&image_type=photo&per_page=7",
             dataType : "jsonp",
             success: function (data) {
                
                if (data.total == 0) {
                  return
                }; 
                
                $.each(data.hits, function(i, val){
                      createGrid( data.hits[i].tags, data.hits[i].previewURL )
                });
                $('.grid-item:eq(4)').addClass('grid-item--width2');
                $('.grid-item:eq(5)').addClass('grid-item--width2');
                finishLoad ();
                 
             },
      });
      $("#search-field").val('');    
  };

  
  function createGrid(data, url) {
    
    var div = document.createElement("div");
    div.classList.add('grid-item');
    div.style.background = 'url('+url+') 50% no-repeat';
    var a = document.createElement("a");
    
    a.setAttribute('href', '#');
    a.innerHTML = data;
    div.append(a);
    $('#wrapper').append(div);
  
  };

  
  function finishLoad() {
    
    $('.grid').isotope('reloadItems').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                  columnWidth: '.grid-item',
                }
              });
     $('.grid-item').css({'right': 0, 'background-size': 'cover'});
  };









