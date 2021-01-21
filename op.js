
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player4;
var player; //見どころ

var onYouTubeIframeAPIReady = function(){

    /*var*/ player4 = new YT.Player("player4", {
        videoId: "WVGpl0MkHcY", // 予告２のYouTube ID,
        // ↓引数設定↓
		  playerVars: {
            rel:0,
            showinfo:0,
			playsinline: 1
        },
        // ↓イベント設定↓
        events: {
            'onStateChange': onPlayerStateChange4 // 状態が変更された時
        }
　　　　// ↑イベント設定↑
    });

    /*var*/ player = new YT.Player("player", {
        videoId: "Ndpd9ojIhtM", // 見どころガイドのYouTube ID,
        // ↓引数設定↓
		  playerVars: {
            rel:0,
            showinfo:0,
			playsinline: 1
        },
        // ↓イベント設定↓
        events: {
            'onStateChange': onPlayerStateChange // 状態が変更された時
        }
　　　　// ↑イベント設定↑
    });
};
// 状態が変更された時
function onPlayerStateChange4(event) {
    // 現在のプレーヤーの状態を取得
    var status = event.data;
    // 再生終了時
    if (status == YT.PlayerState.ENDED) {
       // ↓任意の処理を記述↓
　　　　opYTend();
　　　　closeTR4();
　　　　// ↑任意の処理を記述↑
    }
}
// 状態が変更された時
function onPlayerStateChange(event) {
    // 現在のプレーヤーの状態を取得
    var status = event.data;
    // 再生終了時
    if (status == YT.PlayerState.ENDED) {
       // ↓任意の処理を記述↓
　　　　closeMidokoro();
　　　　// ↑任意の処理を記述↑
    }
}