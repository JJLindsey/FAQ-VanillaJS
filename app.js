const btn = document.querySelectorAll('.question-btn');

btn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        console.log(e.currentTarget);
    })
})