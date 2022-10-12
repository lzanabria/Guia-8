addEventListener("DOMContentLoaded", (e) => {
    let nums = 0;
    addEventListener("submit", (e) => {
        e.preventDefault();
        if (e.submitter.dataset.operacion != "REINICIAR") {
            let data = Object.fromEntries(new FormData(e.target));
            if (data.numero > 0) {
                nums += Number(data.numero);
                e.target.reset();
            }
            else {
                e.submitter.disabled = true;
                document.querySelector('[id="res"]').value = nums;
            }
        } 
        else {
            location.reload();
        }
    })
});