$(document).ready(function() {
    $('#carrousel-imagens').slick({
        autoplay:true,
    });
   
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(XX) XXXXX-XXXX'
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
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome'
        },
        submitHandler: function(form) {
            console.log(form);            
        },
        invalidHandler: function(evento, validador) {
            let CamposIncorretos = validador.numberOfInvalids();
            if (CamposIncorretos) {
                alert('Existem' + $(CamposIncorretos) + 'campos incorretos')
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const NomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(NomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})