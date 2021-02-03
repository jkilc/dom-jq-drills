$(document).ready(function () {

    $('#btnSubmit').click(function () {
        var btn = $('<button>Click Me</button>').click(function () {
            alert('nice');
        });

        $('#subBtn').click(function () {
            let message = document.getElementById('btnText').value;
            alert(message);
        }

            ('hoverDiv').css(':hover', 'background-color:', 'purple')

        });

    let textP = $('<p>Hello, I am some text</p>')
    $("p").addClass('textChange');



    $('#textChange').click(function () {
        function getRandomColor() {
            let num1 = math.floor(math.random() * 255)
            let num2 = math.floor(math.random() * 255)
            let num3 = math.floor(math.random() * 255)
        }
        txt.css({ 'color': `rgb(${num1}, ${num2},${num3})` })









    )
})