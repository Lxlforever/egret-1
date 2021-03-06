var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/12.
 */
/*玩家数据管理器*/
var PlayerMgr = (function () {
    function PlayerMgr() {
        this._dataPool = null; // 数据池
        this.init();
    }
    // 初始化管理器
    PlayerMgr.prototype.init = function () {
        this._dataPool = {};
    };
    /*创建玩家*/
    PlayerMgr.prototype.createPlayer = function (id) {
        if (this._dataPool[id])
            return this._dataPool[id];
        var player = new Player(id);
        this._dataPool[id] = player;
        return player;
    };
    /*获取玩家*/
    PlayerMgr.prototype.getPlayer = function (id) {
        return this._dataPool[id];
    };
    Object.defineProperty(PlayerMgr, "inst", {
        /*对外提供唯一单例*/
        get: function () {
            if (!PlayerMgr._inst)
                PlayerMgr._inst = new PlayerMgr();
            return PlayerMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return PlayerMgr;
}());
PlayerMgr._inst = null;
__reflect(PlayerMgr.prototype, "PlayerMgr");
