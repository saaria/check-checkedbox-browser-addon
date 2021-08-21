let count = 0;
const elements = document.getElementsByTagName('input');
for (let i = 0; i < elements.length; i++){
    if (elements.item(i).type === 'checkbox' && elements.item(i).checked) {
        count++;
    }
}

if (count > 0) {
        let save = browser.storage.local.get(location.href);
        save.then((storedInfo) => {
            let status = storedInfo[Object.keys(storedInfo)[0]];
            if (status) alert(count+' checked checkbox found.');
        });
}
