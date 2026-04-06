const ft_list = document.getElementById('ft_list');

window.onload = () => {
    const match = document.cookie.match(/(^|;)\s*tasks\s*=\s*([^;]+)/);
    
    if (match) {
        const cookieData = decodeURIComponent(match[2]);
        
        cookieData.split('|').reverse().forEach(txt => {
            if (txt) addTask(txt, false);
        });
    }
};

function addTask(text, isNew) {
    if (!text || !text.trim()) return;

    const div = document.createElement('div');
    div.innerText = text;
    div.style.padding = "10px";
    div.style.borderBottom = "1px solid #ccc";
    div.style.cursor = "pointer";
    
    div.onclick = () => {
        if (confirm("Delete this TO DO?")) {
            div.remove();
            save();
        }
    };

    ft_list.prepend(div);

    if (isNew) save();
}

function save() {
    const tasks = Array.from(ft_list.querySelectorAll('div'))
                       .map(d => encodeURIComponent(d.innerText));

    document.cookie = "tasks=" + tasks.join('|') + ";path=/;max-age=31536000";
}