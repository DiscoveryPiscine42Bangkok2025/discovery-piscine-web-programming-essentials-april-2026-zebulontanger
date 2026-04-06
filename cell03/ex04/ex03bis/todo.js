$(document).ready(function() {
    const $ft_list = $('#ft_list');

    const match = document.cookie.match(/(^|;)\s*tasks\s*=\s*([^;]+)/);
    if (match) {
        const cookieData = decodeURIComponent(match[2]);
        cookieData.split('|').reverse().forEach(txt => {
            if (txt) addTask(txt, false);
        });
    }

    $('#newBtn').on('click', function() {
        const text = prompt('yo twin add some txt ok:');
        addTask(text, true);
    });

    function addTask(text, isNew) {
        if (!text || !text.trim()) return;

        const $div = $('<div></div>')
            .text(text)
            .css({
                'padding': '10px',
                'border-bottom': '1px solid #ccc',
                'cursor': 'pointer'
            });

        $div.on('click', function() {
            if (confirm("Delete this TO DO?")) {
                $(this).remove();
                save();
            }
        });

        $ft_list.prepend($div);

        if (isNew) save();
    }

    function save() {
        const tasks = $('#ft_list div').map(function() {
            return encodeURIComponent($(this).text());
        }).get();

        document.cookie = "tasks=" + tasks.join('|') + ";path=/;max-age=31536000";
    }
});