const { unlink } = require("fs");

let utility = {};
utility.types = {
    media : ["mp4","mkv"],
    archives : ["zip","7z","rar","tar","gz","ar","iso","xz"],
    app : ['exe','apk','dmg','pkg','deb'],
    documents : ['docx','doc','pdf','xls','xlsx','odt','ods','odp','odg','odf','txt', 'ps','tex'],
    image : ['png','svg','jpeg']
}
module.exports = utility;