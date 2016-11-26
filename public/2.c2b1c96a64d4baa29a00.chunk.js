webpackJsonp([2],{801:function(n,t,o){"use strict";var e=o(18),r=o(0),i=o(111),a=o(808),u=o(812),m=o(261),s=function(){function LoginModule(){}return LoginModule.routes=u.routes,LoginModule=__decorate([r.NgModule({declarations:[a.LoginComponent],imports:[e.CommonModule,i.RouterModule.forChild(u.routes),m.MaterialModule.forRoot()]}),__metadata("design:paramtypes",[])],LoginModule)}();t.LoginModule=s},808:function(n,t,o){"use strict";var e=o(0),r=o(111),i=function(){function LoginComponent(n){this.router=n,this.role="employee"}return LoginComponent.prototype.ngOnInit=function(){},LoginComponent.prototype.selectRole=function(n){this.role=n},LoginComponent.prototype.selectStartup=function(n){this.startup=n},LoginComponent.prototype.login=function(){"investor"!=this.role?this.router.navigate(["/startup/"+this.startup+"/"+this.role]):this.router.navigate(["/"+this.role])},LoginComponent=__decorate([e.Component({selector:"login",providers:[],styles:[o(817)],template:o(822)}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof r.Router&&r.Router)&&n||Object])],LoginComponent);var n}();t.LoginComponent=i},812:function(n,t,o){"use strict";var e=o(808);t.routes=[{path:"",component:e.LoginComponent}]},817:function(n,t){n.exports="/*styles for home content only*/\n.logo {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  width: 80%;\n  display: block;\n  margin: 0 auto; }\n"},822:function(n,t){n.exports='<img src="./assets/img/chaintonic.png" class="logo">\r\n<md-card>\r\n   <md-card-subtitle>Welcome!</md-card-subtitle>\r\n   <md-card-title>Login</md-card-title>   \r\n   <md-card-content>\r\n        <md-input placeholder="Username / Email" maxlength="100" class="demo-full-width"\r\n          value="">\r\n        </md-input>\r\n        <md-input placeholder="Password" type="password" class="demo-full-width"\r\n          value="">\r\n        </md-input>\r\n        <button md-raised-button color="accent" [md-menu-trigger-for]="menu">\r\n            <span>Role</span>\r\n        </button>\r\n        <button md-raised-button color="accent" [md-menu-trigger-for]="startupmenu" *ngIf="role != \'investor\'">\r\n            <span>Startup</span>\r\n        </button>\r\n        <md-menu #menu="mdMenu">\r\n            <button md-menu-item (click)="selectRole(\'employee\')"> \r\n                <md-icon> person </md-icon>\r\n                <span> Employee </span>\r\n            </button>\r\n            <button md-menu-item (click)="selectRole(\'chief\')"> \r\n                <md-icon> tag_faces </md-icon>\r\n                <span> Chief </span>\r\n            </button>\r\n            <button md-menu-item (click)="selectRole(\'investor\')"> \r\n                <md-icon> attach_money </md-icon>\r\n                <span> Investor </span>\r\n            </button>\r\n        </md-menu>\r\n        <md-menu #startupmenu="mdMenu">\r\n            <button md-menu-item (click)="selectStartup(\'chaintonic\')"> \r\n                <md-icon> star </md-icon>\r\n                <span> ChainTonic </span>\r\n            </button>\r\n            <button md-menu-item (click)="selectStartup(\'ustglobal\')"> \r\n                <md-icon> star </md-icon>\r\n                <span> UST GLobal </span>\r\n            </button>\r\n            <button md-menu-item (click)="selectStartup(\'unir\')"> \r\n                <md-icon> star </md-icon>\r\n                <span> UNIR </span>\r\n            </button>\r\n        </md-menu>\r\n   </md-card-content>\r\n   <md-card-actions>\r\n        <button md-raised-button color="warn" (click)="login()">Login</button>\r\n   </md-card-actions>\r\n</md-card>'}});