(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[202],{212:function(e,t,s){"use strict";var n,r=s(131),i=(s(129),s(130),s(137),s(134)),l=s(144),a=s(133),u=s(143),o=(s(132),s(135),s(136),s(139)),c=s(217);let d=n=class extends o.a{constructor(e){super(e),this.end=null,this.start=null}static get allTime(){return m}static get empty(){return g}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(n.allTime)}get isEmpty(){return this.equals(n.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new n({end:this.end,start:this.start})}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone();const t=this.start?Object(c.e)(this.start,e):null,s=this.end?Object(c.c)(Object(c.e)(this.end,e),1,e):null;return new n({start:t,end:s})}intersection(e){var t,s,r,i,l,a,u,o;if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return n.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const c=null!=(t=null==(s=this.start)?void 0:s.getTime())?t:-1/0,d=null!=(r=null==(i=this.end)?void 0:i.getTime())?r:1/0,m=null!=(l=null==(a=e.start)?void 0:a.getTime())?l:-1/0,g=null!=(u=null==(o=e.end)?void 0:o.getTime())?u:1/0;let h,p;if(m>=c&&m<=d?h=m:c>=m&&c<=g&&(h=c),d>=m&&d<=g?p=d:g>=c&&g<=d&&(p=g),!isNaN(h)&&!isNaN(p)){const e=new n;return e.start=h===-1/0?null:new Date(h),e.end=p===1/0?null:new Date(p),e}return n.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone();const s=new n,{start:r,end:i}=this;return r&&(s.start=Object(c.c)(r,e,t)),i&&(s.end=Object(c.c)(i,e,t)),s}equals(e){if(!e)return!1;const t=this.start?this.start.getTime():this.start,s=this.end?this.end.getTime():this.end,n=e.start?e.start.getTime():e.start,r=e.end?e.end.getTime():e.end;return t===n&&s===r}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return m.clone();const t=this.start&&e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,s=this.end&&e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new n({start:t,end:s})}};Object(r.a)([Object(i.b)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"end",void 0),Object(r.a)([Object(l.a)("end")],d.prototype,"readEnd",null),Object(r.a)([Object(u.a)("end")],d.prototype,"writeEnd",null),Object(r.a)([Object(i.b)({readOnly:!0,json:{read:!1}})],d.prototype,"isAllTime",null),Object(r.a)([Object(i.b)({readOnly:!0,json:{read:!1}})],d.prototype,"isEmpty",null),Object(r.a)([Object(i.b)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"start",void 0),Object(r.a)([Object(l.a)("start")],d.prototype,"readStart",null),Object(r.a)([Object(u.a)("start")],d.prototype,"writeStart",null),d=n=Object(r.a)([Object(a.a)("esri.TimeExtent")],d);const m=new d,g=new d({start:void 0,end:void 0});var h=d;t.a=h},217:function(e,t,s){"use strict";s.d(t,"a",(function(){return r})),s.d(t,"b",(function(){return u})),s.d(t,"c",(function(){return a})),s.d(t,"d",(function(){return l})),s.d(t,"e",(function(){return o}));s(129);var n=s(148);function r(e){return e}const i={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}},l=Object(n.b)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:null});function a(e,t,s){const n=new Date(e.getTime());if(t&&s){const e=i[s],{getter:r,setter:l,multiplier:a}=e;n[l](n[r]()+t*a)}return n}const u={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8};function o(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return null}}}}]);
//# sourceMappingURL=202.c193efa8.chunk.js.map