(() => {
    // 左右のエリアを非表示化
    [
        '#_mainContentExpandLeft',
        '#_mainContentExpandRight'
    ].forEach(function(query) {
        const element = document.querySelector(query);
        if (/_showDescription/.test(element.getAttribute('class'))) {
            element.click();
        }
    });

    // 左右のエリアを非表示化
    [
        '#_mainContentExpandLeft',
        '#_mainContentExpandRight'
    ].forEach(function(query) {
        document.querySelector(query).click();
    });

    // 不要なUIを非表示化
    [
        '#_globalHeader',
        '#_roomTitle',
        '#_sideContent',
        '#_subContent',
        '#_subRoomMemberArea',
        '#_chatSendArea'
    ].forEach(function(query) {
        document.querySelector(query).style.display = 'none';
    });

    setTimeout(function() {
        // チャット領域の高さを限界まで広げる
        document.querySelector('#_timeLine').style.height = document.documentElement.clientHeight + 'px';
    }, 500);
})();
