const teachers = [
    { name: 'nguyễn xuân quang'},
    { name: 'đinh trần phương'},
    { name: 'trương nam phương'},
    { name: 'nguyễn tiến trung'},
    { name: 'nguyễn thị ngọc oanh'},
    { name: 'đặng ngọc phương'},
    { name: 'nguyễn văn bắc'},
    { name: 'mai thành sơn'},
    { name: 'nguyễn văn quảng'},
    { name: 'đặng thị thu hà'},
    { name: 'huỳnh thị ai tâm'},
    { name: 'nguyễn quang anh'},
    { name: 'mai thị thủy'},
    { name: 'bùi thị nhiệm'},
    { name: 'phạm ngọc hùng'},
    { name: 'nguyễn thị nhật'},
    { name: 'lê khả chiến'},
    { name: 'nguyễn duy tuyến'},
    { name: 'lê thị thúy'},
    { name: 'bùi tiến dũng'},
    { name: 'ninh hạnh quyên'},
    { name: 'trần thị thu thảo'},
    { name: 'nguyễn văn định'},
    { name: 'nguyễn văn mạnh'},
    { name: 'nguyễn thị thúy hường'},
    { name: 'nguyễn thị hồng'}
];
// const teachers = [
//     {name: 'nguyễn xuân quang'},
//     {name: 'đinh trần phương'},
//     {name: 'nguyễn tiến trung'},
//     {name: 'nguyễn thị hồng'}
// ];

const list = document.getElementById('list');

function setList(group) {
    clearList();
    for (const teacher of group) {
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode(teacher.name);
        item.appendChild(text);
        list.appendChild(item);
    }
    if (group.length === 0) {
        khongKetQua();
    }
}

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function khongKetQua() {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode('Không có kết quả');
    item.appendChild(text);
    list.appendChild(item);
}

function getRelevancy(value, searchTerm) {
    if (value === searchTerm) {
        return 2;
    } else if (value.startsWith(searchTerm)) {
        return 1;
    } else if (value.includes(searchTerm)) {
        return 0;
    } else {
        return -1;
    }
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    var value = event.target.value;
    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();
        setList(teachers.filter(teacher => {
            return teacher.name.includes(value);
        }).sort((teacherA,teacherB) => {
            return getRelevancy(teacherB.name, value) - getRelevancy(teacherA.name, value);
        }));
    } else {
        clearList();
    }
});














