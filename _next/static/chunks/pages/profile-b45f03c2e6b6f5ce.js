(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[277], {
    6896: function(e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/profile", function() {
            return t(2264)
        }
        ])
    },
    2264: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            default: function() {
                return _
            }
        });
        var s = t(5893)
          , r = t(9008)
          , c = t.n(r)
          , i = t(7294)
          , a = t(3388)
          , o = t(4e3)
          , l = t(3111)
          , u = t(3002);
        function _() {
            let[e,n] = (0,
            i.useState)(u.Ys.MAIN)
              , [t,r] = (0,
            i.useState)()
              , [_,x] = (0,
            i.useState)()
              , [d,h] = (0,
            i.useState)(u.iy.PHOENIX)
              , [m,A] = (0,
            i.useState)();
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsxs)(c(), {
                    children: [(0,
                    s.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }), (0,
                    s.jsx)("title", {
                        children: a.FV.profile
                    })]
                }), (0,
                s.jsx)(o.JT.Provider, {
                    value: {
                        selectedMenuItem: e,
                        setSelectedMenuItem: n,
                        selectedUser: t,
                        setSelectedUser: r,
                        selectedTax: _,
                        setSelectedTax: x,
                        selectedCrossServer: d,
                        setSelectedCrossServer: h,
                        crossServerList: m,
                        setCrossServerList: A
                    },
                    children: (0,
                    s.jsx)(l.NZ, {})
                })]
            })
        }
    },
    3111: function(e, n, t) {
        "use strict";
        t.d(n, {
            rh: function() {
                return Z
            },
            qZ: function() {
                return C
            },
            SK: function() {
                return i
            },
            oe: function() {
                return E
            },
            Sq: function() {
                return q
            },
            $S: function() {
                return K
            },
            $r: function() {
                return G
            },
            NZ: function() {
                return b
            },
            MG: function() {
                return P
            },
            k3: function() {
                return x
            },
            Fe: function() {
                return f
            }
        });
        var s = t(5893)
          , r = t(7294)
          , c = t(242);
        let i = () => (0,
        s.jsxs)(s.Fragment, {
            children: [(0,
            s.jsx)(c.Rv, {}), (0,
            s.jsx)(c.H0, {}), (0,
            s.jsx)(c.rf, {}), (0,
            s.jsx)(c.vk, {}), (0,
            s.jsx)(c.dk, {})]
        });
        var a = t(5675)
          , o = t.n(a)
          , l = {
            src: "/_next/static/media/background.c9472257.webp",
            height: 4564,
            width: 3456,
            blurDataURL: "data:image/webp;base64,UklGRqAAAABXRUJQVlA4WAoAAAAQAAAABQAABwAAQUxQSC0AAAABYCVJkuloLZ5tm1+KiOgNjKi8MlH8R5kr/77KsquS5pnmxpHfqCVUowKkBgAAVlA4IEwAAADQAQCdASoGAAgAAkA4JbACdAD0Z5JeoAD+9Lolw1Q+kEs68lxyuXb6H9G6vQ0YpsR/xjNetf9qh46uXa+e8rX7avWGF7usKQBtAAAA",
            blurWidth: 6,
            blurHeight: 8
        }
          , u = t(4213)
          , _ = t.n(u);
        let x = () => (0,
        s.jsxs)("section", {
            className: _().section,
            children: [(0,
            s.jsx)(o(), {
                src: l,
                alt: "background",
                className: _().bg
            }), (0,
            s.jsx)(c.Qz, {})]
        });
        var d = t(1163)
          , h = t(3388)
          , m = t(3940)
          , A = t.n(m);
        let f = () => {
            let e = (0,
            d.useRouter)();
            return (0,
            s.jsxs)("section", {
                className: A().section,
                children: [(0,
                s.jsx)(o(), {
                    src: l,
                    alt: "background",
                    className: A().bg
                }), (0,
                s.jsx)(c.oI, {
                    termsList: "/document/terms" === e.pathname ? h.tG : h.ye
                })]
            })
        }
        ;
        var j = t(4269)
          , p = t(3710)
          , N = t.n(p);
        let b = () => (0,
        s.jsx)("section", {
            className: N().section,
            children: (0,
            s.jsx)(j.W2, {
                className: N().container,
                children: (0,
                s.jsx)(c.H6, {})
            })
        });
        var v = t(4e3)
          , w = t(3002)
          , k = t(5141)
          , g = t.n(k);
        let C = () => {
            let {user: e} = (0,
            r.useContext)(v.Il)
              , n = (0,
            d.useRouter)();
            return (0,
            r.useEffect)( () => {
                (null == e ? void 0 : e.role) !== w.i4.ADMIN && n.push("/profile")
            }
            , []),
            (0,
            s.jsx)("section", {
                className: g().section,
                children: (0,
                s.jsx)(j.W2, {
                    className: g().container,
                    children: (null == e ? void 0 : e.role) === w.i4.ADMIN && (0,
                    s.jsx)(c.wo, {})
                })
            })
        }
        ;
        var R = t(2517)
          , I = t.n(R);
        let E = () => (0,
        s.jsx)("section", {
            className: I().section,
            children: (0,
            s.jsx)(j.W2, {
                className: I().container,
                children: (0,
                s.jsx)(c.BT, {})
            })
        });
        var S = t(8954)
          , B = t.n(S);
        let P = () => {
            let {user: e} = (0,
            r.useContext)(v.Il)
              , n = (0,
            d.useRouter)();
            return (0,
            r.useEffect)( () => {
                (null == e ? void 0 : e.role) !== w.i4.ADMIN && n.push("/profile")
            }
            , []),
            (0,
            s.jsx)("section", {
                className: B().section,
                children: (0,
                s.jsx)(j.W2, {
                    className: B().container,
                    children: (null == e ? void 0 : e.role) === w.i4.ADMIN && (0,
                    s.jsx)(c.cx, {})
                })
            })
        }
        ;
        var Q = t(2920)
          , W = t(5683)
          , D = t(7435)
          , y = t(601)
          , M = t.n(y);
        let Z = e => {
            let {accounts: n, fetchUser: t, secret: c} = e
              , [i,a] = (0,
            r.useState)(!1)
              , {setPopupDataOrType: o, setSelectedForgottenPaasswordAccount: l} = (0,
            r.useContext)(v.Il)
              , {push: u} = (0,
            d.useRouter)()
              , _ = async e => {
                t && (a(!0),
                c ? (o(w.ZQ.CHANGE_FORGOTTEN_PASSWORD),
                l({
                    secret: c,
                    accountId: e.id,
                    server: e.server
                }),
                document.body.style.overflow = "hidden") : (0,
                D.bs)(e).then( () => {
                    u("/profile"),
                    t()
                }
                ).catch(e => {
                    u("/"),
                    Q.Am.error(e.message)
                }
                ),
                a(!1))
            }
            ;
            return (0,
            s.jsx)("section", {
                className: M().section,
                children: (0,
                s.jsx)(j.W2, {
                    className: M().container,
                    children: n ? (0,
                    s.jsxs)("div", {
                        className: M().main,
                        children: [(0,
                        s.jsx)("h3", {
                            className: M().title,
                            children: "Выберите аккаунт"
                        }), n.map(e => (0,
                        s.jsx)(W.zx, {
                            text: e.name,
                            buttonType: w.L$.BIG_PINK,
                            className: M().button,
                            onClickButton: () => _(e),
                            loading: i
                        }, e.id))]
                    }) : (0,
                    s.jsx)(W.B0, {
                        classNames: M().loader
                    })
                })
            })
        }
        ;
        var H = t(5811)
          , F = t.n(H);
        let G = () => {
            let {user: e} = (0,
            r.useContext)(v.Il)
              , n = (0,
            d.useRouter)();
            return (0,
            r.useEffect)( () => {
                (null == e ? void 0 : e.role) !== w.i4.ADMIN && n.push("/profile")
            }
            , []),
            (0,
            s.jsx)("section", {
                className: F().section,
                children: (0,
                s.jsx)(j.W2, {
                    className: F().container,
                    children: (null == e ? void 0 : e.role) === w.i4.ADMIN && (0,
                    s.jsx)(c.xm, {})
                })
            })
        }
        ;
        var L = t(5417)
          , T = t.n(L);
        let q = () => (0,
        s.jsx)("section", {
            className: T().section,
            children: (0,
            s.jsx)(j.W2, {
                className: T().container,
                children: (0,
                s.jsx)(c.cc, {})
            })
        });
        var O = t(9135)
          , J = t.n(O);
        let K = () => (0,
        s.jsx)("section", {
            className: J().main,
            children: (0,
            s.jsx)(j.W2, {
                className: J().container,
                children: (0,
                s.jsx)(c.zu, {})
            })
        })
    },
    601: function(e) {
        e.exports = {
            section: "authCallback_section__hrxYn",
            container: "authCallback_container__Plb6q",
            loader: "authCallback_loader__ZrLnA",
            main: "authCallback_main__s8BDu",
            main_wrapper: "authCallback_main_wrapper__wrjMB",
            title: "authCallback_title__pUo0Z",
            button: "authCallback_button__mFLEw"
        }
    },
    5141: function(e) {
        e.exports = {
            section: "changeNews_section__08xtg",
            container: "changeNews_container__deEZT"
        }
    },
    2517: function(e) {
        e.exports = {
            section: "maps_section__Rzvvl",
            container: "maps_container___ph3b"
        }
    },
    5417: function(e) {
        e.exports = {
            section: "news_section__TvJFL",
            container: "news_container__R3RPA"
        }
    },
    9135: function(e) {
        e.exports = {
            main: "pay_main__qhZ8c",
            container: "pay_container__5RFrd"
        }
    },
    5811: function(e) {
        e.exports = {
            section: "payoutPanel_section__rdzdu",
            container: "payoutPanel_container__HjV5w"
        }
    },
    3710: function(e) {
        e.exports = {
            section: "profile_section__NPoHn",
            container: "profile_container__BOaLM"
        }
    },
    8954: function(e) {
        e.exports = {
            section: "serverPanel_section___6m_Q",
            container: "serverPanel_container__aWR5x"
        }
    },
    4213: function(e) {
        e.exports = {
            section: "shop_section__r5mUx",
            bg: "shop_bg__ben0s"
        }
    },
    3940: function(e) {
        e.exports = {
            section: "terms_section__RoYZs",
            bg: "terms_bg__InJ5e"
        }
    },
    9008: function(e, n, t) {
        e.exports = t(2636)
    }
}, function(e) {
    e.O(0, [774, 888, 179], function() {
        return e(e.s = 6896)
    }),
    _N_E = e.O()
}
]);
