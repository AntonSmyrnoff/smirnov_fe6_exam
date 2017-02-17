$(function() {
    $('.jcarousel').jcarousel({
        wrap: 'circular',
        animation: "slow"
    })
    .jcarouselAutoscroll({
            interval: 5000,
            target: '+=1',
            autostart: true
        });
    $('.jcarousel').jcarousel({
        animation: {
            duration: 1200,
            easing:   'linear',
            complete: function() {
            }
        }
    });

    /*Навигация по карусели*/
    $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
});

/*Выпадающий текст в Banners Place*/
$(function() {
    $('.banners__panel').click(function() {
        $(this).find('.banners__wrapper div').toggleClass('active');
        $(this).find('p').slideToggle(500);
        $(this).find('.banners__sign').toggle();
    })
});



