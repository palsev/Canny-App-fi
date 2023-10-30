"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7767],
  {
    17747: function (e, t, r) {
      var n = r(67294),
        a = r(86920),
        o = r(3612);
      t.Z = function (e) {
        var t = (0, a.Z)().ConvexVaultsAPY;
        return (0, n.useMemo)(
          function () {
            return t && t.length ? (0, o.sE)(t, e) : null;
          },
          [t, e]
        );
      };
    },
    92678: function (e, t, r) {
      var n = r(16835),
        a = r(67294),
        o = r(17e3),
        u = r(43275),
        c = r(91622),
        s = r(75349);
      t.Z = function () {
        var e = (0, u.Z)(),
          t = e.currentAccount,
          r = e.isAllReady,
          i = e.blockNumber,
          l = (0, c.H)(),
          p = (0, s.aH)().contract,
          f = (0, s.DU)().contract,
          d = (0, a.useCallback)(
            function () {
              var e = [
                p.methods.totalSupply(),
                p.methods.balanceOf(t),
                f.methods.balanceOf(t)
              ];
              return l.apply(void 0, e);
            },
            [p, f, t]
          ),
          y = (0, o.a)({
            queryKey: ["calcData", t],
            queryFn: d,
            initialData: [0, 0, 0],
            enabled: r
          }),
          v = (0, n.Z)(y.data, 3),
          b = v[0],
          h = v[1],
          m = v[2],
          w = y.refetch;
        return (
          (0, a.useEffect)(
            function () {
              r && w();
            },
            [t, i, r]
          ),
          (0, a.useMemo)(
            function () {
              return {
                veTotalSupply: b,
                userVeCLEV: h,
                userCLEV: m,
                contracts: { veContract: p }
              };
            },
            [b, h, m, p]
          )
        );
      };
    },
    72158: function (e, t, r) {
      r.d(t, {
        F: function () {
          return h;
        },
        L: function () {
          return b;
        }
      });
      var n = r(16835),
        a = r(50029),
        o = r(87794),
        u = r.n(o),
        c = r(67294),
        s = r(17e3),
        i = r(3612),
        l = r(91622),
        p = r(43275),
        f = r(75349),
        d = r(17747),
        y = r(48060),
        v = r(19029),
        b = function () {
          var e = (0, f.UI)().contract,
            t = (0, p.Z)().blockNumber,
            r = (0, l.h)(),
            o = (0, c.useCallback)(
              (0, a.Z)(
                u().mark(function t() {
                  var a, o, c;
                  return u().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (a = [(0, e.methods.ratio)()]), (t.next = 4), r(a)
                          );
                        case 4:
                          return (
                            (o = t.sent),
                            (c = (0, n.Z)(o, 1)[0]),
                            t.abrupt("return", c)
                          );
                        case 8:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              [r, e]
            ),
            i = (0, s.a)({
              queryKey: ["abcCVXData"],
              queryFn: o,
              initialData: 0
            }),
            d = i.data,
            y = i.refetch;
          return (
            (0, c.useEffect)(
              function () {
                y();
              },
              [t]
            ),
            d
          );
        },
        h = function () {
          var e = (0, f.cq)().getContract,
            t = (0, d.Z)("CVX"),
            r = (0, c.useCallback)(
              (0, a.Z)(
                u().mark(function r() {
                  var n, a, o, c, s, l, p, f, d;
                  return u().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.next = 2),
                            e(
                              "0xF9078Fb962A7D13F55d40d49C8AA6472aBD1A5a6",
                              y.Z.CurveStaticCoinABI
                            )
                              .methods.get_dy(
                                1,
                                0,
                                (0, i.F6)(0.01).shiftedBy(18).toString()
                              )
                              .call()
                          );
                        case 2:
                          return (
                            (n = r.sent),
                            (a = (0, i.F6)(n)
                              .shiftedBy(-18)
                              .div(0.01)
                              .toString()),
                            (r.next = 6),
                            e(v.Z.tokens.canCNX, y.Z.erc20ABI)
                              .methods.totalSupply()
                              .call()
                          );
                        case 6:
                          return (
                            (o = r.sent),
                            (r.next = 9),
                            e(v.Z.contracts.lockCvx, y.Z.AladdinCVXLockerABI)
                              .methods.reserveRate()
                              .call()
                          );
                        case 9:
                          return (
                            (c = r.sent),
                            (r.next = 12),
                            e(v.Z.contracts.transmuterCvx, y.Z.TransmuterABI)
                              .methods.totalUnrealised()
                              .call()
                          );
                        case 12:
                          if (
                            ((s = r.sent),
                            (l = (null != t ? t : { apy: { cvxAirfoceApr: 0 } })
                              .apy.cvxAirfoceApr),
                            (p = (0, i.F6)(o).isZero()
                              ? 0
                              : (0, i.F6)(s).div(o).toString()),
                            (f = 1 / a - 1),
                            (0, i.F6)(p).isZero())
                          ) {
                            r.next = 19;
                            break;
                          }
                          return (
                            (d = (
                              ((f * (parseFloat(l) / 100)) / ((c / 1e9) * p)) *
                              100
                            ).toFixed(2)),
                            r.abrupt("return", parseFloat(null != d ? d : 0))
                          );
                        case 19:
                          return r.abrupt("return", 0);
                        case 20:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              ),
              [e, t]
            ),
            n = (0, s.a)({
              queryKey: ["canCNXApyFromCleverFunarce"],
              queryFn: r,
              initialData: 0
            }),
            o = n.data,
            l = n.refetch;
          return (
            (0, c.useEffect)(
              function () {
                l();
              },
              [t]
            ),
            o
          );
        };
    },
    51815: function (e, t, r) {
      var n = r(59499),
        a = r(16835),
        o = r(50029),
        u = r(87794),
        c = r.n(u),
        s = r(67294),
        i = r(87669),
        l = r(43275),
        p = r(3612),
        f = r(75349),
        d = r(56599),
        y = r(91622),
        v = r(72158),
        b = r(60414),
        h = r(17747);
      function m(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      t.Z = function () {
        var e,
          t = (0, l.Z)(),
          r = t.blockTime;
        t.blockNumber;
        var n = (0, b.Z)().allPoolsInfo,
          u = (0, f.DU)().contract,
          m = (0, f.WQ)().contract,
          g = (0, y.h)(),
          C = (0, v.F)(),
          A = (0, v.L)(),
          Z = (0, h.Z)(
            "https://curve.fi/#/ethereum/pools/factory-v2-209/deposit"
          ),
          k = (0, s.useCallback)(
            (0, o.Z)(
              c().mark(function e() {
                var t, a, o, s;
                return c().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = {}),
                          (a = r || Math.floor(new Date().getTime() / 1e3)),
                          n.forEach(function (e) {
                            var r = e.lpAddress,
                              n = e.lpGaugeAddress;
                            t[r.toLowerCase()] = {
                              rate: u.methods.rate(),
                              gauge_relative_weight:
                                m.methods.gauge_relative_weight(n, a)
                            };
                          }),
                          (e.next = 5),
                          g(t)
                        );
                      case 5:
                        return (
                          (o = e.sent),
                          (s = {}),
                          Object.keys(o).forEach(function (e) {
                            var t = o[e],
                              r = t.rate,
                              n = t.gauge_relative_weight,
                              a = (0, p.F6)(r).div(1e18).times(n).div(1e18);
                            s[e] = {
                              clevRate: r,
                              gaugeRelativeWeight: n,
                              gauge_clev_timestamp: a
                            };
                          }),
                          e.abrupt("return", s)
                        );
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [n, r, u, m, g]
          ),
          O =
            ((e = (0, o.Z)(
              c().mark(function e() {
                var t, r, n, a, o;
                return c().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = parseFloat((t = Z ? Z.apy.project : 0))),
                          (r = A / 1e10),
                          (r /= r + 1),
                          (n = t * r + C * (1 - r)),
                          (a = (0, p.F6)(n)
                            .dividedBy(100)
                            .dividedBy(52)
                            .plus(1)
                            .pow(52)
                            .minus(1)
                            .shiftedBy(2)),
                          (o = (0, p.DB)(a) ? a : 0),
                          e.abrupt("return", o)
                        );
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function () {
              return e.apply(this, arguments);
            }),
          F = (0, i.h)({
            queries: [
              {
                queryKey: ["getFactoryAPYs/crypto"],
                queryFn: function () {
                  return (0, d.Z)(
                    "https://api.curve.fi/api/getFactoryAPYs?version=crypto"
                  ).then(function (e) {
                    return e.data;
                  });
                }
              },
              {
                queryKey: ["getFactoryAPYs/version"],
                queryFn: function () {
                  return (0, d.Z)(
                    "https://api.curve.fi/api/getFactoryAPYs?version=2"
                  ).then(function (e) {
                    return e.data;
                  });
                }
              },
              {
                queryKey: ["balancer"],
                queryFn: function () {
                  return (0, d.Z)("https://api.aladdin.club/api/balancer").then(
                    function (e) {
                      return e.data;
                    }
                  );
                }
              }
            ]
          }),
          P = (0, a.Z)(F, 3),
          x = P[0].data,
          q = P[1].data,
          j = P[2].data,
          E = (0, s.useCallback)(
            (0, o.Z)(
              c().mark(function e() {
                var t, r, a, o;
                return c().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = {}),
                          (r = null == x ? void 0 : x.poolDetails),
                          (a = null == q ? void 0 : q.poolDetails),
                          (o = [].concat(r).concat(a)),
                          n.forEach(function (e) {
                            if ("curve" == e.fromPlatform.toLowerCase()) {
                              var r = o.filter(function (t) {
                                return (
                                  t.poolAddress.toLowerCase() ==
                                  e.lpPoolToken.toLowerCase()
                                );
                              });
                              r.length
                                ? (t[r[0].poolAddress.toLowerCase()] = r[0])
                                : (t[e.lpPoolToken.toLowerCase()] = {
                                    index: 0,
                                    poolAddress: e.lpPoolToken,
                                    apy: 0,
                                    apyWeekly: 0,
                                    virtualPrice: 0,
                                    volume: 0
                                  });
                            }
                          }),
                          e.abrupt("return", t)
                        );
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [n, x, q]
          ),
          S = (0, s.useCallback)(
            (0, o.Z)(
              c().mark(function e() {
                var t, r;
                return c().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = null == j ? void 0 : j.info),
                          (r = {}),
                          n
                            .filter(function (e) {
                              return (
                                "balancer" === e.fromPlatform.toLowerCase() &&
                                e.lpPoolId
                              );
                            })
                            .forEach(function (e) {
                              var n = e.lpPoolId.toLowerCase(),
                                a = t[n],
                                o = {
                                  id: n,
                                  lpAddress: e.lpAddress.toLowerCase(),
                                  symbol: "",
                                  apy: ""
                                };
                              a &&
                                ((o.apy = (0, p.F6)(
                                  parseFloat(a.detailed.swap_fees)
                                )
                                  .div(100)
                                  .toNumber()),
                                (o.symbol = a.symbol)),
                                (r[n] = o);
                            }),
                          e.abrupt("return", r)
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [n, j]
          ),
          D = (0, i.h)({
            queries: [
              {
                queryKey: ["concentratorAbcCVXBaseApy"],
                queryFn: O,
                refetchInterval: 3e5
              },
              {
                queryKey: ["curveApy"],
                queryFn: E,
                refetchInterval: 3e5,
                enabled: !!x && !!q
              },
              {
                queryKey: ["balancerApy"],
                queryFn: S,
                refetchInterval: 3e5,
                enabled: !!j
              },
              { queryKey: ["allPoolApy"], queryFn: k, refetchInterval: 3e5 }
            ]
          }),
          _ = (0, a.Z)(D, 4),
          I = _[0],
          B = I.data,
          L = I.refetch,
          V = _[1],
          K = V.data,
          R = V.refetch,
          N = _[2],
          T = N.data,
          X = N.refetch,
          G = _[3],
          U = G.data,
          Y = G.refetch;
        return (
          (0, s.useEffect)(
            function () {
              L();
            },
            [Z, C, A]
          ),
          (0, s.useEffect)(
            function () {
              x && q && R(), j && X(), Y();
            },
            [n, x, q, j]
          ),
          w(
            w({}, U),
            {},
            { concentratorAbcCVXBaseApy: B, curveApy: K, balancerApy: T }
          )
        );
      };
    },
    60414: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return C;
        }
      });
      var n = r(16835),
        a = r(52587),
        o = r(2937);
      function u(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, a.Z)(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (0, o.Z)(e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var c = r(59499),
        s = r(50029),
        i = r(87794),
        l = r.n(i),
        p = r(67294),
        f = r(87669),
        d = r(48060),
        y = r(75349),
        v = r(91622),
        b = r(3612),
        h = r(43275),
        m = r(2100);
      function w(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(r), !0).forEach(function (t) {
                (0, c.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : w(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var C = function () {
        var e,
          t,
          r = (0, h.Z)(),
          a = r._currentAccount,
          o = r.web3,
          c = r.blockNumber,
          i = (0, y.cq)().getContract,
          w = (0, v.h)(),
          C = (0, p.useCallback)(
            ((e = (0, s.Z)(
              l().mark(function e(t) {
                var r, n, o, u;
                return l().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((o = function () {
                            return (o = (0, s.Z)(
                              l().mark(function e(t, r, n) {
                                var a;
                                return l().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          Promise.all(
                                            t.map(
                                              (function () {
                                                var e = (0, s.Z)(
                                                  l().mark(function e(t, a) {
                                                    var o, u, c, s;
                                                    return l().wrap(function (
                                                      e
                                                    ) {
                                                      for (;;)
                                                        switch (
                                                          (e.prev = e.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              "local" == n &&
                                                                ((o = r[a]
                                                                  ? r[a][0]
                                                                  : 0),
                                                                (u = r[a]
                                                                  ? r[a][1]
                                                                  : ""),
                                                                (c = r[a]
                                                                  ? r[a][2]
                                                                  : 18),
                                                                (s = r[a]
                                                                  ? r[a][3]
                                                                  : "")),
                                                              e.abrupt(
                                                                "return",
                                                                g(
                                                                  g({}, t),
                                                                  {},
                                                                  {
                                                                    totalSupply:
                                                                      o,
                                                                    lp_name: u,
                                                                    lp_decimals:
                                                                      c,
                                                                    lp_symbol: s
                                                                  }
                                                                )
                                                              )
                                                            );
                                                          case 2:
                                                          case "end":
                                                            return e.stop();
                                                        }
                                                    },
                                                    e);
                                                  })
                                                );
                                                return function (t, r) {
                                                  return e.apply(
                                                    this,
                                                    arguments
                                                  );
                                                };
                                              })()
                                            )
                                          )
                                        );
                                      case 2:
                                        return (
                                          (a = e.sent), e.abrupt("return", a)
                                        );
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )).apply(this, arguments);
                          }),
                          (n = function () {
                            return (n = (0, s.Z)(
                              l().mark(function e() {
                                var r, n, u, c, s;
                                return l().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (r = []),
                                          (n = t.map(function (e) {
                                            var t = e.lpContract;
                                            e.lpContract ||
                                              (t = i(
                                                e.lpGaugeAddress,
                                                d.Z.AlaLiquidityGaugeV3ABI
                                              ));
                                            var n = t.methods,
                                              a = n.totalSupply,
                                              o = n.name,
                                              u = n.decimals,
                                              c = n.symbol;
                                            return (
                                              (r = r.concat([
                                                a(),
                                                o(),
                                                u(),
                                                c()
                                              ])),
                                              (e.lpContract = t),
                                              e
                                            );
                                          })),
                                          (e.next = 4),
                                          w(r, { from: a })
                                        );
                                      case 4:
                                        return (
                                          (u = e.sent),
                                          (c = (0, b.jp)(u, 4)),
                                          (e.next = 8),
                                          (function (e, t, r) {
                                            return o.apply(this, arguments);
                                          })(n, c, "local")
                                        );
                                      case 8:
                                        return (
                                          (s = e.sent), e.abrupt("return", s)
                                        );
                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )).apply(this, arguments);
                          }),
                          (r = function () {
                            return n.apply(this, arguments);
                          }),
                          1 != t.length)
                        ) {
                          e.next = 6;
                          break;
                        }
                        return e.abrupt("return", r());
                      case 6:
                        return (e.next = 8), r();
                      case 8:
                        return (u = e.sent), e.abrupt("return", u);
                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (t) {
              return e.apply(this, arguments);
            }),
            [i, w, a]
          ),
          A = (0, p.useCallback)(
            ((t = (0, s.Z)(
              l().mark(function e(t) {
                var r, o, c;
                return l().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (r = t
                              .map(function (e) {
                                var t = i(
                                    e.lpGaugeAddress,
                                    d.Z.AlaLiquidityGaugeV3ABI
                                  ),
                                  r = e.lpGaugeAddress,
                                  n = t.methods,
                                  o = n.balanceOf,
                                  u = n.allowance,
                                  c = n.claimable_tokens;
                                return [o(a), u(a, r), c(a)];
                              })
                              .reduce(function (e, t) {
                                return [].concat(u(e), u(t));
                              })),
                            (e.next = 5),
                            w(r, { from: a })
                          );
                        case 5:
                          return (
                            (o = e.sent),
                            (c = (0, b.jp)(o, 3).map(function (e, t) {
                              var r = e || {},
                                a = (0, n.Z)(r, 3);
                              return {
                                userDeposited: a[0],
                                userTokenAllowance: a[1],
                                claimable_reward: a[2]
                              };
                            })),
                            e.abrupt("return", c)
                          );
                        case 10:
                          return (
                            (e.prev = 10),
                            (e.t0 = e.catch(0)),
                            console.log(e.t0),
                            e.abrupt("return", [])
                          );
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 10]]
                );
              })
            )),
            function (e) {
              return t.apply(this, arguments);
            }),
            [i, w, a]
          ),
          Z = (0, f.h)({
            queries: [
              {
                queryKey: ["allPoolsInfo"],
                queryFn: function () {
                  return C(F);
                },
                enabled: !!o,
                initialData: m.cd
              },
              {
                queryKey: ["allPoolsUserInfo", a],
                queryFn: function () {
                  return A(F);
                },
                initialData: []
              }
            ]
          }),
          k = (0, n.Z)(Z, 2),
          O = k[0],
          F = O.data,
          P = O.refetch,
          x = k[1],
          q = x.data,
          j = x.refetch;
        return (
          (0, p.useEffect)(
            function () {
              P(), j();
            },
            [a, c]
          ),
          { allPoolsInfo: F, allPoolsUserInfo: q }
        );
      };
    },
    17e3: function (e, t, r) {
      r.d(t, {
        a: function () {
          return d;
        }
      });
      var n = r(32161),
        a = r(52924),
        o = r(67294),
        u = r(464),
        c = r(30081),
        s = r(91784),
        i = r(85945),
        l = r(37122),
        p = r(13588),
        f = r(38381);
      function d(e, t, r) {
        let d = (0, n._v)(e, t, r);
        return (function (e, t) {
          let r = (0, i.NL)({ context: e.context }),
            n = (0, l.S)(),
            a = (0, s._)(),
            d = r.defaultQueryOptions(e);
          (d._optimisticResults = n ? "isRestoring" : "optimistic"),
            d.onError && (d.onError = c.V.batchCalls(d.onError)),
            d.onSuccess && (d.onSuccess = c.V.batchCalls(d.onSuccess)),
            d.onSettled && (d.onSettled = c.V.batchCalls(d.onSettled)),
            (0, f.Fb)(d),
            (0, p.pf)(d, a),
            (0, p.JN)(a);
          let [y] = o.useState(() => new t(r, d)),
            v = y.getOptimisticResult(d);
          if (
            ((0, u.$)(
              o.useCallback(
                (e) => (n ? () => void 0 : y.subscribe(c.V.batchCalls(e))),
                [y, n]
              ),
              () => y.getCurrentResult(),
              () => y.getCurrentResult()
            ),
            o.useEffect(() => {
              y.setOptions(d, { listeners: !1 });
            }, [d, y]),
            (0, f.SB)(d, v, n))
          )
            throw (0, f.j8)(d, y, a);
          if (
            (0, p.KJ)({
              result: v,
              errorResetBoundary: a,
              useErrorBoundary: d.useErrorBoundary,
              query: y.getCurrentQuery()
            })
          )
            throw v.error;
          return d.notifyOnChangeProps ? v : y.trackResult(v);
        })(d, a.z);
      }
    }
  }
]);
