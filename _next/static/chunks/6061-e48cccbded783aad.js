(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6061],
  {
    29386: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        }
      }),
        n(67294);
      var o = n(86920),
        r = n(31462),
        c = n.n(r),
        a = n(85893);
      function l(e) {
        var t = e.title,
          n = (0, o.Z)(),
          r = n.theme,
          l = n.handleTip;
        return (0, a.jsx)("div", {
          className: c().tip,
          children: (0, a.jsx)("img", {
            onMouseEnter: function (e) {
              l({ title: t, x: e.clientX, y: e.clientY });
            },
            onMouseLeave: function (e) {
              "tipWrapper" !== e.relatedTarget.id && l({ title: "" });
            },
            src:
              "default" === r
                ? "/assets/exp-default.svg"
                : "/assets/exp-dark.svg",
            className: c().icon
          })
        });
      }
    },
    36863: function (e, t, n) {
      "use strict";
      var o = n(67294),
        r = n(3612),
        c = n(43275),
        a = n(86920);
      t.Z = function (e) {
        var t = (0, c.Z)().blockNumber,
          n = (0, a.Z)().ConvexVaultsAPY,
          l = (0, o.useState)("35"),
          u = l[0],
          i = l[1],
          s = (0, o.useState)([]),
          d = s[0],
          f = s[1],
          v = (0, o.useState)({}),
          p = v[0],
          m = v[1];
        (0, o.useEffect)(
          function () {
            if ("object" == typeof e)
              f(
                e
                  .map(function (e) {
                    return k(e);
                  })
                  .map(function (e) {
                    return e.aprVal;
                  })
              );
            else {
              var t = k(e),
                n = t.aprVal;
              m(t.convexData), i(n);
            }
          },
          [t, n]
        );
        var k = function (e) {
          var t = (0, r.sE)(n, e) || {},
            o = (null == t ? void 0 : t.apy) || {
              project: "2%",
              cvxAirfoceApr: "0%"
            },
            c = o.cvxAirfoceApr,
            a = o.project;
          return { aprVal: c ? parseFloat(c) : parseFloat(a), convexData: t };
        };
        return { aprData: "object" == typeof e ? d : u, lpConvexInfo: p };
      };
    },
    10480: function (e, t, n) {
      "use strict";
      var o = n(67294),
        r = n(96486),
        c = n(86920);
      t.Z = function (e) {
        var t = (0, o.useState)({}),
          n = t[0],
          a = t[1],
          l = (0, c.Z)().tokenPrice;
        return (
          (0, o.useEffect)(
            function () {
              (0, r.isEmpty)(l) || a(l[null != e ? e : "convex-finance"]);
            },
            [e, l]
          ),
          n
        );
      };
    },
    60971: function (e, t, n) {
      "use strict";
      n.d(t, {
        J3: function () {
          return b;
        },
        ol: function () {
          return y;
        }
      });
      var o = n(59499),
        r = n(16835),
        c = n(50029),
        a = n(87794),
        l = n.n(a),
        u = n(67294),
        i = n(43275),
        s = n(48060),
        d = n(19029),
        f = n(75349),
        v = n(91622),
        p = n(3612);
      function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var y = function () {
          var e = (0, i.Z)(),
            t = e.blockNumber,
            n = e.isAllReady,
            o = e._currentAccount,
            a = (0, v.H)(),
            p = (0, u.useState)({
              balance: 0,
              allowance: 0,
              vlCVXLockInfo: {},
              baseInfo: {}
            }),
            m = p[0],
            y = p[1],
            b = (0, f.cq)(),
            C = b.getContract,
            F = b.erc20Contract,
            I = (0, u.useMemo)(
              function () {
                return [
                  C(d.Z.tokens.vlCVX, s.Z.VlCVXABI),
                  F(d.Z.tokens.cvx),
                  C(d.Z.contracts.aldCvx, s.Z.AladdinCVXABI)
                ];
              },
              [C]
            ),
            g = I[0],
            x = I[1],
            R = I[2],
            Z = R.methods,
            L = Z.balanceOf,
            S = Z.minterInfo,
            V = Z.allowance,
            h = (0, u.useCallback)(
              (0, c.Z)(
                l().mark(function e() {
                  var t, n, c, u, i, s, f, v, p, b, C;
                  return l().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = (t = x.methods).balanceOf),
                              (c = t.allowance),
                              (e.prev = 1),
                              (u = [
                                n(o),
                                c(o, d.Z.contracts.lockCvx),
                                L(o),
                                V(o, d.Z.contracts.lockCvx),
                                g.methods.lockedBalances(o)
                              ]),
                              (e.next = 5),
                              a.apply(void 0, u)
                            );
                          case 5:
                            (i = e.sent),
                              (f = (s = (0, r.Z)(i, 5))[0]),
                              (v = s[1]),
                              (p = s[2]),
                              (b = s[3]),
                              (C = s[4]),
                              y(function (e) {
                                return k(k({}, e), {
                                  balance: f,
                                  allowance: v,
                                  aldCVXBalance: p,
                                  aldcvxAllowance: b,
                                  vlCVXLockInfo: C
                                });
                              }),
                              (e.next = 18);
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0);
                          case 18:
                            console.log("cvxInfo--", m);
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 15]]
                  );
                })
              ),
              [o, a, x]
            ),
            O = (0, u.useCallback)(
              (0, c.Z)(
                l().mark(function e() {
                  var t, n, o;
                  return l().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (t = [S(d.Z.contracts.lockCvx)]),
                              (e.next = 4),
                              a.apply(void 0, t)
                            );
                          case 4:
                            (n = e.sent),
                              (o = (0, r.Z)(n, 1)[0]),
                              y(function (e) {
                                return k(
                                  k({}, e),
                                  {},
                                  { baseInfo: { minterCleverInfo: o } }
                                );
                              }),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 10]]
                  );
                })
              ),
              [a, S]
            );
          return (
            (0, u.useEffect)(
              function () {
                n && h();
              },
              [t, h, n]
            ),
            (0, u.useEffect)(
              function () {
                O();
              },
              [t, O]
            ),
            { cvxContract: x, aldCVXContract: R, vlCVXContract: g, cvxInfo: m }
          );
        },
        b = function () {
          var e = (0, i.Z)(),
            t = e.blockNumber,
            n = e._currentAccount,
            o = (0, f.cq)(
              d.Z.contracts.lockCvx,
              s.Z.AladdinCVXLockerABI
            ).contract,
            a = (0, v.H)(),
            m = (0, v.h)(),
            y = (0, u.useState)({
              userInfo: { uLocks: { locks: [], pendingUnlocks: [] } },
              baseInfo: { rRate: 50 }
            }),
            b = y[0],
            C = y[1],
            F = (0, u.useCallback)(
              (0, c.Z)(
                l().mark(function e() {
                  var t, c, u, i, s, d, f, v, m, y, b, F, I, g, x, R;
                  return l().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (c = (t = o.methods).totalLockedGlobal),
                              (u = t.totalPendingUnlockGlobal),
                              (i = t.totalDebtGlobal),
                              (s = t.reserveRate),
                              (d = t.repayFeePercentage),
                              (f = t.pendingUnlocked),
                              (e.prev = 1),
                              (v = [c(), u(), i(), s(), d(), f(n)]),
                              (e.next = 5),
                              a.apply(void 0, v)
                            );
                          case 5:
                            (m = e.sent),
                              (b = (y = (0, r.Z)(m, 6))[0]),
                              (F = y[1]),
                              (I = y[2]),
                              (g = y[3]),
                              (x = y[4]),
                              y[5],
                              (R = (0, p.F6)(b).plus(F).toFixed(0)),
                              C(function (e) {
                                return k(
                                  k({}, e),
                                  {},
                                  {
                                    baseInfo: {
                                      totalLockedCVXInConvex: R,
                                      lockerLocked: b,
                                      totalPendingUnlock: F,
                                      lockerDept: I,
                                      repayFee: (0, p.F6)(x)
                                        .div(1e9)
                                        .toString(),
                                      rRate: (0, p.F6)(g).div(1e9).toString()
                                    }
                                  }
                                );
                              }),
                              (e.next = 20);
                            break;
                          case 17:
                            (e.prev = 17),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0);
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 17]]
                  );
                })
              ),
              [a, o, n]
            ),
            I = (0, u.useCallback)(
              (0, c.Z)(
                l().mark(function e() {
                  var t, c, a, u, i, s, d, f, v, y, b, F, I, g, x, R;
                  return l().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (c = (t = o.methods).getUserInfo),
                              (a = t.getUserLocks),
                              (u = t.reserveRate),
                              (e.prev = 1),
                              (i = [c(n), a(n), u()]),
                              (e.next = 5),
                              m(i)
                            );
                          case 5:
                            (s = e.sent),
                              (f = (d = (0, r.Z)(s, 3))[0]),
                              (v = d[1]),
                              (y = d[2]),
                              (b = f[0]),
                              (F = f[1]),
                              (I = f[2]),
                              (g = f[3]),
                              (x = f[4]),
                              (R = (0, p.F6)(b).minus(g).plus(x).toString()),
                              C(function (e) {
                                return k(
                                  k({}, e),
                                  {},
                                  {
                                    userInfo: {
                                      netAsset: R,
                                      uLocks: v,
                                      totalUnlocked: I,
                                      totalBorrowed: g,
                                      totalPendingUnlocked: F,
                                      myLocked: b,
                                      myEarned: x,
                                      rRate: (0, p.F6)(y).div(1e9).toString()
                                    }
                                  }
                                );
                              }),
                              (e.next = 18);
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 15]]
                  );
                })
              ),
              [m, n, o]
            );
          return (
            (0, u.useEffect)(
              function () {
                F(), I();
              },
              [t, I, F, n]
            ),
            { cvxLockerContract: o, lockInfo: b }
          );
        };
    },
    91827: function (e, t, n) {
      "use strict";
      var o = n(67294),
        r = n(3612),
        c = n(36863),
        a = n(86920);
      t.Z = function (e) {
        var t = (0, a.Z)().ConvexVaultsAPY,
          n = (0, c.Z)(e),
          l = n.aprData,
          u = n.lpConvexInfo;
        return (0, o.useMemo)(
          function () {
            var e,
              n,
              o = (0, r.sE)(t, "CRV"),
              c = parseFloat((null == o ? void 0 : o.apy.project) || 0),
              a = (0, r.F6)(parseFloat(c))
                .dividedBy(100)
                .dividedBy(52)
                .plus(1)
                .pow(52)
                .minus(1)
                .shiftedBy(2),
              i = parseFloat(l || 0),
              s =
                null !==
                  (e =
                    null == u
                      ? void 0
                      : null === (n = u.curveApys) || void 0 === n
                      ? void 0
                      : n.baseApy) && void 0 !== e
                  ? e
                  : 0,
              d = (0, r.F6)(i)
                .minus(s)
                .multipliedBy((0, r.F6)(1).plus(a.shiftedBy(-2)));
            return (0, r.F6)(s)
              .plus(null != d ? d : 0)
              .toFixed(2);
          },
          [l, t]
        );
      };
    },
    16557: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return p;
        }
      });
      var o = n(67294),
        r = n(19657),
        c = n(36863),
        a = n(10480),
        l = n(3612),
        u = n(60971),
        i = n(51583),
        s = n(91827),
        d = "/assets/crypto-icons-stack.svg",
        f = function () {
          var e,
            t,
            n = (0, c.Z)("CVX").aprData,
            r =
              null !==
                (e =
                  null === (t = (0, a.Z)("convex-finance")) || void 0 === t
                    ? void 0
                    : t.usd) && void 0 !== e
                ? e
                : 0,
            i = (0, u.J3)(),
            s = i.lockInfo,
            f = s.baseInfo,
            v = f.totalLockedCVXInConvex,
            p = f.totalPendingUnlock,
            m = f.lockerLocked,
            k = f.rRate,
            y = s.userInfo,
            b = y.myLocked,
            C = y.totalBorrowed,
            F = y.myEarned;
          return {
            cvxInfo: (0, o.useMemo)(
              function () {
                return {
                  name: "CVX",
                  platform: "Convex",
                  logo: "/assets/tokens/cvx.png",
                  url: "/canny",
                  apr: "".concat((0, l.FR)(n, !1, 0, 2), "%"),
                  type: "canCNX",
                  rRate: k,
                  totlaLocked: {
                    amount: "".concat((0, l.FR)((0, l.F6)(v), !1), " CVX "),
                    value: (0, l.FR)((0, l.F6)(v).multipliedBy(r), !0, 18, 0),
                    totalLocked: (0, l.FR)((0, l.F6)(m), !1),
                    totalPendingUnlock: (0, l.FR)((0, l.F6)(p), !1)
                  },
                  myLocked: {
                    amount: "".concat((0, l.FR)((0, l.F6)(b), !1), " CVX"),
                    value: (0, l.FR)((0, l.F6)(b).multipliedBy(r), !0)
                  },
                  myClaimable: {
                    amount: "".concat(
                      (0, l.FR)(
                        (0, l.F6)(b).multipliedBy(k).plus(F).minus(C),
                        !1
                      ),
                      " CVX"
                    ),
                    value: (0, l.FR)(
                      (0, l.F6)(b)
                        .multipliedBy(k)
                        .plus(F)
                        .minus(C)
                        .multipliedBy(r),
                      !0
                    )
                  },
                  myClaimedYields: {
                    amount: "".concat(
                      (0, l.FR)(
                        (0, l.F6)(b).multipliedBy(k).plus(F).minus(C),
                        !1
                      ),
                      " canCNX"
                    ),
                    value: (0, l.FR)(
                      (0, l.F6)(b)
                        .multipliedBy(k)
                        .plus(F)
                        .minus(C)
                        .multipliedBy(r),
                      !0
                    )
                  }
                };
              },
              [n, r, i]
            ),
            basicInfo: {
              myLocked: (0, l.F6)(b).multipliedBy(r),
              totalLocked: (0, l.F6)(m).multipliedBy(r)
            }
          };
        },
        v = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "Frax-USDC",
            t = (0, r.r)(e).poolConfig,
            n = (0, s.Z)(t.curveDepositUrl),
            c = (0, i.Z)(t.metaCleverAddress).lockInfo,
            a = c.baseInfo,
            u = a.totalLocked,
            f = a.strategyUnderlyingPrice,
            v = a.YieldStrategyIndex,
            p = c.userInfo,
            m = p.claimableAmount,
            k = p.sharesInfo,
            y = (0, o.useMemo)(
              function () {
                var e,
                  t =
                    null == k
                      ? void 0
                      : k.find(function (e) {
                          return e.index == v;
                        });
                return t
                  ? (0, l.F6)(null == t ? void 0 : t.share)
                      .div(
                        null === (e = c.baseInfo) || void 0 === e
                          ? void 0
                          : e.totalShare
                      )
                      .multipliedBy(c.baseInfo.totalLocked)
                  : (0, l.F6)(0);
              },
              [c]
            );
          return {
            clevInfo: (0, o.useMemo)(
              function () {
                var o, r;
                return {
                  name: t.poolId,
                  type: "CRV" == t.poolId ? "canCRY" : "canUSD",
                  platform: "CRV" == e ? "sdCRV" : "Concentrator",
                  url: "/clever/".concat(t.poolId),
                  logo: t.icon.includes("/assets")
                    ? t.icon
                    : "".concat(d, "#").concat(t.icon),
                  apr: "".concat((0, l.FR)(n, !1, 0, 2), "%"),
                  rRate:
                    null !==
                      (o =
                        null == c
                          ? void 0
                          : null === (r = c.baseInfo) || void 0 === r
                          ? void 0
                          : r.rRate) && void 0 !== o
                      ? o
                      : 0,
                  totlaLocked: {
                    amount: ""
                      .concat((0, l.az)((0, l.F6)(u).div(f), 0, 4), " ")
                      .concat(t.poolId),
                    value: (0, l.FR)((0, l.F6)(c.baseInfo.totalLocked), !0)
                  },
                  myLocked: {
                    amount: ""
                      .concat((0, l.az)((0, l.F6)(y).div(f), 0, 4), " ")
                      .concat(t.poolId),
                    value: (0, l.FR)((0, l.F6)(y), !0)
                  },
                  myClaimable: {
                    amount: ""
                      .concat((0, l.FR)(m), " ")
                      .concat(t.underlyingTokenSymbol, " "),
                    value: (0, l.FR)((0, l.F6)(m), !0)
                  },
                  myClaimedYields: {
                    amount: "0 ".concat(t.underlyingTokenSymbol, " "),
                    value: 0
                  }
                };
              },
              [t, c, y, n]
            ),
            basicInfo: {
              myLocked: (0, l.F6)(y),
              totalLocked: (0, l.F6)(c.baseInfo.totalLocked)
            }
          };
        },
        p = function () {
          var e = f(),
            t = e.cvxInfo,
            n = e.basicInfo,
            r = v("Frax-USDC"),
            c = r.clevInfo,
            a = r.basicInfo,
            u = v("LUSDFraxBP"),
            i = u.clevInfo,
            s = u.basicInfo,
            d = v("TUSDFraxBP"),
            p = d.clevInfo,
            m = d.basicInfo,
            k = v("canUSDFRAXBP"),
            y = k.clevInfo,
            b = k.basicInfo,
            C = (0, o.useMemo)(
              function () {
                var e = [n, a, s, m, b];
                return {
                  myLocked: e.reduce(function (e, t) {
                    return null == t ? void 0 : t.myLocked.plus(e);
                  }, (0, l.F6)(0)),
                  totalLocked: e.reduce(function (e, t) {
                    return null == t ? void 0 : t.totalLocked.plus(e);
                  }, (0, l.F6)(0))
                };
              },
              [n, a, s, m, b]
            ),
            F = C.myLocked,
            I = C.totalLocked;
          return {
            list: [t, y, c, i, p],
            info: {
              myLocked: (0, l.FR)(F, !0, null, 2),
              totlaLocked: (0, l.FR)(I, !0, null, 2)
            }
          };
        };
      t.Z = p;
    },
    51583: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return y;
        }
      });
      var o = n(59499),
        r = n(16835),
        c = n(50029),
        a = n(87794),
        l = n.n(a),
        u = n(67294),
        i = n(43275),
        s = n(48060),
        d = n(19029),
        f = n(3612),
        v = n(91622),
        p = n(75349);
      function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var y = function (e) {
        var t = (0, i.Z)(),
          n = t.blockNumber,
          o = t._currentAccount,
          a = (0, v.h)(),
          m = (0, p.cq)(
            null != e ? e : d.Z.contracts.metaClever,
            s.Z.MetaCleverABI
          ),
          y = m.contract,
          b = m.getContract,
          C = (0, u.useState)({
            userInfo: {},
            baseInfo: { rRate: 50, totalLocked: 0, YieldStrategyIndex: 0 }
          }),
          F = C[0],
          I = C[1],
          g = (0, p.I1)().contract,
          x = (0, u.useCallback)(
            (0, c.Z)(
              l().mark(function t() {
                var n,
                  c,
                  u,
                  i,
                  d,
                  v,
                  p,
                  m,
                  C,
                  F,
                  x,
                  R,
                  Z,
                  L,
                  S,
                  V,
                  h,
                  O,
                  E,
                  P,
                  w,
                  B,
                  D,
                  j,
                  U,
                  A,
                  X,
                  _,
                  T,
                  M;
                return l().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = (n = y.methods).getUserInfo),
                            (u = n.yieldStrategies),
                            (i = n.reserveRate),
                            (d = n.feeInfo),
                            (v = n.getActiveYieldStrategies),
                            (p = g.methods.minterInfo),
                            (t.prev = 2),
                            (t.next = 5),
                            v().call()
                          );
                        case 5:
                          return (
                            (C = (m = t.sent._indices) ? m[0] : 0),
                            (F = [c(o), u(C), i(), d(), p(e)]),
                            (t.next = 11),
                            a(F)
                          );
                        case 11:
                          return (
                            (x = t.sent),
                            (Z = (R = (0, r.Z)(x, 5))[0]),
                            (L = R[1]),
                            (S = R[2]),
                            (V = R[3]),
                            (h = R[4]),
                            (E = (O = Z || {})[0]),
                            (P = O[1]),
                            (w = O[2]),
                            (B = O[3]),
                            (j = (D = L || {})[1]),
                            (U = D[4]),
                            (A = D[7]),
                            (X = b(j, s.Z.ConcentratorStrategyABI)),
                            (t.next = 23),
                            X.methods.underlyingPrice().call()
                          );
                        case 23:
                          (_ = t.sent),
                            (T = (null != B ? B : []).map(function (e, t) {
                              return { index: w[t], share: e };
                            })),
                            (M = (0, f.F6)(P)
                              .multipliedBy(S)
                              .div(1e9)
                              .minus(
                                (0, f.F6)(E).isLessThanOrEqualTo(0) ? 0 : E
                              )),
                            I(function (e) {
                              return k(
                                k({}, e),
                                {},
                                {
                                  userInfo: {
                                    claimableAmount: M,
                                    totalValue: P,
                                    totalDebt: E,
                                    earnedAmount: (0, f.F6)(
                                      E
                                    ).isLessThanOrEqualTo(0)
                                      ? (0, f.F6)(E).abs()
                                      : 0,
                                    indices: w,
                                    shares: B,
                                    sharesInfo: T
                                  },
                                  baseInfo: {
                                    YieldStrategyIndex: C,
                                    strategyUnderlyingPrice: _,
                                    totalShare: U,
                                    fees: V,
                                    totalLocked: A,
                                    rRate: (0, f.F6)(S).div(1e9).toString(),
                                    minterCleverInfo: h
                                  }
                                }
                              );
                            }),
                            (t.next = 32);
                          break;
                        case 29:
                          (t.prev = 29), (t.t0 = t.catch(2)), console.log(t.t0);
                        case 32:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 29]]
                );
              })
            ),
            [y, b, g, a, o]
          );
        return (
          (0, u.useEffect)(
            function () {
              x();
            },
            [n, y, o]
          ),
          { metaCleverLockerContract: y, lockInfo: F }
        );
      };
      t.Z = y;
    },
    19657: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return l;
        }
      });
      var o = n(67294),
        r = n(11163),
        c = n(19029),
        a = ["Frax-USDC", "LUSDFraxBP", "TUSDFraxBP", "canUSDFRAXBP"],
        l = function (e) {
          var t,
            n = (0, o.useMemo)(
              function () {
                return "CRV" === e
                  ? c.Z.CLEVERS.canCRY
                  : a.includes(e)
                  ? c.Z.CLEVERS.canUSD
                  : {};
              },
              [e]
            ),
            r = (0, o.useMemo)(
              function () {
                return "CRV" === e
                  ? c.Z.CLEVERS.canCRY.pools.find(function (t) {
                      return t.poolId == e;
                    })
                  : a.includes(e)
                  ? c.Z.CLEVERS.canUSD.pools.find(function (t) {
                      return t.poolId == e;
                    })
                  : {};
              },
              [e]
            ),
            l =
              null !== (t = null == r ? void 0 : r.deptTokenSymbol) &&
              void 0 !== t
                ? t
                : "clev".concat(e);
          return {
            lockTokenName: e,
            clevTokenName: l,
            tokenConfig: n,
            poolConfig: r
          };
        };
      t.Z = function (e) {
        var t,
          n,
          l,
          u = (0, r.useRouter)().query,
          i =
            null !==
              (t =
                null !== (n = null == u ? void 0 : u.token) && void 0 !== n
                  ? n
                  : e) && void 0 !== t
              ? t
              : "CRV",
          s = (0, o.useMemo)(
            function () {
              return "CRV" === i
                ? c.Z.CLEVERS.canCRY
                : a.includes(i)
                ? c.Z.CLEVERS.canUSD
                : {};
            },
            [i]
          ),
          d = (0, o.useMemo)(
            function () {
              return "CRV" === i
                ? c.Z.CLEVERS.canCRY.pools.find(function (e) {
                    return e.poolId == i;
                  })
                : a.includes(i)
                ? c.Z.CLEVERS.canUSD.pools.find(function (e) {
                    return e.poolId == i;
                  })
                : {};
            },
            [i]
          ),
          f =
            null !== (l = null == d ? void 0 : d.deptTokenSymbol) &&
            void 0 !== l
              ? l
              : "clev".concat(i);
        return {
          lockTokenName: i,
          clevTokenName: f,
          tokenConfig: s,
          poolConfig: d
        };
      };
    },
    31462: function (e) {
      e.exports = {
        tip: "styles_tip__wueS4",
        titleWrapper: "styles_titleWrapper__5HCFa",
        icon: "styles_icon__GIbUD"
      };
    }
  }
]);
