(()=>{
    "use strict";
    var e, v = {}, _ = {};
    function a(e) {
        var n = _[e];
        if (void 0 !== n)
            return n.exports;
        var r = _[e] = {
            exports: {}
        };
        return v[e](r, r.exports, a),
        r.exports
    }
    a.m = v,
    e = [],
    a.O = (n,r,t,o)=>{
        if (!r) {
            var c = 1 / 0;
            for (l = 0; l < e.length; l++) {
                for (var [r,t,o] = e[l], i = !0, u = 0; u < r.length; u++)
                    (!1 & o || c >= o) && Object.keys(a.O).every(s=>a.O[s](r[u])) ? r.splice(u--, 1) : (i = !1,
                    o < c && (c = o));
                if (i) {
                    e.splice(l--, 1);
                    var f = t();
                    void 0 !== f && (n = f)
                }
            }
            return n
        }
        o = o || 0;
        for (var l = e.length; l > 0 && e[l - 1][2] > o; l--)
            e[l] = e[l - 1];
        e[l] = [r, t, o]
    }
    ,
    a.d = (e,n)=>{
        for (var r in n)
            a.o(n, r) && !a.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: n[r]
            })
    }
    ,
    a.o = (e,n)=>Object.prototype.hasOwnProperty.call(e, n),
    a.r = e=>{
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    (()=>{
        var e = {
            666: 0
        };
        a.O.j = t=>0 === e[t];
        var n = (t,o)=>{
            var u, f, [l,c,i] = o, b = 0;
            if (l.some(p=>0 !== e[p])) {
                for (u in c)
                    a.o(c, u) && (a.m[u] = c[u]);
                if (i)
                    var d = i(a)
            }
            for (t && t(o); b < l.length; b++)
                a.o(e, f = l[b]) && e[f] && e[f][0](),
                e[f] = 0;
            return a.O(d)
        }
          , r = self.webpackChunkbmi_calculator_app = self.webpackChunkbmi_calculator_app || [];
        r.forEach(n.bind(null, 0)),
        r.push = n.bind(null, r.push.bind(r))
    }
    )()
}
)();