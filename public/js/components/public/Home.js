var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        return _super.call(this, props) || this;
        //this.state = { :  };
    }
    Home.prototype.render = function () {
        return (React.createElement("h1", { className: "text-center" }, "We're Home"));
    };
    return Home;
}(React.Component));
export default Home;
