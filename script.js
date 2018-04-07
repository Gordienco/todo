document.addEventListener('dragstart', function (e) {
    e.dataTransfer.setData("Text", e.target.id);
});

document.addEventListener('dragover', function (e) {
    e.preventDefault();
});

document.addEventListener('drop', function (e) {
    e.preventDefault();
    var id = e.target.id;
    if (e.target.className === 'droptarget') {
        var data = e.dataTransfer.getData('Text');
        e.target.appendChild(document.getElementById(data));
        var a = e.toElement.children
        for (var i = 0; i < a.length; i++) {
            var b = a[i];
            if (id === 'todo') {
                b.className = 'todo';
            }
            if (id === 'progress') {
                b.className = 'progress';
            }
            if (id === 'done') {
                b.className = 'done';
            }
            if (id === 'complete') {
                b.className = 'complete';
            }
            if (id === 'backlog') {
                b.className = '';
            }
        }
    }
});

var button = document.getElementById('button');

button.addEventListener('click', function () {

    var inputTasks = document.getElementById('input').value;
    var inputText = document.createTextNode(inputTasks);
    var li = document.createElement('li');
    var tasks = document.getElementById('backlog');
    var rendId = randomString(3);

    function randomString(length) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

        if (!length) {
            length = Math.floor(Math.random() * chars.length);
        }

        var str = '';
        for (var i = 0; i < length; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    }

    li.id = rendId
    li.appendChild(inputText);
    li.setAttribute('draggable', 'true');

    if (inputTasks === '') {
        button.setAttribute('disabled', 'true');
    } else {
        button.setAttribute('disabled', 'false');
        tasks.appendChild(li)
    }

    document.getElementById('input').value = '';

    li.setAttribute('contentEditable', 'true');

});