$('.burger-btn').on('click', function(){
    $('.burger-btn,.burger').toggleClass('active');
})

$('.modal-close, .overlay').click(function(){
$('.modal-contacts').addClass('d-none')
})



$('.dropdownn').on('click', function(){
    $('.dropdown-content-user').addClass('dropdown-content-active');
    $('.overlay').removeClass('d-none');
});
$('.overlay').on('click', function(){
    $('.dropdown-content-user').removeClass('dropdown-content-active');
    $('.overlay').addClass('d-none');
});
$('.dropdown-add').on('click', function(){
    $('.dropdown-content-user-add').addClass('dropdown-content-active');
    $('.overlay').removeClass('d-none');
});
$('.overlay').on('click', function(){
    $('.dropdown-content-user-add').removeClass('dropdown-content-active');
    $('.overlay').addClass('d-none');
});