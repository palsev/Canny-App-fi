(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5481],
  {
    25688: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        }
      }),
        n(67294);
      var r = n(94184),
        l = n.n(r),
        s = n(11836),
        i = n.n(s),
        o = n(85893);
      function a(e) {
        var t = e.title,
          n = e.subtitle,
          r = e.icon;
        return (0, o.jsxs)("div", {
          className: l()(i().banner, "flex items-center gap-4"),
          children: [
            r &&
              (0, o.jsx)("div", {
                className: " bg-gray-300 p-3 rounded-full",
                children: (0, o.jsx)("img", { src: r, className: "w-8 h-8" })
              }),
            (0, o.jsxs)("div", {
              children: [
                t && (0, o.jsx)("div", { className: i().title, children: t }),
                n &&
                  (0, o.jsxs)("div", {
                    className: i().subtitle,
                    children: [n, " "]
                  })
              ]
            })
          ]
        });
      }
    },
    98268: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return v;
        },
        k: function () {
          return f;
        }
      });
      var r = n(4730),
        l = n(67294),
        s = n(94184),
        i = n.n(s),
        o = n(48282),
        a = n(63653),
        u = n.n(a),
        c = n(3612),
        d = n(85893),
        p = [
          "defaultValue",
          "balance",
          "label",
          "labelDes",
          "token",
          "vaultWithdrawFee",
          "feeName",
          "decimals",
          "available",
          "BottomElement",
          "calculatorLink",
          "depositFor",
          "placeholder",
          "withdrawFee",
          "onChange",
          "hidePercent",
          "ExtraButton",
          "hideMax",
          "reset"
        ];
      function f(e) {
        var t = e.name,
          n = e.value,
          r = e.extraClass;
        return (0, d.jsxs)("div", {
          className: "flex items-center gap-1",
          children: [
            (0, d.jsxs)("div", { children: [t, ": "] }),
            (0, d.jsx)("div", {
              className: "font-semibold ".concat(r),
              children: n
            })
          ]
        });
      }
      function v(e) {
        var t,
          n = e.defaultValue,
          s = e.balance,
          a = e.label,
          v = e.labelDes,
          m = e.token,
          x = e.vaultWithdrawFee,
          h = e.feeName,
          y = e.decimals,
          b = e.available,
          j = e.BottomElement,
          _ = (e.calculatorLink, e.depositFor),
          g = e.placeholder,
          C = e.withdrawFee,
          w = e.onChange,
          N = void 0 === w ? function () {} : w,
          S = e.hidePercent,
          F = e.ExtraButton,
          O = e.hideMax,
          E = e.reset,
          k = (0, r.Z)(e, p),
          Z = (0, l.useState)(0),
          B = Z[0],
          V = Z[1],
          P = (0, l.useState)(""),
          L = P[0],
          D = P[1];
        (0, l.useEffect)(
          function () {
            D(
              (0, c.F6)(n)
                .shiftedBy(-(null != y ? y : 18))
                .toFixed(3)
            ),
              N(n, 100);
          },
          [n]
        ),
          (0, l.useState)(
            function () {
              V(0);
            },
            [L]
          ),
          (0, l.useEffect)(
            function () {
              V(0), D(""), N(0);
            },
            [E]
          );
        var I = function (e) {
          if ((V(e), s && !(0, c.F6)(s).isZero() && !(0, c.F6)(s).isNaN())) {
            var t = (0, c.F6)(s).times(e).div(100);
            D((0, c.FR)(t, !1, null != y ? y : 18)), N(t, e);
          }
          if (b && !(0, c.F6)(b).isZero() && !(0, c.F6)(b).isNaN()) {
            var n = (0, c.F6)(b).times(e).div(100);
            D((0, c.FR)(n, !1, null != y ? y : 18)), N(n, e);
          }
        };
        return (0, d.jsxs)("div", {
          className: u().inputWrapper,
          style: null !== (t = k.style) && void 0 !== t ? t : {},
          children: [
            (0, d.jsxs)("div", {
              className: u().inputTop,
              children: [
                !S &&
                  !(0, c.F6)(s).isNaN() &&
                  (0, d.jsx)(f, {
                    name: "Balance",
                    value: ""
                      .concat((0, c.FR)(s, !1, null != y ? y : 18), " ")
                      .concat(m),
                    extraClass: "color-blue"
                  }),
                !S &&
                  !(0, c.F6)(b).isNaN() &&
                  (0, d.jsx)(f, {
                    name: "Available",
                    value: ""
                      .concat((0, c.FR)(b, !1, null != y ? y : 18), " ")
                      .concat(m)
                  }),
                !S &&
                  (0, d.jsx)("div", {
                    className: u().percents,
                    children: [25, 50, 75, 100].map(function (e) {
                      return (0, d.jsxs)(
                        "div",
                        {
                          className: i()(u().percent, e === B && u().active),
                          onClick: function () {
                            return I(e);
                          },
                          children: [e, "%"]
                        },
                        e
                      );
                    })
                  })
              ]
            }),
            a &&
              (0, d.jsxs)("div", {
                className:
                  " form-label text-xl flex items-center justify-between",
                children: [
                  (0, d.jsx)("span", {
                    dangerouslySetInnerHTML: { __html: a }
                  }),
                  v
                ]
              }),
            (0, d.jsxs)("div", {
              className: "flex gap-4 my-3",
              children: [
                (0, d.jsxs)("div", {
                  className: "relative w-full",
                  children: [
                    (0, d.jsx)("input", {
                      onChange: function (e) {
                        V(0);
                        var t = e.target.value,
                          n = new RegExp(/,/g),
                          r = /[^\d.]/g;
                        n.test(t) && (t = t.replace(/,/g, "")),
                          r.test(t) && (t = t.replace(r, "")),
                          "0" === L &&
                            -1 === t.indexOf(".") &&
                            (t = t.slice(1)),
                          D(t),
                          N((0, c.F6)(t || 0).shiftedBy(null != y ? y : 18), B);
                      },
                      value: L,
                      placeholder: g
                    }),
                    (0, d.jsx)(o.Z, {
                      visible: S && !O,
                      children: (0, d.jsx)("a", {
                        className:
                          "color-blue underline absolute right-3 top-2",
                        onClick: function () {
                          return I(100);
                        },
                        children: "MAX"
                      })
                    })
                  ]
                }),
                F && (0, d.jsx)(F, {})
              ]
            }),
            (0, d.jsxs)("div", {
              className: u().inputBottom,
              children: [
                j && (0, d.jsx)(j, {}),
                x &&
                  (0, d.jsx)(f, {
                    name: "".concat(h || "Vault Withdraw", " Fee"),
                    value: x || "-"
                  }),
                C &&
                  (0, d.jsx)(f, {
                    name: "".concat(h || "Withdraw", " Fee"),
                    value: C || "-"
                  }),
                _ && (0, d.jsx)(f, { name: "Deposit for", value: _ || "-" })
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
    92678: function (e, t, n) {
      "use strict";
      var r = n(16835),
        l = n(67294),
        s = n(17e3),
        i = n(43275),
        o = n(91622),
        a = n(75349);
      t.Z = function () {
        var e = (0, i.Z)(),
          t = e.currentAccount,
          n = e.isAllReady,
          u = e.blockNumber,
          c = (0, o.H)(),
          d = (0, a.aH)().contract,
          p = (0, a.DU)().contract,
          f = (0, l.useCallback)(
            function () {
              var e = [
                d.methods.totalSupply(),
                d.methods.balanceOf(t),
                p.methods.balanceOf(t)
              ];
              return c.apply(void 0, e);
            },
            [d, p, t]
          ),
          v = (0, s.a)({
            queryKey: ["calcData", t],
            queryFn: f,
            initialData: [0, 0, 0],
            enabled: n
          }),
          m = (0, r.Z)(v.data, 3),
          x = m[0],
          h = m[1],
          y = m[2],
          b = v.refetch;
        return (
          (0, l.useEffect)(
            function () {
              n && b();
            },
            [t, u, n]
          ),
          (0, l.useMemo)(
            function () {
              return {
                veTotalSupply: x,
                userVeCLEV: h,
                userCLEV: y,
                contracts: { veContract: d }
              };
            },
            [x, h, y, d]
          )
        );
      };
    },
    6783: function (e, t, n) {
      "use strict";
      var r = n(50029),
        l = n(87794),
        s = n.n(l),
        i = n(67294),
        o = n(70794),
        a = n(17e3),
        u = n(91622),
        c = n(43275),
        d = n(3612),
        p = n(75349);
      t.Z = function (e, t) {
        var n = (0, c.Z)(),
          l = n.currentAccount,
          f = n.isAllReady,
          v = (0, p.aH)().contract,
          m = (0, u.H)(),
          x = t.lpContract,
          h = t.depositAmount,
          y = t.poolLiquidity,
          b = t.totalveCLEV,
          j = t.veCLEVAmount,
          _ = (0, i.useCallback)(
            (0, r.Z)(
              s().mark(function t() {
                var n, r, i, a, u, c, p, _, g, C, w;
                return s().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!(f && x)) {
                          t.next = 22;
                          break;
                        }
                        if (!((0, d.F6)(h).isZero() || (0, d.F6)(h).isNaN())) {
                          t.next = 3;
                          break;
                        }
                        return t.abrupt("return", 0);
                      case 3:
                        return (
                          (n = [
                            v.methods.balanceOf(l),
                            v.methods.totalSupply(),
                            x.methods.period_timestamp(0),
                            x.methods.working_balances(l),
                            x.methods.working_supply(),
                            x.methods.totalSupply()
                          ]),
                          (t.next = 6),
                          m.apply(void 0, n)
                        );
                      case 6:
                        return (
                          console.log(
                            "curve-dao > calc-contract-info",
                            (r = t.sent)
                          ),
                          (i = +r[3]),
                          (a = +r[4]),
                          (u = (0, d.F6)(y).plus(h)),
                          (c = (0, d.F6)(h).multipliedBy(0.4)),
                          (p = e || j),
                          (c = (0, d.F6)(u)
                            .multipliedBy(p)
                            .div(b)
                            .multipliedBy(0.6)
                            .plus(c)),
                          (c = o.Z.minimum(c, h)),
                          (_ = (0, d.F6)(h).multipliedBy(40).div(100)),
                          (g = (0, d.F6)(a).plus(_).minus(i)),
                          (C = (0, d.F6)(a).plus(c).minus(i)),
                          (w = (0, d.F6)(c)
                            .div(C)
                            .div((0, d.F6)(_).div(g))
                            .toString()),
                          t.abrupt(
                            "return",
                            (0, d.DB)(w) ? parseFloat(w).toFixed(2) : 0
                          )
                        );
                      case 22:
                        return t.abrupt("return", 0);
                      case 23:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            ),
            [v, l, e, t]
          );
        return (0, a.a)({
          queryKey: [
            "liquidityLimit",
            e,
            (null == x ? void 0 : x._address) || "",
            h || "",
            y || "",
            b || "",
            j || ""
          ],
          queryFn: _,
          initialData: 0
        }).data;
      };
    },
    60414: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return _;
        }
      });
      var r = n(16835),
        l = n(52587),
        s = n(2937);
      function i(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, l.Z)(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (0, s.Z)(e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var o = n(59499),
        a = n(50029),
        u = n(87794),
        c = n.n(u),
        d = n(67294),
        p = n(87669),
        f = n(48060),
        v = n(75349),
        m = n(91622),
        x = n(3612),
        h = n(43275),
        y = n(2100);
      function b(e, t) {
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
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var _ = function () {
        var e,
          t,
          n = (0, h.Z)(),
          l = n._currentAccount,
          s = n.web3,
          o = n.blockNumber,
          u = (0, v.cq)().getContract,
          b = (0, m.h)(),
          _ = (0, d.useCallback)(
            ((e = (0, a.Z)(
              c().mark(function e(t) {
                var n, r, s, i;
                return c().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((s = function () {
                            return (s = (0, a.Z)(
                              c().mark(function e(t, n, r) {
                                var l;
                                return c().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          Promise.all(
                                            t.map(
                                              (function () {
                                                var e = (0, a.Z)(
                                                  c().mark(function e(t, l) {
                                                    var s, i, o, a;
                                                    return c().wrap(function (
                                                      e
                                                    ) {
                                                      for (;;)
                                                        switch (
                                                          (e.prev = e.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              "local" == r &&
                                                                ((s = n[l]
                                                                  ? n[l][0]
                                                                  : 0),
                                                                (i = n[l]
                                                                  ? n[l][1]
                                                                  : ""),
                                                                (o = n[l]
                                                                  ? n[l][2]
                                                                  : 18),
                                                                (a = n[l]
                                                                  ? n[l][3]
                                                                  : "")),
                                                              e.abrupt(
                                                                "return",
                                                                j(
                                                                  j({}, t),
                                                                  {},
                                                                  {
                                                                    totalSupply:
                                                                      s,
                                                                    lp_name: i,
                                                                    lp_decimals:
                                                                      o,
                                                                    lp_symbol: a
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
                                                return function (t, n) {
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
                                          (l = e.sent), e.abrupt("return", l)
                                        );
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )).apply(this, arguments);
                          }),
                          (r = function () {
                            return (r = (0, a.Z)(
                              c().mark(function e() {
                                var n, r, i, o, a;
                                return c().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n = []),
                                          (r = t.map(function (e) {
                                            var t = e.lpContract;
                                            e.lpContract ||
                                              (t = u(
                                                e.lpGaugeAddress,
                                                f.Z.AlaLiquidityGaugeV3ABI
                                              ));
                                            var r = t.methods,
                                              l = r.totalSupply,
                                              s = r.name,
                                              i = r.decimals,
                                              o = r.symbol;
                                            return (
                                              (n = n.concat([
                                                l(),
                                                s(),
                                                i(),
                                                o()
                                              ])),
                                              (e.lpContract = t),
                                              e
                                            );
                                          })),
                                          (e.next = 4),
                                          b(n, { from: l })
                                        );
                                      case 4:
                                        return (
                                          (i = e.sent),
                                          (o = (0, x.jp)(i, 4)),
                                          (e.next = 8),
                                          (function (e, t, n) {
                                            return s.apply(this, arguments);
                                          })(r, o, "local")
                                        );
                                      case 8:
                                        return (
                                          (a = e.sent), e.abrupt("return", a)
                                        );
                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )).apply(this, arguments);
                          }),
                          (n = function () {
                            return r.apply(this, arguments);
                          }),
                          1 != t.length)
                        ) {
                          e.next = 6;
                          break;
                        }
                        return e.abrupt("return", n());
                      case 6:
                        return (e.next = 8), n();
                      case 8:
                        return (i = e.sent), e.abrupt("return", i);
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
            [u, b, l]
          ),
          g = (0, d.useCallback)(
            ((t = (0, a.Z)(
              c().mark(function e(t) {
                var n, s, o;
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (n = t
                              .map(function (e) {
                                var t = u(
                                    e.lpGaugeAddress,
                                    f.Z.AlaLiquidityGaugeV3ABI
                                  ),
                                  n = e.lpGaugeAddress,
                                  r = t.methods,
                                  s = r.balanceOf,
                                  i = r.allowance,
                                  o = r.claimable_tokens;
                                return [s(l), i(l, n), o(l)];
                              })
                              .reduce(function (e, t) {
                                return [].concat(i(e), i(t));
                              })),
                            (e.next = 5),
                            b(n, { from: l })
                          );
                        case 5:
                          return (
                            (s = e.sent),
                            (o = (0, x.jp)(s, 3).map(function (e, t) {
                              var n = e || {},
                                l = (0, r.Z)(n, 3);
                              return {
                                userDeposited: l[0],
                                userTokenAllowance: l[1],
                                claimable_reward: l[2]
                              };
                            })),
                            e.abrupt("return", o)
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
            [u, b, l]
          ),
          C = (0, p.h)({
            queries: [
              {
                queryKey: ["allPoolsInfo"],
                queryFn: function () {
                  return _(S);
                },
                enabled: !!s,
                initialData: y.cd
              },
              {
                queryKey: ["allPoolsUserInfo", l],
                queryFn: function () {
                  return g(S);
                },
                initialData: []
              }
            ]
          }),
          w = (0, r.Z)(C, 2),
          N = w[0],
          S = N.data,
          F = N.refetch,
          O = w[1],
          E = O.data,
          k = O.refetch;
        return (
          (0, d.useEffect)(
            function () {
              F(), k();
            },
            [l, o]
          ),
          { allPoolsInfo: S, allPoolsUserInfo: E }
        );
      };
    },
    52489: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          }
        });
      var r = n(67294),
        l = n(9008),
        s = n.n(l),
        i = n(50029),
        o = n(59499),
        a = n(87794),
        u = n.n(a),
        c = n(66774),
        d = n(94184),
        p = n.n(d),
        f = n(15258),
        v = n.n(f),
        m = n(85893);
      function x(e) {
        var t = e.name,
          n = e.value,
          r = e.nocolon,
          l = e.withQuestion;
        return (0, m.jsxs)("div", {
          children: [
            (0, m.jsxs)("span", {
              className: "color-light-blue",
              children: [
                t,
                " ",
                l &&
                  (0, m.jsx)("span", { className: "question", children: "?" }),
                r ? "" : ":",
                " "
              ]
            }),
            n && (0, m.jsx)("span", { children: n })
          ]
        });
      }
      function h(e) {
        var t = e.hint,
          n = e.title,
          l = e.titleQuestion,
          s = e.options,
          i = e.onChange,
          o = e.value,
          a = e.placeholder,
          u = (0, r.useState)(!1),
          c = u[0],
          d = u[1],
          f = function (e) {
            i && (i(e), d(!1));
          };
        return (0, m.jsxs)("div", {
          className: v().selectWrapper,
          children: [
            (0, m.jsx)("div", {
              className: v().selectTop,
              children:
                n && (0, m.jsx)(x, { nocolon: !0, name: n, withQuestion: l })
            }),
            (0, m.jsxs)("div", {
              className: v().selectBox,
              children: [
                (0, m.jsxs)("div", {
                  className: p()(
                    v().select,
                    "flex justify-between items-center"
                  ),
                  onClick: function () {
                    return d(function (e) {
                      return !e;
                    });
                  },
                  children: [
                    o && (0, m.jsx)("div", { children: o }),
                    !o &&
                      a &&
                      (0, m.jsx)("div", {
                        className: " text-gray-400",
                        children: a
                      }),
                    (0, m.jsx)("img", {
                      src: "/assets/arrow-down.svg",
                      className: "w-6"
                    })
                  ]
                }),
                (0, m.jsx)("div", {
                  className: p()(v().options, c && v().visible),
                  children: s.map(function (e) {
                    return (0, m.jsx)(
                      "div",
                      {
                        onClick: function () {
                          return f(e);
                        },
                        className: p()(v().option, e === o && v().active),
                        children: e
                      },
                      e
                    );
                  })
                })
              ]
            }),
            (0, m.jsx)("div", {
              className: v().selectBottom,
              children: t && (0, m.jsx)(x, { nocolon: !0, name: t })
            })
          ]
        });
      }
      var y = n(98268),
        b = n(48282),
        j = n(42616),
        _ = n(60414),
        g = n(92678),
        C = n(6783),
        w = (0, r.createContext)(null),
        N = function () {
          return (0, r.useContext)(w);
        },
        S = n(3612);
      function F(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : F(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var E = {
          "4 years": 126144e3,
          "3 years": 94608e3,
          "2 years": 63072e3,
          "1 year": 31536e3,
          "6 months": 15768e3,
          "1 month": 2628e3,
          "1 week": 606461.5384615385
        },
        k = Object.keys(E),
        Z = ["CLEV", "veCLEV"],
        B = function () {
          var e,
            t,
            n,
            l,
            s,
            o = (0, g.Z)(),
            a = (0, j.Z)().farmingPriceData,
            d = (0, _.Z)(),
            p = d.allPoolsInfo,
            f = d.allPoolsUserInfo,
            v = (0, r.useState)(""),
            x = v[0],
            w = v[1],
            F = (0, r.useMemo)(
              function () {
                return p
                  .map(function (e) {
                    return e.name;
                  })
                  .filter(function (e) {
                    return e;
                  });
              },
              [p]
            ),
            B = N().setCalcInfo,
            V = (0, r.useState)(0),
            P = V[0],
            L = V[1],
            D = (0, r.useMemo)(
              function () {
                var e,
                  t = p.find(function (e) {
                    return e.name == x;
                  }),
                  n =
                    null !==
                      (e =
                        f[
                          p.findIndex(function (e) {
                            return e.name == x;
                          })
                        ]) && void 0 !== e
                      ? e
                      : {};
                return t
                  ? O(
                      O({}, null != t ? t : {}),
                      {},
                      {
                        userInfo: n,
                        lpPrice:
                          null == a ? void 0 : a[t.lpAddress.toLowerCase()]
                      }
                    )
                  : null;
              },
              [p, x, f, a]
            ),
            I = (0, r.useState)(0),
            T = I[0],
            A = I[1],
            R = (0, r.useState)(Z[0]),
            M = R[0],
            q = R[1],
            W = (0, r.useMemo)(
              function () {
                return "CLEV" === M ? o.userCLEV : o.userVeCLEV;
              },
              [o, M]
            ),
            H = (0, r.useState)(0),
            Q = H[0],
            G = H[1],
            K = (0, r.useState)(k[0]),
            X = K[0],
            U = K[1],
            z = (0, r.useMemo)(
              function () {
                return "CLEV" != M
                  ? 0
                  : (0, S.F6)(Q || o.userCLEV)
                      .multipliedBy(E[X])
                      .div(126144e3);
              },
              [M, Q, X, o]
            ),
            Y = (0, r.useMemo)(
              function () {
                return "number" == typeof Q ? o.userVeCLEV : Q;
              },
              [o, M, Q]
            ),
            J = (0, r.useState)(0),
            $ = J[0],
            ee = J[1],
            et = (0, r.useMemo)(
              function () {
                var e =
                    "number" == typeof P
                      ? null == D
                        ? void 0
                        : D.totalSupply
                      : P,
                  t = "number" == typeof $ ? o.veTotalSupply : $,
                  n = (0, S.F6)(e).plus(T),
                  r = (0, S.F6)(t).multipliedBy(T).div(n);
                return r.isNaN() ? 0 : r;
              },
              [T, o, $, P, D]
            ),
            en = (0, r.useMemo)(
              function () {
                return "CLEV" === M ? z.toString() : Y.toString();
              },
              [M, z, Y]
            ),
            er = (0, r.useMemo)(
              function () {
                return D
                  ? "number" == typeof P
                    ? (0, S.F6)(null == D ? void 0 : D.totalSupply)
                        .shiftedBy(
                          18 - (null == D ? void 0 : D.stakeTokenDecimals)
                        )
                        .toString()
                    : P.toString()
                  : 0;
              },
              [D, P]
            ),
            el = (0, C.Z)(null, {
              depositAmount: T.toString(),
              veCLEVAmount: en,
              totalveCLEV:
                "number" == typeof $
                  ? o.veTotalSupply
                  : null == $
                  ? void 0
                  : $.toString(),
              poolLiquidity: er,
              lpContract: null == D ? void 0 : D.lpContract
            }),
            es = (0, C.Z)(et.toString(), {
              depositAmount: T.toString(),
              veCLEVAmount: en,
              totalveCLEV:
                "number" == typeof $
                  ? o.veTotalSupply
                  : null == $
                  ? void 0
                  : $.toString(),
              poolLiquidity: er,
              lpContract: null == D ? void 0 : D.lpContract
            });
          (0, r.useEffect)(
            function () {
              B({
                minVeCRV: (0, S.DB)(et) ? (0, S.FR)(et) : 0,
                boost: (0, S.DB)(el) ? parseFloat(el).toFixed(2) : 0,
                maxBoostPossible: (0, S.DB)(es) ? parseFloat(es).toFixed(2) : 0
              });
            },
            [el, es]
          );
          var ei = (0, r.useState)(!1),
            eo = ei[0],
            ea = ei[1],
            eu =
              ((e = (0, i.Z)(
                u().mark(function e() {
                  return u().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          ea(!0),
                            setTimeout(function () {
                              ea(!1);
                            }, 3e3);
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return e.apply(this, arguments);
              }),
            ec = D
              ? (0, S.F6)(null == D ? void 0 : D.totalSupply).shiftedBy(
                  18 - (null == D ? void 0 : D.stakeTokenDecimals)
                )
              : 0,
            ed = (0, m.jsx)(b.Z, {
              visible:
                (null == D
                  ? void 0
                  : null === (t = D.userInfo) || void 0 === t
                  ? void 0
                  : t.userDeposited) != void 0,
              children: (0, m.jsxs)("span", {
                className: "text-sm",
                children: [
                  "Not include existing deposit (",
                  (0, m.jsx)("a", {
                    href: void 0,
                    children: (0, S.FR)(
                      null == D
                        ? void 0
                        : null === (n = D.userInfo) || void 0 === n
                        ? void 0
                        : n.userDeposited
                    )
                  }),
                  ")"
                ]
              })
            });
          return (0, m.jsxs)("div", {
            className:
              "calculator-dashboard p-8 xl:p-16 w-full xl:w-1/2 relative",
            children: [
              (0, m.jsxs)("div", {
                children: [
                  (0, m.jsx)(h, {
                    title: "Simulate boost in which gauge",
                    titleQuestion: !0,
                    placeholder: "Select a gauge",
                    options: F,
                    onChange: w,
                    value: x
                  }),
                  (0, m.jsx)(y.Z, {
                    label: "Deposit Token Amount",
                    defaultValue:
                      null !==
                        (l =
                          null == D
                            ? void 0
                            : null === (s = D.userInfo) || void 0 === s
                            ? void 0
                            : s.userDeposited) && void 0 !== l
                        ? l
                        : 0,
                    labelDes: ed,
                    BottomElement: function () {
                      var e, t;
                      return (0, m.jsx)(b.Z, {
                        visible:
                          (0, S.DB)(
                            null == D
                              ? void 0
                              : null === (e = D.lpPrice) || void 0 === e
                              ? void 0
                              : e.usdInwei
                          ) && (0, S.DB)(T),
                        children: (0, m.jsxs)("p", {
                          className: "input-money-info",
                          children: [
                            "≈",
                            " ",
                            (0, S.FR)(
                              (0, S.F6)(
                                null == D
                                  ? void 0
                                  : null === (t = D.lpPrice) || void 0 === t
                                  ? void 0
                                  : t.usdInwei
                              ).multipliedBy(T),
                              !0
                            )
                          ]
                        })
                      });
                    },
                    onChange: function (e) {
                      return A(e);
                    },
                    hidePercent: !0,
                    hideMax: !0
                  }),
                  (0, m.jsx)(y.Z, {
                    label: "Pool Liquidity",
                    defaultValue: (0, S.F6)(ec).toString(),
                    onChange: L,
                    BottomElement: function () {
                      var e, t;
                      return (0, m.jsx)(b.Z, {
                        visible:
                          (0, S.DB)(
                            null == D
                              ? void 0
                              : null === (e = D.lpPrice) || void 0 === e
                              ? void 0
                              : e.usdInwei
                          ) && (0, S.DB)(P),
                        children: (0, m.jsxs)("p", {
                          className: "input-money-info",
                          children: [
                            "≈",
                            " ",
                            (0, S.FR)(
                              (0, S.F6)(
                                null == D
                                  ? void 0
                                  : null === (t = D.lpPrice) || void 0 === t
                                  ? void 0
                                  : t.usdInwei
                              ).multipliedBy(P),
                              !0
                            )
                          ]
                        })
                      });
                    },
                    hidePercent: !0,
                    hideMax: !0
                  })
                ]
              }),
              (0, m.jsx)("div", {
                className: "flex justify-center gap-5 my-8",
                children: Z.map(function (e) {
                  return (0, m.jsx)(
                    c.Z,
                    {
                      onClick: function () {
                        G(0), q(e);
                      },
                      theme: M !== e && "grey",
                      children: e
                    },
                    e
                  );
                })
              }),
              (0, m.jsxs)("div", {
                children: [
                  (0, m.jsx)(y.Z, {
                    label: "My ".concat(M),
                    onChange: G,
                    defaultValue: W,
                    hidePercent: !0,
                    hideMax: !0
                  }),
                  (0, m.jsx)(b.Z, {
                    visible: "CLEV" === M,
                    children: (0, m.jsx)(h, {
                      title: "Lock for",
                      hint: "You will get: ".concat((0, S.FR)(z), " veCLEV"),
                      options: k,
                      onChange: U,
                      value: X
                    })
                  }),
                  (0, m.jsx)(y.Z, {
                    label: "Total veCLEV",
                    defaultValue: o.veTotalSupply,
                    onChange: ee,
                    hidePercent: !0,
                    hideMax: !0
                  })
                ]
              }),
              (0, m.jsx)("div", {
                className: "text-center mt-32",
                children: (0, m.jsx)(c.Z, {
                  loading: eo,
                  onClick: eu,
                  children: "Calculate"
                })
              })
            ]
          });
        };
      function V(e) {
        var t = e.title,
          n = e.value;
        return (0, m.jsxs)("div", {
          className: "flex items-center justify-between py-1.5",
          children: [
            (0, m.jsx)("div", { children: t }),
            n && (0, m.jsx)("div", { className: "color-blue", children: n })
          ]
        });
      }
      var P = function () {
          var e = N().calcInfo;
          return (0, m.jsx)("div", {
            className:
              "calculator-result p-8 xl:p-16 w-full xl:w-1/2 flex flex-col justify-between",
            children: (0, m.jsxs)("div", {
              children: [
                (0, m.jsx)("div", {
                  className: "title text-3xl mb-8 font-semibold",
                  children: "Calculation Results"
                }),
                (0, m.jsx)(V, {
                  title: "Boost:",
                  value: "".concat(e.boost, "x")
                }),
                (0, m.jsx)(V, {
                  title: "Max boost possible:",
                  value: "".concat(e.maxBoostPossible, "x")
                }),
                (0, m.jsx)(V, {
                  title: "Min veCLEV for max boost:",
                  value: "".concat(e.minVeCRV, " veCLEV")
                })
              ]
            })
          });
        },
        L = n(35697),
        D = n.n(L),
        I = n(25688),
        T = function () {
          var e = (0, r.useState)({
              minVeCRV: 0,
              boost: 1,
              maxBoostPossible: 1
            }),
            t = e[0],
            n = e[1],
            l = (0, r.useMemo)(
              function () {
                return { calcInfo: t, setCalcInfo: n };
              },
              [t, n]
            );
          return (0, m.jsx)(w.Provider, {
            value: l,
            children: (0, m.jsx)("div", {
              className: D().vaultPage,
              children: (0, m.jsxs)("div", {
                className: "container",
                children: [
                  (0, m.jsx)(I.Z, {
                    title: "Boost Calculator",
                    subtitle:
                      "Vote locking CLEV gives you voting power and boosts your CLEV farming yields up to 2.5X."
                  }),
                  (0, m.jsxs)("div", {
                    className: "flex gap-8 flex-col xl:flex-row",
                    children: [(0, m.jsx)(B, {}), (0, m.jsx)(P, {})]
                  }),
                  "\xb7"
                ]
              })
            })
          });
        };
      function A() {
        return (0, m.jsxs)(r.Fragment, {
          children: [
            (0, m.jsx)(s(), {
              children: (0, m.jsx)("title", {
                children:
                  "Canny | curve, Convex | High performance - Calculator"
              })
            }),
            (0, m.jsx)(T, {})
          ]
        });
      }
    },
    10286: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/calculator",
        function () {
          return n(52489);
        }
      ]);
    },
    11836: function (e) {
      e.exports = {
        banner: "styles_banner__Atjfj",
        title: "styles_title__rN6Dh",
        subtitle: "styles_subtitle__P4Sol"
      };
    },
    63653: function (e) {
      e.exports = {
        inputWrapper: "styles_inputWrapper__kylm6",
        inputTop: "styles_inputTop__sBl_I",
        percents: "styles_percents__1s6Xc",
        percent: "styles_percent__Nl5Zz",
        active: "styles_active__EBOrS"
      };
    },
    15258: function (e) {
      e.exports = {
        selectWrapper: "styles_selectWrapper__TINz9",
        selectTop: "styles_selectTop__0uwHB",
        selectBox: "styles_selectBox__Dvya5",
        select: "styles_select__EAUKy",
        options: "styles_options__1ypT5",
        visible: "styles_visible__cGBxO",
        option: "styles_option__TnVDD",
        selectBottom: "styles_selectBottom__miQRk"
      };
    },
    35697: function (e) {
      e.exports = {
        analytics: "styles_analytics__zZ_1C",
        item: "styles_item__5YYx_",
        title: "styles_title__s28eQ",
        value: "styles_value__yNMTO",
        itemInner: "styles_itemInner__Hwttp",
        banner: "styles_banner__mBui4",
        logo: "styles_logo__gWXp3",
        img: "styles_img__Frk8w",
        logoText1: "styles_logoText1__wpG2y",
        logoText2: "styles_logoText2__0gLYb"
      };
    },
    9008: function (e, t, n) {
      e.exports = n(11597);
    },
    17e3: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return f;
        }
      });
      var r = n(32161),
        l = n(52924),
        s = n(67294),
        i = n(464),
        o = n(30081),
        a = n(91784),
        u = n(85945),
        c = n(37122),
        d = n(13588),
        p = n(38381);
      function f(e, t, n) {
        let f = (0, r._v)(e, t, n);
        return (function (e, t) {
          let n = (0, u.NL)({ context: e.context }),
            r = (0, c.S)(),
            l = (0, a._)(),
            f = n.defaultQueryOptions(e);
          (f._optimisticResults = r ? "isRestoring" : "optimistic"),
            f.onError && (f.onError = o.V.batchCalls(f.onError)),
            f.onSuccess && (f.onSuccess = o.V.batchCalls(f.onSuccess)),
            f.onSettled && (f.onSettled = o.V.batchCalls(f.onSettled)),
            (0, p.Fb)(f),
            (0, d.pf)(f, l),
            (0, d.JN)(l);
          let [v] = s.useState(() => new t(n, f)),
            m = v.getOptimisticResult(f);
          if (
            ((0, i.$)(
              s.useCallback(
                (e) => (r ? () => void 0 : v.subscribe(o.V.batchCalls(e))),
                [v, r]
              ),
              () => v.getCurrentResult(),
              () => v.getCurrentResult()
            ),
            s.useEffect(() => {
              v.setOptions(f, { listeners: !1 });
            }, [f, v]),
            (0, p.SB)(f, m, r))
          )
            throw (0, p.j8)(f, v, l);
          if (
            (0, d.KJ)({
              result: m,
              errorResetBoundary: l,
              useErrorBoundary: f.useErrorBoundary,
              query: v.getCurrentQuery()
            })
          )
            throw m.error;
          return f.notifyOnChangeProps ? m : v.trackResult(m);
        })(f, l.z);
      }
    },
    4730: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          l = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              l = {},
              s = Object.keys(e);
            for (r = 0; r < s.length; r++)
              (n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (r = 0; r < s.length; r++)
            (n = s[r]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (l[n] = e[n]);
        }
        return l;
      }
      n.d(t, {
        Z: function () {
          return r;
        }
      });
    }
  },
  function (e) {
    e.O(0, [8795, 2616, 9774, 2888, 179], function () {
      return e((e.s = 10286));
    }),
      (_N_E = e.O());
  }
]);
