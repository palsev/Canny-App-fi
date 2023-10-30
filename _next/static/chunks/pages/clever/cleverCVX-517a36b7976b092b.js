(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9543],
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
        s = n(11836),
        a = n.n(s),
        o = n(85893);
      function i(e) {
        var t = e.title,
          n = e.subtitle,
          r = e.icon;
        return (0, o.jsxs)("div", {
          className: c()(a().banner, "flex items-center gap-4"),
          children: [
            r &&
              (0, o.jsx)("div", {
                className: " bg-gray-300 p-3 rounded-full",
                children: (0, o.jsx)("img", { src: r, className: "w-8 h-8" })
              }),
            (0, o.jsxs)("div", {
              children: [
                t && (0, o.jsx)("div", { className: a().title, children: t }),
                n &&
                  (0, o.jsxs)("div", {
                    className: a().subtitle,
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
        s = n(50029),
        a = n(87794),
        o = n.n(a),
        i = n(67294),
        l = n(94594),
        u = n(66774),
        d = n(43275),
        f = n(48282),
        p = n(19029),
        m = n(1381),
        x = n(3612),
        h = n(85893),
        v = ["loading", "onClick", "children", "switchStyle", "size"];
      function k(e, t) {
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
            ? k(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
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
          a = r.currentAccount,
          k = (r.web3, r.isAllReady),
          b = e.allowance,
          j = e.approveAmount,
          g = void 0 === j ? 0 : j,
          C = e.tokenContract,
          w = e.approveAddress,
          F = e.notVisibleMaxSwitch,
          _ = void 0 !== F && F,
          Z = (0, i.useState)(!1),
          O = Z[0],
          L = Z[1],
          T = (0, i.useState)(!1),
          N = T[0],
          V = T[1],
          X = b > 0,
          I = (0, i.useMemo)(
            function () {
              return (
                !!g &&
                !!b &&
                (0, x.F6)(b).isGreaterThan(0) &&
                (0, x.F6)(g).isGreaterThan(b)
              );
            },
            [g, b]
          ),
          S = (0, i.useMemo)(
            function () {
              return !X || I;
            },
            [X, I]
          ),
          R =
            ((t = (0, s.Z)(
              o().mark(function e() {
                var t, n;
                return o().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (k) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        return (
                          (t = C.methods.approve(w, "0")),
                          (e.next = 5),
                          t.estimateGas({ from: a })
                        );
                      case 5:
                        return (
                          (n = parseInt(1.2 * e.sent, 10) || 0),
                          (e.next = 9),
                          (0, m.Z)(
                            function () {
                              return t.send({ from: a, gas: n });
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
          A = (0, i.useCallback)(
            ((n = (0, s.Z)(
              o().mark(function e(t) {
                var n, r, c, s;
                return o().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (k) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if ((V(!0), !I)) {
                            e.next = 13;
                            break;
                          }
                          return (e.prev = 4), (e.next = 7), R();
                        case 7:
                          e.next = 13;
                          break;
                        case 9:
                          return (
                            (e.prev = 9),
                            (e.t0 = e.catch(4)),
                            V(!1),
                            e.abrupt("return")
                          );
                        case 13:
                          return (
                            (n = p.Z.uint256Max),
                            (r = O ? n : (0, x.F6)(g).toFixed(0, 1)),
                            (e.prev = 15),
                            (c = C.methods.approve(w, r)),
                            (e.next = 19),
                            c.estimateGas({ from: a })
                          );
                        case 19:
                          return (
                            (s = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 23),
                            (0, m.Z)(
                              function () {
                                return c.send({ from: a, gas: s });
                              },
                              { key: "earn", action: "approv" },
                              function () {
                                V(!1), null == t || t();
                              }
                            )
                          );
                        case 23:
                          e.next = 29;
                          break;
                        case 25:
                          (e.prev = 25),
                            (e.t1 = e.catch(15)),
                            V(!1),
                            (0, m.c)("error_earn_approve", e.t1);
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
            [a, I, g, O, C, w]
          );
        return {
          BtnWapper: function (e) {
            var t = e.loading,
              n = e.onClick,
              r = e.children,
              s = e.switchStyle,
              a = e.size,
              o = (0, c.Z)(e, v),
              d = (0, i.useCallback)(
                function () {
                  if (S) {
                    A(o.disabled ? null : n);
                    return;
                  }
                  n();
                },
                [S, A, n, o]
              );
            return (0, i.useMemo)(
              function () {
                return (0, h.jsxs)(h.Fragment, {
                  children: [
                    (0, h.jsx)(f.Z, {
                      visible: S && !_,
                      children: (0, h.jsxs)("div", {
                        className:
                          "flex items-center justify-center gap-2 mb-3",
                        style: null != s ? s : {},
                        children: [
                          (0, h.jsx)("div", { children: "Unlimited Approve" }),
                          (0, h.jsx)(l.Z, { checked: O, onChange: L })
                        ]
                      })
                    }),
                    (0, h.jsx)(
                      u.Z,
                      y(
                        y(
                          {
                            size: a,
                            minWidth: "280px",
                            loading: t || N,
                            onClick: d
                          },
                          o
                        ),
                        {},
                        { children: S ? "Approve & ".concat(r) : r }
                      )
                    )
                  ]
                });
              },
              [O, L, S, _, N, d]
            );
          }
        };
      };
    },
    60971: function (e, t, n) {
      "use strict";
      n.d(t, {
        J3: function () {
          return k;
        },
        ol: function () {
          return v;
        }
      });
      var r = n(59499),
        c = n(16835),
        s = n(50029),
        a = n(87794),
        o = n.n(a),
        i = n(67294),
        l = n(43275),
        u = n(48060),
        d = n(19029),
        f = n(75349),
        p = n(91622),
        m = n(3612);
      function x(e, t) {
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
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? x(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : x(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var v = function () {
          var e = (0, l.Z)(),
            t = e.blockNumber,
            n = e.isAllReady,
            r = e._currentAccount,
            a = (0, p.H)(),
            m = (0, i.useState)({
              balance: 0,
              allowance: 0,
              vlCVXLockInfo: {},
              baseInfo: {}
            }),
            x = m[0],
            v = m[1],
            k = (0, f.cq)(),
            y = k.getContract,
            b = k.erc20Contract,
            j = (0, i.useMemo)(
              function () {
                return [
                  y(d.Z.tokens.vlCVX, u.Z.VlCVXABI),
                  b(d.Z.tokens.cvx),
                  y(d.Z.contracts.aldCvx, u.Z.AladdinCVXABI)
                ];
              },
              [y]
            ),
            g = j[0],
            C = j[1],
            w = j[2],
            F = w.methods,
            _ = F.balanceOf,
            Z = F.minterInfo,
            O = F.allowance,
            L = (0, i.useCallback)(
              (0, s.Z)(
                o().mark(function e() {
                  var t, n, s, i, l, u, f, p, m, k, y;
                  return o().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = (t = C.methods).balanceOf),
                              (s = t.allowance),
                              (e.prev = 1),
                              (i = [
                                n(r),
                                s(r, d.Z.contracts.lockCvx),
                                _(r),
                                O(r, d.Z.contracts.lockCvx),
                                g.methods.lockedBalances(r)
                              ]),
                              (e.next = 5),
                              a.apply(void 0, i)
                            );
                          case 5:
                            (l = e.sent),
                              (f = (u = (0, c.Z)(l, 5))[0]),
                              (p = u[1]),
                              (m = u[2]),
                              (k = u[3]),
                              (y = u[4]),
                              v(function (e) {
                                return h(h({}, e), {
                                  balance: f,
                                  allowance: p,
                                  aldCVXBalance: m,
                                  aldcvxAllowance: k,
                                  vlCVXLockInfo: y
                                });
                              }),
                              (e.next = 18);
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0);
                          case 18:
                            console.log("cvxInfo--", x);
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
              [r, a, C]
            ),
            T = (0, i.useCallback)(
              (0, s.Z)(
                o().mark(function e() {
                  var t, n, r;
                  return o().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (t = [Z(d.Z.contracts.lockCvx)]),
                              (e.next = 4),
                              a.apply(void 0, t)
                            );
                          case 4:
                            (n = e.sent),
                              (r = (0, c.Z)(n, 1)[0]),
                              v(function (e) {
                                return h(
                                  h({}, e),
                                  {},
                                  { baseInfo: { minterCleverInfo: r } }
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
              [a, Z]
            );
          return (
            (0, i.useEffect)(
              function () {
                n && L();
              },
              [t, L, n]
            ),
            (0, i.useEffect)(
              function () {
                T();
              },
              [t, T]
            ),
            { cvxContract: C, aldCVXContract: w, vlCVXContract: g, cvxInfo: x }
          );
        },
        k = function () {
          var e = (0, l.Z)(),
            t = e.blockNumber,
            n = e._currentAccount,
            r = (0, f.cq)(
              d.Z.contracts.lockCvx,
              u.Z.AladdinCVXLockerABI
            ).contract,
            a = (0, p.H)(),
            x = (0, p.h)(),
            v = (0, i.useState)({
              userInfo: { uLocks: { locks: [], pendingUnlocks: [] } },
              baseInfo: { rRate: 50 }
            }),
            k = v[0],
            y = v[1],
            b = (0, i.useCallback)(
              (0, s.Z)(
                o().mark(function e() {
                  var t, s, i, l, u, d, f, p, x, v, k, b, j, g, C, w;
                  return o().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (s = (t = r.methods).totalLockedGlobal),
                              (i = t.totalPendingUnlockGlobal),
                              (l = t.totalDebtGlobal),
                              (u = t.reserveRate),
                              (d = t.repayFeePercentage),
                              (f = t.pendingUnlocked),
                              (e.prev = 1),
                              (p = [s(), i(), l(), u(), d(), f(n)]),
                              (e.next = 5),
                              a.apply(void 0, p)
                            );
                          case 5:
                            (x = e.sent),
                              (k = (v = (0, c.Z)(x, 6))[0]),
                              (b = v[1]),
                              (j = v[2]),
                              (g = v[3]),
                              (C = v[4]),
                              v[5],
                              (w = (0, m.F6)(k).plus(b).toFixed(0)),
                              y(function (e) {
                                return h(
                                  h({}, e),
                                  {},
                                  {
                                    baseInfo: {
                                      totalLockedCVXInConvex: w,
                                      lockerLocked: k,
                                      totalPendingUnlock: b,
                                      lockerDept: j,
                                      repayFee: (0, m.F6)(C)
                                        .div(1e9)
                                        .toString(),
                                      rRate: (0, m.F6)(g).div(1e9).toString()
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
              [a, r, n]
            ),
            j = (0, i.useCallback)(
              (0, s.Z)(
                o().mark(function e() {
                  var t, s, a, i, l, u, d, f, p, v, k, b, j, g, C, w;
                  return o().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (s = (t = r.methods).getUserInfo),
                              (a = t.getUserLocks),
                              (i = t.reserveRate),
                              (e.prev = 1),
                              (l = [s(n), a(n), i()]),
                              (e.next = 5),
                              x(l)
                            );
                          case 5:
                            (u = e.sent),
                              (f = (d = (0, c.Z)(u, 3))[0]),
                              (p = d[1]),
                              (v = d[2]),
                              (k = f[0]),
                              (b = f[1]),
                              (j = f[2]),
                              (g = f[3]),
                              (C = f[4]),
                              (w = (0, m.F6)(k).minus(g).plus(C).toString()),
                              y(function (e) {
                                return h(
                                  h({}, e),
                                  {},
                                  {
                                    userInfo: {
                                      netAsset: w,
                                      uLocks: p,
                                      totalUnlocked: j,
                                      totalBorrowed: g,
                                      totalPendingUnlocked: b,
                                      myLocked: k,
                                      myEarned: C,
                                      rRate: (0, m.F6)(v).div(1e9).toString()
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
              [x, n, r]
            );
          return (
            (0, i.useEffect)(
              function () {
                b(), j();
              },
              [t, j, b, n]
            ),
            { cvxLockerContract: r, lockInfo: k }
          );
        };
    },
    31232: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return q;
          }
        });
      var r = n(67294),
        c = n(9008),
        s = n.n(c),
        a = n(59499),
        o = n(94184),
        i = n.n(o),
        l = n(29386),
        u = n(10480),
        d = n(3612),
        f = n(36863),
        p = n(25688),
        m = n(50029),
        x = n(87794),
        h = n.n(x),
        v = n(43275),
        k = n(55722),
        y = n(30381),
        b = n.n(y),
        j = n(72198),
        g = n(66774),
        C = n(19029),
        w = n(1381),
        F = n(10088),
        _ = n(60971),
        Z = n(40702),
        O = n.n(Z),
        L = n(3548),
        T = n(85893);
      function N(e) {
        var t = e.unlockedPendingList,
          n = e.onCancel;
        return (0, T.jsxs)(L.Z, {
          onCancel: n,
          width: "600px",
          children: [
            (0, T.jsx)("div", {
              className: "text-center mb-8 text-2xl font-bold",
              children: "Unlocked Pending"
            }),
            (0, T.jsxs)("table", {
              className: "text-center w-4/5 mx-auto",
              children: [
                (0, T.jsx)("thead", {
                  children: (0, T.jsxs)("tr", {
                    children: [
                      (0, T.jsx)("th", { children: "Amount" }),
                      (0, T.jsx)("th", { children: "Lock end time" })
                    ]
                  })
                }),
                (0, T.jsx)("tbody", {
                  children:
                    t.length > 0 &&
                    t.map(function (e, t) {
                      return (0,
                      T.jsxs)("tr", { children: [(0, T.jsx)("td", { className: "py-2", children: e.amount }), (0, T.jsx)("td", { className: "py-2", children: e.endTime })] }, t);
                    })
                })
              ]
            }),
            0 === t.length &&
              (0, T.jsx)("div", {
                className: "text-2xl text-center mx-auto mt-16",
                children: "No Record"
              })
          ]
        });
      }
      function V(e) {
        var t = e.unlockList,
          n = e.unlocking,
          r = e.isRepay,
          c = e.handleUnlock,
          s = (e.maxUnlock, e.minRepay, e.showRepayModal),
          a = e.onCancel,
          o = e.unlockedLatestTime;
        return (0, T.jsxs)(L.Z, {
          onCancel: a,
          width: "600px",
          children: [
            (0, T.jsx)("div", {
              className: "text-center mb-2 text-2xl font-bold",
              children: "Unlock"
            }),
            o &&
              (0, T.jsxs)("div", {
                className: "mb-4 text-center",
                children: ["Unlock at the latest: ", o]
              }),
            (0, T.jsxs)("table", {
              className: "text-center w-4/5 mx-auto",
              children: [
                (0, T.jsx)("thead", {
                  children: (0, T.jsxs)("tr", {
                    children: [
                      (0, T.jsx)("th", { children: "Amount" }),
                      (0, T.jsx)("th", { children: "Lock end time" })
                    ]
                  })
                }),
                (0, T.jsx)("tbody", {
                  children:
                    t.length > 0 &&
                    t.map(function (e, t) {
                      return (0,
                      T.jsxs)("tr", { children: [(0, T.jsx)("td", { className: "py-2", children: e.amount }), (0, T.jsx)("td", { className: "py-2", children: e.endTime })] }, t);
                    })
                })
              ]
            }),
            (0, T.jsx)("div", {
              className: "text-center mb-1 mt-20 text-xl",
              children: "There will be no rewards during unlock pending period"
            }),
            0 === t.length &&
              (0, T.jsx)("div", {
                className: "text-2xl text-center mx-auto mt-16",
                children: "No Record"
              }),
            (0, T.jsxs)("div", {
              className: "flex justify-center mt-24 gap-6",
              children: [
                (0, T.jsx)(g.Z, { loading: n, onClick: c, children: "Unlock" }),
                r && (0, T.jsx)(g.Z, { onClick: s, children: "Repay" })
              ]
            })
          ]
        });
      }
      function X(e) {
        var t,
          n = e.onCancel,
          c = e.apr,
          s = e.migrateCVX,
          a = (0, v.Z)(),
          o = a.currentAccount,
          i = a.isAllReady,
          l = (0, r.useState)(!1),
          u = l[0],
          f = l[1],
          p = (0, r.useState)(0),
          x = p[0],
          k = p[1],
          y = (0, _.ol)(x).vlCVXContract,
          b =
            ((t = (0, m.Z)(
              h().mark(function e() {
                var t, r;
                return h().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (i) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            f(!0),
                            (e.prev = 3),
                            (t = y.methods.processExpiredLocks(!1)),
                            (e.next = 7),
                            t.estimateGas({ from: o })
                          );
                        case 7:
                          return (
                            (r = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 11),
                            (0, w.Z)(
                              function () {
                                return t.send({ from: o, gas: r });
                              },
                              { key: "cvx", action: "migrate" }
                            )
                          );
                        case 11:
                          n(),
                            f(!1),
                            k(function (e) {
                              return e + 1;
                            }),
                            (e.next = 20);
                          break;
                        case 16:
                          (e.prev = 16),
                            (e.t0 = e.catch(3)),
                            f(!1),
                            (0, w.c)("error_cvx_migrate", e.t0);
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 16]]
                );
              })
            )),
            function () {
              return t.apply(this, arguments);
            });
        return (0, T.jsxs)(L.Z, {
          onCancel: n,
          width: "600px",
          children: [
            (0, T.jsx)("div", {
              className: "text-center mb-8 text-2xl font-bold",
              children: "Migrate from Convex old locking contract"
            }),
            (0, T.jsxs)("div", {
              className: "mb-6",
              children: [
                "There is ",
                (0, d.FR)(s),
                " CVX locked in Convex old contract."
              ]
            }),
            (0, T.jsxs)("div", {
              children: [
                "Migrate in two steps to get ",
                c,
                "% APR and claim your future yields immediately."
              ]
            }),
            (0, T.jsx)("div", {
              children: "1. Withdraw from Convex old locking contract."
            }),
            (0, T.jsx)("div", { children: "2. Deposit to CLever." }),
            (0, T.jsxs)("div", {
              className: "flex justify-center mt-24 gap-6",
              children: [
                (0, T.jsx)(g.Z, {
                  loading: u,
                  onClick: b,
                  children: "Withdraw Now"
                }),
                (0, T.jsx)(g.Z, { onClick: n, children: "Later" })
              ]
            })
          ]
        });
      }
      function I(e) {
        var t,
          n = e.onCancel,
          c = e.getMinRepay,
          s = e.withdrawAmount,
          a = (0, v.Z)(),
          o = a.currentAccount,
          i = a.web3,
          l = a.isAllReady,
          u = (0, r.useState)(""),
          f = u[0],
          p = u[1],
          x = (0, r.useState)(0),
          k = x[0],
          y = x[1],
          b = (0, r.useState)(!1),
          g = b[0],
          Z = b[1],
          O = (0, r.useState)("canCNX"),
          N = O[0],
          V = O[1],
          X = (0, r.useState)(0),
          I = X[0],
          S = X[1],
          R = (0, r.useState)(0),
          A = R[0],
          P = R[1],
          E = (0, _.ol)(k),
          M = E.cvxInfo,
          U = M.balance,
          D = M.allowance,
          B = M.aldCVXBalance,
          G = M.aldcvxAllowance,
          q = E.cvxContract,
          H = E.aldCVXContract,
          W = (0, _.J3)(k),
          Y = W.lockInfo,
          z = Y.baseInfo.repayFee,
          J = void 0 === z ? 0 : z,
          Q = Y.userInfo.totalBorrowed,
          K = W.cvxLockerContract,
          $ = "CVX" === N ? D : G,
          ee = (0, d.F6)($).isGreaterThan(f)
            ? f
            : i.utils.toWei("1000000000000000000", "ether"),
          et = (0, F.Z)({
            approveAmount: ee,
            allowance: $,
            tokenContract: "CVX" === N ? q : H,
            approveAddress: C.Z.contracts.lockCvx,
            notVisibleMaxSwitch: !0
          }),
          en = et.refreshTrigger,
          er = et.BtnWapper;
        (0, r.useEffect)(
          function () {
            y(function (e) {
              return e + 1;
            });
          },
          [en]
        ),
          (0, r.useEffect)(
            function () {
              y(function (e) {
                return e + 1;
              }),
                p("");
            },
            [A]
          );
        var ec = "CVX" === N ? U : B,
          es = function (e) {
            return (0, d.F6)(e)
              .plus((0, d.F6)(e).multipliedBy(J))
              .isLessThan(ec)
              ? e
              : (0, d.F6)(ec).div((0, d.F6)(1).plus(J));
          },
          ea = es(Q),
          eo =
            (0, d.F6)(f).isGreaterThan(0) &&
            (0, d.F6)(f).isLessThanOrEqualTo(ec) &&
            (0, d.F6)(Q).isGreaterThan(0),
          ei = f && (0, d.F6)(Q).isGreaterThan(f) ? (0, d.F6)(Q).minus(f) : 0,
          el = (0, d.F6)(ec).isLessThan(f)
            ? [
                (0, T.jsx)("span", {
                  className: "text-warn",
                  children: "Maximum is: ".concat((0, d.FR)(ec), " canCNX")
                })
              ]
            : [
                "Available: ".concat((0, d.FR)(ec), " ").concat(N),
                "Debt will be: ".concat(
                  (0, d.Kn)(ei, (0, d.FR)(ei)),
                  " canCNX"
                ),
                "Early Repayment: ".concat(100 * J, "%")
              ],
          eu =
            ((t = (0, m.Z)(
              h().mark(function t() {
                var n, r, c, s, a;
                return h().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (l) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return");
                        case 2:
                          return (
                            (n = (0, d.F6)(f || 0)
                              .toFixed(0, 1)
                              .toString()),
                            (r = "CVX" === N ? n : 0),
                            (c = "CVX" === N ? 0 : n),
                            (t.prev = 5),
                            Z(!0),
                            (s = K.methods.repay(r, c)),
                            (t.next = 10),
                            s.estimateGas({ from: o })
                          );
                        case 10:
                          return (
                            (a = parseInt(1.2 * t.sent, 10) || 0),
                            (t.next = 14),
                            (0, w.Z)(
                              function () {
                                return s.send({ from: o, gas: a });
                              },
                              { key: "locker", action: "repay" }
                            )
                          );
                        case 14:
                          y(function (e) {
                            return e + 1;
                          }),
                            null == e || e.refresh(),
                            P(function (e) {
                              return e + 1;
                            }),
                            Z(!1),
                            (t.next = 24);
                          break;
                        case 20:
                          (t.prev = 20),
                            (t.t0 = t.catch(5)),
                            Z(!1),
                            (0, w.c)("error_locker_repay", t.t0);
                        case 24:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[5, 20]]
                );
              })
            )),
            function () {
              return t.apply(this, arguments);
            }),
          ed = c(s);
        return (0, T.jsxs)(L.Z, {
          onCancel: n,
          width: "600px",
          children: [
            (0, T.jsx)("div", {
              className: "text-center mb-8 text-2xl font-bold",
              children: "Repay"
            }),
            (0, T.jsxs)("p", {
              children: ["Debt: ", (0, d.FR)((0, d.F6)(Q)), " canCNX"]
            }),
            (0, T.jsxs)("p", {
              children: [
                "Min repayment: ",
                (0, T.jsxs)("a", {
                  onClick: function () {
                    S(ed.toString());
                  },
                  children: [(0, d.FR)((0, d.F6)(ed)), " "]
                }),
                "canCNX"
              ]
            }),
            (0, T.jsx)(j.Z, {
              placeholder: "Amount of ".concat(N, " to repay"),
              hidePercent: !0,
              showMax: !0,
              clearTrigger: A,
              maxAmount: ea,
              value: f,
              changeValue: I,
              onChange: function (e) {
                var t = es(e),
                  n = e;
                (0, d.F6)(e).isGreaterThan(t) && (S(t), (n = t)), p(n);
              },
              options: ["canCNX", "CVX"],
              selectedToken: N,
              selectedChange: V,
              moreInfo: el
            }),
            (0, T.jsx)("div", {
              className: "text-center mt-24",
              children: (0, T.jsx)(er, {
                width: "360px",
                loading: g,
                disabled: !eo,
                onClick: eu,
                children: "Repay"
              })
            })
          ]
        });
      }
      var S = function (e) {
          var t,
            n,
            c,
            s,
            a,
            o = e.apr,
            u = (0, v.Z)(),
            f = u.currentAccount,
            p = u.isAllReady,
            x = (0, r.useState)("deposit"),
            y = x[0],
            Z = x[1],
            L = (0, r.useState)(""),
            S = L[0],
            R = L[1],
            A = (0, r.useState)(""),
            P = A[0],
            E = A[1],
            M = (0, r.useState)(0),
            U = M[0],
            D = M[1],
            B = (0, r.useState)(!1),
            G = B[0],
            q = B[1],
            H = (0, r.useState)(!1),
            W = H[0],
            Y = H[1],
            z = (0, r.useState)(!1),
            J = z[0],
            Q = z[1],
            K = (0, r.useState)(!1),
            $ = K[0],
            ee = K[1],
            et = (0, r.useState)(!1),
            en = et[0],
            er = et[1],
            ec = (0, r.useState)(!1),
            es = ec[0],
            ea = ec[1],
            eo = (0, r.useState)(!1),
            ei = eo[0],
            el = eo[1],
            eu = (0, r.useState)(!1),
            ed = eu[0],
            ef = eu[1],
            ep = (0, r.useState)(0),
            em = ep[0],
            ex = ep[1];
          (0, r.useEffect)(
            function () {
              null == e || e.refresh();
            },
            [U]
          );
          var eh = e.userInfo,
            ev = eh.myLocked,
            ek = eh.uLocks,
            ey = eh.totalUnlocked,
            eb = eh.totalPendingUnlocked,
            ej = eh.rRate,
            eg = eh.totalBorrowed,
            eC = e.cvxLockerContract,
            ew = (0, _.ol)(U),
            eF = ew.cvxInfo,
            e_ = eF.balance,
            eZ = eF.allowance,
            eO = eF.vlCVXLockInfo,
            eL = ew.cvxContract,
            eT = (0, F.Z)({
              approveAmount: S,
              allowance: eZ,
              tokenContract: eL,
              approveAddress: C.Z.contracts.lockCvx
            }),
            eN = eT.refreshTrigger,
            eV = eT.BtnWapper;
          (0, r.useEffect)(
            function () {
              D(function (e) {
                return e + 1;
              }),
                R("");
            },
            [eN]
          ),
            (0, r.useEffect)(
              function () {
                D(function (e) {
                  return e + 1;
                }),
                  R("");
              },
              [em]
            );
          var eX = (0, r.useMemo)(
              function () {
                return (0, d.F6)(ev).minus((0, d.F6)(eg).div(ej));
              },
              [ev, eg]
            ),
            eI =
              ((t = (0, m.Z)(
                h().mark(function e() {
                  var t, n, r;
                  return h().wrap(
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
                              ea(!0),
                              (t = (0, d.F6)(S || 0).toFixed(0, 1)),
                              (e.prev = 4),
                              (n = eC.methods.deposit(t.toString())),
                              (e.next = 8),
                              n.estimateGas({ from: f })
                            );
                          case 8:
                            return (
                              (r = parseInt(1.2 * e.sent, 10) || 0),
                              (e.next = 12),
                              (0, w.Z)(
                                function () {
                                  return n.send({ from: f, gas: r });
                                },
                                { key: "cvx", action: "deposit" }
                              )
                            );
                          case 12:
                            ea(!1),
                              D(function (e) {
                                return e + 1;
                              }),
                              ex(function (e) {
                                return e + 1;
                              }),
                              (e.next = 21);
                            break;
                          case 17:
                            (e.prev = 17),
                              (e.t0 = e.catch(4)),
                              ea(!1),
                              (0, w.c)("error_cvx_deposit", e.t0);
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
              function () {
                return t.apply(this, arguments);
              }),
            eS =
              ((n = (0, m.Z)(
                h().mark(function e() {
                  return h().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (0, d.F6)(P).isLessThanOrEqualTo(eX)
                            ? ee(!1)
                            : ee(!0),
                            Y(!0);
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return n.apply(this, arguments);
              }),
            eR =
              ((c = (0, m.Z)(
                h().mark(function e() {
                  return h().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          Y(!1), Q(!0);
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return c.apply(this, arguments);
              }),
            eA =
              ((s = (0, m.Z)(
                h().mark(function e() {
                  var t, n, r;
                  return h().wrap(
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
                            var c;
                            if (
                              (Y(!1),
                              ef(!0),
                              (c = t =
                                (0, d.F6)(P || 0)
                                  .toFixed(0, 1)
                                  .toString()),
                              !(0, d.F6)(ev)
                                .minus(c)
                                .multipliedBy(ej)
                                .multipliedBy(1e9)
                                .lt((0, d.F6)(eg).plus(0).multipliedBy(1e9)))
                            ) {
                              e.next = 9;
                              break;
                            }
                            return (
                              k.Z.error({
                                message:
                                  "Exceeds the max unlockable amount. Please repay first."
                              }),
                              ef(!1),
                              e.abrupt("return")
                            );
                          case 9:
                            return (
                              (e.prev = 9),
                              (n = eC.methods.unlock(t)),
                              (e.next = 13),
                              n.estimateGas({ from: f })
                            );
                          case 13:
                            return (
                              (r = parseInt(1.2 * e.sent, 10) || 0),
                              (e.next = 17),
                              (0, w.Z)(
                                function () {
                                  return n.send({ from: f, gas: r });
                                },
                                { key: "locker", action: "unlock" }
                              )
                            );
                          case 17:
                            E(""),
                              ef(!1),
                              D(function (e) {
                                return e + 1;
                              }),
                              (e.next = 26);
                            break;
                          case 22:
                            (e.prev = 22),
                              (e.t0 = e.catch(9)),
                              ef(!1),
                              (0, w.c)("error_locker_unlock", e.t0);
                          case 26:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[9, 22]]
                  );
                })
              )),
              function () {
                return s.apply(this, arguments);
              }),
            eP =
              ((a = (0, m.Z)(
                h().mark(function e() {
                  var t, n;
                  return h().wrap(
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
                              el(!0),
                              (e.prev = 3),
                              (t = eC.methods.withdrawUnlocked()),
                              (e.next = 7),
                              t.estimateGas({ from: f })
                            );
                          case 7:
                            return (
                              (n = parseInt(1.2 * e.sent, 10) || 0),
                              (e.next = 11),
                              (0, w.Z)(
                                function () {
                                  return t.send({ from: f, gas: n });
                                },
                                { key: "locker", action: "withdraw" }
                              )
                            );
                          case 11:
                            el(!1),
                              D(function (e) {
                                return e + 1;
                              }),
                              (e.next = 19);
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(3)),
                              el(!1),
                              (0, w.c)("error_locker_withdraw", e.t0);
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 15]]
                  );
                })
              )),
              function () {
                return a.apply(this, arguments);
              }),
            eE = (0, d.F6)(S).isGreaterThan(0),
            eM = (0, r.useMemo)(
              function () {
                return (
                  (0, d.DB)(P) &&
                  (0, d.F6)(P).isGreaterThan(0) &&
                  (0, d.F6)(P).isLessThanOrEqualTo(ev)
                );
              },
              [P, ev]
            ),
            eU = (0, d.F6)(ey).isGreaterThan(0),
            eD = (0, r.useMemo)(
              function () {
                var e;
                return (
                  !!(
                    eO &&
                    (0, d.F6)(
                      null !== (e = null == eO ? void 0 : eO.total) &&
                        void 0 !== e
                        ? e
                        : 0
                    ).isGreaterThan(0)
                  ) && (er(!0), !0)
                );
              },
              [null == eO ? void 0 : eO.total]
            ),
            eB = function (e) {
              var t = b()
                .utc(1e3 * (604800 * e))
                .format("YYYY/MM/DD");
              return "".concat(t, " UTC");
            },
            eG = (0, r.useMemo)(
              function () {
                var e = ek.locks,
                  t = ek.pendingUnlocks;
                return {
                  unlockLatest: (e || []).map(function (e) {
                    return {
                      amount: e.pendingUnlock,
                      endTime: eB(e.unlockEpoch)
                    };
                  }),
                  pendingLockLatest: (t || []).map(function (e) {
                    return {
                      amount: "".concat((0, d.FR)(e.pendingUnlock), " CVX"),
                      endTime: eB(e.unlockEpoch)
                    };
                  })
                };
              },
              [ek]
            ),
            eq = (0, r.useMemo)(
              function () {
                var e = eG.unlockLatest.find(function (e, t) {
                  var n =
                    t > 0
                      ? eG.unlockLatest.slice(0, t).reduce(function (e, t) {
                          return (0, d.F6)(t.amount).plus(e);
                        }, (0, d.F6)(0))
                      : (0, d.F6)(0);
                  return (0, d.F6)(P).lte((0, d.F6)(e.amount).plus(n));
                });
                return null == e ? void 0 : e.endTime;
              },
              [P, eG]
            ),
            eH = eG.pendingLockLatest,
            eW = (0, r.useMemo)(
              function () {
                var e = [];
                return (
                  eG.unlockLatest.forEach(function (t, n) {
                    var r =
                      n > 0
                        ? eG.unlockLatest.slice(0, n).reduce(function (e, t) {
                            return (0, d.F6)(t.amount).plus(e);
                          }, (0, d.F6)(0))
                        : (0, d.F6)(0);
                    (0, d.F6)(P).lt((0, d.F6)(t.amount).plus(r))
                      ? (0, d.F6)(P).minus(r).isGreaterThanOrEqualTo(0) &&
                        e.push({
                          amount: "".concat(
                            (0, d.FR)((0, d.F6)(P).minus(r).toString(10)),
                            " CVX"
                          ),
                          endTime: eG.unlockLatest[n].endTime
                        })
                      : e.push({
                          amount: "".concat(
                            (0, d.FR)(eG.unlockLatest[n].amount),
                            " CVX"
                          ),
                          endTime: eG.unlockLatest[n].endTime
                        });
                  }),
                  e
                );
              },
              [P, eG]
            );
          return (0, T.jsxs)("div", {
            className: O().comp,
            children: [
              (0, T.jsxs)("div", {
                children: [
                  (0, T.jsx)("div", {
                    className: O().title,
                    children: "Lock CVX"
                  }),
                  (0, T.jsxs)("div", {
                    className: O().topInfo,
                    children: [
                      (0, T.jsx)("div", {
                        className: O().desc,
                        children:
                          "Lock CVX to automate your CVX yield harvesting, plus instantly claim your future yields!"
                      }),
                      (0, T.jsxs)("div", {
                        className: O().desc,
                        children: [
                          "Claiming future yield will require CVX to stay locked while it is earned.",
                          (0, T.jsx)(l.Z, {
                            style: { width: "210px" },
                            title: "seeFAQ"
                          })
                        ]
                      })
                    ]
                  }),
                  (0, T.jsxs)("div", {
                    className: O().tabs,
                    children: [
                      (0, T.jsx)("div", {
                        onClick: function () {
                          return Z("deposit");
                        },
                        className: i()(O().tab, "deposit" === y && O().active),
                        children: "Lock"
                      }),
                      (0, T.jsx)("div", {
                        onClick: function () {
                          return Z("withdraw");
                        },
                        className: i()(O().tab, "withdraw" === y && O().active),
                        children: "Unlock"
                      })
                    ]
                  }),
                  "deposit" === y &&
                    (0, T.jsx)(j.Z, {
                      placeholder: "Amount of CVX to Lock",
                      hidePercent: !0,
                      showMax: !0,
                      maxAmount: e_,
                      clearTrigger: em,
                      onChange: R,
                      moreInfo: [
                        "Available: ".concat((0, d.FR)(e_), " CVX"),
                        "Current Locked: ".concat((0, d.FR)(ev), " CVX")
                      ]
                    }),
                  "withdraw" === y &&
                    (0, T.jsx)(j.Z, {
                      placeholder: "Amount of CVX to withdraw",
                      hidePercent: !0,
                      showMax: !0,
                      clearTrigger: U,
                      maxAmount: (0, d.F6)(ev),
                      value: P,
                      onChange: E,
                      moreInfo: [
                        "Current locked: ".concat((0, d.FR)(ev), " CVX")
                      ]
                    })
                ]
              }),
              (0, T.jsxs)("div", {
                className: O().actions,
                children: [
                  "deposit" === y &&
                    (0, T.jsxs)(T.Fragment, {
                      children: [
                        (0, T.jsx)(eV, {
                          width: "280px",
                          loading: es,
                          disabled: !eE,
                          onClick: eI,
                          children: "Lock"
                        }),
                        (0, T.jsx)(g.Z, {
                          width: "120px",
                          style: { marginLeft: "10px" },
                          disabled: !eD,
                          onClick: function () {
                            return er(!0);
                          },
                          children: "Migrate"
                        })
                      ]
                    }),
                  "withdraw" === y &&
                    (0, T.jsxs)(T.Fragment, {
                      children: [
                        (0, T.jsx)("div", {
                          children: (0, T.jsx)(g.Z, {
                            width: "280px",
                            loading: ed,
                            disabled: !eM,
                            onClick: function () {
                              return eS();
                            },
                            children: "Unlock"
                          })
                        }),
                        (0, T.jsx)("div", {
                          onClick: function () {
                            return q(!0);
                          },
                          className:
                            "mt-2 underline cursor-pointer inline-block",
                          children: "Show pending unlocks >"
                        }),
                        (0, T.jsxs)("div", {
                          className: "mt-10 flex items-center justify-between",
                          children: [
                            (0, T.jsxs)("div", {
                              style: { textAlign: "left" },
                              children: [
                                "Unlocking: ",
                                (0, d.FR)(eb),
                                " CVX",
                                (0, T.jsx)("br", {}),
                                "Claimable: ",
                                (0, d.FR)(ey),
                                " CVX"
                              ]
                            }),
                            (0, T.jsx)(g.Z, {
                              disabled: !eU,
                              loading: ei,
                              onClick: eP,
                              theme: "grey",
                              children: "Withdraw"
                            })
                          ]
                        })
                      ]
                    })
                ]
              }),
              G &&
                (0, T.jsx)(N, {
                  unlockedPendingList: eH,
                  onCancel: function () {
                    return q(!1);
                  }
                }),
              W &&
                (0, T.jsx)(V, {
                  unlockedLatestTime: eq,
                  unlockList: eW,
                  handleUnlock: eA,
                  maxUnlock: eX,
                  unlocking: ed,
                  isRepay: $,
                  showRepayModal: eR,
                  onCancel: function () {
                    return Y(!1);
                  }
                }),
              J &&
                (0, T.jsx)(I, {
                  withdrawAmount: P,
                  refresh: function () {
                    return D(function (e) {
                      return e + 1;
                    });
                  },
                  getMinRepay: function (e) {
                    return (0, d.F6)(eg).minus(
                      (0, d.F6)(ev).minus(e).multipliedBy(ej)
                    );
                  },
                  onCancel: function () {
                    return Q(!1);
                  }
                }),
              en &&
                (0, T.jsx)(X, {
                  apr: o,
                  migrateCVX: eO.total || 0,
                  onCancel: function () {
                    return er(!1);
                  }
                })
            ]
          });
        },
        R = n(94874),
        A = n(21100),
        P = n.n(A);
      function E(e) {
        var t,
          n = (0, v.Z)(),
          c = n.currentAccount,
          s = n.isAllReady,
          a = (0, r.useState)(""),
          o = a[0],
          u = a[1],
          f = (0, r.useState)(0),
          p = f[0],
          x = f[1],
          k = (0, r.useState)(0),
          y = k[0],
          b = k[1],
          Z = (0, r.useState)(!1),
          O = Z[0],
          L = Z[1],
          N = (0, r.useState)(0),
          V = N[0],
          X = N[1],
          I = (0, _.ol)(p).cvxInfo.baseInfo,
          S = e.baseInfo,
          A = void 0 === S ? {} : S,
          E = e.userInfo,
          M = E.myLocked,
          U = E.totalBorrowed,
          D = E.myEarned,
          B = e.cvxLockerContract,
          G = A.rRate,
          q = (0, d.F6)(M).multipliedBy(G),
          H = (0, r.useMemo)(
            function () {
              if (I.minterCleverInfo) {
                var e = (0, d.F6)(I.minterCleverInfo[0]).minus(
                    I.minterCleverInfo[1]
                  ),
                  t = q.plus(D).minus(U);
                return [
                  (0, d.F6)(t).isGreaterThanOrEqualTo(e) ? e : (0, d.F6)(t),
                  e
                ];
              }
              return [!1, 0];
            },
            [I, U]
          ),
          W = H[0];
        H[1];
        var Y = (0, r.useMemo)(
            function () {
              return (0, d.F6)(U).isLessThanOrEqualTo(q) ? q.minus(U) : 0;
            },
            [U, q]
          ),
          z = (0, r.useMemo)(
            function () {
              if ((0, d.F6)(U).isLessThanOrEqualTo(q)) return D;
              var e = (0, d.F6)(D).minus(U);
              return (0, d.F6)(e).isLessThanOrEqualTo(0) ? (0, d.F6)(0) : e;
            },
            [U, D]
          );
        (0, r.useEffect)(
          function () {
            null == e || e.refresh();
          },
          [p]
        );
        var J = (0, F.Z)({
          approveAddress: C.Z.contracts.lockCvx
        }).refreshTrigger;
        (0, r.useEffect)(
          function () {
            x(function (e) {
              return e + 1;
            });
          },
          [J]
        ),
          (0, r.useEffect)(
            function () {
              x(function (e) {
                return e + 1;
              }),
                u("");
            },
            [y]
          );
        var Q =
            ((t = (0, m.Z)(
              h().mark(function e() {
                var t, n, r;
                return h().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (s) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (t = (0, d.F6)(o || 0)
                              .toFixed(0, 1)
                              .toString()),
                            L(!0),
                            (e.prev = 4),
                            (n = B.methods.borrow(t, !1)),
                            (e.next = 8),
                            n.estimateGas({ from: c })
                          );
                        case 8:
                          return (
                            (r = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 12),
                            (0, w.Z)(
                              function () {
                                return n.send({ from: c, gas: r });
                              },
                              { key: "canCNX", action: "claim" }
                            )
                          );
                        case 12:
                          L(!1),
                            b(function (e) {
                              return e + 1;
                            }),
                            x(function (e) {
                              return e + 1;
                            }),
                            (e.next = 21);
                          break;
                        case 17:
                          (e.prev = 17),
                            (e.t0 = e.catch(4)),
                            L(!1),
                            (0, w.c)("error_canCNX_borrow", e.t0);
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
            function () {
              return t.apply(this, arguments);
            }),
          K =
            (0, d.F6)(o).isGreaterThan(0) &&
            (0, d.F6)(o).isLessThanOrEqualTo(W);
        A.minterCleverInfo &&
          (0, d.F6)(A.minterCleverInfo[1]).isGreaterThanOrEqualTo(
            A.minterCleverInfo[0]
          ) &&
          (K = !1);
        var $ = (0, r.useMemo)(
            function () {
              return !o ||
                (0, d.F6)(o).isLessThanOrEqualTo(0) ||
                (0, d.F6)(o).isLessThan((0, d.F6)(z))
                ? 0
                : (0, d.F6)(o).minus(z).toString(10);
            },
            [o]
          ),
          ee = (0, r.useMemo)(
            function () {
              return !o || (0, d.F6)(o).isLessThanOrEqualTo(0)
                ? 0
                : (0, d.F6)(o).isLessThan(z)
                ? (0, d.F6)(o).toString(10)
                : z.toString(10);
            },
            [o]
          ),
          et = (0, d.F6)(W).isLessThan(o)
            ? [
                (0, T.jsx)("span", {
                  className: "text-warn",
                  children: "Maximum is: ".concat((0, d.FR)(W), " canCNX")
                })
              ]
            : [
                (0, T.jsxs)("div", {
                  className: "mb-1",
                  children: ["Total Claimable: ", (0, d.FR)(W), " canCNX"]
                }),
                (0, T.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    "You will get ",
                    (0, d.FR)(ee),
                    " canCNX accrued and",
                    " ",
                    (0, d.FR)($),
                    " canCNX future yield"
                  ]
                }),
                (0, T.jsxs)("div", {
                  className: "text-sm",
                  children: [
                    "Outstanding debt can be manually repaid early, but doing so will incur a fee. ",
                    (0, T.jsx)(l.Z, {
                      style: { width: "210px" },
                      title: "seeFAQ"
                    })
                  ]
                }),
                (0, T.jsxs)("div", {
                  className: "mb-1 text-sm",
                  children: [
                    "canCNX can be swapped to CVX in the",
                    " ",
                    (0, T.jsx)("a", {
                      style: { textDecoration: "underline", color: "#606060" },
                      href: "/furnace",
                      children: "Furnace"
                    }),
                    " ",
                    "or ",
                    (0, T.jsx)("span", {
                      style: { color: "#606060" },
                      children: "on Curve"
                    }),
                    " ",
                    (0, T.jsx)(l.Z, {
                      placement: "left",
                      title: "During beta period Curve swap is unavailable"
                    })
                  ]
                })
              ];
        return (0, T.jsxs)("div", {
          className: P().comp,
          children: [
            (0, T.jsxs)("div", {
              children: [
                (0, T.jsx)("div", {
                  className: P().title,
                  children: "Claim canCNX"
                }),
                (0, T.jsxs)("div", {
                  className: P().topInfo,
                  children: [
                    (0, T.jsx)("div", {
                      className: P().desc,
                      children:
                        "Claim your accrued and future yields as canCNX."
                    }),
                    (0, T.jsxs)("div", {
                      className: i()("mt-8 mb-4", P().yieldBox),
                      children: [
                        (0, T.jsx)("div", {
                          className: P().yieldTitle,
                          children: "Yields(canCNX)"
                        }),
                        (0, T.jsxs)("div", {
                          className: "text-sm",
                          children: [
                            (0, T.jsxs)("div", {
                              className: "flex items-center gap-1 mb-2",
                              children: [
                                "Future",
                                " ",
                                (0, T.jsx)(l.Z, {
                                  title:
                                    "When locked CVX rewards are harvested, outstanding debt is reduced and claimable increases"
                                }),
                                ":",
                                " ",
                                (0, T.jsxs)("div", {
                                  className: "ml-4",
                                  children: [
                                    (0, T.jsxs)("div", {
                                      className: "mb-2",
                                      children: [(0, d.FR)(Y), " claimable"]
                                    }),
                                    " ",
                                    (0, T.jsxs)("div", {
                                      children: [
                                        (0, d.FR)((0, d.F6)(U)),
                                        " outstanding debt"
                                      ]
                                    })
                                  ]
                                })
                              ]
                            }),
                            (0, T.jsxs)("div", {
                              className: "flex items-center gap-1",
                              children: [
                                "Accrued",
                                " ",
                                (0, T.jsx)(l.Z, {
                                  title:
                                    "canCNX is only accrued when outstanding debt is 0"
                                }),
                                ":",
                                " ",
                                (0, T.jsxs)("div", {
                                  className: "ml-4",
                                  children: [
                                    (0, T.jsxs)("a", {
                                      onClick: function () {
                                        X(z.toString());
                                      },
                                      children: [" ", (0, d.FR)(z), " "]
                                    }),
                                    " ",
                                    "claimable"
                                  ]
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                I &&
                  I.minterCleverInfo &&
                  (0, T.jsx)(R.Z, {
                    current: (0, d.FR)(I.minterCleverInfo[1]) || "-",
                    cap: (0, d.FR)(I.minterCleverInfo[0]) || "-",
                    token: "canCNX"
                  }),
                (0, T.jsx)("div", {
                  className: P().tabs,
                  children: (0, T.jsx)("div", {
                    className: i()(P().tab, P().active),
                    children: "Claim"
                  })
                }),
                (0, T.jsx)(j.Z, {
                  placeholder: "Amount of canCNX to claim",
                  hidePercent: !0,
                  showMax: !0,
                  clearTrigger: y,
                  maxAmount: W,
                  value: o,
                  changeValue: V,
                  onChange: function (e) {
                    (0, d.F6)(e).isEqualTo(z) || X(0), u(e);
                  },
                  moreInfo: et
                })
              ]
            }),
            (0, T.jsx)("div", {
              className: P().actions,
              children: (0, T.jsx)(g.Z, {
                onClick: Q,
                loading: O,
                width: "360px",
                disabled: !K,
                children: "Claim"
              })
            })
          ]
        });
      }
      var M = n(95439),
        U = n.n(M);
      function D(e, t) {
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
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function G() {
        var e,
          t,
          n = (0, f.Z)("CVX").aprData,
          c =
            null !==
              (e =
                null === (t = (0, u.Z)("convex-finance")) || void 0 === t
                  ? void 0
                  : t.usd) && void 0 !== e
              ? e
              : 0,
          s = (0, r.useState)(0),
          a = s[0],
          o = s[1],
          m = (0, _.J3)(a),
          x = m.lockInfo,
          h = x.baseInfo,
          v = h.totalLockedCVXInConvex,
          k = h.lockerLocked,
          y = h.totalPendingUnlock,
          b = h.rRate,
          j = x.userInfo,
          g = j.myLocked,
          C = j.totalBorrowed,
          w = j.myEarned,
          F = j.uLocks,
          Z = j.totalUnlocked,
          O = j.totalPendingUnlocked,
          L = m.cvxLockerContract,
          N = [
            {
              key: "APR",
              title: "APR",
              value: (0, d.F6)(n).isNaN()
                ? "-"
                : "".concat((0, d.FR)(n, !1, 0, 2), "%")
            },
            {
              key: "Total Locked",
              title: (0, T.jsxs)(T.Fragment, {
                children: [
                  "Total Locked",
                  " ",
                  (0, T.jsx)(l.Z, {
                    title: "Locked: "
                      .concat(
                        (0, d.FR)((0, d.F6)(k), !1),
                        " CVX <br/> PendingUnlock: "
                      )
                      .concat((0, d.FR)((0, d.F6)(y), !1), " CVX")
                  })
                ]
              }),
              value: "".concat(
                (0, d.FR)((0, d.F6)(v).multipliedBy(c), !0, 18, 0)
              )
            },
            {
              key: "My Locked",
              title: (0, T.jsxs)(T.Fragment, {
                children: [
                  "My Locked ",
                  (0, T.jsx)(l.Z, {
                    title: "".concat((0, d.FR)((0, d.F6)(g), !1), " CVX")
                  })
                ]
              }),
              value: "".concat((0, d.FR)((0, d.F6)(g).multipliedBy(c), !0))
            },
            {
              key: "My Claimable",
              title: (0, T.jsxs)(T.Fragment, {
                children: [
                  "My Claimable",
                  " ",
                  (0, T.jsx)(l.Z, {
                    title: "".concat(
                      (0, d.FR)(
                        (0, d.F6)(g).multipliedBy(b).plus(w).minus(C),
                        !1
                      ),
                      " canCNX"
                    )
                  })
                ]
              }),
              value: "".concat(
                (0, d.FR)(
                  (0, d.F6)(g).multipliedBy(b).plus(w).minus(C).multipliedBy(c),
                  !0
                )
              )
            },
            {
              key: "My Earned",
              title: (0, T.jsxs)(T.Fragment, {
                children: [
                  "My Earned ",
                  (0, T.jsx)(l.Z, {
                    title: "".concat((0, d.FR)((0, d.F6)(w), !1), " CVX")
                  })
                ]
              }),
              value: "".concat((0, d.FR)((0, d.F6)(w).multipliedBy(c), !0))
            }
          ];
        return (0, T.jsx)("div", {
          className: U().vaultPage,
          children: (0, T.jsxs)("div", {
            className: "container",
            children: [
              (0, T.jsx)(p.Z, {
                title: "CLever CVX",
                subtitle: "Claim Future CVX Yields Today!"
              }),
              (0, T.jsx)("div", {
                className: i()(U().analytics, "flex gap-2 mb-8 justify-center"),
                children: N.map(function (e) {
                  return (0,
                  T.jsx)("div", { className: U().item, children: (0, T.jsxs)("div", { className: U().itemInner, children: [(0, T.jsx)("div", { className: U().title, children: e.title }), (0, T.jsx)("div", { className: U().value, children: e.value })] }) }, e.key);
                })
              }),
              (0, T.jsxs)("div", {
                className: "flex gap-8 flex-col xl:flex-row",
                children: [
                  (0, T.jsx)(S, {
                    userInfo: {
                      myLocked: g,
                      uLocks: F,
                      totalUnlocked: Z,
                      totalPendingUnlocked: O,
                      rRate: b,
                      totalBorrowed: C
                    },
                    apr: n,
                    cvxLockerContract: L,
                    refresh: function () {
                      return o(function (e) {
                        return e + 1;
                      });
                    }
                  }),
                  (0, T.jsx)(
                    E,
                    B(
                      B(
                        {},
                        {
                          cvxLockerContract: L,
                          baseInfo: { lockerLocked: k, rRate: b },
                          userInfo: {
                            myLocked: g,
                            totalBorrowed: C,
                            myEarned: w
                          }
                        }
                      ),
                      {},
                      {
                        refresh: function () {
                          return o(function (e) {
                            return e + 1;
                          });
                        }
                      }
                    )
                  )
                ]
              })
            ]
          })
        });
      }
      function q() {
        return (0, T.jsxs)(r.Fragment, {
          children: [
            (0, T.jsx)(s(), {
              children: (0, T.jsx)("title", {
                children: "Canny | curve, Convex | High performance - Vaults"
              })
            }),
            (0, T.jsx)(G, {})
          ]
        });
      }
    },
    1381: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return x;
        },
        c: function () {
          return m;
        }
      });
      var r = n(59499);
      n(67294);
      var c = n(55722),
        s = n(79090),
        a = n(40695),
        o = n(19029),
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
              href: "".concat(o.Z.explorerUri, "/tx/").concat(t),
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
            c.Z.info(
              d(d({}, e), {}, { icon: (0, i.jsx)(s.Z, {}), duration: null })
            );
          },
          success: function (e) {
            c.Z.success(
              d(
                d({}, e),
                {},
                {
                  description: (0, i.jsx)(l, { txHash: e.txHash }),
                  icon: (0, i.jsx)(a.Z, { style: { color: "green" } })
                }
              )
            );
          },
          error: function (e) {
            c.Z.error(
              d(
                d({}, e),
                {},
                {
                  description: "An error occurred: ".concat(
                    e.description.toString()
                  ),
                  icon: (0, i.jsx)(a.Z, { style: { color: "red" } })
                }
              )
            );
          },
          close: function (e) {
            c.Z.destroy(e);
          },
          txnSubmitted: function (e) {
            c.Z.info(
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
        p = function (e) {
          return e.toString()[0].toUpperCase() + e.toString().slice(1);
        },
        m = function (e, t) {
          f.error({
            key: e,
            message: "Unexpected Error",
            description: t.message ? t.message.toString() : JSON.stringify(t)
          }),
            setTimeout(function () {
              f.close("error_stake_claim");
            }, 3e3);
        },
        x = function (e, t, n) {
          var r = t.key,
            c = t.action,
            s = "noPayableAction_".concat(r, "_").concat(c);
          return (
            f.info({ key: s, message: "".concat(p(c), "ing") }),
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
                      message: "Successfully ".concat(p(c), "ed"),
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
    25829: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/clever/cleverCVX",
        function () {
          return n(31232);
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
    21100: function (e) {
      e.exports = {
        comp: "styles_comp__dhqdj",
        title: "styles_title__pH5DN",
        divider: "styles_divider__ha5Hq",
        topInfo: "styles_topInfo__jIxlt",
        desc: "styles_desc__JAbx9",
        tabs: "styles_tabs__D6_eT",
        tab: "styles_tab__OHEY_",
        active: "styles_active__WscoD",
        actions: "styles_actions__rlijk",
        yieldBox: "styles_yieldBox__GD89z",
        yieldTitle: "styles_yieldTitle__HRD5_"
      };
    },
    40702: function (e) {
      e.exports = {
        comp: "styles_comp__sm7Nh",
        highlight: "styles_highlight__E5Rpn",
        title: "styles_title__kyuAm",
        topInfo: "styles_topInfo__3DEzb",
        desc: "styles_desc__hGHwQ",
        tabs: "styles_tabs__G5zlL",
        tab: "styles_tab___4OAS",
        active: "styles_active__LVFY_",
        actions: "styles_actions__6jxqE"
      };
    },
    95439: function (e) {
      e.exports = {
        analytics: "styles_analytics__1JUqO",
        item: "styles_item__ZCtxk",
        title: "styles_title__oUiIB",
        value: "styles_value__j6iDj",
        itemInner: "styles_itemInner__NXUYM",
        banner: "styles_banner__0_JeV",
        logo: "styles_logo__KGUnV",
        img: "styles_img__IIypB",
        logoText1: "styles_logoText1__vG3Ax",
        logoText2: "styles_logoText2__ewgSz"
      };
    }
  },
  function (e) {
    e.O(0, [3662, 8795, 9190, 9774, 2888, 179], function () {
      return e((e.s = 25829));
    }),
      (_N_E = e.O());
  }
]);
