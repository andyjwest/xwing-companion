export const maneuverSpeeds = [0,1,2,3,4,5];
export const maneuverColumns =['A','E','L','T','B','F','S','N','Y','P','R','D','K','O'];

export const referenceMap = new Map([
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