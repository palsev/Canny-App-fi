(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [989],
  {
    40695: function (e, t, r) {
      "use strict";
      var n = r(1413),
        s = r(67294),
        a = r(47612),
        c = r(7918),
        o = function (e, t) {
          return s.createElement(
            c.Z,
            (0, n.Z)((0, n.Z)({}, e), {}, { ref: t, icon: a.Z })
          );
        };
      (o.displayName = "CheckCircleOutlined"), (t.Z = s.forwardRef(o));
    },
    72591: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return S;
          }
        });
      var n = r(67294),
        s = r(9008),
        a = r.n(s),
        c = r(50029),
        o = r(87794),
        i = r.n(o),
        l = r(94184),
        u = r.n(l),
        d = r(66774),
        f = r(1381),
        m = r(59499),
        b = r(3612),
        x = r(16835),
        p = r(17e3),
        h = r(43275),
        g = r(91622),
        v = r(75349),
        j = function () {
          var e = (0, h.Z)(),
            t = e.blockNumber,
            r = e._currentAccount,
            s = e.isAllReady,
            a = (0, g.h)(),
            o = (0, v.sJ)().contract,
            l = (0, n.useCallback)(
              (0, c.Z)(
                i().mark(function e() {
                  var t, n, s, c, l, u, d, f, m, b;
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = (t = o.methods).getUserVest),
                            (s = t.vested),
                            (c = t.claim),
                            (e.next = 3),
                            c().call({ from: r })
                          );
                        case 3:
                          return (
                            (l = e.sent), (u = [n(r), s(r)]), (e.next = 7), a(u)
                          );
                        case 7:
                          return (
                            (d = e.sent),
                            (m = (f = (0, x.Z)(d, 2))[0]),
                            (b = f[1]),
                            e.abrupt("return", {
                              canClaim: l,
                              userVest: m,
                              vestedData: b
                            })
                          );
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [o, r, a]
            ),
            u = (0, p.a)({
              queryKey: ["vestingData", r],
              queryFn: l,
              initialData: { userVest: {}, vestedData: {}, vestingData: {} },
              enabled: s
            }),
            d = u.data,
            f = u.refetch;
          return (
            (0, n.useEffect)(
              function () {
                f();
              },
              [t, s]
            ),
            d
          );
        };
      function y(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(r), !0).forEach(function (t) {
                (0, m.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : y(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var C = function (e) {
          var t = (0, h.Z)().current,
            r = j(e),
            s = r.canClaim,
            a = r.userVest,
            c = r.vestedData,
            o = (0, n.useState)({
              canClaim: 0,
              claimedAmount: 0,
              totalClaimAble: 0,
              latestTime: 0,
              latestTimeText: ""
            }),
            i = o[0],
            l = o[1],
            u = function () {
              var e = 0,
                r = 0,
                n = (0, b.F6)(0),
                c = (0, b.F6)(0),
                o = [];
              a.length &&
                a.forEach(function (s) {
                  var a = O({}, s),
                    i = s.cancleTime,
                    l = s.claimedAmount,
                    u = s.endTime,
                    d = s.startTime,
                    f = s.vestingAmount;
                  (0 == r || 1 * u > 1 * r) && !(0, b.DB)(i) && (r = u),
                    (0 == e || 1 * d < 1 * e) && !(0, b.DB)(i) && (e = d),
                    (c = (0, b.DB)(i) ? c.plus(l) : c.plus(f)),
                    (n = n.plus(l)),
                    (a.startTime = new Date(1e3 * d).toLocaleString()),
                    (a.endTime = new Date(1e3 * u).toLocaleString()),
                    (a.vestingAmount = (0, b.Kn)(f, (0, b.FR)(f)));
                  var m = ((t.valueOf() - 1e3 * d) / (1e3 * u - 1e3 * d)) * 100;
                  (a.vestingAmountPercent =
                    m >= 100
                      ? "100%"
                      : "".concat(m <= 0 ? "0.00" : m.toFixed(2), "%")),
                    o.push(a);
                });
              var i = (0, b.FR)((0, b.F6)(n).toString(10), !1, 18),
                u = (0, b.FR)((0, b.F6)(c).toString(10), !1, 18),
                d = (0, b.F6)(c).minus(s).minus(n),
                f = (0, b.Kn)(d, (0, b.FR)(d)),
                m = 0 != e ? new Date(1e3 * e).toLocaleString() : 0,
                x = 0 != r ? new Date(1e3 * r).toLocaleString() : 0,
                p = (0, b.FR)((0, b.F6)(s).toString(10), !1, 18);
              l(function (t) {
                return O(
                  O({}, t),
                  {},
                  {
                    canClaim: s,
                    canClaimText: p,
                    claimedAmount: i,
                    claimedAmountInWei: n,
                    totalClaimAbleInWei: c,
                    totalClaimAble: u,
                    notYetVested: d,
                    notYetVestedText: f,
                    newList: o,
                    latestTime: r,
                    startTime: e,
                    latestTimeText: x,
                    startTimeText: m
                  }
                );
              });
            };
          return (
            (0, n.useEffect)(
              function () {
                a && c && u();
              },
              [a, c]
            ),
            i
          );
        },
        w = r(86920),
        T = r(85893);
      function k() {
        var e,
          t = (0, w.Z)().theme,
          r = (0, h.Z)().currentAccount,
          s = (0, n.useState)(!1),
          a = s[0],
          o = s[1],
          l = (0, n.useState)(0),
          m = l[0],
          b = l[1],
          x = C(m),
          p = x.canClaim,
          g = x.canClaimText,
          j = x.claimedAmount,
          y = x.totalClaimAble,
          O = x.notYetVestedText,
          k = x.newList,
          S = x.startTime,
          N = x.startTimeText,
          E = x.latestTime,
          Z = x.latestTimeText,
          D = (0, v.sJ)().contract,
          P =
            ((e = (0, c.Z)(
              i().mark(function e() {
                var t, n;
                return i().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            o(!0),
                            (t = D.methods.claim()),
                            (e.next = 5),
                            t.estimateGas({ from: r })
                          );
                        case 5:
                          return (
                            (n = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 9),
                            (0, f.Z)(
                              function () {
                                return t.send({ from: r, gas: n });
                              },
                              { key: "Claim", action: "Claim" }
                            )
                          );
                        case 9:
                          o(!1),
                            b(function (e) {
                              return e + 1;
                            }),
                            (e.next = 17);
                          break;
                        case 13:
                          (e.prev = 13),
                            (e.t0 = e.catch(0)),
                            o(!1),
                            (0, f.c)("error_earn_approve", e.t0);
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 13]]
                );
              })
            )),
            function () {
              return e.apply(this, arguments);
            });
        function _(e) {
          var r = e.title,
            n = e.value,
            s = e.unit;
          return (0, T.jsxs)("div", {
            className: "my-2",
            children: [
              r,
              ":",
              " ",
              (0, T.jsx)("span", {
                className: u()("default" === t ? "text-black" : "text-white"),
                children: n
              }),
              " ",
              s
            ]
          });
        }
        return (0, T.jsx)("div", {
          className: "page-bg color-blue",
          children: (0, T.jsxs)("div", {
            className: "container text-center text-lg md:text-xl",
            children: [
              (0, T.jsx)("img", {
                src:
                  "dark" === t
                    ? "/assets/logo-dark.svg"
                    : "/assets/logo-default.svg",
                className: "w-3/5 md:w-1/3 mx-auto mt-16 mb-12"
              }),
              (0, T.jsxs)("div", {
                className: "mb-12",
                children: [
                  "Airdrop to beta users will be linearly vested over 1 year with a total distribution of 100,000 CLEV.",
                  (0, T.jsx)("br", {}),
                  (0, T.jsx)("br", {}),
                  "Bonus for CLever Token Offering participants can be claimed from 2022/10/16 00:00:00 UTC."
                ]
              }),
              (0, T.jsxs)("div", {
                className: "mb-12",
                children: [
                  (0, T.jsx)("div", {
                    className: u()(
                      "mb-4 font-bold",
                      "default" === t ? "text-black" : "text-white"
                    ),
                    children: "Your Vesting"
                  }),
                  (0, T.jsx)(_, {
                    title: "Total of Your Airdrop",
                    value: "".concat(y),
                    unit: "CLEV"
                  }),
                  (0, T.jsx)(_, {
                    title: "Claimable",
                    value: "".concat(g),
                    unit: "CLEV"
                  }),
                  (0, T.jsx)(_, {
                    title: "Not Yet Vested",
                    value: "".concat(O),
                    unit: "CLEV"
                  }),
                  (0, T.jsx)(_, {
                    title: "Claimed",
                    value: "".concat(j),
                    unit: "CLEV"
                  }),
                  !!S &&
                    (0, T.jsx)(_, { title: "Start Time", value: "".concat(N) }),
                  !!E &&
                    (0, T.jsx)(_, { title: "End Time", value: "".concat(Z) })
                ]
              }),
              !!(k && k.length) &&
                (0, T.jsxs)("table", {
                  className: u()(
                    "border-collapse border mx-auto",
                    "default" === t ? " text-black" : "text-white"
                  ),
                  children: [
                    (0, T.jsxs)("thead", {
                      children: [
                        (0, T.jsx)("th", {
                          className: u()(
                            "border p-4",
                            "default" === t && "border-black"
                          ),
                          children: "Start Date"
                        }),
                        (0, T.jsx)("th", {
                          className: u()(
                            "border p-4",
                            "default" === t && "border-black"
                          ),
                          children: "End Date"
                        }),
                        (0, T.jsx)("th", {
                          className: u()(
                            "border p-4",
                            "default" === t && "border-black"
                          ),
                          children: "Total Tokens"
                        }),
                        (0, T.jsx)("th", {
                          className: u()(
                            "border p-4",
                            "default" === t && "border-black"
                          ),
                          children: "% Vested"
                        })
                      ]
                    }),
                    (0, T.jsx)("tbody", {
                      children: k.map(function (e) {
                        return (0,
                        T.jsxs)("tr", { children: [(0, T.jsx)("td", { className: u()("border p-4", "default" === t && "border-black"), children: e.startTime }), (0, T.jsx)("td", { className: u()("border p-4", "default" === t && "border-black"), children: e.endTime }), (0, T.jsxs)("td", { className: u()("border p-4", "default" === t && "border-black"), children: [e.vestingAmount, " CLEV"] }), (0, T.jsx)("td", { className: u()("border p-4", "default" === t && "border-black"), children: e.vestingAmountPercent })] });
                      })
                    })
                  ]
                }),
              (0, T.jsx)("br", {}),
              (0, T.jsx)("br", {}),
              !!(1 * p) &&
                (0, T.jsx)(d.Z, {
                  className: "w-64",
                  onClick: P,
                  loading: a,
                  theme: "lightBlue",
                  children: "Claim"
                }),
              (0, T.jsx)("br", {})
            ]
          })
        });
      }
      function S() {
        return (0, T.jsxs)(n.Fragment, {
          children: [
            (0, T.jsx)(a(), {
              children: (0, T.jsx)("title", {
                children: "Canny | curve, Convex | High performance - Vesting"
              })
            }),
            (0, T.jsx)(k, {})
          ]
        });
      }
    },
    1381: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return x;
        },
        c: function () {
          return b;
        }
      });
      var n = r(59499);
      r(67294);
      var s = r(55722),
        a = r(79090),
        c = r(40695),
        o = r(19029),
        i = r(85893);
      function l(e) {
        var t = e.txHash;
        return (0, i.jsxs)("div", {
          children: [
            "Tx Hash is",
            " ",
            (0, i.jsx)("a", {
              target: "_blank",
              rel: "noopener noreferrer",
              href: "".concat(o.Z.explorerUri, "/tx/").concat(t),
              children: t
            })
          ]
        });
      }
      function u(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var f = {
          info: function (e) {
            s.Z.info(
              d(d({}, e), {}, { icon: (0, i.jsx)(a.Z, {}), duration: null })
            );
          },
          success: function (e) {
            s.Z.success(
              d(
                d({}, e),
                {},
                {
                  description: (0, i.jsx)(l, { txHash: e.txHash }),
                  icon: (0, i.jsx)(c.Z, { style: { color: "green" } })
                }
              )
            );
          },
          error: function (e) {
            s.Z.error(
              d(
                d({}, e),
                {},
                {
                  description: "An error occurred: ".concat(
                    e.description.toString()
                  ),
                  icon: (0, i.jsx)(c.Z, { style: { color: "red" } })
                }
              )
            );
          },
          close: function (e) {
            s.Z.destroy(e);
          },
          txnSubmitted: function (e) {
            s.Z.info(
              d(
                d({}, e),
                {},
                {
                  description: (0, i.jsx)(l, { txHash: e.txHash }),
                  icon: (0, i.jsx)(a.Z, { style: { color: "green" } }),
                  duration: null
                }
              )
            );
          }
        },
        m = function (e) {
          return e.toString()[0].toUpperCase() + e.toString().slice(1);
        },
        b = function (e, t) {
          f.error({
            key: e,
            message: "Unexpected Error",
            description: t.message ? t.message.toString() : JSON.stringify(t)
          }),
            setTimeout(function () {
              f.close("error_stake_claim");
            }, 3e3);
        },
        x = function (e, t, r) {
          var n = t.key,
            s = t.action,
            a = "noPayableAction_".concat(n, "_").concat(s);
          return (
            f.info({ key: a, message: "".concat(m(s), "ing") }),
            new Promise(function (t, n) {
              try {
                e()
                  .once("transactionHash", function (e) {
                    console.log("hash", e),
                      f.txnSubmitted({
                        key: a,
                        message: "Transaction Submitted",
                        txHash: e
                      });
                  })
                  .once("receipt", function (e) {
                    f.success({
                      key: a,
                      message: "Successfully ".concat(m(s), "ed"),
                      txHash: e.transactionHash
                    }),
                      setTimeout(function () {
                        f.close(a);
                      }, 3e3),
                      null == r || r(e),
                      t(e);
                  })
                  .once("error", function (e) {
                    f.close(a), n(e);
                  });
              } catch (e) {
                f.close(a), n(e);
              }
            })
          );
        };
    },
    95163: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/vesting",
        function () {
          return r(72591);
        }
      ]);
    },
    9008: function (e, t, r) {
      e.exports = r(11597);
    },
    17e3: function (e, t, r) {
      "use strict";
      r.d(t, {
        a: function () {
          return m;
        }
      });
      var n = r(32161),
        s = r(52924),
        a = r(67294),
        c = r(464),
        o = r(30081),
        i = r(91784),
        l = r(85945),
        u = r(37122),
        d = r(13588),
        f = r(38381);
      function m(e, t, r) {
        let m = (0, n._v)(e, t, r);
        return (function (e, t) {
          let r = (0, l.NL)({ context: e.context }),
            n = (0, u.S)(),
            s = (0, i._)(),
            m = r.defaultQueryOptions(e);
          (m._optimisticResults = n ? "isRestoring" : "optimistic"),
            m.onError && (m.onError = o.V.batchCalls(m.onError)),
            m.onSuccess && (m.onSuccess = o.V.batchCalls(m.onSuccess)),
            m.onSettled && (m.onSettled = o.V.batchCalls(m.onSettled)),
            (0, f.Fb)(m),
            (0, d.pf)(m, s),
            (0, d.JN)(s);
          let [b] = a.useState(() => new t(r, m)),
            x = b.getOptimisticResult(m);
          if (
            ((0, c.$)(
              a.useCallback(
                (e) => (n ? () => void 0 : b.subscribe(o.V.batchCalls(e))),
                [b, n]
              ),
              () => b.getCurrentResult(),
              () => b.getCurrentResult()
            ),
            a.useEffect(() => {
              b.setOptions(m, { listeners: !1 });
            }, [m, b]),
            (0, f.SB)(m, x, n))
          )
            throw (0, f.j8)(m, b, s);
          if (
            (0, d.KJ)({
              result: x,
              errorResetBoundary: s,
              useErrorBoundary: m.useErrorBoundary,
              query: b.getCurrentQuery()
            })
          )
            throw x.error;
          return m.notifyOnChangeProps ? x : b.trackResult(x);
        })(m, s.z);
      }
    }
  },
  function (e) {
    e.O(0, [8795, 9774, 2888, 179], function () {
      return e((e.s = 95163));
    }),
      (_N_E = e.O());
  }
]);
