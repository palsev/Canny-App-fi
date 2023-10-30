(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6128],
  {
    72198: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return d;
        }
      });
      var s = n(67294),
        a = n(94184),
        r = n.n(a),
        l = n(67667),
        i = n.n(l),
        c = n(3612),
        o = n(86920),
        u = n(85893),
        d = function () {
          var e = (0, s.useState)(0),
            t = e[0],
            n = e[1];
          return [
            t,
            (0, s.useCallback)(
              function () {
                n(function (e) {
                  return e + 1;
                });
              },
              [n]
            )
          ];
        };
      t.Z = function (e) {
        var t = e.title,
          n = e.balance,
          a = e.available,
          l = e.placeholder,
          d = e.options,
          m = e.selectedToken,
          f = e.clearTrigger,
          x = e.decimals,
          h = e.selectedChange,
          p = e.changeValue,
          v = e.maxAmount,
          g = e.errMsg,
          b = e.moreInfo,
          j = e.onChange,
          y = void 0 === j ? function () {} : j,
          _ = (0, s.useState)(!1),
          w = _[0],
          N = _[1],
          k = (0, o.Z)().theme,
          F = (0, s.useState)(""),
          I = F[0],
          Z = F[1],
          C = function (e) {
            Z(""), y(0), h(e), N(!1);
          };
        return (
          (0, s.useEffect)(
            function () {
              p && (Z((0, c.FR)(p, !1, null != x ? x : 18)), y(p));
            },
            [p]
          ),
          (0, s.useEffect)(
            function () {
              Z("");
            },
            [f]
          ),
          (0, u.jsxs)("div", {
            className: r()(i().inputWrapper, g && i().error),
            children: [
              (t || n || a) &&
                (0, u.jsxs)("div", {
                  className:
                    "flex items-center justify-between mb-2 color-white",
                  children: [
                    t && (0, u.jsx)("div", { className: "", children: t }),
                    n &&
                      (0, u.jsxs)("div", {
                        children: [
                          "Balance: ",
                          (0, u.jsx)("span", {
                            className: "color-blue",
                            children: n
                          })
                        ]
                      }),
                    a &&
                      (0, u.jsxs)("div", {
                        children: [
                          "Available: ",
                          (0, u.jsx)("span", {
                            className: "color-blue",
                            children: a
                          })
                        ]
                      })
                  ]
                }),
              (0, u.jsxs)("div", {
                className: i().inputContent,
                children: [
                  d &&
                    (0, u.jsxs)(u.Fragment, {
                      children: [
                        (0, u.jsxs)("div", {
                          className: i().selectBox,
                          children: [
                            (0, u.jsxs)("div", {
                              className: r()(
                                i().select,
                                "flex justify-between items-center"
                              ),
                              onClick: function () {
                                return N(function (e) {
                                  return !e;
                                });
                              },
                              children: [
                                (0, u.jsx)("div", { children: m }),
                                (0, u.jsx)("img", {
                                  src:
                                    "default" === k
                                      ? "/assets/arrow-down-default.svg"
                                      : "/assets/arrow-down-dark.svg",
                                  className: r()("w-6", w && i().reverse)
                                })
                              ]
                            }),
                            (0, u.jsx)("div", {
                              className: r()(i().options, w && i().visible),
                              children: d.map(function (e, t) {
                                return (0, u.jsx)(
                                  "div",
                                  {
                                    onClick: function () {
                                      return C(e);
                                    },
                                    className: r()(
                                      i().option,
                                      e === m && i().active
                                    ),
                                    children: e
                                  },
                                  t
                                );
                              })
                            })
                          ]
                        }),
                        (0, u.jsx)("div", { className: i().divider })
                      ]
                    }),
                  (0, u.jsx)("input", {
                    onChange: function (e) {
                      var t = e.target.value,
                        n = /[^\d.]/g;
                      n.test(t) && (t = t.replace(n, "")),
                        Z(t || ""),
                        y((0, c.F6)(t || "").shiftedBy(null != x ? x : 18));
                    },
                    value: I,
                    placeholder: l
                  }),
                  (0, u.jsx)("a", {
                    className: i().max,
                    onClick: function () {
                      y(v), Z((0, c.FR)(v, !1, null != x ? x : 18));
                    },
                    children: "MAX"
                  })
                ]
              }),
              g && (0, u.jsx)("div", { className: i().errMsg, children: g }),
              b &&
                (0, u.jsx)("div", {
                  className: i().inputBottom,
                  children: b.map(function (e, t) {
                    return (0,
                    u.jsx)("div", { className: i().moreInfoItem, children: e }, t);
                  })
                })
            ]
          })
        );
      };
    },
    4604: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return r;
        }
      });
      var s = n(67294),
        a = n(85893);
      function r(e) {
        var t = e.onChange,
          n = e.options,
          r = e.headerItemClass,
          l = (0, s.useState)(n[0]),
          i = l[0],
          c = l[1];
        return (
          (0, s.useEffect)(
            function () {
              null == t || t(i);
            },
            [i]
          ),
          (0, a.jsx)("div", {
            className: "ala-tabs",
            children: n.map(function (e) {
              return (0, a.jsx)(
                "div",
                {
                  onClick: function () {
                    return c(e);
                  },
                  className: "header-item text-lg "
                    .concat(r, " ")
                    .concat(e == i ? "active" : ""),
                  children: e
                },
                e
              );
            })
          })
        );
      }
    },
    6659: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return K;
          }
        });
      var s = n(67294),
        a = n(9008),
        r = n.n(a),
        l = n(94184),
        i = n.n(l),
        c = n(25688),
        o = n(2100),
        u = n(16835),
        d = n(50029),
        m = n(59499),
        f = n(87794),
        x = n.n(f),
        h = n(30381),
        p = n.n(h),
        v = n(2093),
        g = n(93812),
        b = n(23109),
        j = n(3612),
        y = n(4624),
        _ = n(43275),
        w = n(48060);
      n(42616);
      var N = n(16557),
        k = n(75349),
        F = n(91622);
      function I(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                (0, m.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var C = "0xf9078fb962a7d13f55d40d49c8aa6472abd1a5a6",
        D = "0x84c333e94aea4a51a21f6cf0c7f528c50dc7592c",
        T = function () {
          var e,
            t = (0, _.Z)().blockNumber,
            n = (0, k.cq)(C, w.Z.CurveStaticCoinABI).contract,
            a = (0, F.h)(),
            r = (0, k.cq)(D, w.Z.CurveStaticCoinABI).contract,
            l = (0, s.useState)(
              ((e = {}), (0, m.Z)(e, C, 1), (0, m.Z)(e, D, 1), e)
            ),
            i = l[0],
            c = l[1],
            o = function (e) {
              return (0, j.F6)(e).shiftedBy(-18).div(0.01).toString();
            };
          return (
            (0, v.Z)(
              (0, d.Z)(
                x().mark(function e() {
                  var t, s, l, i, d, f;
                  return x().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            console.log("CurveClevCVXContract---", n),
                            (s = [
                              n.methods.get_dy(
                                1,
                                0,
                                (0, j.F6)(0.01).shiftedBy(18).toString()
                              ),
                              r.methods.get_dy(
                                0,
                                1,
                                (0, j.F6)(0.01).shiftedBy(18).toString()
                              )
                            ]),
                            (e.next = 4),
                            a(s)
                          );
                        case 4:
                          (l = e.sent),
                            (d = (i = (0, u.Z)(l, 2))[0]),
                            (f = i[1]),
                            (t = {}),
                            (0, m.Z)(t, C, o(d)),
                            (0, m.Z)(t, D, o(f)),
                            c(t);
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [a, t, n]
            ),
            i
          );
        },
        S = function (e) {
          var t,
            n = (0, N.Z)(),
            a = T(),
            r = (0, _.Z)(),
            l = r.current,
            i = r._currentAccount,
            c = r.blockNumber,
            m = (0, F.H)(),
            f = (0, F.h)(),
            h = (0, s.useState)({ apr: "-", discount: 0 }),
            v = h[0],
            b = h[1],
            w = (0, s.useState)({
              clevTokenAllowance: 0,
              clevTokenBalance: 0,
              useInfo: { 0: 0, 1: 0 }
            }),
            I = w[0],
            C = w[1],
            D = (0, k.cq)(
              null == e ? void 0 : e.furnaceAddr,
              null == e ? void 0 : e.furnaceAbi
            ).contract,
            S = (0, y.Z)(o.uo).tokenInfo,
            A = (0, s.useMemo)(
              function () {
                var t =
                    S.find(function (t) {
                      return t.symbol === (null == e ? void 0 : e.symbol);
                    }) || {},
                  n = t.balance,
                  s = t.allowance,
                  a = t.contract,
                  r = t.source;
                return {
                  balance: n,
                  allowance: s,
                  contract: a,
                  approveTo: null == r ? void 0 : r.approveTo,
                  source: r
                };
              },
              [S, e]
            ),
            B = A.balance,
            R = A.allowance,
            P = A.contract,
            O =
              ((t = (0, d.Z)(
                x().mark(function t() {
                  var s, r, l, i, c, o, u, d, m, f;
                  return x().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (((t.prev = 0), !P)) {
                              t.next = 13;
                              break;
                            }
                            return (
                              (t.next = 4),
                              null == P
                                ? void 0
                                : P.methods.totalSupply().call()
                            );
                          case 4:
                            (r = t.sent),
                              (l = v.totalUnrealisedData),
                              (i =
                                null !== (s = a[e.farmingLpAddr]) &&
                                void 0 !== s
                                  ? s
                                  : 1),
                              (c = (0, j.F6)(r).isZero()
                                ? 0
                                : (0, j.F6)(l).div(r)),
                              (u = (o = n.list.find(function (t) {
                                return t.type == e.symbol;
                              })).rRate),
                              (d = o.apr),
                              (m = 1 / i - 1),
                              (f = "-"),
                              (0, j.F6)(c).isZero() ||
                                (f = (0, j.F6)(m).isLessThan(0)
                                  ? "0.00"
                                  : "".concat(
                                      (
                                        ((m * (parseFloat(d) / 100)) /
                                          (u * c)) *
                                        100
                                      ).toFixed(2),
                                      "% "
                                    )),
                              b(function (e) {
                                return Z(Z({}, e), {}, { discount: m, apr: f });
                              });
                          case 13:
                            t.next = 17;
                            break;
                          case 15:
                            (t.prev = 15), (t.t0 = t.catch(0));
                          case 17:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 15]]
                  );
                })
              )),
              function () {
                return t.apply(this, arguments);
              });
          (0, g.Z)(
            function () {
              O();
            },
            [n, v]
          ),
            (0, s.useEffect)(
              function () {
                O();
              },
              [e, i, P, a, c]
            );
          var E = (0, s.useCallback)(
              function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e[0],
                  n = e[3],
                  s = p().unix(n),
                  a = 0,
                  r = 0;
                return (
                  null != l &&
                    l.isBefore(s) &&
                    ((a = (0, j.F6)(s.unix()).minus(l.unix()).multipliedBy(t)),
                    (r = 86400 * t)),
                  { releasing: a, willCompleteTime: s, daily: r, finishAt: n }
                );
              },
              [l]
            ),
            M = (0, s.useCallback)(
              (0, d.Z)(
                x().mark(function t() {
                  var n, s, a, r, l, i, c, o, d, f, h, p, v, g, j;
                  return x().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (s = (n = D.methods).totalCVXInPool),
                            (a = n.totalBaseTokenInPool),
                            (r = n.furnaceInfo),
                            (l = n.totalRealised),
                            (i = n.totalUnrealised),
                            (c = n.rewardInfo),
                            (o =
                              null != e && e.isFurnace
                                ? [a(), c(), r()]
                                : [s(), l(), i(), c()]),
                            (t.next = 4),
                            m.apply(void 0, o)
                          );
                        case 4:
                          (d = t.sent),
                            (h = (f = (0, u.Z)(d, 4))[0]),
                            (p = f[1]),
                            (v = f[2]),
                            (g = f[3]),
                            (j = {
                              clevTokenInPoolData: h,
                              totalRealisedData: 0,
                              totalUnrealisedData: 0
                            }),
                            ((j =
                              null != e && e.isFurnace
                                ? Z(
                                    Z({}, j),
                                    {},
                                    {
                                      totalRealisedData: v[1],
                                      totalUnrealisedData: v[0],
                                      rewardInfo: p
                                    }
                                  )
                                : Z(
                                    Z({}, j),
                                    {},
                                    {
                                      totalRealisedData: p,
                                      totalUnrealisedData: v,
                                      rewardInfo: g
                                    }
                                  )).releasingInfo = E(
                              null != e && e.isFurnace ? p : g
                            )),
                            b(function (e) {
                              return Z(Z({}, e), j);
                            });
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              [m, D, E]
            ),
            U = (0, s.useCallback)(
              (0, d.Z)(
                x().mark(function e() {
                  var t, n, s, a, r;
                  return x().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = (t = D.methods).getUserInfo),
                            (s = [(0, t.claim)(i), n(i)]),
                            (e.next = 4),
                            f(s)
                          );
                        case 4:
                          (a = e.sent),
                            C({
                              useInfo:
                                null != (r = (0, u.Z)(a, 2)[1]) ? r : { 0: 0 }
                            });
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [f, D, i]
            );
          (0, s.useEffect)(
            function () {
              e && P && l && M();
            },
            [l, P, e]
          ),
            (0, s.useEffect)(
              function () {
                e && U();
              },
              [c, e, i]
            );
          var V = (0, s.useMemo)(
            function () {
              var e = I.useInfo,
                t = e[0],
                n = e[1];
              return !((0, j.F6)(t).isZero() && (0, j.F6)(n).isZero());
            },
            [I]
          );
          return {
            clevTokenContract: P,
            exchangeContract: e ? D : {},
            transmuterData: v,
            selectToken: e,
            userInfoData: Z(
              Z(Z({}, I), { clevTokenAllowance: R, clevTokenBalance: B }),
              {},
              { userPendingInfoVisible: V }
            )
          };
        },
        A = function (e) {
          var t = e.depositAmount,
            n = e.unrealised,
            a = e.totalUnrealisedData,
            r = e.clevTokenInPoolData,
            l = e.totalRealisedData,
            i = (0, s.useState)({
              newRealised: 0,
              newUnrealised: 0,
              poolShare: 0
            }),
            c = i[0],
            o = i[1],
            u = function (e) {
              var t = (0, j.F6)(r).minus(l || 0),
                s = (0, j.F6)(0),
                i = (0, j.F6)(0);
              (0, j.F6)(e).lt(t)
                ? ((s = (0, j.F6)(0)), (i = e))
                : ((s = (0, j.F6)(e).minus(t)), (i = t));
              var c = s
                .plus(n || 0)
                .div((0, j.F6)(a).plus(s))
                .multipliedBy(100);
              o({
                newUnrealised: s.toString(10),
                newRealised: i.toString(10),
                poolShare: (0, j.F6)(100).lt(c) ? 100 : c.toFixed(2)
              });
            };
          return (
            (0, b.Z)(
              function () {
                return u(null != t ? t : 0);
              },
              [t],
              { wait: 1e3 }
            ),
            [c, o]
          );
        },
        B = n(1381),
        R = n(66774),
        P = n(10088),
        O = n(29386),
        E = n(72198),
        M = n(48282),
        U = n(4604),
        V = n(49736),
        L = n.n(V),
        G = n(86920),
        X = n(85893);
      function q(e) {
        var t = e.title,
          n = e.value,
          s = e.tip,
          a = (0, G.Z)().theme;
        return (0, X.jsxs)("div", {
          className:
            "flex items-center gap-2 my-4 text-base 2xl:text-lg justify-between",
          children: [
            (0, X.jsxs)("div", {
              className: "text-gray-400 flex items-center gap-1",
              children: [t, ":", s && (0, X.jsx)(O.Z, { title: s })]
            }),
            (0, X.jsx)("div", {
              className: i()("w-1/4", "default" === a ? "" : "text-white"),
              children: n
            })
          ]
        });
      }
      function W(e) {
        var t,
          n,
          a = e.item,
          r = (0, _.Z)(),
          l = r.currentAccount,
          c = r.isAllReady,
          o = (0, s.useState)(!0),
          m = o[0],
          f = o[1],
          h = (0, s.useState)("Deposit"),
          p = h[0],
          v = h[1],
          g = (0, s.useState)(0),
          b = g[0],
          y = g[1],
          w = (0, s.useState)(0),
          N = w[0],
          k = w[1],
          F = (0, s.useState)(!1),
          I = F[0],
          Z = F[1],
          C = (0, E.a)(),
          D = (0, u.Z)(C, 2),
          T = D[0],
          S = D[1],
          V = a.transmuterData,
          G = a.userInfoData,
          W = a.exchangeContract,
          H = a.clevTokenContract,
          Q = a.selectToken,
          z = Q.isExpired,
          J = V.discount,
          Y = V.apr,
          K = V.clevTokenInPoolData,
          $ = V.totalUnrealisedData,
          ee = V.totalRealisedData,
          et = V.releasingInfo,
          en = null != et ? et : {},
          es = en.daily,
          ea = en.releasing,
          er = G.clevTokenBalance,
          el = G.clevTokenAllowance,
          ei = G.useInfo[0],
          ec = (0, P.Z)({
            approveAmount: b,
            allowance: el,
            tokenContract: H,
            approveAddress: W._address
          }).BtnWapper,
          eo = A({
            depositAmount: b,
            totalUnrealisedData: $,
            clevTokenInPoolData: K,
            totalRealisedData: ee,
            unrealised: ei
          }),
          eu = (0, u.Z)(eo, 2),
          ed = (eu[0], eu[1]),
          em =
            !z &&
            (0, j.F6)(b).isGreaterThan(0) &&
            (0, j.F6)(b).isLessThanOrEqualTo(er),
          ef =
            ((t = (0, d.Z)(
              x().mark(function e() {
                var t, n, s, a;
                return x().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (c) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (t = (0, j.F6)(b || 0)
                              .toFixed(0, 1)
                              .toString(10)),
                            (e.prev = 3),
                            (n = W.methods.deposit),
                            (s = null != Q && Q.isFurnace ? n(l, t) : n(t)),
                            (e.next = 8),
                            s.estimateGas({ from: l })
                          );
                        case 8:
                          return (
                            (a = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 12),
                            (0, B.Z)(
                              function () {
                                return s.send({ from: l, gas: a });
                              },
                              { key: "furnace", action: "deposit" },
                              function () {
                                y(""),
                                  S(),
                                  ed({
                                    newRealised: 0,
                                    newUnrealised: 0,
                                    poolShare: 0
                                  });
                              }
                            )
                          );
                        case 12:
                          e.next = 17;
                          break;
                        case 14:
                          (e.prev = 14),
                            (e.t0 = e.catch(3)),
                            (0, B.c)("error_furnace_deposit", e.t0);
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 14]]
                );
              })
            )),
            function () {
              return t.apply(this, arguments);
            }),
          ex =
            (0, j.F6)(ei).isGreaterThan(0) &&
            (0, j.F6)(N).isGreaterThan(0) &&
            (0, j.F6)(N).isLessThanOrEqualTo(ei),
          eh =
            ((n = (0, d.Z)(
              x().mark(function e() {
                var t, n, s, a;
                return x().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (c) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (t = (0, j.F6)(N).toFixed(0, 1).toString(10)),
                            (n = !1),
                            (0, j.F6)(N).isGreaterThanOrEqualTo(ei) && (n = !0),
                            (e.prev = 5),
                            Z(!0),
                            (s = W.methods.withdraw(l, t)),
                            n && (s = W.methods.withdrawAll(l)),
                            (e.next = 11),
                            s.estimateGas({ from: l })
                          );
                        case 11:
                          return (
                            (a = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 15),
                            (0, B.Z)(
                              function () {
                                return s.send({ from: l, gas: a });
                              },
                              { key: "transmuter", action: "withdraw" }
                            )
                          );
                        case 15:
                          k(0), Z(!1), (e.next = 23);
                          break;
                        case 19:
                          (e.prev = 19),
                            (e.t0 = e.catch(5)),
                            Z(!1),
                            (0, B.c)("error_transmuter_withdraw", e.t0);
                        case 23:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[5, 19]]
                );
              })
            )),
            function () {
              return n.apply(this, arguments);
            }),
          ep = (0, s.useMemo)(
            function () {
              return $ && !(1 * $)
                ? 100
                : (0, j.F6)(es).div($).multipliedBy(100).toNumber();
            },
            [$, es]
          );
        return (0, X.jsxs)("div", {
          className: "mb-7",
          children: [
            (0, X.jsxs)("div", {
              className: i()(L().poolItem, "cursor-pointer"),
              onClick: function () {
                return f(function (e) {
                  return !e;
                });
              },
              children: [
                (0, X.jsxs)("div", {
                  className: "flex items-center gap-4 md:gap-8",
                  children: [
                    (0, X.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        (0, X.jsxs)("div", {
                          className: i()(
                            "w-8 md:w-11 h-8 md:h-11 bg-gray-400 rounded-full relative"
                          ),
                          children: [
                            (0, X.jsx)("img", { src: Q.logos[0] }),
                            (0, X.jsx)("img", {
                              src: "/assets/tokens/can.png",
                              className:
                                "w-6 md:w-6 h-6 md:h-6  bg-white p-0.5 absolute rounded-full right-0 bottom-0"
                            })
                          ]
                        }),
                        (0, X.jsx)("div", {
                          className: "font-bold text-base md:text-xl",
                          children: Q.symbol
                        })
                      ]
                    }),
                    !Q.hideUnderlying &&
                      (0, X.jsxs)(X.Fragment, {
                        children: [
                          (0, X.jsx)("div", {
                            className: "flex items-center",
                            children: (0, X.jsx)("span", {
                              style: { fontSize: "32px", height: "60px" },
                              children: "→"
                            })
                          }),
                          (0, X.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [
                              (0, X.jsx)("div", {
                                className: i()(
                                  "w-8 md:w-11 h-8 md:h-11 bg-gray-400 rounded-full"
                                ),
                                children: (0, X.jsx)("img", { src: Q.logos[1] })
                              }),
                              (0, X.jsx)("div", {
                                className: "font-bold text-base md:text-xl",
                                children: Q.underlying
                              })
                            ]
                          })
                        ]
                      })
                  ]
                }),
                (0, X.jsxs)("div", {
                  className: "flex flex-col items-end justify-end",
                  children: [
                    (0, X.jsxs)("div", {
                      className:
                        "flex items-center gap-3 text-base md:text-lg mb-1",
                      children: [
                        (0, X.jsxs)("span", {
                          children: [Q.symbol, ":", Q.underlying, " discount"]
                        }),
                        (0, X.jsx)("span", {
                          children: J
                            ? "".concat((100 * J).toFixed(2), "%")
                            : "-"
                        })
                      ]
                    }),
                    (0, X.jsxs)("div", {
                      className: "flex items-center gap-3 text-base md:text-lg",
                      children: [
                        (0, X.jsxs)("span", {
                          className: "flex items-center gap-1",
                          children: [
                            "rebond APR",
                            (0, X.jsx)(O.Z, {
                              title: "Earn rebond APR by claiming ".concat(
                                "canCNX" == Q.symbol ? "CVX" : "Frax",
                                " and redepositing. See FAQ for details."
                              )
                            })
                          ]
                        }),
                        (0, X.jsx)("span", { children: Y })
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, X.jsx)(M.Z, {
              visible: m,
              children: (0, X.jsxs)("div", {
                className: i()(L().detail),
                children: [
                  (0, X.jsxs)("div", {
                    className:
                      "text-base md:text-lg mb-2 text-center pb-4 font-bold",
                    children: [
                      "Buy",
                      " ",
                      (0, X.jsx)("a", {
                        className: "color-blue",
                        href: Q.buyLick,
                        target: "_blank",
                        rel: "noreferrer",
                        children: Q.symbol
                      }),
                      " ",
                      "and deposit to start burning for ",
                      Q.underlying
                    ]
                  }),
                  (0, X.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row gap-3 md:gap-6 justify-between",
                    children: [
                      (0, X.jsxs)("div", {
                        className: "w-full md:w-1/2",
                        children: [
                          (0, X.jsx)("div", {
                            className: "color-blue mb-6 text-lg font-bold",
                            children: "Pool Info"
                          }),
                          (0, X.jsx)(q, {
                            title: "Total ".concat(Q.symbol, " Deposited"),
                            value: (0, j.FR)((0, j.F6)($).plus(ee))
                          }),
                          (0, X.jsx)(q, {
                            title: "Daily Burn Rate",
                            value: ep
                              ? "".concat(
                                  (0, j.R7)(ep, "0.01", ep.toFixed(2)),
                                  "%"
                                )
                              : "-",
                            tip: "".concat(
                              Q.underlying,
                              " Harvests are shared proportionally among all Furnace depositors, streaming over 2 weeks. See FAQ for details."
                            )
                          }),
                          (0, X.jsx)(q, {
                            title: "Daily "
                              .concat(Q.symbol, " \uD83D\uDD25 → ")
                              .concat(Q.underlying),
                            value: (0, j.FR)(es)
                          }),
                          (0, X.jsx)(q, {
                            title: "".concat(
                              Q.underlying,
                              " remaining to be allocated"
                            ),
                            value: "".concat((0, j.FR)(ea))
                          })
                        ]
                      }),
                      (0, X.jsxs)("div", {
                        className: "w-full md:w-1/2",
                        children: [
                          (0, X.jsx)(U.T, {
                            onChange: v,
                            options: ["Deposit", "Withdraw"]
                          }),
                          (0, X.jsx)(M.Z, {
                            visible: "Deposit" === p,
                            children: (0, X.jsxs)("div", {
                              className: "relative",
                              children: [
                                (0, X.jsx)(E.Z, {
                                  hidePercent: !0,
                                  showMax: !0,
                                  maxAmount: er,
                                  clearTrigger: T,
                                  onChange: y,
                                  moreInfo: [
                                    "Balance: "
                                      .concat(
                                        (0, j.FR)(
                                          null == G
                                            ? void 0
                                            : G.clevTokenBalance
                                        ),
                                        " "
                                      )
                                      .concat(Q.symbol)
                                  ]
                                }),
                                (0, X.jsx)("div", {
                                  className:
                                    "flex items-center flex-wrap justify-end relative gap-2 mt-10",
                                  children: (0, X.jsx)(ec, {
                                    size: "small",
                                    disabled: !em,
                                    switchStyle: {
                                      position: "absolute",
                                      top: -30
                                    },
                                    onClick: ef,
                                    children: "Deposit"
                                  })
                                })
                              ]
                            })
                          }),
                          (0, X.jsxs)(M.Z, {
                            visible: "Withdraw" === p,
                            children: [
                              (0, X.jsx)(E.Z, {
                                hidePercent: !0,
                                showMax: !0,
                                maxAmount: ei,
                                value: N,
                                onChange: k,
                                moreInfo: [
                                  "Available: "
                                    .concat((0, j.FR)(ei), " ")
                                    .concat(Q.symbol)
                                ]
                              }),
                              (0, X.jsx)("div", {
                                className:
                                  "flex items-center justify-end mt-10 gap-2",
                                children: (0, X.jsx)(R.Z, {
                                  size: "small",
                                  loading: I,
                                  disabled: !ex,
                                  onClick: eh,
                                  children: "Withdraw"
                                })
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            })
          ]
        });
      }
      var H = n(66447),
        Q = n.n(H);
      function z(e) {
        var t = e.title,
          n = e.value,
          s = e.tip;
        return (0, X.jsxs)("div", {
          className: "flex items-center gap-2 my-4 text-base 2xl:text-lg",
          children: [
            (0, X.jsxs)("div", {
              className: "text-gray-400 flex items-center gap-1",
              children: [t, ":", s && (0, X.jsx)(O.Z, { title: s })]
            }),
            (0, X.jsx)("div", { children: n })
          ]
        });
      }
      function J(e) {
        var t,
          n,
          a = e.info,
          r = (0, _.Z)(),
          l = r.currentAccount,
          c = r.isAllReady,
          o = a.userInfoData,
          u = a.transmuterData,
          m = a.exchangeContract,
          f = a.selectToken,
          h = u.totalRealisedData,
          p = u.totalUnrealisedData,
          v = (
            null !== (n = null == u ? void 0 : u.releasingInfo) && void 0 !== n
              ? n
              : {}
          ).daily,
          g = o.useInfo,
          b = g[0],
          y = g[1],
          w = o.userPendingInfoVisible,
          N = (0, s.useState)(!1),
          k = N[0],
          F = N[1],
          I = (0, s.useMemo)(
            function () {
              return (0, j.F6)((0, j.F6)(b).plus(y))
                .div((0, j.F6)(p).plus(h))
                .multipliedBy(100)
                .toNumber();
            },
            [b, y, p, h]
          ),
          Z =
            ((t = (0, d.Z)(
              x().mark(function e() {
                var t, n;
                return x().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (c) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (e.prev = 2),
                            F(!0),
                            (t = m.methods.claim(l)),
                            (e.next = 7),
                            t.estimateGas({ from: l })
                          );
                        case 7:
                          return (
                            (n = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 11),
                            (0, B.Z)(
                              function () {
                                return t.send({ from: l, gas: n });
                              },
                              { key: "transmuter", action: "claim" }
                            )
                          );
                        case 11:
                          F(!1), (e.next = 18);
                          break;
                        case 14:
                          (e.prev = 14),
                            (e.t0 = e.catch(2)),
                            F(!1),
                            (0, B.c)("error_transmuter_claim", e.t0);
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 14]]
                );
              })
            )),
            function () {
              return t.apply(this, arguments);
            }),
          C = (0, j.F6)(y).isGreaterThan(0);
        return w
          ? (0, X.jsxs)("div", {
              className: i()(Q().pendingItem),
              children: [
                (0, X.jsxs)("div", {
                  className: "flex items-center justify-center gap-6",
                  children: [
                    !f.hideUnderlying &&
                      (0, X.jsxs)(X.Fragment, {
                        children: [
                          (0, X.jsxs)("div", {
                            className: "flex items-center gap-3 ",
                            children: [
                              (0, X.jsxs)("div", {
                                className: i()(
                                  "w-6 md:w-10 h-6 md:h-10 bg-gray-400 rounded-full relative"
                                ),
                                children: [
                                  (0, X.jsx)("img", { src: f.logos[0] }),
                                  (0, X.jsx)("img", {
                                    src: "/assets/tokens/can.png",
                                    className:
                                      "w-6 md:w-4 h-6 md:h-4  bg-white p-0.5 absolute rounded-full right-0 bottom-0"
                                  })
                                ]
                              }),
                              (0, X.jsx)("div", {
                                className: "font-bold text-lg",
                                children: f.symbol
                              })
                            ]
                          }),
                          (0, X.jsx)("div", {
                            className: "flex items-center",
                            children: (0, X.jsx)("span", {
                              style: { fontSize: "24px", height: "44px" },
                              children: "→"
                            })
                          })
                        ]
                      }),
                    (0, X.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        (0, X.jsx)("div", {
                          className: i()(
                            "w-6 md:w-10 h-6 md:h-10 bg-gray-400 rounded-full"
                          ),
                          children: (0, X.jsx)("img", { src: f.logos[1] })
                        }),
                        (0, X.jsx)("div", {
                          className: "font-bold text-lg",
                          children: f.underlying
                        })
                      ]
                    })
                  ]
                }),
                (0, X.jsxs)("div", {
                  className: "my-4 md:my-8",
                  children: [
                    (0, X.jsx)(z, {
                      title: "My ".concat(
                        null == f ? void 0 : f.symbol,
                        " Deposit"
                      ),
                      value: "".concat((0, j.FR)((0, j.F6)(b).plus(y)))
                    }),
                    (0, X.jsx)(z, {
                      title: "My Share of Furnace",
                      value: I
                        ? "".concat((0, j.R7)(I, "0.01", I.toFixed(2)), "%")
                        : "-"
                    }),
                    (0, X.jsx)(z, {
                      title: "My Daily "
                        .concat(
                          null == f ? void 0 : f.symbol,
                          " \uD83D\uDD25 → "
                        )
                        .concat(f.underlying),
                      value: v
                        ? (0, j.R7)(
                            (v * (b / p)) / 1e18,
                            "0.01",
                            (0, j.FR)(v * (b / p))
                          )
                        : "-"
                    }),
                    (0, X.jsx)(z, {
                      title: "Claimable",
                      value: y
                        ? ""
                            .concat(
                              (0, j.R7)(y / 1e18, "0.01", (0, j.FR)(y)),
                              " "
                            )
                            .concat(null == f ? void 0 : f.underlying)
                        : "-"
                    })
                  ]
                }),
                (0, X.jsx)("div", {
                  className: "text-center flex items-center gap-2",
                  children: (0, X.jsx)(R.Z, {
                    theme: "blue",
                    disabled: !C,
                    loading: k,
                    onClick: Z,
                    children: "Claim"
                  })
                })
              ]
            })
          : null;
      }
      function Y() {
        var e = (0, G.Z)().theme,
          t = [S(o.uo[0]), S(o.uo[1])],
          n = (0, s.useMemo)(
            function () {
              return (
                t.filter(function (e) {
                  return !e.userInfoData.userPendingInfoVisible;
                }).length < t.length
              );
            },
            [t]
          );
        return (0, X.jsxs)("div", {
          className: "container",
          children: [
            (0, X.jsx)(c.Z, { title: "Furnace" }),
            (0, X.jsxs)("div", {
              className: "flex flex-col lg:flex-row gap-6",
              children: [
                (0, X.jsx)("div", {
                  className: "w-full lg:w-2/3",
                  children: t.map(function (e, t) {
                    return (0, X.jsx)(W, { item: e }, t);
                  })
                }),
                (0, X.jsx)(M.Z, {
                  visible: !n,
                  children: (0, X.jsxs)("div", {
                    className: i()(
                      "w-full lg:w-1/3 p-10",
                      "default" === e ? "bg-white" : "bg-bc-1"
                    ),
                    style: { height: "fit-content" },
                    children: [
                      (0, X.jsx)("h2", {
                        className: i()(
                          "font-bold text-base md:text-2xl",
                          "default" === e ? "" : " text-white"
                        ),
                        children: "My Pending Furnace"
                      }),
                      (0, X.jsx)("p", {
                        className: "md:text-xl text-tc-1 mt-4",
                        children: "You don't have any pending furnace."
                      }),
                      (0, X.jsx)("p", {
                        className: "md:text-xl text-tc-1",
                        children: "Deposit to get arbitrage earnings."
                      })
                    ]
                  })
                }),
                (0, X.jsx)(M.Z, {
                  visible: n,
                  children: (0, X.jsxs)("div", {
                    className: "w-full lg:w-1/3",
                    children: [
                      (0, X.jsx)("div", {
                        className: i()(
                          "mb-4 text-xl text-center font-bold",
                          "default" === e ? "text-black" : "text-white"
                        ),
                        children: "My Pending Furnace"
                      }),
                      (0, X.jsx)("div", {
                        className: "flex flex-col gap-6",
                        children: t.map(function (e, t) {
                          return (0, X.jsx)(J, { info: e }, t);
                        })
                      })
                    ]
                  })
                })
              ]
            })
          ]
        });
      }
      function K() {
        return (0, X.jsxs)(s.Fragment, {
          children: [
            (0, X.jsx)(r(), {
              children: (0, X.jsx)("title", {
                children: "Canny | curve, Convex | High performance - Furnace"
              })
            }),
            (0, X.jsx)(Y, {})
          ]
        });
      }
    },
    30032: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/furnace",
        function () {
          return n(6659);
        }
      ]);
    },
    67667: function (e) {
      e.exports = {
        reverse: "styles_reverse__0xOFL",
        inputWrapper: "styles_inputWrapper__xOT4k",
        error: "styles_error__d8ZO1",
        inputContent: "styles_inputContent__k8jCy",
        max: "styles_max__WLv8v",
        errMsg: "styles_errMsg__HcZUt",
        moreInfoItem: "styles_moreInfoItem__A2CV2",
        selectBox: "styles_selectBox__SHEVQ",
        select: "styles_select__TIhIk",
        divider: "styles_divider__kctGL",
        options: "styles_options__bS2Py",
        visible: "styles_visible__N7IAw",
        option: "styles_option__kYxQJ"
      };
    },
    66447: function (e) {
      e.exports = {
        pendingItem: "styles_pendingItem__n7kup",
        tokenIcon: "styles_tokenIcon__Lt5t3",
        moreBtn: "styles_moreBtn__rLsBJ"
      };
    },
    49736: function (e) {
      e.exports = {
        poolItem: "styles_poolItem__t6_Lv",
        rightBorder: "styles_rightBorder__mEjy5",
        tabs: "styles_tabs__PN6t2",
        tab: "styles_tab__QJEh2",
        active: "styles_active__JDGlb",
        highlight: "styles_highlight__eX9Ko",
        detail: "styles_detail__241wN",
        actionTag: "styles_actionTag__DPzv7",
        actionToken: "styles_actionToken__qc132",
        actionHint: "styles_actionHint__s5vCY",
        aprTag: "styles_aprTag__nuq13",
        aprValue: "styles_aprValue__vVr1Q",
        aprSection: "styles_aprSection__VrM_m",
        moreInfo: "styles_moreInfo__ABCcX",
        actions: "styles_actions__tg6xE",
        tokenIcon: "styles_tokenIcon__ks4eC"
      };
    }
  },
  function (e) {
    e.O(0, [3662, 1891, 8795, 3439, 2616, 6061, 9774, 2888, 179], function () {
      return e((e.s = 30032));
    }),
      (_N_E = e.O());
  }
]);
