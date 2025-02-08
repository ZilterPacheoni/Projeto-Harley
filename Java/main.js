$(document).ready(function(){
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            pratoInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome!'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
        }
    })

    $('.lista-motos button').click(function() {
        const destino = $('#contato');
        const nomeProduto = $(this).parent().find('h3').text();

        $('#produto-de-interesse').val(nomeProduto);
        $('#mensagem').val(`Gostaria de adquirir o ${nomeProduto}.`);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    $('#sobre').click(function(){
        const destino2 = $('#sobre-a-loja');

        $('html').animate({
            scrollTop: destino2.offset().top
        }, 1000)
    })

    $('#bikes').click(function(){
        const destino2 = $('#motos');

        $('html').animate({
            scrollTop: destino2.offset().top
        }, 1000)
    })

    $('#accessories').click(function(){
        const destino2 = $('#acessorios');

        $('html').animate({
            scrollTop: destino2.offset().top
        }, 1000)
    })

    $('#contact').click(function(){
        const destino2 = $('#contato');

        $('html').animate({
            scrollTop: destino2.offset().top
        }, 1000)
    })
});