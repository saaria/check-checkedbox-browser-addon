let count = 0;
const elements = document.getElementsByTagName('input');
for (let i = 0; i < elements.length; i++){
    if (elements.item(i).type === 'checkbox' && elements.item(i).checked) {
        count++;
    }
}
if (count > 0) {
    alert(count+' checked checkbox found.');
}