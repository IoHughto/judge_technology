var records = [
    { id: 1, username: 'jkellman', password: '89556850', displayName: 'Jonah Kellman' },
    { id: 2, username: 'tgulley', password: '3103902087', displayName: 'Trevor Gulley' },
    { id: 3, username: 'mlinscott', password: '3223951534', displayName: 'Megan Linscott' },
    { id: 4, username: 'jemery', password: '9101698104', displayName: 'Jeffrey Emery' },
    { id: 5, username: 'ccahill', password: '98991010', displayName: 'Chris Cahill' },
    { id: 6, username: 'ehare', password: '7208230135', displayName: 'Elizabeth Hare' },
    { id: 7, username: 'eraff', password: '1208312089', displayName: 'Elliot Raff' },
    { id: 8, username: 'cwendelboe', password: '1101745766', displayName: 'Chris Wendelboe' },
    { id: 9, username: 'cfeatherer', password: '7102046136', displayName: 'Charles Featherer' },
    { id: 10, username: 'tprodigalidad', password: '3214072503', displayName: 'Tate Prodigalidad' },
    { id: 11, username: 'jsteet', password: '8102096198', displayName: 'Joe Steet' },
    { id: 12, username: 'djackson', password: '5210119497', displayName: 'Daniel Jackson' },
    { id: 13, username: 'aeidelsafy', password: '7208162501', displayName: 'Adam Eidelsafy' },
    { id: 14, username: 'cculpon', password: '3103625099', displayName: 'Chase Culpon' },
    { id: 15, username: 'crumore', password: '1201522643', displayName: 'Chris Rumore' },
    { id: 16, username: 'hwiest', password: '2102314312', displayName: 'Hank Wiest' },
    { id: 17, username: 'jkriner', password: '1203031923', displayName: 'Jacob Kriner' },
    { id: 18, username: 'jeveland', password: '7223771915', displayName: 'James Eveland' },
    { id: 19, username: 'ahullings', password: '2208467096', displayName: 'Anthony Hullings' },
    { id: 20, username: 'gmedeiros', password: '8223744279', displayName: 'Gil Medeiros' },
    { id: 21, username: 'rsalamin', password: '19566502', displayName: 'Risk Salamin' },
    { id: 22, username: 'jhughto', password: '9102402960', displayName: 'Joe Hughto' }
];

exports.findById = function(id, cb) {
    process.nextTick(function() {
        var idx = id - 1;
        if (records[idx]) {
            cb(null, records[idx]);
        } else {
            cb(new Error('User ' + id + ' does not exist'));
        }
    });
};

exports.findByUsername = function(username, cb) {
    process.nextTick(function() {
        for (var i = 0, len = records.length; i < len; i++) {
            var record = records[i];
            if (record.username === username) {
                return cb(null, record);
            }
        }
        return cb(null, null);
    });
};