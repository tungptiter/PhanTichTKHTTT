function checkFillForm() {
    var check = true;
    if (document.getElementById("hovaten").value.length == 0)
        check = false;
    if (document.getElementById("diachi").value.length == 0)
        check = false;
    if (document.getElementById("sodienthoai").value.length == 0)
        check = false;
    console.log(check)
    if (check == false) {
        document.getElementById("checkform").innerHTML =
            `<div class="modal-body">
                        <h5>Vui lòng điền đủ thông tin</h5>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-dismiss="modal">Quay lại</button>
                    </div>`
    }
    else {
        document.getElementById("checkform").innerHTML =
            `<div class="modal-body">
                        <h5>Xác nhận thông tin thành công</h5>
                        cảm ơn đã mua hàng!
                    </div>
                    <div class="modal-footer">
                        <a href="./home.html"><button class="btn btn-primary">Oke</button></a>
                    </div>`
    }
}

// chọn tỉnh thành, huyện
if (address_2 = localStorage.getItem('address_2_saved')) {
    $('select[name="chonHuyen"] option').each(function () {
        if ($(this).text() == address_2) {
            $(this).attr('selected', '')
        }
    })
    $('input.billing_address_2').attr('value', address_2)
}
if (district = localStorage.getItem('district')) {
    $('select[name="chonHuyen"]').html(district)
    $('select[name="chonHuyen"]').on('change', function () {
        var target = $(this).children('option:selected')
        target.attr('selected', '')
        $('select[name="chonHuyen"] option').not(target).removeAttr('selected')
        address_2 = target.text()
        $('input.billing_address_2').attr('value', address_2)
        district = $('select[name="chonHuyen"]').html()
        localStorage.setItem('district', district)
        localStorage.setItem('address_2_saved', address_2)
    })
}
$('select[name="chonTinh"]').each(function () {
    var $this = $(this),
        stc = ''
    c.forEach(function (i, e) {
        e += +1
        stc += '<option value=' + e + '>' + i + '</option>'
        $this.html('<option value="">Tỉnh / Thành phố</option>' + stc)
        if (address_1 = localStorage.getItem('address_1_saved')) {
            $('select[name="chonTinh"] option').each(function () {
                if ($(this).text() == address_1) {
                    $(this).attr('selected', '')
                }
            })
            $('input.billing_address_1').attr('value', address_1)
        }
        $this.on('change', function (i) {
            i = $this.children('option:selected').index() - 1
            var str = '',
                r = $this.val()
            if (r != '') {
                arr[i].forEach(function (el) {
                    str += '<option value="' + el + '">' + el + '</option>'
                    $('select[name="chonHuyen"]').html('<option value="">Quận / Huyện</option>' + str)
                })
                var address_1 = $this.children('option:selected').text()
                var district = $('select[name="chonHuyen"]').html()
                localStorage.setItem('address_1_saved', address_1)
                localStorage.setItem('district', district)
                $('select[name="chonHuyen"]').on('change', function () {
                    var target = $(this).children('option:selected')
                    target.attr('selected', '')
                    $('select[name="chonHuyen"] option').not(target).removeAttr('selected')
                    var address_2 = target.text()
                    $('input.billing_address_2').attr('value', address_2)
                    district = $('select[name="chonHuyen"]').html()
                    localStorage.setItem('district', district)
                    localStorage.setItem('address_2_saved', address_2)
                })
            } else {
                $('select[name="chonHuyen"]').html('<option value="">Quận / Huyện</option>')
                district = $('select[name="chonHuyen"]').html()
                localStorage.setItem('district', district)
                localStorage.removeItem('address_1_saved', address_1)
            }
        })
    })
})