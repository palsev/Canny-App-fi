(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5366],
  {
    25688: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return r;
        }
      }),
        s(67294);
      var l = s(94184),
        i = s.n(l),
        n = s(11836),
        c = s.n(n),
        a = s(85893);
      function r(e) {
        var t = e.title,
          s = e.subtitle,
          l = e.icon;
        return (0, a.jsxs)("div", {
          className: i()(c().banner, "flex items-center gap-4"),
          children: [
            l &&
              (0, a.jsx)("div", {
                className: " bg-gray-300 p-3 rounded-full",
                children: (0, a.jsx)("img", { src: l, className: "w-8 h-8" })
              }),
            (0, a.jsxs)("div", {
              children: [
                t && (0, a.jsx)("div", { className: c().title, children: t }),
                s &&
                  (0, a.jsxs)("div", {
                    className: c().subtitle,
                    children: [s, " "]
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
          s = e.children;
        return void 0 === t || t ? s : null;
      };
    },
    64743: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return b;
          }
        });
      var l = s(67294),
        i = s(9008),
        n = s.n(i),
        c = s(94184),
        a = s.n(c),
        r = s(66774),
        o = s(25688),
        d = s(29386),
        u = s(16557),
        m = s(41664),
        _ = s.n(m),
        x = s(11163),
        v = s(48282),
        h = s(86920),
        j = s(55060),
        f = s.n(j),
        y = s(85893);
      function p(e) {
        var t = e.item,
          s = ["canCRY"].includes(t.type),
          l = (0, h.Z)().theme,
          i = (0, x.useRouter)();
        return (0, y.jsxs)("div", {
          className: f().poolItem,
          onClick: function () {
            s || i.push(t.url);
          },
          children: [
            (0, y.jsxs)("div", {
              className: a()(
                "flex items-center md:gap-4",
                f().rightBorder,
                f().iconText
              ),
              children: [
                (0, y.jsx)("div", {
                  className: f().tokenIcon,
                  children: (0, y.jsx)("img", { src: t.logo, alt: t.name })
                }),
                (0, y.jsxs)("div", {
                  className: "text-sm xl:text-xl text-left",
                  children: [
                    (0, y.jsx)("div", {
                      className: "font-bold",
                      children: t.token
                    }),
                    (0, y.jsx)("div", { children: t.platform })
                  ]
                })
              ]
            }),
            (0, y.jsxs)(v.Z, {
              visible: !s,
              children: [
                (0, y.jsx)("div", {
                  className: f().rightBorder,
                  children: t.apr
                }),
                (0, y.jsxs)("div", {
                  className: f().rightBorder,
                  style: { flexDirection: "column" },
                  children: [
                    (0, y.jsxs)("div", {
                      style: { display: "flex" },
                      children: [
                        t.totalLocked,
                        (0, y.jsxs)("span", {
                          style: { marginLeft: "5px" },
                          children: [" ", t.totalLockedTip]
                        })
                      ]
                    }),
                    (0, y.jsx)("div", { children: t.totalLockedValue })
                  ]
                }),
                (0, y.jsxs)("div", {
                  children: [t.myLocked, (0, y.jsx)("br", {}), t.myLockedValue]
                }),
                (0, y.jsx)("div", {
                  children: (0, y.jsx)(_(), {
                    href: t.url,
                    children: (0, y.jsx)("img", {
                      src:
                        "default" === l
                          ? "/assets/arrow-right-light.png"
                          : "/assets/arrow-right.png",
                      className: "w-8"
                    })
                  })
                })
              ]
            }),
            (0, y.jsxs)(v.Z, {
              visible: s,
              children: [
                (0, y.jsx)("div", {}),
                (0, y.jsx)("div", {
                  className: "absolute left-0 right-0 whitespace-nowrap",
                  children: "Coming Soon"
                }),
                (0, y.jsx)("div", {})
              ]
            })
          ]
        });
      }
      var g = s(39657),
        k = s.n(g),
        L = ["All", "canCNX", "canUSD", "canCRY"];
      function N() {
        var e = (0, l.useState)(L[0]),
          t = e[0],
          s = e[1],
          i = (0, u.j)(),
          n = i.list,
          c = i.info,
          m = (0, l.useMemo)(
            function () {
              return [
                { title: "Total Locked", value: c.totlaLocked },
                { title: "My Locked", value: c.myLocked }
              ];
            },
            [c]
          ),
          _ = (0, l.useMemo)(
            function () {
              return n
                .map(function (e) {
                  return {
                    logo: e.logo,
                    url: e.url,
                    token: e.name,
                    type: e.type,
                    platform: e.platform,
                    apr: e.apr,
                    totalLocked: e.totlaLocked.amount,
                    totalLockedTip: e.totlaLocked.totalPendingUnlock
                      ? (0, y.jsx)(d.Z, {
                          title: "Locked: "
                            .concat(
                              e.totlaLocked.totalLocked,
                              " CVX <br/> PendingUnlock: "
                            )
                            .concat(e.totlaLocked.totalPendingUnlock, " CVX")
                        })
                      : null,
                    totalLockedValue: e.totlaLocked.value,
                    myLocked: e.myLocked.amount,
                    myLockedValue: e.myLocked.value,
                    myClaimable: e.myClaimedYields.amount,
                    myClaimableValue: e.myClaimedYields.value
                  };
                })
                .filter(function (e) {
                  return "All" == t || e.type === t;
                });
            },
            [t, n]
          );
        return (0, y.jsx)("div", {
          className: k().vaultPage,
          children: (0, y.jsxs)("div", {
            className: "container",
            children: [
              (0, y.jsx)(o.Z, {
                title: "Canny",
                subtitle: "Claim Future Yields Today!"
              }),
              (0, y.jsx)("div", {
                className: a()(k().analytics, "flex gap-2 mb-8 justify-center"),
                children: m.map(function (e) {
                  return (0,
                  y.jsx)("div", { className: k().item, children: (0, y.jsxs)("div", { className: k().itemInner, children: [(0, y.jsx)("div", { className: k().title, children: e.title }), (0, y.jsx)("div", { className: k().value, children: e.value })] }) }, e.title);
                })
              }),
              (0, y.jsx)("div", {
                className: "flex items-center gap-4 mb-8",
                children: L.map(function (e) {
                  return (0, y.jsx)(
                    r.Z,
                    {
                      pure: !0,
                      onClick: function () {
                        return s(e);
                      },
                      theme: t !== e && "grey",
                      children: e
                    },
                    e
                  );
                })
              }),
              (0, y.jsxs)("div", {
                className: k().poolsList,
                children: [
                  (0, y.jsxs)("div", {
                    className: k().poolsListHeader,
                    children: [
                      (0, y.jsx)("div", {}),
                      (0, y.jsx)("div", { children: "APR" }),
                      (0, y.jsx)("div", { children: "Total Locked" }),
                      (0, y.jsx)("div", { children: "My Locked" }),
                      (0, y.jsx)("div", {})
                    ]
                  }),
                  _.map(function (e, t) {
                    return (0, y.jsx)(p, { item: e }, t);
                  })
                ]
              })
            ]
          })
        });
      }
      function b() {
        return (0, y.jsxs)(l.Fragment, {
          children: [
            (0, y.jsx)(n(), {
              children: (0, y.jsx)("title", {
                children: "Canny | curve, Convex | High performance - Vaults"
              })
            }),
            (0, y.jsx)(N, {})
          ]
        });
      }
    },
    52172: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/clever",
        function () {
          return s(64743);
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
    55060: function (e) {
      e.exports = {
        poolItem: "styles_poolItem___EQxw",
        tokenIcon: "styles_tokenIcon__3JOAt",
        iconText: "styles_iconText__GgyFe",
        rightBorder: "styles_rightBorder__Ydzf3"
      };
    },
    39657: function (e) {
      e.exports = {
        analytics: "styles_analytics__AdKBL",
        item: "styles_item___Z8Lg",
        title: "styles_title__VKwD2",
        value: "styles_value__E15VL",
        itemInner: "styles_itemInner__dYgAA",
        tabs: "styles_tabs__3Ym5K",
        tab: "styles_tab__3uDL7",
        active: "styles_active__36abE",
        poolsListHeader: "styles_poolsListHeader__jIGcn",
        banner: "styles_banner__Yj6GY",
        logo: "styles_logo__kma4n",
        img: "styles_img__KjYlc",
        logoText1: "styles_logoText1__lMaVv",
        logoText2: "styles_logoText2__Qunwe"
      };
    },
    9008: function (e, t, s) {
      e.exports = s(11597);
    }
  },
  function (e) {
    e.O(0, [3662, 8795, 6061, 9774, 2888, 179], function () {
      return e((e.s = 52172));
    }),
      (_N_E = e.O());
  }
]);
