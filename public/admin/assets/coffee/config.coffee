define ["jquery"], ($) ->
    prefix = 'http://' + window.location.hostname + '/'
    API:
        me: prefix + "user/CurrentData"
        Upload: prefix + "motel/upload"
        Room: prefix + "room"
        User: prefix + "user"
        Motel: prefix + "motel"
        New: prefix + "new"
        Rank: prefix + "order"
        Order: prefix + "order"
    Order:
        Status: ['等待客人', '進房完成', '取消']
    Upload:
        path: prefix + 'uploads/'