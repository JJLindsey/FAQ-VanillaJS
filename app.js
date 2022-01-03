const btn = document.querySelectorAll('.question-btn');

btn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.
        parentElement;
        question.classList.toggle("show-text");
    });
});