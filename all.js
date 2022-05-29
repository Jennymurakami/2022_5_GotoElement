// console.log('hiiii');
// $('h1').fadeOut();

$('*').each(function () {
    $(this).click(function (e) {
        e.preventDefault();
        let target = $(this).attr("data-gt-target");
        let duration = $(this).attr('data-gt-duration');
        console.log(target);

        // 如果有明確的目標
        if (target) {
            let top = $(target).offset().top;
            // 測試用 可以不用有 console.log(top);

            $("html").animate({
                scrollTop:top
            
            
            },parseInt(duration))

        }


    })




})