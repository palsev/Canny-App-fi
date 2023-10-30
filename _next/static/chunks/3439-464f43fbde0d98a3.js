(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3439],
  {
    25688: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        }
      }),
        n(67294);
      var r = n(94184),
        c = n.n(r),
        a = n(11836),
        s = n.n(a),
        o = n(85893);

      function i(e) {
        var t = e.title,
          n = e.subtitle,
          r = e.icon;
        return (0, o.jsxs)("div", {
          className: c()(s().banner, "flex items-center gap-4"),
          children: [
            r &&
              (0, o.jsx)("div", {
                className: " bg-gray-300 p-3 rounded-full",
                children: (0, o.jsx)("img", {
                  src: r,
                  className: "w-8 h-8"
                })
              }),
            (0, o.jsxs)("div", {
              children: [
                t &&
                  (0, o.jsx)("div", {
                    className: s().title,
                    children: t
                  }),
                n &&
                  (0, o.jsxs)("div", {
                    className: s().subtitle,
                    children: [n, " "]
                  })
              ]
            })
          ]
        });
      }
    },
    48282: function (e, t) {
      "use strict";
      t.Z = function (e) {
        var t = e.visible,
          n = e.children;
        return void 0 === t || t ? n : null;
      };
    },
    10088: function (e, t, n) {
      "use strict";
      var r = n(59499),
        c = n(4730),
        a = n(50029),
        s = n(87794),
        o = n.n(s),
        i = n(67294),
        u = n(94594),
        l = n(66774),
        f = n(43275),
        p = n(48282),
        d = n(19029),
        b = n(1381),
        v = n(3612),
        h = n(85893),
        x = ["loading", "onClick", "children", "switchStyle", "size"];

      function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }

      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
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
      t.Z = function (e) {
        var t,
          n,
          r = (0, f.Z)(),
          s = r.currentAccount,
          m = (r.web3, r.isAllReady),
          g = e.allowance,
          k = e.approveAmount,
          j = void 0 === k ? 0 : k,
          O = e.tokenContract,
          w = e.approveAddress,
          Z = e.notVisibleMaxSwitch,
          S = void 0 !== Z && Z,
          A = (0, i.useState)(!1),
          _ = A[0],
          P = A[1],
          C = (0, i.useState)(!1),
          N = C[0],
          H = C[1],
          D = g > 0,
          E = (0, i.useMemo)(
            function () {
              return (
                !!j &&
                !!g &&
                (0, v.F6)(g).isGreaterThan(0) &&
                (0, v.F6)(j).isGreaterThan(g)
              );
            },
            [j, g]
          ),
          T = (0, i.useMemo)(
            function () {
              return !D || E;
            },
            [D, E]
          ),
          z =
            ((t = (0, a.Z)(
              o().mark(function e() {
                var t, n;
                return o().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (m) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        return (
                          (t = O.methods.approve(w, "0")),
                          (e.next = 5),
                          t.estimateGas({
                            from: s
                          })
                        );
                      case 5:
                        return (
                          (n = parseInt(1.2 * e.sent, 10) || 0),
                          (e.next = 9),
                          (0, b.Z)(
                            function () {
                              return t.send({
                                from: s,
                                gas: n
                              });
                            },
                            {
                              key: "Approve",
                              action: "Reset Approve"
                            }
                          )
                        );
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function () {
              return t.apply(this, arguments);
            }),
          G = (0, i.useCallback)(
            ((n = (0, a.Z)(
              o().mark(function e(t) {
                var n, r, c, a;
                return o().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (m) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if ((H(!0), !E)) {
                            e.next = 13;
                            break;
                          }
                          return (e.prev = 4), (e.next = 7), z();
                        case 7:
                          e.next = 13;
                          break;
                        case 9:
                          return (
                            (e.prev = 9),
                            (e.t0 = e.catch(4)),
                            H(!1),
                            e.abrupt("return")
                          );
                        case 13:
                          return (
                            (n = d.Z.uint256Max),
                            (r = _ ? n : (0, v.F6)(j).toFixed(0, 1)),
                            (e.prev = 15),
                            (c = O.methods.approve(w, r)),
                            (e.next = 19),
                            c.estimateGas({
                              from: s
                            })
                          );
                        case 19:
                          return (
                            (a = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 23),
                            (0, b.Z)(
                              function () {
                                return c.send({
                                  from: s,
                                  gas: a
                                });
                              },
                              {
                                key: "earn",
                                action: "approv"
                              },
                              function () {
                                H(!1), null == t || t();
                              }
                            )
                          );
                        case 23:
                          e.next = 29;
                          break;
                        case 25:
                          (e.prev = 25),
                            (e.t1 = e.catch(15)),
                            H(!1),
                            (0, b.c)("error_earn_approve", e.t1);
                        case 29:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [4, 9],
                    [15, 25]
                  ]
                );
              })
            )),
            function (e) {
              return n.apply(this, arguments);
            }),
            [s, E, j, _, O, w]
          );
        return {
          BtnWapper: function (e) {
            var t = e.loading,
              n = e.onClick,
              r = e.children,
              a = e.switchStyle,
              s = e.size,
              o = (0, c.Z)(e, x),
              f = (0, i.useCallback)(
                function () {
                  if (T) {
                    G(o.disabled ? null : n);
                    return;
                  }
                  n();
                },
                [T, G, n, o]
              );
            return (0, i.useMemo)(
              function () {
                return (0, h.jsxs)(h.Fragment, {
                  children: [
                    (0, h.jsx)(p.Z, {
                      visible: T && !S,
                      children: (0, h.jsxs)("div", {
                        className:
                          "flex items-center justify-center gap-2 mb-3",
                        style: null != a ? a : {},
                        children: [
                          (0, h.jsx)("div", {
                            children: "Unlimited Approve"
                          }),
                          (0, h.jsx)(u.Z, {
                            checked: _,
                            onChange: P
                          })
                        ]
                      })
                    }),
                    (0, h.jsx)(
                      l.Z,
                      y(
                        y(
                          {
                            size: s,
                            minWidth: "280px",
                            loading: t || N,
                            onClick: f
                          },
                          o
                        ),
                        {},
                        {
                          children: T ? "Approve & ".concat(r) : r
                        }
                      )
                    )
                  ]
                });
              },
              [_, P, T, S, N, f]
            );
          }
        };
      };
    },
    4624: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return p;
        }
      });
      var r = n(16835),
        c = n(50029),
        a = n(87794),
        s = n.n(a),
        o = n(67294),
        i = n(43275),
        u = n(91622),
        l = n(75349),
        f = n(19029),
        p = function (e, t, n) {
          var a = (0, i.Z)(),
            p = a._currentAccount,
            d = a.web3,
            b = a.blockNumber,
            v = a.isAllReady,
            h = (0, u.h)(),
            x = (0, l.cq)().erc20Contract,
            m = (0, o.useState)({
              balance: 0,
              allowance: 0
            }),
            y = m[0],
            g = m[1],
            k = (0, o.useCallback)(
              (0, c.Z)(
                s().mark(function c() {
                  var a, o, i, u, l, b;
                  return s().wrap(
                    function (c) {
                      for (;;)
                        switch ((c.prev = c.next)) {
                          case 0:
                            if (((c.prev = 0), e !== f.Z.zeroAddress)) {
                              c.next = 8;
                              break;
                            }
                            return (c.next = 4), d.eth.getBalance(p);
                          case 4:
                            g({
                              address: e,
                              balance: (a = c.sent),
                              allowance: a
                            }),
                              (c.next = 28);
                            break;
                          case 8:
                            (c.t0 = t),
                              (c.next =
                                "gauge" === c.t0
                                  ? 11
                                  : "gaugeZAP" === c.t0
                                  ? 13
                                  : "cveCRV" === c.t0
                                  ? 15
                                  : 17);
                            break;
                          case 11:
                          case 17:
                            return (
                              (o = n.lpGaugeAddress), c.abrupt("break", 19)
                            );
                          case 13:
                            return (
                              (o = f.Z.contracts.aladdinAllInOneGateway),
                              c.abrupt("break", 19)
                            );
                          case 15:
                            return (
                              (o = f.Z.contracts.CurveLockerProxy),
                              c.abrupt("break", 19)
                            );
                          case 19:
                            return (
                              (u = [
                                (i = x(e)).methods.balanceOf(p),
                                i.methods.allowance(p, o)
                              ]),
                              (c.next = 23),
                              h(u)
                            );
                          case 23:
                            (l = c.sent),
                              g({
                                balance: (b = (0, r.Z)(l, 2))[0],
                                allowance: b[1],
                                contractAddress: o,
                                contract: i
                              });
                          case 28:
                            c.next = 33;
                            break;
                          case 30:
                            (c.prev = 30),
                              (c.t1 = c.catch(0)),
                              console.log(c.t1);
                          case 33:
                          case "end":
                            return c.stop();
                        }
                    },
                    c,
                    null,
                    [[0, 30]]
                  );
                })
              ),
              [p, d, x, h, e, t, n]
            );
          return (
            (0, o.useEffect)(
              function () {
                v && e && k();
              },
              [d, b, v, e]
            ),
            y
          );
        };
      t.Z = function (e) {
        var t = (0, i.Z)(),
          n = t._currentAccount,
          r = t.web3,
          a = t.blockNumber;
        t.isAllReady;
        var p = (0, o.useState)([]),
          d = p[0],
          b = p[1],
          v = (0, o.useState)([]),
          h = v[0],
          x = v[1],
          m = (0, o.useState)([]),
          y = m[0],
          g = m[1],
          k = (0, u.h)(),
          j = (0, l.cq)().erc20Contract,
          O = (0, o.useCallback)(
            (0, c.Z)(
              s().mark(function t() {
                var c, a, o, i, u, l, p;
                return s().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), (t.next = 3), r.eth.getBalance(n)
                          );
                        case 3:
                          return (
                            (c = t.sent),
                            (i = (o = (a = (e || []).filter(function (e) {
                              return e.address !== f.Z.zeroAddress;
                            })).map(function (e) {
                              return j(e.address);
                            }))
                              .map(function (e, t) {
                                var r,
                                  c,
                                  s = e.methods;
                                return null !== (r = a[t]) &&
                                  void 0 !== r &&
                                  r.approveTo
                                  ? [
                                      s.balanceOf(n),
                                      s.allowance(
                                        n,
                                        null === (c = a[t]) || void 0 === c
                                          ? void 0
                                          : c.approveTo
                                      )
                                    ]
                                  : [s.balanceOf(n)];
                              })
                              .reverse()
                              .reduce(function (e, t) {
                                return t.concat(e);
                              }, [])),
                            (t.next = 9),
                            k(i)
                          );
                        case 9:
                          (u = t.sent),
                            (l = a.map(function (e, t) {
                              return e.approveTo
                                ? {
                                    symbol: e.symbol,
                                    contract: o[t],
                                    balance: u[2 * t],
                                    allowance: u[2 * t + 1],
                                    source: e
                                  }
                                : {
                                    contract: o[t],
                                    symbol: e.symbol,
                                    balance: u[t],
                                    source: e
                                  };
                            })),
                            (p = e.findIndex(function (e) {
                              return e.address === f.Z.zeroAddress;
                            })) > -1 &&
                              l.splice(p, 0, {
                                symbol: "eth",
                                balance: c
                              }),
                            g(l),
                            x(
                              l.map(function (e) {
                                return e.balance;
                              })
                            ),
                            b(o),
                            (t.next = 21);
                          break;
                        case 18:
                          (t.prev = 18), (t.t0 = t.catch(0)), console.log(t.t0);
                        case 21:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 18]]
                );
              })
            ),
            [k, j, n, r, e]
          );
        return (
          (0, o.useEffect)(
            function () {
              O();
            },
            [n, a]
          ),
          {
            tokenContracts: d,
            tokenBalance: h,
            tokenInfo: y
          }
        );
      };
    },
    1381: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return v;
        },
        c: function () {
          return b;
        }
      });
      var r = n(59499);
      n(67294);
      var c = n(55722),
        a = n(79090),
        s = n(40695),
        o = n(19029),
        i = n(85893);

      function u(e) {
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

      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }

      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var p = {
          info: function (e) {
            c.Z.info(
              f(
                f({}, e),
                {},
                {
                  icon: (0, i.jsx)(a.Z, {}),
                  duration: null
                }
              )
            );
          },
          success: function (e) {
            c.Z.success(
              f(
                f({}, e),
                {},
                {
                  description: (0, i.jsx)(u, {
                    txHash: e.txHash
                  }),
                  icon: (0, i.jsx)(s.Z, {
                    style: {
                      color: "green"
                    }
                  })
                }
              )
            );
          },
          error: function (e) {
            c.Z.error(
              f(
                f({}, e),
                {},
                {
                  description: "An error occurred: ".concat(
                    e.description.toString()
                  ),
                  icon: (0, i.jsx)(s.Z, {
                    style: {
                      color: "red"
                    }
                  })
                }
              )
            );
          },
          close: function (e) {
            c.Z.destroy(e);
          },
          txnSubmitted: function (e) {
            c.Z.info(
              f(
                f({}, e),
                {},
                {
                  description: (0, i.jsx)(u, {
                    txHash: e.txHash
                  }),
                  icon: (0, i.jsx)(a.Z, {
                    style: {
                      color: "green"
                    }
                  }),
                  duration: null
                }
              )
            );
          }
        },
        d = function (e) {
          return e.toString()[0].toUpperCase() + e.toString().slice(1);
        },
        b = function (e, t) {
          p.error({
            key: e,
            message: "Unexpected Error",
            description: t.message ? t.message.toString() : JSON.stringify(t)
          }),
            setTimeout(function () {
              p.close("error_stake_claim");
            }, 3e3);
        },
        v = function (e, t, n) {
          var r = t.key,
            c = t.action,
            a = "noPayableAction_".concat(r, "_").concat(c);
          return (
            p.info({
              key: a,
              message: "".concat(d(c), "ing")
            }),
            new Promise(function (t, r) {
              try {
                e()
                  .once("transactionHash", function (e) {
                    console.log("hash", e),
                      p.txnSubmitted({
                        key: a,
                        message: "Transaction Submitted",
                        txHash: e
                      });
                  })
                  .once("receipt", function (e) {
                    p.success({
                      key: a,
                      message: "Successfully ".concat(d(c), "ed"),
                      txHash: e.transactionHash
                    }),
                      setTimeout(function () {
                        p.close(a);
                      }, 3e3),
                      null == n || n(e),
                      t(e);
                  })
                  .once("error", function (e) {
                    p.close(a), r(e);
                  });
              } catch (e) {
                p.close(a), r(e);
              }
            })
          );
        };
    },
    11836: function (e) {
      e.exports = {
        banner: "styles_banner__Atjfj",
        title: "styles_title__rN6Dh",
        subtitle: "styles_subtitle__P4Sol"
      };
    }
  }
]);
