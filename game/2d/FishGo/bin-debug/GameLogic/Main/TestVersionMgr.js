var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/5.
 */
/*测试版管理器*/
var TestVersionMgr = (function () {
    function TestVersionMgr() {
        this._hero = null; // 主角
    }
    Object.defineProperty(TestVersionMgr, "inst", {
        /*提供单例对象*/
        get: function () {
            if (!TestVersionMgr._inst)
                TestVersionMgr._inst = new TestVersionMgr();
            return TestVersionMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    /*初始化*/
    TestVersionMgr.prototype.initialize = function () {
        // 资源预加载｛场景资源 角色资源 怪物资源｝
        // 注册主题
        ThemeMgr.inst.registerTheme(function () {
            console.log("主题注册完成");
        });
        // 初始化输入管理器
        InputMgr.inst.initialize(InputMgr.JOYSTICK_INPUT); // 摇杆输入
        // 初始化摄像机
        var camer = CameraMgr.inst.createCamera(Camera.TYPE_DEFAULT, 1280, 960);
        camer.focusWidth = 320;
        camer.focusHeight = 240;
        // 初始化一份玩家数据
        var playerData = new PlayerData();
        playerData.id = 1001;
        playerData.templateId = 3;
        var ani = new ActionAni();
        // ani.unique = "attack1_+1";
        // ani.skill = "attack1";
        // ani.attack = "attack";
        // ani.stand = "steady";
        // ani.born = "steady";
        // ani.walk = "steady2";
        ani.unique = "uniqueAttack";
        ani.skill = "skillAttack1";
        ani.attack = "normalAttack";
        ani.stand = "win";
        ani.born = "win";
        ani.walk = "run";
        ani.death = "death";
        ani.damage = "hit";
        playerData.actionAni = ani;
        playerData.name = "测试名字";
        playerData.avatar = playerData.templateId + "_player";
        playerData.attack = 1000;
        playerData.defense = 200;
        playerData.gold = 123;
        playerData.money = 321;
        playerData.weaponId = 1;
        playerData.lv = 23;
        // 添加玩家数据
        PlayerDataMgr.inst.addPlayerData(playerData, true); // 英雄玩家
        // 创建一个玩家
        var player = PlayerMgr.inst.createPlayer(playerData.templateId, playerData.id);
        CameraMgr.inst.setTarget(player);
        ResourceMgr.inst.loadGroup("home_ui", function () {
            // 进入场景
            SceneMgr.inst.enter(6);
        });
    };
    /*开始游戏*/
    TestVersionMgr.prototype.start = function () {
        var player = PlayerMgr.inst.getPlayer(1001); // 获取一个玩家
        if (player)
            player.born(500, 500);
        this._hero = player;
        this._hero.speed = 10;
        /*let player1:Player = PlayerMgr.inst.getPlayer(1002);   // 获取一个玩家
        if(player1)
            player1.born(300, 500);*/
    };
    return TestVersionMgr;
}());
TestVersionMgr._inst = null;
__reflect(TestVersionMgr.prototype, "TestVersionMgr");
//# sourceMappingURL=TestVersionMgr.js.map