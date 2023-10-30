(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3156],
  {
    40695: function (e, t, n) {
      "use strict";
      var a = n(1413),
        s = n(67294),
        r = n(47612),
        i = n(7918),
        l = function (e, t) {
          return s.createElement(
            i.Z,
            (0, a.Z)((0, a.Z)({}, e), {}, { ref: t, icon: r.Z })
          );
        };
      (l.displayName = "CheckCircleOutlined"), (t.Z = s.forwardRef(l));
    },
    96159: function (e, t, n) {
      "use strict";
      n.d(t, {
        Tm: function () {
          return r;
        },
        l$: function () {
          return s;
        }
      });
      var a = n(67294),
        s = a.isValidElement;
      function r(e, t) {
        return s(e)
          ? a.cloneElement(e, "function" == typeof t ? t(e.props || {}) : t)
          : e;
      }
    },
    68349: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return g;
        }
      });
      var a,
        s = n(15671),
        r = n(43144),
        i = n(97326),
        l = n(32531),
        o = n(73568),
        c = n(67294),
        d = n(44958),
        u = n(42550),
        p = n(75164),
        m = 0,
        f = {};
      function v(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = m++,
          a = t;
        return (
          (f[n] = (0, p.Z)(function t() {
            (a -= 1) <= 0 ? (e(), delete f[n]) : (f[n] = (0, p.Z)(t));
          })),
          n
        );
      }
      (v.cancel = function (e) {
        void 0 !== e && (p.Z.cancel(f[e]), delete f[e]);
      }),
        (v.ids = f);
      var x = n(61975),
        h = n(96159);
      function y(e) {
        return !e || null === e.offsetParent || e.hidden;
      }
      var g = (function (e) {
        (0, l.Z)(n, e);
        var t = (0, o.Z)(n);
        function n() {
          var e;
          return (
            (0, s.Z)(this, n),
            (e = t.apply(this, arguments)),
            (e.containerRef = c.createRef()),
            (e.animationStart = !1),
            (e.destroyed = !1),
            (e.onClick = function (t, n) {
              if (!(!t || y(t) || t.className.indexOf("-leave") >= 0)) {
                var s,
                  r,
                  l,
                  o = e.props.insertExtraNode;
                e.extraNode = document.createElement("div");
                var c = (0, i.Z)(e).extraNode,
                  u = e.context.getPrefixCls;
                c.className = "".concat(u(""), "-click-animating-node");
                var p = e.getAttributeName();
                if (
                  (t.setAttribute(p, "true"),
                  n &&
                    "#ffffff" !== n &&
                    "rgb(255, 255, 255)" !== n &&
                    (!(s = (n || "").match(
                      /rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/
                    )) ||
                      !s[1] ||
                      !s[2] ||
                      !s[3] ||
                      !(s[1] === s[2] && s[2] === s[3])) &&
                    !/rgba\((?:\d*, ){3}0\)/.test(n) &&
                    "transparent" !== n)
                ) {
                  c.style.borderColor = n;
                  var m =
                      (null === (r = t.getRootNode) || void 0 === r
                        ? void 0
                        : r.call(t)) || t.ownerDocument,
                    f =
                      m instanceof Document
                        ? m.body
                        : null !== (l = m.firstChild) && void 0 !== l
                        ? l
                        : m;
                  a = (0, d.hq)(
                    "\n      ["
                      .concat(
                        u(""),
                        "-click-animating-without-extra-node='true']::after, ."
                      )
                      .concat(
                        u(""),
                        "-click-animating-node {\n        --antd-wave-shadow-color: "
                      )
                      .concat(n, ";\n      }"),
                    "antd-wave",
                    { csp: e.csp, attachTo: f }
                  );
                }
                o && t.appendChild(c),
                  ["transition", "animation"].forEach(function (n) {
                    t.addEventListener(
                      "".concat(n, "start"),
                      e.onTransitionStart
                    ),
                      t.addEventListener(
                        "".concat(n, "end"),
                        e.onTransitionEnd
                      );
                  });
              }
            }),
            (e.onTransitionStart = function (t) {
              if (!e.destroyed) {
                var n = e.containerRef.current;
                t && t.target === n && !e.animationStart && e.resetEffect(n);
              }
            }),
            (e.onTransitionEnd = function (t) {
              t && "fadeEffect" === t.animationName && e.resetEffect(t.target);
            }),
            (e.bindAnimationEvent = function (t) {
              if (
                !(
                  !t ||
                  !t.getAttribute ||
                  t.getAttribute("disabled") ||
                  t.className.indexOf("disabled") >= 0
                )
              ) {
                var n = function (n) {
                  if (!("INPUT" === n.target.tagName || y(n.target))) {
                    e.resetEffect(t);
                    var a =
                      getComputedStyle(t).getPropertyValue(
                        "border-top-color"
                      ) ||
                      getComputedStyle(t).getPropertyValue("border-color") ||
                      getComputedStyle(t).getPropertyValue("background-color");
                    (e.clickWaveTimeoutId = window.setTimeout(function () {
                      return e.onClick(t, a);
                    }, 0)),
                      v.cancel(e.animationStartId),
                      (e.animationStart = !0),
                      (e.animationStartId = v(function () {
                        e.animationStart = !1;
                      }, 10));
                  }
                };
                return (
                  t.addEventListener("click", n, !0),
                  {
                    cancel: function () {
                      t.removeEventListener("click", n, !0);
                    }
                  }
                );
              }
            }),
            (e.renderWave = function (t) {
              var n = t.csp,
                a = e.props.children;
              if (((e.csp = n), !c.isValidElement(a))) return a;
              var s = e.containerRef;
              return (
                (0, u.Yr)(a) && (s = (0, u.sQ)(a.ref, e.containerRef)),
                (0, h.Tm)(a, { ref: s })
              );
            }),
            e
          );
        }
        return (
          (0, r.Z)(n, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this.containerRef.current;
                e &&
                  1 === e.nodeType &&
                  (this.instance = this.bindAnimationEvent(e));
              }
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.instance && this.instance.cancel(),
                  this.clickWaveTimeoutId &&
                    clearTimeout(this.clickWaveTimeoutId),
                  (this.destroyed = !0);
              }
            },
            {
              key: "getAttributeName",
              value: function () {
                var e = this.context.getPrefixCls;
                return this.props.insertExtraNode
                  ? "".concat(e(""), "-click-animating")
                  : "".concat(e(""), "-click-animating-without-extra-node");
              }
            },
            {
              key: "resetEffect",
              value: function (e) {
                var t = this;
                if (e && e !== this.extraNode && e instanceof Element) {
                  var n = this.props.insertExtraNode,
                    s = this.getAttributeName();
                  e.setAttribute(s, "false"),
                    a && (a.innerHTML = ""),
                    n &&
                      this.extraNode &&
                      e.contains(this.extraNode) &&
                      e.removeChild(this.extraNode),
                    ["transition", "animation"].forEach(function (n) {
                      e.removeEventListener(
                        "".concat(n, "start"),
                        t.onTransitionStart
                      ),
                        e.removeEventListener(
                          "".concat(n, "end"),
                          t.onTransitionEnd
                        );
                    });
                }
              }
            },
            {
              key: "render",
              value: function () {
                return c.createElement(x.C, null, this.renderWave);
              }
            }
          ]),
          n
        );
      })(c.Component);
      g.contextType = x.E_;
    },
    94594: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return j;
        }
      });
      var a = n(87462),
        s = n(4942),
        r = n(67294),
        i = n(97685),
        l = n(91),
        o = n(94184),
        c = n.n(o),
        d = n(3129),
        u = n(15105),
        p = r.forwardRef(function (e, t) {
          var n,
            a = e.prefixCls,
            o = void 0 === a ? "rc-switch" : a,
            p = e.className,
            m = e.checked,
            f = e.defaultChecked,
            v = e.disabled,
            x = e.loadingIcon,
            h = e.checkedChildren,
            y = e.unCheckedChildren,
            g = e.onClick,
            j = e.onChange,
            b = e.onKeyDown,
            _ = (0, l.Z)(e, [
              "prefixCls",
              "className",
              "checked",
              "defaultChecked",
              "disabled",
              "loadingIcon",
              "checkedChildren",
              "unCheckedChildren",
              "onClick",
              "onChange",
              "onKeyDown"
            ]),
            N = (0, d.Z)(!1, { value: m, defaultValue: f }),
            k = (0, i.Z)(N, 2),
            w = k[0],
            T = k[1];
          function C(e, t) {
            var n = w;
            return v || (T((n = e)), null == j || j(n, t)), n;
          }
          var F = c()(
            o,
            p,
            ((n = {}),
            (0, s.Z)(n, "".concat(o, "-checked"), w),
            (0, s.Z)(n, "".concat(o, "-disabled"), v),
            n)
          );
          return r.createElement(
            "button",
            Object.assign({}, _, {
              type: "button",
              role: "switch",
              "aria-checked": w,
              disabled: v,
              className: F,
              ref: t,
              onKeyDown: function (e) {
                e.which === u.Z.LEFT
                  ? C(!1, e)
                  : e.which === u.Z.RIGHT && C(!0, e),
                  null == b || b(e);
              },
              onClick: function (e) {
                var t = C(!w, e);
                null == g || g(t, e);
              }
            }),
            x,
            r.createElement(
              "span",
              { className: "".concat(o, "-inner") },
              w ? h : y
            )
          );
        });
      p.displayName = "Switch";
      var m = n(19267),
        f = n(68349),
        v = n(61975),
        x = n(97647),
        h = n(21687),
        y = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              0 > t.indexOf(a) &&
              (n[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var s = 0, a = Object.getOwnPropertySymbols(e);
              s < a.length;
              s++
            )
              0 > t.indexOf(a[s]) &&
                Object.prototype.propertyIsEnumerable.call(e, a[s]) &&
                (n[a[s]] = e[a[s]]);
          return n;
        },
        g = r.forwardRef(function (e, t) {
          var n,
            i = e.prefixCls,
            l = e.size,
            o = e.loading,
            d = e.className,
            u = e.disabled,
            g = y(e, ["prefixCls", "size", "loading", "className", "disabled"]);
          (0,
          h.Z)("checked" in g || !("value" in g), "Switch", "`value` is not a valid prop, do you mean `checked`?");
          var j = r.useContext(v.E_),
            b = j.getPrefixCls,
            _ = j.direction,
            N = r.useContext(x.Z),
            k = b("switch", i),
            w = r.createElement(
              "div",
              { className: "".concat(k, "-handle") },
              o &&
                r.createElement(m.Z, {
                  className: "".concat(k, "-loading-icon")
                })
            ),
            T = c()(
              ((n = {}),
              (0, s.Z)(n, "".concat(k, "-small"), "small" === (l || N)),
              (0, s.Z)(n, "".concat(k, "-loading"), o),
              (0, s.Z)(n, "".concat(k, "-rtl"), "rtl" === _),
              n),
              void 0 === d ? "" : d
            );
          return r.createElement(
            f.Z,
            { insertExtraNode: !0 },
            r.createElement(
              p,
              (0, a.Z)({}, g, {
                prefixCls: k,
                className: T,
                disabled: u || o,
                ref: t,
                loadingIcon: w
              })
            )
          );
        });
      (g.__ANT_SWITCH = !0), (g.displayName = "Switch");
      var j = g;
    },
    98268: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
        k: function () {
          return m;
        }
      });
      var a = n(4730),
        s = n(67294),
        r = n(94184),
        i = n.n(r),
        l = n(48282),
        o = n(63653),
        c = n.n(o),
        d = n(3612),
        u = n(85893),
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
      function m(e) {
        var t = e.name,
          n = e.value,
          a = e.extraClass;
        return (0, u.jsxs)("div", {
          className: "flex items-center gap-1",
          children: [
            (0, u.jsxs)("div", { children: [t, ": "] }),
            (0, u.jsx)("div", {
              className: "font-semibold ".concat(a),
              children: n
            })
          ]
        });
      }
      function f(e) {
        var t,
          n = e.defaultValue,
          r = e.balance,
          o = e.label,
          f = e.labelDes,
          v = e.token,
          x = e.vaultWithdrawFee,
          h = e.feeName,
          y = e.decimals,
          g = e.available,
          j = e.BottomElement,
          b = (e.calculatorLink, e.depositFor),
          _ = e.placeholder,
          N = e.withdrawFee,
          k = e.onChange,
          w = void 0 === k ? function () {} : k,
          T = e.hidePercent,
          C = e.ExtraButton,
          F = e.hideMax,
          A = e.reset,
          Z = (0, a.Z)(e, p),
          D = (0, s.useState)(0),
          B = D[0],
          E = D[1],
          L = (0, s.useState)(""),
          S = L[0],
          P = L[1];
        (0, s.useEffect)(
          function () {
            P(
              (0, d.F6)(n)
                .shiftedBy(-(null != y ? y : 18))
                .toFixed(3)
            ),
              w(n, 100);
          },
          [n]
        ),
          (0, s.useState)(
            function () {
              E(0);
            },
            [S]
          ),
          (0, s.useEffect)(
            function () {
              E(0), P(""), w(0);
            },
            [A]
          );
        var I = function (e) {
          if ((E(e), r && !(0, d.F6)(r).isZero() && !(0, d.F6)(r).isNaN())) {
            var t = (0, d.F6)(r).times(e).div(100);
            P((0, d.FR)(t, !1, null != y ? y : 18)), w(t, e);
          }
          if (g && !(0, d.F6)(g).isZero() && !(0, d.F6)(g).isNaN()) {
            var n = (0, d.F6)(g).times(e).div(100);
            P((0, d.FR)(n, !1, null != y ? y : 18)), w(n, e);
          }
        };
        return (0, u.jsxs)("div", {
          className: c().inputWrapper,
          style: null !== (t = Z.style) && void 0 !== t ? t : {},
          children: [
            (0, u.jsxs)("div", {
              className: c().inputTop,
              children: [
                !T &&
                  !(0, d.F6)(r).isNaN() &&
                  (0, u.jsx)(m, {
                    name: "Balance",
                    value: ""
                      .concat((0, d.FR)(r, !1, null != y ? y : 18), " ")
                      .concat(v),
                    extraClass: "color-blue"
                  }),
                !T &&
                  !(0, d.F6)(g).isNaN() &&
                  (0, u.jsx)(m, {
                    name: "Available",
                    value: ""
                      .concat((0, d.FR)(g, !1, null != y ? y : 18), " ")
                      .concat(v)
                  }),
                !T &&
                  (0, u.jsx)("div", {
                    className: c().percents,
                    children: [25, 50, 75, 100].map(function (e) {
                      return (0, u.jsxs)(
                        "div",
                        {
                          className: i()(c().percent, e === B && c().active),
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
            o &&
              (0, u.jsxs)("div", {
                className:
                  " form-label text-xl flex items-center justify-between",
                children: [
                  (0, u.jsx)("span", {
                    dangerouslySetInnerHTML: { __html: o }
                  }),
                  f
                ]
              }),
            (0, u.jsxs)("div", {
              className: "flex gap-4 my-3",
              children: [
                (0, u.jsxs)("div", {
                  className: "relative w-full",
                  children: [
                    (0, u.jsx)("input", {
                      onChange: function (e) {
                        E(0);
                        var t = e.target.value,
                          n = new RegExp(/,/g),
                          a = /[^\d.]/g;
                        n.test(t) && (t = t.replace(/,/g, "")),
                          a.test(t) && (t = t.replace(a, "")),
                          "0" === S &&
                            -1 === t.indexOf(".") &&
                            (t = t.slice(1)),
                          P(t),
                          w((0, d.F6)(t || 0).shiftedBy(null != y ? y : 18), B);
                      },
                      value: S,
                      placeholder: _
                    }),
                    (0, u.jsx)(l.Z, {
                      visible: T && !F,
                      children: (0, u.jsx)("a", {
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
                C && (0, u.jsx)(C, {})
              ]
            }),
            (0, u.jsxs)("div", {
              className: c().inputBottom,
              children: [
                j && (0, u.jsx)(j, {}),
                x &&
                  (0, u.jsx)(m, {
                    name: "".concat(h || "Vault Withdraw", " Fee"),
                    value: x || "-"
                  }),
                N &&
                  (0, u.jsx)(m, {
                    name: "".concat(h || "Withdraw", " Fee"),
                    value: N || "-"
                  }),
                b && (0, u.jsx)(m, { name: "Deposit for", value: b || "-" })
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
          return m;
        }
      });
      var a = n(67294),
        s = n(94184),
        r = n.n(s),
        i = n(98268),
        l = n(69476),
        o = n.n(l),
        c = n(85893);
      function d(e) {
        var t = e.slippage,
          n = e.slippageChange,
          s = (0, a.useState)(!1),
          r = s[0],
          i = s[1],
          l = (0, a.useState)(0),
          d = l[0],
          u = l[1],
          p = function (e) {
            e <= 50 && u(e);
          };
        return (0, c.jsxs)("div", {
          className: o().slippageInfo,
          children: [
            (0, c.jsx)("span", {
              className: "color-light-blue",
              children: "Slippage: "
            }),
            r
              ? (0, c.jsxs)("span", {
                  children: [
                    (0, c.jsx)("input", {
                      value: d,
                      type: "text",
                      className: o().slippageInput,
                      onChange: function (e) {
                        return p(e.target.value);
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
                r ? (n(d), i(!1)) : (u(t), i(!0));
              },
              children: r ? "Confirm" : "Edit"
            }),
            r &&
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
      var u = n(65865),
        p = n.n(u);
      function m(e) {
        var t = e.zapTitle,
          n = e.slippage,
          a = e.slippageChange,
          s = e.zapType,
          l = e.minAmount,
          o = e.isShowMinAmount,
          u = e.isLpMinAmount,
          m = e.tokenName,
          f = e.minLpAmountTvl;
        return (0, c.jsxs)("div", {
          className: r()(p().zapInfo, "mb-1"),
          children: [
            t &&
              (0, c.jsx)("div", {
                className: "font-semibold mt-6",
                children: t
              }),
            void 0 === o || o
              ? l &&
                (0, c.jsx)(i.k, {
                  name: "Minimum ".concat(s),
                  value: ""
                    .concat(0 === l ? "-" : l, " ")
                    .concat(
                      void 0 !== u && u
                        ? ""
                            .concat(m, "  ")
                            .concat(0 === l ? "" : "~$".concat(f))
                        : ""
                    )
                })
              : "",
            n && (0, c.jsx)(d, { slippage: n, slippageChange: a })
          ]
        });
      }
    },
    6783: function (e, t, n) {
      "use strict";
      var a = n(50029),
        s = n(87794),
        r = n.n(s),
        i = n(67294),
        l = n(70794),
        o = n(17e3),
        c = n(91622),
        d = n(43275),
        u = n(3612),
        p = n(75349);
      t.Z = function (e, t) {
        var n = (0, d.Z)(),
          s = n.currentAccount,
          m = n.isAllReady,
          f = (0, p.aH)().contract,
          v = (0, c.H)(),
          x = t.lpContract,
          h = t.depositAmount,
          y = t.poolLiquidity,
          g = t.totalveCLEV,
          j = t.veCLEVAmount,
          b = (0, i.useCallback)(
            (0, a.Z)(
              r().mark(function t() {
                var n, a, i, o, c, d, p, b, _, N, k;
                return r().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!(m && x)) {
                          t.next = 22;
                          break;
                        }
                        if (!((0, u.F6)(h).isZero() || (0, u.F6)(h).isNaN())) {
                          t.next = 3;
                          break;
                        }
                        return t.abrupt("return", 0);
                      case 3:
                        return (
                          (n = [
                            f.methods.balanceOf(s),
                            f.methods.totalSupply(),
                            x.methods.period_timestamp(0),
                            x.methods.working_balances(s),
                            x.methods.working_supply(),
                            x.methods.totalSupply()
                          ]),
                          (t.next = 6),
                          v.apply(void 0, n)
                        );
                      case 6:
                        return (
                          console.log(
                            "curve-dao > calc-contract-info",
                            (a = t.sent)
                          ),
                          (i = +a[3]),
                          (o = +a[4]),
                          (c = (0, u.F6)(y).plus(h)),
                          (d = (0, u.F6)(h).multipliedBy(0.4)),
                          (p = e || j),
                          (d = (0, u.F6)(c)
                            .multipliedBy(p)
                            .div(g)
                            .multipliedBy(0.6)
                            .plus(d)),
                          (d = l.Z.minimum(d, h)),
                          (b = (0, u.F6)(h).multipliedBy(40).div(100)),
                          (_ = (0, u.F6)(o).plus(b).minus(i)),
                          (N = (0, u.F6)(o).plus(d).minus(i)),
                          (k = (0, u.F6)(d)
                            .div(N)
                            .div((0, u.F6)(b).div(_))
                            .toString()),
                          t.abrupt(
                            "return",
                            (0, u.DB)(k) ? parseFloat(k).toFixed(2) : 0
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
            [f, s, e, t]
          );
        return (0, o.a)({
          queryKey: [
            "liquidityLimit",
            e,
            (null == x ? void 0 : x._address) || "",
            h || "",
            y || "",
            g || "",
            j || ""
          ],
          queryFn: b,
          initialData: 0
        }).data;
      };
    },
    3372: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return el;
          }
        });
      var a = n(67294),
        s = n(9008),
        r = n.n(s),
        i = n(25688),
        l = n(50029),
        o = n(87794),
        c = n.n(o),
        d = n(41664),
        u = n.n(d),
        p = n(94184),
        m = n.n(p),
        f = n(23109),
        v = n(3548),
        x = n(98268),
        h = n(59071),
        y = n.n(h),
        g = n(4624),
        j = n(3612),
        b = n(85893);
      function _(e) {
        var t = e.name,
          n = e.value,
          a = e.nocolon;
        return (0, b.jsxs)("div", {
          children: [
            (0, b.jsxs)("span", {
              className: "color-light-blue",
              children: [t, null != a ? a : ":"]
            }),
            n && (0, b.jsx)("span", { children: n })
          ]
        });
      }
      function N(e) {
        var t = e.hint,
          n = e.title,
          s = e.options,
          r = e.onChange,
          i = e.value,
          l = (0, a.useState)(!1),
          o = l[0],
          c = l[1],
          d = (0, g.Z)(s).tokenBalance,
          u = function (e) {
            r && (r(e), c(!1));
          },
          p = function (e, t, n, a) {
            var s = t.includes("/assets")
                ? t
                : "/assets/crypto-icons-stack.svg#".concat(t),
              r = { background: "#fff", borderRadius: "100%" },
              i = a.symbol.toLowerCase().indexOf("silo") > -1;
            return e
              ? (0, b.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, b.jsx)("img", {
                      src: s,
                      className: "w-6 mr-2",
                      alt: "icon",
                      style: i ? r : { borderRadius: "100%" }
                    }),
                    !n &&
                      (0, b.jsxs)("div", {
                        className:
                          "absolute bg-white right-1 bottom-0 p-1 w-4 h-4 rounded-full",
                        children: [
                          " ",
                          (0, b.jsx)("img", {
                            src: "/assets/tokens/clev.svg",
                            className: "w-2",
                            alt: "crv-logo"
                          })
                        ]
                      })
                  ]
                })
              : (0, b.jsx)("img", {
                  src: s,
                  className: "w-6 mr-2",
                  style: i ? r : { borderRadius: "100%" }
                });
          };
        return (0, b.jsxs)("div", {
          className: y().selectWrapper,
          children: [
            (0, b.jsx)("div", {
              className: y().selectTop,
              children: n && (0, b.jsx)(_, { name: n })
            }),
            (0, b.jsxs)("div", {
              className: y().selectBox,
              children: [
                (0, b.jsxs)("div", {
                  className: m()(
                    y().select,
                    "flex justify-between items-center"
                  ),
                  onClick: function () {
                    return c(function (e) {
                      return !e;
                    });
                  },
                  children: [
                    (0, b.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        p(
                          i.isLp,
                          null == i ? void 0 : i.icon,
                          null == i ? void 0 : i.hideCrv,
                          i
                        ),
                        null == i ? void 0 : i.symbol
                      ]
                    }),
                    (0, b.jsx)("img", {
                      src: "/assets/arrow-down.svg",
                      className: "w-6",
                      alt: "arrow-down"
                    })
                  ]
                }),
                (0, b.jsx)("div", {
                  className: m()(y().options, o && y().visible),
                  children: s
                    .filter(function (e) {
                      return e.address;
                    })
                    .map(function (e, t) {
                      var n;
                      return (0, b.jsxs)(
                        "div",
                        {
                          onClick: function () {
                            return u(e);
                          },
                          className: m()(
                            "flex items-center justify-between",
                            y().option,
                            e.address === i.address && y().active
                          ),
                          children: [
                            (0, b.jsxs)("div", {
                              className: "flex items-center",
                              children: [
                                p(
                                  e.isLp,
                                  null == e ? void 0 : e.icon,
                                  null == e ? void 0 : e.hideCrv,
                                  e
                                ),
                                null == e ? void 0 : e.symbol
                              ]
                            }),
                            (0, b.jsx)("div", {
                              className: "text-align-right",
                              children: (0, b.jsx)("div", {
                                children: d[t]
                                  ? (0, j.az)(
                                      d[t],
                                      null !== (n = e.decimals) && void 0 !== n
                                        ? n
                                        : 18,
                                      4
                                    )
                                  : 0
                              })
                            })
                          ]
                        },
                        e.address
                      );
                    })
                })
              ]
            }),
            (0, b.jsx)("div", {
              className: y().selectBottom,
              children: t && (0, b.jsx)(_, { nocolon: !0, name: t })
            })
          ]
        });
      }
      var k = n(19029),
        w = n(32182),
        T = n(43275),
        C = n(10088),
        F = n(1381),
        A = n(75349),
        Z = n(48060),
        D = n(49124),
        B = n.n(D);
      function E(e) {
        var t,
          n,
          s,
          r = e.onCancel,
          i = e.info,
          o = (0, a.useState)("0.3"),
          d = o[0],
          u = o[1],
          p = (0, a.useState)(0),
          m = p[0],
          h = p[1],
          y = (0, a.useState)(0),
          _ = y[0],
          D = y[1],
          E = (0, a.useState)(0),
          L = E[0],
          S = E[1],
          P = (0, a.useState)(!1),
          I = P[0],
          V = P[1],
          O = (0, A.cq)().getContract,
          R = (0, T.Z)(),
          M = R.currentAccount,
          W = R.isAllReady,
          X = i.lpGaugeAddress,
          G = i.fromPlatform,
          K = i.platformUrl,
          z = i.lpTokenPrice,
          H = i.lp_decimals,
          q = i.logo,
          U = i.name,
          Y = (0, a.useState)(i.zapTokens[0]),
          Q = Y[0],
          J = Y[1],
          $ = (0, a.useState)(0),
          ee = $[0],
          et = $[1],
          en = (0, A.a3)().contract,
          ea = i.lpAddress === Q.address,
          es = (0, g.d)(Q.address, ea ? "gauge" : "gaugeZAP", i),
          er = es.contract,
          ei = es.contractAddress,
          el = es.balance,
          eo =
            es.allowance > 0 && (0, j.F6)(ee).isLessThanOrEqualTo(es.allowance),
          ec = (0, C.Z)({
            approveAmount: ee,
            allowance: es.allowance,
            tokenContract: er,
            approveAddress: ei
          }).BtnWapper,
          ed =
            ((t = (0, l.Z)(
              c().mark(function e() {
                var t, n, a, s;
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (W) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (ea) {
                            e.next = 5;
                            break;
                          }
                          return eu(), e.abrupt("return");
                        case 5:
                          return (
                            (t = O(
                              i.lpGaugeAddress,
                              Z.Z.AlaLiquidityGaugeV3ABI
                            )),
                            (n = (0, j.F6)(ee || 0).toFixed(0, 1)),
                            V(!0),
                            (e.prev = 8),
                            (a = t.methods.deposit(n, M)),
                            (e.next = 12),
                            a.estimateGas({ from: M })
                          );
                        case 12:
                          return (
                            (s = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 16),
                            (0, F.Z)(
                              function () {
                                return a.send({ from: M, gas: s });
                              },
                              { key: "lp", action: "Deposit" }
                            )
                          );
                        case 16:
                          r(), V(!1), (e.next = 24);
                          break;
                        case 20:
                          (e.prev = 20),
                            (e.t0 = e.catch(8)),
                            V(!1),
                            (0, F.c)("error_deposit", e.t0);
                        case 24:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[8, 20]]
                );
              })
            )),
            function () {
              return t.apply(this, arguments);
            }),
          eu =
            ((n = (0, l.Z)(
              c().mark(function e() {
                var t, n, a, s, i, l;
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (W) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            V(!0),
                            (t = (0, j.F6)(ee || 0).toFixed(0, 1)),
                            (e.next = 6),
                            ep(!0)
                          );
                        case 6:
                          return (
                            (n = e.sent.shares),
                            (a = ((0, j.F6)(n) || (0, j.F6)(0))
                              .multipliedBy(
                                (0, j.F6)(1).minus((0, j.F6)(d).dividedBy(100))
                              )
                              .toFixed(0)),
                            (e.prev = 9),
                            (s =
                              "curve" == G.toLowerCase()
                                ? "depositGaugeWithCurveLP"
                                : "depositGaugeWithBalancerLP"),
                            (i = en.methods[s](X, Q.address, t, Q.routes, a)),
                            (e.next = 14),
                            i.estimateGas({
                              from: M,
                              value: k.Z.zeroAddress === Q.address ? t : 0
                            })
                          );
                        case 14:
                          return (
                            (l = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 18),
                            (0, F.Z)(
                              function () {
                                return i.send({
                                  from: M,
                                  gas: l,
                                  value: k.Z.zeroAddress === Q.address ? t : 0
                                });
                              },
                              { key: "farm", action: "zapAndDeposit" }
                            )
                          );
                        case 18:
                          V(!1), r(), (e.next = 27);
                          break;
                        case 22:
                          (e.prev = 22),
                            (e.t0 = e.catch(9)),
                            console.log(e.t0),
                            V(!1),
                            (0, F.c)("error_zapAndDeposit", e.t0);
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
            });
        (0, f.Z)(
          function () {
            ep().then(function (e) {
              e.shares;
              var t = e.sharesLpNum;
              D(e.sharesTvl.toFixed(0)), h(t.toFixed(0));
            });
          },
          [ee, eo, d, ep],
          { wait: 1e3 }
        );
        var ep = (0, a.useCallback)(
            ((s = (0, l.Z)(
              c().mark(function e(t) {
                var n, a, s, r, i;
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((e.prev = 0),
                            (n = (0, j.F6)(ee || 0).toFixed(0, 1)),
                            !(
                              (eo && !(0, j.F6)(n).isZero() && !ea) ||
                              (t && !ea)
                            ))
                          ) {
                            e.next = 10;
                            break;
                          }
                          return (
                            (a =
                              "curve" == G.toLowerCase()
                                ? "depositGaugeWithCurveLP"
                                : "depositGaugeWithBalancerLP"),
                            (e.next = 6),
                            en.methods[a](X, Q.address, n, Q.routes, 0).call({
                              from: M,
                              value: k.Z.zeroAddress === Q.address ? n : 0
                            })
                          );
                        case 6:
                          return (
                            (s = e.sent),
                            (i = (r = (0, j.DB)(s)
                              ? (0, j.F6)(s)
                              : (0, j.F6)(0)).times(z)),
                            e.abrupt("return", {
                              shares: s,
                              sharesLpNum: r,
                              sharesTvl: i
                            })
                          );
                        case 10:
                          return e.abrupt("return", {
                            shares: (0, j.F6)(0),
                            sharesLpNum: (0, j.F6)(0),
                            sharesTvl: (0, j.F6)(0)
                          });
                        case 13:
                          return (
                            (e.prev = 13),
                            (e.t0 = e.catch(0)),
                            console.log(e.t0),
                            e.abrupt("return", {
                              shares: (0, j.F6)(0),
                              sharesLpNum: (0, j.F6)(0),
                              sharesTvl: (0, j.F6)(0)
                            })
                          );
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
            function (e) {
              return s.apply(this, arguments);
            }),
            [ee, en]
          ),
          em = function (e) {
            h(0),
              J(e),
              S(function (e) {
                return e + 1;
              });
          },
          ef =
            (0, j.F6)(ee).isGreaterThan(0) &&
            (0, j.F6)(ee).isLessThanOrEqualTo((0, j.F6)(el));
        return (0, b.jsxs)(v.Z, {
          onCancel: r,
          overflowVisible: !0,
          children: [
            (0, b.jsxs)("div", {
              className: B().info,
              children: [
                (0, b.jsx)("div", {
                  className: "token-bg",
                  children: (0, b.jsx)("img", {
                    src: q,
                    alt: U,
                    className: "w-8 h-8"
                  })
                }),
                (0, b.jsxs)("div", {
                  children: [
                    (0, b.jsx)("div", {
                      className: B().modalTitle,
                      children: "Canny"
                    }),
                    (0, b.jsx)("div", { className: "color-blue", children: U })
                  ]
                })
              ]
            }),
            (0, b.jsx)(N, {
              title: "Deposit token",
              onChange: function (e) {
                return em(e);
              },
              value: Q,
              options: i.zapTokens
            }),
            (0, b.jsx)(x.Z, {
              placeholder: "Type the amount you want to deposit",
              balance: el,
              decimals: Q.decimals,
              token: Q.symbol,
              onChange: function (e) {
                return et(e);
              },
              reset: L
            }),
            "balancer" == G.toLowerCase() &&
              (0, b.jsxs)("p", {
                children: [
                  "All deposits via this UI are added as single-sided canCNX. For more control, deposit via",
                  " ",
                  (0, b.jsx)("a", {
                    className: "color-blue",
                    href: K,
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Balancer"
                  }),
                  " ",
                  "and then stake canCNX/CVX LP here."
                ]
              }),
            Q.needZap &&
              (0, b.jsx)(w.Z, {
                zapTitle: "Zap Transaction Info",
                slippage: d,
                slippageChange: function (e) {
                  return u(e);
                },
                minAmount: (0, j.az)(m, H, 4),
                minLpAmountTvl: (0, j.az)(_, H, 4),
                isLpMinAmount: !0,
                tokenName: U,
                zapType: "Deposit"
              }),
            (0, b.jsx)("div", {
              className: B().actions,
              children: (0, b.jsx)(ec, {
                loading: I,
                disabled: !ef,
                onClick: ed,
                children: "Deposit"
              })
            })
          ]
        });
      }
      var L = n(66774),
        S = n(86138),
        P = n.n(S);
      function I(e) {
        var t,
          n = e.onCancel,
          s = e.info,
          r = (0, T.Z)(),
          i = r.currentAccount,
          o = r.isAllReady,
          d = (0, a.useState)(),
          u = d[0],
          p = d[1],
          m = (0, a.useState)(!1),
          f = m[0],
          h = m[1],
          y = (0, A.cq)().getContract,
          g = s.logo,
          _ = s.userInfo,
          N = void 0 === _ ? {} : _,
          k = s.name,
          w = s.stakeTokenDecimals,
          C =
            ((t = (0, l.Z)(
              c().mark(function e() {
                var t, a, r, l;
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (o) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (t = y(
                              s.lpGaugeAddress,
                              Z.Z.AlaLiquidityGaugeV3ABI
                            )),
                            h(!0),
                            (a = (null == u ? void 0 : u.toFixed(0, 1)) || "0"),
                            (e.prev = 5),
                            (0, j.F6)(N.userDeposited).isLessThanOrEqualTo(a) &&
                              (a = N.userDeposited),
                            (r = t.methods.withdraw(a)),
                            (e.next = 10),
                            r.estimateGas({ from: i })
                          );
                        case 10:
                          return (
                            (l = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 14),
                            (0, F.Z)(
                              function () {
                                return r.send({ from: i, gas: l });
                              },
                              { key: "earn", action: "Withdraw" }
                            )
                          );
                        case 14:
                          n(), h(!1), (e.next = 22);
                          break;
                        case 18:
                          (e.prev = 18),
                            (e.t0 = e.catch(5)),
                            h(!1),
                            (0, F.c)("error_earn_deposit", e.t0);
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
            function () {
              return t.apply(this, arguments);
            }),
          D = (0, j.F6)(N.userDeposited).toNumber();
        return (0, b.jsxs)(v.Z, {
          onCancel: n,
          overflowVisible: !0,
          children: [
            (0, b.jsxs)("div", {
              className: P().info,
              children: [
                (0, b.jsx)("div", {
                  className: "token-bg",
                  children: (0, b.jsx)("img", {
                    src: g,
                    alt: k,
                    className: "w-8 h-8"
                  })
                }),
                (0, b.jsxs)("div", {
                  children: [
                    (0, b.jsx)("div", {
                      className: P().modalTitle,
                      children: "Canny"
                    }),
                    (0, b.jsx)("div", { className: "color-blue", children: k })
                  ]
                })
              ]
            }),
            (0, b.jsx)(x.Z, {
              onChange: function (e) {
                return p(e);
              },
              available: D,
              token: k,
              decimals: w
            }),
            (0, b.jsx)("div", {
              className: P().actions,
              children: (0, b.jsx)(L.Z, {
                loading: f,
                onClick: C,
                children: "Withdraw"
              })
            })
          ]
        });
      }
      var V = n(18668),
        O = n.n(V),
        R = n(48282),
        M = n(6783),
        W = n(92678),
        X = "/assets/ctr.svg",
        G = "/assets/crypto-icons-stack.svg";
      function K(e) {
        var t,
          n,
          s = e.item,
          r = (0, T.Z)(),
          i = r.currentAccount,
          o = r.isAllReady,
          d = (0, a.useState)(!1),
          p = d[0],
          f = d[1],
          v = (0, a.useState)(!1),
          x = v[0],
          h = v[1],
          y = s.tvlText,
          g = s.lpContract,
          _ = s.isLock,
          N = void 0 !== _ && _,
          k = s.name,
          w = s.totalSupply,
          C = s.lpGaugeAddress,
          Z = s.userInfo,
          D = void 0 === Z ? {} : Z,
          B = s.otherTokenData,
          S = void 0 === B ? {} : B,
          P = s.rewardApyMin,
          V = s.rewardApy,
          K = s.baseApy,
          z = s.baseApyText,
          H = s.rewardApyMinText,
          q = s.apyMinText,
          U = s.apyText,
          Y = s.apyMaxText,
          Q = s.canUSD_FraxBP_apy,
          J = s.rewardApyMaxText,
          $ = (0, W.Z)(),
          ee = $.veTotalSupply,
          et = $.userVeCLEV,
          en = (0, A.Wk)().contract,
          ea = (0, M.Z)(null, {
            lpContract: g,
            depositAmount: null == D ? void 0 : D.userDeposited,
            poolLiquidity: w,
            totalveCLEV: ee,
            veCLEVAmount: et
          }),
          es = (0, a.useMemo)(
            function () {
              if ((0, j.DB)(ea) && (0, j.DB)(V)) {
                var e = (0, j.F6)(P).times(ea).plus(K);
                return (0, j.Kn)(e, "".concat(e.toFixed(2), "%"));
              }
              return (0, j.Kn)(V, U);
            },
            [ea, P, K]
          ),
          er = (0, a.useMemo)(
            function () {
              if ((0, j.DB)(ea) && (0, j.DB)(V)) {
                var e = (0, j.F6)(P).times(ea);
                return (0, j.Kn)(e, "".concat(e.toFixed(2), "%"));
              }
              return (0, j.Kn)(V, U);
            },
            [ea, V, U, P]
          );
        console.log("rewardApy,newApyText-----", V.toString(10), es);
        var ei = (0, a.useState)(!1),
          el = ei[0],
          eo = ei[1],
          ec = (0, a.useState)(!1),
          ed = ec[0],
          eu = ec[1],
          ep = "https://concentrator.aladdin.club/",
          em =
            ((t = (0, l.Z)(
              c().mark(function e() {
                var t, n;
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (o) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            h(!0),
                            (e.prev = 3),
                            (t = en.methods.mint(C)),
                            (e.next = 7),
                            t.estimateGas({ from: i })
                          );
                        case 7:
                          return (
                            (n = parseInt(1.2 * e.sent, 10) || 0),
                            (e.next = 11),
                            (0, F.Z)(
                              function () {
                                return t.send({ from: i, gas: n });
                              },
                              { key: "clev", action: "claim" }
                            )
                          );
                        case 11:
                          h(!1), (e.next = 18);
                          break;
                        case 14:
                          (e.prev = 14),
                            (e.t0 = e.catch(3)),
                            h(!1),
                            (0, F.c)("error_farm_claim", e.t0);
                        case 18:
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
          ef = (0, j.DB)(D.claimable_reward);
        return (0, b.jsxs)("div", {
          className: "mb-7",
          children: [
            (0, b.jsxs)("div", {
              className: m()(O().poolItem, "cursor-pointer"),
              onClick: function () {
                return (
                  !N &&
                  f(function (e) {
                    return !e;
                  })
                );
              },
              children: [
                (0, b.jsxs)("div", {
                  className: m()("flex items-center md:gap-4", O().rightBorder),
                  children: [
                    (0, b.jsxs)("div", {
                      className: O().tokenIcon,
                      children: [
                        (0, b.jsx)("img", { src: s.logo, alt: s.name }),
                        s.logo2 &&
                          (0, b.jsxs)("div", {
                            className:
                              "bg-white p-2 absolute rounded-full w-8 h-8 -right-1 -bottom-1",
                            children: [
                              " ",
                              (0, b.jsx)("img", {
                                src: s.logo2,
                                alt: s.name,
                                className: "w-full"
                              })
                            ]
                          })
                      ]
                    }),
                    (0, b.jsx)("div", {
                      className: "text-sm xl:text-xl text-left",
                      children: (0, b.jsx)("div", {
                        className: "font-bold",
                        children: s.name
                      })
                    })
                  ]
                }),
                (0, b.jsxs)(R.Z, {
                  visible: !N,
                  children: [
                    (0, b.jsx)("div", {
                      className: O().rightBorder,
                      children: s.isExpired
                        ? (0, b.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                              (0, b.jsx)("div", { children: "0%" }),
                              (0, b.jsx)("div", {
                                children: "Farming Finished"
                              })
                            ]
                          })
                        : (0, b.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                              !0 == s.isStaticPool
                                ? (0, b.jsxs)("span", {
                                    children: [(0, j.FR)(Q, !1, 0, 2), "%"]
                                  })
                                : (0, b.jsx)("span", {
                                    children: (0, j.DB)(V)
                                      ? (0, j.DB)(ea)
                                        ? "".concat(es)
                                        : (0, j.DB)(V)
                                        ? "".concat(q, " -> ").concat(Y)
                                        : "-"
                                      : z
                                  }),
                              !0 == s.isStaticPool
                                ? ""
                                : (0, b.jsx)("span", {
                                    className: "text-base",
                                    children:
                                      (0, j.DB)(ea) && (0, j.DB)(V)
                                        ? ea > 1
                                          ? "Boost:".concat(ea, "x")
                                          : (0, b.jsx)(u(), {
                                              href: "/locker",
                                              children: (0, b.jsxs)("span", {
                                                className: "underline",
                                                children: ["Boost to ", Y]
                                              })
                                            })
                                        : ""
                                  })
                            ]
                          })
                    }),
                    (0, b.jsx)("div", {
                      className: O().rightBorder,
                      children:
                        !0 == s.isStaticPool
                          ? ""
                          : (0, b.jsxs)(a.Fragment, {
                              children: [
                                (0, j.DB)(D ? D.userDeposited : 0)
                                  ? (0, j.FR)(
                                      D.userDeposited,
                                      !1,
                                      null !== (n = s.stakeTokenDecimals) &&
                                        void 0 !== n
                                        ? n
                                        : 18
                                    )
                                  : "-",
                                (0, b.jsx)("br", {}),
                                D ? D.userDepositedTvlText : "-"
                              ]
                            })
                    }),
                    (0, b.jsx)("div", {
                      className: O().rightBorder,
                      children: s.isStaticPool
                        ? ""
                        : D
                        ? D.claimableTvlText
                        : "-"
                    }),
                    (0, b.jsx)("div", {
                      children: s.isStaticPool
                        ? ""
                        : !0 === s.isStaticPool
                        ? ""
                        : y
                    })
                  ]
                }),
                (0, b.jsxs)(R.Z, {
                  visible: N,
                  children: [
                    (0, b.jsx)("div", {}),
                    (0, b.jsx)("div", {}),
                    (0, b.jsx)("div", {}),
                    (0, b.jsx)("div", { children: "Coming Soon" })
                  ]
                })
              ]
            }),
            p &&
              (0, b.jsx)("div", {
                children: s.isStaticPool
                  ? (0, b.jsxs)("div", {
                      className: O().detail,
                      children: [
                        (0, b.jsx)("div", {
                          className: m()("text-xl leading-loose", "text-white"),
                          children: (0, b.jsxs)("div", {
                            children: [
                              "canUSD/FraxBP is available on",
                              " ",
                              (0, b.jsxs)("a", {
                                href: "https://curve.fi/#/ethereum/pools/factory-v2-237/deposit",
                                target: "_blank",
                                className:
                                  "underline inline-flex gap-1 items-center",
                                rel: "noreferrer",
                                children: [
                                  "Curve ",
                                  (0, b.jsx)("img", {
                                    className: "w-4",
                                    src: "".concat(G, "#crv")
                                  })
                                ]
                              }),
                              ",",
                              " ",
                              (0, b.jsxs)("a", {
                                href: "https://www.convexfinance.com/stake",
                                target: "_blank",
                                className:
                                  "underline inline-flex gap-1 items-center",
                                rel: "noreferrer",
                                children: [
                                  "Convex ",
                                  (0, b.jsx)("img", {
                                    className: "w-4",
                                    src: "".concat(G, "#cvx")
                                  })
                                ]
                              }),
                              " ",
                              "and",
                              " ",
                              (0, b.jsxs)("a", {
                                href: ep,
                                target: "_blank",
                                className:
                                  "underline inline-flex gap-1 items-center",
                                rel: "noreferrer",
                                children: [
                                  "Concentrator ",
                                  (0, b.jsx)("img", {
                                    className: "w-4",
                                    src: X
                                  })
                                ]
                              }),
                              " ",
                              "now."
                            ]
                          })
                        }),
                        (0, b.jsx)("div", {
                          className: O().actions,
                          children: (0, b.jsx)("a", {
                            href: ep,
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0, b.jsx)(L.Z, {
                              theme: "grey",
                              children: "Concentrator >"
                            })
                          })
                        })
                      ]
                    })
                  : (0, b.jsxs)("div", {
                      className: O().detail,
                      children: [
                        s.isExpired
                          ? (0, b.jsx)("div", {
                              children:
                                "Balancer" == s.fromPlatform
                                  ? (0, b.jsxs)("div", {
                                      className: m()(
                                        "text-xl leading-loose",
                                        "text-white"
                                      ),
                                      children: [
                                        (0, b.jsx)("div", {
                                          children:
                                            "Balancer farming pool is finished."
                                        }),
                                        (0, b.jsx)("div", {
                                          children:
                                            "Reminder: canCNX can be placed in Furnace to be converted to CVX over time."
                                        })
                                      ]
                                    })
                                  : (0, b.jsxs)("div", {
                                      className: m()(
                                        "text-xl leading-loose",
                                        "text-white"
                                      ),
                                      children: [
                                        (0, b.jsx)("div", {
                                          children:
                                            "Curve canCNX/CVX LP farming pool is finished."
                                        }),
                                        (0, b.jsx)("div", {
                                          children:
                                            "Please withdraw and claim your assets as soon as possible."
                                        })
                                      ]
                                    })
                            })
                          : (0, b.jsxs)("div", {
                              className: m()("text-white"),
                              children: [
                                (0, b.jsxs)("div", {
                                  className:
                                    "flex items-start flex-col gap-2 md:flex-row md:items-center md:gap-0 mb-4",
                                  children: [
                                    (0, b.jsx)("span", {
                                      className: O().actionTag,
                                      children: "DEPOSIT"
                                    }),
                                    (0, b.jsxs)("span", {
                                      className: m()(
                                        O().actionToken,
                                        O().highlight
                                      ),
                                      children: [
                                        (0, b.jsx)("div", {
                                          className: "token-bg mr-2",
                                          children: (0, b.jsx)("img", {
                                            src: s.fromPlatformIcon,
                                            alt: s.fromPlatform,
                                            className: "h-6 w-6"
                                          })
                                        }),
                                        (0, b.jsxs)("div", {
                                          children: [k, " LP"]
                                        })
                                      ]
                                    }),
                                    (0, b.jsx)("span", {
                                      className: O().actionTag,
                                      children: "EARN"
                                    }),
                                    (0, b.jsxs)("span", {
                                      className: m()(
                                        O().actionToken,
                                        O().highlight
                                      ),
                                      children: [
                                        (0, b.jsx)("div", {
                                          className:
                                            "token-bg mr-2 bg-white p-2",
                                          children: (0, b.jsx)("img", {
                                            src: "/resources/tokens/clev.png",
                                            alt: "acrv-icon",
                                            className: "w-5 h-5"
                                          })
                                        }),
                                        "CLEV"
                                      ]
                                    })
                                  ]
                                }),
                                (0, b.jsxs)("div", {
                                  className: O().actionHint,
                                  children: [
                                    "Deposit liquidity into",
                                    " ",
                                    (0, b.jsx)("span", {
                                      className:
                                        "color-blue underline font-bold",
                                      children: (0, b.jsxs)("a", {
                                        href: s.platformUrl,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [
                                          "abcCVX" === s.name &&
                                            (0, b.jsx)(b.Fragment, {
                                              children: "Concentrator\xa0"
                                            }),
                                          s.name
                                        ]
                                      })
                                    }),
                                    " ",
                                    "and, when you claim your",
                                    " ",
                                    s.lp_symbol
                                      ? s.lp_symbol.replace("-gauge", " LP")
                                      : "-",
                                    ", stake them here to get extra rewards."
                                  ]
                                }),
                                (0, b.jsxs)("div", {
                                  className:
                                    "flex gap-4 flex-col md:flex-row md:gap-12",
                                  children: [
                                    (0, b.jsxs)("div", {
                                      children: [
                                        (0, b.jsxs)("div", {
                                          className: O().aprSection,
                                          children: [
                                            (0, b.jsx)("span", {
                                              className: O().aprTag,
                                              children: "APY:"
                                            }),
                                            (0, b.jsx)("span", {
                                              className: m()(
                                                O().aprValue,
                                                O().highlight
                                              ),
                                              children: (0, b.jsxs)("span", {
                                                className:
                                                  "inline-flex space-x-1 items-baseline",
                                                children: [
                                                  (0, b.jsx)("span", {
                                                    children: (0, j.DB)(V)
                                                      ? (0, j.DB)(ea)
                                                        ? "".concat(es)
                                                        : (0, j.DB)(V)
                                                        ? ""
                                                            .concat(q, " -> ")
                                                            .concat(Y)
                                                        : "-"
                                                      : z
                                                  }),
                                                  !(0, j.DB)(V) &&
                                                    (0, j.DB)(ea) &&
                                                    1 * ea != 1 &&
                                                    (0, b.jsxs)("span", {
                                                      className:
                                                        "text-base font-normal",
                                                      children: [
                                                        "(Boost ",
                                                        ea,
                                                        "x)"
                                                      ]
                                                    })
                                                ]
                                              })
                                            })
                                          ]
                                        }),
                                        (0, b.jsxs)("div", {
                                          className: O().moreInfo,
                                          children: [
                                            (0, b.jsxs)("div", {
                                              className: "flex space-x-1",
                                              children: [
                                                (0, b.jsx)("span", {
                                                  children: "Base APR:"
                                                }),
                                                (0, b.jsx)("span", {
                                                  children: "".concat(z)
                                                })
                                              ]
                                            }),
                                            (0, b.jsxs)("div", {
                                              className: "flex space-x-1",
                                              children: [
                                                (0, b.jsx)("span", {
                                                  children: "CLEV Reward APR:"
                                                }),
                                                (0, b.jsx)("span", {
                                                  children: (0, j.DB)(ea)
                                                    ? er
                                                    : (0, j.DB)(V)
                                                    ? ""
                                                        .concat(H, " -> ")
                                                        .concat(J)
                                                    : "-"
                                                })
                                              ]
                                            })
                                          ]
                                        })
                                      ]
                                    }),
                                    S.dy &&
                                      (0, b.jsxs)("div", {
                                        className: O().aprSection,
                                        children: [
                                          (0, b.jsxs)("span", {
                                            className: O().aprTag,
                                            children: [
                                              null == S
                                                ? void 0
                                                : S.otherTokenName,
                                              ":"
                                            ]
                                          }),
                                          (0, b.jsxs)("span", {
                                            className: m()(
                                              O().aprValue,
                                              O().highlight
                                            ),
                                            children: [
                                              null == S ? void 0 : S.dy,
                                              " ",
                                              null == S
                                                ? void 0
                                                : S.checkLpTokenName
                                            ]
                                          })
                                        ]
                                      })
                                  ]
                                })
                              ]
                            }),
                        "Curve canCNX/CVX" === s.name &&
                          (0, b.jsx)("div", {
                            className: m()(
                              "text-xl leading-loose",
                              "text-white"
                            ),
                            children: (0, b.jsxs)("div", {
                              children: [
                                "You can stake your canCNX/CVX LP into",
                                " ",
                                (0, b.jsxs)("a", {
                                  href: ep,
                                  target: "_blank",
                                  className:
                                    "underline inline-flex gap-1 items-center",
                                  rel: "noreferrer",
                                  children: [
                                    "Concentrator ",
                                    (0, b.jsx)("img", {
                                      src: X,
                                      className: "w-4 h-4"
                                    })
                                  ]
                                }),
                                ",",
                                " ",
                                (0, b.jsxs)("a", {
                                  href: "https://www.convexfinance.com/stake",
                                  target: "_blank",
                                  className:
                                    "underline inline-flex gap-1 items-center",
                                  rel: "noreferrer",
                                  children: [
                                    "Convex",
                                    " ",
                                    (0, b.jsx)("img", {
                                      className: "w-4 h-4",
                                      src: "".concat(G, "#cvx")
                                    })
                                  ]
                                }),
                                " ",
                                "or",
                                " ",
                                (0, b.jsxs)("a", {
                                  href: "https://curve.fi/#/ethereum/pools/factory-v2-209/deposit",
                                  target: "_blank",
                                  className:
                                    "underline inline-flex gap-1 items-center",
                                  rel: "noreferrer",
                                  children: [
                                    "Curve",
                                    " ",
                                    (0, b.jsx)("img", {
                                      className: "w-4 h-4",
                                      src: "".concat(G, "#crv")
                                    })
                                  ]
                                }),
                                " ",
                                "to farm."
                              ]
                            })
                          }),
                        (0, b.jsxs)("div", {
                          className: O().actions,
                          children: [
                            !s.isExpired &&
                              (0, b.jsx)(L.Z, {
                                disabled: s.closeDeposit || s.isExpired,
                                onClick: function () {
                                  o && eo(!0);
                                },
                                children: "Deposit"
                              }),
                            (0, b.jsx)(L.Z, {
                              theme: "grey",
                              onClick: function () {
                                o && eu(!0);
                              },
                              children: "Withdraw"
                            }),
                            (0, b.jsx)(L.Z, {
                              theme: "lightBlue",
                              disabled: !ef,
                              loading: x,
                              onClick: em,
                              children: "Claim"
                            })
                          ]
                        })
                      ]
                    })
              }),
            el &&
              (0, b.jsx)(E, {
                info: s,
                onCancel: function () {
                  return eo(!1);
                }
              }),
            ed &&
              (0, b.jsx)(I, {
                info: s,
                onCancel: function () {
                  return eu(!1);
                }
              })
          ]
        });
      }
      var z = n(88683),
        H = n.n(z),
        q = n(59499),
        U = n(4730),
        Y = n(2100),
        Q = n(42616),
        J = n(60414),
        $ = n(51815),
        ee = n(86920),
        et = ["curveApy", "balancerApy", "concentratorAbcCVXBaseApy"];
      function en(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function ea(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? en(Object(n), !0).forEach(function (t) {
                (0, q.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : en(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var es = function () {
          var e = (0, Q.Z)().farmingPriceData,
            t = (0, a.useMemo)(
              function () {
                var t = 0;
                for (var n in e)
                  e[n] && 1 * e[n].ClevPrice && (t = 1 * e[n].ClevPrice);
                return t;
              },
              [e]
            ),
            n = (0, J.Z)(),
            s = n.allPoolsInfo,
            r = n.allPoolsUserInfo,
            i = (0, $.Z)(),
            l = i.curveApy,
            o = i.balancerApy,
            c = i.concentratorAbcCVXBaseApy,
            d = (0, U.Z)(i, et),
            u = (0, ee.Z)(),
            p = u.ConvexVaultsAPY,
            m = u.concentratorInitData,
            f = (0, A.DU)().tokenInfo,
            v = (0, a.useState)([]),
            x = v[0],
            h = v[1],
            y = (0, a.useMemo)(
              function () {
                try {
                  return (
                    p.find(function (e) {
                      return (
                        "https://curve.fi/#/ethereum/pools/factory-v2-237/deposit" ==
                        e.depositInfo.url
                      );
                    }).apy.project || 0
                  );
                } catch (e) {
                  return 0;
                }
              },
              [p]
            ),
            g = function (e, n) {
              var a = d[e.lpAddress.toLowerCase()],
                s = (0, j.F6)(0),
                r = (0, j.F6)(0);
              if (a) {
                var i = (0, j.F6)(a.gauge_clev_timestamp)
                    .times((0, j.F6)(31536e3))
                    .times(100),
                  u = (0, j.F6)(n).shiftedBy(-e.stakeTokenDecimals),
                  p = i.times(t).div(u);
                return (
                  e.lpPoolToken &&
                    l &&
                    ((s = l[e.lpPoolToken.toLowerCase()].apy),
                    (r = l[e.lpPoolToken.toLowerCase()].apyWeekly),
                    (s = (0, j.DB)(r) ? r : s),
                    (s = (0, j.DB)(s) ? (0, j.F6)(s) : (0, j.F6)(0)),
                    (r = (0, j.DB)(r) ? (0, j.F6)(r) : (0, j.F6)(0))),
                  e.lpPoolId &&
                    o &&
                    ((s = o[e.lpPoolId.toLowerCase()].apy),
                    (s = (0, j.DB)(s) ? (0, j.F6)(s) : (0, j.F6)(0))),
                  "abcCVX" == e.name && ((s = c), (r = c)),
                  [p, s, r]
                );
              }
              return [(0, j.F6)(0), s, r];
            };
          return {
            poolList: (0, a.useMemo)(
              function () {
                try {
                  var t = ea(
                      ea({}, e),
                      {},
                      {
                        "0xdec800c2b17c9673570fdf54450dc1bd79c8e359": {
                          usd: m.abcCVXPrice
                        }
                      }
                    ),
                    n = s.map(function (e, n) {
                      var a,
                        s,
                        i,
                        l,
                        o =
                          null === (a = t[e.lpAddress.toLowerCase()]) ||
                          void 0 === a
                            ? void 0
                            : a.usd,
                        c =
                          null === (s = t[e.lpAddress.toLowerCase()]) ||
                          void 0 === s
                            ? void 0
                            : s.otherTokenData,
                        d = (0, j.F6)(e.totalSupply).times(o).toString(10),
                        u = (0, j.Kn)(
                          d,
                          (0, j.FR)(
                            d,
                            !0,
                            null !== (i = e.stakeTokenDecimals) && void 0 !== i
                              ? i
                              : 18
                          )
                        ),
                        p = r[n]
                          ? r[n]
                          : {
                              userTokenAllowance: 0,
                              userDeposited: 0,
                              claimable: 0
                            },
                        m = (0, j.F6)(p.userDeposited).times(o).toString(10);
                      (p.userDepositedTvl = m),
                        (p.userDepositedTvlText = (0, j.Kn)(
                          m,
                          (0, j.FR)(
                            m,
                            !0,
                            null !== (l = e.stakeTokenDecimals) && void 0 !== l
                              ? l
                              : 18
                          )
                        ));
                      var v = (0, j.F6)(p.claimable_reward)
                        .times(o)
                        .toString(10);
                      (p.claimableTvl = v),
                        (p.claimableTvlText = (0, j.Kn)(
                          p.claimable_reward,
                          (0, j.FR)(p.claimable_reward, !1, f ? f[2] : 18)
                        ));
                      var x = g(e, d)[0],
                        h = 2.5 * x,
                        b = g(e, d)[1];
                      b = (0, j.DB)(b) ? b : 0;
                      var _ = g(e, d)[2];
                      _ = (0, j.DB)(_) ? _ : 0;
                      var N = (0, j.F6)(x).plus(b),
                        k = (0, j.F6)(x).plus(b),
                        w = (0, j.F6)(h).plus(b),
                        T = (0, j.Kn)(x, "".concat(x.toFixed(2), "%")),
                        C = (0, j.Kn)(x, "".concat(x.toFixed(2), "%")),
                        F = (0, j.Kn)(b, "".concat(b.toFixed(2), "%")),
                        A = (0, j.Kn)(_, "".concat(_.toFixed(2), "%")),
                        Z = (0, j.Kn)(N, "".concat(N.toFixed(2), "%")),
                        D = (0, j.Kn)(k, "".concat(k.toFixed(2), "%")),
                        B = (0, j.Kn)(w, "".concat(w.toFixed(2), "%")),
                        E = (0, j.Kn)(h, "".concat(h.toFixed(2), "%"));
                      return e.isStaticPool
                        ? ea(
                            ea({}, e),
                            {},
                            {
                              userInfo: {},
                              tvl: 0,
                              tvlText: 0,
                              lpTokenPrice: o,
                              canUSD_FraxBP_apy: y,
                              rewardApy: x,
                              baseApy: b,
                              baseApyWeekly: _,
                              rewardApyMin: x,
                              rewardApyText: T,
                              rewardApyMinText: C,
                              baseApyText: F,
                              baseApyWeeklyText: A,
                              apyText: Z,
                              apyMin: k,
                              apyMinText: D,
                              apyMaxText: B,
                              rewardApyMax: h,
                              rewardApyMaxText: E,
                              otherTokenData: {}
                            }
                          )
                        : ea(
                            ea({}, e),
                            {},
                            {
                              userInfo: p,
                              tvl: d,
                              tvlText: u,
                              lpTokenPrice: o,
                              canUSD_FraxBP_apy: y,
                              rewardApy: x,
                              baseApy: b,
                              baseApyWeekly: _,
                              rewardApyMin: x,
                              rewardApyText: T,
                              rewardApyMinText: C,
                              baseApyText: F,
                              baseApyWeeklyText: A,
                              apyText: Z,
                              apyMin: k,
                              apyMinText: D,
                              apyMaxText: B,
                              rewardApyMax: h,
                              rewardApyMaxText: E,
                              otherTokenData: c
                            }
                          );
                    });
                  return h(n), n;
                } catch (e) {
                  return console.log("poolList---error---", e), Y.cd;
                }
              },
              [c, o, l, s, r, t, y]
            ),
            publicInfo: x
          };
        },
        er = function () {
          var e = (0, A.DU)().tokenInfo,
            t = es().publicInfo;
          return (0, a.useMemo)(
            function () {
              if (!t.length)
                return {
                  totalTvl: 0,
                  totalTvlText: "-",
                  myAsset: 0,
                  myAssetText: "-",
                  claimable: 0,
                  claimableText: "-"
                };
              var n = t.reduce(function (e, t) {
                  var n, a;
                  return (0, j.DB)(t.tvl)
                    ? (0, j.F6)(null !== (n = t.tvl) && void 0 !== n ? n : 0)
                        .shiftedBy(-t.stakeTokenDecimals)
                        .plus(e)
                    : (0, j.F6)(e);
                }, (0, j.F6)(0)),
                a = (0, j.DB)(n) ? (0, j.FR)(n.toString(10), !0, 0, 2) : "-",
                s = t.reduce(function (e, t) {
                  var n, a, s;
                  return (0, j.DB)(
                    null === (n = t.userInfo) || void 0 === n
                      ? void 0
                      : n.userDepositedTvl
                  )
                    ? (0, j.F6)(
                        null !== (a = t.userInfo.userDepositedTvl) &&
                          void 0 !== a
                          ? a
                          : 0
                      )
                        .shiftedBy(-t.stakeTokenDecimals)
                        .plus(e)
                    : e;
                }, (0, j.F6)(0)),
                r = (0, j.DB)(s) ? (0, j.FR)(s, !0, 0, 2) : "-",
                i = t.reduce(function (t, n) {
                  var a, s;
                  return (0, j.DB)(
                    null === (a = n.userInfo) || void 0 === a
                      ? void 0
                      : a.claimable_reward
                  )
                    ? (0, j.F6)(
                        null !== (s = n.userInfo.claimable_reward) &&
                          void 0 !== s
                          ? s
                          : 0
                      )
                        .shiftedBy(-(e ? e[2] : 18))
                        .plus(t)
                    : t;
                }, (0, j.F6)(0)),
                l = (0, j.DB)(i) ? (0, j.FR)(i, !1, 0, 2) : "-";
              return {
                totalTvl: n,
                totalTvlText: a,
                myAsset: s,
                myAssetText: r,
                claimable: i,
                claimableText: l
              };
            },
            [t, e]
          );
        };
      function ei() {
        var e = es().poolList,
          t = er(),
          n = t.totalTvlText,
          a = t.myAssetText,
          s = t.claimableText;
        return (0, b.jsx)("div", {
          className: H().vaultPage,
          children: (0, b.jsxs)("div", {
            className: "container",
            children: [
              (0, b.jsx)(i.Z, {
                title: "Farming",
                subtitle: "Deposit assets to earn CANNY"
              }),
              (0, b.jsx)("div", {
                className: H().analytics,
                children: [
                  { key: "TVL", title: "TVL", value: n },
                  { key: "My TVL", title: "My TVL", value: a },
                  { key: "Claimable CANNY", title: "Claimable CANNY", value: s }
                ].map(function (e) {
                  return (0,
                  b.jsx)("div", { className: H().item, children: (0, b.jsxs)("div", { className: H().itemInner, children: [(0, b.jsx)("div", { className: H().title, children: e.title }), (0, b.jsx)("div", { className: H().value, children: e.value })] }) }, e.title);
                })
              }),
              (0, b.jsxs)("div", {
                className: H().poolsList,
                children: [
                  (0, b.jsxs)("div", {
                    className: H().poolsListHeader,
                    children: [
                      (0, b.jsx)("div", { children: "Name" }),
                      (0, b.jsx)("div", { children: "APR" }),
                      (0, b.jsx)("div", { children: "Deposits" }),
                      (0, b.jsx)("div", { children: "Claimable" }),
                      (0, b.jsx)("div", { children: "TVL" })
                    ]
                  }),
                  e.map(function (e, t) {
                    return (0, b.jsx)(K, { item: e }, t);
                  })
                ]
              })
            ]
          })
        });
      }
      function el() {
        return (0, b.jsxs)(a.Fragment, {
          children: [
            (0, b.jsx)(r(), {
              children: (0, b.jsx)("title", {
                children: "Canny | curve, Convex | High performance - Farming"
              })
            }),
            (0, b.jsx)(ei, {})
          ]
        });
      }
    },
    20188: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/farming",
        function () {
          return n(3372);
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
    59071: function (e) {
      e.exports = {
        selectWrapper: "styles_selectWrapper__XZeNO",
        selectTop: "styles_selectTop__y1jVg",
        selectBox: "styles_selectBox__CfJaS",
        select: "styles_select__rwTz_",
        options: "styles_options__M7DL3",
        visible: "styles_visible__R5wLM",
        option: "styles_option__PHtGY",
        selectBottom: "styles_selectBottom__9Cx6G"
      };
    },
    65865: function () {},
    49124: function (e) {
      e.exports = {
        info: "styles_info__I1DxZ",
        actions: "styles_actions__fpUvt",
        modalTitle: "styles_modalTitle__wzO1Y"
      };
    },
    18668: function (e) {
      e.exports = {
        poolItem: "styles_poolItem__xX7gp",
        tokenIcon: "styles_tokenIcon__odIvF",
        moreBtn: "styles_moreBtn__LXlVv",
        rightBorder: "styles_rightBorder__xEeGn",
        highlight: "styles_highlight__x1tEc",
        detail: "styles_detail__fF02Q",
        actionTag: "styles_actionTag__dE2zQ",
        actionToken: "styles_actionToken__CcWHA",
        actionHint: "styles_actionHint__ixpEG",
        aprTag: "styles_aprTag__v84AS",
        aprValue: "styles_aprValue__KDDpp",
        aprSection: "styles_aprSection__CdlGy",
        moreInfo: "styles_moreInfo__CXFfH",
        actions: "styles_actions__8GjrN"
      };
    },
    86138: function (e) {
      e.exports = {
        info: "styles_info__U4rnH",
        actions: "styles_actions__4RmGJ",
        modalTitle: "styles_modalTitle__lk8ij"
      };
    },
    88683: function (e) {
      e.exports = {
        analytics: "styles_analytics__ypxmF",
        item: "styles_item__TsyZQ",
        title: "styles_title__2M2sm",
        value: "styles_value__DGfQr",
        itemInner: "styles_itemInner__XwfRm",
        poolsListHeader: "styles_poolsListHeader__oMuZt",
        banner: "styles_banner__JRyN5",
        logo: "styles_logo__W5Hwv",
        img: "styles_img__K9mBj",
        logoText1: "styles_logoText1__Sntdh",
        logoText2: "styles_logoText2__VkVu3",
        tabs: "styles_tabs__7ZqkZ",
        tab: "styles_tab__bwXlk",
        active: "styles_active__rKOs9"
      };
    },
    9008: function (e, t, n) {
      e.exports = n(11597);
    },
    8410: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return r;
        }
      });
      var a = n(67294),
        s = (0, n(98924).Z)() ? a.useLayoutEffect : a.useEffect;
      t.Z = s;
      var r = function (e, t) {
        var n = a.useRef(!0);
        s(function () {
          if (!n.current) return e();
        }, t),
          s(function () {
            return (
              (n.current = !1),
              function () {
                n.current = !0;
              }
            );
          }, []);
      };
    },
    3129: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        }
      });
      var a = n(97685),
        s = n(67294);
      function r(e) {
        var t = s.useRef();
        return (
          (t.current = e),
          s.useCallback(function () {
            for (var e, n = arguments.length, a = Array(n), s = 0; s < n; s++)
              a[s] = arguments[s];
            return null === (e = t.current) || void 0 === e
              ? void 0
              : e.call.apply(e, [t].concat(a));
          }, [])
        );
      }
      var i = n(8410),
        l = n(30470);
      function o(e) {
        return void 0 !== e;
      }
      function c(e, t) {
        var n = t || {},
          s = n.defaultValue,
          c = n.value,
          d = n.onChange,
          u = n.postState,
          p = (0, l.Z)(function () {
            return o(c)
              ? c
              : o(s)
              ? "function" == typeof s
                ? s()
                : s
              : "function" == typeof e
              ? e()
              : e;
          }),
          m = (0, a.Z)(p, 2),
          f = m[0],
          v = m[1],
          x = void 0 !== c ? c : f,
          h = u ? u(x) : x,
          y = r(d),
          g = (0, l.Z)([x]),
          j = (0, a.Z)(g, 2),
          b = j[0],
          _ = j[1];
        return (
          (0, i.o)(
            function () {
              var e = b[0];
              f !== e && y(f, e);
            },
            [b]
          ),
          (0, i.o)(
            function () {
              o(c) || v(c);
            },
            [c]
          ),
          [
            h,
            r(function (e, t) {
              v(e, t), _([x], t);
            })
          ]
        );
      }
    },
    4730: function (e, t, n) {
      "use strict";
      function a(e, t) {
        if (null == e) return {};
        var n,
          a,
          s = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              s = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++)
              (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
            return s;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (n = r[a]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (s[n] = e[n]);
        }
        return s;
      }
      n.d(t, {
        Z: function () {
          return a;
        }
      });
    }
  },
  function (e) {
    e.O(0, [8795, 3439, 2616, 7767, 9774, 2888, 179], function () {
      return e((e.s = 20188));
    }),
      (_N_E = e.O());
  }
]);
