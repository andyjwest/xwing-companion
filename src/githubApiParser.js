import pilots from './data/pilots/galactic-empire/galactic-empire'
const referenceMap = new Map([
    ['A', {direction: 'Left', type: 'Reverse Bank'}],
    ['E', {direction: "Left", type: "Tallon Roll"}],
    ['L', {direction: "Left", type: "Segnor's Loop"}],
    ['T', {direction: "Left", type: "Turn"}],
    ['B', {direction: "Left", type: "Bank"}],
    ['F', {direction: null, type: "Straight"}],
    ['S', {direction: null, type: "Reverse Straight"}],
    ['N', {direction: "Right", type: "Bank"}],
    ['Y', {direction: "Right", type: "Turn"}],
    ['P', {direction: "Right", type: "Segnor's Loop"}],
    ['R', {direction: "Right", type: "Tallon Roll"}],
    ['D', {direction: "Right", type: "Reverse Bank"}],
    ['K', {direction: null, type: "Koiogran Turn"}],
    ['O', {direction: null, type: "Stationary"}]
]);
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

export function buildShips() {
    console.log(pilots);
}


export function covertDialToObject(dial) {
    if (dial) {
        return dial.map(man => {
            let array = man.split("");
            if(referenceMap.get(array[1])){
                return {
                    speed: array[0],
                    bearing: {
                        type: referenceMap.get(array[1]).type,
                        direction: referenceMap.get(array[1]).direction
                    },
                    color: array[2]
                };
            }else{
                console.log(man)
                return {};
            }
        });
    }
    return null;
}