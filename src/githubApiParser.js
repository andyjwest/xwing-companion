
const referenceMap = new Map([
    ['A', {direction: 'Left', type: 'Reverse Bank', faIconName: 'arrow-down', iconRotation: 'rotate(45deg)'}],
    ['E', {direction: "Left", type: "Tallon Roll", faIconName: 'arrow-left'}],
    ['L', {direction: "Left", type: "Segnor's Loop", faIconName: 'arrow-left'}],
    ['T', {direction: "Left", type: "Turn", faIconName: 'arrow-left'}],
    ['B', {direction: "Left", type: "Bank", faIconName: 'arrow-left', iconRotation: 'rotate(45deg)'}],
    ['F', {direction: null, type: "Straight", faIconName: 'arrow-up'}],
    ['S', {direction: null, type: "Reverse Straight", faIconName: 'arrow-down'}],
    ['N', {direction: "Right", type: "Bank", faIconName: 'arrow-up', iconRotation: 'rotate(45deg)'}],
    ['Y', {direction: "Right", type: "Turn", faIconName: 'arrow-right'}],
    ['P', {direction: "Right", type: "Segnor's Loop", faIconName: 'arrow-right'}],
    ['R', {direction: "Right", type: "Tallon Roll", faIconName: 'arrow-right'}],
    ['D', {direction: "Right", type: "Reverse Bank", faIconName: 'arrow-right', iconRotation: 'rotate(45deg)'}],
    ['K', {direction: null, type: "Koiogran Turn", faIconName: 'undo'}],
    ['O', {direction: null, type: "Stationary", faIconName: 'stop'}]
]);

const colorReference = new Map([
    ['B', 'blue'],
    ['W', 'while'],
    ['R', 'red']
])
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

export function covertDialToObject(dial) {
    if (dial) {
        return dial.map(man => {
            let array = man.split("");
            if(referenceMap.get(array[1])){
                return {
                    key: man,
                    speed: parseInt(array[0]),
                    bearing: {
                        type: referenceMap.get(array[1]).type,
                        direction: referenceMap.get(array[1]).direction
                    },
                    color: colorReference.get(array[2]),
                    faIconName: referenceMap.get(array[1]).faIconName,
                    iconRotation: referenceMap.get(array[1]).iconRotation
                };
            }else{
                console.log(man)
                return {};
            }
        });
    }
    return null;
}