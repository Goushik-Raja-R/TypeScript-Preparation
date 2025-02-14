var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Photos = /** @class */ (function () {
    function Photos(angle, filter, ratio) {
        this.angle = angle;
        this.filter = filter;
        this.ratio = ratio;
    }
    Photos.prototype.GetreelTime = function () {
        return 8;
    };
    return Photos;
}());
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(angle, filter, ratio) {
        var _this = _super.call(this, angle, filter, ratio) || this;
        _this.angle = angle;
        _this.filter = filter;
        _this.ratio = ratio;
        return _this;
    }
    Instagram.prototype.getsepia = function () {
        console.log("Sepia");
    };
    return Instagram;
}(Photos));
var User1 = new Instagram("Nintey degree", "vintage", 16);
User1.getsepia();
