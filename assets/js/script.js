

$('#navbar').on("click",".redirect",function (e) {
    e.preventDefault();
    var page = $(this).attr('href');
    $('.active').removeClass('active');
    $(this).addClass('active');



    console.log('yes');
    var div = document.getElementById('slide');

    div.classList.add('visible');
    setTimeout(function () {
        $('main').load(page);
        window.history.pushState(document.title,document.title,"/"+page);


    },500);


    setTimeout(function () {
        div.classList.remove('visible');

    }, 2000);
});

//Side bar Menu Hover
$(".list-item").mouseover(function (e) {
    var icon = $(this).attr('data-page');
    var path = $('#'+icon);
    path.addClass('active');
});
$(".list-item").mouseout(function (e) {
    var icon = $(this).attr('data-page');
    var path = $('#'+icon);
    path.removeClass('active');
});

//Index Svg React
$(".polygon-bg").mouseover(function (e) {
    $(this).closest('svg').css('z-index', '5');
    $(this).children('polygon').addClass('fill-red');

    $(this).closest('svg').css('z-index', '5');
    /*addClass('raise');*/
    var z_index = $(this).closest('svg').css('z-index');

    console.log(z_index);
});
$(".polygon-bg").mouseout(function (e) {
    $(this).closest('svg').css('z-index', '4');
    $(this).children('polygon').removeClass('fill-red');
    //$(this).removeClass('fill-red');

        /*removeClass('raise');*/
 
});

/* Gallery */

var photos = document.querySelectorAll('.galleryItem');
for (let i = 0; i < photos.length ; i++) {
    photos[i].addEventListener('click', showPhoto)
}

function showPhoto(emlt) {
    var modal = document.querySelector('#showPhoto');
    modal.classList.add('visibleM');
}
