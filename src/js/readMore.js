document.addEventListener('DOMContentLoaded', _ => {
    document.getElementById('btn').addEventListener('click', function () {
        document.getElementById('more').classList.toggle('off')
        this.innerHTML = this.innerHTML === 'Скрыть' ? 'Читать далее' : 'Скрыть'
    })
})