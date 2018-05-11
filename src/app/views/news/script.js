$(document).ready(function(){
    $('#dat_bio').on('submit', function(event){
        event.preventDefault()
        var etapa= $('#etapa_bio')
        var valor= $('#valor_bio')
        var operario=$('#operario')
        $.ajax({
            url:'/dat_bio',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({etapa: etapa.val(),valor: valor.val(),operario: operario.val()}),
            success:function(response){
                var tbodyEl = $('tbody')
                tbodyEl.html('')  
            response.dat.forEach((datos) => {
                    tbodyEl.append('\
                    <tr>\
                        <td class="id">'+datos.operario+'</td>\
                        <td class="id">'+datos.valor1+' %</td>\
                        <td class="id">'+datos.valor2+' %</td>\
                        <td class="id">'+datos.valor3+' %</td>\
                        <td class="id">'+datos.valor4+' %</td>\
                    </tr>\
                    ')
                
                })
        }
    })
    })
    $('table').on('click', '#up', function(){
        var rowEl = $(this).closest('tr')
        var id = rowEl.find('#id').text()
        $.ajax({
            url:'/up/'+id,
            method: 'PUT',
            contentType: 'application/json',
            success: function(response){
                $('.card-title').empty().append('Update news id='+response.result[0].id)
                $('#title').val(response.result[0].title)
                $('#news').val(response.result[0].news)
                $('#update').css('display','inline')
                $('#enviar').css('display','none')
                $('#form_news').attr('action','/up_form/'+response.result[0].id)
            }

        })
    })
})