addEventListener("DOMContentLoaded", (e) => {
    let pago_sum = 0, desc = 10, val_desc, total;
    addEventListener("submit", (e) => {
        e.preventDefault();
        if (e.submitter.dataset.operacion == "GUARDAR") {
            let data = Object.fromEntries(new FormData(e.target));
            if (data.montos > 0) {
                pago_sum += Number(data.montos);
                e.target.reset();
            }
            else if (data.montos == 0) {
                e.submitter.disabled = true;
                document.querySelector('#sub').value = "Monto de las compras: $" + pago_sum;
                if (pago_sum > 10000) {
                    val_desc = pago_sum * desc / 100;
                    total = pago_sum - val_desc;
                    document.querySelector('#desc').value = "Descuento: " + desc + "%";
                    document.querySelector('#val-desc').value = "Valor del descuento: $" + val_desc;
                    document.querySelector('#total').value = "Total a pagar: $" + total;
                }
                else {
                    document.querySelector('#desc').value = "Descuento: No aplica";
                    document.querySelector('#val-desc').value = "Valor del descuento: No aplica";
                    document.querySelector('#total').value = "Total a pagar: $" + pago_sum;
                }
            }
            else if (data.montos < 0) {
                alert("¡Monto negativo!\nIngrese un monto válido nuevamente.");
                e.target.reset();
            }
        }

        else {
            location.reload();
        }
    })
});