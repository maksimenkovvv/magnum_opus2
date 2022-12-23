document.addEventListener('DOMContentLoaded', _ => {
    document.getElementById('btn-1').addEventListener('click', function () {
        document.getElementById('more-1').classList.toggle('off-1')
        this.innerHTML = this.innerHTML === 'Скрыть' ? 'Читать далее' : 'Скрыть'
    })
})