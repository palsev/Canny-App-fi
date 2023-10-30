(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1723],
  {
    98268: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return m;
        },
        k: function () {
          return p;
        }
      });
      var r = n(4730),
        a = n(67294),
        s = n(94184),
        i = n.n(s),
        o = n(48282),
        l = n(63653),
        c = n.n(l),
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
      function p(e) {
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
      function m(e) {
        var t,
          n = e.defaultValue,
          s = e.balance,
          l = e.label,
          m = e.labelDes,
          v = e.token,
          h = e.vaultWithdrawFee,
          x = e.feeName,
          y = e.decimals,
          g = e.available,
          b = e.BottomElement,
          F = (e.calculatorLink, e.depositFor),
          k = e.placeholder,
          j = e.withdrawFee,
          _ = e.onChange,
          C = void 0 === _ ? function () {} : _,
          w = e.hidePercent,
          N = e.ExtraButton,
          T = e.hideMax,
          I = e.reset,
          Z = (0, r.Z)(e, f),
          S = (0, a.useState)(0),
          A = S[0],
          R = S[1],
          L = (0, a.useState)(""),
          E = L[0],
          B = L[1];
        (0, a.useEffect)(
          function () {
            B(
              (0, u.F6)(n)
                .shiftedBy(-(null != y ? y : 18))
                .toFixed(3)
            ),
              C(n, 100);
          },
          [n]
        ),
          (0, a.useState)(
            function () {
              R(0);
            },
            [E]
          ),
          (0, a.useEffect)(
            function () {
              R(0), B(""), C(0);
            },
            [I]
          );
        var M = function (e) {
          if ((R(e), s && !(0, u.F6)(s).isZero() && !(0, u.F6)(s).isNaN())) {
            var t = (0, u.F6)(s).times(e).div(100);
            B((0, u.FR)(t, !1, null != y ? y : 18)), C(t, e);
          }
          if (g && !(0, u.F6)(g).isZero() && !(0, u.F6)(g).isNaN()) {
            var n = (0, u.F6)(g).times(e).div(100);
            B((0, u.FR)(n, !1, null != y ? y : 18)), C(n, e);
          }
        };
        return (0, d.jsxs)("div", {
          className: c().inputWrapper,
          style: null !== (t = Z.style) && void 0 !== t ? t : {},
          children: [
            (0, d.jsxs)("div", {
              className: c().inputTop,
              children: [
                !w &&
                  !(0, u.F6)(s).isNaN() &&
                  (0, d.jsx)(p, {
                    name: "Balance",
                    value: ""
                      .concat((0, u.FR)(s, !1, null != y ? y : 18), " ")
                      .concat(v),
                    extraClass: "color-blue"
                  }),
                !w &&
                  !(0, u.F6)(g).isNaN() &&
                  (0, d.jsx)(p, {
                    name: "Available",
                    value: ""
                      .concat((0, u.FR)(g, !1, null != y ? y : 18), " ")
                      .concat(v)
                  }),
                !w &&
                  (0, d.jsx)("div", {
                    className: c().percents,
                    children: [25, 50, 75, 100].map(function (e) {
                      return (0, d.jsxs)(
                        "div",
                        {
                          className: i()(c().percent, e === A && c().active),
                          onClick: function () {
                            return M(e);
                          },
                          children: [e, "%"]
                        },
                        e
                      );
                    })
                  })
              ]
            }),
            l &&
              (0, d.jsxs)("div", {
                className:
                  " form-label text-xl flex items-center justify-between",
                children: [
                  (0, d.jsx)("span", {
                    dangerouslySetInnerHTML: { __html: l }
                  }),
                  m
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
                        R(0);
                        var t = e.target.value,
                          n = new RegExp(/,/g),
                          r = /[^\d.]/g;
                        n.test(t) && (t = t.replace(/,/g, "")),
                          r.test(t) && (t = t.replace(r, "")),
                          "0" === E &&
                            -1 === t.indexOf(".") &&
                            (t = t.slice(1)),
                          B(t),
                          C((0, u.F6)(t || 0).shiftedBy(null != y ? y : 18), A);
                      },
                      value: E,
                      placeholder: k
                    }),
                    (0, d.jsx)(o.Z, {
                      visible: w && !T,
                      children: (0, d.jsx)("a", {
                        className:
                          "color-blue underline absolute right-3 top-2",
                        onClick: function () {
                          return M(100);
                        },
                        children: "MAX"
                      })
                    })
                  ]
                }),
                N && (0, d.jsx)(N, {})
              ]
            }),
            (0, d.jsxs)("div", {
              className: c().inputBottom,
              children: [
                b && (0, d.jsx)(b, {}),
                h &&
                  (0, d.jsx)(p, {
                    name: "".concat(x || "Vault Withdraw", " Fee"),
                    value: h || "-"
                  }),
                j &&
                  (0, d.jsx)(p, {
                    name: "".concat(x || "Withdraw", " Fee"),
                    value: j || "-"
                  }),
                F && (0, d.jsx)(p, { name: "Deposit for", value: F || "-" })
              ]
            })
          ]
        });
      }
    },
    32182: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return p;
        }
      });
      var r = n(67294),
        a = n(94184),
        s = n.n(a),
        i = n(98268),
        o = n(69476),
        l = n.n(o),
        c = n(85893);
      function u(e) {
        var t = e.slippage,
          n = e.slippageChange,
          a = (0, r.useState)(!1),
          s = a[0],
          i = a[1],
          o = (0, r.useState)(0),
          u = o[0],
          d = o[1],
          f = function (e) {
            e <= 50 && d(e);
          };
        return (0, c.jsxs)("div", {
          className: l().slippageInfo,
          children: [
            (0, c.jsx)("span", {
              className: "color-light-blue",
              children: "Slippage: "
            }),
            s
              ? (0, c.jsxs)("span", {
                  children: [
                    (0, c.jsx)("input", {
                      value: u,
                      type: "text",
                      className: l().slippageInput,
                      onChange: function (e) {
                        return f(e.target.value);
                      }
                    }),
                    " ",
                    "%"
                  ]
                })
              : (0, c.jsxs)("span", {
                  className: "color-blue",
                  children: [t, " %"]
                }),
            (0, c.jsx)("a", {
              className: "color-blue ml-2 underline",
              onClick: function () {
                s ? (n(u), i(!1)) : (d(t), i(!0));
              },
              children: s ? "Confirm" : "Edit"
            }),
            s &&
              (0, c.jsx)("a", {
                className: "color-blue ml-2",
                onClick: function () {
                  i(!1);
                },
                children: "Cancel"
              })
          ]
        });
      }
      var d = n(65865),
        f = n.n(d);
      function p(e) {
        var t = e.zapTitle,
          n = e.slippage,
          r = e.slippageChange,
          a = e.zapType,
          o = e.minAmount,
          l = e.isShowMinAmount,
          d = e.isLpMinAmount,
          p = e.tokenName,
          m = e.minLpAmountTvl;
        return (0, c.jsxs)("div", {
          className: s()(f().zapInfo, "mb-1"),
          children: [
            t &&
              (0, c.jsx)("div", {
                className: "font-semibold mt-6",
                children: t
              }),
            void 0 === l || l
              ? o &&
                (0, c.jsx)(i.k, {
                  name: "Minimum ".concat(a),
                  value: ""
                    .concat(0 === o ? "-" : o, " ")
                    .concat(
                      void 0 !== d && d
                        ? ""
                            .concat(p, "  ")
                            .concat(0 === o ? "" : "~$".concat(m))
                        : ""
                    )
                })
              : "",
            n && (0, c.jsx)(u, { slippage: n, slippageChange: r })
          ]
        });
      }
    },
    91827: function (e, t, n) {
      "use strict";
      var r = n(67294),
        a = n(3612),
        s = n(36863),
        i = n(86920);
      t.Z = function (e) {
        var t = (0, i.Z)().ConvexVaultsAPY,
          n = (0, s.Z)(e),
          o = n.aprData,
          l = n.lpConvexInfo;
        return (0, r.useMemo)(
          function () {
            var e,
              n,
              r = (0, a.sE)(t, "CRV"),
              s = parseFloat((null == r ? void 0 : r.apy.project) || 0),
              i = (0, a.F6)(parseFloat(s))
                .dividedBy(100)
                .dividedBy(52)
                .plus(1)
                .pow(52)
                .minus(1)
                .shiftedBy(2),
              c = parseFloat(o || 0),
              u =
                null !==
                  (e =
                    null == l
                      ? void 0
                      : null === (n = l.curveApys) || void 0 === n
                      ? void 0
                      : n.baseApy) && void 0 !== e
                  ? e
                  : 0,
              d = (0, a.F6)(c)
                .minus(u)
                .multipliedBy((0, a.F6)(1).plus(i.shiftedBy(-2)));
            return (0, a.F6)(u)
              .plus(null != d ? d : 0)
              .toFixed(2);
          },
          [o, t]
        );
      };
    },
    51583: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return x;
        }
      });
      var r = n(59499),
        a = n(16835),
        s = n(50029),
        i = n(87794),
        o = n.n(i),
        l = n(67294),
        c = n(43275),
        u = n(48060),
        d = n(19029),
        f = n(3612),
        p = n(91622),
        m = n(75349);
      function v(e, t) {
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
            ? v(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var x = function (e) {
        var t = (0, c.Z)(),
          n = t.blockNumber,
          r = t._currentAccount,
          i = (0, p.h)(),
          v = (0, m.cq)(
            null != e ? e : d.Z.contracts.metaClever,
            u.Z.MetaCleverABI
          ),
          x = v.contract,
          y = v.getContract,
          g = (0, l.useState)({
            userInfo: {},
            baseInfo: { rRate: 50, totalLocked: 0, YieldStrategyIndex: 0 }
          }),
          b = g[0],
          F = g[1],
          k = (0, m.I1)().contract,
          j = (0, l.useCallback)(
            (0, s.Z)(
              o().mark(function t() {
                var n,
                  s,
                  l,
                  c,
                  d,
                  p,
                  m,
                  v,
                  g,
                  b,
                  j,
                  _,
                  C,
                  w,
                  N,
                  T,
                  I,
                  Z,
                  S,
                  A,
                  R,
                  L,
                  E,
                  B,
                  M,
                  D,
                  O,
                  V,
                  P,
                  U;
                return o().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (s = (n = x.methods).getUserInfo),
                            (l = n.yieldStrategies),
                            (c = n.reserveRate),
                            (d = n.feeInfo),
                            (p = n.getActiveYieldStrategies),
                            (m = k.methods.minterInfo),
                            (t.prev = 2),
                            (t.next = 5),
                            p().call()
                          );
                        case 5:
                          return (
                            (g = (v = t.sent._indices) ? v[0] : 0),
                            (b = [s(r), l(g), c(), d(), m(e)]),
                            (t.next = 11),
                            i(b)
                          );
                        case 11:
                          return (
                            (j = t.sent),
                            (C = (_ = (0, a.Z)(j, 5))[0]),
                            (w = _[1]),
                            (N = _[2]),
                            (T = _[3]),
                            (I = _[4]),
                            (S = (Z = C || {})[0]),
                            (A = Z[1]),
                            (R = Z[2]),
                            (L = Z[3]),
                            (B = (E = w || {})[1]),
                            (M = E[4]),
                            (D = E[7]),
                            (O = y(B, u.Z.ConcentratorStrategyABI)),
                            (t.next = 23),
                            O.methods.underlyingPrice().call()
                          );
                        case 23:
                          (V = t.sent),
                            (P = (null != L ? L : []).map(function (e, t) {
                              return { index: R[t], share: e };
                            })),
                            (U = (0, f.F6)(A)
                              .multipliedBy(N)
                              .div(1e9)
                              .minus(
                                (0, f.F6)(S).isLessThanOrEqualTo(0) ? 0 : S
                              )),
                            F(function (e) {
                              return h(
                                h({}, e),
                                {},
                                {
                                  userInfo: {
                                    claimableAmount: U,
                                    totalValue: A,
                                    totalDebt: S,
                                    earnedAmount: (0, f.F6)(
                                      S
                                    ).isLessThanOrEqualTo(0)
                                      ? (0, f.F6)(S).abs()
                                      : 0,
                                    indices: R,
                                    shares: L,
                                    sharesInfo: P
                                  },
                                  baseInfo: {
                                    YieldStrategyIndex: g,
                                    strategyUnderlyingPrice: V,
                                    totalShare: M,
                                    fees: T,
                                    totalLocked: D,
                                    rRate: (0, f.F6)(N).div(1e9).toString(),
                                    minterCleverInfo: I
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
            [x, y, k, i, r]
          );
        return (
          (0, l.useEffect)(
            function () {
              j();
            },
            [n, x, r]
          ),
          { metaCleverLockerContract: x, lockInfo: b }
        );
      };
      t.Z = x;
    },
    19657: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        }
      });
      var r = n(67294),
        a = n(11163),
        s = n(19029),
        i = ["Frax-USDC", "LUSDFraxBP", "TUSDFraxBP", "canUSDFRAXBP"],
        o = function (e) {
          var t,
            n = (0, r.useMemo)(
              function () {
                return "CRV" === e
                  ? s.Z.CLEVERS.canCRY
                  : i.includes(e)
                  ? s.Z.CLEVERS.canUSD
                  : {};
              },
              [e]
            ),
            a = (0, r.useMemo)(
              function () {
                return "CRV" === e
                  ? s.Z.CLEVERS.canCRY.pools.find(function (t) {
                      return t.poolId == e;
                    })
                  : i.includes(e)
                  ? s.Z.CLEVERS.canUSD.pools.find(function (t) {
                      return t.poolId == e;
                    })
                  : {};
              },
              [e]
            ),
            o =
              null !== (t = null == a ? void 0 : a.deptTokenSymbol) &&
              void 0 !== t
                ? t
                : "clev".concat(e);
          return {
            lockTokenName: e,
            clevTokenName: o,
            tokenConfig: n,
            poolConfig: a
          };
        };
      t.Z = function (e) {
        var t,
          n,
          o,
          l = (0, a.useRouter)().query,
          c =
            null !==
              (t =
                null !== (n = null == l ? void 0 : l.token) && void 0 !== n
                  ? n
                  : e) && void 0 !== t
              ? t
              : "CRV",
          u = (0, r.useMemo)(
            function () {
              return "CRV" === c
                ? s.Z.CLEVERS.canCRY
                : i.includes(c)
                ? s.Z.CLEVERS.canUSD
                : {};
            },
            [c]
          ),
          d = (0, r.useMemo)(
            function () {
              return "CRV" === c
                ? s.Z.CLEVERS.canCRY.pools.find(function (e) {
                    return e.poolId == c;
                  })
                : i.includes(c)
                ? s.Z.CLEVERS.canUSD.pools.find(function (e) {
                    return e.poolId == c;
                  })
                : {};
            },
            [c]
          ),
          f =
            null !== (o = null == d ? void 0 : d.deptTokenSymbol) &&
            void 0 !== o
              ? o
              : "clev".concat(c);
        return {
          lockTokenName: c,
          clevTokenName: f,
          tokenConfig: u,
          poolConfig: d
        };
      };
    },
    75925: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return z;
          }
        });
      var r = n(67294),
        a = n(9008),
        s = n.n(a),
        i = n(94184),
        o = n.n(i),
        l = n(50029),
        c = n(87794),
        u = n.n(c),
        d = n(23109),
        f = n(72198),
        p = n(66774),
        m = n(29386),
        v = n(32182),
        h = n(48282),
        x = n(4624),
        y = n(3612),
        g = n(19029),
        b = n(1381),
        F = n(10088),
        k = n(75349),
        j = n(19657),
        _ = n(68208),
        C = n.n(_),
        w = n(3548),
        N = n(85893);
      function T(e) {
        var t = e.unlocking,
          n = e.poolId,
          r = e.isRepay,
          a = e.handleUnlock,
          s = e.maxUnlock,
          i = e.showRepayModal,
          o = e.onCancel;
        return (0, N.jsxs)(w.Z, {
          onCancel: o,
          width: "600px",
          children: [
            (0, N.jsx)("div", {
              className: "text-center mb-2 text-2xl font-bold",
              children: "Withdraw"
            }),
            (0, N.jsxs)("div", {
              children: [
                "Max withdraw ",
                (0, y.FR)(s),
                " ",
                n,
                "，you need repay debt if you withdraw more ",
                n
              ]
            }),
            (0, N.jsxs)("div", {
              className: "flex justify-center mt-24 gap-6",
              children: [
                (0, N.jsx)(h.Z, {
                  visible: r && !(0, y.DB)(s),
                  children: (0, N.jsx)(p.Z, {
                    loading: t,
                    onClick: function () {
                      return a(r ? s : null);
                    },
                    children: "Withdraw"
                  })
                }),
                r && (0, N.jsx)(p.Z, { onClick: i, children: "Repay" })
              ]
            })
          ]
        });
      }
      var I = n(43275);
      function Z(e) {
        var t,
          n = (0, I.Z)(),
          a = n.currentAccount,
          s = n.web3,
          i = n.isAllReady,
          o = e.onCancel,
          c = e.tokenName,
          d = e.maxUnlock,
          p = e.lockerInfo,
          m = e.lockerContract,
          v = e.withdrawAmount,
          h = (0, j.Z)().poolConfig,
          g = h.repayTokens.map(function (e) {
            return e.symbol;
          }),
          k = (0, r.useState)(0),
          _ = k[0],
          C = k[1],
          T = (0, x.Z)(h.repayTokens).tokenInfo,
          Z = (0, r.useState)(""),
          S = Z[0],
          A = Z[1],
          R = (0, r.useState)(!1),
          L = R[0],
          E = R[1],
          B = (0, r.useState)(g[0]),
          M = B[0],
          D = B[1],
          O = (0, r.useState)(0),
          V = O[0],
          P = O[1],
          U = (0, r.useState)(0),
          G = U[0],
          W = U[1],
          q = p.baseInfo.fees[3],
          z = p.userInfo.totalDebt,
          Y = (0, r.useMemo)(
            function () {
              var e =
                  T.find(function (e) {
                    return e.symbol === M;
                  }) || {},
                t = e.balance,
                n = e.allowance,
                r = e.contract,
                a = e.source;
              return {
                balance: t,
                allowance: n,
                contract: r,
                approveTo: null == a ? void 0 : a.approveTo,
                source: a
              };
            },
            [T, M]
          ),
          X = Y.balance,
          H = Y.allowance,
          J = Y.contract,
          Q = Y.approveTo,
          K = Y.source;
        (0, r.useEffect)(
          function () {
            null == e || e.refresh();
          },
          [_]
        );
        var $ = (0, y.F6)(H).isGreaterThan(S)
            ? S
            : s.utils.toWei("1000000000000000000", "ether"),
          ee = (0, F.Z)({
            approveAmount: $,
            allowance: H,
            tokenContract: J,
            approveAddress: Q,
            notVisibleMaxSwitch: !0
          }),
          et = ee.refreshTrigger,
          en = ee.BtnWapper;
        (0, r.useEffect)(
          function () {
            C(function (e) {
              return e + 1;
            });
          },
          [et]
        ),
          (0, r.useEffect)(
            function () {
              C(function (e) {
                return e + 1;
              }),
                A(""),
                D(g[0]);
            },
            [G]
          );
        var er = function (e) {
            return (0, y.F6)(e)
              .plus((0, y.F6)(e).multipliedBy((0, y.F6)(q).div(1e9)))
              .isLessThan(X)
              ? e
              : (0, y.F6)(X).div((0, y.F6)(1).plus((0, y.F6)(q).div(1e9)));
          },
          ea = er(z),
          es =
            (0, y.F6)(S).isGreaterThan(0) &&
            (0, y.F6)(S).isLessThanOrEqualTo(ea) &&
            (0, y.F6)(z).isGreaterThan(0),
          ei = S && (0, y.F6)(z).isGreaterThan(S) ? (0, y.F6)(z).minus(S) : 0,
          eo = (0, y.F6)(X).isLessThan(S)
            ? [
                (0, N.jsx)("span", {
                  className: "text-warn",
                  children: "Maximum is: ".concat((0, y.FR)(X), " ").concat(c)
                })
              ]
            : [
                "Available: ".concat((0, y.FR)(X), " ").concat(M),
                "Debt will be: ".concat((0, y.FR)(ei), " ").concat(c),
                "Early Repayment: ".concat(
                  (0, y.F6)(q).div(1e9).multipliedBy(100).toString(),
                  "%"
                )
              ],
          el =
            ((t = (0, l.Z)(
              u().mark(function e() {
                var t, n, r, s, o, l;
                return u().wrap(
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
                            (t = (0, y.F6)(S || 0)
                              .toFixed(0, 1)
                              .toString()),
                            (r = (n = m.methods).repay),
                            (s = n.burn),
                            (e.prev = 4),
                            E(!0),
                            (o = s(a, t)),
                            (null != K && K.isClever) ||
                              (o = r(K.address, a, t)),
                            (e.next = 10),
                            o.estimateGas({ from: a })
                          );
                        case 10:
                          return (
                            (l = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 14),
                            (0, b.Z)(
                              function () {
                                return o.send({ from: a, gas: l });
                              },
                              { key: "locker", action: "repay" }
                            )
                          );
                        case 14:
                          C(function (e) {
                            return e + 1;
                          }),
                            W(function (e) {
                              return e + 1;
                            }),
                            E(!1),
                            (e.next = 23);
                          break;
                        case 19:
                          (e.prev = 19),
                            (e.t0 = e.catch(4)),
                            E(!1),
                            (0, b.c)("error_locker_repay", e.t0);
                        case 23:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[4, 19]]
                );
              })
            )),
            function () {
              return t.apply(this, arguments);
            }),
          ec = (0, y.F6)(v).minus(d).isGreaterThan(z)
            ? (0, y.F6)(z).isGreaterThan(0)
              ? z
              : 0
            : (0, y.F6)(v).minus(d);
        return (0, N.jsxs)(w.Z, {
          onCancel: o,
          width: "600px",
          children: [
            (0, N.jsx)("div", {
              className: "text-center mb-8 text-2xl font-bold",
              children: "Repay"
            }),
            (0, N.jsxs)("p", {
              children: ["Debt: ", (0, y.FR)(p.userInfo.totalDebt), " ", c]
            }),
            (0, N.jsxs)("p", {
              children: [
                "Min repayment: ",
                (0, N.jsxs)("a", {
                  onClick: function () {
                    P(ec.toString());
                  },
                  children: [(0, y.FR)((0, y.F6)(ec)), " "]
                }),
                c
              ]
            }),
            (0, N.jsx)(f.Z, {
              placeholder: "Amount of ".concat(M, " to repay"),
              hidePercent: !0,
              showMax: !0,
              clearTrigger: G,
              maxAmount: ea,
              value: S,
              changeValue: V,
              onChange: function (e) {
                var t = er(e),
                  n = e;
                (0, y.F6)(e).isGreaterThan(t) && (P(t), (n = t)), A(n);
              },
              options: g,
              selectedToken: M,
              selectedChange: D,
              moreInfo: eo
            }),
            (0, N.jsx)("div", {
              className: "text-center mt-24",
              children: (0, N.jsx)(en, {
                width: "360px",
                loading: L,
                disabled: !es,
                onClick: el,
                children: "Repay"
              })
            })
          ]
        });
      }
      var S = n(86920);
      function A(e) {
        var t,
          n,
          a,
          s,
          i,
          c,
          d,
          v,
          h,
          x = (0, I.Z)(),
          g = x.currentAccount,
          F = x.isAllReady,
          k = (0, S.Z)(),
          _ = k.ifoVaultWithdrawFee,
          w = k.theme,
          A = (0, r.useState)(!1),
          R = A[0],
          L = A[1],
          E = e.lockerInfo,
          B = e.metaCleverLockerContract,
          M = (0, j.Z)().poolConfig,
          D = (0, r.useState)(""),
          O = D[0],
          V = D[1],
          P = (0, r.useState)({ total: 0, user: 0 }),
          U = P[0],
          G = P[1],
          W = (0, r.useState)(0),
          q = W[0],
          z = W[1],
          Y = (0, r.useState)(!1),
          X = Y[0],
          H = Y[1],
          J = (0, r.useState)(!1),
          Q = J[0],
          K = J[1],
          $ = (0, r.useState)(!1),
          ee = $[0],
          et = $[1],
          en = (0, r.useState)(!1),
          er = en[0],
          ea = en[1],
          es = E.baseInfo,
          ei = es.rRate,
          eo = es.strategyUnderlyingPrice,
          el = es.YieldStrategyIndex;
        (0, r.useEffect)(
          function () {
            null == e || e.refresh();
          },
          [q]
        );
        var ec =
            null === (c = E.userInfo) || void 0 === c
              ? void 0
              : null === (d = c.sharesInfo) || void 0 === d
              ? void 0
              : d.find(function (e) {
                  return e.index == el;
                }),
          eu = (0, y.F6)(null == ec ? void 0 : ec.share)
            .div(
              null === (v = E.baseInfo) || void 0 === v ? void 0 : v.totalShare
            )
            .multipliedBy(
              null === (h = E.baseInfo) || void 0 === h ? void 0 : h.totalLocked
            ),
          ed = (0, r.useMemo)(
            function () {
              return (0, y.F6)(eu).minus(
                (0, y.F6)(E.userInfo.totalDebt).div(ei)
              );
            },
            [eu, E, ei]
          ),
          ef =
            (0, y.F6)(O).isGreaterThan(0) &&
            (0, y.F6)(O).isLessThanOrEqualTo(eu),
          ep =
            ((t = (0, l.Z)(
              u().mark(function e() {
                return u().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        K((0, y.F6)(O).isGreaterThan(ed)),
                          (0, y.F6)(O).isGreaterThan(ed) ? H(!0) : eh();
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function () {
              return t.apply(this, arguments);
            }),
          em =
            ((n = (0, l.Z)(
              u().mark(function e() {
                return u().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        H(!1), L(!0);
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
          ev = (0, r.useMemo)(
            function () {
              return (0, y.F6)(O).isNaN()
                ? 0
                : null == O
                ? void 0
                : O.div(eo)
                    .multipliedBy(1 - _)
                    .toFixed(4);
            },
            [eo, O]
          ),
          eh =
            ((a = (0, l.Z)(
              u().mark(function e(t) {
                var n, r, a, s;
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (F) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            H(!1),
                            et(!0),
                            (n = (null != t ? t : (0, y.F6)(O || 0))
                              .div(eu)
                              .multipliedBy(ec.share)
                              .toFixed(0, 1)
                              .toString()),
                            (e.prev = 5),
                            (e.next = 8),
                            B.methods
                              .withdraw(el, g, n, 0, !1)
                              .call({ from: g })
                          );
                        case 8:
                          return (
                            (r = e.sent),
                            (a = B.methods.withdraw(el, g, n, r, !1)),
                            (e.next = 12),
                            a.estimateGas({ from: g })
                          );
                        case 12:
                          return (
                            (s = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 16),
                            (0, b.Z)(
                              function () {
                                return a.send({ from: g, gas: s });
                              },
                              { key: "locker", action: "unlock" }
                            )
                          );
                        case 16:
                          V(""),
                            et(!1),
                            z(function (e) {
                              return e + 1;
                            }),
                            (e.next = 26);
                          break;
                        case 21:
                          (e.prev = 21),
                            (e.t0 = e.catch(5)),
                            et(!1),
                            console.log(e.t0),
                            (0, b.c)("error_locker_unlock", e.t0);
                        case 26:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[5, 21]]
                );
              })
            )),
            function (e) {
              return a.apply(this, arguments);
            });
        (0, r.useEffect)(
          function () {
            ex();
          },
          [g, er, el]
        );
        var ex =
            ((s = (0, l.Z)(
              u().mark(function e() {
                var t, n, r, a;
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.prev = 0), F)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          return (
                            (e.next = 5),
                            B.methods.harvest(el, g, 0).call({ from: g })
                          );
                        case 5:
                          return (
                            console.log(
                              "havest",
                              (r = e.sent),
                              null == ec ? void 0 : ec.share,
                              null === (t = E.baseInfo) || void 0 === t
                                ? void 0
                                : t.totalShare,
                              _
                            ),
                            (a = r
                              ? (0, y.F6)(null == ec ? void 0 : ec.share)
                                  .div(
                                    null === (n = E.baseInfo) || void 0 === n
                                      ? void 0
                                      : n.totalShare
                                  )
                                  .multipliedBy(r)
                              : 0),
                            G({ total: r, user: a }),
                            e.abrupt("return", { total: r, user: a })
                          );
                        case 12:
                          (e.prev = 12),
                            (e.t0 = e.catch(0)),
                            console.log(e.t0),
                            G({ total: 0, user: 0 });
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 12]]
                );
              })
            )),
            function () {
              return s.apply(this, arguments);
            }),
          ey = (0, r.useMemo)(
            function () {
              return !!(0, y.DB)(U.total);
            },
            [U.total]
          ),
          eg =
            ((i = (0, l.Z)(
              u().mark(function e() {
                var t, n, r, a;
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (F) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (e.prev = 2), ea(!0), (e.next = 6), ex();
                        case 6:
                          if (
                            ((t = e.sent.total),
                            (n = (0, y.F6)(t).times(0.997).toFixed(0, 1)),
                            !(1 * t))
                          ) {
                            e.next = 19;
                            break;
                          }
                          return (e.next = 12), B.methods.harvest(el, g, n);
                        case 12:
                          return (
                            (r = e.sent),
                            (e.next = 15),
                            r.estimateGas({ from: g })
                          );
                        case 15:
                          return (
                            (a = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 19),
                            (0, b.Z)(
                              function () {
                                return r.send({ from: g, gas: a });
                              },
                              { key: "harvestVault", action: "harvest" }
                            )
                          );
                        case 19:
                          ea(!1), (e.next = 26);
                          break;
                        case 22:
                          (e.prev = 22),
                            (e.t0 = e.catch(2)),
                            ea(!1),
                            (0, b.c)("error_transmuter_harvest", e.t0);
                        case 26:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 22]]
                );
              })
            )),
            function () {
              return i.apply(this, arguments);
            });
        return (0, N.jsxs)("div", {
          children: [
            (0, N.jsx)(f.Z, {
              placeholder: "Amount to withdraw",
              hidePercent: !0,
              showMax: !0,
              clearTrigger: q,
              maxAmount: (0, y.F6)(eu),
              value: O,
              onChange: V,
              moreInfo: [
                "Current locked: "
                  .concat((0, y.FR)(eu, !0), " = ")
                  .concat(
                    (0, y.DB)(eu)
                      ? (0, y.az)((0, y.F6)(eu).div(eo), 0, 4)
                      : "0",
                    " "
                  )
                  .concat(M.poolId),
                "Withdraw ".concat(M.poolId, " Amount: ").concat(ev)
              ]
            }),
            X &&
              (0, N.jsx)(T, {
                handleUnlock: eh,
                maxUnlock: ed,
                unlocking: ee,
                isRepay: Q,
                showRepayModal: em,
                tokenName: M.underlyingTokenSymbol,
                poolId: M.poolId,
                onCancel: function () {
                  return H(!1);
                }
              }),
            R &&
              (0, N.jsx)(Z, {
                lockerInfo: E,
                refresh: function () {
                  return z(function (e) {
                    return e + 1;
                  });
                },
                lockerContract: B,
                maxUnlock: ed,
                tokenName: M.deptTokenSymbol,
                withdrawAmount: O,
                onCancel: function () {
                  return L(!1);
                }
              }),
            (0, N.jsxs)("div", {
              className: C().actions,
              children: [
                (0, N.jsxs)("div", {
                  className: "flex flex-col gap-1 mb-4 items-start",
                  children: [
                    (0, N.jsxs)("div", {
                      className: "flex items-center gap-1",
                      children: [
                        (0, N.jsx)("span", { children: "Harvest" }),
                        (0, N.jsx)(m.Z, {
                          placement: "top",
                          color: "#5ad0ff",
                          title:
                            "Harvesting happens periodically without user intervention so normally manual harvest is not necessary.  Triggering a harvest before withdrawal ensures you get the maximum amount, but costs gas and may not be worth it."
                        })
                      ]
                    }),
                    (0, N.jsxs)("p", {
                      className: "text-left mb-0",
                      children: [
                        (0, N.jsx)("div", {
                          children: (0, N.jsxs)("span", {
                            children: [
                              "Withdrawing before harvesting will give up the unharvested rewards",
                              (0, N.jsxs)("span", {
                                className: o()(
                                  "ml-1",
                                  "default" === w ? "text-black" : "text-white"
                                ),
                                children: [(0, y.FR)(U.user), " canUSD"]
                              })
                            ]
                          })
                        }),
                        (0, N.jsx)("div", {
                          children: (0, N.jsxs)("span", {
                            children: [
                              "Total unharvested rewards",
                              (0, N.jsxs)("span", {
                                className: o()(
                                  "ml-1",
                                  "default" === w ? "text-black" : "text-white"
                                ),
                                children: [(0, y.FR)(U.total), " canUSD"]
                              })
                            ]
                          })
                        })
                      ]
                    })
                  ]
                }),
                (0, N.jsx)(p.Z, {
                  width: "250px",
                  style: { marginRight: 20 },
                  loading: er,
                  disabled: !ey,
                  onClick: eg,
                  children: "Harvest"
                }),
                (0, N.jsx)(p.Z, {
                  width: "250px",
                  loading: ee,
                  disabled: !ef,
                  onClick: ep,
                  children: "Withdraw"
                })
              ]
            })
          ]
        });
      }
      function R(e) {
        var t,
          n,
          a,
          s,
          i = (0, S.Z)().lpPrice,
          c = e.metaCleverLockerContract,
          p = e.lockerInfo.baseInfo.YieldStrategyIndex,
          m = (0, j.Z)(),
          h = m.lockTokenName,
          _ = m.poolConfig,
          w = (0, k.a3)(),
          T = w.contract,
          Z = w.address,
          A = (0, r.useState)("0.3"),
          R = A[0],
          L = A[1],
          E = (0, r.useState)(0),
          B = E[0],
          M = E[1],
          D = (0, r.useState)(0),
          O = D[0],
          V = D[1],
          P = (0, I.Z)(),
          U = P.currentAccount,
          G = P.isAllReady,
          W = (0, r.useState)(""),
          q = W[0],
          z = W[1],
          Y = (0, r.useState)(0),
          X = Y[0],
          H = Y[1],
          J = (0, r.useState)(0),
          Q = J[0],
          K = J[1],
          $ = (0, r.useState)(!1),
          ee = $[0],
          et = $[1],
          en = (0, r.useState)(""),
          er = en[0],
          ea = en[1],
          es = (0, r.useState)(_.depositTokens[0]),
          ei = es[0],
          eo = es[1];
        (0, r.useEffect)(
          function () {
            try {
              var e =
                _.depositTokens.find(function (e) {
                  return e.symbol == er;
                }) || _.depositTokens[0];
              ea(e.symbol), eo(e);
            } catch (e) {}
          },
          [er, _.depositTokens]
        );
        var el = ei.needZap ? Z : _.metaCleverAddress,
          ec = (0, x.d)(ei.address, "-", { lpGaugeAddress: el });
        (0, r.useEffect)(
          function () {
            null == e || e.refresh();
          },
          [Q]
        );
        var eu = (0, F.Z)({
            approveAmount: q,
            allowance: ec.allowance,
            tokenContract: ec.contract,
            approveAddress: el
          }),
          ed = eu.refreshTrigger,
          ef = eu.BtnWapper;
        (0, r.useEffect)(
          function () {
            K(function (e) {
              return e + 1;
            });
          },
          [ed]
        ),
          (0, r.useEffect)(
            function () {
              K(function (e) {
                return e + 1;
              }),
                z("");
            },
            [X]
          );
        var ep =
            (0, y.F6)(q).isGreaterThan(0) &&
            (0, y.F6)(q).isLessThanOrEqualTo(ec.balance),
          em =
            ((t = (0, l.Z)(
              u().mark(function e(t) {
                var n, r, a, s, o, l, c, d;
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((e.prev = 0),
                            (n = (0, y.F6)(q || 0).toFixed(0, 1)),
                            !((ep && ei.needZap) || t))
                          ) {
                            e.next = 11;
                            break;
                          }
                          return (
                            (e.next = 5),
                            T.methods
                              .depositCLever(
                                _.metaCleverAddress,
                                p,
                                ei.address,
                                n,
                                _.underlyingAssets,
                                ei.routes,
                                0
                              )
                              .call({
                                from: U,
                                value: g.Z.zeroAddress === ec.address ? n : 0
                              })
                          );
                        case 5:
                          return (
                            (s = e.sent),
                            (o = (0, y.DB)(s) ? (0, y.F6)(s) : (0, y.F6)(0)),
                            (l =
                              null !==
                                (r =
                                  null ===
                                    (a =
                                      i[
                                        _.underlyingAssets.toLocaleLowerCase()
                                      ]) || void 0 === a
                                    ? void 0
                                    : a.usd) && void 0 !== r
                                ? r
                                : 1),
                            (c = ((0, y.F6)(o) || (0, y.F6)(0)).multipliedBy(
                              (0, y.F6)(1).minus((0, y.F6)(R).dividedBy(100))
                            )),
                            (d = (0, y.F6)(c).times(l)),
                            e.abrupt("return", {
                              shares: s,
                              sharesLpNum: c,
                              sharesTvl: d
                            })
                          );
                        case 11:
                          return e.abrupt("return", {
                            shares: (0, y.F6)(0),
                            sharesLpNum: (0, y.F6)(0),
                            sharesTvl: (0, y.F6)(0)
                          });
                        case 14:
                          return (
                            (e.prev = 14),
                            (e.t0 = e.catch(0)),
                            console.log(e.t0),
                            e.abrupt("return", {
                              shares: (0, y.F6)(0),
                              sharesLpNum: (0, y.F6)(0),
                              sharesTvl: (0, y.F6)(0)
                            })
                          );
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 14]]
                );
              })
            )),
            function (e) {
              return t.apply(this, arguments);
            });
        (0, d.Z)(
          function () {
            em().then(function (e) {
              var t = e.sharesLpNum;
              V(e.sharesTvl.toFixed(0)), M(t.toFixed(0));
            });
          },
          [q, ep, R],
          { wait: 1e3 }
        );
        var ev =
            ((n = (0, l.Z)(
              u().mark(function e() {
                var t, n, r, a;
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (G) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            et(!0),
                            (t = (0, y.F6)(q || 0).toFixed(0)),
                            (e.next = 6),
                            em(!0)
                          );
                        case 6:
                          return (
                            (n = e.sent.sharesLpNum.toFixed(0, 1)),
                            (e.prev = 9),
                            (r = T.methods.depositCLever(
                              _.metaCleverAddress,
                              p,
                              ei.address,
                              t,
                              _.underlyingAssets,
                              ei.routes,
                              n
                            )),
                            (e.next = 13),
                            r.estimateGas({
                              from: U,
                              value: g.Z.zeroAddress === ei.address ? t : 0
                            })
                          );
                        case 13:
                          return (
                            (a = parseInt(1.4 * e.sent, 10) || 0),
                            (e.next = 17),
                            (0, b.Z)(
                              function () {
                                return r.send({
                                  from: U,
                                  gas: a,
                                  value: g.Z.zeroAddress === ec.address ? t : 0
                                });
                              },
                              { key: "farm", action: "zapAndDeposit" }
                            )
                          );
                        case 17:
                          et(!1),
                            K(function (e) {
                              return e + 1;
                            }),
                            H(function (e) {
                              return e + 1;
                            }),
                            (e.next = 27);
                          break;
                        case 22:
                          (e.prev = 22),
                            (e.t0 = e.catch(9)),
                            console.log(e.t0),
                            et(!1),
                            (0, b.c)("error_zapAndDeposit", e.t0);
                        case 27:
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
              return n.apply(this, arguments);
            }),
          eh =
            ((a = (0, l.Z)(
              u().mark(function e() {
                var t, n, r;
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (G) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (!ei.needZap) {
                            e.next = 5;
                            break;
                          }
                          return ev(), e.abrupt("return");
                        case 5:
                          return (
                            et(!0),
                            (t = (0, y.F6)(q || 0).toFixed(0, 1)),
                            (e.prev = 7),
                            (n = c.methods.deposit(p, U, t.toString(), 0, !1)),
                            (e.next = 11),
                            n.estimateGas({ from: U })
                          );
                        case 11:
                          return (
                            (r = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 15),
                            (0, b.Z)(
                              function () {
                                return n.send({ from: U, gas: r });
                              },
                              { key: h.toLowerCase(), action: "deposit" }
                            )
                          );
                        case 15:
                          et(!1),
                            K(function (e) {
                              return e + 1;
                            }),
                            H(function (e) {
                              return e + 1;
                            }),
                            (e.next = 24);
                          break;
                        case 20:
                          (e.prev = 20),
                            (e.t0 = e.catch(7)),
                            et(!1),
                            (0, b.c)(
                              "error_".concat(h.toLowerCase(), "_deposit"),
                              e.t0
                            );
                        case 24:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[7, 20]]
                );
              })
            )),
            function () {
              return a.apply(this, arguments);
            });
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(f.Z, {
              placeholder: "Amount to deposit",
              hidePercent: !0,
              showMax: !0,
              options: _.depositTokens.map(function (e) {
                return e.symbol;
              }),
              maxAmount: null == ec ? void 0 : ec.balance,
              decimals: ei.decimals,
              selectedChange: function (e) {
                return ea(e);
              },
              selectedToken: er,
              clearTrigger: X,
              onChange: z,
              moreInfo: [
                "Available: "
                  .concat(
                    (0, y.FR)(
                      null == ec ? void 0 : ec.balance,
                      !1,
                      null !== (s = ei.decimals) && void 0 !== s ? s : 18
                    ),
                    " "
                  )
                  .concat(ei.symbol)
              ]
            }),
            ei.needZap &&
              (0, N.jsx)(v.Z, {
                zapTitle: "Zap Transaction Info",
                slippage: R,
                slippageChange: function (e) {
                  return L(e);
                },
                minAmount: (0, y.az)(B, 18, 4),
                minLpAmountTvl: (0, y.az)(O, 18, 4),
                isLpMinAmount: !0,
                tokenName: h,
                zapType: "Deposit"
              }),
            (0, N.jsx)("div", {
              className: "text-center",
              children: (0, N.jsx)("div", {
                className: o()(
                  "flex justify-center align-middle xl:absolute flex-col items-center left-0 right-0",
                  C().bottomArea
                ),
                children: (0, N.jsx)(ef, {
                  width: "280px",
                  switchStyle: {},
                  loading: ee,
                  disabled: !ep,
                  onClick: eh,
                  children: "Deposit"
                })
              })
            })
          ]
        });
      }
      var L = function (e) {
          var t = e.lockerInfo,
            n = e.metaCleverLockerContract,
            a = e.refresh,
            s = (0, j.Z)().lockTokenName,
            i = (0, r.useState)("deposit"),
            l = i[0],
            c = i[1];
          return (0, N.jsxs)("div", {
            className: C().comp,
            children: [
              (0, N.jsx)(function () {
                return (0,
                N.jsxs)(N.Fragment, { children: [(0, N.jsxs)("div", { className: C().title, children: ["Deposit ", s] }), (0, N.jsxs)("div", { className: C().topInfo, children: [(0, N.jsxs)("div", { className: C().desc, children: ["Deposit ", s, " to automate your ", s, " yield harvesting, plus instantly claim your future yield!"] }), (0, N.jsxs)("div", { className: C().desc, children: ["Claiming future yield will require ", s, " to stay deposited while it is earned.", (0, N.jsx)(m.Z, { style: { width: "210px" }, title: "seeFAQ" })] })] })] });
              }, {}),
              (0, N.jsx)(function () {
                return (0, N.jsxs)("div", {
                  className: C().tabs,
                  children: [
                    (0, N.jsx)("div", {
                      onClick: function () {
                        return c("deposit");
                      },
                      className: o()(C().tab, "deposit" === l && C().active),
                      children: "Deposit"
                    }),
                    (0, N.jsx)("div", {
                      onClick: function () {
                        return c("withdraw");
                      },
                      className: o()(C().tab, "withdraw" === l && C().active),
                      children: "Withdraw"
                    })
                  ]
                });
              }, {}),
              (0, N.jsx)(h.Z, {
                visible: "deposit" === l,
                children: (0, N.jsx)(R, {
                  lockerInfo: t,
                  refresh: a,
                  metaCleverLockerContract: n
                })
              }),
              (0, N.jsx)(h.Z, {
                visible: "withdraw" === l,
                children: (0, N.jsx)(A, {
                  lockerInfo: t,
                  refresh: a,
                  metaCleverLockerContract: n
                })
              })
            ]
          });
        },
        E = n(94874),
        B = n(40320),
        M = n.n(B);
      function D(e) {
        var t,
          n,
          a,
          s = e.lockerInfo,
          i = e.metaCleverLockerContract,
          c = (0, j.Z)(),
          d = c.lockTokenName,
          v = c.clevTokenName,
          h = c.poolConfig,
          x = (0, I.Z)(),
          g = x.currentAccount,
          F = x.isAllReady,
          k = (0, r.useState)(""),
          _ = k[0],
          C = k[1],
          w = (0, r.useState)(0),
          T = w[0],
          Z = w[1],
          S = (0, r.useState)(!1),
          A = S[0],
          R = S[1],
          L = (0, r.useState)(0),
          B = L[0],
          D = L[1],
          O = s.baseInfo,
          V = void 0 === O ? {} : O,
          P = s.userInfo,
          U = P.totalDebt,
          G = P.earnedAmount,
          W = P.claimableAmount,
          q =
            null === (n = s.userInfo) || void 0 === n
              ? void 0
              : n.claimableAmount,
          z = (0, r.useMemo)(
            function () {
              if (V.minterCleverInfo) {
                var e = (0, y.F6)(V.minterCleverInfo[0]).minus(
                  V.minterCleverInfo[1]
                );
                return [
                  (0, y.F6)(W).plus(G).isGreaterThanOrEqualTo(e)
                    ? e
                    : (0, y.F6)(W).plus(G),
                  e
                ];
              }
              return [!1, 0];
            },
            [V, _, W]
          )[0],
          Y = (0, r.useMemo)(
            function () {
              if ((0, y.F6)(U).isLessThanOrEqualTo(q)) return G;
              var e = (0, y.F6)(G).minus(U);
              return (0, y.F6)(e).isLessThanOrEqualTo(0) ? (0, y.F6)(0) : e;
            },
            [U, G]
          );
        (0, r.useEffect)(
          function () {
            null == e || e.refresh();
          },
          [T]
        );
        var X =
            ((t = (0, l.Z)(
              u().mark(function e() {
                var t, n, r;
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (F) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (t = (0, y.F6)(_ || 0)
                              .toFixed(0, 1)
                              .toString()),
                            R(!0),
                            (e.prev = 4),
                            (n = i.methods.mint(g, t, !1)),
                            (e.next = 8),
                            n.estimateGas({ from: g })
                          );
                        case 8:
                          return (
                            (r = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 12),
                            (0, b.Z)(
                              function () {
                                return n.send({ from: g, gas: r });
                              },
                              { key: v, action: "claim" }
                            )
                          );
                        case 12:
                          R(!1),
                            C(""),
                            Z(function (e) {
                              return e + 1;
                            }),
                            (e.next = 21);
                          break;
                        case 17:
                          (e.prev = 17),
                            (e.t0 = e.catch(4)),
                            R(!1),
                            (0, b.c)("".concat(v, "_borrow"), e.t0);
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
          H =
            (0, y.F6)(_).isGreaterThan(0) &&
            (0, y.F6)(_).isLessThanOrEqualTo(z),
          J = (0, r.useMemo)(
            function () {
              return !_ ||
                (0, y.F6)(_).isLessThanOrEqualTo(0) ||
                (0, y.F6)(_).isLessThan((0, y.F6)(Y))
                ? 0
                : (0, y.F6)(_).minus(Y).toString(10);
            },
            [_]
          ),
          Q = (0, r.useMemo)(
            function () {
              return !_ || (0, y.F6)(_).isLessThanOrEqualTo(0)
                ? 0
                : (0, y.F6)(_).isLessThan(Y)
                ? (0, y.F6)(_).toString(10)
                : Y.toString(10);
            },
            [_]
          ),
          K = (0, y.F6)(z).isLessThan(_)
            ? [
                (0, N.jsx)("span", {
                  className: "text-warn",
                  children: "Maximum is: ".concat((0, y.FR)(z), " ").concat(v)
                })
              ]
            : [
                (0, N.jsxs)("div", {
                  className: "mb-1",
                  children: ["Total Claimable: ", (0, y.FR)(z), " ", v]
                }),
                (0, N.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    "You will get ",
                    (0, y.FR)(Q),
                    " ",
                    v,
                    " accrued and",
                    " ",
                    (0, y.FR)(J),
                    " ",
                    v,
                    " future yield"
                  ]
                }),
                (0, N.jsxs)("div", {
                  className: "text-sm",
                  children: [
                    "Outstanding debt can be manually repaid early, but doing so will incur a fee.",
                    (0, N.jsx)(m.Z, {
                      style: { width: "210px" },
                      title: "seeFAQ"
                    })
                  ]
                }),
                (0, N.jsxs)("div", {
                  className: "mb-1 text-sm",
                  children: [
                    v,
                    " can be swapped to ",
                    h.underlyingTokenSymbol,
                    " ",
                    "in the \xa0",
                    (0, N.jsx)("a", {
                      style: { textDecoration: "underline", color: "#606060" },
                      href: "/furnace",
                      children: "Furnace"
                    }),
                    "\xa0 or ",
                    (0, N.jsx)("span", {
                      style: { color: "#606060" },
                      children: "on Curve"
                    }),
                    (0, N.jsx)(m.Z, {
                      placement: "left",
                      title: "During beta period Curve swap is unavailable"
                    })
                  ]
                })
              ],
          $ = (0, y.F6)(U).isLessThan(0) ? 0 : (0, y.F6)(U);
        return (0, N.jsxs)("div", {
          className: M().comp,
          children: [
            (0, N.jsxs)("div", {
              children: [
                (0, N.jsxs)("div", {
                  className: M().title,
                  children: ["Claim ", v]
                }),
                (0, N.jsxs)("div", {
                  className: M().topInfo,
                  children: [
                    (0, N.jsxs)("div", {
                      className: M().desc,
                      children: [
                        "Claim your accrued and future yields as ",
                        v,
                        "."
                      ]
                    }),
                    (0, N.jsxs)("div", {
                      className: o()("mt-8 mb-4", M().yieldBox),
                      children: [
                        (0, N.jsxs)("div", {
                          className: M().yieldTitle,
                          children: ["Yields(", v, ")"]
                        }),
                        (0, N.jsxs)("div", {
                          className: "text-sm",
                          children: [
                            (0, N.jsxs)("div", {
                              className: "flex items-center gap-1 mb-2",
                              children: [
                                "Future",
                                (0, N.jsx)(m.Z, {
                                  title: "When locked ".concat(
                                    d,
                                    " rewards are harvested, outstanding debt is reduced and claimable increases"
                                  )
                                }),
                                ":",
                                (0, N.jsxs)("div", {
                                  className: "ml-4",
                                  children: [
                                    (0, N.jsxs)("div", {
                                      className: "mb-2",
                                      children: [
                                        (0, y.FR)(
                                          null === (a = s.userInfo) ||
                                            void 0 === a
                                            ? void 0
                                            : a.claimableAmount
                                        ),
                                        " claimable"
                                      ]
                                    }),
                                    (0, N.jsxs)("div", {
                                      children: [
                                        (0, y.FR)($),
                                        " outstanding debt"
                                      ]
                                    })
                                  ]
                                })
                              ]
                            }),
                            (0, N.jsxs)("div", {
                              className: "flex items-center gap-1",
                              children: [
                                "Accrued",
                                " ",
                                (0, N.jsx)(m.Z, {
                                  title: "".concat(
                                    v,
                                    " is only accrued when outstanding debt is 0"
                                  )
                                }),
                                ":",
                                (0, N.jsxs)("div", {
                                  className: "ml-4",
                                  children: [
                                    (0, N.jsxs)("a", {
                                      onClick: function () {
                                        D(Y.toString());
                                      },
                                      children: [" ", (0, y.FR)(Y), " "]
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
                V.minterCleverInfo &&
                  (0, N.jsx)(E.Z, {
                    current: (0, y.FR)(V.minterCleverInfo[1]) || "-",
                    cap: (0, y.FR)(V.minterCleverInfo[0]) || "-",
                    token: v
                  }),
                (0, N.jsx)("div", {
                  className: M().tabs,
                  children: (0, N.jsx)("div", {
                    className: o()(M().tab, M().active),
                    children: "Claim"
                  })
                }),
                (0, N.jsx)(f.Z, {
                  placeholder: "Amount of ".concat(v, " to claim"),
                  hidePercent: !0,
                  showMax: !0,
                  clearTrigger: T,
                  maxAmount: z,
                  value: _,
                  changeValue: B,
                  onChange: function (e) {
                    (0, y.F6)(e).isEqualTo(Y) || D(0), C(e);
                  },
                  moreInfo: K
                })
              ]
            }),
            (0, N.jsx)("div", {
              className: M().actions,
              children: (0, N.jsx)(p.Z, {
                onClick: X,
                loading: A,
                width: "360px",
                disabled: !H,
                children: "Claim"
              })
            })
          ]
        });
      }
      var O = n(51583),
        V = n(10480),
        P = n(25688),
        U = n(91827),
        G = n(91142),
        W = n.n(G);
      function q() {
        var e,
          t,
          n = (0, j.Z)(),
          a = n.lockTokenName,
          s = n.poolConfig,
          i = (0, r.useState)(0),
          l = (i[0], i[1]),
          c = (0, U.Z)(s.curveDepositUrl),
          u =
            null !==
              (e =
                null === (t = (0, V.Z)(s.underlyingPriceId)) || void 0 === t
                  ? void 0
                  : t.usd) && void 0 !== e
              ? e
              : 0,
          d = (0, O.W)(null == s ? void 0 : s.metaCleverAddress),
          f = d.lockInfo,
          p = d.metaCleverLockerContract,
          v = f.baseInfo,
          h = v.totalLocked,
          x = v.totalShare,
          g = v.strategyUnderlyingPrice,
          b = v.YieldStrategyIndex,
          F = f.userInfo,
          k = F.claimableAmount,
          _ = F.earnedAmount,
          C = F.sharesInfo,
          w =
            null == C
              ? void 0
              : C.find(function (e) {
                  return e.index == b;
                }),
          T = (0, y.F6)(null == w ? void 0 : w.share)
            .div(x)
            .multipliedBy(h),
          I = [
            { key: "APR", title: "APR", value: "".concat(c, "%") },
            {
              key: "Total Locked",
              title: (0, N.jsxs)(N.Fragment, {
                children: [
                  "Total Locked",
                  " ",
                  (0, N.jsx)(m.Z, {
                    title: ""
                      .concat((0, y.az)((0, y.F6)(h).div(g), 0, 4), " ")
                      .concat(s.poolId)
                  })
                ]
              }),
              value: "".concat((0, y.FR)((0, y.F6)(h), !0))
            },
            {
              key: "My Locked",
              title: (0, N.jsxs)(N.Fragment, {
                children: [
                  "My Locked",
                  " ",
                  (0, N.jsx)(m.Z, {
                    title: ""
                      .concat((0, y.az)((0, y.F6)(T).div(g), 0, 4), " ")
                      .concat(s.poolId)
                  })
                ]
              }),
              value: "".concat((0, y.FR)((0, y.F6)(T), !0))
            },
            {
              key: "My Claimable",
              title: (0, N.jsxs)(N.Fragment, {
                children: [
                  "My Claimable",
                  " ",
                  (0, N.jsx)(m.Z, {
                    title: ""
                      .concat((0, y.FR)(k), " ")
                      .concat(s.deptTokenSymbol)
                  })
                ]
              }),
              value: "".concat((0, y.FR)((0, y.F6)(k).multipliedBy(u), !0))
            },
            {
              key: "My Earned",
              title: (0, N.jsxs)(N.Fragment, {
                children: [
                  "My Earned",
                  " ",
                  (0, N.jsx)(m.Z, {
                    title: ""
                      .concat((0, y.FR)(_, !1), " ")
                      .concat(s.deptTokenSymbol)
                  })
                ]
              }),
              value: "".concat((0, y.FR)((0, y.F6)(_).multipliedBy(u), !0))
            }
          ];
        return (0, N.jsx)("div", {
          className: W().vaultPage,
          children: (0, N.jsxs)("div", {
            className: "container",
            children: [
              (0, N.jsx)(P.Z, {
                title: "CLever ".concat(a),
                subtitle: "Claim Future ".concat(a, " Yields Today!")
              }),
              (0, N.jsx)("div", {
                className: o()(W().analytics, "flex gap-2 mb-8 justify-center"),
                children: I.map(function (e) {
                  return (0,
                  N.jsx)("div", { className: W().item, children: (0, N.jsxs)("div", { className: W().itemInner, children: [(0, N.jsx)("div", { className: W().title, children: e.title }), (0, N.jsx)("div", { className: W().value, children: e.value })] }) }, e.key);
                })
              }),
              (0, N.jsxs)("div", {
                className: "flex gap-8 flex-col xl:flex-row",
                children: [
                  (0, N.jsx)(L, {
                    lockerInfo: f,
                    metaCleverLockerContract: p,
                    apr: c,
                    refresh: function () {
                      return l(function (e) {
                        return e + 1;
                      });
                    }
                  }),
                  (0, N.jsx)(D, {
                    lockerInfo: f,
                    metaCleverLockerContract: p,
                    refresh: function () {
                      return l(function (e) {
                        return e + 1;
                      });
                    }
                  })
                ]
              })
            ]
          })
        });
      }
      function z() {
        return (0, N.jsxs)(r.Fragment, {
          children: [
            (0, N.jsx)(s(), {
              children: (0, N.jsx)("title", {
                children: "Canny | curve, Convex | High performance - Vaults"
              })
            }),
            (0, N.jsx)(q, {})
          ]
        });
      }
    },
    65366: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/clever/[token]",
        function () {
          return n(75925);
        }
      ]);
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
    69476: function (e) {
      e.exports = {
        slippageInfo: "styles_slippageInfo__wi70h",
        slippageInput: "styles_slippageInput__a9T67"
      };
    },
    65865: function () {},
    40320: function (e) {
      e.exports = {
        comp: "styles_comp__XDiZg",
        title: "styles_title__yCNcq",
        divider: "styles_divider__ign1t",
        topInfo: "styles_topInfo__UUMF4",
        desc: "styles_desc__71omm",
        tabs: "styles_tabs__Jg4LQ",
        tab: "styles_tab__XVVW2",
        active: "styles_active__0J840",
        actions: "styles_actions__e5RVh",
        yieldBox: "styles_yieldBox__2JQiU",
        yieldTitle: "styles_yieldTitle___0goF"
      };
    },
    68208: function (e) {
      e.exports = {
        comp: "styles_comp__3nxgX",
        highlight: "styles_highlight__M_xqq",
        title: "styles_title__642EO",
        desc: "styles_desc__waPYu",
        bottomArea: "styles_bottomArea__dOG5c",
        tabs: "styles_tabs__kJMP_",
        tab: "styles_tab__Zpg39",
        active: "styles_active__L_5d1",
        actions: "styles_actions__H9zmf",
        topInfo: "styles_topInfo__LWqgl"
      };
    },
    91142: function (e) {
      e.exports = {
        analytics: "styles_analytics__QpmuR",
        item: "styles_item__h1GLv",
        title: "styles_title__IrsAG",
        value: "styles_value__FKlsu",
        itemInner: "styles_itemInner__49N7g",
        banner: "styles_banner__JJ6dd",
        logo: "styles_logo__sujvx",
        img: "styles_img__5Cp3n",
        logoText1: "styles_logoText1__0vcaB",
        logoText2: "styles_logoText2__7g8Wh"
      };
    }
  },
  function (e) {
    e.O(0, [3662, 8795, 3439, 9190, 9774, 2888, 179], function () {
      return e((e.s = 65366));
    }),
      (_N_E = e.O());
  }
]);
