"use strict";
function slugify(str) {
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();
    let from = [
        'а',
        'б',
        'в',
        'г',
        'д',
        'е',
        'ж',
        'з',
        'и',
        'й',
        'к',
        'л',
        'м',
        'н',
        'о',
        'п',
        'р',
        'с',
        'т',
        'у',
        'ф',
        'х',
        'ц',
        'ч',
        'ш',
        'щ',
        'ъ',
        'ь',
        'ю',
        'я',
    ];
    let to = [
        'a',
        'b',
        'v',
        'g',
        'd',
        'e',
        'zh',
        'z',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'r',
        's',
        't',
        'u',
        'f',
        'h',
        'c',
        'ch',
        'sh',
        'sht',
        'y',
        '',
        'iu',
        'ia',
    ];
    for (let key in from) {
        str = str.replace(new RegExp(from[key], 'g'), to[key]);
    }
    str = str
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    return str;
}
//# sourceMappingURL=slugify.js.map