const { processArray, formatArrayStrings } = require('./arrayManipulation');

function createUserProfiles(names, modifiedNames) {
    let userProfiles = [];
    for (let i = 0; i < names.length; i++) {
        userProfiles.push({
            id: i + 1,
            originalName: names[i],
            modifiedName: modifiedNames[i]
        });
    }
    return userProfiles;
}