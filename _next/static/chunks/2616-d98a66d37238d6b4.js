"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2616],
  {
    2100: function (e, r, o) {
      o.d(r, {
        cd: function () {
          return f;
        },
        uo: function () {
          return i;
        }
      });
      var a = o(59499),
        t = o(19029),
        c = o(48060);

      function n(e, r) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          r &&
            (a = a.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            o.push.apply(o, a);
        }
        return o;
      }

      function s(e) {
        for (var r = 1; r < arguments.length; r++) {
          var o = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? n(Object(o), !0).forEach(function (r) {
                (0, a.Z)(e, r, o[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : n(Object(o)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(o, r)
                );
              });
        }
        return e;
      }
      var d = "/assets/crypto-icons-stack.svg",
        l = "/assets/tokens/can.png",
        f = [
          {
            logo: "/assets/tokens/eth.png",
            logo2: l,
            id: 1,
            name: "CAN/ETH",
            platform: "CLever",
            fromPlatformIcon: "".concat(d, "#crv"),
            fromPlatform: "Curve",
            platformUrl: "https://curve.fi/factory-crypto/140",
            curveType: "curveCopyto",
            nameShow: "Curve_CLEV_ETH",
            apy: 0,
            tvlPriceTokenId: "Curve_CLEV_ETH",
            lpPoolToken: t.Z.POOLS_LIST_GAUGE.Curve_CLEV_ETH.lpPoolCurveToken,
            lpAddress: t.Z.POOLS_LIST_GAUGE.Curve_CLEV_ETH.token,
            lpGaugeAddress: t.Z.POOLS_LIST_GAUGE.Curve_CLEV_ETH.gauge,
            stakeTokenDecimals: 18,
            rewardTokenSymbol: "CLEV",
            rewardTokenDecimals: 18,
            isClevPrice: !0,
            zapTokens: [
              {
                symbol: "Curve_CLEV_ETH",
                icon: "/assets/tokens/eth.png",
                address: t.Z.POOLS_LIST_GAUGE.Curve_CLEV_ETH.token,
                needZap: !1,
                isLp: !0
              },
              s(
                s({}, t.Z.zapTokens.WETH),
                {},
                {
                  routes: ["0x4104342d1c4aa76ea6f5e5871b7f11a019a0eb713a4f"]
                }
              ),
              s(
                s({}, t.Z.zapTokens.ETH),
                {},
                {
                  routes: ["0x4104342d1c4aa76ea6f5e5871b7f11a019a0eb713a4f"]
                }
              ),
              s(
                s({}, t.Z.zapTokens.CLEV),
                {},
                {
                  routes: ["0x5504342d1c4aa76ea6f5e5871b7f11a019a0eb713a4f"]
                }
              ),
              s(
                s({}, t.Z.zapTokens.USDC),
                {},
                {
                  routes: [
                    "0x110188e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
                    "0x4104342d1c4aa76ea6f5e5871b7f11a019a0eb713a4f"
                  ]
                }
              )
            ]
          },
          {
            logo: "/assets/tokens/cvx.png",
            logo2: l,
            id: 4,
            name: "abcCVX",
            platform: "CLever",
            fromPlatformIcon: "".concat(d, "#crv"),
            fromPlatform: "Concentrator",
            platformUrl: "https://concentrator.aladdin.club/",
            nameShow: "abcCVX",
            apy: 0,
            tvlPriceTokenId: "curveLP-abcCVX",
            lpPoolToken:
              t.Z.POOLS_LIST_GAUGE.Concentrator_abcCVX.lpPoolCurveToken,
            lpAddress: t.Z.POOLS_LIST_GAUGE.Concentrator_abcCVX.token,
            lpGaugeAddress: t.Z.POOLS_LIST_GAUGE.Concentrator_abcCVX.gauge,
            stakeTokenDecimals: 18,
            rewardTokenSymbol: "CLEV",
            rewardTokenDecimals: 18,
            isLock: !1,
            zapTokens: [
              {
                symbol: "abcCVX",
                icon: "cvx",
                address: t.Z.POOLS_LIST_GAUGE.Concentrator_abcCVX.token,
                needZap: !1,
                isLp: !0
              }
            ]
          },
          {
            logo: "/assets/tokens/fraxusd.png",
            logo2: l,
            id: 5,
            name: "Curve canUSD/FraxBP",
            platform: "CLever",
            fromPlatformIcon: "".concat(d, "#crv"),
            fromPlatform: "Curve",
            isStaticPool: !0,
            apy: 0,
            lpAddress: t.Z.POOLS_LIST_GAUGE.Curve_canCNX_CVX.lpPoolCurveToken,
            lpPoolToken: t.Z.POOLS_LIST_GAUGE.Curve_canCNX_CVX.lpPoolCurveToken,
            lpGaugeAddress: t.Z.POOLS_LIST_GAUGE.Curve_canCNX_CVX.gauge,
            stakeTokenDecimals: 18,
            rewardTokenSymbol: "CLEV",
            rewardTokenDecimals: 18,
            isLock: !1
          },
          {
            logo: "/assets/tokens/cvx.png",
            logo2: l,
            id: 3,
            name: "Curve canCNX/CVX",
            platform: "CLever",
            fromPlatformIcon: "".concat(d, "#crv"),
            fromPlatform: "Curve",
            platformUrl: "https://curve.fi/factory/209",
            curveType: "curveStaticCoin",
            nameShow: "Curve_canCNX_CVX",
            apy: 0,
            tvlPriceTokenId: "curveLP-frax",
            lpPoolToken: t.Z.POOLS_LIST_GAUGE.Curve_canCNX_CVX.lpPoolCurveToken,
            lpAddress: t.Z.POOLS_LIST_GAUGE.Curve_canCNX_CVX.token,
            lpGaugeAddress: t.Z.POOLS_LIST_GAUGE.Curve_canCNX_CVX.gauge,
            stakeTokenDecimals: 18,
            rewardTokenSymbol: "CLEV",
            rewardTokenDecimals: 18,
            isLock: !1,
            isExpired: !0,
            zapTokens: [
              {
                symbol: "canCNX_CVX",
                icon: "cvx",
                address: t.Z.POOLS_LIST_GAUGE.Curve_canCNX_CVX.token,
                needZap: !1,
                isLp: !0
              },
              s(
                s({}, t.Z.zapTokens.CLEVCVX),
                {},
                {
                  routes: ["0x550ef9078fb962a7d13f55d40d49c8aa6472abd1a5a6"]
                }
              ),
              s(
                s({}, t.Z.zapTokens.CVX),
                {},
                {
                  routes: ["0x410ef9078fb962a7d13f55d40d49c8aa6472abd1a5a6"]
                }
              ),
              s(
                s({}, t.Z.zapTokens.WETH),
                {},
                {
                  routes: [
                    "0x1104b576491f1e6e5e62f1d8f26062ee822b40b0e0d4",
                    "0x410ef9078fb962a7d13f55d40d49c8aa6472abd1a5a6"
                  ]
                }
              ),
              s(
                s({}, t.Z.zapTokens.ETH),
                {},
                {
                  routes: [
                    "0x1104b576491f1e6e5e62f1d8f26062ee822b40b0e0d4",
                    "0x410ef9078fb962a7d13f55d40d49c8aa6472abd1a5a6"
                  ]
                }
              ),
              s(
                s({}, t.Z.zapTokens.USDC),
                {},
                {
                  routes: [
                    "0x110188e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
                    "0x1104b576491f1e6e5e62f1d8f26062ee822b40b0e0d4",
                    "0x410ef9078fb962a7d13f55d40d49c8aa6472abd1a5a6"
                  ]
                }
              )
            ]
          },
          {
            logo: "/assets/tokens/cvx.png",
            logo2: l,
            id: 2,
            name: "Balancer 90 canCNX/10 CVX",
            platform: "CLever",
            fromPlatformIcon: "/assets/tokens/balancer-logo.png",
            fromPlatform: "Balancer",
            platformUrl:
              "https://app.balancer.fi/#/pool/0x69671c808c8f1c1490a4c9e0145884dfb5631378000200000000000000000392",
            nameShow: "Balancer_canCNX_CVX",
            apy: 0,
            tvlPriceTokenId: "curveLP-frax",
            lpPoolId: t.Z.POOLS_LIST_GAUGE.Balancer_canCNX_CVX.balancerPoolId,
            lpAddress: t.Z.POOLS_LIST_GAUGE.Balancer_canCNX_CVX.token,
            lpGaugeAddress: t.Z.POOLS_LIST_GAUGE.Balancer_canCNX_CVX.gauge,
            stakeTokenDecimals: 18,
            rewardTokenSymbol: "CLEV",
            rewardTokenDecimals: 18,
            isLock: !1,
            isExpired: !0,
            zapTokens: [
              {
                symbol: "canCNX_CVX",
                icon: "cvx",
                address: t.Z.POOLS_LIST_GAUGE.Balancer_canCNX_CVX.token,
                needZap: !1,
                isLp: !0
              },
              s(
                s({}, t.Z.zapTokens.CLEVCVX),
                {},
                {
                  routes: []
                }
              ),
              s(
                s({}, t.Z.zapTokens.CVX),
                {},
                {
                  routes: ["0x110ef9078fb962a7d13f55d40d49c8aa6472abd1a5a6"]
                }
              ),
              s(
                s({}, t.Z.zapTokens.WETH),
                {},
                {
                  routes: [
                    "0x1104b576491f1e6e5e62f1d8f26062ee822b40b0e0d4",
                    "0x110ef9078fb962a7d13f55d40d49c8aa6472abd1a5a6"
                  ]
                }
              ),
              s(
                s({}, t.Z.zapTokens.ETH),
                {},
                {
                  routes: [
                    "0x1104b576491f1e6e5e62f1d8f26062ee822b40b0e0d4",
                    "0x110ef9078fb962a7d13f55d40d49c8aa6472abd1a5a6"
                  ]
                }
              ),
              s(
                s({}, t.Z.zapTokens.USDC),
                {},
                {
                  routes: [
                    "0x110188e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
                    "0x1104b576491f1e6e5e62f1d8f26062ee822b40b0e0d4",
                    "0x110ef9078fb962a7d13f55d40d49c8aa6472abd1a5a6"
                  ]
                }
              )
            ]
          }
        ],
        i = [
          {
            symbol: "canCNX",
            underlying: "CVX",
            hideUnderlying: !0,
            logos: ["/assets/tokens/cvx.png", "/assets/tokens/cvx.png"],
            icon: "cvx",
            apy: 1,
            farmingLpAddr: "0xf9078fb962a7d13f55d40d49c8aa6472abd1a5a6",
            isFurnace: !1,
            buyLick: "https://curve.fi/#/ethereum/pools/factory-v2-209/swap",
            approveTo: t.Z.contracts.transmuterCvx,
            furnaceAddr: t.Z.contracts.transmuterCvx,
            furnaceAbi: c.Z.TransmuterABI,
            address: t.Z.contracts.aldCvx
          },
          {
            symbol: "canUSD",
            underlying: "Frax",
            logos: ["/assets/tokens/fraxusd.png", "/assets/tokens/fraxusd.png"],
            icon: "frax",
            apy: 1,
            farmingLpAddr: "0x84c333e94aea4a51a21f6cf0c7f528c50dc7592c",
            buyLick: "https://curve.fi/#/ethereum/pools/factory-v2-237/deposit",
            hideUnderlying: !0,
            isFurnace: !0,
            approveTo: t.Z.contracts.metaFurnaceForFrax,
            furnaceAddr: t.Z.contracts.metaFurnaceForFrax,
            furnaceAbi: c.Z.MetaFurnaceABI,
            address: t.Z.tokens.canUSD,
            isExpired: !1
          }
        ];
    },
    42616: function (e, r, o) {
      var a = o(59499),
        t = o(50029),
        c = o(87794),
        n = o.n(c),
        s = o(67294),
        d = o(17e3),
        l = o(86920),
        f = o(75349),
        i = o(91622),
        u = o(2100),
        p = o(3612),
        C = o(48060),
        v = o(19029);

      function b(e, r) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          r &&
            (a = a.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            o.push.apply(o, a);
        }
        return o;
      }
      r.Z = function () {
        var e = (0, f.cq)(),
          r = e.getContract,
          o = e.erc20Contract,
          c = (0, i.h)(),
          m = (0, l.Z)().tokenPrice,
          T = (0, s.useCallback)(
            (0, t.Z)(
              n().mark(function e() {
                var t, s, d, l, f;
                return n().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = u.cd),
                            (s = 0.01),
                            (e.prev = 2),
                            (d = {}),
                            (l = {}),
                            t.forEach(function (e) {
                              var t = e.name,
                                c = e.nameShow,
                                n = e.isClevPrice,
                                d = e.fromPlatform,
                                f = e.isLock,
                                i = void 0 !== f && f,
                                u = e.lpAddress,
                                p = e.curveType,
                                m = v.Z.POOLS_LIST_GAUGE[c];
                              if (m && !i) {
                                var T = m.lpPoolCurveToken,
                                  k = m.balancerPoolId,
                                  L = m.abiType,
                                  _ = m.otherTokenIndex,
                                  P = m.checkLpPriceTokenIndex,
                                  y = m.underlyingAssets;
                                l[u.toLowerCase()] = (function (e) {
                                  for (var r = 1; r < arguments.length; r++) {
                                    var o =
                                      null != arguments[r] ? arguments[r] : {};
                                    r % 2
                                      ? b(Object(o), !0).forEach(function (r) {
                                          (0, a.Z)(e, r, o[r]);
                                        })
                                      : Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(
                                          e,
                                          Object.getOwnPropertyDescriptors(o)
                                        )
                                      : b(Object(o)).forEach(function (r) {
                                          Object.defineProperty(
                                            e,
                                            r,
                                            Object.getOwnPropertyDescriptor(
                                              o,
                                              r
                                            )
                                          );
                                        });
                                  }
                                  return e;
                                })(
                                  {
                                    name: t,
                                    nameShow: c,
                                    fromPlatform: d,
                                    lpAddress: u,
                                    isClevPrice: n
                                  },
                                  m
                                );
                                var O = o(u);
                                if ("curve" == d.toLowerCase()) {
                                  var S = r(T, [C.Z.CommonABI[L]]),
                                    g = y.map(function (e, r) {
                                      return S.methods.balances(r);
                                    }),
                                    E = r(
                                      T,
                                      "curveCopyto" == p
                                        ? C.Z.CurveCopytoABI
                                        : C.Z.CurveStaticCoinABI
                                    ),
                                    V = 1e18 * s,
                                    h = E.methods.get_dy(_, P, V.toString());
                                  (l[u.toLowerCase()].coinBalances = g),
                                    (l[u.toLowerCase()].get_dy = h),
                                    (l[u.toLowerCase()].coins0 =
                                      E.methods.coins(0)),
                                    (l[u.toLowerCase()].coins1 =
                                      E.methods.coins(1));
                                } else if ("balancer" == d.toLowerCase()) {
                                  var x = r(v.Z.contracts.BalancerContract, [
                                    C.Z.BalancerABI.getPoolTokens
                                  ]);
                                  l[u.toLowerCase()].coinBalances =
                                    x.methods.getPoolTokens(k);
                                }
                                l[u.toLowerCase()].totalSupply =
                                  O.methods.totalSupply();
                              }
                            }),
                            (e.next = 8),
                            c(l)
                          );
                        case 8:
                          return (
                            Object.keys((f = e.sent)).forEach(function (e) {
                              var r,
                                o = f[e],
                                a = o.fromPlatform,
                                t = o.name,
                                c = o.nameShow,
                                n = o.isClevPrice,
                                l = o.lpAddress,
                                i = o.underlyingAssets,
                                u = o.underlyingAssetsPercentage,
                                C = o.checkLpPriceTokenIndex,
                                v = o.get_dy,
                                b = o.otherTokenIndex,
                                T = o.otherTokenName,
                                k = o.checkLpTokenName,
                                L = o.coinBalances,
                                _ = o.totalSupply,
                                P = i[C][0],
                                y = i[C][1],
                                O = i[C][2],
                                S = i[b][1],
                                g = i[b][2],
                                E =
                                  null === (r = m["weth" == P ? "ETH" : P]) ||
                                  void 0 === r
                                    ? void 0
                                    : r.usd,
                                V = 0,
                                h = (0, p.F6)(0),
                                x = (0, p.F6)(0),
                                Z = (0, p.F6)(0),
                                w = 0,
                                A = {
                                  dy: Z.toFixed(4),
                                  tokenPrice: V,
                                  otherTokenAddress: S,
                                  otherTokenDecimal: g,
                                  otherTokenName: T,
                                  checkLpTokenName: k
                                };
                              if ("curve" == a.toLowerCase()) {
                                var X = L[C],
                                  G = L[b];
                                (V = (h = (Z = (0, p.F6)(v)
                                  .shiftedBy(-O)
                                  .div(s)).times(E)).toFixed(4)),
                                  (A.dy = Z.toFixed(4)),
                                  (A.tokenPrice = V),
                                  n && (w = V),
                                  (x = (0, p.F6)(X)
                                    .shiftedBy(-O)
                                    .times((0, p.F6)(E))
                                    .plus((0, p.F6)(G).shiftedBy(-g).times(h))
                                    .div((0, p.F6)(_).shiftedBy(-18)));
                              } else if ("balancer" == a.toLowerCase()) {
                                var I = u[y],
                                  U = u[S],
                                  F =
                                    L.tokens[0].toLowerCase() == y.toLowerCase()
                                      ? 0
                                      : 1,
                                  D =
                                    L.tokens[0].toLowerCase() == y.toLowerCase()
                                      ? 1
                                      : 0,
                                  B = L.balances[F],
                                  j = L.balances[D];
                                (V = (Z = (0, p.F6)(B)
                                  .times(U)
                                  .div((0, p.F6)(j).times(I)))
                                  .times(E)
                                  .toFixed(4)),
                                  (x = (0, p.F6)(B)
                                    .shiftedBy(-O)
                                    .multipliedBy(E)
                                    .div(I / 100)
                                    .div((0, p.F6)(_).div(1e18))),
                                  (A.dy = Z.toFixed(4)),
                                  (A.tokenPrice = V);
                              }
                              var z = x.toFixed(4);
                              d[e.toLowerCase()] = {
                                usd: z,
                                usdInwei: x,
                                lpAddress: l,
                                otherToeknPrice: V,
                                name: t,
                                nameShow: c,
                                ClevPrice: w,
                                otherTokenData: A
                              };
                            }),
                            e.abrupt("return", d)
                          );
                        case 14:
                          return (
                            (e.prev = 14),
                            (e.t0 = e.catch(2)),
                            console.log("getLpPrice----error---", e.t0),
                            e.abrupt("return", !1)
                          );
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 14]]
                );
              })
            ),
            [m, r, o, c]
          ),
          k = (0, d.a)({
            queryKey: ["farmPrice"],
            queryFn: T,
            enabled: !!(null != m && m.ETH)
          }),
          L = k.data,
          _ = k.refetch;
        return (
          (0, s.useEffect)(
            function () {
              null != m && m.ETH && _();
            },
            [m, _]
          ),
          {
            farmingPriceData: L,
            refetch: _
          }
        );
      };
    }
  }
]);
