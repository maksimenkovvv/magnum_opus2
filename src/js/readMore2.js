document.addEventListener('DOMContentLoaded', _ => {
    document.getElementById('btn-2').addEventListener('click', function () {
        document.getElementById('more-2').classList.toggle('off-2')
        this.innerHTML = this.innerHTML === 'Скрыть' ? 'Читать далее' : 'Скрыть'
    })
})