(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1781],
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
        a = n.n(r),
        s = n(11836),
        o = n.n(s),
        c = n(85893);
      function i(e) {
        var t = e.title,
          n = e.subtitle,
          r = e.icon;
        return (0, c.jsxs)("div", {
          className: a()(o().banner, "flex items-center gap-4"),
          children: [
            r &&
              (0, c.jsx)("div", {
                className: " bg-gray-300 p-3 rounded-full",
                children: (0, c.jsx)("img", { src: r, className: "w-8 h-8" })
              }),
            (0, c.jsxs)("div", {
              children: [
                t && (0, c.jsx)("div", { className: o().title, children: t }),
                n &&
                  (0, c.jsxs)("div", {
                    className: o().subtitle,
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
          return x;
        },
        k: function () {
          return v;
        }
      });
      var r = n(4730),
        a = n(67294),
        s = n(94184),
        o = n.n(s),
        c = n(48282),
        i = n(63653),
        l = n.n(i),
        u = n(3612),
        d = n(85893),
        f = [
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
      function v(e) {
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
      function x(e) {
        var t,
          n = e.defaultValue,
          s = e.balance,
          i = e.label,
          x = e.labelDes,
          p = e.token,
          m = e.vaultWithdrawFee,
          h = e.feeName,
          b = e.decimals,
          k = e.available,
          y = e.BottomElement,
          j = (e.calculatorLink, e.depositFor),
          g = e.placeholder,
          w = e.withdrawFee,
          F = e.onChange,
          C = void 0 === F ? function () {} : F,
          _ = e.hidePercent,
          O = e.ExtraButton,
          L = e.hideMax,
          Z = e.reset,
          N = (0, r.Z)(e, f),
          P = (0, a.useState)(0),
          E = P[0],
          V = P[1],
          T = (0, a.useState)(""),
          A = T[0],
          S = T[1];
        (0, a.useEffect)(
          function () {
            S(
              (0, u.F6)(n)
                .shiftedBy(-(null != b ? b : 18))
                .toFixed(3)
            ),
              C(n, 100);
          },
          [n]
        ),
          (0, a.useState)(
            function () {
              V(0);
            },
            [A]
          ),
          (0, a.useEffect)(
            function () {
              V(0), S(""), C(0);
            },
            [Z]
          );
        var R = function (e) {
          if ((V(e), s && !(0, u.F6)(s).isZero() && !(0, u.F6)(s).isNaN())) {
            var t = (0, u.F6)(s).times(e).div(100);
            S((0, u.FR)(t, !1, null != b ? b : 18)), C(t, e);
          }
          if (k && !(0, u.F6)(k).isZero() && !(0, u.F6)(k).isNaN()) {
            var n = (0, u.F6)(k).times(e).div(100);
            S((0, u.FR)(n, !1, null != b ? b : 18)), C(n, e);
          }
        };
        return (0, d.jsxs)("div", {
          className: l().inputWrapper,
          style: null !== (t = N.style) && void 0 !== t ? t : {},
          children: [
            (0, d.jsxs)("div", {
              className: l().inputTop,
              children: [
                !_ &&
                  !(0, u.F6)(s).isNaN() &&
                  (0, d.jsx)(v, {
                    name: "Balance",
                    value: ""
                      .concat((0, u.FR)(s, !1, null != b ? b : 18), " ")
                      .concat(p),
                    extraClass: "color-blue"
                  }),
                !_ &&
                  !(0, u.F6)(k).isNaN() &&
                  (0, d.jsx)(v, {
                    name: "Available",
                    value: ""
                      .concat((0, u.FR)(k, !1, null != b ? b : 18), " ")
                      .concat(p)
                  }),
                !_ &&
                  (0, d.jsx)("div", {
                    className: l().percents,
                    children: [25, 50, 75, 100].map(function (e) {
                      return (0, d.jsxs)(
                        "div",
                        {
                          className: o()(l().percent, e === E && l().active),
                          onClick: function () {
                            return R(e);
                          },
                          children: [e, "%"]
                        },
                        e
                      );
                    })
                  })
              ]
            }),
            i &&
              (0, d.jsxs)("div", {
                className:
                  " form-label text-xl flex items-center justify-between",
                children: [
                  (0, d.jsx)("span", {
                    dangerouslySetInnerHTML: { __html: i }
                  }),
                  x
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
                          "0" === A &&
                            -1 === t.indexOf(".") &&
                            (t = t.slice(1)),
                          S(t),
                          C((0, u.F6)(t || 0).shiftedBy(null != b ? b : 18), E);
                      },
                      value: A,
                      placeholder: g
                    }),
                    (0, d.jsx)(c.Z, {
                      visible: _ && !L,
                      children: (0, d.jsx)("a", {
                        className:
                          "color-blue underline absolute right-3 top-2",
                        onClick: function () {
                          return R(100);
                        },
                        children: "MAX"
                      })
                    })
                  ]
                }),
                O && (0, d.jsx)(O, {})
              ]
            }),
            (0, d.jsxs)("div", {
              className: l().inputBottom,
              children: [
                y && (0, d.jsx)(y, {}),
                m &&
                  (0, d.jsx)(v, {
                    name: "".concat(h || "Vault Withdraw", " Fee"),
                    value: m || "-"
                  }),
                w &&
                  (0, d.jsx)(v, {
                    name: "".concat(h || "Withdraw", " Fee"),
                    value: w || "-"
                  }),
                j && (0, d.jsx)(v, { name: "Deposit for", value: j || "-" })
              ]
            })
          ]
        });
      }
    },
    4604: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return s;
        }
      });
      var r = n(67294),
        a = n(85893);
      function s(e) {
        var t = e.onChange,
          n = e.options,
          s = e.headerItemClass,
          o = (0, r.useState)(n[0]),
          c = o[0],
          i = o[1];
        return (
          (0, r.useEffect)(
            function () {
              null == t || t(c);
            },
            [c]
          ),
          (0, a.jsx)("div", {
            className: "ala-tabs",
            children: n.map(function (e) {
              return (0, a.jsx)(
                "div",
                {
                  onClick: function () {
                    return i(e);
                  },
                  className: "header-item text-lg "
                    .concat(s, " ")
                    .concat(e == c ? "active" : ""),
                  children: e
                },
                e
              );
            })
          })
        );
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
        a = n(4730),
        s = n(50029),
        o = n(87794),
        c = n.n(o),
        i = n(67294),
        l = n(94594),
        u = n(66774),
        d = n(43275),
        f = n(48282),
        v = n(19029),
        x = n(1381),
        p = n(3612),
        m = n(85893),
        h = ["loading", "onClick", "children", "switchStyle", "size"];
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
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
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
      t.Z = function (e) {
        var t,
          n,
          r = (0, d.Z)(),
          o = r.currentAccount,
          b = (r.web3, r.isAllReady),
          y = e.allowance,
          j = e.approveAmount,
          g = void 0 === j ? 0 : j,
          w = e.tokenContract,
          F = e.approveAddress,
          C = e.notVisibleMaxSwitch,
          _ = void 0 !== C && C,
          O = (0, i.useState)(!1),
          L = O[0],
          Z = O[1],
          N = (0, i.useState)(!1),
          P = N[0],
          E = N[1],
          V = y > 0,
          T = (0, i.useMemo)(
            function () {
              return (
                !!g &&
                !!y &&
                (0, p.F6)(y).isGreaterThan(0) &&
                (0, p.F6)(g).isGreaterThan(y)
              );
            },
            [g, y]
          ),
          A = (0, i.useMemo)(
            function () {
              return !V || T;
            },
            [V, T]
          ),
          S =
            ((t = (0, s.Z)(
              c().mark(function e() {
                var t, n;
                return c().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (b) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        return (
                          (t = w.methods.approve(F, "0")),
                          (e.next = 5),
                          t.estimateGas({ from: o })
                        );
                      case 5:
                        return (
                          (n = parseInt(1.2 * e.sent, 10) || 0),
                          (e.next = 9),
                          (0, x.Z)(
                            function () {
                              return t.send({ from: o, gas: n });
                            },
                            { key: "Approve", action: "Reset Approve" }
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
          R = (0, i.useCallback)(
            ((n = (0, s.Z)(
              c().mark(function e(t) {
                var n, r, a, s;
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (b) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if ((E(!0), !T)) {
                            e.next = 13;
                            break;
                          }
                          return (e.prev = 4), (e.next = 7), S();
                        case 7:
                          e.next = 13;
                          break;
                        case 9:
                          return (
                            (e.prev = 9),
                            (e.t0 = e.catch(4)),
                            E(!1),
                            e.abrupt("return")
                          );
                        case 13:
                          return (
                            (n = v.Z.uint256Max),
                            (r = L ? n : (0, p.F6)(g).toFixed(0, 1)),
                            (e.prev = 15),
                            (a = w.methods.approve(F, r)),
                            (e.next = 19),
                            a.estimateGas({ from: o })
                          );
                        case 19:
                          return (
                            (s = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 23),
                            (0, x.Z)(
                              function () {
                                return a.send({ from: o, gas: s });
                              },
                              { key: "earn", action: "approv" },
                              function () {
                                E(!1), null == t || t();
                              }
                            )
                          );
                        case 23:
                          e.next = 29;
                          break;
                        case 25:
                          (e.prev = 25),
                            (e.t1 = e.catch(15)),
                            E(!1),
                            (0, x.c)("error_earn_approve", e.t1);
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
            [o, T, g, L, w, F]
          );
        return {
          BtnWapper: function (e) {
            var t = e.loading,
              n = e.onClick,
              r = e.children,
              s = e.switchStyle,
              o = e.size,
              c = (0, a.Z)(e, h),
              d = (0, i.useCallback)(
                function () {
                  if (A) {
                    R(c.disabled ? null : n);
                    return;
                  }
                  n();
                },
                [A, R, n, c]
              );
            return (0, i.useMemo)(
              function () {
                return (0, m.jsxs)(m.Fragment, {
                  children: [
                    (0, m.jsx)(f.Z, {
                      visible: A && !_,
                      children: (0, m.jsxs)("div", {
                        className:
                          "flex items-center justify-center gap-2 mb-3",
                        style: null != s ? s : {},
                        children: [
                          (0, m.jsx)("div", { children: "Unlimited Approve" }),
                          (0, m.jsx)(l.Z, { checked: L, onChange: Z })
                        ]
                      })
                    }),
                    (0, m.jsx)(
                      u.Z,
                      k(
                        k(
                          {
                            size: o,
                            minWidth: "280px",
                            loading: t || P,
                            onClick: d
                          },
                          c
                        ),
                        {},
                        { children: A ? "Approve & ".concat(r) : r }
                      )
                    )
                  ]
                });
              },
              [L, Z, A, _, P, d]
            );
          }
        };
      };
    },
    47431: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return ei;
          }
        });
      var r = n(67294),
        a = n(9008),
        s = n.n(a),
        o = n(94184),
        c = n.n(o),
        i = n(50029),
        l = n(87794),
        u = n.n(l),
        d = n(31121),
        f = n(81836),
        v = n(41664),
        x = n.n(v),
        p = n(30381),
        m = n.n(p),
        h = n(43275),
        b = n(1381),
        k = n(66774),
        y = n(4604),
        j = n(10088),
        g = n(19029),
        w = n(48282),
        F = n(98268),
        C = n(3612),
        _ = function (e) {
          var t = 604800 * Math.floor(e.clone().unix() / 604800);
          return m()(1e3 * t)
            .startOf("day")
            .add(8, "hours");
        },
        O = function (e) {
          var t,
            n,
            a,
            s = (0, h.Z)(),
            o = s.currentAccount,
            c = s.current,
            l = s.isAllReady,
            d = e.veContract,
            f = e.refresh,
            v = e.lockAmount,
            x = e.userLocked,
            p = e.lockTo,
            k = e.status,
            y = e.actions,
            j = e.startTime,
            g = (0, r.useState)(!1),
            w = g[0],
            F = g[1],
            O = (0, r.useMemo)(
              function () {
                if ((0, C.F6)(null != v ? v : 0).isLessThan(0) || !p) return 0;
                var e = p.unix(),
                  t = e == _(m()(j.clone().add(4, "years"))).unix(),
                  n = (0, C.F6)(
                    604800 * Math.floor((t ? e - 1 : e) / 604800) - c.unix()
                  ).div(126144e3),
                  r = (0, C.F6)(v).times(n);
                return Number.isNaN(r)
                  ? "-"
                  : (0, C.F6)(r).isLessThan(0)
                  ? 0
                  : (0, C.F6)(r);
              },
              [v, j, c, p]
            ),
            L = (0, r.useMemo)(
              function () {
                var e,
                  t =
                    null !== (e = null == x ? void 0 : x.end) && void 0 !== e
                      ? e
                      : 0;
                if (!v || (0, C.F6)(v).isLessThan(0)) return 0;
                var n = ((t - c.unix()) / 126144e3) * v;
                return Number.isNaN(n)
                  ? "-"
                  : (0, C.F6)(n).isLessThan(0)
                  ? 0
                  : (0, C.F6)(n).isZero()
                  ? 0
                  : (0, C.F6)(n);
              },
              [v, c, null == x ? void 0 : x.end]
            ),
            Z = (0, r.useMemo)(
              function () {
                if (!p) return 0;
                var e,
                  t,
                  n =
                    null !== (e = null == x ? void 0 : x.amount) && void 0 !== e
                      ? e
                      : 0;
                if (
                  !n ||
                  (0, C.F6)(
                    null !== (t = null == x ? void 0 : x.amount) && void 0 !== t
                      ? t
                      : 0
                  ).isLessThan(0)
                )
                  return 0;
                var r = p.unix();
                return (
                  ((604800 *
                    Math.floor(
                      (r ==
                      _(
                        m()(
                          m()
                            .unix(null == x ? void 0 : x.end)
                            .clone()
                            .add(4, "years")
                        )
                      ).unix()
                        ? r - 1
                        : r) / 604800
                    ) -
                    c.unix()) /
                    126144e3) *
                  n
                );
              },
              [p, c, null == x ? void 0 : x.amount, null == x ? void 0 : x.end]
            ),
            N = (0, r.useMemo)(
              function () {
                return (
                  Math.abs(
                    null != x && x.end
                      ? m()().diff(m()(1e3 * x.end).startOf("day"), "days", !0)
                      : 0
                  ) + 7
                );
              },
              [null == x ? void 0 : x.end]
            ),
            P = (0, r.useMemo)(
              function () {
                return [
                  { lable: "4 years", disabledDate: N > 1457, value: 1460 },
                  { lable: "1 year", disabledDate: N > 365, value: 365 },
                  { lable: "6 months", disabledDate: N > 180, value: 180 },
                  { lable: "3 months", disabledDate: N > 90, value: 90 },
                  { lable: "1 month", disabledDate: N > 30, value: 30 },
                  { lable: "1 week", disabledDate: N > 7, value: 7 }
                ];
              },
              [N]
            );
          return (
            (0, r.useEffect)(
              function () {
                var e = c.clone().startOf("day").add(8, "hours");
                if ("no-lock" == k)
                  _(c).isSameOrBefore(e) &&
                    (y.setLockTo(_(c.clone().add(1, "week"))),
                    y.setStartTime(_(c.clone().add(1, "week"))));
                else if ("ing" == k && null != x && x.end) {
                  var t = m().unix(null == x ? void 0 : x.end);
                  y.setLockTo(_(t.clone().add(1, "week"))),
                    y.setStartTime(_(t.clone().add(1, "week")));
                }
              },
              [k, null == x ? void 0 : x.end]
            ),
            {
              createLockLoading: w,
              vePower: O,
              extendVePower: Z,
              lockMoreVePower: L,
              handleCreateLock:
                ((t = (0, i.Z)(
                  u().mark(function e(t) {
                    var n, r, a, s;
                    return u().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (l) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                (n = v.toFixed(0, 1)),
                                F(!0),
                                (r =
                                  p.unix() ==
                                  _(m()(j.clone().add(4, "years"))).unix()),
                                (e.prev = 5),
                                (a = d.methods.create_lock(
                                  n.toString(),
                                  r ? p.unix() - 1 : p.unix()
                                )),
                                (e.next = 9),
                                a.estimateGas({ from: o })
                              );
                            case 9:
                              return (
                                (s = parseInt(1.2 * e.sent, 10) || 0),
                                (e.next = 13),
                                (0, b.Z)(
                                  function () {
                                    return a.send({ from: o, gas: s });
                                  },
                                  { key: "ve", action: "create_lock" }
                                )
                              );
                            case 13:
                              F(!1), f(), null == t || t(), (e.next = 22);
                              break;
                            case 18:
                              (e.prev = 18),
                                (e.t0 = e.catch(5)),
                                F(!1),
                                (0, b.c)("error_ve_create_lock", e.t0);
                            case 22:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[5, 18]]
                    );
                  })
                )),
                function (e) {
                  return t.apply(this, arguments);
                }),
              handleIncreaseTime:
                ((n = (0, i.Z)(
                  u().mark(function e() {
                    var t, n, r;
                    return u().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (l) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                F(!0),
                                (t =
                                  p.unix() ==
                                  _(
                                    m()(
                                      m()
                                        .unix(null == x ? void 0 : x.end)
                                        .clone()
                                        .add(4, "years")
                                    )
                                  ).unix()),
                                (e.prev = 4),
                                (n = d.methods.increase_unlock_time(
                                  t ? p.unix() - 1 : p.unix()
                                )),
                                (e.next = 8),
                                n.estimateGas({ from: o })
                              );
                            case 8:
                              return (
                                (r = parseInt(1.2 * e.sent, 10) || 0),
                                (e.next = 12),
                                (0, b.Z)(
                                  function () {
                                    return n.send({ from: o, gas: r });
                                  },
                                  { key: "ve_increase_time", action: "lock" }
                                )
                              );
                            case 12:
                              f(), F(!1), (e.next = 20);
                              break;
                            case 16:
                              (e.prev = 16),
                                (e.t0 = e.catch(4)),
                                F(!1),
                                (0, b.c)("error_ve_increase_time", e.t0);
                            case 20:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[4, 16]]
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
              handleIncreaseAmount:
                ((a = (0, i.Z)(
                  u().mark(function e(t) {
                    var n, r, a;
                    return u().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (l) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                (n = v.toFixed(0, 1)),
                                F(!0),
                                (e.prev = 4),
                                (r = d.methods.increase_amount(n.toString())),
                                (e.next = 8),
                                r.estimateGas({ from: o })
                              );
                            case 8:
                              return (
                                (a = parseInt(1.2 * e.sent, 10) || 0),
                                (e.next = 12),
                                (0, b.Z)(
                                  function () {
                                    return r.send({ from: o, gas: a });
                                  },
                                  { key: "ctr", action: "lock" }
                                )
                              );
                            case 12:
                              f(), F(!1), null == t || t(), (e.next = 21);
                              break;
                            case 17:
                              (e.prev = 17),
                                (e.t0 = e.catch(4)),
                                F(!1),
                                (0, b.c)("error_ctr_lock", e.t0);
                            case 21:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[4, 17]]
                    );
                  })
                )),
                function (e) {
                  return a.apply(this, arguments);
                }),
              shortDate: P,
              extendDays: N
            }
          );
        },
        L = n(25035),
        Z = n(85893);
      function N(e) {
        var t = e.title,
          n = e.value;
        return (0, Z.jsxs)("div", {
          className: "flex items-center justify-between py-1.5",
          children: [
            (0, Z.jsx)("div", { children: t }),
            n && (0, Z.jsx)("div", { className: "color-blue", children: n })
          ]
        });
      }
      function P(e) {
        var t = e.status;
        return (0, Z.jsxs)("div", {
          className: " form-label text-xl mb-3 flex items-center gap-3 mt-4",
          children: [
            (0, Z.jsx)("div", {
              children: "no-lock" == t ? "Duration" : "Extend To"
            }),
            (0, Z.jsx)(f.Z, {
              overlayClassName: "lock-to-tooltip",
              title: (0, Z.jsxs)("div", {
                children: [
                  "Locking CLEV will receive veCLEV. ",
                  (0, Z.jsx)("br", {}),
                  "The longer the lock time, the more veCLEV received.",
                  (0, Z.jsx)("br", {}),
                  "1 CLEV locked for 4 years = 1 veCLEV",
                  (0, Z.jsx)("br", {}),
                  "1 CLEV locked for 3 years = 0.75 veCLEV",
                  (0, Z.jsx)("br", {}),
                  "1 CLEV locked for 2 years = 0.5 veCLEV",
                  (0, Z.jsx)("br", {}),
                  "1 CLEV locked for 1 year = 0.25 veCLEV"
                ]
              }),
              children: (0, Z.jsx)(L.Z, {})
            })
          ]
        });
      }
      var E = n(59499),
        V = n(2093),
        T = n(48060),
        A = n(75349);
      function S(e, t) {
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
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                (0, E.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var D = [
          {
            address: g.Z.contracts.aladdinVeFeeForCVX,
            icon: "/assets/tokens/cvx.png",
            symbol: "CVX"
          },
          {
            address: g.Z.contracts.aladdinVeFeeForFRAX,
            icon: "/assets/tokens/fraxusd.png",
            symbol: "FRAX"
          }
        ],
        B = function (e) {
          var t,
            n = e.userData,
            a = e.userHasLocked,
            s = e.userLockExpired,
            o = (0, h.Z)(),
            c = o.currentAccount,
            l = o.isAllReady,
            d = o.blockNumber,
            f = (0, r.useState)(D),
            v = f[0],
            x = f[1],
            p = (0, r.useState)(!1),
            m = p[0],
            y = p[1],
            j = (0, A.cq)().getContract,
            F = (0, A.cq)(
              g.Z.contracts.aladdinRewardClaimHelper,
              T.Z.RewardClaimHelperABI
            ).contract;
          (0, V.Z)(
            (0, i.Z)(
              u().mark(function e() {
                var t;
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!l) {
                            e.next = 10;
                            break;
                          }
                          return (
                            (e.prev = 1),
                            (e.next = 4),
                            Promise.all(
                              D.map(function (e) {
                                return j(e.address, T.Z.AlaFeeDistributor)
                                  .methods.claim(c)
                                  .call();
                              })
                            )
                          );
                        case 4:
                          (t = e.sent),
                            x(
                              D.map(function (e, n) {
                                return R(
                                  R({}, e),
                                  {},
                                  {
                                    amount: t[n],
                                    contract: j(
                                      e.address,
                                      T.Z.AlaFeeDistributor
                                    )
                                  }
                                );
                              })
                            ),
                            (e.next = 10);
                          break;
                        case 8:
                          (e.prev = 8), (e.t0 = e.catch(1));
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 8]]
                );
              })
            ),
            [d, c, j]
          );
          var _ =
              v.filter(function (e) {
                return (0, C.DB)(e.amount);
              }).length > 0,
            O =
              ((t = (0, i.Z)(
                u().mark(function e() {
                  var t, n;
                  return u().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (l) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (
                              (e.prev = 2),
                              y(!0),
                              console.log(
                                D.map(function (e) {
                                  return e.address;
                                })
                              ),
                              (t = F.methods.claimVeRewards(
                                c,
                                D.map(function (e) {
                                  return e.address;
                                })
                              )),
                              (e.next = 8),
                              t.estimateGas({ from: c })
                            );
                          case 8:
                            return (
                              (n = parseInt(1.2 * e.sent, 10) || 0),
                              (e.next = 12),
                              (0, b.Z)(
                                function () {
                                  return t.send({ from: c, gas: n });
                                },
                                { key: "ve_claim", action: "claim" }
                              )
                            );
                          case 12:
                            y(!1), (e.next = 20);
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(2)),
                              console.log(e.t0),
                              y(!1),
                              (0, b.c)("error_ve_claim", e.t0);
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 15]]
                  );
                })
              )),
              function () {
                return t.apply(this, arguments);
              });
          return (0, Z.jsxs)("div", {
            className: "user-info p-8 xl:p-16",
            children: [
              (0, Z.jsx)("div", {
                className: "title  text-3xl mb-8 font-semibold",
                children: "My veCLEV"
              }),
              (0, Z.jsx)(w.Z, {
                visible: !a,
                children: (0, Z.jsxs)("div", {
                  className: "text-lg",
                  children: [
                    (0, Z.jsx)("div", {
                      className: "mb-2",
                      children:
                        "You don't have any locked CLEV, lock CLEV to get boost and rewards."
                    }),
                    (0, Z.jsx)("a", {
                      href: "https://curve.fi/#/ethereum/pools/factory-crypto-140/swap",
                      target: "_blank",
                      className: "underline color-blue",
                      rel: "noreferrer",
                      children: "Buy CLEV >"
                    })
                  ]
                })
              }),
              (0, Z.jsxs)(w.Z, {
                visible: a,
                children: [
                  (0, Z.jsx)("div", {
                    className: "mb-6",
                    children: n.map(function (e) {
                      return (0,
                      Z.jsx)(w.Z, { visible: "Claimable" !== e.title || s, children: (0, Z.jsx)(N, { title: e.title, value: e.value }) }, e.title);
                    })
                  }),
                  (0, Z.jsx)(w.Z, {
                    visible: !0,
                    children: (0, Z.jsxs)("div", {
                      className: "mb-14",
                      children: [
                        (0, Z.jsx)("div", {
                          className: "lock-rewards-title mb-3 text-xl",
                          children: "Lock Rewards"
                        }),
                        (0, Z.jsx)("div", {
                          className: "flex justify-between",
                          children: v.map(function (e) {
                            return (0,
                            Z.jsx)("div", { children: (0, Z.jsxs)("div", { className: "flex items-center gap-2", children: [(0, Z.jsx)("img", { src: e.icon, className: "w-6" }), (0, Z.jsxs)("div", { className: "lock-rewards-title", children: [(0, C.FR)(e.amount), " ", e.symbol] })] }) }, e.symbol);
                          })
                        })
                      ]
                    })
                  }),
                  (0, Z.jsx)("div", {
                    className: "text-center",
                    children: (0, Z.jsx)(k.Z, {
                      disabled: !_,
                      loading: m,
                      onClick: O,
                      children: "Claim ALL"
                    })
                  })
                ]
              })
            ]
          });
        },
        W = function (e) {
          var t,
            n = e.data,
            a = n.status,
            s = n.contractInfo,
            o = n.userData,
            c = n.contracts.veContract,
            l = e.actions,
            v = (0, h.Z)(),
            p = v.isAllReady,
            L = v.currentAccount,
            N = v.current,
            E = (0, r.useState)(0),
            V = (E[0], E[1]),
            T = (0, r.useState)(),
            S = T[0],
            R = T[1],
            D = (0, r.useState)(0),
            W = D[0],
            X = D[1],
            M = (0, r.useState)(m()().add(1, "day")),
            I = M[0],
            H = M[1],
            Y = (0, r.useState)(m()()),
            G = Y[0],
            U = Y[1],
            q = (0, r.useState)(!1),
            z = q[0],
            J = q[1],
            K = (0, r.useState)(!1),
            Q = K[0],
            $ = K[1],
            ee = (0, r.useState)(0),
            et = ee[0],
            en = ee[1],
            er = (0, A.L8)(
              g.Z.contracts.aladdinCLEV,
              g.Z.contracts.aladdinVeCLEV
            ),
            ea = er.tokenContract,
            es = er.tokenInfo,
            eo = (0, j.Z)({
              approveAmount: W,
              allowance: es.allowance,
              tokenContract: ea,
              approveAddress: g.Z.contracts.aladdinVeCLEV
            }).BtnWapper;
          (0, r.useEffect)(
            function () {
              X("");
            },
            [et]
          );
          var ec = function () {
            en(function (e) {
              return e + 1;
            });
          };
          (0, r.useEffect)(
            function () {
              "no-lock" === a && (J(!1), $(!1)),
                "ing" === a && (J(!0), $(!1)),
                "expired" === a && (J(!0), $(!0));
            },
            [a]
          );
          var ei = O({
              veContract: c,
              actions: { setLockTo: H, setStartTime: U },
              refresh: function () {
                V(function (e) {
                  return e + 1;
                }),
                  null == l ||
                    l.setRefreshTrigger(function (e) {
                      return e + 1;
                    });
              },
              lockAmount: W,
              lockTo: I,
              userLocked: s.userLocked,
              status: a,
              startTime: G
            }),
            el = ei.createLockLoading,
            eu = ei.vePower,
            ed = ei.extendVePower,
            ef = ei.lockMoreVePower,
            ev = ei.shortDate,
            ex = ei.extendDays,
            ep = ei.handleCreateLock,
            em = ei.handleIncreaseTime,
            eh = ei.handleIncreaseAmount,
            eb =
              (0, C.F6)(W).isGreaterThan(0) &&
              (0, C.F6)(W).isLessThanOrEqualTo(es.balance),
            ek = function (e) {
              var t = e.value;
              e.disabledDate ||
                ("no-lock" === a
                  ? H(_(m()(G.clone().add(t, "day"))))
                  : "ing" === a && H(_(m()(N.clone().add(t, "day")))));
            },
            ey =
              ((t = (0, i.Z)(
                u().mark(function e() {
                  var t, n;
                  return u().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (p) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (
                              (e.prev = 2),
                              (t = c.methods.withdraw()),
                              (e.next = 6),
                              t.estimateGas({ from: L })
                            );
                          case 6:
                            return (
                              (n = parseInt(1.2 * e.sent, 10) || 0),
                              (e.next = 10),
                              (0, b.Z)(
                                function () {
                                  return t.send({ from: L, gas: n });
                                },
                                { key: "ve_claim", action: "claim" }
                              )
                            );
                          case 10:
                            V(function (e) {
                              return e + 1;
                            }),
                              null == l ||
                                l.setRefreshTrigger(function (e) {
                                  return e + 1;
                                }),
                              (e.next = 17);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(2)),
                              (0, b.c)("error_ve_claim", e.t0);
                          case 17:
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
              });
          return (0, Z.jsxs)("div", {
            className: "locker-dashboard w-full xl:w-1/2 flex flex-col gap-8",
            children: [
              (0, Z.jsx)(B, {
                userData: o,
                userHasLocked: z,
                userLockExpired: Q
              }),
              (0, Z.jsxs)("div", {
                className:
                  "lock-container locker-form  p-8 xl:p-16 relative ".concat(
                    z ? "" : "user-not-locked"
                  ),
                children: [
                  (0, Z.jsx)(w.Z, {
                    visible: z,
                    children: (0, Z.jsx)(y.T, {
                      onChange: function (e) {
                        return R(e);
                      },
                      options: ["Lock", "Extend"],
                      headerItemClass: "text-3xl font-semibold"
                    })
                  }),
                  (0, Z.jsx)(w.Z, {
                    visible: !z,
                    children: (0, Z.jsx)("div", {
                      className: "title text-3xl mb-8 font-semibold",
                      children: "Lock CLEV"
                    })
                  }),
                  (0, Z.jsx)(x(), {
                    className:
                      "absolute right-16 top-16 color-blue underline text-xl",
                    href: "/calculator",
                    children: "Calculator"
                  }),
                  (0, Z.jsx)(w.Z, {
                    visible: Q,
                    children: (0, Z.jsx)("div", {
                      className: "text-center mt-32",
                      children: (0, Z.jsx)(k.Z, {
                        onClick: ey,
                        children: "Claim"
                      })
                    })
                  }),
                  (0, Z.jsxs)(w.Z, {
                    visible: !Q,
                    children: [
                      (0, Z.jsxs)(w.Z, {
                        visible: "Lock" === S || "no-lock" == a,
                        children: [
                          (0, Z.jsx)(F.Z, {
                            label: "Amount",
                            value: W,
                            labelDes: (0, Z.jsxs)("span", {
                              children: [
                                "Available:",
                                " ",
                                (0, Z.jsxs)("span", {
                                  className: "color-blue",
                                  children: [(0, C.FR)(es.balance), " CLEV"]
                                })
                              ]
                            }),
                            onChange: X,
                            reset: et,
                            hidePercent: !0,
                            balance: es.balance,
                            onSetMax: function () {
                              return X(es.balance);
                            },
                            BottomElement: function () {
                              return (0, Z.jsx)("div", {
                                style: { position: "relative", top: 0 },
                                children: (0, Z.jsxs)(w.Z, {
                                  visible: "ing" === a,
                                  children: [
                                    "Your starting voting power will be:",
                                    " ",
                                    (0, Z.jsxs)("span", {
                                      className: "color-blue",
                                      children: [(0, C.FR)(ef), " veCLEV"]
                                    })
                                  ]
                                })
                              });
                            }
                          }),
                          (0, Z.jsx)(w.Z, {
                            visible: z,
                            children: (0, Z.jsx)("div", {
                              className: "flex justify-center mt-5",
                              children: (0, Z.jsx)("div", {
                                children: (0, Z.jsx)(eo, {
                                  disabled: (0, C.F6)(W).isLessThanOrEqualTo(0),
                                  onClick: function () {
                                    eh(ec);
                                  },
                                  children: "Lock More"
                                })
                              })
                            })
                          })
                        ]
                      }),
                      (0, Z.jsxs)(w.Z, {
                        visible: "Extend" === S || "no-lock" == a,
                        children: [
                          (0, Z.jsx)(P, { status: a }),
                          (0, Z.jsx)("div", {
                            className: "flex gap-4 items-center ",
                            children: (0, Z.jsx)(d.Z, {
                              value: I,
                              disabledDate: function (e) {
                                if ("no-lock" === a)
                                  return (
                                    e &&
                                    !e.isBetween(
                                      G.clone().subtract(1, "day"),
                                      _(m()(G.clone().add(1460, "day")))
                                    )
                                  );
                                if ("ing" === a) {
                                  var t;
                                  return (
                                    null !== (t = s.userLocked) &&
                                    void 0 !== t &&
                                    !!t.end &&
                                    e &&
                                    !e.isBetween(
                                      G,
                                      _(e.clone().add(1460, "day"))
                                    )
                                  );
                                }
                              },
                              onChange: H,
                              className: "datePicker",
                              showTime: !1,
                              showToday: !1,
                              renderExtraFooter: function () {
                                return (0, Z.jsx)("div", {
                                  className: "flex justify-between flex-wrap",
                                  children: ev.map(function (e) {
                                    return (0, Z.jsx)(
                                      "div",
                                      {
                                        onClick: function () {
                                          return ek(e);
                                        },
                                        className:
                                          "text-center w-2/6 underline ".concat(
                                            e.disabledDate
                                              ? "text-gray-400"
                                              : "text-blue-900",
                                            " cursor-pointer"
                                          ),
                                        children: e.lable
                                      },
                                      e.value
                                    );
                                  })
                                });
                              },
                              dropdownClassName: "datePickerDropdown"
                            })
                          }),
                          (0, Z.jsxs)("div", {
                            className: "text-base leading-normal mt-2",
                            children: [
                              (0, Z.jsxs)("div", {
                                children: [
                                  "Your starting voting power will be:",
                                  " ",
                                  (0, Z.jsxs)("span", {
                                    className: "color-blue",
                                    children: [
                                      (0, C.FR)("no-lock" === a ? eu : ed),
                                      " veCLEV"
                                    ]
                                  })
                                ]
                              }),
                              (0, Z.jsx)(w.Z, {
                                visible: !z,
                                children: (0, Z.jsx)("div", {
                                  children:
                                    "You can only claim your CLEV after lock expiration."
                                })
                              }),
                              (0, Z.jsxs)("div", {
                                children: [
                                  "After creating your lock, you will need to",
                                  " ",
                                  (0, Z.jsx)(f.Z, {
                                    title:
                                      "If your boost level hasn't changed after locking veCLEV, you will need to conduct one transaction (deposit, withdraw or claim) from the gauge that you are providing liquidity to update your boost.",
                                    children: (0, Z.jsx)("span", {
                                      className: "underline",
                                      children: "apply your boost"
                                    })
                                  }),
                                  "."
                                ]
                              })
                            ]
                          }),
                          (0, Z.jsx)(w.Z, {
                            visible: z,
                            children: (0, Z.jsx)("div", {
                              className: "flex justify-center mt-4",
                              children: (0, Z.jsx)(k.Z, {
                                disabled: ex > 1460,
                                onClick: em,
                                children: "Extend"
                              })
                            })
                          })
                        ]
                      })
                    ]
                  }),
                  (0, Z.jsx)(w.Z, {
                    visible: "no-lock" === a,
                    children: (0, Z.jsx)("div", {
                      className: "text-center mt-10",
                      children: (0, Z.jsx)(eo, {
                        loading: el,
                        disabled: !eb,
                        onClick: function () {
                          return ep(ec);
                        },
                        children: "Create Lock"
                      })
                    })
                  })
                ]
              })
            ]
          });
        },
        X = n(75708),
        M = n.n(X),
        I = n(95384),
        H = n.n(I),
        Y = n(91622),
        G = function () {
          var e,
            t = (0, h.Z)(),
            n = t.currentAccount,
            a = t.blockTime,
            s = (0, A.aH)().contract,
            o = (0, Y.H)(),
            c = (0, r.useState)([]),
            l = c[0],
            d = c[1],
            f =
              ((e = (0, i.Z)(
                u().mark(function e() {
                  var t, n, r, c, i, l;
                  return u().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          for (
                            t = a,
                              n = m()(1e3 * t)
                                .add(4, "years")
                                .unix(),
                              r = [],
                              c = 0;
                            t < n;

                          )
                            r.push(s.methods.totalSupply(t)),
                              (t += 86400 * Math.pow(c, 4)),
                              c++;
                          return (e.next = 7), o.apply(void 0, r);
                        case 7:
                          (i = e.sent),
                            (l = r.map(function (e) {
                              return e.arguments[0];
                            })),
                            d(
                              i.map(function (e, t) {
                                return [
                                  1e3 * l[t],
                                  parseFloat(
                                    (0, C.F6)(e).shiftedBy(-18).toFixed(2)
                                  )
                                ];
                              })
                            );
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return e.apply(this, arguments);
              });
          return (
            (0, r.useEffect)(
              function () {
                s && f();
              },
              [n, o, a, s]
            ),
            l
          );
        },
        U = n(86920);
      function q(e, t) {
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
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? q(Object(n), !0).forEach(function (t) {
                (0, E.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : q(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var J = function () {
          var e = (0, U.Z)().theme,
            t = G();
          return (0, Z.jsx)("div", {
            children: (0, Z.jsx)(M(), {
              constructorType: "stockChart",
              highcharts: H(),
              options: z(
                z(
                  {},
                  {
                    name: "AAPL",
                    chart: {
                      panning: !0,
                      zoomType: "x",
                      panKey: "ctrl",
                      type: "line"
                    },
                    title: { text: "veCLEV Voting Power" },
                    xAxis: {
                      labels: {
                        style: { color: "default" != e ? "#fff" : "#000" }
                      },
                      dateTimeLabelFormats: {
                        second: "%Y-%m-%d<br/>%H:%M:%S",
                        minute: "%Y-%m-%d<br/>%H:%M",
                        hour: "%Y-%m-%d<br/>%H:%M",
                        day: "%Y<br/>%m-%d",
                        week: "%Y<br/>%m-%d",
                        month: "%Y-%m",
                        year: "%Y"
                      }
                    },
                    yAxis: {
                      type: "linear",
                      opposite: !1,
                      title: { text: "Amount locked" }
                    },
                    backgroundColor: "default" === e ? "#fff" : "#000",
                    tooltip: { valueDecimals: 2 },
                    rangeSelector: { selected: 5 }
                  }
                ),
                { series: [{ name: "Voting Power", data: t }] }
              ),
              callback: function () {}
            })
          });
        },
        K = n(82964),
        Q = n.n(K),
        $ = n(25688),
        ee = n(16835),
        et = {
          veTotalSupply: 0,
          veLockedClev: 0,
          userLocked: {},
          userVeShare: 0,
          userVeRewards: 0,
          clevCirculationSupply: 1
        },
        en = function () {
          var e,
            t = (0, h.Z)(),
            n = t._currentAccount,
            a = t.current;
          t.isAllReady;
          var s = (0, Y.h)(),
            o = (0, A.aH)(),
            c = o.contract,
            l = o.address,
            d = (0, A.DU)().contract,
            f = (0, A.NP)(),
            v = f.feeContractForCVX,
            x = f.feeContractForFrax,
            p = f.cvxFeeDistributor,
            b = f.fraxFeeDistributor,
            k = (0, A.Ts)(),
            y = k.contract,
            j = k.address,
            w = (0, A.cq)(g.Z.tokens.cvx, T.Z.erc20ABI).contract,
            F = (0, A.cq)(g.Z.tokens.frax, T.Z.erc20ABI).contract,
            _ = (0, r.useState)(et),
            O = _[0],
            L = _[1],
            Z =
              ((e = (0, i.Z)(
                u().mark(function e() {
                  var t,
                    r,
                    o,
                    i,
                    f,
                    h,
                    k,
                    _,
                    O,
                    Z,
                    N,
                    P,
                    E,
                    V,
                    T,
                    A,
                    S,
                    R,
                    D,
                    B,
                    W,
                    X,
                    M,
                    I,
                    H,
                    Y,
                    G,
                    U,
                    q,
                    z,
                    J,
                    K,
                    Q,
                    $,
                    et,
                    en,
                    er,
                    ea;
                  return u().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (t = 604800 * Math.floor(a.unix() / 604800)),
                              (r =
                                604800 * Math.floor(a.unix() / 604800) -
                                604800),
                              (o =
                                604800 * Math.floor(a.unix() / 604800) -
                                1209600),
                              (f = (i = c.methods).totalSupply),
                              (h = i.balanceOf),
                              (_ = (k = d.methods).balanceOf),
                              (O = k.totalSupply),
                              (Z = [
                                f(),
                                h(n),
                                _(l),
                                O(),
                                _(g.Z.contracts.aladdinCLEVVest),
                                _(g.Z.contracts.clevHoderTreasuyry),
                                v.methods.tokens_per_week(t),
                                v.methods.tokens_per_week(r),
                                v.methods.tokens_per_week(o),
                                x.methods.tokens_per_week(t),
                                x.methods.tokens_per_week(r),
                                x.methods.tokens_per_week(o),
                                v.methods.token_last_balance(),
                                x.methods.token_last_balance(),
                                y.methods.rewards(0),
                                y.methods.rewards(1),
                                w.methods.balanceOf(p),
                                w.methods.balanceOf(j),
                                F.methods.balanceOf(b),
                                F.methods.balanceOf(j)
                              ]),
                              (e.next = 9),
                              c.methods.locked(n).call()
                            );
                          case 9:
                            return (
                              (P = (N = e.sent).amount),
                              (E = N.end),
                              (e.next = 14),
                              s(Z)
                            );
                          case 14:
                            (V = e.sent),
                              (A = (T = (0, ee.Z)(V, 20))[0]),
                              (S = T[1]),
                              (R = T[2]),
                              (D = T[3]),
                              (B = T[4]),
                              (W = T[5]),
                              (X = T[6]),
                              (M = T[7]),
                              (I = T[8]),
                              (H = T[9]),
                              (Y = T[10]),
                              (G = T[11]),
                              (U = T[12]),
                              (q = T[13]),
                              (z = T[14]),
                              (J = T[15]),
                              (K = T[16]),
                              (Q = T[17]),
                              ($ = T[18]),
                              (et = T[19]),
                              (en = (0, C.F6)(D).minus(B).minus(W)),
                              (er =
                                1 -
                                z.gaugePercentage / 1e9 -
                                z.treasuryPercentage / 1e9),
                              (ea =
                                1 -
                                J.gaugePercentage / 1e9 -
                                J.treasuryPercentage / 1e9),
                              L({
                                veTotalSupply: A,
                                veLockedCLEV: R,
                                clevCirculationSupply: en,
                                userVeShare: S,
                                userLocked: {
                                  amount: P,
                                  end: m()(1e3 * E).unix()
                                },
                                tokensThisWeekForCVX: X,
                                tokensPerWeekForCVX: M,
                                tokensPerTwoWeeksForCVX: I,
                                tokensThisWeekForFRAX: H,
                                tokensPerWeekForFRAX: Y,
                                tokensPerTwoWeeksForFRAX: G,
                                cvxFeeTokenLastBalance: U,
                                fraxFeeTokenLastBalance: q,
                                cvxRewardRate: er,
                                fraxRewardRate: ea,
                                feeDistributorCVXBalance: K,
                                platformFeeDistributorCVXBalance: Q,
                                feeDistributorFRAXBalance: $,
                                platformFeeDistributorFRAXBalance: et
                              }),
                              (e.next = 44);
                            break;
                          case 42:
                            (e.prev = 42), (e.t0 = e.catch(0));
                          case 44:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 42]]
                  );
                })
              )),
              function () {
                return e.apply(this, arguments);
              });
          return (
            (0, r.useEffect)(
              function () {
                w && F ? Z() : L(et);
              },
              [n, a, w, F]
            ),
            { info: O, contracts: { veContract: c, clevContract: d } }
          );
        };
      function er(e, t) {
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
      function ea(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? er(Object(n), !0).forEach(function (t) {
                (0, E.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : er(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var es = function (e, t, n, r) {
          var a = e.tokensPerWeekForCVX,
            s = e.tokensPerWeekForFRAX,
            o = e.tokensThisWeekForCVX,
            c = e.tokensThisWeekForFRAX,
            i = e.cvxFeeTokenLastBalance,
            l = e.fraxFeeTokenLastBalance,
            u = e.cvxRewardRate,
            d = e.fraxRewardRate,
            f = e.feeDistributorCVXBalance,
            v = e.platformFeeDistributorCVXBalance,
            x = e.feeDistributorFRAXBalance,
            p = e.platformFeeDistributorFRAXBalance;
          return {
            cvxWeekAmount: (0, C.F6)(o)
              .plus(f)
              .minus(i)
              .plus((0, C.F6)(v).times(u)),
            fraxWeekAmount: (0, C.F6)(c)
              .plus(x)
              .minus(l)
              .plus((0, C.F6)(p).times(d)),
            lastCvxWeekAmount: a,
            lastFraxWeekAmount: s,
            cvxRewardRate: u,
            fraxRewardRate: d,
            cvxPrice: n,
            fraxPrice: r,
            untilTime: m()(_(t) + 604799e3).format("lll"),
            startTime: m()(_(t)).format("lll")
          };
        },
        eo = function () {
          var e,
            t,
            n,
            a,
            s,
            o,
            c = en(),
            i = c.info,
            l = c.contracts,
            u = (0, h.Z)().current,
            d = (0, U.Z)().tokenPrice,
            f =
              null !==
                (e =
                  null == d
                    ? void 0
                    : null === (t = d["convex-finance"]) || void 0 === t
                    ? void 0
                    : t.usd) && void 0 !== e
                ? e
                : 0,
            v =
              null !==
                (n =
                  null == d
                    ? void 0
                    : null === (a = d.frax) || void 0 === a
                    ? void 0
                    : a.usd) && void 0 !== n
                ? n
                : 0,
            x =
              null !==
                (s =
                  null == d
                    ? void 0
                    : null === (o = d.CLEV) || void 0 === o
                    ? void 0
                    : o.usd) && void 0 !== s
                ? s
                : 0,
            p = (0, r.useState)({
              dashboard: {
                info: [
                  { title: "Locking APR", value: "0" },
                  {
                    title: "CLEV Locked",
                    value: "0",
                    desc: "20% of CLEV Circulating Supply"
                  },
                  {
                    title: "veCLEV",
                    value: "0",
                    desc: "2.7 Years Average Lock"
                  }
                ],
                chart: []
              },
              totalInfo: {},
              status: "no-lock",
              userData: [
                { title: "Your Locked", value: "0" },
                { title: "Locked Until", value: "0" },
                { title: "Claimable", value: "0" }
              ],
              contracts: l,
              contractInfo: i
            }),
            b = p[0],
            k = p[1];
          return (
            (0, r.useEffect)(
              function () {
                var e = i.veTotalSupply,
                  t = i.veLockedCLEV,
                  n = i.userVeShare,
                  r = i.clevCirculationSupply,
                  a = i.userLocked,
                  s = i.tokensPerWeekForCVX,
                  o = i.tokensPerWeekForFRAX,
                  c = i.tokensPerTwoWeeksForCVX,
                  d = i.tokensPerTwoWeeksForFRAX,
                  p = (0, C.F6)(s).plus(c),
                  h = (0, C.F6)(o).plus(d),
                  b = (0, C.F6)(p)
                    .multipliedBy(26)
                    .multipliedBy(f)
                    .plus((0, C.F6)(h).multipliedBy(26).multipliedBy(v))
                    .div((0, C.F6)(e).multipliedBy(x))
                    .multipliedBy(100),
                  y = es(i, u, f, v),
                  j = (0, C.F6)(t).div(r).multipliedBy(100).toFixed(2),
                  g = function () {
                    var n = (0, C.F6)(t).isZero()
                      ? 0
                      : (0, C.F6)(4).multipliedBy(e).div(t);
                    return n
                      ? n.isGreaterThan(1)
                        ? "".concat(n.toFixed(2), " Years")
                        : n.isGreaterThan((0, C.F6)(1).div(12))
                        ? "".concat(n.multipliedBy(12).toFixed(2), " Months")
                        : n.isZero() || n.isNaN()
                        ? "-"
                        : "".concat(n.multipliedBy(365).toFixed(2), " Days")
                      : "-";
                  },
                  w = a.amount,
                  F = a.end,
                  _ = "";
                t &&
                  ((_ = "no-lock"),
                  0 != F &&
                    void 0 != F &&
                    ((_ = "ing"), m()(1e3 * F).isBefore(u) && (_ = "expired"))),
                  k(function (r) {
                    return ea(
                      ea({}, r),
                      {},
                      {
                        totalInfo: y,
                        dashboard: {
                          info: [
                            {
                              title: "Locking APR",
                              value: b ? "".concat(b.toFixed(4), "%") : "-"
                            },
                            {
                              title: "CLEV Locked",
                              value: (0, C.FR)(t),
                              desc: "".concat(
                                (0, C.DB)(j) ? "".concat(j, "%") : "-",
                                " of CLEV Circulating Supply"
                              )
                            },
                            {
                              title: "veCLEV",
                              value: (0, C.FR)(e),
                              desc: "".concat(g(), " Average Lock")
                            }
                          ],
                          chart: []
                        },
                        contracts: l,
                        status: _,
                        contractInfo: i,
                        userData: [
                          {
                            title: "Your Locked",
                            value: "".concat((0, C.FR)(w), " CLEV")
                          },
                          {
                            title: "Your Voting Power",
                            value: "".concat((0, C.FR)(n), " veCLEV")
                          },
                          {
                            title: "Locked Until",
                            value:
                              0 != F && void 0 != F
                                ? m()(1e3 * F).format("lll")
                                : "-"
                          }
                        ]
                      }
                    );
                  });
              },
              [i, f, v, x, u]
            ),
            b
          );
        },
        ec = function () {
          var e,
            t = (0, r.useState)(0),
            n = (t[0], t[1]),
            a = eo(),
            s = a.totalInfo;
          return (0, Z.jsx)("div", {
            className: Q().vaultPage,
            children: (0, Z.jsxs)("div", {
              className: "container",
              children: [
                (0, Z.jsx)($.Z, { title: "CLEV Locker" }),
                (0, Z.jsx)("div", {
                  className: c()(
                    Q().analytics,
                    "flex gap-2 mb-8 justify-center"
                  ),
                  children: a.dashboard.info.map(function (e) {
                    return (0,
                    Z.jsx)("div", { className: Q().item, children: (0, Z.jsxs)("div", { className: Q().itemInner, children: [(0, Z.jsx)("div", { className: Q().title, children: e.title }), (0, Z.jsx)("div", { className: Q().value, children: e.value }), (0, Z.jsx)("div", { className: Q().desc, children: e.desc })] }) }, e.title);
                  })
                }),
                (0, Z.jsxs)("div", {
                  className: "flex gap-8 flex-col xl:flex-row",
                  children: [
                    (0, Z.jsxs)("div", {
                      className:
                        "locker-dashboard dashboard locker-dashboard-chart h-full p-8 xl:p-16 w-full xl:w-1/2  flex flex-col",
                      children: [
                        (0, Z.jsx)("div", {
                          className: "title text-3xl mb-8 font-semibold",
                          children: "Total veCLEV Revenue"
                        }),
                        (0, Z.jsx)(N, {
                          title: "Cumulative This Week(CVX):",
                          value: ""
                            .concat(
                              (0, C.FR)(null == s ? void 0 : s.cvxWeekAmount),
                              " CVX / "
                            )
                            .concat(
                              (0, C.FR)(
                                (0, C.F6)(
                                  null == s ? void 0 : s.cvxWeekAmount
                                ).multipliedBy(null == s ? void 0 : s.cvxPrice),
                                !0
                              )
                            )
                        }),
                        (0, Z.jsx)(N, {
                          title: "Cumulative This Week(FRAX):",
                          value: ""
                            .concat(
                              (0, C.FR)(null == s ? void 0 : s.fraxWeekAmount),
                              " FRAX  / "
                            )
                            .concat(
                              (0, C.FR)(
                                (0, C.F6)(
                                  null == s ? void 0 : s.fraxWeekAmount
                                ).multipliedBy(
                                  null == s ? void 0 : s.fraxPrice
                                ),
                                !0
                              )
                            )
                        }),
                        (0, Z.jsx)(N, {
                          title: "Previous Week(CVX):",
                          value: ""
                            .concat(
                              (0, C.FR)(
                                null == s ? void 0 : s.lastCvxWeekAmount
                              ),
                              " CVX / "
                            )
                            .concat(
                              (0, C.FR)(
                                (0, C.F6)(
                                  null == s ? void 0 : s.lastCvxWeekAmount
                                ).multipliedBy(null == s ? void 0 : s.cvxPrice),
                                !0
                              )
                            )
                        }),
                        (0, Z.jsx)(N, {
                          title: "Previous Week(FRAX):",
                          value: ""
                            .concat(
                              (0, C.FR)(
                                null == s ? void 0 : s.lastFraxWeekAmount
                              ),
                              " FRAX / "
                            )
                            .concat(
                              (0, C.FR)(
                                (0, C.F6)(
                                  null == s ? void 0 : s.lastFraxWeekAmount
                                ).multipliedBy(
                                  null == s ? void 0 : s.fraxPrice
                                ),
                                !0
                              )
                            )
                        }),
                        (0, Z.jsx)(N, {
                          title: "Accumulate Till:",
                          value: null == s ? void 0 : s.untilTime
                        }),
                        (0, Z.jsx)("div", {
                          className: "title text-3xl mt-8 mb-8 font-semibold",
                          children: "veCLEV Voting Power"
                        }),
                        (0, Z.jsx)(J, {
                          data:
                            null === (e = a.dashboard) || void 0 === e
                              ? void 0
                              : e.chart,
                          contracts: a.contracts
                        })
                      ]
                    }),
                    (0, Z.jsx)(W, {
                      data: a,
                      actions: { setRefreshTrigger: n }
                    })
                  ]
                })
              ]
            })
          });
        };
      function ei() {
        return (0, Z.jsxs)(r.Fragment, {
          children: [
            (0, Z.jsx)(s(), {
              children: (0, Z.jsx)("title", {
                children: "Canny | curve, Convex | High performance - Locker"
              })
            }),
            (0, Z.jsx)(ec, {})
          ]
        });
      }
    },
    1381: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return p;
        },
        c: function () {
          return x;
        }
      });
      var r = n(59499);
      n(67294);
      var a = n(55722),
        s = n(79090),
        o = n(40695),
        c = n(19029),
        i = n(85893);
      function l(e) {
        var t = e.txHash;
        return (0, i.jsxs)("div", {
          children: [
            "Tx Hash is",
            " ",
            (0, i.jsx)("a", {
              target: "_blank",
              rel: "noopener noreferrer",
              href: "".concat(c.Z.explorerUri, "/tx/").concat(t),
              children: t
            })
          ]
        });
      }
      function u(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var f = {
          info: function (e) {
            a.Z.info(
              d(d({}, e), {}, { icon: (0, i.jsx)(s.Z, {}), duration: null })
            );
          },
          success: function (e) {
            a.Z.success(
              d(
                d({}, e),
                {},
                {
                  description: (0, i.jsx)(l, { txHash: e.txHash }),
                  icon: (0, i.jsx)(o.Z, { style: { color: "green" } })
                }
              )
            );
          },
          error: function (e) {
            a.Z.error(
              d(
                d({}, e),
                {},
                {
                  description: "An error occurred: ".concat(
                    e.description.toString()
                  ),
                  icon: (0, i.jsx)(o.Z, { style: { color: "red" } })
                }
              )
            );
          },
          close: function (e) {
            a.Z.destroy(e);
          },
          txnSubmitted: function (e) {
            a.Z.info(
              d(
                d({}, e),
                {},
                {
                  description: (0, i.jsx)(l, { txHash: e.txHash }),
                  icon: (0, i.jsx)(s.Z, { style: { color: "green" } }),
                  duration: null
                }
              )
            );
          }
        },
        v = function (e) {
          return e.toString()[0].toUpperCase() + e.toString().slice(1);
        },
        x = function (e, t) {
          f.error({
            key: e,
            message: "Unexpected Error",
            description: t.message ? t.message.toString() : JSON.stringify(t)
          }),
            setTimeout(function () {
              f.close("error_stake_claim");
            }, 3e3);
        },
        p = function (e, t, n) {
          var r = t.key,
            a = t.action,
            s = "noPayableAction_".concat(r, "_").concat(a);
          return (
            f.info({ key: s, message: "".concat(v(a), "ing") }),
            new Promise(function (t, r) {
              try {
                e()
                  .once("transactionHash", function (e) {
                    console.log("hash", e),
                      f.txnSubmitted({
                        key: s,
                        message: "Transaction Submitted",
                        txHash: e
                      });
                  })
                  .once("receipt", function (e) {
                    f.success({
                      key: s,
                      message: "Successfully ".concat(v(a), "ed"),
                      txHash: e.transactionHash
                    }),
                      setTimeout(function () {
                        f.close(s);
                      }, 3e3),
                      null == n || n(e),
                      t(e);
                  })
                  .once("error", function (e) {
                    f.close(s), r(e);
                  });
              } catch (e) {
                f.close(s), r(e);
              }
            })
          );
        };
    },
    44374: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/locker",
        function () {
          return n(47431);
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
    82964: function (e) {
      e.exports = {
        analytics: "styles_analytics__1Sp69",
        item: "styles_item__sV7bo",
        title: "styles_title__bovsD",
        value: "styles_value__xJN5t",
        itemInner: "styles_itemInner__OgceR",
        desc: "styles_desc__rYFRO",
        banner: "styles_banner__Tx7GU",
        logo: "styles_logo__eAzCh",
        img: "styles_img__l4E6X",
        logoText1: "styles_logoText1__LTAFP",
        logoText2: "styles_logoText2__lTc1Z"
      };
    }
  },
  function (e) {
    e.O(0, [5520, 1335, 1703, 8795, 9774, 2888, 179], function () {
      return e((e.s = 44374));
    }),
      (_N_E = e.O());
  }
]);
