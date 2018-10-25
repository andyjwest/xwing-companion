function nestedCrap(data, callback) {
    data.forEach(entity => {
        if (entity.type === "dir") {
            console.log(data)
            fetch(entity.url).then(res => res.json()).then(newData => nestedCrap(newData, callback))
        } else if (entity.type === "file") {
            fetch(entity.download_url).then(res => res.json()).then(stateData => callback(stateData))
        }
    })

}

export function extract(folder, callback) {
    fetch("https://api.github.com/repos/andyjwest/xwing-data2/contents/data/" + folder)
        .then(res => res.json())
        .then(data => nestedCrap(data, callback))
}