$(document).ready(function () {

  // destra

  $(".fa-chevron-circle-right").click(function () {
    var imgAttiva = $(".active")
    var primo =  $("img").first()
    var prossima = imgAttiva.next()
    girandola ("last",primo,prossima)
  })

  // sinistra

  $(".fa-chevron-circle-left").click(function () {
    var imgAttiva = $(".active")
    var ultimo = $("img").last()
    var precedente = imgAttiva.prev()
    girandola("first",ultimo,precedente)
  })

  // click sui pallini

  $(".fa-circle").click(function () {
    var data = $(this).attr("data")
    $(".fa-circle").removeClass("selected")
    $(this).addClass("selected")
    $("img").removeClass("active")
    $('img[data="' + data + '"]').addClass("active")
  })

})

  // funzione click freccette

function girandola(posizione,caso1,caso2) {
    var imgAttiva = $(".active")
    console.log(imgAttiva);
    imgAttiva.removeClass("active")
    if (imgAttiva.hasClass(posizione)) {
      caso1.addClass("active")
    }else {
      caso2.addClass("active")
    }
    var data = $(".active").attr("data");
    $(".fa-circle").removeClass("selected")
    console.log(data);
    $('.fa-circle[data="' + data + '"]').addClass("selected")
}
