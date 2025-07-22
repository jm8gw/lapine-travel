function Ky(a, u) {
  for (var o = 0; o < u.length; o++) {
    const c = u[o];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const s in c)
        if (s !== "default" && !(s in a)) {
          const d = Object.getOwnPropertyDescriptor(c, s);
          d &&
            Object.defineProperty(
              a,
              s,
              d.get ? d : { enumerable: !0, get: () => c[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(a, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const u = document.createElement("link").relList;
  if (u && u.supports && u.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) c(s);
  new MutationObserver((s) => {
    for (const d of s)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && c(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(s) {
    const d = {};
    return (
      s.integrity && (d.integrity = s.integrity),
      s.referrerPolicy && (d.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function c(s) {
    if (s.ep) return;
    s.ep = !0;
    const d = o(s);
    fetch(s.href, d);
  }
})();
function tv(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var To = { exports: {} },
  Si = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dh;
function Jy() {
  if (dh) return Si;
  dh = 1;
  var a = Symbol.for("react.transitional.element"),
    u = Symbol.for("react.fragment");
  function o(c, s, d) {
    var h = null;
    if (
      (d !== void 0 && (h = "" + d),
      s.key !== void 0 && (h = "" + s.key),
      "key" in s)
    ) {
      d = {};
      for (var v in s) v !== "key" && (d[v] = s[v]);
    } else d = s;
    return (
      (s = d.ref),
      { $$typeof: a, type: c, key: h, ref: s !== void 0 ? s : null, props: d }
    );
  }
  return (Si.Fragment = u), (Si.jsx = o), (Si.jsxs = o), Si;
}
var mh;
function Wy() {
  return mh || ((mh = 1), (To.exports = Jy())), To.exports;
}
var p = Wy(),
  No = { exports: {} },
  he = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hh;
function Fy() {
  if (hh) return he;
  hh = 1;
  var a = Symbol.for("react.transitional.element"),
    u = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    v = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    T = Symbol.iterator;
  function R(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (T && S[T]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    H = Object.assign,
    A = {};
  function _(S, Y, F) {
    (this.props = S),
      (this.context = Y),
      (this.refs = A),
      (this.updater = F || z);
  }
  (_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (S, Y) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, S, Y, "setState");
    }),
    (_.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    });
  function q() {}
  q.prototype = _.prototype;
  function L(S, Y, F) {
    (this.props = S),
      (this.context = Y),
      (this.refs = A),
      (this.updater = F || z);
  }
  var B = (L.prototype = new q());
  (B.constructor = L), H(B, _.prototype), (B.isPureReactComponent = !0);
  var Z = Array.isArray,
    V = { H: null, A: null, T: null, S: null, V: null },
    I = Object.prototype.hasOwnProperty;
  function W(S, Y, F, J, P, me) {
    return (
      (F = me.ref),
      { $$typeof: a, type: S, key: Y, ref: F !== void 0 ? F : null, props: me }
    );
  }
  function K(S, Y) {
    return W(S.type, Y, void 0, void 0, void 0, S.props);
  }
  function oe(S) {
    return typeof S == "object" && S !== null && S.$$typeof === a;
  }
  function ve(S) {
    var Y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (F) {
        return Y[F];
      })
    );
  }
  var be = /\/+/g;
  function de(S, Y) {
    return typeof S == "object" && S !== null && S.key != null
      ? ve("" + S.key)
      : Y.toString(36);
  }
  function ge() {}
  function xe(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (
          (typeof S.status == "string"
            ? S.then(ge, ge)
            : ((S.status = "pending"),
              S.then(
                function (Y) {
                  S.status === "pending" &&
                    ((S.status = "fulfilled"), (S.value = Y));
                },
                function (Y) {
                  S.status === "pending" &&
                    ((S.status = "rejected"), (S.reason = Y));
                }
              )),
          S.status)
        ) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function ue(S, Y, F, J, P) {
    var me = typeof S;
    (me === "undefined" || me === "boolean") && (S = null);
    var ie = !1;
    if (S === null) ie = !0;
    else
      switch (me) {
        case "bigint":
        case "string":
        case "number":
          ie = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case a:
            case u:
              ie = !0;
              break;
            case b:
              return (ie = S._init), ue(ie(S._payload), Y, F, J, P);
          }
      }
    if (ie)
      return (
        (P = P(S)),
        (ie = J === "" ? "." + de(S, 0) : J),
        Z(P)
          ? ((F = ""),
            ie != null && (F = ie.replace(be, "$&/") + "/"),
            ue(P, Y, F, "", function (Me) {
              return Me;
            }))
          : P != null &&
            (oe(P) &&
              (P = K(
                P,
                F +
                  (P.key == null || (S && S.key === P.key)
                    ? ""
                    : ("" + P.key).replace(be, "$&/") + "/") +
                  ie
              )),
            Y.push(P)),
        1
      );
    ie = 0;
    var $ = J === "" ? "." : J + ":";
    if (Z(S))
      for (var re = 0; re < S.length; re++)
        (J = S[re]), (me = $ + de(J, re)), (ie += ue(J, Y, F, me, P));
    else if (((re = R(S)), typeof re == "function"))
      for (S = re.call(S), re = 0; !(J = S.next()).done; )
        (J = J.value), (me = $ + de(J, re++)), (ie += ue(J, Y, F, me, P));
    else if (me === "object") {
      if (typeof S.then == "function") return ue(xe(S), Y, F, J, P);
      throw (
        ((Y = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Y === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : Y) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return ie;
  }
  function C(S, Y, F) {
    if (S == null) return S;
    var J = [],
      P = 0;
    return (
      ue(S, J, "", "", function (me) {
        return Y.call(F, me, P++);
      }),
      J
    );
  }
  function Q(S) {
    if (S._status === -1) {
      var Y = S._result;
      (Y = Y()),
        Y.then(
          function (F) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = F));
          },
          function (F) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = F));
          }
        ),
        S._status === -1 && ((S._status = 0), (S._result = Y));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var U =
    typeof reportError == "function"
      ? reportError
      : function (S) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var Y = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof S == "object" &&
                S !== null &&
                typeof S.message == "string"
                  ? String(S.message)
                  : String(S),
              error: S,
            });
            if (!window.dispatchEvent(Y)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", S);
            return;
          }
          console.error(S);
        };
  function ne() {}
  return (
    (he.Children = {
      map: C,
      forEach: function (S, Y, F) {
        C(
          S,
          function () {
            Y.apply(this, arguments);
          },
          F
        );
      },
      count: function (S) {
        var Y = 0;
        return (
          C(S, function () {
            Y++;
          }),
          Y
        );
      },
      toArray: function (S) {
        return (
          C(S, function (Y) {
            return Y;
          }) || []
        );
      },
      only: function (S) {
        if (!oe(S))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return S;
      },
    }),
    (he.Component = _),
    (he.Fragment = o),
    (he.Profiler = s),
    (he.PureComponent = L),
    (he.StrictMode = c),
    (he.Suspense = y),
    (he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V),
    (he.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return V.H.useMemoCache(S);
      },
    }),
    (he.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (he.cloneElement = function (S, Y, F) {
      if (S == null)
        throw Error(
          "The argument must be a React element, but you passed " + S + "."
        );
      var J = H({}, S.props),
        P = S.key,
        me = void 0;
      if (Y != null)
        for (ie in (Y.ref !== void 0 && (me = void 0),
        Y.key !== void 0 && (P = "" + Y.key),
        Y))
          !I.call(Y, ie) ||
            ie === "key" ||
            ie === "__self" ||
            ie === "__source" ||
            (ie === "ref" && Y.ref === void 0) ||
            (J[ie] = Y[ie]);
      var ie = arguments.length - 2;
      if (ie === 1) J.children = F;
      else if (1 < ie) {
        for (var $ = Array(ie), re = 0; re < ie; re++)
          $[re] = arguments[re + 2];
        J.children = $;
      }
      return W(S.type, P, void 0, void 0, me, J);
    }),
    (he.createContext = function (S) {
      return (
        (S = {
          $$typeof: h,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: d, _context: S }),
        S
      );
    }),
    (he.createElement = function (S, Y, F) {
      var J,
        P = {},
        me = null;
      if (Y != null)
        for (J in (Y.key !== void 0 && (me = "" + Y.key), Y))
          I.call(Y, J) &&
            J !== "key" &&
            J !== "__self" &&
            J !== "__source" &&
            (P[J] = Y[J]);
      var ie = arguments.length - 2;
      if (ie === 1) P.children = F;
      else if (1 < ie) {
        for (var $ = Array(ie), re = 0; re < ie; re++)
          $[re] = arguments[re + 2];
        P.children = $;
      }
      if (S && S.defaultProps)
        for (J in ((ie = S.defaultProps), ie))
          P[J] === void 0 && (P[J] = ie[J]);
      return W(S, me, void 0, void 0, null, P);
    }),
    (he.createRef = function () {
      return { current: null };
    }),
    (he.forwardRef = function (S) {
      return { $$typeof: v, render: S };
    }),
    (he.isValidElement = oe),
    (he.lazy = function (S) {
      return { $$typeof: b, _payload: { _status: -1, _result: S }, _init: Q };
    }),
    (he.memo = function (S, Y) {
      return { $$typeof: g, type: S, compare: Y === void 0 ? null : Y };
    }),
    (he.startTransition = function (S) {
      var Y = V.T,
        F = {};
      V.T = F;
      try {
        var J = S(),
          P = V.S;
        P !== null && P(F, J),
          typeof J == "object" &&
            J !== null &&
            typeof J.then == "function" &&
            J.then(ne, U);
      } catch (me) {
        U(me);
      } finally {
        V.T = Y;
      }
    }),
    (he.unstable_useCacheRefresh = function () {
      return V.H.useCacheRefresh();
    }),
    (he.use = function (S) {
      return V.H.use(S);
    }),
    (he.useActionState = function (S, Y, F) {
      return V.H.useActionState(S, Y, F);
    }),
    (he.useCallback = function (S, Y) {
      return V.H.useCallback(S, Y);
    }),
    (he.useContext = function (S) {
      return V.H.useContext(S);
    }),
    (he.useDebugValue = function () {}),
    (he.useDeferredValue = function (S, Y) {
      return V.H.useDeferredValue(S, Y);
    }),
    (he.useEffect = function (S, Y, F) {
      var J = V.H;
      if (typeof F == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return J.useEffect(S, Y);
    }),
    (he.useId = function () {
      return V.H.useId();
    }),
    (he.useImperativeHandle = function (S, Y, F) {
      return V.H.useImperativeHandle(S, Y, F);
    }),
    (he.useInsertionEffect = function (S, Y) {
      return V.H.useInsertionEffect(S, Y);
    }),
    (he.useLayoutEffect = function (S, Y) {
      return V.H.useLayoutEffect(S, Y);
    }),
    (he.useMemo = function (S, Y) {
      return V.H.useMemo(S, Y);
    }),
    (he.useOptimistic = function (S, Y) {
      return V.H.useOptimistic(S, Y);
    }),
    (he.useReducer = function (S, Y, F) {
      return V.H.useReducer(S, Y, F);
    }),
    (he.useRef = function (S) {
      return V.H.useRef(S);
    }),
    (he.useState = function (S) {
      return V.H.useState(S);
    }),
    (he.useSyncExternalStore = function (S, Y, F) {
      return V.H.useSyncExternalStore(S, Y, F);
    }),
    (he.useTransition = function () {
      return V.H.useTransition();
    }),
    (he.version = "19.1.0"),
    he
  );
}
var vh;
function rs() {
  return vh || ((vh = 1), (No.exports = Fy())), No.exports;
}
var E = rs();
const Kl = tv(E),
  lv = Ky({ __proto__: null, default: Kl }, [E]);
var Ro = { exports: {} },
  Ei = {},
  Oo = { exports: {} },
  Co = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gh;
function $y() {
  return (
    gh ||
      ((gh = 1),
      (function (a) {
        function u(C, Q) {
          var U = C.length;
          C.push(Q);
          e: for (; 0 < U; ) {
            var ne = (U - 1) >>> 1,
              S = C[ne];
            if (0 < s(S, Q)) (C[ne] = Q), (C[U] = S), (U = ne);
            else break e;
          }
        }
        function o(C) {
          return C.length === 0 ? null : C[0];
        }
        function c(C) {
          if (C.length === 0) return null;
          var Q = C[0],
            U = C.pop();
          if (U !== Q) {
            C[0] = U;
            e: for (var ne = 0, S = C.length, Y = S >>> 1; ne < Y; ) {
              var F = 2 * (ne + 1) - 1,
                J = C[F],
                P = F + 1,
                me = C[P];
              if (0 > s(J, U))
                P < S && 0 > s(me, J)
                  ? ((C[ne] = me), (C[P] = U), (ne = P))
                  : ((C[ne] = J), (C[F] = U), (ne = F));
              else if (P < S && 0 > s(me, U))
                (C[ne] = me), (C[P] = U), (ne = P);
              else break e;
            }
          }
          return Q;
        }
        function s(C, Q) {
          var U = C.sortIndex - Q.sortIndex;
          return U !== 0 ? U : C.id - Q.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          a.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            v = h.now();
          a.unstable_now = function () {
            return h.now() - v;
          };
        }
        var y = [],
          g = [],
          b = 1,
          T = null,
          R = 3,
          z = !1,
          H = !1,
          A = !1,
          _ = !1,
          q = typeof setTimeout == "function" ? setTimeout : null,
          L = typeof clearTimeout == "function" ? clearTimeout : null,
          B = typeof setImmediate < "u" ? setImmediate : null;
        function Z(C) {
          for (var Q = o(g); Q !== null; ) {
            if (Q.callback === null) c(g);
            else if (Q.startTime <= C)
              c(g), (Q.sortIndex = Q.expirationTime), u(y, Q);
            else break;
            Q = o(g);
          }
        }
        function V(C) {
          if (((A = !1), Z(C), !H))
            if (o(y) !== null) (H = !0), I || ((I = !0), de());
            else {
              var Q = o(g);
              Q !== null && ue(V, Q.startTime - C);
            }
        }
        var I = !1,
          W = -1,
          K = 5,
          oe = -1;
        function ve() {
          return _ ? !0 : !(a.unstable_now() - oe < K);
        }
        function be() {
          if (((_ = !1), I)) {
            var C = a.unstable_now();
            oe = C;
            var Q = !0;
            try {
              e: {
                (H = !1), A && ((A = !1), L(W), (W = -1)), (z = !0);
                var U = R;
                try {
                  t: {
                    for (
                      Z(C), T = o(y);
                      T !== null && !(T.expirationTime > C && ve());

                    ) {
                      var ne = T.callback;
                      if (typeof ne == "function") {
                        (T.callback = null), (R = T.priorityLevel);
                        var S = ne(T.expirationTime <= C);
                        if (((C = a.unstable_now()), typeof S == "function")) {
                          (T.callback = S), Z(C), (Q = !0);
                          break t;
                        }
                        T === o(y) && c(y), Z(C);
                      } else c(y);
                      T = o(y);
                    }
                    if (T !== null) Q = !0;
                    else {
                      var Y = o(g);
                      Y !== null && ue(V, Y.startTime - C), (Q = !1);
                    }
                  }
                  break e;
                } finally {
                  (T = null), (R = U), (z = !1);
                }
                Q = void 0;
              }
            } finally {
              Q ? de() : (I = !1);
            }
          }
        }
        var de;
        if (typeof B == "function")
          de = function () {
            B(be);
          };
        else if (typeof MessageChannel < "u") {
          var ge = new MessageChannel(),
            xe = ge.port2;
          (ge.port1.onmessage = be),
            (de = function () {
              xe.postMessage(null);
            });
        } else
          de = function () {
            q(be, 0);
          };
        function ue(C, Q) {
          W = q(function () {
            C(a.unstable_now());
          }, Q);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (C) {
            C.callback = null;
          }),
          (a.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (K = 0 < C ? Math.floor(1e3 / C) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (a.unstable_next = function (C) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = R;
            }
            var U = R;
            R = Q;
            try {
              return C();
            } finally {
              R = U;
            }
          }),
          (a.unstable_requestPaint = function () {
            _ = !0;
          }),
          (a.unstable_runWithPriority = function (C, Q) {
            switch (C) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                C = 3;
            }
            var U = R;
            R = C;
            try {
              return Q();
            } finally {
              R = U;
            }
          }),
          (a.unstable_scheduleCallback = function (C, Q, U) {
            var ne = a.unstable_now();
            switch (
              (typeof U == "object" && U !== null
                ? ((U = U.delay),
                  (U = typeof U == "number" && 0 < U ? ne + U : ne))
                : (U = ne),
              C)
            ) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = U + S),
              (C = {
                id: b++,
                callback: Q,
                priorityLevel: C,
                startTime: U,
                expirationTime: S,
                sortIndex: -1,
              }),
              U > ne
                ? ((C.sortIndex = U),
                  u(g, C),
                  o(y) === null &&
                    C === o(g) &&
                    (A ? (L(W), (W = -1)) : (A = !0), ue(V, U - ne)))
                : ((C.sortIndex = S),
                  u(y, C),
                  H || z || ((H = !0), I || ((I = !0), de()))),
              C
            );
          }),
          (a.unstable_shouldYield = ve),
          (a.unstable_wrapCallback = function (C) {
            var Q = R;
            return function () {
              var U = R;
              R = Q;
              try {
                return C.apply(this, arguments);
              } finally {
                R = U;
              }
            };
          });
      })(Co)),
    Co
  );
}
var ph;
function Py() {
  return ph || ((ph = 1), (Oo.exports = $y())), Oo.exports;
}
var Mo = { exports: {} },
  ft = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yh;
function Iy() {
  if (yh) return ft;
  yh = 1;
  var a = rs();
  function u(y) {
    var g = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        g += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var c = {
      d: {
        f: o,
        r: function () {
          throw Error(u(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function d(y, g, b) {
    var T =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: T == null ? null : "" + T,
      children: y,
      containerInfo: g,
      implementation: b,
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(y, g) {
    if (y === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (ft.createPortal = function (y, g) {
      var b =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(u(299));
      return d(y, g, null, b);
    }),
    (ft.flushSync = function (y) {
      var g = h.T,
        b = c.p;
      try {
        if (((h.T = null), (c.p = 2), y)) return y();
      } finally {
        (h.T = g), (c.p = b), c.d.f();
      }
    }),
    (ft.preconnect = function (y, g) {
      typeof y == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        c.d.C(y, g));
    }),
    (ft.prefetchDNS = function (y) {
      typeof y == "string" && c.d.D(y);
    }),
    (ft.preinit = function (y, g) {
      if (typeof y == "string" && g && typeof g.as == "string") {
        var b = g.as,
          T = v(b, g.crossOrigin),
          R = typeof g.integrity == "string" ? g.integrity : void 0,
          z = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        b === "style"
          ? c.d.S(y, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: T,
              integrity: R,
              fetchPriority: z,
            })
          : b === "script" &&
            c.d.X(y, {
              crossOrigin: T,
              integrity: R,
              fetchPriority: z,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (ft.preinitModule = function (y, g) {
      if (typeof y == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var b = v(g.as, g.crossOrigin);
            c.d.M(y, {
              crossOrigin: b,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && c.d.M(y);
    }),
    (ft.preload = function (y, g) {
      if (
        typeof y == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var b = g.as,
          T = v(b, g.crossOrigin);
        c.d.L(y, b, {
          crossOrigin: T,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (ft.preloadModule = function (y, g) {
      if (typeof y == "string")
        if (g) {
          var b = v(g.as, g.crossOrigin);
          c.d.m(y, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: b,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else c.d.m(y);
    }),
    (ft.requestFormReset = function (y) {
      c.d.r(y);
    }),
    (ft.unstable_batchedUpdates = function (y, g) {
      return y(g);
    }),
    (ft.useFormState = function (y, g, b) {
      return h.H.useFormState(y, g, b);
    }),
    (ft.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (ft.version = "19.1.0"),
    ft
  );
}
var bh;
function nv() {
  if (bh) return Mo.exports;
  bh = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (u) {
        console.error(u);
      }
  }
  return a(), (Mo.exports = Iy()), Mo.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xh;
function e0() {
  if (xh) return Ei;
  xh = 1;
  var a = Py(),
    u = rs(),
    o = nv();
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function d(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (d(e) !== e) throw Error(c(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = d(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var l = e, n = t; ; ) {
      var i = l.return;
      if (i === null) break;
      var r = i.alternate;
      if (r === null) {
        if (((n = i.return), n !== null)) {
          l = n;
          continue;
        }
        break;
      }
      if (i.child === r.child) {
        for (r = i.child; r; ) {
          if (r === l) return v(i), e;
          if (r === n) return v(i), t;
          r = r.sibling;
        }
        throw Error(c(188));
      }
      if (l.return !== n.return) (l = i), (n = r);
      else {
        for (var f = !1, m = i.child; m; ) {
          if (m === l) {
            (f = !0), (l = i), (n = r);
            break;
          }
          if (m === n) {
            (f = !0), (n = i), (l = r);
            break;
          }
          m = m.sibling;
        }
        if (!f) {
          for (m = r.child; m; ) {
            if (m === l) {
              (f = !0), (l = r), (n = i);
              break;
            }
            if (m === n) {
              (f = !0), (n = r), (l = i);
              break;
            }
            m = m.sibling;
          }
          if (!f) throw Error(c(189));
        }
      }
      if (l.alternate !== n) throw Error(c(190));
    }
    if (l.tag !== 3) throw Error(c(188));
    return l.stateNode.current === l ? e : t;
  }
  function g(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = g(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign,
    T = Symbol.for("react.element"),
    R = Symbol.for("react.transitional.element"),
    z = Symbol.for("react.portal"),
    H = Symbol.for("react.fragment"),
    A = Symbol.for("react.strict_mode"),
    _ = Symbol.for("react.profiler"),
    q = Symbol.for("react.provider"),
    L = Symbol.for("react.consumer"),
    B = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    V = Symbol.for("react.suspense"),
    I = Symbol.for("react.suspense_list"),
    W = Symbol.for("react.memo"),
    K = Symbol.for("react.lazy"),
    oe = Symbol.for("react.activity"),
    ve = Symbol.for("react.memo_cache_sentinel"),
    be = Symbol.iterator;
  function de(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (be && e[be]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ge = Symbol.for("react.client.reference");
  function xe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ge ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case H:
        return "Fragment";
      case _:
        return "Profiler";
      case A:
        return "StrictMode";
      case V:
        return "Suspense";
      case I:
        return "SuspenseList";
      case oe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case z:
          return "Portal";
        case B:
          return (e.displayName || "Context") + ".Provider";
        case L:
          return (e._context.displayName || "Context") + ".Consumer";
        case Z:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case W:
          return (
            (t = e.displayName || null), t !== null ? t : xe(e.type) || "Memo"
          );
        case K:
          (t = e._payload), (e = e._init);
          try {
            return xe(e(t));
          } catch {}
      }
    return null;
  }
  var ue = Array.isArray,
    C = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = { pending: !1, data: null, method: null, action: null },
    ne = [],
    S = -1;
  function Y(e) {
    return { current: e };
  }
  function F(e) {
    0 > S || ((e.current = ne[S]), (ne[S] = null), S--);
  }
  function J(e, t) {
    S++, (ne[S] = e.current), (e.current = t);
  }
  var P = Y(null),
    me = Y(null),
    ie = Y(null),
    $ = Y(null);
  function re(e, t) {
    switch ((J(ie, t), J(me, e), J(P, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Gm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = Gm(t)), (e = Ym(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    F(P), J(P, e);
  }
  function Me() {
    F(P), F(me), F(ie);
  }
  function Ne(e) {
    e.memoizedState !== null && J($, e);
    var t = P.current,
      l = Ym(t, e.type);
    t !== l && (J(me, e), J(P, l));
  }
  function Ee(e) {
    me.current === e && (F(P), F(me)),
      $.current === e && (F($), (gi._currentValue = U));
  }
  var Ae = Object.prototype.hasOwnProperty,
    nt = a.unstable_scheduleCallback,
    ht = a.unstable_cancelCallback,
    en = a.unstable_shouldYield,
    tn = a.unstable_requestPaint,
    ct = a.unstable_now,
    du = a.unstable_getCurrentPriorityLevel,
    ln = a.unstable_ImmediatePriority,
    xs = a.unstable_UserBlockingPriority,
    Mi = a.unstable_NormalPriority,
    Og = a.unstable_LowPriority,
    Ss = a.unstable_IdlePriority,
    Cg = a.log,
    Mg = a.unstable_setDisableYieldValue,
    wa = null,
    Et = null;
  function El(e) {
    if (
      (typeof Cg == "function" && Mg(e),
      Et && typeof Et.setStrictMode == "function")
    )
      try {
        Et.setStrictMode(wa, e);
      } catch {}
  }
  var At = Math.clz32 ? Math.clz32 : zg,
    _g = Math.log,
    Dg = Math.LN2;
  function zg(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((_g(e) / Dg) | 0)) | 0;
  }
  var _i = 256,
    Di = 4194304;
  function nn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function zi(e, t, l) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0,
      r = e.suspendedLanes,
      f = e.pingedLanes;
    e = e.warmLanes;
    var m = n & 134217727;
    return (
      m !== 0
        ? ((n = m & ~r),
          n !== 0
            ? (i = nn(n))
            : ((f &= m),
              f !== 0
                ? (i = nn(f))
                : l || ((l = m & ~e), l !== 0 && (i = nn(l)))))
        : ((m = n & ~r),
          m !== 0
            ? (i = nn(m))
            : f !== 0
            ? (i = nn(f))
            : l || ((l = n & ~e), l !== 0 && (i = nn(l)))),
      i === 0
        ? 0
        : t !== 0 &&
          t !== i &&
          (t & r) === 0 &&
          ((r = i & -i),
          (l = t & -t),
          r >= l || (r === 32 && (l & 4194048) !== 0))
        ? t
        : i
    );
  }
  function Ta(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function jg(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Es() {
    var e = _i;
    return (_i <<= 1), (_i & 4194048) === 0 && (_i = 256), e;
  }
  function As() {
    var e = Di;
    return (Di <<= 1), (Di & 62914560) === 0 && (Di = 4194304), e;
  }
  function mu(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Na(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Ug(e, t, l, n, i, r) {
    var f = e.pendingLanes;
    (e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0);
    var m = e.entanglements,
      x = e.expirationTimes,
      M = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var G = 31 - At(l),
        X = 1 << G;
      (m[G] = 0), (x[G] = -1);
      var D = M[G];
      if (D !== null)
        for (M[G] = null, G = 0; G < D.length; G++) {
          var j = D[G];
          j !== null && (j.lane &= -536870913);
        }
      l &= ~X;
    }
    n !== 0 && ws(e, n, 0),
      r !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(f & ~t));
  }
  function ws(e, t, l) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var n = 31 - At(t);
    (e.entangledLanes |= t),
      (e.entanglements[n] = e.entanglements[n] | 1073741824 | (l & 4194090));
  }
  function Ts(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var n = 31 - At(l),
        i = 1 << n;
      (i & t) | (e[n] & t) && (e[n] |= t), (l &= ~i);
    }
  }
  function hu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function vu(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ns() {
    var e = Q.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : rh(e.type));
  }
  function Hg(e, t) {
    var l = Q.p;
    try {
      return (Q.p = e), t();
    } finally {
      Q.p = l;
    }
  }
  var Al = Math.random().toString(36).slice(2),
    ot = "__reactFiber$" + Al,
    vt = "__reactProps$" + Al,
    Rn = "__reactContainer$" + Al,
    gu = "__reactEvents$" + Al,
    Bg = "__reactListeners$" + Al,
    Lg = "__reactHandles$" + Al,
    Rs = "__reactResources$" + Al,
    Ra = "__reactMarker$" + Al;
  function pu(e) {
    delete e[ot], delete e[vt], delete e[gu], delete e[Bg], delete e[Lg];
  }
  function On(e) {
    var t = e[ot];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[Rn] || l[ot])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = Qm(e); e !== null; ) {
            if ((l = e[ot])) return l;
            e = Qm(e);
          }
        return t;
      }
      (e = l), (l = e.parentNode);
    }
    return null;
  }
  function Cn(e) {
    if ((e = e[ot] || e[Rn])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Oa(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Mn(e) {
    var t = e[Rs];
    return (
      t ||
        (t = e[Rs] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Pe(e) {
    e[Ra] = !0;
  }
  var Os = new Set(),
    Cs = {};
  function an(e, t) {
    _n(e, t), _n(e + "Capture", t);
  }
  function _n(e, t) {
    for (Cs[e] = t, e = 0; e < t.length; e++) Os.add(t[e]);
  }
  var qg = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Ms = {},
    _s = {};
  function Gg(e) {
    return Ae.call(_s, e)
      ? !0
      : Ae.call(Ms, e)
      ? !1
      : qg.test(e)
      ? (_s[e] = !0)
      : ((Ms[e] = !0), !1);
  }
  function ji(e, t, l) {
    if (Gg(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function Ui(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function nl(e, t, l, n) {
    if (n === null) e.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + n);
    }
  }
  var yu, Ds;
  function Dn(e) {
    if (yu === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        (yu = (t && t[1]) || ""),
          (Ds =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      yu +
      e +
      Ds
    );
  }
  var bu = !1;
  function xu(e, t) {
    if (!e || bu) return "";
    bu = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var X = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(X.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(X, []);
                } catch (j) {
                  var D = j;
                }
                Reflect.construct(e, [], X);
              } else {
                try {
                  X.call();
                } catch (j) {
                  D = j;
                }
                e.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                D = j;
              }
              (X = e()) &&
                typeof X.catch == "function" &&
                X.catch(function () {});
            }
          } catch (j) {
            if (j && D && typeof j.stack == "string") return [j.stack, D.stack];
          }
          return [null, null];
        },
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      i &&
        i.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var r = n.DetermineComponentFrameRoot(),
        f = r[0],
        m = r[1];
      if (f && m) {
        var x = f.split(`
`),
          M = m.split(`
`);
        for (
          i = n = 0;
          n < x.length && !x[n].includes("DetermineComponentFrameRoot");

        )
          n++;
        for (; i < M.length && !M[i].includes("DetermineComponentFrameRoot"); )
          i++;
        if (n === x.length || i === M.length)
          for (
            n = x.length - 1, i = M.length - 1;
            1 <= n && 0 <= i && x[n] !== M[i];

          )
            i--;
        for (; 1 <= n && 0 <= i; n--, i--)
          if (x[n] !== M[i]) {
            if (n !== 1 || i !== 1)
              do
                if ((n--, i--, 0 > i || x[n] !== M[i])) {
                  var G =
                    `
` + x[n].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      G.includes("<anonymous>") &&
                      (G = G.replace("<anonymous>", e.displayName)),
                    G
                  );
                }
              while (1 <= n && 0 <= i);
            break;
          }
      }
    } finally {
      (bu = !1), (Error.prepareStackTrace = l);
    }
    return (l = e ? e.displayName || e.name : "") ? Dn(l) : "";
  }
  function Yg(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Dn(e.type);
      case 16:
        return Dn("Lazy");
      case 13:
        return Dn("Suspense");
      case 19:
        return Dn("SuspenseList");
      case 0:
      case 15:
        return xu(e.type, !1);
      case 11:
        return xu(e.type.render, !1);
      case 1:
        return xu(e.type, !0);
      case 31:
        return Dn("Activity");
      default:
        return "";
    }
  }
  function zs(e) {
    try {
      var t = "";
      do (t += Yg(e)), (e = e.return);
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function zt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function js(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function kg(e) {
    var t = js(e) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      n = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var i = l.get,
        r = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (f) {
            (n = "" + f), r.call(this, f);
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (f) {
            n = "" + f;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Hi(e) {
    e._valueTracker || (e._valueTracker = kg(e));
  }
  function Us(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      n = "";
    return (
      e && (n = js(e) ? (e.checked ? "true" : "false") : e.value),
      (e = n),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function Bi(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Vg = /[\n"\\]/g;
  function jt(e) {
    return e.replace(Vg, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Su(e, t, l, n, i, r, f, m) {
    (e.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (e.type = f)
        : e.removeAttribute("type"),
      t != null
        ? f === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + zt(t))
          : e.value !== "" + zt(t) && (e.value = "" + zt(t))
        : (f !== "submit" && f !== "reset") || e.removeAttribute("value"),
      t != null
        ? Eu(e, f, zt(t))
        : l != null
        ? Eu(e, f, zt(l))
        : n != null && e.removeAttribute("value"),
      i == null && r != null && (e.defaultChecked = !!r),
      i != null &&
        (e.checked = i && typeof i != "function" && typeof i != "symbol"),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (e.name = "" + zt(m))
        : e.removeAttribute("name");
  }
  function Hs(e, t, l, n, i, r, f, m) {
    if (
      (r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (e.type = r),
      t != null || l != null)
    ) {
      if (!((r !== "submit" && r !== "reset") || t != null)) return;
      (l = l != null ? "" + zt(l) : ""),
        (t = t != null ? "" + zt(t) : l),
        m || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = n ?? i),
      (n = typeof n != "function" && typeof n != "symbol" && !!n),
      (e.checked = m ? e.checked : !!n),
      (e.defaultChecked = !!n),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.name = f);
  }
  function Eu(e, t, l) {
    (t === "number" && Bi(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function zn(e, t, l, n) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < l.length; i++) t["$" + l[i]] = !0;
      for (l = 0; l < e.length; l++)
        (i = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== i && (e[l].selected = i),
          i && n && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + zt(l), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === l) {
          (e[i].selected = !0), n && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Bs(e, t, l) {
    if (
      t != null &&
      ((t = "" + zt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + zt(l) : "";
  }
  function Ls(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(c(92));
        if (ue(n)) {
          if (1 < n.length) throw Error(c(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), (t = l);
    }
    (l = zt(t)),
      (e.defaultValue = l),
      (n = e.textContent),
      n === l && n !== "" && n !== null && (e.value = n);
  }
  function jn(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Xg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qs(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? n
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : n
      ? e.setProperty(t, l)
      : typeof l != "number" || l === 0 || Xg.has(t)
      ? t === "float"
        ? (e.cssFloat = l)
        : (e[t] = ("" + l).trim())
      : (e[t] = l + "px");
  }
  function Gs(e, t, l) {
    if (t != null && typeof t != "object") throw Error(c(62));
    if (((e = e.style), l != null)) {
      for (var n in l)
        !l.hasOwnProperty(n) ||
          (t != null && t.hasOwnProperty(n)) ||
          (n.indexOf("--") === 0
            ? e.setProperty(n, "")
            : n === "float"
            ? (e.cssFloat = "")
            : (e[n] = ""));
      for (var i in t)
        (n = t[i]), t.hasOwnProperty(i) && l[i] !== n && qs(e, i, n);
    } else for (var r in t) t.hasOwnProperty(r) && qs(e, r, t[r]);
  }
  function Au(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Qg = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Zg =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Li(e) {
    return Zg.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var wu = null;
  function Tu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Un = null,
    Hn = null;
  function Ys(e) {
    var t = Cn(e);
    if (t && (e = t.stateNode)) {
      var l = e[vt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Su(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + jt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var n = l[t];
              if (n !== e && n.form === e.form) {
                var i = n[vt] || null;
                if (!i) throw Error(c(90));
                Su(
                  n,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              (n = l[t]), n.form === e.form && Us(n);
          }
          break e;
        case "textarea":
          Bs(e, l.value, l.defaultValue);
          break e;
        case "select":
          (t = l.value), t != null && zn(e, !!l.multiple, t, !1);
      }
    }
  }
  var Nu = !1;
  function ks(e, t, l) {
    if (Nu) return e(t, l);
    Nu = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (
        ((Nu = !1),
        (Un !== null || Hn !== null) &&
          (Ar(), Un && ((t = Un), (e = Hn), (Hn = Un = null), Ys(t), e)))
      )
        for (t = 0; t < e.length; t++) Ys(e[t]);
    }
  }
  function Ca(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var n = l[vt] || null;
    if (n === null) return null;
    l = n[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) ||
          ((e = e.type),
          (n = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !n);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(c(231, t, typeof l));
    return l;
  }
  var al = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Ru = !1;
  if (al)
    try {
      var Ma = {};
      Object.defineProperty(Ma, "passive", {
        get: function () {
          Ru = !0;
        },
      }),
        window.addEventListener("test", Ma, Ma),
        window.removeEventListener("test", Ma, Ma);
    } catch {
      Ru = !1;
    }
  var wl = null,
    Ou = null,
    qi = null;
  function Vs() {
    if (qi) return qi;
    var e,
      t = Ou,
      l = t.length,
      n,
      i = "value" in wl ? wl.value : wl.textContent,
      r = i.length;
    for (e = 0; e < l && t[e] === i[e]; e++);
    var f = l - e;
    for (n = 1; n <= f && t[l - n] === i[r - n]; n++);
    return (qi = i.slice(e, 1 < n ? 1 - n : void 0));
  }
  function Gi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Yi() {
    return !0;
  }
  function Xs() {
    return !1;
  }
  function gt(e) {
    function t(l, n, i, r, f) {
      (this._reactName = l),
        (this._targetInst = i),
        (this.type = n),
        (this.nativeEvent = r),
        (this.target = f),
        (this.currentTarget = null);
      for (var m in e)
        e.hasOwnProperty(m) && ((l = e[m]), (this[m] = l ? l(r) : r[m]));
      return (
        (this.isDefaultPrevented = (
          r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
        )
          ? Yi
          : Xs),
        (this.isPropagationStopped = Xs),
        this
      );
    }
    return (
      b(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Yi));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Yi));
        },
        persist: function () {},
        isPersistent: Yi,
      }),
      t
    );
  }
  var rn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ki = gt(rn),
    _a = b({}, rn, { view: 0, detail: 0 }),
    Kg = gt(_a),
    Cu,
    Mu,
    Da,
    Vi = b({}, _a, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Du,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Da &&
              (Da && e.type === "mousemove"
                ? ((Cu = e.screenX - Da.screenX), (Mu = e.screenY - Da.screenY))
                : (Mu = Cu = 0),
              (Da = e)),
            Cu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Mu;
      },
    }),
    Qs = gt(Vi),
    Jg = b({}, Vi, { dataTransfer: 0 }),
    Wg = gt(Jg),
    Fg = b({}, _a, { relatedTarget: 0 }),
    _u = gt(Fg),
    $g = b({}, rn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Pg = gt($g),
    Ig = b({}, rn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ep = gt(Ig),
    tp = b({}, rn, { data: 0 }),
    Zs = gt(tp),
    lp = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    np = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    ap = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ip(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = ap[e])
      ? !!t[e]
      : !1;
  }
  function Du() {
    return ip;
  }
  var rp = b({}, _a, {
      key: function (e) {
        if (e.key) {
          var t = lp[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Gi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? np[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Du,
      charCode: function (e) {
        return e.type === "keypress" ? Gi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Gi(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    up = gt(rp),
    cp = b({}, Vi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ks = gt(cp),
    op = b({}, _a, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Du,
    }),
    sp = gt(op),
    fp = b({}, rn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dp = gt(fp),
    mp = b({}, Vi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    hp = gt(mp),
    vp = b({}, rn, { newState: 0, oldState: 0 }),
    gp = gt(vp),
    pp = [9, 13, 27, 32],
    zu = al && "CompositionEvent" in window,
    za = null;
  al && "documentMode" in document && (za = document.documentMode);
  var yp = al && "TextEvent" in window && !za,
    Js = al && (!zu || (za && 8 < za && 11 >= za)),
    Ws = " ",
    Fs = !1;
  function $s(e, t) {
    switch (e) {
      case "keyup":
        return pp.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ps(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Bn = !1;
  function bp(e, t) {
    switch (e) {
      case "compositionend":
        return Ps(t);
      case "keypress":
        return t.which !== 32 ? null : ((Fs = !0), Ws);
      case "textInput":
        return (e = t.data), e === Ws && Fs ? null : e;
      default:
        return null;
    }
  }
  function xp(e, t) {
    if (Bn)
      return e === "compositionend" || (!zu && $s(e, t))
        ? ((e = Vs()), (qi = Ou = wl = null), (Bn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Js && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Sp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Is(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Sp[e.type] : t === "textarea";
  }
  function ef(e, t, l, n) {
    Un ? (Hn ? Hn.push(n) : (Hn = [n])) : (Un = n),
      (t = Cr(t, "onChange")),
      0 < t.length &&
        ((l = new ki("onChange", "change", null, l, n)),
        e.push({ event: l, listeners: t }));
  }
  var ja = null,
    Ua = null;
  function Ep(e) {
    Um(e, 0);
  }
  function Xi(e) {
    var t = Oa(e);
    if (Us(t)) return e;
  }
  function tf(e, t) {
    if (e === "change") return t;
  }
  var lf = !1;
  if (al) {
    var ju;
    if (al) {
      var Uu = "oninput" in document;
      if (!Uu) {
        var nf = document.createElement("div");
        nf.setAttribute("oninput", "return;"),
          (Uu = typeof nf.oninput == "function");
      }
      ju = Uu;
    } else ju = !1;
    lf = ju && (!document.documentMode || 9 < document.documentMode);
  }
  function af() {
    ja && (ja.detachEvent("onpropertychange", rf), (Ua = ja = null));
  }
  function rf(e) {
    if (e.propertyName === "value" && Xi(Ua)) {
      var t = [];
      ef(t, Ua, e, Tu(e)), ks(Ep, t);
    }
  }
  function Ap(e, t, l) {
    e === "focusin"
      ? (af(), (ja = t), (Ua = l), ja.attachEvent("onpropertychange", rf))
      : e === "focusout" && af();
  }
  function wp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Xi(Ua);
  }
  function Tp(e, t) {
    if (e === "click") return Xi(t);
  }
  function Np(e, t) {
    if (e === "input" || e === "change") return Xi(t);
  }
  function Rp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var wt = typeof Object.is == "function" ? Object.is : Rp;
  function Ha(e, t) {
    if (wt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      n = Object.keys(t);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var i = l[n];
      if (!Ae.call(t, i) || !wt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function uf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function cf(e, t) {
    var l = uf(e);
    e = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (((n = e + l.textContent.length), e <= t && n >= t))
          return { node: l, offset: t - e };
        e = n;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = uf(l);
    }
  }
  function of(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? of(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function sf(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Bi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Bi(e.document);
    }
    return t;
  }
  function Hu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var Op = al && "documentMode" in document && 11 >= document.documentMode,
    Ln = null,
    Bu = null,
    Ba = null,
    Lu = !1;
  function ff(e, t, l) {
    var n =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Lu ||
      Ln == null ||
      Ln !== Bi(n) ||
      ((n = Ln),
      "selectionStart" in n && Hu(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (Ba && Ha(Ba, n)) ||
        ((Ba = n),
        (n = Cr(Bu, "onSelect")),
        0 < n.length &&
          ((t = new ki("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: n }),
          (t.target = Ln))));
  }
  function un(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var qn = {
      animationend: un("Animation", "AnimationEnd"),
      animationiteration: un("Animation", "AnimationIteration"),
      animationstart: un("Animation", "AnimationStart"),
      transitionrun: un("Transition", "TransitionRun"),
      transitionstart: un("Transition", "TransitionStart"),
      transitioncancel: un("Transition", "TransitionCancel"),
      transitionend: un("Transition", "TransitionEnd"),
    },
    qu = {},
    df = {};
  al &&
    ((df = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete qn.animationend.animation,
      delete qn.animationiteration.animation,
      delete qn.animationstart.animation),
    "TransitionEvent" in window || delete qn.transitionend.transition);
  function cn(e) {
    if (qu[e]) return qu[e];
    if (!qn[e]) return e;
    var t = qn[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in df) return (qu[e] = t[l]);
    return e;
  }
  var mf = cn("animationend"),
    hf = cn("animationiteration"),
    vf = cn("animationstart"),
    Cp = cn("transitionrun"),
    Mp = cn("transitionstart"),
    _p = cn("transitioncancel"),
    gf = cn("transitionend"),
    pf = new Map(),
    Gu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Gu.push("scrollEnd");
  function kt(e, t) {
    pf.set(e, t), an(t, [e]);
  }
  var yf = new WeakMap();
  function Ut(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = yf.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: zs(t) }), yf.set(e, t), t);
    }
    return { value: e, source: t, stack: zs(t) };
  }
  var Ht = [],
    Gn = 0,
    Yu = 0;
  function Qi() {
    for (var e = Gn, t = (Yu = Gn = 0); t < e; ) {
      var l = Ht[t];
      Ht[t++] = null;
      var n = Ht[t];
      Ht[t++] = null;
      var i = Ht[t];
      Ht[t++] = null;
      var r = Ht[t];
      if (((Ht[t++] = null), n !== null && i !== null)) {
        var f = n.pending;
        f === null ? (i.next = i) : ((i.next = f.next), (f.next = i)),
          (n.pending = i);
      }
      r !== 0 && bf(l, i, r);
    }
  }
  function Zi(e, t, l, n) {
    (Ht[Gn++] = e),
      (Ht[Gn++] = t),
      (Ht[Gn++] = l),
      (Ht[Gn++] = n),
      (Yu |= n),
      (e.lanes |= n),
      (e = e.alternate),
      e !== null && (e.lanes |= n);
  }
  function ku(e, t, l, n) {
    return Zi(e, t, l, n), Ki(e);
  }
  function Yn(e, t) {
    return Zi(e, null, null, t), Ki(e);
  }
  function bf(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var i = !1, r = e.return; r !== null; )
      (r.childLanes |= l),
        (n = r.alternate),
        n !== null && (n.childLanes |= l),
        r.tag === 22 &&
          ((e = r.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = r),
        (r = r.return);
    return e.tag === 3
      ? ((r = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - At(l)),
          (e = r.hiddenUpdates),
          (n = e[i]),
          n === null ? (e[i] = [t]) : n.push(t),
          (t.lane = l | 536870912)),
        r)
      : null;
  }
  function Ki(e) {
    if (50 < ci) throw ((ci = 0), (Jc = null), Error(c(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var kn = {};
  function Dp(e, t, l, n) {
    (this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Tt(e, t, l, n) {
    return new Dp(e, t, l, n);
  }
  function Vu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function il(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = Tt(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function xf(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Ji(e, t, l, n, i, r) {
    var f = 0;
    if (((n = e), typeof e == "function")) Vu(e) && (f = 1);
    else if (typeof e == "string")
      f = jy(e, l, P.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case oe:
          return (e = Tt(31, l, t, i)), (e.elementType = oe), (e.lanes = r), e;
        case H:
          return on(l.children, i, r, t);
        case A:
          (f = 8), (i |= 24);
          break;
        case _:
          return (
            (e = Tt(12, l, t, i | 2)), (e.elementType = _), (e.lanes = r), e
          );
        case V:
          return (e = Tt(13, l, t, i)), (e.elementType = V), (e.lanes = r), e;
        case I:
          return (e = Tt(19, l, t, i)), (e.elementType = I), (e.lanes = r), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case q:
              case B:
                f = 10;
                break e;
              case L:
                f = 9;
                break e;
              case Z:
                f = 11;
                break e;
              case W:
                f = 14;
                break e;
              case K:
                (f = 16), (n = null);
                break e;
            }
          (f = 29),
            (l = Error(c(130, e === null ? "null" : typeof e, ""))),
            (n = null);
      }
    return (
      (t = Tt(f, l, t, i)), (t.elementType = e), (t.type = n), (t.lanes = r), t
    );
  }
  function on(e, t, l, n) {
    return (e = Tt(7, e, n, t)), (e.lanes = l), e;
  }
  function Xu(e, t, l) {
    return (e = Tt(6, e, null, t)), (e.lanes = l), e;
  }
  function Qu(e, t, l) {
    return (
      (t = Tt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Vn = [],
    Xn = 0,
    Wi = null,
    Fi = 0,
    Bt = [],
    Lt = 0,
    sn = null,
    rl = 1,
    ul = "";
  function fn(e, t) {
    (Vn[Xn++] = Fi), (Vn[Xn++] = Wi), (Wi = e), (Fi = t);
  }
  function Sf(e, t, l) {
    (Bt[Lt++] = rl), (Bt[Lt++] = ul), (Bt[Lt++] = sn), (sn = e);
    var n = rl;
    e = ul;
    var i = 32 - At(n) - 1;
    (n &= ~(1 << i)), (l += 1);
    var r = 32 - At(t) + i;
    if (30 < r) {
      var f = i - (i % 5);
      (r = (n & ((1 << f) - 1)).toString(32)),
        (n >>= f),
        (i -= f),
        (rl = (1 << (32 - At(t) + i)) | (l << i) | n),
        (ul = r + e);
    } else (rl = (1 << r) | (l << i) | n), (ul = e);
  }
  function Zu(e) {
    e.return !== null && (fn(e, 1), Sf(e, 1, 0));
  }
  function Ku(e) {
    for (; e === Wi; )
      (Wi = Vn[--Xn]), (Vn[Xn] = null), (Fi = Vn[--Xn]), (Vn[Xn] = null);
    for (; e === sn; )
      (sn = Bt[--Lt]),
        (Bt[Lt] = null),
        (ul = Bt[--Lt]),
        (Bt[Lt] = null),
        (rl = Bt[--Lt]),
        (Bt[Lt] = null);
  }
  var dt = null,
    Ye = null,
    Ce = !1,
    dn = null,
    Jt = !1,
    Ju = Error(c(519));
  function mn(e) {
    var t = Error(c(418, ""));
    throw (Ga(Ut(t, e)), Ju);
  }
  function Ef(e) {
    var t = e.stateNode,
      l = e.type,
      n = e.memoizedProps;
    switch (((t[ot] = e), (t[vt] = n), l)) {
      case "dialog":
        Te("cancel", t), Te("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Te("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < si.length; l++) Te(si[l], t);
        break;
      case "source":
        Te("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Te("error", t), Te("load", t);
        break;
      case "details":
        Te("toggle", t);
        break;
      case "input":
        Te("invalid", t),
          Hs(
            t,
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0
          ),
          Hi(t);
        break;
      case "select":
        Te("invalid", t);
        break;
      case "textarea":
        Te("invalid", t), Ls(t, n.value, n.defaultValue, n.children), Hi(t);
    }
    (l = n.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      n.suppressHydrationWarning === !0 ||
      qm(t.textContent, l)
        ? (n.popover != null && (Te("beforetoggle", t), Te("toggle", t)),
          n.onScroll != null && Te("scroll", t),
          n.onScrollEnd != null && Te("scrollend", t),
          n.onClick != null && (t.onclick = Mr),
          (t = !0))
        : (t = !1),
      t || mn(e);
  }
  function Af(e) {
    for (dt = e.return; dt; )
      switch (dt.tag) {
        case 5:
        case 13:
          Jt = !1;
          return;
        case 27:
        case 3:
          Jt = !0;
          return;
        default:
          dt = dt.return;
      }
  }
  function La(e) {
    if (e !== dt) return !1;
    if (!Ce) return Af(e), (Ce = !0), !1;
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || so(e.type, e.memoizedProps))),
        (l = !l)),
      l && Ye && mn(e),
      Af(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((l = e.data), l === "/$")) {
              if (t === 0) {
                Ye = Xt(e.nextSibling);
                break e;
              }
              t--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || t++;
          e = e.nextSibling;
        }
        Ye = null;
      }
    } else
      t === 27
        ? ((t = Ye), Gl(e.type) ? ((e = vo), (vo = null), (Ye = e)) : (Ye = t))
        : (Ye = dt ? Xt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function qa() {
    (Ye = dt = null), (Ce = !1);
  }
  function wf() {
    var e = dn;
    return (
      e !== null &&
        (bt === null ? (bt = e) : bt.push.apply(bt, e), (dn = null)),
      e
    );
  }
  function Ga(e) {
    dn === null ? (dn = [e]) : dn.push(e);
  }
  var Wu = Y(null),
    hn = null,
    cl = null;
  function Tl(e, t, l) {
    J(Wu, t._currentValue), (t._currentValue = l);
  }
  function ol(e) {
    (e._currentValue = Wu.current), F(Wu);
  }
  function Fu(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function $u(e, t, l, n) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var r = i.dependencies;
      if (r !== null) {
        var f = i.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var m = r;
          r = i;
          for (var x = 0; x < t.length; x++)
            if (m.context === t[x]) {
              (r.lanes |= l),
                (m = r.alternate),
                m !== null && (m.lanes |= l),
                Fu(r.return, l, e),
                n || (f = null);
              break e;
            }
          r = m.next;
        }
      } else if (i.tag === 18) {
        if (((f = i.return), f === null)) throw Error(c(341));
        (f.lanes |= l),
          (r = f.alternate),
          r !== null && (r.lanes |= l),
          Fu(f, l, e),
          (f = null);
      } else f = i.child;
      if (f !== null) f.return = i;
      else
        for (f = i; f !== null; ) {
          if (f === e) {
            f = null;
            break;
          }
          if (((i = f.sibling), i !== null)) {
            (i.return = f.return), (f = i);
            break;
          }
          f = f.return;
        }
      i = f;
    }
  }
  function Ya(e, t, l, n) {
    e = null;
    for (var i = t, r = !1; i !== null; ) {
      if (!r) {
        if ((i.flags & 524288) !== 0) r = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var f = i.alternate;
        if (f === null) throw Error(c(387));
        if (((f = f.memoizedProps), f !== null)) {
          var m = i.type;
          wt(i.pendingProps.value, f.value) ||
            (e !== null ? e.push(m) : (e = [m]));
        }
      } else if (i === $.current) {
        if (((f = i.alternate), f === null)) throw Error(c(387));
        f.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(gi) : (e = [gi]));
      }
      i = i.return;
    }
    e !== null && $u(t, e, l, n), (t.flags |= 262144);
  }
  function $i(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!wt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function vn(e) {
    (hn = e),
      (cl = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function st(e) {
    return Tf(hn, e);
  }
  function Pi(e, t) {
    return hn === null && vn(e), Tf(e, t);
  }
  function Tf(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), cl === null)) {
      if (e === null) throw Error(c(308));
      (cl = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else cl = cl.next = t;
    return l;
  }
  var zp =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, n) {
                  e.push(n);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                });
            };
          },
    jp = a.unstable_scheduleCallback,
    Up = a.unstable_NormalPriority,
    We = {
      $$typeof: B,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Pu() {
    return { controller: new zp(), data: new Map(), refCount: 0 };
  }
  function ka(e) {
    e.refCount--,
      e.refCount === 0 &&
        jp(Up, function () {
          e.controller.abort();
        });
  }
  var Va = null,
    Iu = 0,
    Qn = 0,
    Zn = null;
  function Hp(e, t) {
    if (Va === null) {
      var l = (Va = []);
      (Iu = 0),
        (Qn = to()),
        (Zn = {
          status: "pending",
          value: void 0,
          then: function (n) {
            l.push(n);
          },
        });
    }
    return Iu++, t.then(Nf, Nf), t;
  }
  function Nf() {
    if (--Iu === 0 && Va !== null) {
      Zn !== null && (Zn.status = "fulfilled");
      var e = Va;
      (Va = null), (Qn = 0), (Zn = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Bp(e, t) {
    var l = [],
      n = {
        status: "pending",
        value: null,
        reason: null,
        then: function (i) {
          l.push(i);
        },
      };
    return (
      e.then(
        function () {
          (n.status = "fulfilled"), (n.value = t);
          for (var i = 0; i < l.length; i++) (0, l[i])(t);
        },
        function (i) {
          for (n.status = "rejected", n.reason = i, i = 0; i < l.length; i++)
            (0, l[i])(void 0);
        }
      ),
      n
    );
  }
  var Rf = C.S;
  C.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      Hp(e, t),
      Rf !== null && Rf(e, t);
  };
  var gn = Y(null);
  function ec() {
    var e = gn.current;
    return e !== null ? e : Le.pooledCache;
  }
  function Ii(e, t) {
    t === null ? J(gn, gn.current) : J(gn, t.pool);
  }
  function Of() {
    var e = ec();
    return e === null ? null : { parent: We._currentValue, pool: e };
  }
  var Xa = Error(c(460)),
    Cf = Error(c(474)),
    er = Error(c(542)),
    tc = { then: function () {} };
  function Mf(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function tr() {}
  function _f(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(tr, tr), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), zf(e), e);
      default:
        if (typeof t.status == "string") t.then(tr, tr);
        else {
          if (((e = Le), e !== null && 100 < e.shellSuspendCounter))
            throw Error(c(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (n) {
                if (t.status === "pending") {
                  var i = t;
                  (i.status = "fulfilled"), (i.value = n);
                }
              },
              function (n) {
                if (t.status === "pending") {
                  var i = t;
                  (i.status = "rejected"), (i.reason = n);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), zf(e), e);
        }
        throw ((Qa = t), Xa);
    }
  }
  var Qa = null;
  function Df() {
    if (Qa === null) throw Error(c(459));
    var e = Qa;
    return (Qa = null), e;
  }
  function zf(e) {
    if (e === Xa || e === er) throw Error(c(483));
  }
  var Nl = !1;
  function lc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function nc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Rl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ol(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (_e & 2) !== 0)) {
      var i = n.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (n.pending = t),
        (t = Ki(e)),
        bf(e, null, l),
        t
      );
    }
    return Zi(e, n, t, l), Ki(e);
  }
  function Za(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var n = t.lanes;
      (n &= e.pendingLanes), (l |= n), (t.lanes = l), Ts(e, l);
    }
  }
  function ac(e, t) {
    var l = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), l === n)) {
      var i = null,
        r = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var f = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          r === null ? (i = r = f) : (r = r.next = f), (l = l.next);
        } while (l !== null);
        r === null ? (i = r = t) : (r = r.next = t);
      } else i = r = t;
      (l = {
        baseState: n.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: r,
        shared: n.shared,
        callbacks: n.callbacks,
      }),
        (e.updateQueue = l);
      return;
    }
    (e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t);
  }
  var ic = !1;
  function Ka() {
    if (ic) {
      var e = Zn;
      if (e !== null) throw e;
    }
  }
  function Ja(e, t, l, n) {
    ic = !1;
    var i = e.updateQueue;
    Nl = !1;
    var r = i.firstBaseUpdate,
      f = i.lastBaseUpdate,
      m = i.shared.pending;
    if (m !== null) {
      i.shared.pending = null;
      var x = m,
        M = x.next;
      (x.next = null), f === null ? (r = M) : (f.next = M), (f = x);
      var G = e.alternate;
      G !== null &&
        ((G = G.updateQueue),
        (m = G.lastBaseUpdate),
        m !== f &&
          (m === null ? (G.firstBaseUpdate = M) : (m.next = M),
          (G.lastBaseUpdate = x)));
    }
    if (r !== null) {
      var X = i.baseState;
      (f = 0), (G = M = x = null), (m = r);
      do {
        var D = m.lane & -536870913,
          j = D !== m.lane;
        if (j ? (Re & D) === D : (n & D) === D) {
          D !== 0 && D === Qn && (ic = !0),
            G !== null &&
              (G = G.next =
                {
                  lane: 0,
                  tag: m.tag,
                  payload: m.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var fe = e,
              ce = m;
            D = t;
            var Ue = l;
            switch (ce.tag) {
              case 1:
                if (((fe = ce.payload), typeof fe == "function")) {
                  X = fe.call(Ue, X, D);
                  break e;
                }
                X = fe;
                break e;
              case 3:
                fe.flags = (fe.flags & -65537) | 128;
              case 0:
                if (
                  ((fe = ce.payload),
                  (D = typeof fe == "function" ? fe.call(Ue, X, D) : fe),
                  D == null)
                )
                  break e;
                X = b({}, X, D);
                break e;
              case 2:
                Nl = !0;
            }
          }
          (D = m.callback),
            D !== null &&
              ((e.flags |= 64),
              j && (e.flags |= 8192),
              (j = i.callbacks),
              j === null ? (i.callbacks = [D]) : j.push(D));
        } else
          (j = {
            lane: D,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            G === null ? ((M = G = j), (x = X)) : (G = G.next = j),
            (f |= D);
        if (((m = m.next), m === null)) {
          if (((m = i.shared.pending), m === null)) break;
          (j = m),
            (m = j.next),
            (j.next = null),
            (i.lastBaseUpdate = j),
            (i.shared.pending = null);
        }
      } while (!0);
      G === null && (x = X),
        (i.baseState = x),
        (i.firstBaseUpdate = M),
        (i.lastBaseUpdate = G),
        r === null && (i.shared.lanes = 0),
        (Hl |= f),
        (e.lanes = f),
        (e.memoizedState = X);
    }
  }
  function jf(e, t) {
    if (typeof e != "function") throw Error(c(191, e));
    e.call(t);
  }
  function Uf(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) jf(l[e], t);
  }
  var Kn = Y(null),
    lr = Y(0);
  function Hf(e, t) {
    (e = gl), J(lr, e), J(Kn, t), (gl = e | t.baseLanes);
  }
  function rc() {
    J(lr, gl), J(Kn, Kn.current);
  }
  function uc() {
    (gl = lr.current), F(Kn), F(lr);
  }
  var Cl = 0,
    pe = null,
    ze = null,
    Ze = null,
    nr = !1,
    Jn = !1,
    pn = !1,
    ar = 0,
    Wa = 0,
    Wn = null,
    Lp = 0;
  function Xe() {
    throw Error(c(321));
  }
  function cc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!wt(e[l], t[l])) return !1;
    return !0;
  }
  function oc(e, t, l, n, i, r) {
    return (
      (Cl = r),
      (pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (C.H = e === null || e.memoizedState === null ? bd : xd),
      (pn = !1),
      (r = l(n, i)),
      (pn = !1),
      Jn && (r = Lf(t, l, n, i)),
      Bf(e),
      r
    );
  }
  function Bf(e) {
    C.H = sr;
    var t = ze !== null && ze.next !== null;
    if (((Cl = 0), (Ze = ze = pe = null), (nr = !1), (Wa = 0), (Wn = null), t))
      throw Error(c(300));
    e === null ||
      Ie ||
      ((e = e.dependencies), e !== null && $i(e) && (Ie = !0));
  }
  function Lf(e, t, l, n) {
    pe = e;
    var i = 0;
    do {
      if ((Jn && (Wn = null), (Wa = 0), (Jn = !1), 25 <= i))
        throw Error(c(301));
      if (((i += 1), (Ze = ze = null), e.updateQueue != null)) {
        var r = e.updateQueue;
        (r.lastEffect = null),
          (r.events = null),
          (r.stores = null),
          r.memoCache != null && (r.memoCache.index = 0);
      }
      (C.H = Qp), (r = t(l, n));
    } while (Jn);
    return r;
  }
  function qp() {
    var e = C.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Fa(t) : t),
      (e = e.useState()[0]),
      (ze !== null ? ze.memoizedState : null) !== e && (pe.flags |= 1024),
      t
    );
  }
  function sc() {
    var e = ar !== 0;
    return (ar = 0), e;
  }
  function fc(e, t, l) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
  }
  function dc(e) {
    if (nr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      nr = !1;
    }
    (Cl = 0), (Ze = ze = pe = null), (Jn = !1), (Wa = ar = 0), (Wn = null);
  }
  function pt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ze === null ? (pe.memoizedState = Ze = e) : (Ze = Ze.next = e), Ze;
  }
  function Ke() {
    if (ze === null) {
      var e = pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ze.next;
    var t = Ze === null ? pe.memoizedState : Ze.next;
    if (t !== null) (Ze = t), (ze = e);
    else {
      if (e === null)
        throw pe.alternate === null ? Error(c(467)) : Error(c(310));
      (ze = e),
        (e = {
          memoizedState: ze.memoizedState,
          baseState: ze.baseState,
          baseQueue: ze.baseQueue,
          queue: ze.queue,
          next: null,
        }),
        Ze === null ? (pe.memoizedState = Ze = e) : (Ze = Ze.next = e);
    }
    return Ze;
  }
  function mc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fa(e) {
    var t = Wa;
    return (
      (Wa += 1),
      Wn === null && (Wn = []),
      (e = _f(Wn, e, t)),
      (t = pe),
      (Ze === null ? t.memoizedState : Ze.next) === null &&
        ((t = t.alternate),
        (C.H = t === null || t.memoizedState === null ? bd : xd)),
      e
    );
  }
  function ir(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Fa(e);
      if (e.$$typeof === B) return st(e);
    }
    throw Error(c(438, String(e)));
  }
  function hc(e) {
    var t = null,
      l = pe.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var n = pe.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (t = {
              data: n.data.map(function (i) {
                return i.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = mc()), (pe.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++) l[n] = ve;
    return t.index++, l;
  }
  function sl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function rr(e) {
    var t = Ke();
    return vc(t, ze, e);
  }
  function vc(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = l;
    var i = e.baseQueue,
      r = n.pending;
    if (r !== null) {
      if (i !== null) {
        var f = i.next;
        (i.next = r.next), (r.next = f);
      }
      (t.baseQueue = i = r), (n.pending = null);
    }
    if (((r = e.baseState), i === null)) e.memoizedState = r;
    else {
      t = i.next;
      var m = (f = null),
        x = null,
        M = t,
        G = !1;
      do {
        var X = M.lane & -536870913;
        if (X !== M.lane ? (Re & X) === X : (Cl & X) === X) {
          var D = M.revertLane;
          if (D === 0)
            x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: M.action,
                  hasEagerState: M.hasEagerState,
                  eagerState: M.eagerState,
                  next: null,
                }),
              X === Qn && (G = !0);
          else if ((Cl & D) === D) {
            (M = M.next), D === Qn && (G = !0);
            continue;
          } else
            (X = {
              lane: 0,
              revertLane: M.revertLane,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null,
            }),
              x === null ? ((m = x = X), (f = r)) : (x = x.next = X),
              (pe.lanes |= D),
              (Hl |= D);
          (X = M.action),
            pn && l(r, X),
            (r = M.hasEagerState ? M.eagerState : l(r, X));
        } else
          (D = {
            lane: X,
            revertLane: M.revertLane,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null,
          }),
            x === null ? ((m = x = D), (f = r)) : (x = x.next = D),
            (pe.lanes |= X),
            (Hl |= X);
        M = M.next;
      } while (M !== null && M !== t);
      if (
        (x === null ? (f = r) : (x.next = m),
        !wt(r, e.memoizedState) && ((Ie = !0), G && ((l = Zn), l !== null)))
      )
        throw l;
      (e.memoizedState = r),
        (e.baseState = f),
        (e.baseQueue = x),
        (n.lastRenderedState = r);
    }
    return i === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function gc(e) {
    var t = Ke(),
      l = t.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = e;
    var n = l.dispatch,
      i = l.pending,
      r = t.memoizedState;
    if (i !== null) {
      l.pending = null;
      var f = (i = i.next);
      do (r = e(r, f.action)), (f = f.next);
      while (f !== i);
      wt(r, t.memoizedState) || (Ie = !0),
        (t.memoizedState = r),
        t.baseQueue === null && (t.baseState = r),
        (l.lastRenderedState = r);
    }
    return [r, n];
  }
  function qf(e, t, l) {
    var n = pe,
      i = Ke(),
      r = Ce;
    if (r) {
      if (l === void 0) throw Error(c(407));
      l = l();
    } else l = t();
    var f = !wt((ze || i).memoizedState, l);
    f && ((i.memoizedState = l), (Ie = !0)), (i = i.queue);
    var m = kf.bind(null, n, i, e);
    if (
      ($a(2048, 8, m, [e]),
      i.getSnapshot !== t || f || (Ze !== null && Ze.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Fn(9, ur(), Yf.bind(null, n, i, l, t), null),
        Le === null)
      )
        throw Error(c(349));
      r || (Cl & 124) !== 0 || Gf(n, t, l);
    }
    return l;
  }
  function Gf(e, t, l) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = pe.updateQueue),
      t === null
        ? ((t = mc()), (pe.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
  }
  function Yf(e, t, l, n) {
    (t.value = l), (t.getSnapshot = n), Vf(t) && Xf(e);
  }
  function kf(e, t, l) {
    return l(function () {
      Vf(t) && Xf(e);
    });
  }
  function Vf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !wt(e, l);
    } catch {
      return !0;
    }
  }
  function Xf(e) {
    var t = Yn(e, 2);
    t !== null && Mt(t, e, 2);
  }
  function pc(e) {
    var t = pt();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), pn)) {
        El(!0);
        try {
          l();
        } finally {
          El(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sl,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Qf(e, t, l, n) {
    return (e.baseState = l), vc(e, ze, typeof n == "function" ? n : sl);
  }
  function Gp(e, t, l, n, i) {
    if (or(e)) throw Error(c(485));
    if (((e = t.action), e !== null)) {
      var r = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          r.listeners.push(f);
        },
      };
      C.T !== null ? l(!0) : (r.isTransition = !1),
        n(r),
        (l = t.pending),
        l === null
          ? ((r.next = t.pending = r), Zf(t, r))
          : ((r.next = l.next), (t.pending = l.next = r));
    }
  }
  function Zf(e, t) {
    var l = t.action,
      n = t.payload,
      i = e.state;
    if (t.isTransition) {
      var r = C.T,
        f = {};
      C.T = f;
      try {
        var m = l(i, n),
          x = C.S;
        x !== null && x(f, m), Kf(e, t, m);
      } catch (M) {
        yc(e, t, M);
      } finally {
        C.T = r;
      }
    } else
      try {
        (r = l(i, n)), Kf(e, t, r);
      } catch (M) {
        yc(e, t, M);
      }
  }
  function Kf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (n) {
            Jf(e, t, n);
          },
          function (n) {
            return yc(e, t, n);
          }
        )
      : Jf(e, t, l);
  }
  function Jf(e, t, l) {
    (t.status = "fulfilled"),
      (t.value = l),
      Wf(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), Zf(e, l)));
  }
  function yc(e, t, l) {
    var n = e.pending;
    if (((e.pending = null), n !== null)) {
      n = n.next;
      do (t.status = "rejected"), (t.reason = l), Wf(t), (t = t.next);
      while (t !== n);
    }
    e.action = null;
  }
  function Wf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Ff(e, t) {
    return t;
  }
  function $f(e, t) {
    if (Ce) {
      var l = Le.formState;
      if (l !== null) {
        e: {
          var n = pe;
          if (Ce) {
            if (Ye) {
              t: {
                for (var i = Ye, r = Jt; i.nodeType !== 8; ) {
                  if (!r) {
                    i = null;
                    break t;
                  }
                  if (((i = Xt(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                (r = i.data), (i = r === "F!" || r === "F" ? i : null);
              }
              if (i) {
                (Ye = Xt(i.nextSibling)), (n = i.data === "F!");
                break e;
              }
            }
            mn(n);
          }
          n = !1;
        }
        n && (t = l[0]);
      }
    }
    return (
      (l = pt()),
      (l.memoizedState = l.baseState = t),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ff,
        lastRenderedState: t,
      }),
      (l.queue = n),
      (l = gd.bind(null, pe, n)),
      (n.dispatch = l),
      (n = pc(!1)),
      (r = Ac.bind(null, pe, !1, n.queue)),
      (n = pt()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (n.queue = i),
      (l = Gp.bind(null, pe, i, r, l)),
      (i.dispatch = l),
      (n.memoizedState = e),
      [t, l, !1]
    );
  }
  function Pf(e) {
    var t = Ke();
    return If(t, ze, e);
  }
  function If(e, t, l) {
    if (
      ((t = vc(e, t, Ff)[0]),
      (e = rr(sl)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var n = Fa(t);
      } catch (f) {
        throw f === Xa ? er : f;
      }
    else n = t;
    t = Ke();
    var i = t.queue,
      r = i.dispatch;
    return (
      l !== t.memoizedState &&
        ((pe.flags |= 2048), Fn(9, ur(), Yp.bind(null, i, l), null)),
      [n, r, e]
    );
  }
  function Yp(e, t) {
    e.action = t;
  }
  function ed(e) {
    var t = Ke(),
      l = ze;
    if (l !== null) return If(t, l, e);
    Ke(), (t = t.memoizedState), (l = Ke());
    var n = l.queue.dispatch;
    return (l.memoizedState = e), [t, n, !1];
  }
  function Fn(e, t, l, n) {
    return (
      (e = { tag: e, create: l, deps: n, inst: t, next: null }),
      (t = pe.updateQueue),
      t === null && ((t = mc()), (pe.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((n = l.next), (l.next = e), (e.next = n), (t.lastEffect = e)),
      e
    );
  }
  function ur() {
    return { destroy: void 0, resource: void 0 };
  }
  function td() {
    return Ke().memoizedState;
  }
  function cr(e, t, l, n) {
    var i = pt();
    (n = n === void 0 ? null : n),
      (pe.flags |= e),
      (i.memoizedState = Fn(1 | t, ur(), l, n));
  }
  function $a(e, t, l, n) {
    var i = Ke();
    n = n === void 0 ? null : n;
    var r = i.memoizedState.inst;
    ze !== null && n !== null && cc(n, ze.memoizedState.deps)
      ? (i.memoizedState = Fn(t, r, l, n))
      : ((pe.flags |= e), (i.memoizedState = Fn(1 | t, r, l, n)));
  }
  function ld(e, t) {
    cr(8390656, 8, e, t);
  }
  function nd(e, t) {
    $a(2048, 8, e, t);
  }
  function ad(e, t) {
    return $a(4, 2, e, t);
  }
  function id(e, t) {
    return $a(4, 4, e, t);
  }
  function rd(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ud(e, t, l) {
    (l = l != null ? l.concat([e]) : null), $a(4, 4, rd.bind(null, t, e), l);
  }
  function bc() {}
  function cd(e, t) {
    var l = Ke();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && cc(t, n[1]) ? n[0] : ((l.memoizedState = [e, t]), e);
  }
  function od(e, t) {
    var l = Ke();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && cc(t, n[1])) return n[0];
    if (((n = e()), pn)) {
      El(!0);
      try {
        e();
      } finally {
        El(!1);
      }
    }
    return (l.memoizedState = [n, t]), n;
  }
  function xc(e, t, l) {
    return l === void 0 || (Cl & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = dm()), (pe.lanes |= e), (Hl |= e), l);
  }
  function sd(e, t, l, n) {
    return wt(l, t)
      ? l
      : Kn.current !== null
      ? ((e = xc(e, l, n)), wt(e, t) || (Ie = !0), e)
      : (Cl & 42) === 0
      ? ((Ie = !0), (e.memoizedState = l))
      : ((e = dm()), (pe.lanes |= e), (Hl |= e), t);
  }
  function fd(e, t, l, n, i) {
    var r = Q.p;
    Q.p = r !== 0 && 8 > r ? r : 8;
    var f = C.T,
      m = {};
    (C.T = m), Ac(e, !1, t, l);
    try {
      var x = i(),
        M = C.S;
      if (
        (M !== null && M(m, x),
        x !== null && typeof x == "object" && typeof x.then == "function")
      ) {
        var G = Bp(x, n);
        Pa(e, t, G, Ct(e));
      } else Pa(e, t, n, Ct(e));
    } catch (X) {
      Pa(e, t, { then: function () {}, status: "rejected", reason: X }, Ct());
    } finally {
      (Q.p = r), (C.T = f);
    }
  }
  function kp() {}
  function Sc(e, t, l, n) {
    if (e.tag !== 5) throw Error(c(476));
    var i = dd(e).queue;
    fd(
      e,
      i,
      t,
      U,
      l === null
        ? kp
        : function () {
            return md(e), l(n);
          }
    );
  }
  function dd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: U,
      baseState: U,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sl,
        lastRenderedState: U,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: sl,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function md(e) {
    var t = dd(e).next.queue;
    Pa(e, t, {}, Ct());
  }
  function Ec() {
    return st(gi);
  }
  function hd() {
    return Ke().memoizedState;
  }
  function vd() {
    return Ke().memoizedState;
  }
  function Vp(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Ct();
          e = Rl(l);
          var n = Ol(t, e, l);
          n !== null && (Mt(n, t, l), Za(n, t, l)),
            (t = { cache: Pu() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Xp(e, t, l) {
    var n = Ct();
    (l = {
      lane: n,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      or(e)
        ? pd(t, l)
        : ((l = ku(e, t, l, n)), l !== null && (Mt(l, e, n), yd(l, t, n)));
  }
  function gd(e, t, l) {
    var n = Ct();
    Pa(e, t, l, n);
  }
  function Pa(e, t, l, n) {
    var i = {
      lane: n,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (or(e)) pd(t, i);
    else {
      var r = e.alternate;
      if (
        e.lanes === 0 &&
        (r === null || r.lanes === 0) &&
        ((r = t.lastRenderedReducer), r !== null)
      )
        try {
          var f = t.lastRenderedState,
            m = r(f, l);
          if (((i.hasEagerState = !0), (i.eagerState = m), wt(m, f)))
            return Zi(e, t, i, 0), Le === null && Qi(), !1;
        } catch {
        } finally {
        }
      if (((l = ku(e, t, i, n)), l !== null))
        return Mt(l, e, n), yd(l, t, n), !0;
    }
    return !1;
  }
  function Ac(e, t, l, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: to(),
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      or(e))
    ) {
      if (t) throw Error(c(479));
    } else (t = ku(e, l, n, 2)), t !== null && Mt(t, e, 2);
  }
  function or(e) {
    var t = e.alternate;
    return e === pe || (t !== null && t === pe);
  }
  function pd(e, t) {
    Jn = nr = !0;
    var l = e.pending;
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t);
  }
  function yd(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      (n &= e.pendingLanes), (l |= n), (t.lanes = l), Ts(e, l);
    }
  }
  var sr = {
      readContext: st,
      use: ir,
      useCallback: Xe,
      useContext: Xe,
      useEffect: Xe,
      useImperativeHandle: Xe,
      useLayoutEffect: Xe,
      useInsertionEffect: Xe,
      useMemo: Xe,
      useReducer: Xe,
      useRef: Xe,
      useState: Xe,
      useDebugValue: Xe,
      useDeferredValue: Xe,
      useTransition: Xe,
      useSyncExternalStore: Xe,
      useId: Xe,
      useHostTransitionStatus: Xe,
      useFormState: Xe,
      useActionState: Xe,
      useOptimistic: Xe,
      useMemoCache: Xe,
      useCacheRefresh: Xe,
    },
    bd = {
      readContext: st,
      use: ir,
      useCallback: function (e, t) {
        return (pt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: st,
      useEffect: ld,
      useImperativeHandle: function (e, t, l) {
        (l = l != null ? l.concat([e]) : null),
          cr(4194308, 4, rd.bind(null, t, e), l);
      },
      useLayoutEffect: function (e, t) {
        return cr(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        cr(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = pt();
        t = t === void 0 ? null : t;
        var n = e();
        if (pn) {
          El(!0);
          try {
            e();
          } finally {
            El(!1);
          }
        }
        return (l.memoizedState = [n, t]), n;
      },
      useReducer: function (e, t, l) {
        var n = pt();
        if (l !== void 0) {
          var i = l(t);
          if (pn) {
            El(!0);
            try {
              l(t);
            } finally {
              El(!1);
            }
          }
        } else i = t;
        return (
          (n.memoizedState = n.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (n.queue = e),
          (e = e.dispatch = Xp.bind(null, pe, e)),
          [n.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = pt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = pc(e);
        var t = e.queue,
          l = gd.bind(null, pe, t);
        return (t.dispatch = l), [e.memoizedState, l];
      },
      useDebugValue: bc,
      useDeferredValue: function (e, t) {
        var l = pt();
        return xc(l, e, t);
      },
      useTransition: function () {
        var e = pc(!1);
        return (
          (e = fd.bind(null, pe, e.queue, !0, !1)),
          (pt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var n = pe,
          i = pt();
        if (Ce) {
          if (l === void 0) throw Error(c(407));
          l = l();
        } else {
          if (((l = t()), Le === null)) throw Error(c(349));
          (Re & 124) !== 0 || Gf(n, t, l);
        }
        i.memoizedState = l;
        var r = { value: l, getSnapshot: t };
        return (
          (i.queue = r),
          ld(kf.bind(null, n, r, e), [e]),
          (n.flags |= 2048),
          Fn(9, ur(), Yf.bind(null, n, r, l, t), null),
          l
        );
      },
      useId: function () {
        var e = pt(),
          t = Le.identifierPrefix;
        if (Ce) {
          var l = ul,
            n = rl;
          (l = (n & ~(1 << (32 - At(n) - 1))).toString(32) + l),
            (t = "«" + t + "R" + l),
            (l = ar++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "»");
        } else (l = Lp++), (t = "«" + t + "r" + l.toString(32) + "»");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Ec,
      useFormState: $f,
      useActionState: $f,
      useOptimistic: function (e) {
        var t = pt();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = Ac.bind(null, pe, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: hc,
      useCacheRefresh: function () {
        return (pt().memoizedState = Vp.bind(null, pe));
      },
    },
    xd = {
      readContext: st,
      use: ir,
      useCallback: cd,
      useContext: st,
      useEffect: nd,
      useImperativeHandle: ud,
      useInsertionEffect: ad,
      useLayoutEffect: id,
      useMemo: od,
      useReducer: rr,
      useRef: td,
      useState: function () {
        return rr(sl);
      },
      useDebugValue: bc,
      useDeferredValue: function (e, t) {
        var l = Ke();
        return sd(l, ze.memoizedState, e, t);
      },
      useTransition: function () {
        var e = rr(sl)[0],
          t = Ke().memoizedState;
        return [typeof e == "boolean" ? e : Fa(e), t];
      },
      useSyncExternalStore: qf,
      useId: hd,
      useHostTransitionStatus: Ec,
      useFormState: Pf,
      useActionState: Pf,
      useOptimistic: function (e, t) {
        var l = Ke();
        return Qf(l, ze, e, t);
      },
      useMemoCache: hc,
      useCacheRefresh: vd,
    },
    Qp = {
      readContext: st,
      use: ir,
      useCallback: cd,
      useContext: st,
      useEffect: nd,
      useImperativeHandle: ud,
      useInsertionEffect: ad,
      useLayoutEffect: id,
      useMemo: od,
      useReducer: gc,
      useRef: td,
      useState: function () {
        return gc(sl);
      },
      useDebugValue: bc,
      useDeferredValue: function (e, t) {
        var l = Ke();
        return ze === null ? xc(l, e, t) : sd(l, ze.memoizedState, e, t);
      },
      useTransition: function () {
        var e = gc(sl)[0],
          t = Ke().memoizedState;
        return [typeof e == "boolean" ? e : Fa(e), t];
      },
      useSyncExternalStore: qf,
      useId: hd,
      useHostTransitionStatus: Ec,
      useFormState: ed,
      useActionState: ed,
      useOptimistic: function (e, t) {
        var l = Ke();
        return ze !== null
          ? Qf(l, ze, e, t)
          : ((l.baseState = e), [e, l.queue.dispatch]);
      },
      useMemoCache: hc,
      useCacheRefresh: vd,
    },
    $n = null,
    Ia = 0;
  function fr(e) {
    var t = Ia;
    return (Ia += 1), $n === null && ($n = []), _f($n, e, t);
  }
  function ei(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function dr(e, t) {
    throw t.$$typeof === T
      ? Error(c(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          c(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function Sd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ed(e) {
    function t(N, w) {
      if (e) {
        var O = N.deletions;
        O === null ? ((N.deletions = [w]), (N.flags |= 16)) : O.push(w);
      }
    }
    function l(N, w) {
      if (!e) return null;
      for (; w !== null; ) t(N, w), (w = w.sibling);
      return null;
    }
    function n(N) {
      for (var w = new Map(); N !== null; )
        N.key !== null ? w.set(N.key, N) : w.set(N.index, N), (N = N.sibling);
      return w;
    }
    function i(N, w) {
      return (N = il(N, w)), (N.index = 0), (N.sibling = null), N;
    }
    function r(N, w, O) {
      return (
        (N.index = O),
        e
          ? ((O = N.alternate),
            O !== null
              ? ((O = O.index), O < w ? ((N.flags |= 67108866), w) : O)
              : ((N.flags |= 67108866), w))
          : ((N.flags |= 1048576), w)
      );
    }
    function f(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N;
    }
    function m(N, w, O, k) {
      return w === null || w.tag !== 6
        ? ((w = Xu(O, N.mode, k)), (w.return = N), w)
        : ((w = i(w, O)), (w.return = N), w);
    }
    function x(N, w, O, k) {
      var ee = O.type;
      return ee === H
        ? G(N, w, O.props.children, k, O.key)
        : w !== null &&
          (w.elementType === ee ||
            (typeof ee == "object" &&
              ee !== null &&
              ee.$$typeof === K &&
              Sd(ee) === w.type))
        ? ((w = i(w, O.props)), ei(w, O), (w.return = N), w)
        : ((w = Ji(O.type, O.key, O.props, null, N.mode, k)),
          ei(w, O),
          (w.return = N),
          w);
    }
    function M(N, w, O, k) {
      return w === null ||
        w.tag !== 4 ||
        w.stateNode.containerInfo !== O.containerInfo ||
        w.stateNode.implementation !== O.implementation
        ? ((w = Qu(O, N.mode, k)), (w.return = N), w)
        : ((w = i(w, O.children || [])), (w.return = N), w);
    }
    function G(N, w, O, k, ee) {
      return w === null || w.tag !== 7
        ? ((w = on(O, N.mode, k, ee)), (w.return = N), w)
        : ((w = i(w, O)), (w.return = N), w);
    }
    function X(N, w, O) {
      if (
        (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
      )
        return (w = Xu("" + w, N.mode, O)), (w.return = N), w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case R:
            return (
              (O = Ji(w.type, w.key, w.props, null, N.mode, O)),
              ei(O, w),
              (O.return = N),
              O
            );
          case z:
            return (w = Qu(w, N.mode, O)), (w.return = N), w;
          case K:
            var k = w._init;
            return (w = k(w._payload)), X(N, w, O);
        }
        if (ue(w) || de(w))
          return (w = on(w, N.mode, O, null)), (w.return = N), w;
        if (typeof w.then == "function") return X(N, fr(w), O);
        if (w.$$typeof === B) return X(N, Pi(N, w), O);
        dr(N, w);
      }
      return null;
    }
    function D(N, w, O, k) {
      var ee = w !== null ? w.key : null;
      if (
        (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
      )
        return ee !== null ? null : m(N, w, "" + O, k);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case R:
            return O.key === ee ? x(N, w, O, k) : null;
          case z:
            return O.key === ee ? M(N, w, O, k) : null;
          case K:
            return (ee = O._init), (O = ee(O._payload)), D(N, w, O, k);
        }
        if (ue(O) || de(O)) return ee !== null ? null : G(N, w, O, k, null);
        if (typeof O.then == "function") return D(N, w, fr(O), k);
        if (O.$$typeof === B) return D(N, w, Pi(N, O), k);
        dr(N, O);
      }
      return null;
    }
    function j(N, w, O, k, ee) {
      if (
        (typeof k == "string" && k !== "") ||
        typeof k == "number" ||
        typeof k == "bigint"
      )
        return (N = N.get(O) || null), m(w, N, "" + k, ee);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case R:
            return (
              (N = N.get(k.key === null ? O : k.key) || null), x(w, N, k, ee)
            );
          case z:
            return (
              (N = N.get(k.key === null ? O : k.key) || null), M(w, N, k, ee)
            );
          case K:
            var Se = k._init;
            return (k = Se(k._payload)), j(N, w, O, k, ee);
        }
        if (ue(k) || de(k)) return (N = N.get(O) || null), G(w, N, k, ee, null);
        if (typeof k.then == "function") return j(N, w, O, fr(k), ee);
        if (k.$$typeof === B) return j(N, w, O, Pi(w, k), ee);
        dr(w, k);
      }
      return null;
    }
    function fe(N, w, O, k) {
      for (
        var ee = null, Se = null, ae = w, se = (w = 0), tt = null;
        ae !== null && se < O.length;
        se++
      ) {
        ae.index > se ? ((tt = ae), (ae = null)) : (tt = ae.sibling);
        var Oe = D(N, ae, O[se], k);
        if (Oe === null) {
          ae === null && (ae = tt);
          break;
        }
        e && ae && Oe.alternate === null && t(N, ae),
          (w = r(Oe, w, se)),
          Se === null ? (ee = Oe) : (Se.sibling = Oe),
          (Se = Oe),
          (ae = tt);
      }
      if (se === O.length) return l(N, ae), Ce && fn(N, se), ee;
      if (ae === null) {
        for (; se < O.length; se++)
          (ae = X(N, O[se], k)),
            ae !== null &&
              ((w = r(ae, w, se)),
              Se === null ? (ee = ae) : (Se.sibling = ae),
              (Se = ae));
        return Ce && fn(N, se), ee;
      }
      for (ae = n(ae); se < O.length; se++)
        (tt = j(ae, N, se, O[se], k)),
          tt !== null &&
            (e &&
              tt.alternate !== null &&
              ae.delete(tt.key === null ? se : tt.key),
            (w = r(tt, w, se)),
            Se === null ? (ee = tt) : (Se.sibling = tt),
            (Se = tt));
      return (
        e &&
          ae.forEach(function (Ql) {
            return t(N, Ql);
          }),
        Ce && fn(N, se),
        ee
      );
    }
    function ce(N, w, O, k) {
      if (O == null) throw Error(c(151));
      for (
        var ee = null,
          Se = null,
          ae = w,
          se = (w = 0),
          tt = null,
          Oe = O.next();
        ae !== null && !Oe.done;
        se++, Oe = O.next()
      ) {
        ae.index > se ? ((tt = ae), (ae = null)) : (tt = ae.sibling);
        var Ql = D(N, ae, Oe.value, k);
        if (Ql === null) {
          ae === null && (ae = tt);
          break;
        }
        e && ae && Ql.alternate === null && t(N, ae),
          (w = r(Ql, w, se)),
          Se === null ? (ee = Ql) : (Se.sibling = Ql),
          (Se = Ql),
          (ae = tt);
      }
      if (Oe.done) return l(N, ae), Ce && fn(N, se), ee;
      if (ae === null) {
        for (; !Oe.done; se++, Oe = O.next())
          (Oe = X(N, Oe.value, k)),
            Oe !== null &&
              ((w = r(Oe, w, se)),
              Se === null ? (ee = Oe) : (Se.sibling = Oe),
              (Se = Oe));
        return Ce && fn(N, se), ee;
      }
      for (ae = n(ae); !Oe.done; se++, Oe = O.next())
        (Oe = j(ae, N, se, Oe.value, k)),
          Oe !== null &&
            (e &&
              Oe.alternate !== null &&
              ae.delete(Oe.key === null ? se : Oe.key),
            (w = r(Oe, w, se)),
            Se === null ? (ee = Oe) : (Se.sibling = Oe),
            (Se = Oe));
      return (
        e &&
          ae.forEach(function (Zy) {
            return t(N, Zy);
          }),
        Ce && fn(N, se),
        ee
      );
    }
    function Ue(N, w, O, k) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === H &&
          O.key === null &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case R:
            e: {
              for (var ee = O.key; w !== null; ) {
                if (w.key === ee) {
                  if (((ee = O.type), ee === H)) {
                    if (w.tag === 7) {
                      l(N, w.sibling),
                        (k = i(w, O.props.children)),
                        (k.return = N),
                        (N = k);
                      break e;
                    }
                  } else if (
                    w.elementType === ee ||
                    (typeof ee == "object" &&
                      ee !== null &&
                      ee.$$typeof === K &&
                      Sd(ee) === w.type)
                  ) {
                    l(N, w.sibling),
                      (k = i(w, O.props)),
                      ei(k, O),
                      (k.return = N),
                      (N = k);
                    break e;
                  }
                  l(N, w);
                  break;
                } else t(N, w);
                w = w.sibling;
              }
              O.type === H
                ? ((k = on(O.props.children, N.mode, k, O.key)),
                  (k.return = N),
                  (N = k))
                : ((k = Ji(O.type, O.key, O.props, null, N.mode, k)),
                  ei(k, O),
                  (k.return = N),
                  (N = k));
            }
            return f(N);
          case z:
            e: {
              for (ee = O.key; w !== null; ) {
                if (w.key === ee)
                  if (
                    w.tag === 4 &&
                    w.stateNode.containerInfo === O.containerInfo &&
                    w.stateNode.implementation === O.implementation
                  ) {
                    l(N, w.sibling),
                      (k = i(w, O.children || [])),
                      (k.return = N),
                      (N = k);
                    break e;
                  } else {
                    l(N, w);
                    break;
                  }
                else t(N, w);
                w = w.sibling;
              }
              (k = Qu(O, N.mode, k)), (k.return = N), (N = k);
            }
            return f(N);
          case K:
            return (ee = O._init), (O = ee(O._payload)), Ue(N, w, O, k);
        }
        if (ue(O)) return fe(N, w, O, k);
        if (de(O)) {
          if (((ee = de(O)), typeof ee != "function")) throw Error(c(150));
          return (O = ee.call(O)), ce(N, w, O, k);
        }
        if (typeof O.then == "function") return Ue(N, w, fr(O), k);
        if (O.$$typeof === B) return Ue(N, w, Pi(N, O), k);
        dr(N, O);
      }
      return (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
        ? ((O = "" + O),
          w !== null && w.tag === 6
            ? (l(N, w.sibling), (k = i(w, O)), (k.return = N), (N = k))
            : (l(N, w), (k = Xu(O, N.mode, k)), (k.return = N), (N = k)),
          f(N))
        : l(N, w);
    }
    return function (N, w, O, k) {
      try {
        Ia = 0;
        var ee = Ue(N, w, O, k);
        return ($n = null), ee;
      } catch (ae) {
        if (ae === Xa || ae === er) throw ae;
        var Se = Tt(29, ae, null, N.mode);
        return (Se.lanes = k), (Se.return = N), Se;
      } finally {
      }
    };
  }
  var Pn = Ed(!0),
    Ad = Ed(!1),
    qt = Y(null),
    Wt = null;
  function Ml(e) {
    var t = e.alternate;
    J(Fe, Fe.current & 1),
      J(qt, e),
      Wt === null &&
        (t === null || Kn.current !== null || t.memoizedState !== null) &&
        (Wt = e);
  }
  function wd(e) {
    if (e.tag === 22) {
      if ((J(Fe, Fe.current), J(qt, e), Wt === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Wt = e);
      }
    } else _l();
  }
  function _l() {
    J(Fe, Fe.current), J(qt, qt.current);
  }
  function fl(e) {
    F(qt), Wt === e && (Wt = null), F(Fe);
  }
  var Fe = Y(0);
  function mr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || ho(l))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function wc(e, t, l, n) {
    (t = e.memoizedState),
      (l = l(n, t)),
      (l = l == null ? t : b({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Tc = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var n = Ct(),
        i = Rl(n);
      (i.payload = t),
        l != null && (i.callback = l),
        (t = Ol(e, i, n)),
        t !== null && (Mt(t, e, n), Za(t, e, n));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var n = Ct(),
        i = Rl(n);
      (i.tag = 1),
        (i.payload = t),
        l != null && (i.callback = l),
        (t = Ol(e, i, n)),
        t !== null && (Mt(t, e, n), Za(t, e, n));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = Ct(),
        n = Rl(l);
      (n.tag = 2),
        t != null && (n.callback = t),
        (t = Ol(e, n, l)),
        t !== null && (Mt(t, e, l), Za(t, e, l));
    },
  };
  function Td(e, t, l, n, i, r, f) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(n, r, f)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Ha(l, n) || !Ha(i, r)
        : !0
    );
  }
  function Nd(e, t, l, n) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, n),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, n),
      t.state !== e && Tc.enqueueReplaceState(t, t.state, null);
  }
  function yn(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var n in t) n !== "ref" && (l[n] = t[n]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = b({}, l));
      for (var i in e) l[i] === void 0 && (l[i] = e[i]);
    }
    return l;
  }
  var hr =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function Rd(e) {
    hr(e);
  }
  function Od(e) {
    console.error(e);
  }
  function Cd(e) {
    hr(e);
  }
  function vr(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Md(e, t, l) {
    try {
      var n = e.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Nc(e, t, l) {
    return (
      (l = Rl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        vr(e, t);
      }),
      l
    );
  }
  function _d(e) {
    return (e = Rl(e)), (e.tag = 3), e;
  }
  function Dd(e, t, l, n) {
    var i = l.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var r = n.value;
      (e.payload = function () {
        return i(r);
      }),
        (e.callback = function () {
          Md(t, l, n);
        });
    }
    var f = l.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (e.callback = function () {
        Md(t, l, n),
          typeof i != "function" &&
            (Bl === null ? (Bl = new Set([this])) : Bl.add(this));
        var m = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: m !== null ? m : "",
        });
      });
  }
  function Zp(e, t, l, n, i) {
    if (
      ((l.flags |= 32768),
      n !== null && typeof n == "object" && typeof n.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && Ya(t, l, i, !0),
        (l = qt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Wt === null ? Fc() : l.alternate === null && ke === 0 && (ke = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = i),
              n === tc
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([n])) : t.add(n),
                  Pc(e, n, i)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              n === tc
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([n])) : l.add(n)),
                  Pc(e, n, i)),
              !1
            );
        }
        throw Error(c(435, l.tag));
      }
      return Pc(e, n, i), Fc(), !1;
    }
    if (Ce)
      return (
        (t = qt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            n !== Ju && ((e = Error(c(422), { cause: n })), Ga(Ut(e, l))))
          : (n !== Ju && ((t = Error(c(423), { cause: n })), Ga(Ut(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (n = Ut(n, l)),
            (i = Nc(e.stateNode, n, i)),
            ac(e, i),
            ke !== 4 && (ke = 2)),
        !1
      );
    var r = Error(c(520), { cause: n });
    if (
      ((r = Ut(r, l)),
      ui === null ? (ui = [r]) : ui.push(r),
      ke !== 4 && (ke = 2),
      t === null)
    )
      return !0;
    (n = Ut(n, l)), (l = t);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = i & -i),
            (l.lanes |= e),
            (e = Nc(l.stateNode, n, e)),
            ac(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (r = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (r !== null &&
                  typeof r.componentDidCatch == "function" &&
                  (Bl === null || !Bl.has(r)))))
          )
            return (
              (l.flags |= 65536),
              (i &= -i),
              (l.lanes |= i),
              (i = _d(i)),
              Dd(i, e, l, n),
              ac(l, i),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var zd = Error(c(461)),
    Ie = !1;
  function at(e, t, l, n) {
    t.child = e === null ? Ad(t, null, l, n) : Pn(t, e.child, l, n);
  }
  function jd(e, t, l, n, i) {
    l = l.render;
    var r = t.ref;
    if ("ref" in n) {
      var f = {};
      for (var m in n) m !== "ref" && (f[m] = n[m]);
    } else f = n;
    return (
      vn(t),
      (n = oc(e, t, l, f, r, i)),
      (m = sc()),
      e !== null && !Ie
        ? (fc(e, t, i), dl(e, t, i))
        : (Ce && m && Zu(t), (t.flags |= 1), at(e, t, n, i), t.child)
    );
  }
  function Ud(e, t, l, n, i) {
    if (e === null) {
      var r = l.type;
      return typeof r == "function" &&
        !Vu(r) &&
        r.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = r), Hd(e, t, r, n, i))
        : ((e = Ji(l.type, null, n, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((r = e.child), !jc(e, i))) {
      var f = r.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Ha), l(f, n) && e.ref === t.ref)
      )
        return dl(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = il(r, n)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Hd(e, t, l, n, i) {
    if (e !== null) {
      var r = e.memoizedProps;
      if (Ha(r, n) && e.ref === t.ref)
        if (((Ie = !1), (t.pendingProps = n = r), jc(e, i)))
          (e.flags & 131072) !== 0 && (Ie = !0);
        else return (t.lanes = e.lanes), dl(e, t, i);
    }
    return Rc(e, t, l, n, i);
  }
  function Bd(e, t, l) {
    var n = t.pendingProps,
      i = n.children,
      r = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((n = r !== null ? r.baseLanes | l : l), e !== null)) {
          for (i = t.child = e.child, r = 0; i !== null; )
            (r = r | i.lanes | i.childLanes), (i = i.sibling);
          t.childLanes = r & ~n;
        } else (t.childLanes = 0), (t.child = null);
        return Ld(e, t, n, l);
      }
      if ((l & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ii(t, r !== null ? r.cachePool : null),
          r !== null ? Hf(t, r) : rc(),
          wd(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          Ld(e, t, r !== null ? r.baseLanes | l : l, l)
        );
    } else
      r !== null
        ? (Ii(t, r.cachePool), Hf(t, r), _l(), (t.memoizedState = null))
        : (e !== null && Ii(t, null), rc(), _l());
    return at(e, t, i, l), t.child;
  }
  function Ld(e, t, l, n) {
    var i = ec();
    return (
      (i = i === null ? null : { parent: We._currentValue, pool: i }),
      (t.memoizedState = { baseLanes: l, cachePool: i }),
      e !== null && Ii(t, null),
      rc(),
      wd(t),
      e !== null && Ya(e, t, n, !0),
      null
    );
  }
  function gr(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(c(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Rc(e, t, l, n, i) {
    return (
      vn(t),
      (l = oc(e, t, l, n, void 0, i)),
      (n = sc()),
      e !== null && !Ie
        ? (fc(e, t, i), dl(e, t, i))
        : (Ce && n && Zu(t), (t.flags |= 1), at(e, t, l, i), t.child)
    );
  }
  function qd(e, t, l, n, i, r) {
    return (
      vn(t),
      (t.updateQueue = null),
      (l = Lf(t, n, l, i)),
      Bf(e),
      (n = sc()),
      e !== null && !Ie
        ? (fc(e, t, r), dl(e, t, r))
        : (Ce && n && Zu(t), (t.flags |= 1), at(e, t, l, r), t.child)
    );
  }
  function Gd(e, t, l, n, i) {
    if ((vn(t), t.stateNode === null)) {
      var r = kn,
        f = l.contextType;
      typeof f == "object" && f !== null && (r = st(f)),
        (r = new l(n, r)),
        (t.memoizedState =
          r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = Tc),
        (t.stateNode = r),
        (r._reactInternals = t),
        (r = t.stateNode),
        (r.props = n),
        (r.state = t.memoizedState),
        (r.refs = {}),
        lc(t),
        (f = l.contextType),
        (r.context = typeof f == "object" && f !== null ? st(f) : kn),
        (r.state = t.memoizedState),
        (f = l.getDerivedStateFromProps),
        typeof f == "function" && (wc(t, l, f, n), (r.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((f = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          f !== r.state && Tc.enqueueReplaceState(r, r.state, null),
          Ja(t, n, r, i),
          Ka(),
          (r.state = t.memoizedState)),
        typeof r.componentDidMount == "function" && (t.flags |= 4194308),
        (n = !0);
    } else if (e === null) {
      r = t.stateNode;
      var m = t.memoizedProps,
        x = yn(l, m);
      r.props = x;
      var M = r.context,
        G = l.contextType;
      (f = kn), typeof G == "object" && G !== null && (f = st(G));
      var X = l.getDerivedStateFromProps;
      (G =
        typeof X == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function"),
        (m = t.pendingProps !== m),
        G ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((m || M !== f) && Nd(t, r, n, f)),
        (Nl = !1);
      var D = t.memoizedState;
      (r.state = D),
        Ja(t, n, r, i),
        Ka(),
        (M = t.memoizedState),
        m || D !== M || Nl
          ? (typeof X == "function" && (wc(t, l, X, n), (M = t.memoizedState)),
            (x = Nl || Td(t, l, x, n, D, M, f))
              ? (G ||
                  (typeof r.UNSAFE_componentWillMount != "function" &&
                    typeof r.componentWillMount != "function") ||
                  (typeof r.componentWillMount == "function" &&
                    r.componentWillMount(),
                  typeof r.UNSAFE_componentWillMount == "function" &&
                    r.UNSAFE_componentWillMount()),
                typeof r.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof r.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = n),
                (t.memoizedState = M)),
            (r.props = n),
            (r.state = M),
            (r.context = f),
            (n = x))
          : (typeof r.componentDidMount == "function" && (t.flags |= 4194308),
            (n = !1));
    } else {
      (r = t.stateNode),
        nc(e, t),
        (f = t.memoizedProps),
        (G = yn(l, f)),
        (r.props = G),
        (X = t.pendingProps),
        (D = r.context),
        (M = l.contextType),
        (x = kn),
        typeof M == "object" && M !== null && (x = st(M)),
        (m = l.getDerivedStateFromProps),
        (M =
          typeof m == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((f !== X || D !== x) && Nd(t, r, n, x)),
        (Nl = !1),
        (D = t.memoizedState),
        (r.state = D),
        Ja(t, n, r, i),
        Ka();
      var j = t.memoizedState;
      f !== X ||
      D !== j ||
      Nl ||
      (e !== null && e.dependencies !== null && $i(e.dependencies))
        ? (typeof m == "function" && (wc(t, l, m, n), (j = t.memoizedState)),
          (G =
            Nl ||
            Td(t, l, G, n, D, j, x) ||
            (e !== null && e.dependencies !== null && $i(e.dependencies)))
            ? (M ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" &&
                  r.componentWillUpdate(n, j, x),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(n, j, x)),
              typeof r.componentDidUpdate == "function" && (t.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (f === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (f === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = j)),
          (r.props = n),
          (r.state = j),
          (r.context = x),
          (n = G))
        : (typeof r.componentDidUpdate != "function" ||
            (f === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (f === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1));
    }
    return (
      (r = n),
      gr(e, t),
      (n = (t.flags & 128) !== 0),
      r || n
        ? ((r = t.stateNode),
          (l =
            n && typeof l.getDerivedStateFromError != "function"
              ? null
              : r.render()),
          (t.flags |= 1),
          e !== null && n
            ? ((t.child = Pn(t, e.child, null, i)),
              (t.child = Pn(t, null, l, i)))
            : at(e, t, l, i),
          (t.memoizedState = r.state),
          (e = t.child))
        : (e = dl(e, t, i)),
      e
    );
  }
  function Yd(e, t, l, n) {
    return qa(), (t.flags |= 256), at(e, t, l, n), t.child;
  }
  var Oc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Cc(e) {
    return { baseLanes: e, cachePool: Of() };
  }
  function Mc(e, t, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= Gt), e;
  }
  function kd(e, t, l) {
    var n = t.pendingProps,
      i = !1,
      r = (t.flags & 128) !== 0,
      f;
    if (
      ((f = r) ||
        (f =
          e !== null && e.memoizedState === null ? !1 : (Fe.current & 2) !== 0),
      f && ((i = !0), (t.flags &= -129)),
      (f = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ce) {
        if ((i ? Ml(t) : _l(), Ce)) {
          var m = Ye,
            x;
          if ((x = m)) {
            e: {
              for (x = m, m = Jt; x.nodeType !== 8; ) {
                if (!m) {
                  m = null;
                  break e;
                }
                if (((x = Xt(x.nextSibling)), x === null)) {
                  m = null;
                  break e;
                }
              }
              m = x;
            }
            m !== null
              ? ((t.memoizedState = {
                  dehydrated: m,
                  treeContext: sn !== null ? { id: rl, overflow: ul } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (x = Tt(18, null, null, 0)),
                (x.stateNode = m),
                (x.return = t),
                (t.child = x),
                (dt = t),
                (Ye = null),
                (x = !0))
              : (x = !1);
          }
          x || mn(t);
        }
        if (
          ((m = t.memoizedState),
          m !== null && ((m = m.dehydrated), m !== null))
        )
          return ho(m) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        fl(t);
      }
      return (
        (m = n.children),
        (n = n.fallback),
        i
          ? (_l(),
            (i = t.mode),
            (m = pr({ mode: "hidden", children: m }, i)),
            (n = on(n, i, l, null)),
            (m.return = t),
            (n.return = t),
            (m.sibling = n),
            (t.child = m),
            (i = t.child),
            (i.memoizedState = Cc(l)),
            (i.childLanes = Mc(e, f, l)),
            (t.memoizedState = Oc),
            n)
          : (Ml(t), _c(t, m))
      );
    }
    if (
      ((x = e.memoizedState), x !== null && ((m = x.dehydrated), m !== null))
    ) {
      if (r)
        t.flags & 256
          ? (Ml(t), (t.flags &= -257), (t = Dc(e, t, l)))
          : t.memoizedState !== null
          ? (_l(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (_l(),
            (i = n.fallback),
            (m = t.mode),
            (n = pr({ mode: "visible", children: n.children }, m)),
            (i = on(i, m, l, null)),
            (i.flags |= 2),
            (n.return = t),
            (i.return = t),
            (n.sibling = i),
            (t.child = n),
            Pn(t, e.child, null, l),
            (n = t.child),
            (n.memoizedState = Cc(l)),
            (n.childLanes = Mc(e, f, l)),
            (t.memoizedState = Oc),
            (t = i));
      else if ((Ml(t), ho(m))) {
        if (((f = m.nextSibling && m.nextSibling.dataset), f)) var M = f.dgst;
        (f = M),
          (n = Error(c(419))),
          (n.stack = ""),
          (n.digest = f),
          Ga({ value: n, source: null, stack: null }),
          (t = Dc(e, t, l));
      } else if (
        (Ie || Ya(e, t, l, !1), (f = (l & e.childLanes) !== 0), Ie || f)
      ) {
        if (
          ((f = Le),
          f !== null &&
            ((n = l & -l),
            (n = (n & 42) !== 0 ? 1 : hu(n)),
            (n = (n & (f.suspendedLanes | l)) !== 0 ? 0 : n),
            n !== 0 && n !== x.retryLane))
        )
          throw ((x.retryLane = n), Yn(e, n), Mt(f, e, n), zd);
        m.data === "$?" || Fc(), (t = Dc(e, t, l));
      } else
        m.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = x.treeContext),
            (Ye = Xt(m.nextSibling)),
            (dt = t),
            (Ce = !0),
            (dn = null),
            (Jt = !1),
            e !== null &&
              ((Bt[Lt++] = rl),
              (Bt[Lt++] = ul),
              (Bt[Lt++] = sn),
              (rl = e.id),
              (ul = e.overflow),
              (sn = t)),
            (t = _c(t, n.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (_l(),
        (i = n.fallback),
        (m = t.mode),
        (x = e.child),
        (M = x.sibling),
        (n = il(x, { mode: "hidden", children: n.children })),
        (n.subtreeFlags = x.subtreeFlags & 65011712),
        M !== null ? (i = il(M, i)) : ((i = on(i, m, l, null)), (i.flags |= 2)),
        (i.return = t),
        (n.return = t),
        (n.sibling = i),
        (t.child = n),
        (n = i),
        (i = t.child),
        (m = e.child.memoizedState),
        m === null
          ? (m = Cc(l))
          : ((x = m.cachePool),
            x !== null
              ? ((M = We._currentValue),
                (x = x.parent !== M ? { parent: M, pool: M } : x))
              : (x = Of()),
            (m = { baseLanes: m.baseLanes | l, cachePool: x })),
        (i.memoizedState = m),
        (i.childLanes = Mc(e, f, l)),
        (t.memoizedState = Oc),
        n)
      : (Ml(t),
        (l = e.child),
        (e = l.sibling),
        (l = il(l, { mode: "visible", children: n.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((f = t.deletions),
          f === null ? ((t.deletions = [e]), (t.flags |= 16)) : f.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function _c(e, t) {
    return (
      (t = pr({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function pr(e, t) {
    return (
      (e = Tt(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function Dc(e, t, l) {
    return (
      Pn(t, e.child, null, l),
      (e = _c(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Vd(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Fu(e.return, t, l);
  }
  function zc(e, t, l, n, i) {
    var r = e.memoizedState;
    r === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: l,
          tailMode: i,
        })
      : ((r.isBackwards = t),
        (r.rendering = null),
        (r.renderingStartTime = 0),
        (r.last = n),
        (r.tail = l),
        (r.tailMode = i));
  }
  function Xd(e, t, l) {
    var n = t.pendingProps,
      i = n.revealOrder,
      r = n.tail;
    if ((at(e, t, n.children, l), (n = Fe.current), (n & 2) !== 0))
      (n = (n & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Vd(e, l, t);
          else if (e.tag === 19) Vd(e, l, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      n &= 1;
    }
    switch ((J(Fe, n), i)) {
      case "forwards":
        for (l = t.child, i = null; l !== null; )
          (e = l.alternate),
            e !== null && mr(e) === null && (i = l),
            (l = l.sibling);
        (l = i),
          l === null
            ? ((i = t.child), (t.child = null))
            : ((i = l.sibling), (l.sibling = null)),
          zc(t, !1, i, l, r);
        break;
      case "backwards":
        for (l = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && mr(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = l), (l = i), (i = e);
        }
        zc(t, !0, l, null, r);
        break;
      case "together":
        zc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function dl(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Hl |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Ya(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (
        e = t.child, l = il(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (l = l.sibling = il(e, e.pendingProps)),
          (l.return = t);
      l.sibling = null;
    }
    return t.child;
  }
  function jc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && $i(e)));
  }
  function Kp(e, t, l) {
    switch (t.tag) {
      case 3:
        re(t, t.stateNode.containerInfo),
          Tl(t, We, e.memoizedState.cache),
          qa();
        break;
      case 27:
      case 5:
        Ne(t);
        break;
      case 4:
        re(t, t.stateNode.containerInfo);
        break;
      case 10:
        Tl(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null
            ? (Ml(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
            ? kd(e, t, l)
            : (Ml(t), (e = dl(e, t, l)), e !== null ? e.sibling : null);
        Ml(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((n = (l & t.childLanes) !== 0),
          n || (Ya(e, t, l, !1), (n = (l & t.childLanes) !== 0)),
          i)
        ) {
          if (n) return Xd(e, t, l);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          J(Fe, Fe.current),
          n)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Bd(e, t, l);
      case 24:
        Tl(t, We, e.memoizedState.cache);
    }
    return dl(e, t, l);
  }
  function Qd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ie = !0;
      else {
        if (!jc(e, l) && (t.flags & 128) === 0) return (Ie = !1), Kp(e, t, l);
        Ie = (e.flags & 131072) !== 0;
      }
    else (Ie = !1), Ce && (t.flags & 1048576) !== 0 && Sf(t, Fi, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var n = t.elementType,
            i = n._init;
          if (((n = i(n._payload)), (t.type = n), typeof n == "function"))
            Vu(n)
              ? ((e = yn(n, e)), (t.tag = 1), (t = Gd(null, t, n, e, l)))
              : ((t.tag = 0), (t = Rc(null, t, n, e, l)));
          else {
            if (n != null) {
              if (((i = n.$$typeof), i === Z)) {
                (t.tag = 11), (t = jd(null, t, n, e, l));
                break e;
              } else if (i === W) {
                (t.tag = 14), (t = Ud(null, t, n, e, l));
                break e;
              }
            }
            throw ((t = xe(n) || n), Error(c(306, t, "")));
          }
        }
        return t;
      case 0:
        return Rc(e, t, t.type, t.pendingProps, l);
      case 1:
        return (n = t.type), (i = yn(n, t.pendingProps)), Gd(e, t, n, i, l);
      case 3:
        e: {
          if ((re(t, t.stateNode.containerInfo), e === null))
            throw Error(c(387));
          n = t.pendingProps;
          var r = t.memoizedState;
          (i = r.element), nc(e, t), Ja(t, n, null, l);
          var f = t.memoizedState;
          if (
            ((n = f.cache),
            Tl(t, We, n),
            n !== r.cache && $u(t, [We], l, !0),
            Ka(),
            (n = f.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: n, isDehydrated: !1, cache: f.cache }),
              (t.updateQueue.baseState = r),
              (t.memoizedState = r),
              t.flags & 256)
            ) {
              t = Yd(e, t, n, l);
              break e;
            } else if (n !== i) {
              (i = Ut(Error(c(424)), t)), Ga(i), (t = Yd(e, t, n, l));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                Ye = Xt(e.firstChild),
                  dt = t,
                  Ce = !0,
                  dn = null,
                  Jt = !0,
                  l = Ad(t, null, n, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((qa(), n === i)) {
              t = dl(e, t, l);
              break e;
            }
            at(e, t, n, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          gr(e, t),
          e === null
            ? (l = Wm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : Ce ||
                ((l = t.type),
                (e = t.pendingProps),
                (n = _r(ie.current).createElement(l)),
                (n[ot] = t),
                (n[vt] = e),
                rt(n, l, e),
                Pe(n),
                (t.stateNode = n))
            : (t.memoizedState = Wm(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Ne(t),
          e === null &&
            Ce &&
            ((n = t.stateNode = Zm(t.type, t.pendingProps, ie.current)),
            (dt = t),
            (Jt = !0),
            (i = Ye),
            Gl(t.type) ? ((vo = i), (Ye = Xt(n.firstChild))) : (Ye = i)),
          at(e, t, t.pendingProps.children, l),
          gr(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ce &&
            ((i = n = Ye) &&
              ((n = Sy(n, t.type, t.pendingProps, Jt)),
              n !== null
                ? ((t.stateNode = n),
                  (dt = t),
                  (Ye = Xt(n.firstChild)),
                  (Jt = !1),
                  (i = !0))
                : (i = !1)),
            i || mn(t)),
          Ne(t),
          (i = t.type),
          (r = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (n = r.children),
          so(i, r) ? (n = null) : f !== null && so(i, f) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((i = oc(e, t, qp, null, null, l)), (gi._currentValue = i)),
          gr(e, t),
          at(e, t, n, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ce &&
            ((e = l = Ye) &&
              ((l = Ey(l, t.pendingProps, Jt)),
              l !== null
                ? ((t.stateNode = l), (dt = t), (Ye = null), (e = !0))
                : (e = !1)),
            e || mn(t)),
          null
        );
      case 13:
        return kd(e, t, l);
      case 4:
        return (
          re(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = Pn(t, null, n, l)) : at(e, t, n, l),
          t.child
        );
      case 11:
        return jd(e, t, t.type, t.pendingProps, l);
      case 7:
        return at(e, t, t.pendingProps, l), t.child;
      case 8:
        return at(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return at(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return (
          (n = t.pendingProps),
          Tl(t, t.type, n.value),
          at(e, t, n.children, l),
          t.child
        );
      case 9:
        return (
          (i = t.type._context),
          (n = t.pendingProps.children),
          vn(t),
          (i = st(i)),
          (n = n(i)),
          (t.flags |= 1),
          at(e, t, n, l),
          t.child
        );
      case 14:
        return Ud(e, t, t.type, t.pendingProps, l);
      case 15:
        return Hd(e, t, t.type, t.pendingProps, l);
      case 19:
        return Xd(e, t, l);
      case 31:
        return (
          (n = t.pendingProps),
          (l = t.mode),
          (n = { mode: n.mode, children: n.children }),
          e === null
            ? ((l = pr(n, l)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l))
            : ((l = il(e.child, n)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l)),
          t
        );
      case 22:
        return Bd(e, t, l);
      case 24:
        return (
          vn(t),
          (n = st(We)),
          e === null
            ? ((i = ec()),
              i === null &&
                ((i = Le),
                (r = Pu()),
                (i.pooledCache = r),
                r.refCount++,
                r !== null && (i.pooledCacheLanes |= l),
                (i = r)),
              (t.memoizedState = { parent: n, cache: i }),
              lc(t),
              Tl(t, We, i))
            : ((e.lanes & l) !== 0 && (nc(e, t), Ja(t, null, null, l), Ka()),
              (i = e.memoizedState),
              (r = t.memoizedState),
              i.parent !== n
                ? ((i = { parent: n, cache: n }),
                  (t.memoizedState = i),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = i),
                  Tl(t, We, n))
                : ((n = r.cache),
                  Tl(t, We, n),
                  n !== i.cache && $u(t, [We], l, !0))),
          at(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function ml(e) {
    e.flags |= 4;
  }
  function Zd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !eh(t))) {
      if (
        ((t = qt.current),
        t !== null &&
          ((Re & 4194048) === Re
            ? Wt !== null
            : ((Re & 62914560) !== Re && (Re & 536870912) === 0) || t !== Wt))
      )
        throw ((Qa = tc), Cf);
      e.flags |= 8192;
    }
  }
  function yr(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? As() : 536870912), (e.lanes |= t), (la |= t));
  }
  function ti(e, t) {
    if (!Ce)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), (t = t.sibling);
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var n = null; l !== null; )
            l.alternate !== null && (n = l), (l = l.sibling);
          n === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function Ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      n = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (l |= i.lanes | i.childLanes),
          (n |= i.subtreeFlags & 65011712),
          (n |= i.flags & 65011712),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (l |= i.lanes | i.childLanes),
          (n |= i.subtreeFlags),
          (n |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= n), (e.childLanes = l), t;
  }
  function Jp(e, t, l) {
    var n = t.pendingProps;
    switch ((Ku(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ge(t), null;
      case 1:
        return Ge(t), null;
      case 3:
        return (
          (l = t.stateNode),
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          ol(We),
          Me(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (La(t)
              ? ml(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), wf())),
          Ge(t),
          null
        );
      case 26:
        return (
          (l = t.memoizedState),
          e === null
            ? (ml(t),
              l !== null ? (Ge(t), Zd(t, l)) : (Ge(t), (t.flags &= -16777217)))
            : l
            ? l !== e.memoizedState
              ? (ml(t), Ge(t), Zd(t, l))
              : (Ge(t), (t.flags &= -16777217))
            : (e.memoizedProps !== n && ml(t), Ge(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        Ee(t), (l = ie.current);
        var i = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== n && ml(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(c(166));
            return Ge(t), null;
          }
          (e = P.current),
            La(t) ? Ef(t) : ((e = Zm(i, n, l)), (t.stateNode = e), ml(t));
        }
        return Ge(t), null;
      case 5:
        if ((Ee(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== n && ml(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(c(166));
            return Ge(t), null;
          }
          if (((e = P.current), La(t))) Ef(t);
          else {
            switch (((i = _r(ie.current)), e)) {
              case 1:
                e = i.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                e = i.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    e = i.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    e = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    (e = i.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof n.is == "string"
                        ? i.createElement("select", { is: n.is })
                        : i.createElement("select")),
                      n.multiple
                        ? (e.multiple = !0)
                        : n.size && (e.size = n.size);
                    break;
                  default:
                    e =
                      typeof n.is == "string"
                        ? i.createElement(l, { is: n.is })
                        : i.createElement(l);
                }
            }
            (e[ot] = t), (e[vt] = n);
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                (i.child.return = i), (i = i.child);
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e;
                i = i.return;
              }
              (i.sibling.return = i.return), (i = i.sibling);
            }
            t.stateNode = e;
            e: switch ((rt(e, l, n), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!n.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && ml(t);
          }
        }
        return Ge(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== n && ml(t);
        else {
          if (typeof n != "string" && t.stateNode === null) throw Error(c(166));
          if (((e = ie.current), La(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (n = null),
              (i = dt),
              i !== null)
            )
              switch (i.tag) {
                case 27:
                case 5:
                  n = i.memoizedProps;
              }
            (e[ot] = t),
              (e = !!(
                e.nodeValue === l ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                qm(e.nodeValue, l)
              )),
              e || mn(t);
          } else (e = _r(e).createTextNode(n)), (e[ot] = t), (t.stateNode = e);
        }
        return Ge(t), null;
      case 13:
        if (
          ((n = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = La(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(c(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(c(317));
              i[ot] = t;
            } else
              qa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ge(t), (i = !1);
          } else
            (i = wf()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (i = !0);
          if (!i) return t.flags & 256 ? (fl(t), t) : (fl(t), null);
        }
        if ((fl(t), (t.flags & 128) !== 0)) return (t.lanes = l), t;
        if (
          ((l = n !== null), (e = e !== null && e.memoizedState !== null), l)
        ) {
          (n = t.child),
            (i = null),
            n.alternate !== null &&
              n.alternate.memoizedState !== null &&
              n.alternate.memoizedState.cachePool !== null &&
              (i = n.alternate.memoizedState.cachePool.pool);
          var r = null;
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (r = n.memoizedState.cachePool.pool),
            r !== i && (n.flags |= 2048);
        }
        return (
          l !== e && l && (t.child.flags |= 8192),
          yr(t, t.updateQueue),
          Ge(t),
          null
        );
      case 4:
        return Me(), e === null && io(t.stateNode.containerInfo), Ge(t), null;
      case 10:
        return ol(t.type), Ge(t), null;
      case 19:
        if ((F(Fe), (i = t.memoizedState), i === null)) return Ge(t), null;
        if (((n = (t.flags & 128) !== 0), (r = i.rendering), r === null))
          if (n) ti(i, !1);
          else {
            if (ke !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((r = mr(e)), r !== null)) {
                  for (
                    t.flags |= 128,
                      ti(i, !1),
                      e = r.updateQueue,
                      t.updateQueue = e,
                      yr(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    xf(l, e), (l = l.sibling);
                  return J(Fe, (Fe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              ct() > Sr &&
              ((t.flags |= 128), (n = !0), ti(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = mr(r)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                yr(t, e),
                ti(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !r.alternate &&
                  !Ce)
              )
                return Ge(t), null;
            } else
              2 * ct() - i.renderingStartTime > Sr &&
                l !== 536870912 &&
                ((t.flags |= 128), (n = !0), ti(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((r.sibling = t.child), (t.child = r))
            : ((e = i.last),
              e !== null ? (e.sibling = r) : (t.child = r),
              (i.last = r));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ct()),
            (t.sibling = null),
            (e = Fe.current),
            J(Fe, n ? (e & 1) | 2 : e & 1),
            t)
          : (Ge(t), null);
      case 22:
      case 23:
        return (
          fl(t),
          uc(),
          (n = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== n && (t.flags |= 8192)
            : n && (t.flags |= 8192),
          n
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ge(t),
          (l = t.updateQueue),
          l !== null && yr(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (n = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          n !== l && (t.flags |= 2048),
          e !== null && F(gn),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          ol(We),
          Ge(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Wp(e, t) {
    switch ((Ku(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          ol(We),
          Me(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ee(t), null;
      case 13:
        if (
          (fl(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(c(340));
          qa();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return F(Fe), null;
      case 4:
        return Me(), null;
      case 10:
        return ol(t.type), null;
      case 22:
      case 23:
        return (
          fl(t),
          uc(),
          e !== null && F(gn),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return ol(We), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Kd(e, t) {
    switch ((Ku(t), t.tag)) {
      case 3:
        ol(We), Me();
        break;
      case 26:
      case 27:
      case 5:
        Ee(t);
        break;
      case 4:
        Me();
        break;
      case 13:
        fl(t);
        break;
      case 19:
        F(Fe);
        break;
      case 10:
        ol(t.type);
        break;
      case 22:
      case 23:
        fl(t), uc(), e !== null && F(gn);
        break;
      case 24:
        ol(We);
    }
  }
  function li(e, t) {
    try {
      var l = t.updateQueue,
        n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        l = i;
        do {
          if ((l.tag & e) === e) {
            n = void 0;
            var r = l.create,
              f = l.inst;
            (n = r()), (f.destroy = n);
          }
          l = l.next;
        } while (l !== i);
      }
    } catch (m) {
      He(t, t.return, m);
    }
  }
  function Dl(e, t, l) {
    try {
      var n = t.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var r = i.next;
        n = r;
        do {
          if ((n.tag & e) === e) {
            var f = n.inst,
              m = f.destroy;
            if (m !== void 0) {
              (f.destroy = void 0), (i = t);
              var x = l,
                M = m;
              try {
                M();
              } catch (G) {
                He(i, x, G);
              }
            }
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (G) {
      He(t, t.return, G);
    }
  }
  function Jd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Uf(t, l);
      } catch (n) {
        He(e, e.return, n);
      }
    }
  }
  function Wd(e, t, l) {
    (l.props = yn(e.type, e.memoizedProps)), (l.state = e.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (n) {
      He(e, t, n);
    }
  }
  function ni(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(n)) : (l.current = n);
      }
    } catch (i) {
      He(e, t, i);
    }
  }
  function Ft(e, t) {
    var l = e.ref,
      n = e.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (i) {
          He(e, t, i);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (i) {
          He(e, t, i);
        }
      else l.current = null;
  }
  function Fd(e) {
    var t = e.type,
      l = e.memoizedProps,
      n = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break e;
        case "img":
          l.src ? (n.src = l.src) : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (i) {
      He(e, e.return, i);
    }
  }
  function Uc(e, t, l) {
    try {
      var n = e.stateNode;
      gy(n, e.type, l, t), (n[vt] = t);
    } catch (i) {
      He(e, e.return, i);
    }
  }
  function $d(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Gl(e.type)) ||
      e.tag === 4
    );
  }
  function Hc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || $d(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Gl(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Bc(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      (e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = Mr));
    else if (
      n !== 4 &&
      (n === 27 && Gl(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Bc(e, t, l), e = e.sibling; e !== null; )
        Bc(e, t, l), (e = e.sibling);
  }
  function br(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (
      n !== 4 &&
      (n === 27 && Gl(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (br(e, t, l), e = e.sibling; e !== null; )
        br(e, t, l), (e = e.sibling);
  }
  function Pd(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var n = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      rt(t, n, l), (t[ot] = e), (t[vt] = l);
    } catch (r) {
      He(e, e.return, r);
    }
  }
  var hl = !1,
    Qe = !1,
    Lc = !1,
    Id = typeof WeakSet == "function" ? WeakSet : Set,
    et = null;
  function Fp(e, t) {
    if (((e = e.containerInfo), (co = Br), (e = sf(e)), Hu(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var i = n.anchorOffset,
              r = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, r.nodeType;
            } catch {
              l = null;
              break e;
            }
            var f = 0,
              m = -1,
              x = -1,
              M = 0,
              G = 0,
              X = e,
              D = null;
            t: for (;;) {
              for (
                var j;
                X !== l || (i !== 0 && X.nodeType !== 3) || (m = f + i),
                  X !== r || (n !== 0 && X.nodeType !== 3) || (x = f + n),
                  X.nodeType === 3 && (f += X.nodeValue.length),
                  (j = X.firstChild) !== null;

              )
                (D = X), (X = j);
              for (;;) {
                if (X === e) break t;
                if (
                  (D === l && ++M === i && (m = f),
                  D === r && ++G === n && (x = f),
                  (j = X.nextSibling) !== null)
                )
                  break;
                (X = D), (D = X.parentNode);
              }
              X = j;
            }
            l = m === -1 || x === -1 ? null : { start: m, end: x };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      oo = { focusedElem: e, selectionRange: l }, Br = !1, et = t;
      et !== null;

    )
      if (
        ((t = et), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), (et = e);
      else
        for (; et !== null; ) {
          switch (((t = et), (r = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && r !== null) {
                (e = void 0),
                  (l = t),
                  (i = r.memoizedProps),
                  (r = r.memoizedState),
                  (n = l.stateNode);
                try {
                  var fe = yn(l.type, i, l.elementType === l.type);
                  (e = n.getSnapshotBeforeUpdate(fe, r)),
                    (n.__reactInternalSnapshotBeforeUpdate = e);
                } catch (ce) {
                  He(l, l.return, ce);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  mo(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      mo(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(c(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (et = e);
            break;
          }
          et = t.return;
        }
  }
  function em(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        zl(e, l), n & 4 && li(5, l);
        break;
      case 1:
        if ((zl(e, l), n & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (f) {
              He(l, l.return, f);
            }
          else {
            var i = yn(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              He(l, l.return, f);
            }
          }
        n & 64 && Jd(l), n & 512 && ni(l, l.return);
        break;
      case 3:
        if ((zl(e, l), n & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Uf(e, t);
          } catch (f) {
            He(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && n & 4 && Pd(l);
      case 26:
      case 5:
        zl(e, l), t === null && n & 4 && Fd(l), n & 512 && ni(l, l.return);
        break;
      case 12:
        zl(e, l);
        break;
      case 13:
        zl(e, l),
          n & 4 && nm(e, l),
          n & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = iy.bind(null, l)), Ay(e, l))));
        break;
      case 22:
        if (((n = l.memoizedState !== null || hl), !n)) {
          (t = (t !== null && t.memoizedState !== null) || Qe), (i = hl);
          var r = Qe;
          (hl = n),
            (Qe = t) && !r ? jl(e, l, (l.subtreeFlags & 8772) !== 0) : zl(e, l),
            (hl = i),
            (Qe = r);
        }
        break;
      case 30:
        break;
      default:
        zl(e, l);
    }
  }
  function tm(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), tm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && pu(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var qe = null,
    yt = !1;
  function vl(e, t, l) {
    for (l = l.child; l !== null; ) lm(e, t, l), (l = l.sibling);
  }
  function lm(e, t, l) {
    if (Et && typeof Et.onCommitFiberUnmount == "function")
      try {
        Et.onCommitFiberUnmount(wa, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Qe || Ft(l, t),
          vl(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Qe || Ft(l, t);
        var n = qe,
          i = yt;
        Gl(l.type) && ((qe = l.stateNode), (yt = !1)),
          vl(e, t, l),
          di(l.stateNode),
          (qe = n),
          (yt = i);
        break;
      case 5:
        Qe || Ft(l, t);
      case 6:
        if (
          ((n = qe),
          (i = yt),
          (qe = null),
          vl(e, t, l),
          (qe = n),
          (yt = i),
          qe !== null)
        )
          if (yt)
            try {
              (qe.nodeType === 9
                ? qe.body
                : qe.nodeName === "HTML"
                ? qe.ownerDocument.body
                : qe
              ).removeChild(l.stateNode);
            } catch (r) {
              He(l, t, r);
            }
          else
            try {
              qe.removeChild(l.stateNode);
            } catch (r) {
              He(l, t, r);
            }
        break;
      case 18:
        qe !== null &&
          (yt
            ? ((e = qe),
              Xm(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                l.stateNode
              ),
              xi(e))
            : Xm(qe, l.stateNode));
        break;
      case 4:
        (n = qe),
          (i = yt),
          (qe = l.stateNode.containerInfo),
          (yt = !0),
          vl(e, t, l),
          (qe = n),
          (yt = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Qe || Dl(2, l, t), Qe || Dl(4, l, t), vl(e, t, l);
        break;
      case 1:
        Qe ||
          (Ft(l, t),
          (n = l.stateNode),
          typeof n.componentWillUnmount == "function" && Wd(l, t, n)),
          vl(e, t, l);
        break;
      case 21:
        vl(e, t, l);
        break;
      case 22:
        (Qe = (n = Qe) || l.memoizedState !== null), vl(e, t, l), (Qe = n);
        break;
      default:
        vl(e, t, l);
    }
  }
  function nm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        xi(e);
      } catch (l) {
        He(t, t.return, l);
      }
  }
  function $p(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Id()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Id()),
          t
        );
      default:
        throw Error(c(435, e.tag));
    }
  }
  function qc(e, t) {
    var l = $p(e);
    t.forEach(function (n) {
      var i = ry.bind(null, e, n);
      l.has(n) || (l.add(n), n.then(i, i));
    });
  }
  function Nt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var i = l[n],
          r = e,
          f = t,
          m = f;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (Gl(m.type)) {
                (qe = m.stateNode), (yt = !1);
                break e;
              }
              break;
            case 5:
              (qe = m.stateNode), (yt = !1);
              break e;
            case 3:
            case 4:
              (qe = m.stateNode.containerInfo), (yt = !0);
              break e;
          }
          m = m.return;
        }
        if (qe === null) throw Error(c(160));
        lm(r, f, i),
          (qe = null),
          (yt = !1),
          (r = i.alternate),
          r !== null && (r.return = null),
          (i.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) am(t, e), (t = t.sibling);
  }
  var Vt = null;
  function am(e, t) {
    var l = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Nt(t, e),
          Rt(e),
          n & 4 && (Dl(3, e, e.return), li(3, e), Dl(5, e, e.return));
        break;
      case 1:
        Nt(t, e),
          Rt(e),
          n & 512 && (Qe || l === null || Ft(l, l.return)),
          n & 64 &&
            hl &&
            ((e = e.updateQueue),
            e !== null &&
              ((n = e.callbacks),
              n !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? n : l.concat(n)))));
        break;
      case 26:
        var i = Vt;
        if (
          (Nt(t, e),
          Rt(e),
          n & 512 && (Qe || l === null || Ft(l, l.return)),
          n & 4)
        ) {
          var r = l !== null ? l.memoizedState : null;
          if (((n = e.memoizedState), l === null))
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  (n = e.type),
                    (l = e.memoizedProps),
                    (i = i.ownerDocument || i);
                  t: switch (n) {
                    case "title":
                      (r = i.getElementsByTagName("title")[0]),
                        (!r ||
                          r[Ra] ||
                          r[ot] ||
                          r.namespaceURI === "http://www.w3.org/2000/svg" ||
                          r.hasAttribute("itemprop")) &&
                          ((r = i.createElement(n)),
                          i.head.insertBefore(
                            r,
                            i.querySelector("head > title")
                          )),
                        rt(r, n, l),
                        (r[ot] = e),
                        Pe(r),
                        (n = r);
                      break e;
                    case "link":
                      var f = Pm("link", "href", i).get(n + (l.href || ""));
                      if (f) {
                        for (var m = 0; m < f.length; m++)
                          if (
                            ((r = f[m]),
                            r.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              r.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              r.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              r.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            f.splice(m, 1);
                            break t;
                          }
                      }
                      (r = i.createElement(n)),
                        rt(r, n, l),
                        i.head.appendChild(r);
                      break;
                    case "meta":
                      if (
                        (f = Pm("meta", "content", i).get(
                          n + (l.content || "")
                        ))
                      ) {
                        for (m = 0; m < f.length; m++)
                          if (
                            ((r = f[m]),
                            r.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              r.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              r.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              r.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              r.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            f.splice(m, 1);
                            break t;
                          }
                      }
                      (r = i.createElement(n)),
                        rt(r, n, l),
                        i.head.appendChild(r);
                      break;
                    default:
                      throw Error(c(468, n));
                  }
                  (r[ot] = e), Pe(r), (n = r);
                }
                e.stateNode = n;
              } else Im(i, e.type, e.stateNode);
            else e.stateNode = $m(i, n, e.memoizedProps);
          else
            r !== n
              ? (r === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : r.count--,
                n === null
                  ? Im(i, e.type, e.stateNode)
                  : $m(i, n, e.memoizedProps))
              : n === null &&
                e.stateNode !== null &&
                Uc(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        Nt(t, e),
          Rt(e),
          n & 512 && (Qe || l === null || Ft(l, l.return)),
          l !== null && n & 4 && Uc(e, e.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (Nt(t, e),
          Rt(e),
          n & 512 && (Qe || l === null || Ft(l, l.return)),
          e.flags & 32)
        ) {
          i = e.stateNode;
          try {
            jn(i, "");
          } catch (j) {
            He(e, e.return, j);
          }
        }
        n & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), Uc(e, i, l !== null ? l.memoizedProps : i)),
          n & 1024 && (Lc = !0);
        break;
      case 6:
        if ((Nt(t, e), Rt(e), n & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          (n = e.memoizedProps), (l = e.stateNode);
          try {
            l.nodeValue = n;
          } catch (j) {
            He(e, e.return, j);
          }
        }
        break;
      case 3:
        if (
          ((jr = null),
          (i = Vt),
          (Vt = Dr(t.containerInfo)),
          Nt(t, e),
          (Vt = i),
          Rt(e),
          n & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            xi(t.containerInfo);
          } catch (j) {
            He(e, e.return, j);
          }
        Lc && ((Lc = !1), im(e));
        break;
      case 4:
        (n = Vt),
          (Vt = Dr(e.stateNode.containerInfo)),
          Nt(t, e),
          Rt(e),
          (Vt = n);
        break;
      case 12:
        Nt(t, e), Rt(e);
        break;
      case 13:
        Nt(t, e),
          Rt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Qc = ct()),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), qc(e, n)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var x = l !== null && l.memoizedState !== null,
          M = hl,
          G = Qe;
        if (
          ((hl = M || i),
          (Qe = G || x),
          Nt(t, e),
          (Qe = G),
          (hl = M),
          Rt(e),
          n & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (l === null || x || hl || Qe || bn(e)),
              l = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                x = l = t;
                try {
                  if (((r = x.stateNode), i))
                    (f = r.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    m = x.stateNode;
                    var X = x.memoizedProps.style,
                      D =
                        X != null && X.hasOwnProperty("display")
                          ? X.display
                          : null;
                    m.style.display =
                      D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                  }
                } catch (j) {
                  He(x, x.return, j);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                x = t;
                try {
                  x.stateNode.nodeValue = i ? "" : x.memoizedProps;
                } catch (j) {
                  He(x, x.return, j);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), (t = t.return);
            }
            l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        n & 4 &&
          ((n = e.updateQueue),
          n !== null &&
            ((l = n.retryQueue),
            l !== null && ((n.retryQueue = null), qc(e, l))));
        break;
      case 19:
        Nt(t, e),
          Rt(e),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), qc(e, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Nt(t, e), Rt(e);
    }
  }
  function Rt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, n = e.return; n !== null; ) {
          if ($d(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(c(160));
        switch (l.tag) {
          case 27:
            var i = l.stateNode,
              r = Hc(e);
            br(e, r, i);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (jn(f, ""), (l.flags &= -33));
            var m = Hc(e);
            br(e, m, f);
            break;
          case 3:
          case 4:
            var x = l.stateNode.containerInfo,
              M = Hc(e);
            Bc(e, M, x);
            break;
          default:
            throw Error(c(161));
        }
      } catch (G) {
        He(e, e.return, G);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function im(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        im(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function zl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) em(e, t.alternate, t), (t = t.sibling);
  }
  function bn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Dl(4, t, t.return), bn(t);
          break;
        case 1:
          Ft(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Wd(t, t.return, l),
            bn(t);
          break;
        case 27:
          di(t.stateNode);
        case 26:
        case 5:
          Ft(t, t.return), bn(t);
          break;
        case 22:
          t.memoizedState === null && bn(t);
          break;
        case 30:
          bn(t);
          break;
        default:
          bn(t);
      }
      e = e.sibling;
    }
  }
  function jl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate,
        i = e,
        r = t,
        f = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          jl(i, r, l), li(4, r);
          break;
        case 1:
          if (
            (jl(i, r, l),
            (n = r),
            (i = n.stateNode),
            typeof i.componentDidMount == "function")
          )
            try {
              i.componentDidMount();
            } catch (M) {
              He(n, n.return, M);
            }
          if (((n = r), (i = n.updateQueue), i !== null)) {
            var m = n.stateNode;
            try {
              var x = i.shared.hiddenCallbacks;
              if (x !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < x.length; i++)
                  jf(x[i], m);
            } catch (M) {
              He(n, n.return, M);
            }
          }
          l && f & 64 && Jd(r), ni(r, r.return);
          break;
        case 27:
          Pd(r);
        case 26:
        case 5:
          jl(i, r, l), l && n === null && f & 4 && Fd(r), ni(r, r.return);
          break;
        case 12:
          jl(i, r, l);
          break;
        case 13:
          jl(i, r, l), l && f & 4 && nm(i, r);
          break;
        case 22:
          r.memoizedState === null && jl(i, r, l), ni(r, r.return);
          break;
        case 30:
          break;
        default:
          jl(i, r, l);
      }
      t = t.sibling;
    }
  }
  function Gc(e, t) {
    var l = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && ka(l));
  }
  function Yc(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && ka(e));
  }
  function $t(e, t, l, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) rm(e, t, l, n), (t = t.sibling);
  }
  function rm(e, t, l, n) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        $t(e, t, l, n), i & 2048 && li(9, t);
        break;
      case 1:
        $t(e, t, l, n);
        break;
      case 3:
        $t(e, t, l, n),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && ka(e)));
        break;
      case 12:
        if (i & 2048) {
          $t(e, t, l, n), (e = t.stateNode);
          try {
            var r = t.memoizedProps,
              f = r.id,
              m = r.onPostCommit;
            typeof m == "function" &&
              m(
                f,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (x) {
            He(t, t.return, x);
          }
        } else $t(e, t, l, n);
        break;
      case 13:
        $t(e, t, l, n);
        break;
      case 23:
        break;
      case 22:
        (r = t.stateNode),
          (f = t.alternate),
          t.memoizedState !== null
            ? r._visibility & 2
              ? $t(e, t, l, n)
              : ai(e, t)
            : r._visibility & 2
            ? $t(e, t, l, n)
            : ((r._visibility |= 2),
              In(e, t, l, n, (t.subtreeFlags & 10256) !== 0)),
          i & 2048 && Gc(f, t);
        break;
      case 24:
        $t(e, t, l, n), i & 2048 && Yc(t.alternate, t);
        break;
      default:
        $t(e, t, l, n);
    }
  }
  function In(e, t, l, n, i) {
    for (i = i && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var r = e,
        f = t,
        m = l,
        x = n,
        M = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          In(r, f, m, x, i), li(8, f);
          break;
        case 23:
          break;
        case 22:
          var G = f.stateNode;
          f.memoizedState !== null
            ? G._visibility & 2
              ? In(r, f, m, x, i)
              : ai(r, f)
            : ((G._visibility |= 2), In(r, f, m, x, i)),
            i && M & 2048 && Gc(f.alternate, f);
          break;
        case 24:
          In(r, f, m, x, i), i && M & 2048 && Yc(f.alternate, f);
          break;
        default:
          In(r, f, m, x, i);
      }
      t = t.sibling;
    }
  }
  function ai(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          n = t,
          i = n.flags;
        switch (n.tag) {
          case 22:
            ai(l, n), i & 2048 && Gc(n.alternate, n);
            break;
          case 24:
            ai(l, n), i & 2048 && Yc(n.alternate, n);
            break;
          default:
            ai(l, n);
        }
        t = t.sibling;
      }
  }
  var ii = 8192;
  function ea(e) {
    if (e.subtreeFlags & ii)
      for (e = e.child; e !== null; ) um(e), (e = e.sibling);
  }
  function um(e) {
    switch (e.tag) {
      case 26:
        ea(e),
          e.flags & ii &&
            e.memoizedState !== null &&
            Hy(Vt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        ea(e);
        break;
      case 3:
      case 4:
        var t = Vt;
        (Vt = Dr(e.stateNode.containerInfo)), ea(e), (Vt = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = ii), (ii = 16777216), ea(e), (ii = t))
            : ea(e));
        break;
      default:
        ea(e);
    }
  }
  function cm(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function ri(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          (et = n), sm(n, e);
        }
      cm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) om(e), (e = e.sibling);
  }
  function om(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ri(e), e.flags & 2048 && Dl(9, e, e.return);
        break;
      case 3:
        ri(e);
        break;
      case 12:
        ri(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), xr(e))
          : ri(e);
        break;
      default:
        ri(e);
    }
  }
  function xr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          (et = n), sm(n, e);
        }
      cm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Dl(8, t, t.return), xr(t);
          break;
        case 22:
          (l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), xr(t));
          break;
        default:
          xr(t);
      }
      e = e.sibling;
    }
  }
  function sm(e, t) {
    for (; et !== null; ) {
      var l = et;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Dl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          ka(l.memoizedState.cache);
      }
      if (((n = l.child), n !== null)) (n.return = l), (et = n);
      else
        e: for (l = e; et !== null; ) {
          n = et;
          var i = n.sibling,
            r = n.return;
          if ((tm(n), n === l)) {
            et = null;
            break e;
          }
          if (i !== null) {
            (i.return = r), (et = i);
            break e;
          }
          et = r;
        }
    }
  }
  var Pp = {
      getCacheForType: function (e) {
        var t = st(We),
          l = t.data.get(e);
        return l === void 0 && ((l = e()), t.data.set(e, l)), l;
      },
    },
    Ip = typeof WeakMap == "function" ? WeakMap : Map,
    _e = 0,
    Le = null,
    we = null,
    Re = 0,
    De = 0,
    Ot = null,
    Ul = !1,
    ta = !1,
    kc = !1,
    gl = 0,
    ke = 0,
    Hl = 0,
    xn = 0,
    Vc = 0,
    Gt = 0,
    la = 0,
    ui = null,
    bt = null,
    Xc = !1,
    Qc = 0,
    Sr = 1 / 0,
    Er = null,
    Bl = null,
    it = 0,
    Ll = null,
    na = null,
    aa = 0,
    Zc = 0,
    Kc = null,
    fm = null,
    ci = 0,
    Jc = null;
  function Ct() {
    if ((_e & 2) !== 0 && Re !== 0) return Re & -Re;
    if (C.T !== null) {
      var e = Qn;
      return e !== 0 ? e : to();
    }
    return Ns();
  }
  function dm() {
    Gt === 0 && (Gt = (Re & 536870912) === 0 || Ce ? Es() : 536870912);
    var e = qt.current;
    return e !== null && (e.flags |= 32), Gt;
  }
  function Mt(e, t, l) {
    ((e === Le && (De === 2 || De === 9)) || e.cancelPendingCommit !== null) &&
      (ia(e, 0), ql(e, Re, Gt, !1)),
      Na(e, l),
      ((_e & 2) === 0 || e !== Le) &&
        (e === Le &&
          ((_e & 2) === 0 && (xn |= l), ke === 4 && ql(e, Re, Gt, !1)),
        Pt(e));
  }
  function mm(e, t, l) {
    if ((_e & 6) !== 0) throw Error(c(327));
    var n = (!l && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Ta(e, t),
      i = n ? ly(e, t) : $c(e, t, !0),
      r = n;
    do {
      if (i === 0) {
        ta && !n && ql(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), r && !ey(l))) {
          (i = $c(e, t, !1)), (r = !1);
          continue;
        }
        if (i === 2) {
          if (((r = t), e.errorRecoveryDisabledLanes & r)) var f = 0;
          else
            (f = e.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            t = f;
            e: {
              var m = e;
              i = ui;
              var x = m.current.memoizedState.isDehydrated;
              if ((x && (ia(m, f).flags |= 256), (f = $c(m, f, !1)), f !== 2)) {
                if (kc && !x) {
                  (m.errorRecoveryDisabledLanes |= r), (xn |= r), (i = 4);
                  break e;
                }
                (r = bt),
                  (bt = i),
                  r !== null && (bt === null ? (bt = r) : bt.push.apply(bt, r));
              }
              i = f;
            }
            if (((r = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          ia(e, 0), ql(e, t, 0, !0);
          break;
        }
        e: {
          switch (((n = e), (r = i), r)) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ql(n, t, Gt, !Ul);
              break e;
            case 2:
              bt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && ((i = Qc + 300 - ct()), 10 < i)) {
            if ((ql(n, t, Gt, !Ul), zi(n, 0, !0) !== 0)) break e;
            n.timeoutHandle = km(
              hm.bind(null, n, l, bt, Er, Xc, t, Gt, xn, la, Ul, r, 2, -0, 0),
              i
            );
            break e;
          }
          hm(n, l, bt, Er, Xc, t, Gt, xn, la, Ul, r, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Pt(e);
  }
  function hm(e, t, l, n, i, r, f, m, x, M, G, X, D, j) {
    if (
      ((e.timeoutHandle = -1),
      (X = t.subtreeFlags),
      (X & 8192 || (X & 16785408) === 16785408) &&
        ((vi = { stylesheets: null, count: 0, unsuspend: Uy }),
        um(t),
        (X = By()),
        X !== null))
    ) {
      (e.cancelPendingCommit = X(
        Sm.bind(null, e, t, r, l, n, i, f, m, x, G, 1, D, j)
      )),
        ql(e, r, f, !M);
      return;
    }
    Sm(e, t, r, l, n, i, f, m, x);
  }
  function ey(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var n = 0; n < l.length; n++) {
          var i = l[n],
            r = i.getSnapshot;
          i = i.value;
          try {
            if (!wt(r(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        (l.return = t), (t = l);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ql(e, t, l, n) {
    (t &= ~Vc),
      (t &= ~xn),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      n && (e.warmLanes |= t),
      (n = e.expirationTimes);
    for (var i = t; 0 < i; ) {
      var r = 31 - At(i),
        f = 1 << r;
      (n[r] = -1), (i &= ~f);
    }
    l !== 0 && ws(e, l, t);
  }
  function Ar() {
    return (_e & 6) === 0 ? (oi(0), !1) : !0;
  }
  function Wc() {
    if (we !== null) {
      if (De === 0) var e = we.return;
      else (e = we), (cl = hn = null), dc(e), ($n = null), (Ia = 0), (e = we);
      for (; e !== null; ) Kd(e.alternate, e), (e = e.return);
      we = null;
    }
  }
  function ia(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && ((e.timeoutHandle = -1), yy(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      Wc(),
      (Le = e),
      (we = l = il(e.current, null)),
      (Re = t),
      (De = 0),
      (Ot = null),
      (Ul = !1),
      (ta = Ta(e, t)),
      (kc = !1),
      (la = Gt = Vc = xn = Hl = ke = 0),
      (bt = ui = null),
      (Xc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var i = 31 - At(n),
          r = 1 << i;
        (t |= e[i]), (n &= ~r);
      }
    return (gl = t), Qi(), l;
  }
  function vm(e, t) {
    (pe = null),
      (C.H = sr),
      t === Xa || t === er
        ? ((t = Df()), (De = 3))
        : t === Cf
        ? ((t = Df()), (De = 4))
        : (De =
            t === zd
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (Ot = t),
      we === null && ((ke = 1), vr(e, Ut(t, e.current)));
  }
  function gm() {
    var e = C.H;
    return (C.H = sr), e === null ? sr : e;
  }
  function pm() {
    var e = C.A;
    return (C.A = Pp), e;
  }
  function Fc() {
    (ke = 4),
      Ul || ((Re & 4194048) !== Re && qt.current !== null) || (ta = !0),
      ((Hl & 134217727) === 0 && (xn & 134217727) === 0) ||
        Le === null ||
        ql(Le, Re, Gt, !1);
  }
  function $c(e, t, l) {
    var n = _e;
    _e |= 2;
    var i = gm(),
      r = pm();
    (Le !== e || Re !== t) && ((Er = null), ia(e, t)), (t = !1);
    var f = ke;
    e: do
      try {
        if (De !== 0 && we !== null) {
          var m = we,
            x = Ot;
          switch (De) {
            case 8:
              Wc(), (f = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              qt.current === null && (t = !0);
              var M = De;
              if (((De = 0), (Ot = null), ra(e, m, x, M), l && ta)) {
                f = 0;
                break e;
              }
              break;
            default:
              (M = De), (De = 0), (Ot = null), ra(e, m, x, M);
          }
        }
        ty(), (f = ke);
        break;
      } catch (G) {
        vm(e, G);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (cl = hn = null),
      (_e = n),
      (C.H = i),
      (C.A = r),
      we === null && ((Le = null), (Re = 0), Qi()),
      f
    );
  }
  function ty() {
    for (; we !== null; ) ym(we);
  }
  function ly(e, t) {
    var l = _e;
    _e |= 2;
    var n = gm(),
      i = pm();
    Le !== e || Re !== t
      ? ((Er = null), (Sr = ct() + 500), ia(e, t))
      : (ta = Ta(e, t));
    e: do
      try {
        if (De !== 0 && we !== null) {
          t = we;
          var r = Ot;
          t: switch (De) {
            case 1:
              (De = 0), (Ot = null), ra(e, t, r, 1);
              break;
            case 2:
            case 9:
              if (Mf(r)) {
                (De = 0), (Ot = null), bm(t);
                break;
              }
              (t = function () {
                (De !== 2 && De !== 9) || Le !== e || (De = 7), Pt(e);
              }),
                r.then(t, t);
              break e;
            case 3:
              De = 7;
              break e;
            case 4:
              De = 5;
              break e;
            case 7:
              Mf(r)
                ? ((De = 0), (Ot = null), bm(t))
                : ((De = 0), (Ot = null), ra(e, t, r, 7));
              break;
            case 5:
              var f = null;
              switch (we.tag) {
                case 26:
                  f = we.memoizedState;
                case 5:
                case 27:
                  var m = we;
                  if (!f || eh(f)) {
                    (De = 0), (Ot = null);
                    var x = m.sibling;
                    if (x !== null) we = x;
                    else {
                      var M = m.return;
                      M !== null ? ((we = M), wr(M)) : (we = null);
                    }
                    break t;
                  }
              }
              (De = 0), (Ot = null), ra(e, t, r, 5);
              break;
            case 6:
              (De = 0), (Ot = null), ra(e, t, r, 6);
              break;
            case 8:
              Wc(), (ke = 6);
              break e;
            default:
              throw Error(c(462));
          }
        }
        ny();
        break;
      } catch (G) {
        vm(e, G);
      }
    while (!0);
    return (
      (cl = hn = null),
      (C.H = n),
      (C.A = i),
      (_e = l),
      we !== null ? 0 : ((Le = null), (Re = 0), Qi(), ke)
    );
  }
  function ny() {
    for (; we !== null && !en(); ) ym(we);
  }
  function ym(e) {
    var t = Qd(e.alternate, e, gl);
    (e.memoizedProps = e.pendingProps), t === null ? wr(e) : (we = t);
  }
  function bm(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = qd(l, t, t.pendingProps, t.type, void 0, Re);
        break;
      case 11:
        t = qd(l, t, t.pendingProps, t.type.render, t.ref, Re);
        break;
      case 5:
        dc(t);
      default:
        Kd(l, t), (t = we = xf(t, gl)), (t = Qd(l, t, gl));
    }
    (e.memoizedProps = e.pendingProps), t === null ? wr(e) : (we = t);
  }
  function ra(e, t, l, n) {
    (cl = hn = null), dc(t), ($n = null), (Ia = 0);
    var i = t.return;
    try {
      if (Zp(e, i, t, l, Re)) {
        (ke = 1), vr(e, Ut(l, e.current)), (we = null);
        return;
      }
    } catch (r) {
      if (i !== null) throw ((we = i), r);
      (ke = 1), vr(e, Ut(l, e.current)), (we = null);
      return;
    }
    t.flags & 32768
      ? (Ce || n === 1
          ? (e = !0)
          : ta || (Re & 536870912) !== 0
          ? (e = !1)
          : ((Ul = e = !0),
            (n === 2 || n === 9 || n === 3 || n === 6) &&
              ((n = qt.current),
              n !== null && n.tag === 13 && (n.flags |= 16384))),
        xm(t, e))
      : wr(t);
  }
  function wr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        xm(t, Ul);
        return;
      }
      e = t.return;
      var l = Jp(t.alternate, t, gl);
      if (l !== null) {
        we = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        we = t;
        return;
      }
      we = t = e;
    } while (t !== null);
    ke === 0 && (ke = 5);
  }
  function xm(e, t) {
    do {
      var l = Wp(e.alternate, e);
      if (l !== null) {
        (l.flags &= 32767), (we = l);
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        we = e;
        return;
      }
      we = e = l;
    } while (e !== null);
    (ke = 6), (we = null);
  }
  function Sm(e, t, l, n, i, r, f, m, x) {
    e.cancelPendingCommit = null;
    do Tr();
    while (it !== 0);
    if ((_e & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (
        ((r = t.lanes | t.childLanes),
        (r |= Yu),
        Ug(e, l, r, f, m, x),
        e === Le && ((we = Le = null), (Re = 0)),
        (na = t),
        (Ll = e),
        (aa = l),
        (Zc = r),
        (Kc = i),
        (fm = n),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            uy(Mi, function () {
              return Nm(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (n = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || n)
      ) {
        (n = C.T), (C.T = null), (i = Q.p), (Q.p = 2), (f = _e), (_e |= 4);
        try {
          Fp(e, t, l);
        } finally {
          (_e = f), (Q.p = i), (C.T = n);
        }
      }
      (it = 1), Em(), Am(), wm();
    }
  }
  function Em() {
    if (it === 1) {
      it = 0;
      var e = Ll,
        t = na,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        (l = C.T), (C.T = null);
        var n = Q.p;
        Q.p = 2;
        var i = _e;
        _e |= 4;
        try {
          am(t, e);
          var r = oo,
            f = sf(e.containerInfo),
            m = r.focusedElem,
            x = r.selectionRange;
          if (
            f !== m &&
            m &&
            m.ownerDocument &&
            of(m.ownerDocument.documentElement, m)
          ) {
            if (x !== null && Hu(m)) {
              var M = x.start,
                G = x.end;
              if ((G === void 0 && (G = M), "selectionStart" in m))
                (m.selectionStart = M),
                  (m.selectionEnd = Math.min(G, m.value.length));
              else {
                var X = m.ownerDocument || document,
                  D = (X && X.defaultView) || window;
                if (D.getSelection) {
                  var j = D.getSelection(),
                    fe = m.textContent.length,
                    ce = Math.min(x.start, fe),
                    Ue = x.end === void 0 ? ce : Math.min(x.end, fe);
                  !j.extend && ce > Ue && ((f = Ue), (Ue = ce), (ce = f));
                  var N = cf(m, ce),
                    w = cf(m, Ue);
                  if (
                    N &&
                    w &&
                    (j.rangeCount !== 1 ||
                      j.anchorNode !== N.node ||
                      j.anchorOffset !== N.offset ||
                      j.focusNode !== w.node ||
                      j.focusOffset !== w.offset)
                  ) {
                    var O = X.createRange();
                    O.setStart(N.node, N.offset),
                      j.removeAllRanges(),
                      ce > Ue
                        ? (j.addRange(O), j.extend(w.node, w.offset))
                        : (O.setEnd(w.node, w.offset), j.addRange(O));
                  }
                }
              }
            }
            for (X = [], j = m; (j = j.parentNode); )
              j.nodeType === 1 &&
                X.push({ element: j, left: j.scrollLeft, top: j.scrollTop });
            for (
              typeof m.focus == "function" && m.focus(), m = 0;
              m < X.length;
              m++
            ) {
              var k = X[m];
              (k.element.scrollLeft = k.left), (k.element.scrollTop = k.top);
            }
          }
          (Br = !!co), (oo = co = null);
        } finally {
          (_e = i), (Q.p = n), (C.T = l);
        }
      }
      (e.current = t), (it = 2);
    }
  }
  function Am() {
    if (it === 2) {
      it = 0;
      var e = Ll,
        t = na,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        (l = C.T), (C.T = null);
        var n = Q.p;
        Q.p = 2;
        var i = _e;
        _e |= 4;
        try {
          em(e, t.alternate, t);
        } finally {
          (_e = i), (Q.p = n), (C.T = l);
        }
      }
      it = 3;
    }
  }
  function wm() {
    if (it === 4 || it === 3) {
      (it = 0), tn();
      var e = Ll,
        t = na,
        l = aa,
        n = fm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (it = 5)
        : ((it = 0), (na = Ll = null), Tm(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (Bl = null),
        vu(l),
        (t = t.stateNode),
        Et && typeof Et.onCommitFiberRoot == "function")
      )
        try {
          Et.onCommitFiberRoot(wa, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (n !== null) {
        (t = C.T), (i = Q.p), (Q.p = 2), (C.T = null);
        try {
          for (var r = e.onRecoverableError, f = 0; f < n.length; f++) {
            var m = n[f];
            r(m.value, { componentStack: m.stack });
          }
        } finally {
          (C.T = t), (Q.p = i);
        }
      }
      (aa & 3) !== 0 && Tr(),
        Pt(e),
        (i = e.pendingLanes),
        (l & 4194090) !== 0 && (i & 42) !== 0
          ? e === Jc
            ? ci++
            : ((ci = 0), (Jc = e))
          : (ci = 0),
        oi(0);
    }
  }
  function Tm(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), ka(t)));
  }
  function Tr(e) {
    return Em(), Am(), wm(), Nm();
  }
  function Nm() {
    if (it !== 5) return !1;
    var e = Ll,
      t = Zc;
    Zc = 0;
    var l = vu(aa),
      n = C.T,
      i = Q.p;
    try {
      (Q.p = 32 > l ? 32 : l), (C.T = null), (l = Kc), (Kc = null);
      var r = Ll,
        f = aa;
      if (((it = 0), (na = Ll = null), (aa = 0), (_e & 6) !== 0))
        throw Error(c(331));
      var m = _e;
      if (
        ((_e |= 4),
        om(r.current),
        rm(r, r.current, f, l),
        (_e = m),
        oi(0, !1),
        Et && typeof Et.onPostCommitFiberRoot == "function")
      )
        try {
          Et.onPostCommitFiberRoot(wa, r);
        } catch {}
      return !0;
    } finally {
      (Q.p = i), (C.T = n), Tm(e, t);
    }
  }
  function Rm(e, t, l) {
    (t = Ut(l, t)),
      (t = Nc(e.stateNode, t, 2)),
      (e = Ol(e, t, 2)),
      e !== null && (Na(e, 2), Pt(e));
  }
  function He(e, t, l) {
    if (e.tag === 3) Rm(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Rm(t, e, l);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof n.componentDidCatch == "function" &&
              (Bl === null || !Bl.has(n)))
          ) {
            (e = Ut(l, e)),
              (l = _d(2)),
              (n = Ol(t, l, 2)),
              n !== null && (Dd(l, n, t, e), Na(n, 2), Pt(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function Pc(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Ip();
      var i = new Set();
      n.set(t, i);
    } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i));
    i.has(l) ||
      ((kc = !0), i.add(l), (e = ay.bind(null, e, t, l)), t.then(e, e));
  }
  function ay(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      Le === e &&
        (Re & l) === l &&
        (ke === 4 || (ke === 3 && (Re & 62914560) === Re && 300 > ct() - Qc)
          ? (_e & 2) === 0 && ia(e, 0)
          : (Vc |= l),
        la === Re && (la = 0)),
      Pt(e);
  }
  function Om(e, t) {
    t === 0 && (t = As()), (e = Yn(e, t)), e !== null && (Na(e, t), Pt(e));
  }
  function iy(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), Om(e, l);
  }
  function ry(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var n = e.stateNode,
          i = e.memoizedState;
        i !== null && (l = i.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    n !== null && n.delete(t), Om(e, l);
  }
  function uy(e, t) {
    return nt(e, t);
  }
  var Nr = null,
    ua = null,
    Ic = !1,
    Rr = !1,
    eo = !1,
    Sn = 0;
  function Pt(e) {
    e !== ua &&
      e.next === null &&
      (ua === null ? (Nr = ua = e) : (ua = ua.next = e)),
      (Rr = !0),
      Ic || ((Ic = !0), oy());
  }
  function oi(e, t) {
    if (!eo && Rr) {
      eo = !0;
      do
        for (var l = !1, n = Nr; n !== null; ) {
          if (e !== 0) {
            var i = n.pendingLanes;
            if (i === 0) var r = 0;
            else {
              var f = n.suspendedLanes,
                m = n.pingedLanes;
              (r = (1 << (31 - At(42 | e) + 1)) - 1),
                (r &= i & ~(f & ~m)),
                (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0);
            }
            r !== 0 && ((l = !0), Dm(n, r));
          } else
            (r = Re),
              (r = zi(
                n,
                n === Le ? r : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1
              )),
              (r & 3) === 0 || Ta(n, r) || ((l = !0), Dm(n, r));
          n = n.next;
        }
      while (l);
      eo = !1;
    }
  }
  function cy() {
    Cm();
  }
  function Cm() {
    Rr = Ic = !1;
    var e = 0;
    Sn !== 0 && (py() && (e = Sn), (Sn = 0));
    for (var t = ct(), l = null, n = Nr; n !== null; ) {
      var i = n.next,
        r = Mm(n, t);
      r === 0
        ? ((n.next = null),
          l === null ? (Nr = i) : (l.next = i),
          i === null && (ua = l))
        : ((l = n), (e !== 0 || (r & 3) !== 0) && (Rr = !0)),
        (n = i);
    }
    oi(e);
  }
  function Mm(e, t) {
    for (
      var l = e.suspendedLanes,
        n = e.pingedLanes,
        i = e.expirationTimes,
        r = e.pendingLanes & -62914561;
      0 < r;

    ) {
      var f = 31 - At(r),
        m = 1 << f,
        x = i[f];
      x === -1
        ? ((m & l) === 0 || (m & n) !== 0) && (i[f] = jg(m, t))
        : x <= t && (e.expiredLanes |= m),
        (r &= ~m);
    }
    if (
      ((t = Le),
      (l = Re),
      (l = zi(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (n = e.callbackNode),
      l === 0 ||
        (e === t && (De === 2 || De === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        n !== null && n !== null && ht(n),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Ta(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((n !== null && ht(n), vu(l))) {
        case 2:
        case 8:
          l = xs;
          break;
        case 32:
          l = Mi;
          break;
        case 268435456:
          l = Ss;
          break;
        default:
          l = Mi;
      }
      return (
        (n = _m.bind(null, e)),
        (l = nt(l, n)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      n !== null && n !== null && ht(n),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function _m(e, t) {
    if (it !== 0 && it !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var l = e.callbackNode;
    if (Tr() && e.callbackNode !== l) return null;
    var n = Re;
    return (
      (n = zi(
        e,
        e === Le ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      n === 0
        ? null
        : (mm(e, n, t),
          Mm(e, ct()),
          e.callbackNode != null && e.callbackNode === l
            ? _m.bind(null, e)
            : null)
    );
  }
  function Dm(e, t) {
    if (Tr()) return null;
    mm(e, t, !0);
  }
  function oy() {
    by(function () {
      (_e & 6) !== 0 ? nt(ln, cy) : Cm();
    });
  }
  function to() {
    return Sn === 0 && (Sn = Es()), Sn;
  }
  function zm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Li("" + e);
  }
  function jm(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function sy(e, t, l, n, i) {
    if (t === "submit" && l && l.stateNode === i) {
      var r = zm((i[vt] || null).action),
        f = n.submitter;
      f &&
        ((t = (t = f[vt] || null)
          ? zm(t.formAction)
          : f.getAttribute("formAction")),
        t !== null && ((r = t), (f = null)));
      var m = new ki("action", "action", null, n, i);
      e.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (Sn !== 0) {
                  var x = f ? jm(i, f) : new FormData(i);
                  Sc(
                    l,
                    { pending: !0, data: x, method: i.method, action: r },
                    null,
                    x
                  );
                }
              } else
                typeof r == "function" &&
                  (m.preventDefault(),
                  (x = f ? jm(i, f) : new FormData(i)),
                  Sc(
                    l,
                    { pending: !0, data: x, method: i.method, action: r },
                    r,
                    x
                  ));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var lo = 0; lo < Gu.length; lo++) {
    var no = Gu[lo],
      fy = no.toLowerCase(),
      dy = no[0].toUpperCase() + no.slice(1);
    kt(fy, "on" + dy);
  }
  kt(mf, "onAnimationEnd"),
    kt(hf, "onAnimationIteration"),
    kt(vf, "onAnimationStart"),
    kt("dblclick", "onDoubleClick"),
    kt("focusin", "onFocus"),
    kt("focusout", "onBlur"),
    kt(Cp, "onTransitionRun"),
    kt(Mp, "onTransitionStart"),
    kt(_p, "onTransitionCancel"),
    kt(gf, "onTransitionEnd"),
    _n("onMouseEnter", ["mouseout", "mouseover"]),
    _n("onMouseLeave", ["mouseout", "mouseover"]),
    _n("onPointerEnter", ["pointerout", "pointerover"]),
    _n("onPointerLeave", ["pointerout", "pointerover"]),
    an(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    an(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    an("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    an(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    an(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    an(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var si =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    my = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(si)
    );
  function Um(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l],
        i = n.event;
      n = n.listeners;
      e: {
        var r = void 0;
        if (t)
          for (var f = n.length - 1; 0 <= f; f--) {
            var m = n[f],
              x = m.instance,
              M = m.currentTarget;
            if (((m = m.listener), x !== r && i.isPropagationStopped()))
              break e;
            (r = m), (i.currentTarget = M);
            try {
              r(i);
            } catch (G) {
              hr(G);
            }
            (i.currentTarget = null), (r = x);
          }
        else
          for (f = 0; f < n.length; f++) {
            if (
              ((m = n[f]),
              (x = m.instance),
              (M = m.currentTarget),
              (m = m.listener),
              x !== r && i.isPropagationStopped())
            )
              break e;
            (r = m), (i.currentTarget = M);
            try {
              r(i);
            } catch (G) {
              hr(G);
            }
            (i.currentTarget = null), (r = x);
          }
      }
    }
  }
  function Te(e, t) {
    var l = t[gu];
    l === void 0 && (l = t[gu] = new Set());
    var n = e + "__bubble";
    l.has(n) || (Hm(t, e, 2, !1), l.add(n));
  }
  function ao(e, t, l) {
    var n = 0;
    t && (n |= 4), Hm(l, e, n, t);
  }
  var Or = "_reactListening" + Math.random().toString(36).slice(2);
  function io(e) {
    if (!e[Or]) {
      (e[Or] = !0),
        Os.forEach(function (l) {
          l !== "selectionchange" && (my.has(l) || ao(l, !1, e), ao(l, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Or] || ((t[Or] = !0), ao("selectionchange", !1, t));
    }
  }
  function Hm(e, t, l, n) {
    switch (rh(t)) {
      case 2:
        var i = Gy;
        break;
      case 8:
        i = Yy;
        break;
      default:
        i = xo;
    }
    (l = i.bind(null, t, l, e)),
      (i = void 0),
      !Ru ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      n
        ? i !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: i })
          : e.addEventListener(t, l, !0)
        : i !== void 0
        ? e.addEventListener(t, l, { passive: i })
        : e.addEventListener(t, l, !1);
  }
  function ro(e, t, l, n, i) {
    var r = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (;;) {
        if (n === null) return;
        var f = n.tag;
        if (f === 3 || f === 4) {
          var m = n.stateNode.containerInfo;
          if (m === i) break;
          if (f === 4)
            for (f = n.return; f !== null; ) {
              var x = f.tag;
              if ((x === 3 || x === 4) && f.stateNode.containerInfo === i)
                return;
              f = f.return;
            }
          for (; m !== null; ) {
            if (((f = On(m)), f === null)) return;
            if (((x = f.tag), x === 5 || x === 6 || x === 26 || x === 27)) {
              n = r = f;
              continue e;
            }
            m = m.parentNode;
          }
        }
        n = n.return;
      }
    ks(function () {
      var M = r,
        G = Tu(l),
        X = [];
      e: {
        var D = pf.get(e);
        if (D !== void 0) {
          var j = ki,
            fe = e;
          switch (e) {
            case "keypress":
              if (Gi(l) === 0) break e;
            case "keydown":
            case "keyup":
              j = up;
              break;
            case "focusin":
              (fe = "focus"), (j = _u);
              break;
            case "focusout":
              (fe = "blur"), (j = _u);
              break;
            case "beforeblur":
            case "afterblur":
              j = _u;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = Qs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = Wg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = sp;
              break;
            case mf:
            case hf:
            case vf:
              j = Pg;
              break;
            case gf:
              j = dp;
              break;
            case "scroll":
            case "scrollend":
              j = Kg;
              break;
            case "wheel":
              j = hp;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = ep;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = Ks;
              break;
            case "toggle":
            case "beforetoggle":
              j = gp;
          }
          var ce = (t & 4) !== 0,
            Ue = !ce && (e === "scroll" || e === "scrollend"),
            N = ce ? (D !== null ? D + "Capture" : null) : D;
          ce = [];
          for (var w = M, O; w !== null; ) {
            var k = w;
            if (
              ((O = k.stateNode),
              (k = k.tag),
              (k !== 5 && k !== 26 && k !== 27) ||
                O === null ||
                N === null ||
                ((k = Ca(w, N)), k != null && ce.push(fi(w, k, O))),
              Ue)
            )
              break;
            w = w.return;
          }
          0 < ce.length &&
            ((D = new j(D, fe, null, l, G)),
            X.push({ event: D, listeners: ce }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((D = e === "mouseover" || e === "pointerover"),
            (j = e === "mouseout" || e === "pointerout"),
            D &&
              l !== wu &&
              (fe = l.relatedTarget || l.fromElement) &&
              (On(fe) || fe[Rn]))
          )
            break e;
          if (
            (j || D) &&
            ((D =
              G.window === G
                ? G
                : (D = G.ownerDocument)
                ? D.defaultView || D.parentWindow
                : window),
            j
              ? ((fe = l.relatedTarget || l.toElement),
                (j = M),
                (fe = fe ? On(fe) : null),
                fe !== null &&
                  ((Ue = d(fe)),
                  (ce = fe.tag),
                  fe !== Ue || (ce !== 5 && ce !== 27 && ce !== 6)) &&
                  (fe = null))
              : ((j = null), (fe = M)),
            j !== fe)
          ) {
            if (
              ((ce = Qs),
              (k = "onMouseLeave"),
              (N = "onMouseEnter"),
              (w = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ce = Ks),
                (k = "onPointerLeave"),
                (N = "onPointerEnter"),
                (w = "pointer")),
              (Ue = j == null ? D : Oa(j)),
              (O = fe == null ? D : Oa(fe)),
              (D = new ce(k, w + "leave", j, l, G)),
              (D.target = Ue),
              (D.relatedTarget = O),
              (k = null),
              On(G) === M &&
                ((ce = new ce(N, w + "enter", fe, l, G)),
                (ce.target = O),
                (ce.relatedTarget = Ue),
                (k = ce)),
              (Ue = k),
              j && fe)
            )
              t: {
                for (ce = j, N = fe, w = 0, O = ce; O; O = ca(O)) w++;
                for (O = 0, k = N; k; k = ca(k)) O++;
                for (; 0 < w - O; ) (ce = ca(ce)), w--;
                for (; 0 < O - w; ) (N = ca(N)), O--;
                for (; w--; ) {
                  if (ce === N || (N !== null && ce === N.alternate)) break t;
                  (ce = ca(ce)), (N = ca(N));
                }
                ce = null;
              }
            else ce = null;
            j !== null && Bm(X, D, j, ce, !1),
              fe !== null && Ue !== null && Bm(X, Ue, fe, ce, !0);
          }
        }
        e: {
          if (
            ((D = M ? Oa(M) : window),
            (j = D.nodeName && D.nodeName.toLowerCase()),
            j === "select" || (j === "input" && D.type === "file"))
          )
            var ee = tf;
          else if (Is(D))
            if (lf) ee = Np;
            else {
              ee = wp;
              var Se = Ap;
            }
          else
            (j = D.nodeName),
              !j ||
              j.toLowerCase() !== "input" ||
              (D.type !== "checkbox" && D.type !== "radio")
                ? M && Au(M.elementType) && (ee = tf)
                : (ee = Tp);
          if (ee && (ee = ee(e, M))) {
            ef(X, ee, l, G);
            break e;
          }
          Se && Se(e, D, M),
            e === "focusout" &&
              M &&
              D.type === "number" &&
              M.memoizedProps.value != null &&
              Eu(D, "number", D.value);
        }
        switch (((Se = M ? Oa(M) : window), e)) {
          case "focusin":
            (Is(Se) || Se.contentEditable === "true") &&
              ((Ln = Se), (Bu = M), (Ba = null));
            break;
          case "focusout":
            Ba = Bu = Ln = null;
            break;
          case "mousedown":
            Lu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Lu = !1), ff(X, l, G);
            break;
          case "selectionchange":
            if (Op) break;
          case "keydown":
          case "keyup":
            ff(X, l, G);
        }
        var ae;
        if (zu)
          e: {
            switch (e) {
              case "compositionstart":
                var se = "onCompositionStart";
                break e;
              case "compositionend":
                se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                se = "onCompositionUpdate";
                break e;
            }
            se = void 0;
          }
        else
          Bn
            ? $s(e, l) && (se = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (se = "onCompositionStart");
        se &&
          (Js &&
            l.locale !== "ko" &&
            (Bn || se !== "onCompositionStart"
              ? se === "onCompositionEnd" && Bn && (ae = Vs())
              : ((wl = G),
                (Ou = "value" in wl ? wl.value : wl.textContent),
                (Bn = !0))),
          (Se = Cr(M, se)),
          0 < Se.length &&
            ((se = new Zs(se, e, null, l, G)),
            X.push({ event: se, listeners: Se }),
            ae
              ? (se.data = ae)
              : ((ae = Ps(l)), ae !== null && (se.data = ae)))),
          (ae = yp ? bp(e, l) : xp(e, l)) &&
            ((se = Cr(M, "onBeforeInput")),
            0 < se.length &&
              ((Se = new Zs("onBeforeInput", "beforeinput", null, l, G)),
              X.push({ event: Se, listeners: se }),
              (Se.data = ae))),
          sy(X, e, M, l, G);
      }
      Um(X, t);
    });
  }
  function fi(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Cr(e, t) {
    for (var l = t + "Capture", n = []; e !== null; ) {
      var i = e,
        r = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          r === null ||
          ((i = Ca(e, l)),
          i != null && n.unshift(fi(e, i, r)),
          (i = Ca(e, t)),
          i != null && n.push(fi(e, i, r))),
        e.tag === 3)
      )
        return n;
      e = e.return;
    }
    return [];
  }
  function ca(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Bm(e, t, l, n, i) {
    for (var r = t._reactName, f = []; l !== null && l !== n; ) {
      var m = l,
        x = m.alternate,
        M = m.stateNode;
      if (((m = m.tag), x !== null && x === n)) break;
      (m !== 5 && m !== 26 && m !== 27) ||
        M === null ||
        ((x = M),
        i
          ? ((M = Ca(l, r)), M != null && f.unshift(fi(l, M, x)))
          : i || ((M = Ca(l, r)), M != null && f.push(fi(l, M, x)))),
        (l = l.return);
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var hy = /\r\n?/g,
    vy = /\u0000|\uFFFD/g;
  function Lm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        hy,
        `
`
      )
      .replace(vy, "");
  }
  function qm(e, t) {
    return (t = Lm(t)), Lm(e) === t;
  }
  function Mr() {}
  function je(e, t, l, n, i, r) {
    switch (l) {
      case "children":
        typeof n == "string"
          ? t === "body" || (t === "textarea" && n === "") || jn(e, n)
          : (typeof n == "number" || typeof n == "bigint") &&
            t !== "body" &&
            jn(e, "" + n);
        break;
      case "className":
        Ui(e, "class", n);
        break;
      case "tabIndex":
        Ui(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ui(e, l, n);
        break;
      case "style":
        Gs(e, n, r);
        break;
      case "data":
        if (t !== "object") {
          Ui(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "symbol" ||
          typeof n == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        (n = Li("" + n)), e.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" &&
            (l === "formAction"
              ? (t !== "input" && je(e, t, "name", i.name, i, null),
                je(e, t, "formEncType", i.formEncType, i, null),
                je(e, t, "formMethod", i.formMethod, i, null),
                je(e, t, "formTarget", i.formTarget, i, null))
              : (je(e, t, "encType", i.encType, i, null),
                je(e, t, "method", i.method, i, null),
                je(e, t, "target", i.target, i, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        (n = Li("" + n)), e.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (e.onclick = Mr);
        break;
      case "onScroll":
        n != null && Te("scroll", e);
        break;
      case "onScrollEnd":
        n != null && Te("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(c(61));
          if (((l = n.__html), l != null)) {
            if (i.children != null) throw Error(c(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "boolean" ||
          typeof n == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (l = Li("" + n)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(l, "" + n)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0
          ? e.setAttribute(l, "")
          : n !== !1 &&
            n != null &&
            typeof n != "function" &&
            typeof n != "symbol"
          ? e.setAttribute(l, n)
          : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        !isNaN(n) &&
        1 <= n
          ? e.setAttribute(l, n)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n)
          ? e.removeAttribute(l)
          : e.setAttribute(l, n);
        break;
      case "popover":
        Te("beforetoggle", e), Te("toggle", e), ji(e, "popover", n);
        break;
      case "xlinkActuate":
        nl(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
        break;
      case "xlinkArcrole":
        nl(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
        break;
      case "xlinkRole":
        nl(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
        break;
      case "xlinkShow":
        nl(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
        break;
      case "xlinkTitle":
        nl(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
        break;
      case "xlinkType":
        nl(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
        break;
      case "xmlBase":
        nl(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
        break;
      case "xmlLang":
        nl(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
        break;
      case "xmlSpace":
        nl(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
        break;
      case "is":
        ji(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Qg.get(l) || l), ji(e, l, n));
    }
  }
  function uo(e, t, l, n, i, r) {
    switch (l) {
      case "style":
        Gs(e, n, r);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(c(61));
          if (((l = n.__html), l != null)) {
            if (i.children != null) throw Error(c(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string"
          ? jn(e, n)
          : (typeof n == "number" || typeof n == "bigint") && jn(e, "" + n);
        break;
      case "onScroll":
        n != null && Te("scroll", e);
        break;
      case "onScrollEnd":
        n != null && Te("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = Mr);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Cs.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((i = l.endsWith("Capture")),
              (t = l.slice(2, i ? l.length - 7 : void 0)),
              (r = e[vt] || null),
              (r = r != null ? r[l] : null),
              typeof r == "function" && e.removeEventListener(t, r, i),
              typeof n == "function")
            ) {
              typeof r != "function" &&
                r !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, n, i);
              break e;
            }
            l in e
              ? (e[l] = n)
              : n === !0
              ? e.setAttribute(l, "")
              : ji(e, l, n);
          }
    }
  }
  function rt(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Te("error", e), Te("load", e);
        var n = !1,
          i = !1,
          r;
        for (r in l)
          if (l.hasOwnProperty(r)) {
            var f = l[r];
            if (f != null)
              switch (r) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  je(e, t, r, f, l, null);
              }
          }
        i && je(e, t, "srcSet", l.srcSet, l, null),
          n && je(e, t, "src", l.src, l, null);
        return;
      case "input":
        Te("invalid", e);
        var m = (r = f = i = null),
          x = null,
          M = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var G = l[n];
            if (G != null)
              switch (n) {
                case "name":
                  i = G;
                  break;
                case "type":
                  f = G;
                  break;
                case "checked":
                  x = G;
                  break;
                case "defaultChecked":
                  M = G;
                  break;
                case "value":
                  r = G;
                  break;
                case "defaultValue":
                  m = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null) throw Error(c(137, t));
                  break;
                default:
                  je(e, t, n, G, l, null);
              }
          }
        Hs(e, r, m, x, M, f, i, !1), Hi(e);
        return;
      case "select":
        Te("invalid", e), (n = f = r = null);
        for (i in l)
          if (l.hasOwnProperty(i) && ((m = l[i]), m != null))
            switch (i) {
              case "value":
                r = m;
                break;
              case "defaultValue":
                f = m;
                break;
              case "multiple":
                n = m;
              default:
                je(e, t, i, m, l, null);
            }
        (t = r),
          (l = f),
          (e.multiple = !!n),
          t != null ? zn(e, !!n, t, !1) : l != null && zn(e, !!n, l, !0);
        return;
      case "textarea":
        Te("invalid", e), (r = i = n = null);
        for (f in l)
          if (l.hasOwnProperty(f) && ((m = l[f]), m != null))
            switch (f) {
              case "value":
                n = m;
                break;
              case "defaultValue":
                i = m;
                break;
              case "children":
                r = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(c(91));
                break;
              default:
                je(e, t, f, m, l, null);
            }
        Ls(e, n, i, r), Hi(e);
        return;
      case "option":
        for (x in l)
          if (l.hasOwnProperty(x) && ((n = l[x]), n != null))
            switch (x) {
              case "selected":
                e.selected =
                  n && typeof n != "function" && typeof n != "symbol";
                break;
              default:
                je(e, t, x, n, l, null);
            }
        return;
      case "dialog":
        Te("beforetoggle", e), Te("toggle", e), Te("cancel", e), Te("close", e);
        break;
      case "iframe":
      case "object":
        Te("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < si.length; n++) Te(si[n], e);
        break;
      case "image":
        Te("error", e), Te("load", e);
        break;
      case "details":
        Te("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Te("error", e), Te("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (M in l)
          if (l.hasOwnProperty(M) && ((n = l[M]), n != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                je(e, t, M, n, l, null);
            }
        return;
      default:
        if (Au(t)) {
          for (G in l)
            l.hasOwnProperty(G) &&
              ((n = l[G]), n !== void 0 && uo(e, t, G, n, l, void 0));
          return;
        }
    }
    for (m in l)
      l.hasOwnProperty(m) && ((n = l[m]), n != null && je(e, t, m, n, l, null));
  }
  function gy(e, t, l, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null,
          r = null,
          f = null,
          m = null,
          x = null,
          M = null,
          G = null;
        for (j in l) {
          var X = l[j];
          if (l.hasOwnProperty(j) && X != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                x = X;
              default:
                n.hasOwnProperty(j) || je(e, t, j, null, n, X);
            }
        }
        for (var D in n) {
          var j = n[D];
          if (((X = l[D]), n.hasOwnProperty(D) && (j != null || X != null)))
            switch (D) {
              case "type":
                r = j;
                break;
              case "name":
                i = j;
                break;
              case "checked":
                M = j;
                break;
              case "defaultChecked":
                G = j;
                break;
              case "value":
                f = j;
                break;
              case "defaultValue":
                m = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(c(137, t));
                break;
              default:
                j !== X && je(e, t, D, j, n, X);
            }
        }
        Su(e, f, m, x, M, G, r, i);
        return;
      case "select":
        j = f = m = D = null;
        for (r in l)
          if (((x = l[r]), l.hasOwnProperty(r) && x != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                j = x;
              default:
                n.hasOwnProperty(r) || je(e, t, r, null, n, x);
            }
        for (i in n)
          if (
            ((r = n[i]),
            (x = l[i]),
            n.hasOwnProperty(i) && (r != null || x != null))
          )
            switch (i) {
              case "value":
                D = r;
                break;
              case "defaultValue":
                m = r;
                break;
              case "multiple":
                f = r;
              default:
                r !== x && je(e, t, i, r, n, x);
            }
        (t = m),
          (l = f),
          (n = j),
          D != null
            ? zn(e, !!l, D, !1)
            : !!n != !!l &&
              (t != null ? zn(e, !!l, t, !0) : zn(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        j = D = null;
        for (m in l)
          if (
            ((i = l[m]),
            l.hasOwnProperty(m) && i != null && !n.hasOwnProperty(m))
          )
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                je(e, t, m, null, n, i);
            }
        for (f in n)
          if (
            ((i = n[f]),
            (r = l[f]),
            n.hasOwnProperty(f) && (i != null || r != null))
          )
            switch (f) {
              case "value":
                D = i;
                break;
              case "defaultValue":
                j = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(c(91));
                break;
              default:
                i !== r && je(e, t, f, i, n, r);
            }
        Bs(e, D, j);
        return;
      case "option":
        for (var fe in l)
          if (
            ((D = l[fe]),
            l.hasOwnProperty(fe) && D != null && !n.hasOwnProperty(fe))
          )
            switch (fe) {
              case "selected":
                e.selected = !1;
                break;
              default:
                je(e, t, fe, null, n, D);
            }
        for (x in n)
          if (
            ((D = n[x]),
            (j = l[x]),
            n.hasOwnProperty(x) && D !== j && (D != null || j != null))
          )
            switch (x) {
              case "selected":
                e.selected =
                  D && typeof D != "function" && typeof D != "symbol";
                break;
              default:
                je(e, t, x, D, n, j);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ce in l)
          (D = l[ce]),
            l.hasOwnProperty(ce) &&
              D != null &&
              !n.hasOwnProperty(ce) &&
              je(e, t, ce, null, n, D);
        for (M in n)
          if (
            ((D = n[M]),
            (j = l[M]),
            n.hasOwnProperty(M) && D !== j && (D != null || j != null))
          )
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(c(137, t));
                break;
              default:
                je(e, t, M, D, n, j);
            }
        return;
      default:
        if (Au(t)) {
          for (var Ue in l)
            (D = l[Ue]),
              l.hasOwnProperty(Ue) &&
                D !== void 0 &&
                !n.hasOwnProperty(Ue) &&
                uo(e, t, Ue, void 0, n, D);
          for (G in n)
            (D = n[G]),
              (j = l[G]),
              !n.hasOwnProperty(G) ||
                D === j ||
                (D === void 0 && j === void 0) ||
                uo(e, t, G, D, n, j);
          return;
        }
    }
    for (var N in l)
      (D = l[N]),
        l.hasOwnProperty(N) &&
          D != null &&
          !n.hasOwnProperty(N) &&
          je(e, t, N, null, n, D);
    for (X in n)
      (D = n[X]),
        (j = l[X]),
        !n.hasOwnProperty(X) ||
          D === j ||
          (D == null && j == null) ||
          je(e, t, X, D, n, j);
  }
  var co = null,
    oo = null;
  function _r(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Gm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ym(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function so(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var fo = null;
  function py() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === fo
        ? !1
        : ((fo = e), !0)
      : ((fo = null), !1);
  }
  var km = typeof setTimeout == "function" ? setTimeout : void 0,
    yy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Vm = typeof Promise == "function" ? Promise : void 0,
    by =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Vm < "u"
        ? function (e) {
            return Vm.resolve(null).then(e).catch(xy);
          }
        : km;
  function xy(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Gl(e) {
    return e === "head";
  }
  function Xm(e, t) {
    var l = t,
      n = 0,
      i = 0;
    do {
      var r = l.nextSibling;
      if ((e.removeChild(l), r && r.nodeType === 8))
        if (((l = r.data), l === "/$")) {
          if (0 < n && 8 > n) {
            l = n;
            var f = e.ownerDocument;
            if ((l & 1 && di(f.documentElement), l & 2 && di(f.body), l & 4))
              for (l = f.head, di(l), f = l.firstChild; f; ) {
                var m = f.nextSibling,
                  x = f.nodeName;
                f[Ra] ||
                  x === "SCRIPT" ||
                  x === "STYLE" ||
                  (x === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(f),
                  (f = m);
              }
          }
          if (i === 0) {
            e.removeChild(r), xi(t);
            return;
          }
          i--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? i++
            : (n = l.charCodeAt(0) - 48);
      else n = 0;
      l = r;
    } while (l);
    xi(t);
  }
  function mo(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          mo(l), pu(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function Sy(e, t, l, n) {
    for (; e.nodeType === 1; ) {
      var i = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (n) {
        if (!e[Ra])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((r = e.getAttribute("rel")),
                r === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                r !== i.rel ||
                e.getAttribute("href") !==
                  (i.href == null || i.href === "" ? null : i.href) ||
                e.getAttribute("crossorigin") !==
                  (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute("title") !== (i.title == null ? null : i.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((r = e.getAttribute("src")),
                (r !== (i.src == null ? null : i.src) ||
                  e.getAttribute("type") !== (i.type == null ? null : i.type) ||
                  e.getAttribute("crossorigin") !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  r &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var r = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === r) return e;
      } else return e;
      if (((e = Xt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Ey(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = Xt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function ho(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function Ay(e, t) {
    var l = e.ownerDocument;
    if (e.data !== "$?" || l.readyState === "complete") t();
    else {
      var n = function () {
        t(), l.removeEventListener("DOMContentLoaded", n);
      };
      l.addEventListener("DOMContentLoaded", n), (e._reactRetry = n);
    }
  }
  function Xt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var vo = null;
  function Qm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (t === 0) return e;
          t--;
        } else l === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Zm(e, t, l) {
    switch (((t = _r(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(c(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(c(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function di(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    pu(e);
  }
  var Yt = new Map(),
    Km = new Set();
  function Dr(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var pl = Q.d;
  Q.d = { f: wy, r: Ty, D: Ny, C: Ry, L: Oy, m: Cy, X: _y, S: My, M: Dy };
  function wy() {
    var e = pl.f(),
      t = Ar();
    return e || t;
  }
  function Ty(e) {
    var t = Cn(e);
    t !== null && t.tag === 5 && t.type === "form" ? md(t) : pl.r(e);
  }
  var oa = typeof document > "u" ? null : document;
  function Jm(e, t, l) {
    var n = oa;
    if (n && typeof t == "string" && t) {
      var i = jt(t);
      (i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof l == "string" && (i += '[crossorigin="' + l + '"]'),
        Km.has(i) ||
          (Km.add(i),
          (e = { rel: e, crossOrigin: l, href: t }),
          n.querySelector(i) === null &&
            ((t = n.createElement("link")),
            rt(t, "link", e),
            Pe(t),
            n.head.appendChild(t)));
    }
  }
  function Ny(e) {
    pl.D(e), Jm("dns-prefetch", e, null);
  }
  function Ry(e, t) {
    pl.C(e, t), Jm("preconnect", e, t);
  }
  function Oy(e, t, l) {
    pl.L(e, t, l);
    var n = oa;
    if (n && e && t) {
      var i = 'link[rel="preload"][as="' + jt(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((i += '[imagesrcset="' + jt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (i += '[imagesizes="' + jt(l.imageSizes) + '"]'))
        : (i += '[href="' + jt(e) + '"]');
      var r = i;
      switch (t) {
        case "style":
          r = sa(e);
          break;
        case "script":
          r = fa(e);
      }
      Yt.has(r) ||
        ((e = b(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l
        )),
        Yt.set(r, e),
        n.querySelector(i) !== null ||
          (t === "style" && n.querySelector(mi(r))) ||
          (t === "script" && n.querySelector(hi(r))) ||
          ((t = n.createElement("link")),
          rt(t, "link", e),
          Pe(t),
          n.head.appendChild(t)));
    }
  }
  function Cy(e, t) {
    pl.m(e, t);
    var l = oa;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script",
        i =
          'link[rel="modulepreload"][as="' + jt(n) + '"][href="' + jt(e) + '"]',
        r = i;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = fa(e);
      }
      if (
        !Yt.has(r) &&
        ((e = b({ rel: "modulepreload", href: e }, t)),
        Yt.set(r, e),
        l.querySelector(i) === null)
      ) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(hi(r))) return;
        }
        (n = l.createElement("link")),
          rt(n, "link", e),
          Pe(n),
          l.head.appendChild(n);
      }
    }
  }
  function My(e, t, l) {
    pl.S(e, t, l);
    var n = oa;
    if (n && e) {
      var i = Mn(n).hoistableStyles,
        r = sa(e);
      t = t || "default";
      var f = i.get(r);
      if (!f) {
        var m = { loading: 0, preload: null };
        if ((f = n.querySelector(mi(r)))) m.loading = 5;
        else {
          (e = b({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = Yt.get(r)) && go(e, l);
          var x = (f = n.createElement("link"));
          Pe(x),
            rt(x, "link", e),
            (x._p = new Promise(function (M, G) {
              (x.onload = M), (x.onerror = G);
            })),
            x.addEventListener("load", function () {
              m.loading |= 1;
            }),
            x.addEventListener("error", function () {
              m.loading |= 2;
            }),
            (m.loading |= 4),
            zr(f, t, n);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: m }),
          i.set(r, f);
      }
    }
  }
  function _y(e, t) {
    pl.X(e, t);
    var l = oa;
    if (l && e) {
      var n = Mn(l).hoistableScripts,
        i = fa(e),
        r = n.get(i);
      r ||
        ((r = l.querySelector(hi(i))),
        r ||
          ((e = b({ src: e, async: !0 }, t)),
          (t = Yt.get(i)) && po(e, t),
          (r = l.createElement("script")),
          Pe(r),
          rt(r, "link", e),
          l.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        n.set(i, r));
    }
  }
  function Dy(e, t) {
    pl.M(e, t);
    var l = oa;
    if (l && e) {
      var n = Mn(l).hoistableScripts,
        i = fa(e),
        r = n.get(i);
      r ||
        ((r = l.querySelector(hi(i))),
        r ||
          ((e = b({ src: e, async: !0, type: "module" }, t)),
          (t = Yt.get(i)) && po(e, t),
          (r = l.createElement("script")),
          Pe(r),
          rt(r, "link", e),
          l.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        n.set(i, r));
    }
  }
  function Wm(e, t, l, n) {
    var i = (i = ie.current) ? Dr(i) : null;
    if (!i) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = sa(l.href)),
            (l = Mn(i).hoistableStyles),
            (n = l.get(t)),
            n ||
              ((n = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, n)),
            n)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = sa(l.href);
          var r = Mn(i).hoistableStyles,
            f = r.get(e);
          if (
            (f ||
              ((i = i.ownerDocument || i),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(e, f),
              (r = i.querySelector(mi(e))) &&
                !r._p &&
                ((f.instance = r), (f.state.loading = 5)),
              Yt.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Yt.set(e, l),
                r || zy(i, e, l, f.state))),
            t && n === null)
          )
            throw Error(c(528, ""));
          return f;
        }
        if (t && n !== null) throw Error(c(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = fa(l)),
              (l = Mn(i).hoistableScripts),
              (n = l.get(t)),
              n ||
                ((n = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, n)),
              n)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(c(444, e));
    }
  }
  function sa(e) {
    return 'href="' + jt(e) + '"';
  }
  function mi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Fm(e) {
    return b({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function zy(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (n.loading = 1)
      : ((t = e.createElement("link")),
        (n.preload = t),
        t.addEventListener("load", function () {
          return (n.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (n.loading |= 2);
        }),
        rt(t, "link", l),
        Pe(t),
        e.head.appendChild(t));
  }
  function fa(e) {
    return '[src="' + jt(e) + '"]';
  }
  function hi(e) {
    return "script[async]" + e;
  }
  function $m(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var n = e.querySelector('style[data-href~="' + jt(l.href) + '"]');
          if (n) return (t.instance = n), Pe(n), n;
          var i = b({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (n = (e.ownerDocument || e).createElement("style")),
            Pe(n),
            rt(n, "style", i),
            zr(n, l.precedence, e),
            (t.instance = n)
          );
        case "stylesheet":
          i = sa(l.href);
          var r = e.querySelector(mi(i));
          if (r) return (t.state.loading |= 4), (t.instance = r), Pe(r), r;
          (n = Fm(l)),
            (i = Yt.get(i)) && go(n, i),
            (r = (e.ownerDocument || e).createElement("link")),
            Pe(r);
          var f = r;
          return (
            (f._p = new Promise(function (m, x) {
              (f.onload = m), (f.onerror = x);
            })),
            rt(r, "link", n),
            (t.state.loading |= 4),
            zr(r, l.precedence, e),
            (t.instance = r)
          );
        case "script":
          return (
            (r = fa(l.src)),
            (i = e.querySelector(hi(r)))
              ? ((t.instance = i), Pe(i), i)
              : ((n = l),
                (i = Yt.get(r)) && ((n = b({}, l)), po(n, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement("script")),
                Pe(i),
                rt(i, "link", n),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((n = t.instance), (t.state.loading |= 4), zr(n, l.precedence, e));
    return t.instance;
  }
  function zr(e, t, l) {
    for (
      var n = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        i = n.length ? n[n.length - 1] : null,
        r = i,
        f = 0;
      f < n.length;
      f++
    ) {
      var m = n[f];
      if (m.dataset.precedence === t) r = m;
      else if (r !== i) break;
    }
    r
      ? r.parentNode.insertBefore(e, r.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function go(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function po(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var jr = null;
  function Pm(e, t, l) {
    if (jr === null) {
      var n = new Map(),
        i = (jr = new Map());
      i.set(l, n);
    } else (i = jr), (n = i.get(l)), n || ((n = new Map()), i.set(l, n));
    if (n.has(e)) return n;
    for (
      n.set(e, null), l = l.getElementsByTagName(e), i = 0;
      i < l.length;
      i++
    ) {
      var r = l[i];
      if (
        !(
          r[Ra] ||
          r[ot] ||
          (e === "link" && r.getAttribute("rel") === "stylesheet")
        ) &&
        r.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = r.getAttribute(t) || "";
        f = e + f;
        var m = n.get(f);
        m ? m.push(r) : n.set(f, [r]);
      }
    }
    return n;
  }
  function Im(e, t, l) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function jy(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function eh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var vi = null;
  function Uy() {}
  function Hy(e, t, l) {
    if (vi === null) throw Error(c(475));
    var n = vi;
    if (
      t.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var i = sa(l.href),
          r = e.querySelector(mi(i));
        if (r) {
          (e = r._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (n.count++, (n = Ur.bind(n)), e.then(n, n)),
            (t.state.loading |= 4),
            (t.instance = r),
            Pe(r);
          return;
        }
        (r = e.ownerDocument || e),
          (l = Fm(l)),
          (i = Yt.get(i)) && go(l, i),
          (r = r.createElement("link")),
          Pe(r);
        var f = r;
        (f._p = new Promise(function (m, x) {
          (f.onload = m), (f.onerror = x);
        })),
          rt(r, "link", l),
          (t.instance = r);
      }
      n.stylesheets === null && (n.stylesheets = new Map()),
        n.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (n.count++,
          (t = Ur.bind(n)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function By() {
    if (vi === null) throw Error(c(475));
    var e = vi;
    return (
      e.stylesheets && e.count === 0 && yo(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var l = setTimeout(function () {
              if ((e.stylesheets && yo(e, e.stylesheets), e.unsuspend)) {
                var n = e.unsuspend;
                (e.unsuspend = null), n();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function Ur() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) yo(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Hr = null;
  function yo(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Hr = new Map()),
        t.forEach(Ly, e),
        (Hr = null),
        Ur.call(e));
  }
  function Ly(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Hr.get(e);
      if (l) var n = l.get(null);
      else {
        (l = new Map()), Hr.set(e, l);
        for (
          var i = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            r = 0;
          r < i.length;
          r++
        ) {
          var f = i[r];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (l.set(f.dataset.precedence, f), (n = f));
        }
        n && l.set(null, n);
      }
      (i = t.instance),
        (f = i.getAttribute("data-precedence")),
        (r = l.get(f) || n),
        r === n && l.set(null, i),
        l.set(f, i),
        this.count++,
        (n = Ur.bind(this)),
        i.addEventListener("load", n),
        i.addEventListener("error", n),
        r
          ? r.parentNode.insertBefore(i, r.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var gi = {
    $$typeof: B,
    Provider: null,
    Consumer: null,
    _currentValue: U,
    _currentValue2: U,
    _threadCount: 0,
  };
  function qy(e, t, l, n, i, r, f, m) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = mu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = mu(0)),
      (this.hiddenUpdates = mu(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = i),
      (this.onCaughtError = r),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = m),
      (this.incompleteTransitions = new Map());
  }
  function th(e, t, l, n, i, r, f, m, x, M, G, X) {
    return (
      (e = new qy(e, t, l, f, m, x, M, X)),
      (t = 1),
      r === !0 && (t |= 24),
      (r = Tt(3, null, null, t)),
      (e.current = r),
      (r.stateNode = e),
      (t = Pu()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (r.memoizedState = { element: n, isDehydrated: l, cache: t }),
      lc(r),
      e
    );
  }
  function lh(e) {
    return e ? ((e = kn), e) : kn;
  }
  function nh(e, t, l, n, i, r) {
    (i = lh(i)),
      n.context === null ? (n.context = i) : (n.pendingContext = i),
      (n = Rl(t)),
      (n.payload = { element: l }),
      (r = r === void 0 ? null : r),
      r !== null && (n.callback = r),
      (l = Ol(e, n, t)),
      l !== null && (Mt(l, e, t), Za(l, e, t));
  }
  function ah(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function bo(e, t) {
    ah(e, t), (e = e.alternate) && ah(e, t);
  }
  function ih(e) {
    if (e.tag === 13) {
      var t = Yn(e, 67108864);
      t !== null && Mt(t, e, 67108864), bo(e, 67108864);
    }
  }
  var Br = !0;
  function Gy(e, t, l, n) {
    var i = C.T;
    C.T = null;
    var r = Q.p;
    try {
      (Q.p = 2), xo(e, t, l, n);
    } finally {
      (Q.p = r), (C.T = i);
    }
  }
  function Yy(e, t, l, n) {
    var i = C.T;
    C.T = null;
    var r = Q.p;
    try {
      (Q.p = 8), xo(e, t, l, n);
    } finally {
      (Q.p = r), (C.T = i);
    }
  }
  function xo(e, t, l, n) {
    if (Br) {
      var i = So(n);
      if (i === null) ro(e, t, n, Lr, l), uh(e, n);
      else if (Vy(i, e, t, l, n)) n.stopPropagation();
      else if ((uh(e, n), t & 4 && -1 < ky.indexOf(e))) {
        for (; i !== null; ) {
          var r = Cn(i);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
                  var f = nn(r.pendingLanes);
                  if (f !== 0) {
                    var m = r;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var x = 1 << (31 - At(f));
                      (m.entanglements[1] |= x), (f &= ~x);
                    }
                    Pt(r), (_e & 6) === 0 && ((Sr = ct() + 500), oi(0));
                  }
                }
                break;
              case 13:
                (m = Yn(r, 2)), m !== null && Mt(m, r, 2), Ar(), bo(r, 2);
            }
          if (((r = So(n)), r === null && ro(e, t, n, Lr, l), r === i)) break;
          i = r;
        }
        i !== null && n.stopPropagation();
      } else ro(e, t, n, null, l);
    }
  }
  function So(e) {
    return (e = Tu(e)), Eo(e);
  }
  var Lr = null;
  function Eo(e) {
    if (((Lr = null), (e = On(e)), e !== null)) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Lr = e), null;
  }
  function rh(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (du()) {
          case ln:
            return 2;
          case xs:
            return 8;
          case Mi:
          case Og:
            return 32;
          case Ss:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ao = !1,
    Yl = null,
    kl = null,
    Vl = null,
    pi = new Map(),
    yi = new Map(),
    Xl = [],
    ky =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function uh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Yl = null;
        break;
      case "dragenter":
      case "dragleave":
        kl = null;
        break;
      case "mouseover":
      case "mouseout":
        Vl = null;
        break;
      case "pointerover":
      case "pointerout":
        pi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yi.delete(t.pointerId);
    }
  }
  function bi(e, t, l, n, i, r) {
    return e === null || e.nativeEvent !== r
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: n,
          nativeEvent: r,
          targetContainers: [i],
        }),
        t !== null && ((t = Cn(t)), t !== null && ih(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function Vy(e, t, l, n, i) {
    switch (t) {
      case "focusin":
        return (Yl = bi(Yl, e, t, l, n, i)), !0;
      case "dragenter":
        return (kl = bi(kl, e, t, l, n, i)), !0;
      case "mouseover":
        return (Vl = bi(Vl, e, t, l, n, i)), !0;
      case "pointerover":
        var r = i.pointerId;
        return pi.set(r, bi(pi.get(r) || null, e, t, l, n, i)), !0;
      case "gotpointercapture":
        return (
          (r = i.pointerId), yi.set(r, bi(yi.get(r) || null, e, t, l, n, i)), !0
        );
    }
    return !1;
  }
  function ch(e) {
    var t = On(e.target);
    if (t !== null) {
      var l = d(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = h(l)), t !== null)) {
            (e.blockedOn = t),
              Hg(e.priority, function () {
                if (l.tag === 13) {
                  var n = Ct();
                  n = hu(n);
                  var i = Yn(l, n);
                  i !== null && Mt(i, l, n), bo(l, n);
                }
              });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function qr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = So(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(l.type, l);
        (wu = n), l.target.dispatchEvent(n), (wu = null);
      } else return (t = Cn(l)), t !== null && ih(t), (e.blockedOn = l), !1;
      t.shift();
    }
    return !0;
  }
  function oh(e, t, l) {
    qr(e) && l.delete(t);
  }
  function Xy() {
    (Ao = !1),
      Yl !== null && qr(Yl) && (Yl = null),
      kl !== null && qr(kl) && (kl = null),
      Vl !== null && qr(Vl) && (Vl = null),
      pi.forEach(oh),
      yi.forEach(oh);
  }
  function Gr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ao ||
        ((Ao = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Xy)));
  }
  var Yr = null;
  function sh(e) {
    Yr !== e &&
      ((Yr = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Yr === e && (Yr = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            n = e[t + 1],
            i = e[t + 2];
          if (typeof n != "function") {
            if (Eo(n || l) === null) continue;
            break;
          }
          var r = Cn(l);
          r !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Sc(r, { pending: !0, data: i, method: l.method, action: n }, n, i));
        }
      }));
  }
  function xi(e) {
    function t(x) {
      return Gr(x, e);
    }
    Yl !== null && Gr(Yl, e),
      kl !== null && Gr(kl, e),
      Vl !== null && Gr(Vl, e),
      pi.forEach(t),
      yi.forEach(t);
    for (var l = 0; l < Xl.length; l++) {
      var n = Xl[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Xl.length && ((l = Xl[0]), l.blockedOn === null); )
      ch(l), l.blockedOn === null && Xl.shift();
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (n = 0; n < l.length; n += 3) {
        var i = l[n],
          r = l[n + 1],
          f = i[vt] || null;
        if (typeof r == "function") f || sh(l);
        else if (f) {
          var m = null;
          if (r && r.hasAttribute("formAction")) {
            if (((i = r), (f = r[vt] || null))) m = f.formAction;
            else if (Eo(i) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? (l[n + 1] = m) : (l.splice(n, 3), (n -= 3)),
            sh(l);
        }
      }
  }
  function wo(e) {
    this._internalRoot = e;
  }
  (kr.prototype.render = wo.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      var l = t.current,
        n = Ct();
      nh(l, n, e, t, null, null);
    }),
    (kr.prototype.unmount = wo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          nh(e.current, 2, null, e, null, null), Ar(), (t[Rn] = null);
        }
      });
  function kr(e) {
    this._internalRoot = e;
  }
  kr.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ns();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Xl.length && t !== 0 && t < Xl[l].priority; l++);
      Xl.splice(l, 0, e), l === 0 && ch(e);
    }
  };
  var fh = u.version;
  if (fh !== "19.1.0") throw Error(c(527, fh, "19.1.0"));
  Q.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(c(188))
        : ((e = Object.keys(e).join(",")), Error(c(268, e)));
    return (
      (e = y(t)),
      (e = e !== null ? g(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Qy = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vr.isDisabled && Vr.supportsFiber)
      try {
        (wa = Vr.inject(Qy)), (Et = Vr);
      } catch {}
  }
  return (
    (Ei.createRoot = function (e, t) {
      if (!s(e)) throw Error(c(299));
      var l = !1,
        n = "",
        i = Rd,
        r = Od,
        f = Cd,
        m = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (r = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (m = t.unstable_transitionCallbacks)),
        (t = th(e, 1, !1, null, null, l, n, i, r, f, m, null)),
        (e[Rn] = t.current),
        io(e),
        new wo(t)
      );
    }),
    (Ei.hydrateRoot = function (e, t, l) {
      if (!s(e)) throw Error(c(299));
      var n = !1,
        i = "",
        r = Rd,
        f = Od,
        m = Cd,
        x = null,
        M = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (n = !0),
          l.identifierPrefix !== void 0 && (i = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (r = l.onUncaughtError),
          l.onCaughtError !== void 0 && (f = l.onCaughtError),
          l.onRecoverableError !== void 0 && (m = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (x = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (M = l.formState)),
        (t = th(e, 1, !0, t, l ?? null, n, i, r, f, m, x, M)),
        (t.context = lh(null)),
        (l = t.current),
        (n = Ct()),
        (n = hu(n)),
        (i = Rl(n)),
        (i.callback = null),
        Ol(l, i, n),
        (l = n),
        (t.current.lanes = l),
        Na(t, l),
        Pt(t),
        (e[Rn] = t.current),
        io(e),
        new kr(t)
      );
    }),
    (Ei.version = "19.1.0"),
    Ei
  );
}
var Sh;
function t0() {
  if (Sh) return Ro.exports;
  Sh = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (u) {
        console.error(u);
      }
  }
  return a(), (Ro.exports = e0()), Ro.exports;
}
var l0 = t0();
function Eh(a, u) {
  if (typeof a == "function") return a(u);
  a != null && (a.current = u);
}
function n0(...a) {
  return (u) => {
    let o = !1;
    const c = a.map((s) => {
      const d = Eh(s, u);
      return !o && typeof d == "function" && (o = !0), d;
    });
    if (o)
      return () => {
        for (let s = 0; s < c.length; s++) {
          const d = c[s];
          typeof d == "function" ? d() : Eh(a[s], null);
        }
      };
  };
}
function lt(...a) {
  return E.useCallback(n0(...a), a);
}
function Ti(a) {
  const u = i0(a),
    o = E.forwardRef((c, s) => {
      const { children: d, ...h } = c,
        v = E.Children.toArray(d),
        y = v.find(u0);
      if (y) {
        const g = y.props.children,
          b = v.map((T) =>
            T === y
              ? E.Children.count(g) > 1
                ? E.Children.only(null)
                : E.isValidElement(g)
                ? g.props.children
                : null
              : T
          );
        return p.jsx(u, {
          ...h,
          ref: s,
          children: E.isValidElement(g) ? E.cloneElement(g, void 0, b) : null,
        });
      }
      return p.jsx(u, { ...h, ref: s, children: d });
    });
  return (o.displayName = `${a}.Slot`), o;
}
var a0 = Ti("Slot");
function i0(a) {
  const u = E.forwardRef((o, c) => {
    const { children: s, ...d } = o,
      h = E.isValidElement(s) ? o0(s) : void 0,
      v = lt(h, c);
    if (E.isValidElement(s)) {
      const y = c0(d, s.props);
      return s.type !== E.Fragment && (y.ref = v), E.cloneElement(s, y);
    }
    return E.Children.count(s) > 1 ? E.Children.only(null) : null;
  });
  return (u.displayName = `${a}.SlotClone`), u;
}
var r0 = Symbol("radix.slottable");
function u0(a) {
  return (
    E.isValidElement(a) &&
    typeof a.type == "function" &&
    "__radixId" in a.type &&
    a.type.__radixId === r0
  );
}
function c0(a, u) {
  const o = { ...u };
  for (const c in u) {
    const s = a[c],
      d = u[c];
    /^on[A-Z]/.test(c)
      ? s && d
        ? (o[c] = (...v) => {
            const y = d(...v);
            return s(...v), y;
          })
        : s && (o[c] = s)
      : c === "style"
      ? (o[c] = { ...s, ...d })
      : c === "className" && (o[c] = [s, d].filter(Boolean).join(" "));
  }
  return { ...a, ...o };
}
function o0(a) {
  var c, s;
  let u =
      (c = Object.getOwnPropertyDescriptor(a.props, "ref")) == null
        ? void 0
        : c.get,
    o = u && "isReactWarning" in u && u.isReactWarning;
  return o
    ? a.ref
    : ((u =
        (s = Object.getOwnPropertyDescriptor(a, "ref")) == null
          ? void 0
          : s.get),
      (o = u && "isReactWarning" in u && u.isReactWarning),
      o ? a.props.ref : a.props.ref || a.ref);
}
function av(a) {
  var u,
    o,
    c = "";
  if (typeof a == "string" || typeof a == "number") c += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var s = a.length;
      for (u = 0; u < s; u++)
        a[u] && (o = av(a[u])) && (c && (c += " "), (c += o));
    } else for (o in a) a[o] && (c && (c += " "), (c += o));
  return c;
}
function iv() {
  for (var a, u, o = 0, c = "", s = arguments.length; o < s; o++)
    (a = arguments[o]) && (u = av(a)) && (c && (c += " "), (c += u));
  return c;
}
const Ah = (a) => (typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a),
  wh = iv,
  s0 = (a, u) => (o) => {
    var c;
    if ((u == null ? void 0 : u.variants) == null)
      return wh(
        a,
        o == null ? void 0 : o.class,
        o == null ? void 0 : o.className
      );
    const { variants: s, defaultVariants: d } = u,
      h = Object.keys(s).map((g) => {
        const b = o == null ? void 0 : o[g],
          T = d == null ? void 0 : d[g];
        if (b === null) return null;
        const R = Ah(b) || Ah(T);
        return s[g][R];
      }),
      v =
        o &&
        Object.entries(o).reduce((g, b) => {
          let [T, R] = b;
          return R === void 0 || (g[T] = R), g;
        }, {}),
      y =
        u == null || (c = u.compoundVariants) === null || c === void 0
          ? void 0
          : c.reduce((g, b) => {
              let { class: T, className: R, ...z } = b;
              return Object.entries(z).every((H) => {
                let [A, _] = H;
                return Array.isArray(_)
                  ? _.includes({ ...d, ...v }[A])
                  : { ...d, ...v }[A] === _;
              })
                ? [...g, T, R]
                : g;
            }, []);
    return wh(
      a,
      h,
      y,
      o == null ? void 0 : o.class,
      o == null ? void 0 : o.className
    );
  },
  us = "-",
  f0 = (a) => {
    const u = m0(a),
      { conflictingClassGroups: o, conflictingClassGroupModifiers: c } = a;
    return {
      getClassGroupId: (h) => {
        const v = h.split(us);
        return v[0] === "" && v.length !== 1 && v.shift(), rv(v, u) || d0(h);
      },
      getConflictingClassGroupIds: (h, v) => {
        const y = o[h] || [];
        return v && c[h] ? [...y, ...c[h]] : y;
      },
    };
  },
  rv = (a, u) => {
    var h;
    if (a.length === 0) return u.classGroupId;
    const o = a[0],
      c = u.nextPart.get(o),
      s = c ? rv(a.slice(1), c) : void 0;
    if (s) return s;
    if (u.validators.length === 0) return;
    const d = a.join(us);
    return (h = u.validators.find(({ validator: v }) => v(d))) == null
      ? void 0
      : h.classGroupId;
  },
  Th = /^\[(.+)\]$/,
  d0 = (a) => {
    if (Th.test(a)) {
      const u = Th.exec(a)[1],
        o = u == null ? void 0 : u.substring(0, u.indexOf(":"));
      if (o) return "arbitrary.." + o;
    }
  },
  m0 = (a) => {
    const { theme: u, classGroups: o } = a,
      c = { nextPart: new Map(), validators: [] };
    for (const s in o) Ko(o[s], c, s, u);
    return c;
  },
  Ko = (a, u, o, c) => {
    a.forEach((s) => {
      if (typeof s == "string") {
        const d = s === "" ? u : Nh(u, s);
        d.classGroupId = o;
        return;
      }
      if (typeof s == "function") {
        if (h0(s)) {
          Ko(s(c), u, o, c);
          return;
        }
        u.validators.push({ validator: s, classGroupId: o });
        return;
      }
      Object.entries(s).forEach(([d, h]) => {
        Ko(h, Nh(u, d), o, c);
      });
    });
  },
  Nh = (a, u) => {
    let o = a;
    return (
      u.split(us).forEach((c) => {
        o.nextPart.has(c) ||
          o.nextPart.set(c, { nextPart: new Map(), validators: [] }),
          (o = o.nextPart.get(c));
      }),
      o
    );
  },
  h0 = (a) => a.isThemeGetter,
  v0 = (a) => {
    if (a < 1) return { get: () => {}, set: () => {} };
    let u = 0,
      o = new Map(),
      c = new Map();
    const s = (d, h) => {
      o.set(d, h), u++, u > a && ((u = 0), (c = o), (o = new Map()));
    };
    return {
      get(d) {
        let h = o.get(d);
        if (h !== void 0) return h;
        if ((h = c.get(d)) !== void 0) return s(d, h), h;
      },
      set(d, h) {
        o.has(d) ? o.set(d, h) : s(d, h);
      },
    };
  },
  Jo = "!",
  Wo = ":",
  g0 = Wo.length,
  p0 = (a) => {
    const { prefix: u, experimentalParseClassName: o } = a;
    let c = (s) => {
      const d = [];
      let h = 0,
        v = 0,
        y = 0,
        g;
      for (let H = 0; H < s.length; H++) {
        let A = s[H];
        if (h === 0 && v === 0) {
          if (A === Wo) {
            d.push(s.slice(y, H)), (y = H + g0);
            continue;
          }
          if (A === "/") {
            g = H;
            continue;
          }
        }
        A === "[" ? h++ : A === "]" ? h-- : A === "(" ? v++ : A === ")" && v--;
      }
      const b = d.length === 0 ? s : s.substring(y),
        T = y0(b),
        R = T !== b,
        z = g && g > y ? g - y : void 0;
      return {
        modifiers: d,
        hasImportantModifier: R,
        baseClassName: T,
        maybePostfixModifierPosition: z,
      };
    };
    if (u) {
      const s = u + Wo,
        d = c;
      c = (h) =>
        h.startsWith(s)
          ? d(h.substring(s.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: h,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (o) {
      const s = c;
      c = (d) => o({ className: d, parseClassName: s });
    }
    return c;
  },
  y0 = (a) =>
    a.endsWith(Jo)
      ? a.substring(0, a.length - 1)
      : a.startsWith(Jo)
      ? a.substring(1)
      : a,
  b0 = (a) => {
    const u = Object.fromEntries(a.orderSensitiveModifiers.map((c) => [c, !0]));
    return (c) => {
      if (c.length <= 1) return c;
      const s = [];
      let d = [];
      return (
        c.forEach((h) => {
          h[0] === "[" || u[h] ? (s.push(...d.sort(), h), (d = [])) : d.push(h);
        }),
        s.push(...d.sort()),
        s
      );
    };
  },
  x0 = (a) => ({
    cache: v0(a.cacheSize),
    parseClassName: p0(a),
    sortModifiers: b0(a),
    ...f0(a),
  }),
  S0 = /\s+/,
  E0 = (a, u) => {
    const {
        parseClassName: o,
        getClassGroupId: c,
        getConflictingClassGroupIds: s,
        sortModifiers: d,
      } = u,
      h = [],
      v = a.trim().split(S0);
    let y = "";
    for (let g = v.length - 1; g >= 0; g -= 1) {
      const b = v[g],
        {
          isExternal: T,
          modifiers: R,
          hasImportantModifier: z,
          baseClassName: H,
          maybePostfixModifierPosition: A,
        } = o(b);
      if (T) {
        y = b + (y.length > 0 ? " " + y : y);
        continue;
      }
      let _ = !!A,
        q = c(_ ? H.substring(0, A) : H);
      if (!q) {
        if (!_) {
          y = b + (y.length > 0 ? " " + y : y);
          continue;
        }
        if (((q = c(H)), !q)) {
          y = b + (y.length > 0 ? " " + y : y);
          continue;
        }
        _ = !1;
      }
      const L = d(R).join(":"),
        B = z ? L + Jo : L,
        Z = B + q;
      if (h.includes(Z)) continue;
      h.push(Z);
      const V = s(q, _);
      for (let I = 0; I < V.length; ++I) {
        const W = V[I];
        h.push(B + W);
      }
      y = b + (y.length > 0 ? " " + y : y);
    }
    return y;
  };
function A0() {
  let a = 0,
    u,
    o,
    c = "";
  for (; a < arguments.length; )
    (u = arguments[a++]) && (o = uv(u)) && (c && (c += " "), (c += o));
  return c;
}
const uv = (a) => {
  if (typeof a == "string") return a;
  let u,
    o = "";
  for (let c = 0; c < a.length; c++)
    a[c] && (u = uv(a[c])) && (o && (o += " "), (o += u));
  return o;
};
function w0(a, ...u) {
  let o,
    c,
    s,
    d = h;
  function h(y) {
    const g = u.reduce((b, T) => T(b), a());
    return (o = x0(g)), (c = o.cache.get), (s = o.cache.set), (d = v), v(y);
  }
  function v(y) {
    const g = c(y);
    if (g) return g;
    const b = E0(y, o);
    return s(y, b), b;
  }
  return function () {
    return d(A0.apply(null, arguments));
  };
}
const $e = (a) => {
    const u = (o) => o[a] || [];
    return (u.isThemeGetter = !0), u;
  },
  cv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  ov = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  T0 = /^\d+\/\d+$/,
  N0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  R0 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  O0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  C0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  M0 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  da = (a) => T0.test(a),
  ye = (a) => !!a && !Number.isNaN(Number(a)),
  Zl = (a) => !!a && Number.isInteger(Number(a)),
  _o = (a) => a.endsWith("%") && ye(a.slice(0, -1)),
  yl = (a) => N0.test(a),
  _0 = () => !0,
  D0 = (a) => R0.test(a) && !O0.test(a),
  sv = () => !1,
  z0 = (a) => C0.test(a),
  j0 = (a) => M0.test(a),
  U0 = (a) => !te(a) && !le(a),
  H0 = (a) => ba(a, mv, sv),
  te = (a) => cv.test(a),
  En = (a) => ba(a, hv, D0),
  Do = (a) => ba(a, Y0, ye),
  Rh = (a) => ba(a, fv, sv),
  B0 = (a) => ba(a, dv, j0),
  Xr = (a) => ba(a, vv, z0),
  le = (a) => ov.test(a),
  Ai = (a) => xa(a, hv),
  L0 = (a) => xa(a, k0),
  Oh = (a) => xa(a, fv),
  q0 = (a) => xa(a, mv),
  G0 = (a) => xa(a, dv),
  Qr = (a) => xa(a, vv, !0),
  ba = (a, u, o) => {
    const c = cv.exec(a);
    return c ? (c[1] ? u(c[1]) : o(c[2])) : !1;
  },
  xa = (a, u, o = !1) => {
    const c = ov.exec(a);
    return c ? (c[1] ? u(c[1]) : o) : !1;
  },
  fv = (a) => a === "position" || a === "percentage",
  dv = (a) => a === "image" || a === "url",
  mv = (a) => a === "length" || a === "size" || a === "bg-size",
  hv = (a) => a === "length",
  Y0 = (a) => a === "number",
  k0 = (a) => a === "family-name",
  vv = (a) => a === "shadow",
  V0 = () => {
    const a = $e("color"),
      u = $e("font"),
      o = $e("text"),
      c = $e("font-weight"),
      s = $e("tracking"),
      d = $e("leading"),
      h = $e("breakpoint"),
      v = $e("container"),
      y = $e("spacing"),
      g = $e("radius"),
      b = $e("shadow"),
      T = $e("inset-shadow"),
      R = $e("text-shadow"),
      z = $e("drop-shadow"),
      H = $e("blur"),
      A = $e("perspective"),
      _ = $e("aspect"),
      q = $e("ease"),
      L = $e("animate"),
      B = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      Z = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      V = () => [...Z(), le, te],
      I = () => ["auto", "hidden", "clip", "visible", "scroll"],
      W = () => ["auto", "contain", "none"],
      K = () => [le, te, y],
      oe = () => [da, "full", "auto", ...K()],
      ve = () => [Zl, "none", "subgrid", le, te],
      be = () => ["auto", { span: ["full", Zl, le, te] }, Zl, le, te],
      de = () => [Zl, "auto", le, te],
      ge = () => ["auto", "min", "max", "fr", le, te],
      xe = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      ue = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      C = () => ["auto", ...K()],
      Q = () => [
        da,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...K(),
      ],
      U = () => [a, le, te],
      ne = () => [...Z(), Oh, Rh, { position: [le, te] }],
      S = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      Y = () => ["auto", "cover", "contain", q0, H0, { size: [le, te] }],
      F = () => [_o, Ai, En],
      J = () => ["", "none", "full", g, le, te],
      P = () => ["", ye, Ai, En],
      me = () => ["solid", "dashed", "dotted", "double"],
      ie = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      $ = () => [ye, _o, Oh, Rh],
      re = () => ["", "none", H, le, te],
      Me = () => ["none", ye, le, te],
      Ne = () => ["none", ye, le, te],
      Ee = () => [ye, le, te],
      Ae = () => [da, "full", ...K()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [yl],
        breakpoint: [yl],
        color: [_0],
        container: [yl],
        "drop-shadow": [yl],
        ease: ["in", "out", "in-out"],
        font: [U0],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [yl],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [yl],
        shadow: [yl],
        spacing: ["px", ye],
        text: [yl],
        "text-shadow": [yl],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", da, te, le, _] }],
        container: ["container"],
        columns: [{ columns: [ye, te, le, v] }],
        "break-after": [{ "break-after": B() }],
        "break-before": [{ "break-before": B() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: V() }],
        overflow: [{ overflow: I() }],
        "overflow-x": [{ "overflow-x": I() }],
        "overflow-y": [{ "overflow-y": I() }],
        overscroll: [{ overscroll: W() }],
        "overscroll-x": [{ "overscroll-x": W() }],
        "overscroll-y": [{ "overscroll-y": W() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: oe() }],
        "inset-x": [{ "inset-x": oe() }],
        "inset-y": [{ "inset-y": oe() }],
        start: [{ start: oe() }],
        end: [{ end: oe() }],
        top: [{ top: oe() }],
        right: [{ right: oe() }],
        bottom: [{ bottom: oe() }],
        left: [{ left: oe() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Zl, "auto", le, te] }],
        basis: [{ basis: [da, "full", "auto", v, ...K()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [ye, da, "auto", "initial", "none", te] }],
        grow: [{ grow: ["", ye, le, te] }],
        shrink: [{ shrink: ["", ye, le, te] }],
        order: [{ order: [Zl, "first", "last", "none", le, te] }],
        "grid-cols": [{ "grid-cols": ve() }],
        "col-start-end": [{ col: be() }],
        "col-start": [{ "col-start": de() }],
        "col-end": [{ "col-end": de() }],
        "grid-rows": [{ "grid-rows": ve() }],
        "row-start-end": [{ row: be() }],
        "row-start": [{ "row-start": de() }],
        "row-end": [{ "row-end": de() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ge() }],
        "auto-rows": [{ "auto-rows": ge() }],
        gap: [{ gap: K() }],
        "gap-x": [{ "gap-x": K() }],
        "gap-y": [{ "gap-y": K() }],
        "justify-content": [{ justify: [...xe(), "normal"] }],
        "justify-items": [{ "justify-items": [...ue(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...ue()] }],
        "align-content": [{ content: ["normal", ...xe()] }],
        "align-items": [{ items: [...ue(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...ue(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": xe() }],
        "place-items": [{ "place-items": [...ue(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...ue()] }],
        p: [{ p: K() }],
        px: [{ px: K() }],
        py: [{ py: K() }],
        ps: [{ ps: K() }],
        pe: [{ pe: K() }],
        pt: [{ pt: K() }],
        pr: [{ pr: K() }],
        pb: [{ pb: K() }],
        pl: [{ pl: K() }],
        m: [{ m: C() }],
        mx: [{ mx: C() }],
        my: [{ my: C() }],
        ms: [{ ms: C() }],
        me: [{ me: C() }],
        mt: [{ mt: C() }],
        mr: [{ mr: C() }],
        mb: [{ mb: C() }],
        ml: [{ ml: C() }],
        "space-x": [{ "space-x": K() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": K() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: Q() }],
        w: [{ w: [v, "screen", ...Q()] }],
        "min-w": [{ "min-w": [v, "screen", "none", ...Q()] }],
        "max-w": [
          { "max-w": [v, "screen", "none", "prose", { screen: [h] }, ...Q()] },
        ],
        h: [{ h: ["screen", "lh", ...Q()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...Q()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...Q()] }],
        "font-size": [{ text: ["base", o, Ai, En] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [c, le, Do] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              _o,
              te,
            ],
          },
        ],
        "font-family": [{ font: [L0, te, u] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [s, le, te] }],
        "line-clamp": [{ "line-clamp": [ye, "none", le, Do] }],
        leading: [{ leading: [d, ...K()] }],
        "list-image": [{ "list-image": ["none", le, te] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", le, te] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: U() }],
        "text-color": [{ text: U() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...me(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [ye, "from-font", "auto", le, En] },
        ],
        "text-decoration-color": [{ decoration: U() }],
        "underline-offset": [{ "underline-offset": [ye, "auto", le, te] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: K() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              le,
              te,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", le, te] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: ne() }],
        "bg-repeat": [{ bg: S() }],
        "bg-size": [{ bg: Y() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  Zl,
                  le,
                  te,
                ],
                radial: ["", le, te],
                conic: [Zl, le, te],
              },
              G0,
              B0,
            ],
          },
        ],
        "bg-color": [{ bg: U() }],
        "gradient-from-pos": [{ from: F() }],
        "gradient-via-pos": [{ via: F() }],
        "gradient-to-pos": [{ to: F() }],
        "gradient-from": [{ from: U() }],
        "gradient-via": [{ via: U() }],
        "gradient-to": [{ to: U() }],
        rounded: [{ rounded: J() }],
        "rounded-s": [{ "rounded-s": J() }],
        "rounded-e": [{ "rounded-e": J() }],
        "rounded-t": [{ "rounded-t": J() }],
        "rounded-r": [{ "rounded-r": J() }],
        "rounded-b": [{ "rounded-b": J() }],
        "rounded-l": [{ "rounded-l": J() }],
        "rounded-ss": [{ "rounded-ss": J() }],
        "rounded-se": [{ "rounded-se": J() }],
        "rounded-ee": [{ "rounded-ee": J() }],
        "rounded-es": [{ "rounded-es": J() }],
        "rounded-tl": [{ "rounded-tl": J() }],
        "rounded-tr": [{ "rounded-tr": J() }],
        "rounded-br": [{ "rounded-br": J() }],
        "rounded-bl": [{ "rounded-bl": J() }],
        "border-w": [{ border: P() }],
        "border-w-x": [{ "border-x": P() }],
        "border-w-y": [{ "border-y": P() }],
        "border-w-s": [{ "border-s": P() }],
        "border-w-e": [{ "border-e": P() }],
        "border-w-t": [{ "border-t": P() }],
        "border-w-r": [{ "border-r": P() }],
        "border-w-b": [{ "border-b": P() }],
        "border-w-l": [{ "border-l": P() }],
        "divide-x": [{ "divide-x": P() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": P() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...me(), "hidden", "none"] }],
        "divide-style": [{ divide: [...me(), "hidden", "none"] }],
        "border-color": [{ border: U() }],
        "border-color-x": [{ "border-x": U() }],
        "border-color-y": [{ "border-y": U() }],
        "border-color-s": [{ "border-s": U() }],
        "border-color-e": [{ "border-e": U() }],
        "border-color-t": [{ "border-t": U() }],
        "border-color-r": [{ "border-r": U() }],
        "border-color-b": [{ "border-b": U() }],
        "border-color-l": [{ "border-l": U() }],
        "divide-color": [{ divide: U() }],
        "outline-style": [{ outline: [...me(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [ye, le, te] }],
        "outline-w": [{ outline: ["", ye, Ai, En] }],
        "outline-color": [{ outline: U() }],
        shadow: [{ shadow: ["", "none", b, Qr, Xr] }],
        "shadow-color": [{ shadow: U() }],
        "inset-shadow": [{ "inset-shadow": ["none", T, Qr, Xr] }],
        "inset-shadow-color": [{ "inset-shadow": U() }],
        "ring-w": [{ ring: P() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: U() }],
        "ring-offset-w": [{ "ring-offset": [ye, En] }],
        "ring-offset-color": [{ "ring-offset": U() }],
        "inset-ring-w": [{ "inset-ring": P() }],
        "inset-ring-color": [{ "inset-ring": U() }],
        "text-shadow": [{ "text-shadow": ["none", R, Qr, Xr] }],
        "text-shadow-color": [{ "text-shadow": U() }],
        opacity: [{ opacity: [ye, le, te] }],
        "mix-blend": [
          { "mix-blend": [...ie(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": ie() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [ye] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": $() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": $() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": U() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": U() }],
        "mask-image-t-from-pos": [{ "mask-t-from": $() }],
        "mask-image-t-to-pos": [{ "mask-t-to": $() }],
        "mask-image-t-from-color": [{ "mask-t-from": U() }],
        "mask-image-t-to-color": [{ "mask-t-to": U() }],
        "mask-image-r-from-pos": [{ "mask-r-from": $() }],
        "mask-image-r-to-pos": [{ "mask-r-to": $() }],
        "mask-image-r-from-color": [{ "mask-r-from": U() }],
        "mask-image-r-to-color": [{ "mask-r-to": U() }],
        "mask-image-b-from-pos": [{ "mask-b-from": $() }],
        "mask-image-b-to-pos": [{ "mask-b-to": $() }],
        "mask-image-b-from-color": [{ "mask-b-from": U() }],
        "mask-image-b-to-color": [{ "mask-b-to": U() }],
        "mask-image-l-from-pos": [{ "mask-l-from": $() }],
        "mask-image-l-to-pos": [{ "mask-l-to": $() }],
        "mask-image-l-from-color": [{ "mask-l-from": U() }],
        "mask-image-l-to-color": [{ "mask-l-to": U() }],
        "mask-image-x-from-pos": [{ "mask-x-from": $() }],
        "mask-image-x-to-pos": [{ "mask-x-to": $() }],
        "mask-image-x-from-color": [{ "mask-x-from": U() }],
        "mask-image-x-to-color": [{ "mask-x-to": U() }],
        "mask-image-y-from-pos": [{ "mask-y-from": $() }],
        "mask-image-y-to-pos": [{ "mask-y-to": $() }],
        "mask-image-y-from-color": [{ "mask-y-from": U() }],
        "mask-image-y-to-color": [{ "mask-y-to": U() }],
        "mask-image-radial": [{ "mask-radial": [le, te] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": $() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": $() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": U() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": U() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": Z() }],
        "mask-image-conic-pos": [{ "mask-conic": [ye] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": $() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": $() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": U() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": U() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: ne() }],
        "mask-repeat": [{ mask: S() }],
        "mask-size": [{ mask: Y() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", le, te] }],
        filter: [{ filter: ["", "none", le, te] }],
        blur: [{ blur: re() }],
        brightness: [{ brightness: [ye, le, te] }],
        contrast: [{ contrast: [ye, le, te] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", z, Qr, Xr] }],
        "drop-shadow-color": [{ "drop-shadow": U() }],
        grayscale: [{ grayscale: ["", ye, le, te] }],
        "hue-rotate": [{ "hue-rotate": [ye, le, te] }],
        invert: [{ invert: ["", ye, le, te] }],
        saturate: [{ saturate: [ye, le, te] }],
        sepia: [{ sepia: ["", ye, le, te] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", le, te] }],
        "backdrop-blur": [{ "backdrop-blur": re() }],
        "backdrop-brightness": [{ "backdrop-brightness": [ye, le, te] }],
        "backdrop-contrast": [{ "backdrop-contrast": [ye, le, te] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", ye, le, te] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [ye, le, te] }],
        "backdrop-invert": [{ "backdrop-invert": ["", ye, le, te] }],
        "backdrop-opacity": [{ "backdrop-opacity": [ye, le, te] }],
        "backdrop-saturate": [{ "backdrop-saturate": [ye, le, te] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", ye, le, te] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": K() }],
        "border-spacing-x": [{ "border-spacing-x": K() }],
        "border-spacing-y": [{ "border-spacing-y": K() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              le,
              te,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [ye, "initial", le, te] }],
        ease: [{ ease: ["linear", "initial", q, le, te] }],
        delay: [{ delay: [ye, le, te] }],
        animate: [{ animate: ["none", L, le, te] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [A, le, te] }],
        "perspective-origin": [{ "perspective-origin": V() }],
        rotate: [{ rotate: Me() }],
        "rotate-x": [{ "rotate-x": Me() }],
        "rotate-y": [{ "rotate-y": Me() }],
        "rotate-z": [{ "rotate-z": Me() }],
        scale: [{ scale: Ne() }],
        "scale-x": [{ "scale-x": Ne() }],
        "scale-y": [{ "scale-y": Ne() }],
        "scale-z": [{ "scale-z": Ne() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: Ee() }],
        "skew-x": [{ "skew-x": Ee() }],
        "skew-y": [{ "skew-y": Ee() }],
        transform: [{ transform: [le, te, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: V() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Ae() }],
        "translate-x": [{ "translate-x": Ae() }],
        "translate-y": [{ "translate-y": Ae() }],
        "translate-z": [{ "translate-z": Ae() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: U() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: U() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              le,
              te,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": K() }],
        "scroll-mx": [{ "scroll-mx": K() }],
        "scroll-my": [{ "scroll-my": K() }],
        "scroll-ms": [{ "scroll-ms": K() }],
        "scroll-me": [{ "scroll-me": K() }],
        "scroll-mt": [{ "scroll-mt": K() }],
        "scroll-mr": [{ "scroll-mr": K() }],
        "scroll-mb": [{ "scroll-mb": K() }],
        "scroll-ml": [{ "scroll-ml": K() }],
        "scroll-p": [{ "scroll-p": K() }],
        "scroll-px": [{ "scroll-px": K() }],
        "scroll-py": [{ "scroll-py": K() }],
        "scroll-ps": [{ "scroll-ps": K() }],
        "scroll-pe": [{ "scroll-pe": K() }],
        "scroll-pt": [{ "scroll-pt": K() }],
        "scroll-pr": [{ "scroll-pr": K() }],
        "scroll-pb": [{ "scroll-pb": K() }],
        "scroll-pl": [{ "scroll-pl": K() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", le, te],
          },
        ],
        fill: [{ fill: ["none", ...U()] }],
        "stroke-w": [{ stroke: [ye, Ai, En, Do] }],
        stroke: [{ stroke: ["none", ...U()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  X0 = w0(V0);
function xt(...a) {
  return X0(iv(a));
}
const Q0 = s0(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
function Ch({ className: a, variant: u, size: o, asChild: c = !1, ...s }) {
  const d = c ? a0 : "button";
  return p.jsx(d, {
    "data-slot": "button",
    className: xt(Q0({ variant: u, size: o, className: a })),
    ...s,
  });
}
function mt({ className: a, type: u, ...o }) {
  return p.jsx("input", {
    type: u,
    "data-slot": "input",
    className: xt(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      a
    ),
    ...o,
  });
}
var Oi = nv();
const Z0 = tv(Oi);
var K0 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ve = K0.reduce((a, u) => {
    const o = Ti(`Primitive.${u}`),
      c = E.forwardRef((s, d) => {
        const { asChild: h, ...v } = s,
          y = h ? o : u;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          p.jsx(y, { ...v, ref: d })
        );
      });
    return (c.displayName = `Primitive.${u}`), { ...a, [u]: c };
  }, {});
function J0(a, u) {
  a && Oi.flushSync(() => a.dispatchEvent(u));
}
var W0 = "Label",
  gv = E.forwardRef((a, u) =>
    p.jsx(Ve.label, {
      ...a,
      ref: u,
      onMouseDown: (o) => {
        var s;
        o.target.closest("button, input, select, textarea") ||
          ((s = a.onMouseDown) == null || s.call(a, o),
          !o.defaultPrevented && o.detail > 1 && o.preventDefault());
      },
    })
  );
gv.displayName = W0;
var F0 = gv;
function Be({ className: a, ...u }) {
  return p.jsx(F0, {
    "data-slot": "label",
    className: xt(
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      a
    ),
    ...u,
  });
}
function zo({ className: a, ...u }) {
  return p.jsx("textarea", {
    "data-slot": "textarea",
    className: xt(
      "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      a
    ),
    ...u,
  });
}
function $0({ className: a, ...u }) {
  return p.jsx("div", {
    "data-slot": "card",
    className: xt(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      a
    ),
    ...u,
  });
}
function P0({ className: a, ...u }) {
  return p.jsx("div", {
    "data-slot": "card-header",
    className: xt(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      a
    ),
    ...u,
  });
}
function I0({ className: a, ...u }) {
  return p.jsx("div", {
    "data-slot": "card-title",
    className: xt("leading-none font-semibold", a),
    ...u,
  });
}
function eb({ className: a, ...u }) {
  return p.jsx("div", {
    "data-slot": "card-content",
    className: xt("px-6", a),
    ...u,
  });
}
function Mh(a, [u, o]) {
  return Math.min(o, Math.max(u, a));
}
function Je(a, u, { checkForDefaultPrevented: o = !0 } = {}) {
  return function (s) {
    if ((a == null || a(s), o === !1 || !s.defaultPrevented))
      return u == null ? void 0 : u(s);
  };
}
function cs(a, u = []) {
  let o = [];
  function c(d, h) {
    const v = E.createContext(h),
      y = o.length;
    o = [...o, h];
    const g = (T) => {
      var q;
      const { scope: R, children: z, ...H } = T,
        A = ((q = R == null ? void 0 : R[a]) == null ? void 0 : q[y]) || v,
        _ = E.useMemo(() => H, Object.values(H));
      return p.jsx(A.Provider, { value: _, children: z });
    };
    g.displayName = d + "Provider";
    function b(T, R) {
      var A;
      const z = ((A = R == null ? void 0 : R[a]) == null ? void 0 : A[y]) || v,
        H = E.useContext(z);
      if (H) return H;
      if (h !== void 0) return h;
      throw new Error(`\`${T}\` must be used within \`${d}\``);
    }
    return [g, b];
  }
  const s = () => {
    const d = o.map((h) => E.createContext(h));
    return function (v) {
      const y = (v == null ? void 0 : v[a]) || d;
      return E.useMemo(() => ({ [`__scope${a}`]: { ...v, [a]: y } }), [v, y]);
    };
  };
  return (s.scopeName = a), [c, tb(s, ...u)];
}
function tb(...a) {
  const u = a[0];
  if (a.length === 1) return u;
  const o = () => {
    const c = a.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (d) {
      const h = c.reduce((v, { useScope: y, scopeName: g }) => {
        const T = y(d)[`__scope${g}`];
        return { ...v, ...T };
      }, {});
      return E.useMemo(() => ({ [`__scope${u.scopeName}`]: h }), [h]);
    };
  };
  return (o.scopeName = u.scopeName), o;
}
function lb(a) {
  const u = a + "CollectionProvider",
    [o, c] = cs(u),
    [s, d] = o(u, { collectionRef: { current: null }, itemMap: new Map() }),
    h = (A) => {
      const { scope: _, children: q } = A,
        L = Kl.useRef(null),
        B = Kl.useRef(new Map()).current;
      return p.jsx(s, { scope: _, itemMap: B, collectionRef: L, children: q });
    };
  h.displayName = u;
  const v = a + "CollectionSlot",
    y = Ti(v),
    g = Kl.forwardRef((A, _) => {
      const { scope: q, children: L } = A,
        B = d(v, q),
        Z = lt(_, B.collectionRef);
      return p.jsx(y, { ref: Z, children: L });
    });
  g.displayName = v;
  const b = a + "CollectionItemSlot",
    T = "data-radix-collection-item",
    R = Ti(b),
    z = Kl.forwardRef((A, _) => {
      const { scope: q, children: L, ...B } = A,
        Z = Kl.useRef(null),
        V = lt(_, Z),
        I = d(b, q);
      return (
        Kl.useEffect(
          () => (
            I.itemMap.set(Z, { ref: Z, ...B }), () => void I.itemMap.delete(Z)
          )
        ),
        p.jsx(R, { [T]: "", ref: V, children: L })
      );
    });
  z.displayName = b;
  function H(A) {
    const _ = d(a + "CollectionConsumer", A);
    return Kl.useCallback(() => {
      const L = _.collectionRef.current;
      if (!L) return [];
      const B = Array.from(L.querySelectorAll(`[${T}]`));
      return Array.from(_.itemMap.values()).sort(
        (I, W) => B.indexOf(I.ref.current) - B.indexOf(W.ref.current)
      );
    }, [_.collectionRef, _.itemMap]);
  }
  return [{ Provider: h, Slot: g, ItemSlot: z }, H, c];
}
var nb = E.createContext(void 0);
function ab(a) {
  const u = E.useContext(nb);
  return a || u || "ltr";
}
function An(a) {
  const u = E.useRef(a);
  return (
    E.useEffect(() => {
      u.current = a;
    }),
    E.useMemo(
      () =>
        (...o) => {
          var c;
          return (c = u.current) == null ? void 0 : c.call(u, ...o);
        },
      []
    )
  );
}
function ib(a, u = globalThis == null ? void 0 : globalThis.document) {
  const o = An(a);
  E.useEffect(() => {
    const c = (s) => {
      s.key === "Escape" && o(s);
    };
    return (
      u.addEventListener("keydown", c, { capture: !0 }),
      () => u.removeEventListener("keydown", c, { capture: !0 })
    );
  }, [o, u]);
}
var rb = "DismissableLayer",
  Fo = "dismissableLayer.update",
  ub = "dismissableLayer.pointerDownOutside",
  cb = "dismissableLayer.focusOutside",
  _h,
  pv = E.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  yv = E.forwardRef((a, u) => {
    const {
        disableOutsidePointerEvents: o = !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: s,
        onFocusOutside: d,
        onInteractOutside: h,
        onDismiss: v,
        ...y
      } = a,
      g = E.useContext(pv),
      [b, T] = E.useState(null),
      R =
        (b == null ? void 0 : b.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, z] = E.useState({}),
      H = lt(u, (W) => T(W)),
      A = Array.from(g.layers),
      [_] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1),
      q = A.indexOf(_),
      L = b ? A.indexOf(b) : -1,
      B = g.layersWithOutsidePointerEventsDisabled.size > 0,
      Z = L >= q,
      V = fb((W) => {
        const K = W.target,
          oe = [...g.branches].some((ve) => ve.contains(K));
        !Z ||
          oe ||
          (s == null || s(W),
          h == null || h(W),
          W.defaultPrevented || v == null || v());
      }, R),
      I = db((W) => {
        const K = W.target;
        [...g.branches].some((ve) => ve.contains(K)) ||
          (d == null || d(W),
          h == null || h(W),
          W.defaultPrevented || v == null || v());
      }, R);
    return (
      ib((W) => {
        L === g.layers.size - 1 &&
          (c == null || c(W),
          !W.defaultPrevented && v && (W.preventDefault(), v()));
      }, R),
      E.useEffect(() => {
        if (b)
          return (
            o &&
              (g.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((_h = R.body.style.pointerEvents),
                (R.body.style.pointerEvents = "none")),
              g.layersWithOutsidePointerEventsDisabled.add(b)),
            g.layers.add(b),
            Dh(),
            () => {
              o &&
                g.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (R.body.style.pointerEvents = _h);
            }
          );
      }, [b, R, o, g]),
      E.useEffect(
        () => () => {
          b &&
            (g.layers.delete(b),
            g.layersWithOutsidePointerEventsDisabled.delete(b),
            Dh());
        },
        [b, g]
      ),
      E.useEffect(() => {
        const W = () => z({});
        return (
          document.addEventListener(Fo, W),
          () => document.removeEventListener(Fo, W)
        );
      }, []),
      p.jsx(Ve.div, {
        ...y,
        ref: H,
        style: {
          pointerEvents: B ? (Z ? "auto" : "none") : void 0,
          ...a.style,
        },
        onFocusCapture: Je(a.onFocusCapture, I.onFocusCapture),
        onBlurCapture: Je(a.onBlurCapture, I.onBlurCapture),
        onPointerDownCapture: Je(
          a.onPointerDownCapture,
          V.onPointerDownCapture
        ),
      })
    );
  });
yv.displayName = rb;
var ob = "DismissableLayerBranch",
  sb = E.forwardRef((a, u) => {
    const o = E.useContext(pv),
      c = E.useRef(null),
      s = lt(u, c);
    return (
      E.useEffect(() => {
        const d = c.current;
        if (d)
          return (
            o.branches.add(d),
            () => {
              o.branches.delete(d);
            }
          );
      }, [o.branches]),
      p.jsx(Ve.div, { ...a, ref: s })
    );
  });
sb.displayName = ob;
function fb(a, u = globalThis == null ? void 0 : globalThis.document) {
  const o = An(a),
    c = E.useRef(!1),
    s = E.useRef(() => {});
  return (
    E.useEffect(() => {
      const d = (v) => {
          if (v.target && !c.current) {
            let y = function () {
              bv(ub, o, g, { discrete: !0 });
            };
            const g = { originalEvent: v };
            v.pointerType === "touch"
              ? (u.removeEventListener("click", s.current),
                (s.current = y),
                u.addEventListener("click", s.current, { once: !0 }))
              : y();
          } else u.removeEventListener("click", s.current);
          c.current = !1;
        },
        h = window.setTimeout(() => {
          u.addEventListener("pointerdown", d);
        }, 0);
      return () => {
        window.clearTimeout(h),
          u.removeEventListener("pointerdown", d),
          u.removeEventListener("click", s.current);
      };
    }, [u, o]),
    { onPointerDownCapture: () => (c.current = !0) }
  );
}
function db(a, u = globalThis == null ? void 0 : globalThis.document) {
  const o = An(a),
    c = E.useRef(!1);
  return (
    E.useEffect(() => {
      const s = (d) => {
        d.target &&
          !c.current &&
          bv(cb, o, { originalEvent: d }, { discrete: !1 });
      };
      return (
        u.addEventListener("focusin", s),
        () => u.removeEventListener("focusin", s)
      );
    }, [u, o]),
    {
      onFocusCapture: () => (c.current = !0),
      onBlurCapture: () => (c.current = !1),
    }
  );
}
function Dh() {
  const a = new CustomEvent(Fo);
  document.dispatchEvent(a);
}
function bv(a, u, o, { discrete: c }) {
  const s = o.originalEvent.target,
    d = new CustomEvent(a, { bubbles: !1, cancelable: !0, detail: o });
  u && s.addEventListener(a, u, { once: !0 }),
    c ? J0(s, d) : s.dispatchEvent(d);
}
var jo = 0;
function mb() {
  E.useEffect(() => {
    const a = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", a[0] ?? zh()),
      document.body.insertAdjacentElement("beforeend", a[1] ?? zh()),
      jo++,
      () => {
        jo === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((u) => u.remove()),
          jo--;
      }
    );
  }, []);
}
function zh() {
  const a = document.createElement("span");
  return (
    a.setAttribute("data-radix-focus-guard", ""),
    (a.tabIndex = 0),
    (a.style.outline = "none"),
    (a.style.opacity = "0"),
    (a.style.position = "fixed"),
    (a.style.pointerEvents = "none"),
    a
  );
}
var Uo = "focusScope.autoFocusOnMount",
  Ho = "focusScope.autoFocusOnUnmount",
  jh = { bubbles: !1, cancelable: !0 },
  hb = "FocusScope",
  xv = E.forwardRef((a, u) => {
    const {
        loop: o = !1,
        trapped: c = !1,
        onMountAutoFocus: s,
        onUnmountAutoFocus: d,
        ...h
      } = a,
      [v, y] = E.useState(null),
      g = An(s),
      b = An(d),
      T = E.useRef(null),
      R = lt(u, (A) => y(A)),
      z = E.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    E.useEffect(() => {
      if (c) {
        let A = function (B) {
            if (z.paused || !v) return;
            const Z = B.target;
            v.contains(Z) ? (T.current = Z) : Jl(T.current, { select: !0 });
          },
          _ = function (B) {
            if (z.paused || !v) return;
            const Z = B.relatedTarget;
            Z !== null && (v.contains(Z) || Jl(T.current, { select: !0 }));
          },
          q = function (B) {
            if (document.activeElement === document.body)
              for (const V of B) V.removedNodes.length > 0 && Jl(v);
          };
        document.addEventListener("focusin", A),
          document.addEventListener("focusout", _);
        const L = new MutationObserver(q);
        return (
          v && L.observe(v, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", A),
              document.removeEventListener("focusout", _),
              L.disconnect();
          }
        );
      }
    }, [c, v, z.paused]),
      E.useEffect(() => {
        if (v) {
          Hh.add(z);
          const A = document.activeElement;
          if (!v.contains(A)) {
            const q = new CustomEvent(Uo, jh);
            v.addEventListener(Uo, g),
              v.dispatchEvent(q),
              q.defaultPrevented ||
                (vb(xb(Sv(v)), { select: !0 }),
                document.activeElement === A && Jl(v));
          }
          return () => {
            v.removeEventListener(Uo, g),
              setTimeout(() => {
                const q = new CustomEvent(Ho, jh);
                v.addEventListener(Ho, b),
                  v.dispatchEvent(q),
                  q.defaultPrevented || Jl(A ?? document.body, { select: !0 }),
                  v.removeEventListener(Ho, b),
                  Hh.remove(z);
              }, 0);
          };
        }
      }, [v, g, b, z]);
    const H = E.useCallback(
      (A) => {
        if ((!o && !c) || z.paused) return;
        const _ = A.key === "Tab" && !A.altKey && !A.ctrlKey && !A.metaKey,
          q = document.activeElement;
        if (_ && q) {
          const L = A.currentTarget,
            [B, Z] = gb(L);
          B && Z
            ? !A.shiftKey && q === Z
              ? (A.preventDefault(), o && Jl(B, { select: !0 }))
              : A.shiftKey &&
                q === B &&
                (A.preventDefault(), o && Jl(Z, { select: !0 }))
            : q === L && A.preventDefault();
        }
      },
      [o, c, z.paused]
    );
    return p.jsx(Ve.div, { tabIndex: -1, ...h, ref: R, onKeyDown: H });
  });
xv.displayName = hb;
function vb(a, { select: u = !1 } = {}) {
  const o = document.activeElement;
  for (const c of a)
    if ((Jl(c, { select: u }), document.activeElement !== o)) return;
}
function gb(a) {
  const u = Sv(a),
    o = Uh(u, a),
    c = Uh(u.reverse(), a);
  return [o, c];
}
function Sv(a) {
  const u = [],
    o = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (c) => {
        const s = c.tagName === "INPUT" && c.type === "hidden";
        return c.disabled || c.hidden || s
          ? NodeFilter.FILTER_SKIP
          : c.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; o.nextNode(); ) u.push(o.currentNode);
  return u;
}
function Uh(a, u) {
  for (const o of a) if (!pb(o, { upTo: u })) return o;
}
function pb(a, { upTo: u }) {
  if (getComputedStyle(a).visibility === "hidden") return !0;
  for (; a; ) {
    if (u !== void 0 && a === u) return !1;
    if (getComputedStyle(a).display === "none") return !0;
    a = a.parentElement;
  }
  return !1;
}
function yb(a) {
  return a instanceof HTMLInputElement && "select" in a;
}
function Jl(a, { select: u = !1 } = {}) {
  if (a && a.focus) {
    const o = document.activeElement;
    a.focus({ preventScroll: !0 }), a !== o && yb(a) && u && a.select();
  }
}
var Hh = bb();
function bb() {
  let a = [];
  return {
    add(u) {
      const o = a[0];
      u !== o && (o == null || o.pause()), (a = Bh(a, u)), a.unshift(u);
    },
    remove(u) {
      var o;
      (a = Bh(a, u)), (o = a[0]) == null || o.resume();
    },
  };
}
function Bh(a, u) {
  const o = [...a],
    c = o.indexOf(u);
  return c !== -1 && o.splice(c, 1), o;
}
function xb(a) {
  return a.filter((u) => u.tagName !== "A");
}
var St =
    globalThis != null && globalThis.document ? E.useLayoutEffect : () => {},
  Sb = lv[" useId ".trim().toString()] || (() => {}),
  Eb = 0;
function os(a) {
  const [u, o] = E.useState(Sb());
  return (
    St(() => {
      o((c) => c ?? String(Eb++));
    }, [a]),
    a || (u ? `radix-${u}` : "")
  );
}
const Ab = ["top", "right", "bottom", "left"],
  Wl = Math.min,
  _t = Math.max,
  eu = Math.round,
  Zr = Math.floor,
  el = (a) => ({ x: a, y: a }),
  wb = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Tb = { start: "end", end: "start" };
function $o(a, u, o) {
  return _t(a, Wl(u, o));
}
function xl(a, u) {
  return typeof a == "function" ? a(u) : a;
}
function Sl(a) {
  return a.split("-")[0];
}
function Sa(a) {
  return a.split("-")[1];
}
function ss(a) {
  return a === "x" ? "y" : "x";
}
function fs(a) {
  return a === "y" ? "height" : "width";
}
function bl(a) {
  return ["top", "bottom"].includes(Sl(a)) ? "y" : "x";
}
function ds(a) {
  return ss(bl(a));
}
function Nb(a, u, o) {
  o === void 0 && (o = !1);
  const c = Sa(a),
    s = ds(a),
    d = fs(s);
  let h =
    s === "x"
      ? c === (o ? "end" : "start")
        ? "right"
        : "left"
      : c === "start"
      ? "bottom"
      : "top";
  return u.reference[d] > u.floating[d] && (h = tu(h)), [h, tu(h)];
}
function Rb(a) {
  const u = tu(a);
  return [Po(a), u, Po(u)];
}
function Po(a) {
  return a.replace(/start|end/g, (u) => Tb[u]);
}
function Ob(a, u, o) {
  const c = ["left", "right"],
    s = ["right", "left"],
    d = ["top", "bottom"],
    h = ["bottom", "top"];
  switch (a) {
    case "top":
    case "bottom":
      return o ? (u ? s : c) : u ? c : s;
    case "left":
    case "right":
      return u ? d : h;
    default:
      return [];
  }
}
function Cb(a, u, o, c) {
  const s = Sa(a);
  let d = Ob(Sl(a), o === "start", c);
  return (
    s && ((d = d.map((h) => h + "-" + s)), u && (d = d.concat(d.map(Po)))), d
  );
}
function tu(a) {
  return a.replace(/left|right|bottom|top/g, (u) => wb[u]);
}
function Mb(a) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...a };
}
function Ev(a) {
  return typeof a != "number"
    ? Mb(a)
    : { top: a, right: a, bottom: a, left: a };
}
function lu(a) {
  const { x: u, y: o, width: c, height: s } = a;
  return {
    width: c,
    height: s,
    top: o,
    left: u,
    right: u + c,
    bottom: o + s,
    x: u,
    y: o,
  };
}
function Lh(a, u, o) {
  let { reference: c, floating: s } = a;
  const d = bl(u),
    h = ds(u),
    v = fs(h),
    y = Sl(u),
    g = d === "y",
    b = c.x + c.width / 2 - s.width / 2,
    T = c.y + c.height / 2 - s.height / 2,
    R = c[v] / 2 - s[v] / 2;
  let z;
  switch (y) {
    case "top":
      z = { x: b, y: c.y - s.height };
      break;
    case "bottom":
      z = { x: b, y: c.y + c.height };
      break;
    case "right":
      z = { x: c.x + c.width, y: T };
      break;
    case "left":
      z = { x: c.x - s.width, y: T };
      break;
    default:
      z = { x: c.x, y: c.y };
  }
  switch (Sa(u)) {
    case "start":
      z[h] -= R * (o && g ? -1 : 1);
      break;
    case "end":
      z[h] += R * (o && g ? -1 : 1);
      break;
  }
  return z;
}
const _b = async (a, u, o) => {
  const {
      placement: c = "bottom",
      strategy: s = "absolute",
      middleware: d = [],
      platform: h,
    } = o,
    v = d.filter(Boolean),
    y = await (h.isRTL == null ? void 0 : h.isRTL(u));
  let g = await h.getElementRects({ reference: a, floating: u, strategy: s }),
    { x: b, y: T } = Lh(g, c, y),
    R = c,
    z = {},
    H = 0;
  for (let A = 0; A < v.length; A++) {
    const { name: _, fn: q } = v[A],
      {
        x: L,
        y: B,
        data: Z,
        reset: V,
      } = await q({
        x: b,
        y: T,
        initialPlacement: c,
        placement: R,
        strategy: s,
        middlewareData: z,
        rects: g,
        platform: h,
        elements: { reference: a, floating: u },
      });
    (b = L ?? b),
      (T = B ?? T),
      (z = { ...z, [_]: { ...z[_], ...Z } }),
      V &&
        H <= 50 &&
        (H++,
        typeof V == "object" &&
          (V.placement && (R = V.placement),
          V.rects &&
            (g =
              V.rects === !0
                ? await h.getElementRects({
                    reference: a,
                    floating: u,
                    strategy: s,
                  })
                : V.rects),
          ({ x: b, y: T } = Lh(g, R, y))),
        (A = -1));
  }
  return { x: b, y: T, placement: R, strategy: s, middlewareData: z };
};
async function Ni(a, u) {
  var o;
  u === void 0 && (u = {});
  const { x: c, y: s, platform: d, rects: h, elements: v, strategy: y } = a,
    {
      boundary: g = "clippingAncestors",
      rootBoundary: b = "viewport",
      elementContext: T = "floating",
      altBoundary: R = !1,
      padding: z = 0,
    } = xl(u, a),
    H = Ev(z),
    _ = v[R ? (T === "floating" ? "reference" : "floating") : T],
    q = lu(
      await d.getClippingRect({
        element:
          (o = await (d.isElement == null ? void 0 : d.isElement(_))) == null ||
          o
            ? _
            : _.contextElement ||
              (await (d.getDocumentElement == null
                ? void 0
                : d.getDocumentElement(v.floating))),
        boundary: g,
        rootBoundary: b,
        strategy: y,
      })
    ),
    L =
      T === "floating"
        ? { x: c, y: s, width: h.floating.width, height: h.floating.height }
        : h.reference,
    B = await (d.getOffsetParent == null
      ? void 0
      : d.getOffsetParent(v.floating)),
    Z = (await (d.isElement == null ? void 0 : d.isElement(B)))
      ? (await (d.getScale == null ? void 0 : d.getScale(B))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    V = lu(
      d.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: v,
            rect: L,
            offsetParent: B,
            strategy: y,
          })
        : L
    );
  return {
    top: (q.top - V.top + H.top) / Z.y,
    bottom: (V.bottom - q.bottom + H.bottom) / Z.y,
    left: (q.left - V.left + H.left) / Z.x,
    right: (V.right - q.right + H.right) / Z.x,
  };
}
const Db = (a) => ({
    name: "arrow",
    options: a,
    async fn(u) {
      const {
          x: o,
          y: c,
          placement: s,
          rects: d,
          platform: h,
          elements: v,
          middlewareData: y,
        } = u,
        { element: g, padding: b = 0 } = xl(a, u) || {};
      if (g == null) return {};
      const T = Ev(b),
        R = { x: o, y: c },
        z = ds(s),
        H = fs(z),
        A = await h.getDimensions(g),
        _ = z === "y",
        q = _ ? "top" : "left",
        L = _ ? "bottom" : "right",
        B = _ ? "clientHeight" : "clientWidth",
        Z = d.reference[H] + d.reference[z] - R[z] - d.floating[H],
        V = R[z] - d.reference[z],
        I = await (h.getOffsetParent == null ? void 0 : h.getOffsetParent(g));
      let W = I ? I[B] : 0;
      (!W || !(await (h.isElement == null ? void 0 : h.isElement(I)))) &&
        (W = v.floating[B] || d.floating[H]);
      const K = Z / 2 - V / 2,
        oe = W / 2 - A[H] / 2 - 1,
        ve = Wl(T[q], oe),
        be = Wl(T[L], oe),
        de = ve,
        ge = W - A[H] - be,
        xe = W / 2 - A[H] / 2 + K,
        ue = $o(de, xe, ge),
        C =
          !y.arrow &&
          Sa(s) != null &&
          xe !== ue &&
          d.reference[H] / 2 - (xe < de ? ve : be) - A[H] / 2 < 0,
        Q = C ? (xe < de ? xe - de : xe - ge) : 0;
      return {
        [z]: R[z] + Q,
        data: {
          [z]: ue,
          centerOffset: xe - ue - Q,
          ...(C && { alignmentOffset: Q }),
        },
        reset: C,
      };
    },
  }),
  zb = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "flip",
        options: a,
        async fn(u) {
          var o, c;
          const {
              placement: s,
              middlewareData: d,
              rects: h,
              initialPlacement: v,
              platform: y,
              elements: g,
            } = u,
            {
              mainAxis: b = !0,
              crossAxis: T = !0,
              fallbackPlacements: R,
              fallbackStrategy: z = "bestFit",
              fallbackAxisSideDirection: H = "none",
              flipAlignment: A = !0,
              ..._
            } = xl(a, u);
          if ((o = d.arrow) != null && o.alignmentOffset) return {};
          const q = Sl(s),
            L = bl(v),
            B = Sl(v) === v,
            Z = await (y.isRTL == null ? void 0 : y.isRTL(g.floating)),
            V = R || (B || !A ? [tu(v)] : Rb(v)),
            I = H !== "none";
          !R && I && V.push(...Cb(v, A, H, Z));
          const W = [v, ...V],
            K = await Ni(u, _),
            oe = [];
          let ve = ((c = d.flip) == null ? void 0 : c.overflows) || [];
          if ((b && oe.push(K[q]), T)) {
            const ue = Nb(s, h, Z);
            oe.push(K[ue[0]], K[ue[1]]);
          }
          if (
            ((ve = [...ve, { placement: s, overflows: oe }]),
            !oe.every((ue) => ue <= 0))
          ) {
            var be, de;
            const ue = (((be = d.flip) == null ? void 0 : be.index) || 0) + 1,
              C = W[ue];
            if (C) {
              var ge;
              const U = T === "alignment" ? L !== bl(C) : !1,
                ne = ((ge = ve[0]) == null ? void 0 : ge.overflows[0]) > 0;
              if (!U || ne)
                return {
                  data: { index: ue, overflows: ve },
                  reset: { placement: C },
                };
            }
            let Q =
              (de = ve
                .filter((U) => U.overflows[0] <= 0)
                .sort((U, ne) => U.overflows[1] - ne.overflows[1])[0]) == null
                ? void 0
                : de.placement;
            if (!Q)
              switch (z) {
                case "bestFit": {
                  var xe;
                  const U =
                    (xe = ve
                      .filter((ne) => {
                        if (I) {
                          const S = bl(ne.placement);
                          return S === L || S === "y";
                        }
                        return !0;
                      })
                      .map((ne) => [
                        ne.placement,
                        ne.overflows
                          .filter((S) => S > 0)
                          .reduce((S, Y) => S + Y, 0),
                      ])
                      .sort((ne, S) => ne[1] - S[1])[0]) == null
                      ? void 0
                      : xe[0];
                  U && (Q = U);
                  break;
                }
                case "initialPlacement":
                  Q = v;
                  break;
              }
            if (s !== Q) return { reset: { placement: Q } };
          }
          return {};
        },
      }
    );
  };
function qh(a, u) {
  return {
    top: a.top - u.height,
    right: a.right - u.width,
    bottom: a.bottom - u.height,
    left: a.left - u.width,
  };
}
function Gh(a) {
  return Ab.some((u) => a[u] >= 0);
}
const jb = function (a) {
  return (
    a === void 0 && (a = {}),
    {
      name: "hide",
      options: a,
      async fn(u) {
        const { rects: o } = u,
          { strategy: c = "referenceHidden", ...s } = xl(a, u);
        switch (c) {
          case "referenceHidden": {
            const d = await Ni(u, { ...s, elementContext: "reference" }),
              h = qh(d, o.reference);
            return {
              data: { referenceHiddenOffsets: h, referenceHidden: Gh(h) },
            };
          }
          case "escaped": {
            const d = await Ni(u, { ...s, altBoundary: !0 }),
              h = qh(d, o.floating);
            return { data: { escapedOffsets: h, escaped: Gh(h) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Ub(a, u) {
  const { placement: o, platform: c, elements: s } = a,
    d = await (c.isRTL == null ? void 0 : c.isRTL(s.floating)),
    h = Sl(o),
    v = Sa(o),
    y = bl(o) === "y",
    g = ["left", "top"].includes(h) ? -1 : 1,
    b = d && y ? -1 : 1,
    T = xl(u, a);
  let {
    mainAxis: R,
    crossAxis: z,
    alignmentAxis: H,
  } = typeof T == "number"
    ? { mainAxis: T, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: T.mainAxis || 0,
        crossAxis: T.crossAxis || 0,
        alignmentAxis: T.alignmentAxis,
      };
  return (
    v && typeof H == "number" && (z = v === "end" ? H * -1 : H),
    y ? { x: z * b, y: R * g } : { x: R * g, y: z * b }
  );
}
const Hb = function (a) {
    return (
      a === void 0 && (a = 0),
      {
        name: "offset",
        options: a,
        async fn(u) {
          var o, c;
          const { x: s, y: d, placement: h, middlewareData: v } = u,
            y = await Ub(u, a);
          return h === ((o = v.offset) == null ? void 0 : o.placement) &&
            (c = v.arrow) != null &&
            c.alignmentOffset
            ? {}
            : { x: s + y.x, y: d + y.y, data: { ...y, placement: h } };
        },
      }
    );
  },
  Bb = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "shift",
        options: a,
        async fn(u) {
          const { x: o, y: c, placement: s } = u,
            {
              mainAxis: d = !0,
              crossAxis: h = !1,
              limiter: v = {
                fn: (_) => {
                  let { x: q, y: L } = _;
                  return { x: q, y: L };
                },
              },
              ...y
            } = xl(a, u),
            g = { x: o, y: c },
            b = await Ni(u, y),
            T = bl(Sl(s)),
            R = ss(T);
          let z = g[R],
            H = g[T];
          if (d) {
            const _ = R === "y" ? "top" : "left",
              q = R === "y" ? "bottom" : "right",
              L = z + b[_],
              B = z - b[q];
            z = $o(L, z, B);
          }
          if (h) {
            const _ = T === "y" ? "top" : "left",
              q = T === "y" ? "bottom" : "right",
              L = H + b[_],
              B = H - b[q];
            H = $o(L, H, B);
          }
          const A = v.fn({ ...u, [R]: z, [T]: H });
          return {
            ...A,
            data: { x: A.x - o, y: A.y - c, enabled: { [R]: d, [T]: h } },
          };
        },
      }
    );
  },
  Lb = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        options: a,
        fn(u) {
          const { x: o, y: c, placement: s, rects: d, middlewareData: h } = u,
            { offset: v = 0, mainAxis: y = !0, crossAxis: g = !0 } = xl(a, u),
            b = { x: o, y: c },
            T = bl(s),
            R = ss(T);
          let z = b[R],
            H = b[T];
          const A = xl(v, u),
            _ =
              typeof A == "number"
                ? { mainAxis: A, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...A };
          if (y) {
            const B = R === "y" ? "height" : "width",
              Z = d.reference[R] - d.floating[B] + _.mainAxis,
              V = d.reference[R] + d.reference[B] - _.mainAxis;
            z < Z ? (z = Z) : z > V && (z = V);
          }
          if (g) {
            var q, L;
            const B = R === "y" ? "width" : "height",
              Z = ["top", "left"].includes(Sl(s)),
              V =
                d.reference[T] -
                d.floating[B] +
                ((Z && ((q = h.offset) == null ? void 0 : q[T])) || 0) +
                (Z ? 0 : _.crossAxis),
              I =
                d.reference[T] +
                d.reference[B] +
                (Z ? 0 : ((L = h.offset) == null ? void 0 : L[T]) || 0) -
                (Z ? _.crossAxis : 0);
            H < V ? (H = V) : H > I && (H = I);
          }
          return { [R]: z, [T]: H };
        },
      }
    );
  },
  qb = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "size",
        options: a,
        async fn(u) {
          var o, c;
          const { placement: s, rects: d, platform: h, elements: v } = u,
            { apply: y = () => {}, ...g } = xl(a, u),
            b = await Ni(u, g),
            T = Sl(s),
            R = Sa(s),
            z = bl(s) === "y",
            { width: H, height: A } = d.floating;
          let _, q;
          T === "top" || T === "bottom"
            ? ((_ = T),
              (q =
                R ===
                ((await (h.isRTL == null ? void 0 : h.isRTL(v.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((q = T), (_ = R === "end" ? "top" : "bottom"));
          const L = A - b.top - b.bottom,
            B = H - b.left - b.right,
            Z = Wl(A - b[_], L),
            V = Wl(H - b[q], B),
            I = !u.middlewareData.shift;
          let W = Z,
            K = V;
          if (
            ((o = u.middlewareData.shift) != null && o.enabled.x && (K = B),
            (c = u.middlewareData.shift) != null && c.enabled.y && (W = L),
            I && !R)
          ) {
            const ve = _t(b.left, 0),
              be = _t(b.right, 0),
              de = _t(b.top, 0),
              ge = _t(b.bottom, 0);
            z
              ? (K =
                  H -
                  2 * (ve !== 0 || be !== 0 ? ve + be : _t(b.left, b.right)))
              : (W =
                  A -
                  2 * (de !== 0 || ge !== 0 ? de + ge : _t(b.top, b.bottom)));
          }
          await y({ ...u, availableWidth: K, availableHeight: W });
          const oe = await h.getDimensions(v.floating);
          return H !== oe.width || A !== oe.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function iu() {
  return typeof window < "u";
}
function Ea(a) {
  return Av(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function Dt(a) {
  var u;
  return (
    (a == null || (u = a.ownerDocument) == null ? void 0 : u.defaultView) ||
    window
  );
}
function ll(a) {
  var u;
  return (u = (Av(a) ? a.ownerDocument : a.document) || window.document) == null
    ? void 0
    : u.documentElement;
}
function Av(a) {
  return iu() ? a instanceof Node || a instanceof Dt(a).Node : !1;
}
function Zt(a) {
  return iu() ? a instanceof Element || a instanceof Dt(a).Element : !1;
}
function tl(a) {
  return iu() ? a instanceof HTMLElement || a instanceof Dt(a).HTMLElement : !1;
}
function Yh(a) {
  return !iu() || typeof ShadowRoot > "u"
    ? !1
    : a instanceof ShadowRoot || a instanceof Dt(a).ShadowRoot;
}
function Ci(a) {
  const { overflow: u, overflowX: o, overflowY: c, display: s } = Kt(a);
  return (
    /auto|scroll|overlay|hidden|clip/.test(u + c + o) &&
    !["inline", "contents"].includes(s)
  );
}
function Gb(a) {
  return ["table", "td", "th"].includes(Ea(a));
}
function ru(a) {
  return [":popover-open", ":modal"].some((u) => {
    try {
      return a.matches(u);
    } catch {
      return !1;
    }
  });
}
function ms(a) {
  const u = hs(),
    o = Zt(a) ? Kt(a) : a;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((c) =>
      o[c] ? o[c] !== "none" : !1
    ) ||
    (o.containerType ? o.containerType !== "normal" : !1) ||
    (!u && (o.backdropFilter ? o.backdropFilter !== "none" : !1)) ||
    (!u && (o.filter ? o.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (c) => (o.willChange || "").includes(c)
    ) ||
    ["paint", "layout", "strict", "content"].some((c) =>
      (o.contain || "").includes(c)
    )
  );
}
function Yb(a) {
  let u = Fl(a);
  for (; tl(u) && !ya(u); ) {
    if (ms(u)) return u;
    if (ru(u)) return null;
    u = Fl(u);
  }
  return null;
}
function hs() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function ya(a) {
  return ["html", "body", "#document"].includes(Ea(a));
}
function Kt(a) {
  return Dt(a).getComputedStyle(a);
}
function uu(a) {
  return Zt(a)
    ? { scrollLeft: a.scrollLeft, scrollTop: a.scrollTop }
    : { scrollLeft: a.scrollX, scrollTop: a.scrollY };
}
function Fl(a) {
  if (Ea(a) === "html") return a;
  const u = a.assignedSlot || a.parentNode || (Yh(a) && a.host) || ll(a);
  return Yh(u) ? u.host : u;
}
function wv(a) {
  const u = Fl(a);
  return ya(u)
    ? a.ownerDocument
      ? a.ownerDocument.body
      : a.body
    : tl(u) && Ci(u)
    ? u
    : wv(u);
}
function Ri(a, u, o) {
  var c;
  u === void 0 && (u = []), o === void 0 && (o = !0);
  const s = wv(a),
    d = s === ((c = a.ownerDocument) == null ? void 0 : c.body),
    h = Dt(s);
  if (d) {
    const v = Io(h);
    return u.concat(
      h,
      h.visualViewport || [],
      Ci(s) ? s : [],
      v && o ? Ri(v) : []
    );
  }
  return u.concat(s, Ri(s, [], o));
}
function Io(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
function Tv(a) {
  const u = Kt(a);
  let o = parseFloat(u.width) || 0,
    c = parseFloat(u.height) || 0;
  const s = tl(a),
    d = s ? a.offsetWidth : o,
    h = s ? a.offsetHeight : c,
    v = eu(o) !== d || eu(c) !== h;
  return v && ((o = d), (c = h)), { width: o, height: c, $: v };
}
function vs(a) {
  return Zt(a) ? a : a.contextElement;
}
function ga(a) {
  const u = vs(a);
  if (!tl(u)) return el(1);
  const o = u.getBoundingClientRect(),
    { width: c, height: s, $: d } = Tv(u);
  let h = (d ? eu(o.width) : o.width) / c,
    v = (d ? eu(o.height) : o.height) / s;
  return (
    (!h || !Number.isFinite(h)) && (h = 1),
    (!v || !Number.isFinite(v)) && (v = 1),
    { x: h, y: v }
  );
}
const kb = el(0);
function Nv(a) {
  const u = Dt(a);
  return !hs() || !u.visualViewport
    ? kb
    : { x: u.visualViewport.offsetLeft, y: u.visualViewport.offsetTop };
}
function Vb(a, u, o) {
  return u === void 0 && (u = !1), !o || (u && o !== Dt(a)) ? !1 : u;
}
function wn(a, u, o, c) {
  u === void 0 && (u = !1), o === void 0 && (o = !1);
  const s = a.getBoundingClientRect(),
    d = vs(a);
  let h = el(1);
  u && (c ? Zt(c) && (h = ga(c)) : (h = ga(a)));
  const v = Vb(d, o, c) ? Nv(d) : el(0);
  let y = (s.left + v.x) / h.x,
    g = (s.top + v.y) / h.y,
    b = s.width / h.x,
    T = s.height / h.y;
  if (d) {
    const R = Dt(d),
      z = c && Zt(c) ? Dt(c) : c;
    let H = R,
      A = Io(H);
    for (; A && c && z !== H; ) {
      const _ = ga(A),
        q = A.getBoundingClientRect(),
        L = Kt(A),
        B = q.left + (A.clientLeft + parseFloat(L.paddingLeft)) * _.x,
        Z = q.top + (A.clientTop + parseFloat(L.paddingTop)) * _.y;
      (y *= _.x),
        (g *= _.y),
        (b *= _.x),
        (T *= _.y),
        (y += B),
        (g += Z),
        (H = Dt(A)),
        (A = Io(H));
    }
  }
  return lu({ width: b, height: T, x: y, y: g });
}
function gs(a, u) {
  const o = uu(a).scrollLeft;
  return u ? u.left + o : wn(ll(a)).left + o;
}
function Rv(a, u, o) {
  o === void 0 && (o = !1);
  const c = a.getBoundingClientRect(),
    s = c.left + u.scrollLeft - (o ? 0 : gs(a, c)),
    d = c.top + u.scrollTop;
  return { x: s, y: d };
}
function Xb(a) {
  let { elements: u, rect: o, offsetParent: c, strategy: s } = a;
  const d = s === "fixed",
    h = ll(c),
    v = u ? ru(u.floating) : !1;
  if (c === h || (v && d)) return o;
  let y = { scrollLeft: 0, scrollTop: 0 },
    g = el(1);
  const b = el(0),
    T = tl(c);
  if (
    (T || (!T && !d)) &&
    ((Ea(c) !== "body" || Ci(h)) && (y = uu(c)), tl(c))
  ) {
    const z = wn(c);
    (g = ga(c)), (b.x = z.x + c.clientLeft), (b.y = z.y + c.clientTop);
  }
  const R = h && !T && !d ? Rv(h, y, !0) : el(0);
  return {
    width: o.width * g.x,
    height: o.height * g.y,
    x: o.x * g.x - y.scrollLeft * g.x + b.x + R.x,
    y: o.y * g.y - y.scrollTop * g.y + b.y + R.y,
  };
}
function Qb(a) {
  return Array.from(a.getClientRects());
}
function Zb(a) {
  const u = ll(a),
    o = uu(a),
    c = a.ownerDocument.body,
    s = _t(u.scrollWidth, u.clientWidth, c.scrollWidth, c.clientWidth),
    d = _t(u.scrollHeight, u.clientHeight, c.scrollHeight, c.clientHeight);
  let h = -o.scrollLeft + gs(a);
  const v = -o.scrollTop;
  return (
    Kt(c).direction === "rtl" && (h += _t(u.clientWidth, c.clientWidth) - s),
    { width: s, height: d, x: h, y: v }
  );
}
function Kb(a, u) {
  const o = Dt(a),
    c = ll(a),
    s = o.visualViewport;
  let d = c.clientWidth,
    h = c.clientHeight,
    v = 0,
    y = 0;
  if (s) {
    (d = s.width), (h = s.height);
    const g = hs();
    (!g || (g && u === "fixed")) && ((v = s.offsetLeft), (y = s.offsetTop));
  }
  return { width: d, height: h, x: v, y };
}
function Jb(a, u) {
  const o = wn(a, !0, u === "fixed"),
    c = o.top + a.clientTop,
    s = o.left + a.clientLeft,
    d = tl(a) ? ga(a) : el(1),
    h = a.clientWidth * d.x,
    v = a.clientHeight * d.y,
    y = s * d.x,
    g = c * d.y;
  return { width: h, height: v, x: y, y: g };
}
function kh(a, u, o) {
  let c;
  if (u === "viewport") c = Kb(a, o);
  else if (u === "document") c = Zb(ll(a));
  else if (Zt(u)) c = Jb(u, o);
  else {
    const s = Nv(a);
    c = { x: u.x - s.x, y: u.y - s.y, width: u.width, height: u.height };
  }
  return lu(c);
}
function Ov(a, u) {
  const o = Fl(a);
  return o === u || !Zt(o) || ya(o)
    ? !1
    : Kt(o).position === "fixed" || Ov(o, u);
}
function Wb(a, u) {
  const o = u.get(a);
  if (o) return o;
  let c = Ri(a, [], !1).filter((v) => Zt(v) && Ea(v) !== "body"),
    s = null;
  const d = Kt(a).position === "fixed";
  let h = d ? Fl(a) : a;
  for (; Zt(h) && !ya(h); ) {
    const v = Kt(h),
      y = ms(h);
    !y && v.position === "fixed" && (s = null),
      (
        d
          ? !y && !s
          : (!y &&
              v.position === "static" &&
              !!s &&
              ["absolute", "fixed"].includes(s.position)) ||
            (Ci(h) && !y && Ov(a, h))
      )
        ? (c = c.filter((b) => b !== h))
        : (s = v),
      (h = Fl(h));
  }
  return u.set(a, c), c;
}
function Fb(a) {
  let { element: u, boundary: o, rootBoundary: c, strategy: s } = a;
  const h = [
      ...(o === "clippingAncestors"
        ? ru(u)
          ? []
          : Wb(u, this._c)
        : [].concat(o)),
      c,
    ],
    v = h[0],
    y = h.reduce((g, b) => {
      const T = kh(u, b, s);
      return (
        (g.top = _t(T.top, g.top)),
        (g.right = Wl(T.right, g.right)),
        (g.bottom = Wl(T.bottom, g.bottom)),
        (g.left = _t(T.left, g.left)),
        g
      );
    }, kh(u, v, s));
  return {
    width: y.right - y.left,
    height: y.bottom - y.top,
    x: y.left,
    y: y.top,
  };
}
function $b(a) {
  const { width: u, height: o } = Tv(a);
  return { width: u, height: o };
}
function Pb(a, u, o) {
  const c = tl(u),
    s = ll(u),
    d = o === "fixed",
    h = wn(a, !0, d, u);
  let v = { scrollLeft: 0, scrollTop: 0 };
  const y = el(0);
  function g() {
    y.x = gs(s);
  }
  if (c || (!c && !d))
    if (((Ea(u) !== "body" || Ci(s)) && (v = uu(u)), c)) {
      const z = wn(u, !0, d, u);
      (y.x = z.x + u.clientLeft), (y.y = z.y + u.clientTop);
    } else s && g();
  d && !c && s && g();
  const b = s && !c && !d ? Rv(s, v) : el(0),
    T = h.left + v.scrollLeft - y.x - b.x,
    R = h.top + v.scrollTop - y.y - b.y;
  return { x: T, y: R, width: h.width, height: h.height };
}
function Bo(a) {
  return Kt(a).position === "static";
}
function Vh(a, u) {
  if (!tl(a) || Kt(a).position === "fixed") return null;
  if (u) return u(a);
  let o = a.offsetParent;
  return ll(a) === o && (o = o.ownerDocument.body), o;
}
function Cv(a, u) {
  const o = Dt(a);
  if (ru(a)) return o;
  if (!tl(a)) {
    let s = Fl(a);
    for (; s && !ya(s); ) {
      if (Zt(s) && !Bo(s)) return s;
      s = Fl(s);
    }
    return o;
  }
  let c = Vh(a, u);
  for (; c && Gb(c) && Bo(c); ) c = Vh(c, u);
  return c && ya(c) && Bo(c) && !ms(c) ? o : c || Yb(a) || o;
}
const Ib = async function (a) {
  const u = this.getOffsetParent || Cv,
    o = this.getDimensions,
    c = await o(a.floating);
  return {
    reference: Pb(a.reference, await u(a.floating), a.strategy),
    floating: { x: 0, y: 0, width: c.width, height: c.height },
  };
};
function ex(a) {
  return Kt(a).direction === "rtl";
}
const tx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Xb,
  getDocumentElement: ll,
  getClippingRect: Fb,
  getOffsetParent: Cv,
  getElementRects: Ib,
  getClientRects: Qb,
  getDimensions: $b,
  getScale: ga,
  isElement: Zt,
  isRTL: ex,
};
function Mv(a, u) {
  return (
    a.x === u.x && a.y === u.y && a.width === u.width && a.height === u.height
  );
}
function lx(a, u) {
  let o = null,
    c;
  const s = ll(a);
  function d() {
    var v;
    clearTimeout(c), (v = o) == null || v.disconnect(), (o = null);
  }
  function h(v, y) {
    v === void 0 && (v = !1), y === void 0 && (y = 1), d();
    const g = a.getBoundingClientRect(),
      { left: b, top: T, width: R, height: z } = g;
    if ((v || u(), !R || !z)) return;
    const H = Zr(T),
      A = Zr(s.clientWidth - (b + R)),
      _ = Zr(s.clientHeight - (T + z)),
      q = Zr(b),
      B = {
        rootMargin: -H + "px " + -A + "px " + -_ + "px " + -q + "px",
        threshold: _t(0, Wl(1, y)) || 1,
      };
    let Z = !0;
    function V(I) {
      const W = I[0].intersectionRatio;
      if (W !== y) {
        if (!Z) return h();
        W
          ? h(!1, W)
          : (c = setTimeout(() => {
              h(!1, 1e-7);
            }, 1e3));
      }
      W === 1 && !Mv(g, a.getBoundingClientRect()) && h(), (Z = !1);
    }
    try {
      o = new IntersectionObserver(V, { ...B, root: s.ownerDocument });
    } catch {
      o = new IntersectionObserver(V, B);
    }
    o.observe(a);
  }
  return h(!0), d;
}
function nx(a, u, o, c) {
  c === void 0 && (c = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: d = !0,
      elementResize: h = typeof ResizeObserver == "function",
      layoutShift: v = typeof IntersectionObserver == "function",
      animationFrame: y = !1,
    } = c,
    g = vs(a),
    b = s || d ? [...(g ? Ri(g) : []), ...Ri(u)] : [];
  b.forEach((q) => {
    s && q.addEventListener("scroll", o, { passive: !0 }),
      d && q.addEventListener("resize", o);
  });
  const T = g && v ? lx(g, o) : null;
  let R = -1,
    z = null;
  h &&
    ((z = new ResizeObserver((q) => {
      let [L] = q;
      L &&
        L.target === g &&
        z &&
        (z.unobserve(u),
        cancelAnimationFrame(R),
        (R = requestAnimationFrame(() => {
          var B;
          (B = z) == null || B.observe(u);
        }))),
        o();
    })),
    g && !y && z.observe(g),
    z.observe(u));
  let H,
    A = y ? wn(a) : null;
  y && _();
  function _() {
    const q = wn(a);
    A && !Mv(A, q) && o(), (A = q), (H = requestAnimationFrame(_));
  }
  return (
    o(),
    () => {
      var q;
      b.forEach((L) => {
        s && L.removeEventListener("scroll", o),
          d && L.removeEventListener("resize", o);
      }),
        T == null || T(),
        (q = z) == null || q.disconnect(),
        (z = null),
        y && cancelAnimationFrame(H);
    }
  );
}
const ax = Hb,
  ix = Bb,
  rx = zb,
  ux = qb,
  cx = jb,
  Xh = Db,
  ox = Lb,
  sx = (a, u, o) => {
    const c = new Map(),
      s = { platform: tx, ...o },
      d = { ...s.platform, _c: c };
    return _b(a, u, { ...s, platform: d });
  };
var $r = typeof document < "u" ? E.useLayoutEffect : E.useEffect;
function nu(a, u) {
  if (a === u) return !0;
  if (typeof a != typeof u) return !1;
  if (typeof a == "function" && a.toString() === u.toString()) return !0;
  let o, c, s;
  if (a && u && typeof a == "object") {
    if (Array.isArray(a)) {
      if (((o = a.length), o !== u.length)) return !1;
      for (c = o; c-- !== 0; ) if (!nu(a[c], u[c])) return !1;
      return !0;
    }
    if (((s = Object.keys(a)), (o = s.length), o !== Object.keys(u).length))
      return !1;
    for (c = o; c-- !== 0; ) if (!{}.hasOwnProperty.call(u, s[c])) return !1;
    for (c = o; c-- !== 0; ) {
      const d = s[c];
      if (!(d === "_owner" && a.$$typeof) && !nu(a[d], u[d])) return !1;
    }
    return !0;
  }
  return a !== a && u !== u;
}
function _v(a) {
  return typeof window > "u"
    ? 1
    : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qh(a, u) {
  const o = _v(a);
  return Math.round(u * o) / o;
}
function Lo(a) {
  const u = E.useRef(a);
  return (
    $r(() => {
      u.current = a;
    }),
    u
  );
}
function fx(a) {
  a === void 0 && (a = {});
  const {
      placement: u = "bottom",
      strategy: o = "absolute",
      middleware: c = [],
      platform: s,
      elements: { reference: d, floating: h } = {},
      transform: v = !0,
      whileElementsMounted: y,
      open: g,
    } = a,
    [b, T] = E.useState({
      x: 0,
      y: 0,
      strategy: o,
      placement: u,
      middlewareData: {},
      isPositioned: !1,
    }),
    [R, z] = E.useState(c);
  nu(R, c) || z(c);
  const [H, A] = E.useState(null),
    [_, q] = E.useState(null),
    L = E.useCallback((U) => {
      U !== I.current && ((I.current = U), A(U));
    }, []),
    B = E.useCallback((U) => {
      U !== W.current && ((W.current = U), q(U));
    }, []),
    Z = d || H,
    V = h || _,
    I = E.useRef(null),
    W = E.useRef(null),
    K = E.useRef(b),
    oe = y != null,
    ve = Lo(y),
    be = Lo(s),
    de = Lo(g),
    ge = E.useCallback(() => {
      if (!I.current || !W.current) return;
      const U = { placement: u, strategy: o, middleware: R };
      be.current && (U.platform = be.current),
        sx(I.current, W.current, U).then((ne) => {
          const S = { ...ne, isPositioned: de.current !== !1 };
          xe.current &&
            !nu(K.current, S) &&
            ((K.current = S),
            Oi.flushSync(() => {
              T(S);
            }));
        });
    }, [R, u, o, be, de]);
  $r(() => {
    g === !1 &&
      K.current.isPositioned &&
      ((K.current.isPositioned = !1), T((U) => ({ ...U, isPositioned: !1 })));
  }, [g]);
  const xe = E.useRef(!1);
  $r(
    () => (
      (xe.current = !0),
      () => {
        xe.current = !1;
      }
    ),
    []
  ),
    $r(() => {
      if ((Z && (I.current = Z), V && (W.current = V), Z && V)) {
        if (ve.current) return ve.current(Z, V, ge);
        ge();
      }
    }, [Z, V, ge, ve, oe]);
  const ue = E.useMemo(
      () => ({ reference: I, floating: W, setReference: L, setFloating: B }),
      [L, B]
    ),
    C = E.useMemo(() => ({ reference: Z, floating: V }), [Z, V]),
    Q = E.useMemo(() => {
      const U = { position: o, left: 0, top: 0 };
      if (!C.floating) return U;
      const ne = Qh(C.floating, b.x),
        S = Qh(C.floating, b.y);
      return v
        ? {
            ...U,
            transform: "translate(" + ne + "px, " + S + "px)",
            ...(_v(C.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: o, left: ne, top: S };
    }, [o, v, C.floating, b.x, b.y]);
  return E.useMemo(
    () => ({ ...b, update: ge, refs: ue, elements: C, floatingStyles: Q }),
    [b, ge, ue, C, Q]
  );
}
const dx = (a) => {
    function u(o) {
      return {}.hasOwnProperty.call(o, "current");
    }
    return {
      name: "arrow",
      options: a,
      fn(o) {
        const { element: c, padding: s } = typeof a == "function" ? a(o) : a;
        return c && u(c)
          ? c.current != null
            ? Xh({ element: c.current, padding: s }).fn(o)
            : {}
          : c
          ? Xh({ element: c, padding: s }).fn(o)
          : {};
      },
    };
  },
  mx = (a, u) => ({ ...ax(a), options: [a, u] }),
  hx = (a, u) => ({ ...ix(a), options: [a, u] }),
  vx = (a, u) => ({ ...ox(a), options: [a, u] }),
  gx = (a, u) => ({ ...rx(a), options: [a, u] }),
  px = (a, u) => ({ ...ux(a), options: [a, u] }),
  yx = (a, u) => ({ ...cx(a), options: [a, u] }),
  bx = (a, u) => ({ ...dx(a), options: [a, u] });
var xx = "Arrow",
  Dv = E.forwardRef((a, u) => {
    const { children: o, width: c = 10, height: s = 5, ...d } = a;
    return p.jsx(Ve.svg, {
      ...d,
      ref: u,
      width: c,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: a.asChild ? o : p.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Dv.displayName = xx;
var Sx = Dv;
function Ex(a) {
  const [u, o] = E.useState(void 0);
  return (
    St(() => {
      if (a) {
        o({ width: a.offsetWidth, height: a.offsetHeight });
        const c = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const d = s[0];
          let h, v;
          if ("borderBoxSize" in d) {
            const y = d.borderBoxSize,
              g = Array.isArray(y) ? y[0] : y;
            (h = g.inlineSize), (v = g.blockSize);
          } else (h = a.offsetWidth), (v = a.offsetHeight);
          o({ width: h, height: v });
        });
        return c.observe(a, { box: "border-box" }), () => c.unobserve(a);
      } else o(void 0);
    }, [a]),
    u
  );
}
var ps = "Popper",
  [zv, jv] = cs(ps),
  [Ax, Uv] = zv(ps),
  Hv = (a) => {
    const { __scopePopper: u, children: o } = a,
      [c, s] = E.useState(null);
    return p.jsx(Ax, { scope: u, anchor: c, onAnchorChange: s, children: o });
  };
Hv.displayName = ps;
var Bv = "PopperAnchor",
  Lv = E.forwardRef((a, u) => {
    const { __scopePopper: o, virtualRef: c, ...s } = a,
      d = Uv(Bv, o),
      h = E.useRef(null),
      v = lt(u, h);
    return (
      E.useEffect(() => {
        d.onAnchorChange((c == null ? void 0 : c.current) || h.current);
      }),
      c ? null : p.jsx(Ve.div, { ...s, ref: v })
    );
  });
Lv.displayName = Bv;
var ys = "PopperContent",
  [wx, Tx] = zv(ys),
  qv = E.forwardRef((a, u) => {
    var $, re, Me, Ne, Ee, Ae;
    const {
        __scopePopper: o,
        side: c = "bottom",
        sideOffset: s = 0,
        align: d = "center",
        alignOffset: h = 0,
        arrowPadding: v = 0,
        avoidCollisions: y = !0,
        collisionBoundary: g = [],
        collisionPadding: b = 0,
        sticky: T = "partial",
        hideWhenDetached: R = !1,
        updatePositionStrategy: z = "optimized",
        onPlaced: H,
        ...A
      } = a,
      _ = Uv(ys, o),
      [q, L] = E.useState(null),
      B = lt(u, (nt) => L(nt)),
      [Z, V] = E.useState(null),
      I = Ex(Z),
      W = (I == null ? void 0 : I.width) ?? 0,
      K = (I == null ? void 0 : I.height) ?? 0,
      oe = c + (d !== "center" ? "-" + d : ""),
      ve =
        typeof b == "number"
          ? b
          : { top: 0, right: 0, bottom: 0, left: 0, ...b },
      be = Array.isArray(g) ? g : [g],
      de = be.length > 0,
      ge = { padding: ve, boundary: be.filter(Rx), altBoundary: de },
      {
        refs: xe,
        floatingStyles: ue,
        placement: C,
        isPositioned: Q,
        middlewareData: U,
      } = fx({
        strategy: "fixed",
        placement: oe,
        whileElementsMounted: (...nt) =>
          nx(...nt, { animationFrame: z === "always" }),
        elements: { reference: _.anchor },
        middleware: [
          mx({ mainAxis: s + K, alignmentAxis: h }),
          y &&
            hx({
              mainAxis: !0,
              crossAxis: !1,
              limiter: T === "partial" ? vx() : void 0,
              ...ge,
            }),
          y && gx({ ...ge }),
          px({
            ...ge,
            apply: ({
              elements: nt,
              rects: ht,
              availableWidth: en,
              availableHeight: tn,
            }) => {
              const { width: ct, height: du } = ht.reference,
                ln = nt.floating.style;
              ln.setProperty("--radix-popper-available-width", `${en}px`),
                ln.setProperty("--radix-popper-available-height", `${tn}px`),
                ln.setProperty("--radix-popper-anchor-width", `${ct}px`),
                ln.setProperty("--radix-popper-anchor-height", `${du}px`);
            },
          }),
          Z && bx({ element: Z, padding: v }),
          Ox({ arrowWidth: W, arrowHeight: K }),
          R && yx({ strategy: "referenceHidden", ...ge }),
        ],
      }),
      [ne, S] = kv(C),
      Y = An(H);
    St(() => {
      Q && (Y == null || Y());
    }, [Q, Y]);
    const F = ($ = U.arrow) == null ? void 0 : $.x,
      J = (re = U.arrow) == null ? void 0 : re.y,
      P = ((Me = U.arrow) == null ? void 0 : Me.centerOffset) !== 0,
      [me, ie] = E.useState();
    return (
      St(() => {
        q && ie(window.getComputedStyle(q).zIndex);
      }, [q]),
      p.jsx("div", {
        ref: xe.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ue,
          transform: Q ? ue.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: me,
          "--radix-popper-transform-origin": [
            (Ne = U.transformOrigin) == null ? void 0 : Ne.x,
            (Ee = U.transformOrigin) == null ? void 0 : Ee.y,
          ].join(" "),
          ...(((Ae = U.hide) == null ? void 0 : Ae.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: a.dir,
        children: p.jsx(wx, {
          scope: o,
          placedSide: ne,
          onArrowChange: V,
          arrowX: F,
          arrowY: J,
          shouldHideArrow: P,
          children: p.jsx(Ve.div, {
            "data-side": ne,
            "data-align": S,
            ...A,
            ref: B,
            style: { ...A.style, animation: Q ? void 0 : "none" },
          }),
        }),
      })
    );
  });
qv.displayName = ys;
var Gv = "PopperArrow",
  Nx = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Yv = E.forwardRef(function (u, o) {
    const { __scopePopper: c, ...s } = u,
      d = Tx(Gv, c),
      h = Nx[d.placedSide];
    return p.jsx("span", {
      ref: d.onArrowChange,
      style: {
        position: "absolute",
        left: d.arrowX,
        top: d.arrowY,
        [h]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[d.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[d.placedSide],
        visibility: d.shouldHideArrow ? "hidden" : void 0,
      },
      children: p.jsx(Sx, {
        ...s,
        ref: o,
        style: { ...s.style, display: "block" },
      }),
    });
  });
Yv.displayName = Gv;
function Rx(a) {
  return a !== null;
}
var Ox = (a) => ({
  name: "transformOrigin",
  options: a,
  fn(u) {
    var _, q, L;
    const { placement: o, rects: c, middlewareData: s } = u,
      h = ((_ = s.arrow) == null ? void 0 : _.centerOffset) !== 0,
      v = h ? 0 : a.arrowWidth,
      y = h ? 0 : a.arrowHeight,
      [g, b] = kv(o),
      T = { start: "0%", center: "50%", end: "100%" }[b],
      R = (((q = s.arrow) == null ? void 0 : q.x) ?? 0) + v / 2,
      z = (((L = s.arrow) == null ? void 0 : L.y) ?? 0) + y / 2;
    let H = "",
      A = "";
    return (
      g === "bottom"
        ? ((H = h ? T : `${R}px`), (A = `${-y}px`))
        : g === "top"
        ? ((H = h ? T : `${R}px`), (A = `${c.floating.height + y}px`))
        : g === "right"
        ? ((H = `${-y}px`), (A = h ? T : `${z}px`))
        : g === "left" &&
          ((H = `${c.floating.width + y}px`), (A = h ? T : `${z}px`)),
      { data: { x: H, y: A } }
    );
  },
});
function kv(a) {
  const [u, o = "center"] = a.split("-");
  return [u, o];
}
var Cx = Hv,
  Mx = Lv,
  _x = qv,
  Dx = Yv,
  zx = "Portal",
  Vv = E.forwardRef((a, u) => {
    var v;
    const { container: o, ...c } = a,
      [s, d] = E.useState(!1);
    St(() => d(!0), []);
    const h =
      o ||
      (s &&
        ((v = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : v.body));
    return h ? Z0.createPortal(p.jsx(Ve.div, { ...c, ref: u }), h) : null;
  });
Vv.displayName = zx;
var jx = lv[" useInsertionEffect ".trim().toString()] || St;
function Zh({ prop: a, defaultProp: u, onChange: o = () => {}, caller: c }) {
  const [s, d, h] = Ux({ defaultProp: u, onChange: o }),
    v = a !== void 0,
    y = v ? a : s;
  {
    const b = E.useRef(a !== void 0);
    E.useEffect(() => {
      const T = b.current;
      T !== v &&
        console.warn(
          `${c} is changing from ${T ? "controlled" : "uncontrolled"} to ${
            v ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (b.current = v);
    }, [v, c]);
  }
  const g = E.useCallback(
    (b) => {
      var T;
      if (v) {
        const R = Hx(b) ? b(a) : b;
        R !== a && ((T = h.current) == null || T.call(h, R));
      } else d(b);
    },
    [v, a, d, h]
  );
  return [y, g];
}
function Ux({ defaultProp: a, onChange: u }) {
  const [o, c] = E.useState(a),
    s = E.useRef(o),
    d = E.useRef(u);
  return (
    jx(() => {
      d.current = u;
    }, [u]),
    E.useEffect(() => {
      var h;
      s.current !== o &&
        ((h = d.current) == null || h.call(d, o), (s.current = o));
    }, [o, s]),
    [o, c, d]
  );
}
function Hx(a) {
  return typeof a == "function";
}
function Bx(a) {
  const u = E.useRef({ value: a, previous: a });
  return E.useMemo(
    () => (
      u.current.value !== a &&
        ((u.current.previous = u.current.value), (u.current.value = a)),
      u.current.previous
    ),
    [a]
  );
}
var Xv = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  Lx = "VisuallyHidden",
  qx = E.forwardRef((a, u) =>
    p.jsx(Ve.span, { ...a, ref: u, style: { ...Xv, ...a.style } })
  );
qx.displayName = Lx;
var Gx = function (a) {
    if (typeof document > "u") return null;
    var u = Array.isArray(a) ? a[0] : a;
    return u.ownerDocument.body;
  },
  ma = new WeakMap(),
  Kr = new WeakMap(),
  Jr = {},
  qo = 0,
  Qv = function (a) {
    return a && (a.host || Qv(a.parentNode));
  },
  Yx = function (a, u) {
    return u
      .map(function (o) {
        if (a.contains(o)) return o;
        var c = Qv(o);
        return c && a.contains(c)
          ? c
          : (console.error(
              "aria-hidden",
              o,
              "in not contained inside",
              a,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (o) {
        return !!o;
      });
  },
  kx = function (a, u, o, c) {
    var s = Yx(u, Array.isArray(a) ? a : [a]);
    Jr[o] || (Jr[o] = new WeakMap());
    var d = Jr[o],
      h = [],
      v = new Set(),
      y = new Set(s),
      g = function (T) {
        !T || v.has(T) || (v.add(T), g(T.parentNode));
      };
    s.forEach(g);
    var b = function (T) {
      !T ||
        y.has(T) ||
        Array.prototype.forEach.call(T.children, function (R) {
          if (v.has(R)) b(R);
          else
            try {
              var z = R.getAttribute(c),
                H = z !== null && z !== "false",
                A = (ma.get(R) || 0) + 1,
                _ = (d.get(R) || 0) + 1;
              ma.set(R, A),
                d.set(R, _),
                h.push(R),
                A === 1 && H && Kr.set(R, !0),
                _ === 1 && R.setAttribute(o, "true"),
                H || R.setAttribute(c, "true");
            } catch (q) {
              console.error("aria-hidden: cannot operate on ", R, q);
            }
        });
    };
    return (
      b(u),
      v.clear(),
      qo++,
      function () {
        h.forEach(function (T) {
          var R = ma.get(T) - 1,
            z = d.get(T) - 1;
          ma.set(T, R),
            d.set(T, z),
            R || (Kr.has(T) || T.removeAttribute(c), Kr.delete(T)),
            z || T.removeAttribute(o);
        }),
          qo--,
          qo ||
            ((ma = new WeakMap()),
            (ma = new WeakMap()),
            (Kr = new WeakMap()),
            (Jr = {}));
      }
    );
  },
  Vx = function (a, u, o) {
    o === void 0 && (o = "data-aria-hidden");
    var c = Array.from(Array.isArray(a) ? a : [a]),
      s = Gx(a);
    return s
      ? (c.push.apply(c, Array.from(s.querySelectorAll("[aria-live]"))),
        kx(c, s, o, "aria-hidden"))
      : function () {
          return null;
        };
  },
  It = function () {
    return (
      (It =
        Object.assign ||
        function (u) {
          for (var o, c = 1, s = arguments.length; c < s; c++) {
            o = arguments[c];
            for (var d in o)
              Object.prototype.hasOwnProperty.call(o, d) && (u[d] = o[d]);
          }
          return u;
        }),
      It.apply(this, arguments)
    );
  };
function Zv(a, u) {
  var o = {};
  for (var c in a)
    Object.prototype.hasOwnProperty.call(a, c) &&
      u.indexOf(c) < 0 &&
      (o[c] = a[c]);
  if (a != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, c = Object.getOwnPropertySymbols(a); s < c.length; s++)
      u.indexOf(c[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(a, c[s]) &&
        (o[c[s]] = a[c[s]]);
  return o;
}
function Xx(a, u, o) {
  if (o || arguments.length === 2)
    for (var c = 0, s = u.length, d; c < s; c++)
      (d || !(c in u)) &&
        (d || (d = Array.prototype.slice.call(u, 0, c)), (d[c] = u[c]));
  return a.concat(d || Array.prototype.slice.call(u));
}
var Pr = "right-scroll-bar-position",
  Ir = "width-before-scroll-bar",
  Qx = "with-scroll-bars-hidden",
  Zx = "--removed-body-scroll-bar-size";
function Go(a, u) {
  return typeof a == "function" ? a(u) : a && (a.current = u), a;
}
function Kx(a, u) {
  var o = E.useState(function () {
    return {
      value: a,
      callback: u,
      facade: {
        get current() {
          return o.value;
        },
        set current(c) {
          var s = o.value;
          s !== c && ((o.value = c), o.callback(c, s));
        },
      },
    };
  })[0];
  return (o.callback = u), o.facade;
}
var Jx = typeof window < "u" ? E.useLayoutEffect : E.useEffect,
  Kh = new WeakMap();
function Wx(a, u) {
  var o = Kx(null, function (c) {
    return a.forEach(function (s) {
      return Go(s, c);
    });
  });
  return (
    Jx(
      function () {
        var c = Kh.get(o);
        if (c) {
          var s = new Set(c),
            d = new Set(a),
            h = o.current;
          s.forEach(function (v) {
            d.has(v) || Go(v, null);
          }),
            d.forEach(function (v) {
              s.has(v) || Go(v, h);
            });
        }
        Kh.set(o, a);
      },
      [a]
    ),
    o
  );
}
function Fx(a) {
  return a;
}
function $x(a, u) {
  u === void 0 && (u = Fx);
  var o = [],
    c = !1,
    s = {
      read: function () {
        if (c)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return o.length ? o[o.length - 1] : a;
      },
      useMedium: function (d) {
        var h = u(d, c);
        return (
          o.push(h),
          function () {
            o = o.filter(function (v) {
              return v !== h;
            });
          }
        );
      },
      assignSyncMedium: function (d) {
        for (c = !0; o.length; ) {
          var h = o;
          (o = []), h.forEach(d);
        }
        o = {
          push: function (v) {
            return d(v);
          },
          filter: function () {
            return o;
          },
        };
      },
      assignMedium: function (d) {
        c = !0;
        var h = [];
        if (o.length) {
          var v = o;
          (o = []), v.forEach(d), (h = o);
        }
        var y = function () {
            var b = h;
            (h = []), b.forEach(d);
          },
          g = function () {
            return Promise.resolve().then(y);
          };
        g(),
          (o = {
            push: function (b) {
              h.push(b), g();
            },
            filter: function (b) {
              return (h = h.filter(b)), o;
            },
          });
      },
    };
  return s;
}
function Px(a) {
  a === void 0 && (a = {});
  var u = $x(null);
  return (u.options = It({ async: !0, ssr: !1 }, a)), u;
}
var Kv = function (a) {
  var u = a.sideCar,
    o = Zv(a, ["sideCar"]);
  if (!u)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var c = u.read();
  if (!c) throw new Error("Sidecar medium not found");
  return E.createElement(c, It({}, o));
};
Kv.isSideCarExport = !0;
function Ix(a, u) {
  return a.useMedium(u), Kv;
}
var Jv = Px(),
  Yo = function () {},
  cu = E.forwardRef(function (a, u) {
    var o = E.useRef(null),
      c = E.useState({
        onScrollCapture: Yo,
        onWheelCapture: Yo,
        onTouchMoveCapture: Yo,
      }),
      s = c[0],
      d = c[1],
      h = a.forwardProps,
      v = a.children,
      y = a.className,
      g = a.removeScrollBar,
      b = a.enabled,
      T = a.shards,
      R = a.sideCar,
      z = a.noIsolation,
      H = a.inert,
      A = a.allowPinchZoom,
      _ = a.as,
      q = _ === void 0 ? "div" : _,
      L = a.gapMode,
      B = Zv(a, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      Z = R,
      V = Wx([o, u]),
      I = It(It({}, B), s);
    return E.createElement(
      E.Fragment,
      null,
      b &&
        E.createElement(Z, {
          sideCar: Jv,
          removeScrollBar: g,
          shards: T,
          noIsolation: z,
          inert: H,
          setCallbacks: d,
          allowPinchZoom: !!A,
          lockRef: o,
          gapMode: L,
        }),
      h
        ? E.cloneElement(E.Children.only(v), It(It({}, I), { ref: V }))
        : E.createElement(q, It({}, I, { className: y, ref: V }), v)
    );
  });
cu.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
cu.classNames = { fullWidth: Ir, zeroRight: Pr };
var eS = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function tS() {
  if (!document) return null;
  var a = document.createElement("style");
  a.type = "text/css";
  var u = eS();
  return u && a.setAttribute("nonce", u), a;
}
function lS(a, u) {
  a.styleSheet
    ? (a.styleSheet.cssText = u)
    : a.appendChild(document.createTextNode(u));
}
function nS(a) {
  var u = document.head || document.getElementsByTagName("head")[0];
  u.appendChild(a);
}
var aS = function () {
    var a = 0,
      u = null;
    return {
      add: function (o) {
        a == 0 && (u = tS()) && (lS(u, o), nS(u)), a++;
      },
      remove: function () {
        a--,
          !a && u && (u.parentNode && u.parentNode.removeChild(u), (u = null));
      },
    };
  },
  iS = function () {
    var a = aS();
    return function (u, o) {
      E.useEffect(
        function () {
          return (
            a.add(u),
            function () {
              a.remove();
            }
          );
        },
        [u && o]
      );
    };
  },
  Wv = function () {
    var a = iS(),
      u = function (o) {
        var c = o.styles,
          s = o.dynamic;
        return a(c, s), null;
      };
    return u;
  },
  rS = { left: 0, top: 0, right: 0, gap: 0 },
  ko = function (a) {
    return parseInt(a || "", 10) || 0;
  },
  uS = function (a) {
    var u = window.getComputedStyle(document.body),
      o = u[a === "padding" ? "paddingLeft" : "marginLeft"],
      c = u[a === "padding" ? "paddingTop" : "marginTop"],
      s = u[a === "padding" ? "paddingRight" : "marginRight"];
    return [ko(o), ko(c), ko(s)];
  },
  cS = function (a) {
    if ((a === void 0 && (a = "margin"), typeof window > "u")) return rS;
    var u = uS(a),
      o = document.documentElement.clientWidth,
      c = window.innerWidth;
    return {
      left: u[0],
      top: u[1],
      right: u[2],
      gap: Math.max(0, c - o + u[2] - u[0]),
    };
  },
  oS = Wv(),
  pa = "data-scroll-locked",
  sS = function (a, u, o, c) {
    var s = a.left,
      d = a.top,
      h = a.right,
      v = a.gap;
    return (
      o === void 0 && (o = "margin"),
      `
  .`
        .concat(
          Qx,
          ` {
   overflow: hidden `
        )
        .concat(
          c,
          `;
   padding-right: `
        )
        .concat(v, "px ")
        .concat(
          c,
          `;
  }
  body[`
        )
        .concat(
          pa,
          `] {
    overflow: hidden `
        )
        .concat(
          c,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            u && "position: relative ".concat(c, ";"),
            o === "margin" &&
              `
    padding-left: `
                .concat(
                  s,
                  `px;
    padding-top: `
                )
                .concat(
                  d,
                  `px;
    padding-right: `
                )
                .concat(
                  h,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(v, "px ")
                .concat(
                  c,
                  `;
    `
                ),
            o === "padding" &&
              "padding-right: ".concat(v, "px ").concat(c, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Pr,
          ` {
    right: `
        )
        .concat(v, "px ")
        .concat(
          c,
          `;
  }
  
  .`
        )
        .concat(
          Ir,
          ` {
    margin-right: `
        )
        .concat(v, "px ")
        .concat(
          c,
          `;
  }
  
  .`
        )
        .concat(Pr, " .")
        .concat(
          Pr,
          ` {
    right: 0 `
        )
        .concat(
          c,
          `;
  }
  
  .`
        )
        .concat(Ir, " .")
        .concat(
          Ir,
          ` {
    margin-right: 0 `
        )
        .concat(
          c,
          `;
  }
  
  body[`
        )
        .concat(
          pa,
          `] {
    `
        )
        .concat(Zx, ": ")
        .concat(
          v,
          `px;
  }
`
        )
    );
  },
  Jh = function () {
    var a = parseInt(document.body.getAttribute(pa) || "0", 10);
    return isFinite(a) ? a : 0;
  },
  fS = function () {
    E.useEffect(function () {
      return (
        document.body.setAttribute(pa, (Jh() + 1).toString()),
        function () {
          var a = Jh() - 1;
          a <= 0
            ? document.body.removeAttribute(pa)
            : document.body.setAttribute(pa, a.toString());
        }
      );
    }, []);
  },
  dS = function (a) {
    var u = a.noRelative,
      o = a.noImportant,
      c = a.gapMode,
      s = c === void 0 ? "margin" : c;
    fS();
    var d = E.useMemo(
      function () {
        return cS(s);
      },
      [s]
    );
    return E.createElement(oS, { styles: sS(d, !u, s, o ? "" : "!important") });
  },
  es = !1;
if (typeof window < "u")
  try {
    var Wr = Object.defineProperty({}, "passive", {
      get: function () {
        return (es = !0), !0;
      },
    });
    window.addEventListener("test", Wr, Wr),
      window.removeEventListener("test", Wr, Wr);
  } catch {
    es = !1;
  }
var ha = es ? { passive: !1 } : !1,
  mS = function (a) {
    return a.tagName === "TEXTAREA";
  },
  Fv = function (a, u) {
    if (!(a instanceof Element)) return !1;
    var o = window.getComputedStyle(a);
    return (
      o[u] !== "hidden" &&
      !(o.overflowY === o.overflowX && !mS(a) && o[u] === "visible")
    );
  },
  hS = function (a) {
    return Fv(a, "overflowY");
  },
  vS = function (a) {
    return Fv(a, "overflowX");
  },
  Wh = function (a, u) {
    var o = u.ownerDocument,
      c = u;
    do {
      typeof ShadowRoot < "u" && c instanceof ShadowRoot && (c = c.host);
      var s = $v(a, c);
      if (s) {
        var d = Pv(a, c),
          h = d[1],
          v = d[2];
        if (h > v) return !0;
      }
      c = c.parentNode;
    } while (c && c !== o.body);
    return !1;
  },
  gS = function (a) {
    var u = a.scrollTop,
      o = a.scrollHeight,
      c = a.clientHeight;
    return [u, o, c];
  },
  pS = function (a) {
    var u = a.scrollLeft,
      o = a.scrollWidth,
      c = a.clientWidth;
    return [u, o, c];
  },
  $v = function (a, u) {
    return a === "v" ? hS(u) : vS(u);
  },
  Pv = function (a, u) {
    return a === "v" ? gS(u) : pS(u);
  },
  yS = function (a, u) {
    return a === "h" && u === "rtl" ? -1 : 1;
  },
  bS = function (a, u, o, c, s) {
    var d = yS(a, window.getComputedStyle(u).direction),
      h = d * c,
      v = o.target,
      y = u.contains(v),
      g = !1,
      b = h > 0,
      T = 0,
      R = 0;
    do {
      var z = Pv(a, v),
        H = z[0],
        A = z[1],
        _ = z[2],
        q = A - _ - d * H;
      (H || q) && $v(a, v) && ((T += q), (R += H)),
        v instanceof ShadowRoot ? (v = v.host) : (v = v.parentNode);
    } while ((!y && v !== document.body) || (y && (u.contains(v) || u === v)));
    return ((b && Math.abs(T) < 1) || (!b && Math.abs(R) < 1)) && (g = !0), g;
  },
  Fr = function (a) {
    return "changedTouches" in a
      ? [a.changedTouches[0].clientX, a.changedTouches[0].clientY]
      : [0, 0];
  },
  Fh = function (a) {
    return [a.deltaX, a.deltaY];
  },
  $h = function (a) {
    return a && "current" in a ? a.current : a;
  },
  xS = function (a, u) {
    return a[0] === u[0] && a[1] === u[1];
  },
  SS = function (a) {
    return `
  .block-interactivity-`
      .concat(
        a,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        a,
        ` {pointer-events: all;}
`
      );
  },
  ES = 0,
  va = [];
function AS(a) {
  var u = E.useRef([]),
    o = E.useRef([0, 0]),
    c = E.useRef(),
    s = E.useState(ES++)[0],
    d = E.useState(Wv)[0],
    h = E.useRef(a);
  E.useEffect(
    function () {
      h.current = a;
    },
    [a]
  ),
    E.useEffect(
      function () {
        if (a.inert) {
          document.body.classList.add("block-interactivity-".concat(s));
          var A = Xx([a.lockRef.current], (a.shards || []).map($h), !0).filter(
            Boolean
          );
          return (
            A.forEach(function (_) {
              return _.classList.add("allow-interactivity-".concat(s));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(s)),
                A.forEach(function (_) {
                  return _.classList.remove("allow-interactivity-".concat(s));
                });
            }
          );
        }
      },
      [a.inert, a.lockRef.current, a.shards]
    );
  var v = E.useCallback(function (A, _) {
      if (
        ("touches" in A && A.touches.length === 2) ||
        (A.type === "wheel" && A.ctrlKey)
      )
        return !h.current.allowPinchZoom;
      var q = Fr(A),
        L = o.current,
        B = "deltaX" in A ? A.deltaX : L[0] - q[0],
        Z = "deltaY" in A ? A.deltaY : L[1] - q[1],
        V,
        I = A.target,
        W = Math.abs(B) > Math.abs(Z) ? "h" : "v";
      if ("touches" in A && W === "h" && I.type === "range") return !1;
      var K = Wh(W, I);
      if (!K) return !0;
      if ((K ? (V = W) : ((V = W === "v" ? "h" : "v"), (K = Wh(W, I))), !K))
        return !1;
      if (
        (!c.current && "changedTouches" in A && (B || Z) && (c.current = V), !V)
      )
        return !0;
      var oe = c.current || V;
      return bS(oe, _, A, oe === "h" ? B : Z);
    }, []),
    y = E.useCallback(function (A) {
      var _ = A;
      if (!(!va.length || va[va.length - 1] !== d)) {
        var q = "deltaY" in _ ? Fh(_) : Fr(_),
          L = u.current.filter(function (V) {
            return (
              V.name === _.type &&
              (V.target === _.target || _.target === V.shadowParent) &&
              xS(V.delta, q)
            );
          })[0];
        if (L && L.should) {
          _.cancelable && _.preventDefault();
          return;
        }
        if (!L) {
          var B = (h.current.shards || [])
              .map($h)
              .filter(Boolean)
              .filter(function (V) {
                return V.contains(_.target);
              }),
            Z = B.length > 0 ? v(_, B[0]) : !h.current.noIsolation;
          Z && _.cancelable && _.preventDefault();
        }
      }
    }, []),
    g = E.useCallback(function (A, _, q, L) {
      var B = { name: A, delta: _, target: q, should: L, shadowParent: wS(q) };
      u.current.push(B),
        setTimeout(function () {
          u.current = u.current.filter(function (Z) {
            return Z !== B;
          });
        }, 1);
    }, []),
    b = E.useCallback(function (A) {
      (o.current = Fr(A)), (c.current = void 0);
    }, []),
    T = E.useCallback(function (A) {
      g(A.type, Fh(A), A.target, v(A, a.lockRef.current));
    }, []),
    R = E.useCallback(function (A) {
      g(A.type, Fr(A), A.target, v(A, a.lockRef.current));
    }, []);
  E.useEffect(function () {
    return (
      va.push(d),
      a.setCallbacks({
        onScrollCapture: T,
        onWheelCapture: T,
        onTouchMoveCapture: R,
      }),
      document.addEventListener("wheel", y, ha),
      document.addEventListener("touchmove", y, ha),
      document.addEventListener("touchstart", b, ha),
      function () {
        (va = va.filter(function (A) {
          return A !== d;
        })),
          document.removeEventListener("wheel", y, ha),
          document.removeEventListener("touchmove", y, ha),
          document.removeEventListener("touchstart", b, ha);
      }
    );
  }, []);
  var z = a.removeScrollBar,
    H = a.inert;
  return E.createElement(
    E.Fragment,
    null,
    H ? E.createElement(d, { styles: SS(s) }) : null,
    z ? E.createElement(dS, { gapMode: a.gapMode }) : null
  );
}
function wS(a) {
  for (var u = null; a !== null; )
    a instanceof ShadowRoot && ((u = a.host), (a = a.host)), (a = a.parentNode);
  return u;
}
const TS = Ix(Jv, AS);
var Iv = E.forwardRef(function (a, u) {
  return E.createElement(cu, It({}, a, { ref: u, sideCar: TS }));
});
Iv.classNames = cu.classNames;
var NS = [" ", "Enter", "ArrowUp", "ArrowDown"],
  RS = [" ", "Enter"],
  Tn = "Select",
  [ou, su, OS] = lb(Tn),
  [Aa, M1] = cs(Tn, [OS, jv]),
  fu = jv(),
  [CS, $l] = Aa(Tn),
  [MS, _S] = Aa(Tn),
  eg = (a) => {
    const {
        __scopeSelect: u,
        children: o,
        open: c,
        defaultOpen: s,
        onOpenChange: d,
        value: h,
        defaultValue: v,
        onValueChange: y,
        dir: g,
        name: b,
        autoComplete: T,
        disabled: R,
        required: z,
        form: H,
      } = a,
      A = fu(u),
      [_, q] = E.useState(null),
      [L, B] = E.useState(null),
      [Z, V] = E.useState(!1),
      I = ab(g),
      [W, K] = Zh({ prop: c, defaultProp: s ?? !1, onChange: d, caller: Tn }),
      [oe, ve] = Zh({ prop: h, defaultProp: v, onChange: y, caller: Tn }),
      be = E.useRef(null),
      de = _ ? H || !!_.closest("form") : !0,
      [ge, xe] = E.useState(new Set()),
      ue = Array.from(ge)
        .map((C) => C.props.value)
        .join(";");
    return p.jsx(Cx, {
      ...A,
      children: p.jsxs(CS, {
        required: z,
        scope: u,
        trigger: _,
        onTriggerChange: q,
        valueNode: L,
        onValueNodeChange: B,
        valueNodeHasChildren: Z,
        onValueNodeHasChildrenChange: V,
        contentId: os(),
        value: oe,
        onValueChange: ve,
        open: W,
        onOpenChange: K,
        dir: I,
        triggerPointerDownPosRef: be,
        disabled: R,
        children: [
          p.jsx(ou.Provider, {
            scope: u,
            children: p.jsx(MS, {
              scope: a.__scopeSelect,
              onNativeOptionAdd: E.useCallback((C) => {
                xe((Q) => new Set(Q).add(C));
              }, []),
              onNativeOptionRemove: E.useCallback((C) => {
                xe((Q) => {
                  const U = new Set(Q);
                  return U.delete(C), U;
                });
              }, []),
              children: o,
            }),
          }),
          de
            ? p.jsxs(
                Eg,
                {
                  "aria-hidden": !0,
                  required: z,
                  tabIndex: -1,
                  name: b,
                  autoComplete: T,
                  value: oe,
                  onChange: (C) => ve(C.target.value),
                  disabled: R,
                  form: H,
                  children: [
                    oe === void 0 ? p.jsx("option", { value: "" }) : null,
                    Array.from(ge),
                  ],
                },
                ue
              )
            : null,
        ],
      }),
    });
  };
eg.displayName = Tn;
var tg = "SelectTrigger",
  lg = E.forwardRef((a, u) => {
    const { __scopeSelect: o, disabled: c = !1, ...s } = a,
      d = fu(o),
      h = $l(tg, o),
      v = h.disabled || c,
      y = lt(u, h.onTriggerChange),
      g = su(o),
      b = E.useRef("touch"),
      [T, R, z] = wg((A) => {
        const _ = g().filter((B) => !B.disabled),
          q = _.find((B) => B.value === h.value),
          L = Tg(_, A, q);
        L !== void 0 && h.onValueChange(L.value);
      }),
      H = (A) => {
        v || (h.onOpenChange(!0), z()),
          A &&
            (h.triggerPointerDownPosRef.current = {
              x: Math.round(A.pageX),
              y: Math.round(A.pageY),
            });
      };
    return p.jsx(Mx, {
      asChild: !0,
      ...d,
      children: p.jsx(Ve.button, {
        type: "button",
        role: "combobox",
        "aria-controls": h.contentId,
        "aria-expanded": h.open,
        "aria-required": h.required,
        "aria-autocomplete": "none",
        dir: h.dir,
        "data-state": h.open ? "open" : "closed",
        disabled: v,
        "data-disabled": v ? "" : void 0,
        "data-placeholder": Ag(h.value) ? "" : void 0,
        ...s,
        ref: y,
        onClick: Je(s.onClick, (A) => {
          A.currentTarget.focus(), b.current !== "mouse" && H(A);
        }),
        onPointerDown: Je(s.onPointerDown, (A) => {
          b.current = A.pointerType;
          const _ = A.target;
          _.hasPointerCapture(A.pointerId) &&
            _.releasePointerCapture(A.pointerId),
            A.button === 0 &&
              A.ctrlKey === !1 &&
              A.pointerType === "mouse" &&
              (H(A), A.preventDefault());
        }),
        onKeyDown: Je(s.onKeyDown, (A) => {
          const _ = T.current !== "";
          !(A.ctrlKey || A.altKey || A.metaKey) &&
            A.key.length === 1 &&
            R(A.key),
            !(_ && A.key === " ") &&
              NS.includes(A.key) &&
              (H(), A.preventDefault());
        }),
      }),
    });
  });
lg.displayName = tg;
var ng = "SelectValue",
  ag = E.forwardRef((a, u) => {
    const {
        __scopeSelect: o,
        className: c,
        style: s,
        children: d,
        placeholder: h = "",
        ...v
      } = a,
      y = $l(ng, o),
      { onValueNodeHasChildrenChange: g } = y,
      b = d !== void 0,
      T = lt(u, y.onValueNodeChange);
    return (
      St(() => {
        g(b);
      }, [g, b]),
      p.jsx(Ve.span, {
        ...v,
        ref: T,
        style: { pointerEvents: "none" },
        children: Ag(y.value) ? p.jsx(p.Fragment, { children: h }) : d,
      })
    );
  });
ag.displayName = ng;
var DS = "SelectIcon",
  ig = E.forwardRef((a, u) => {
    const { __scopeSelect: o, children: c, ...s } = a;
    return p.jsx(Ve.span, {
      "aria-hidden": !0,
      ...s,
      ref: u,
      children: c || "▼",
    });
  });
ig.displayName = DS;
var zS = "SelectPortal",
  rg = (a) => p.jsx(Vv, { asChild: !0, ...a });
rg.displayName = zS;
var Nn = "SelectContent",
  ug = E.forwardRef((a, u) => {
    const o = $l(Nn, a.__scopeSelect),
      [c, s] = E.useState();
    if (
      (St(() => {
        s(new DocumentFragment());
      }, []),
      !o.open)
    ) {
      const d = c;
      return d
        ? Oi.createPortal(
            p.jsx(cg, {
              scope: a.__scopeSelect,
              children: p.jsx(ou.Slot, {
                scope: a.__scopeSelect,
                children: p.jsx("div", { children: a.children }),
              }),
            }),
            d
          )
        : null;
    }
    return p.jsx(og, { ...a, ref: u });
  });
ug.displayName = Nn;
var Qt = 10,
  [cg, Pl] = Aa(Nn),
  jS = "SelectContentImpl",
  US = Ti("SelectContent.RemoveScroll"),
  og = E.forwardRef((a, u) => {
    const {
        __scopeSelect: o,
        position: c = "item-aligned",
        onCloseAutoFocus: s,
        onEscapeKeyDown: d,
        onPointerDownOutside: h,
        side: v,
        sideOffset: y,
        align: g,
        alignOffset: b,
        arrowPadding: T,
        collisionBoundary: R,
        collisionPadding: z,
        sticky: H,
        hideWhenDetached: A,
        avoidCollisions: _,
        ...q
      } = a,
      L = $l(Nn, o),
      [B, Z] = E.useState(null),
      [V, I] = E.useState(null),
      W = lt(u, ($) => Z($)),
      [K, oe] = E.useState(null),
      [ve, be] = E.useState(null),
      de = su(o),
      [ge, xe] = E.useState(!1),
      ue = E.useRef(!1);
    E.useEffect(() => {
      if (B) return Vx(B);
    }, [B]),
      mb();
    const C = E.useCallback(
        ($) => {
          const [re, ...Me] = de().map((Ae) => Ae.ref.current),
            [Ne] = Me.slice(-1),
            Ee = document.activeElement;
          for (const Ae of $)
            if (
              Ae === Ee ||
              (Ae == null || Ae.scrollIntoView({ block: "nearest" }),
              Ae === re && V && (V.scrollTop = 0),
              Ae === Ne && V && (V.scrollTop = V.scrollHeight),
              Ae == null || Ae.focus(),
              document.activeElement !== Ee)
            )
              return;
        },
        [de, V]
      ),
      Q = E.useCallback(() => C([K, B]), [C, K, B]);
    E.useEffect(() => {
      ge && Q();
    }, [ge, Q]);
    const { onOpenChange: U, triggerPointerDownPosRef: ne } = L;
    E.useEffect(() => {
      if (B) {
        let $ = { x: 0, y: 0 };
        const re = (Ne) => {
            var Ee, Ae;
            $ = {
              x: Math.abs(
                Math.round(Ne.pageX) -
                  (((Ee = ne.current) == null ? void 0 : Ee.x) ?? 0)
              ),
              y: Math.abs(
                Math.round(Ne.pageY) -
                  (((Ae = ne.current) == null ? void 0 : Ae.y) ?? 0)
              ),
            };
          },
          Me = (Ne) => {
            $.x <= 10 && $.y <= 10
              ? Ne.preventDefault()
              : B.contains(Ne.target) || U(!1),
              document.removeEventListener("pointermove", re),
              (ne.current = null);
          };
        return (
          ne.current !== null &&
            (document.addEventListener("pointermove", re),
            document.addEventListener("pointerup", Me, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", re),
              document.removeEventListener("pointerup", Me, { capture: !0 });
          }
        );
      }
    }, [B, U, ne]),
      E.useEffect(() => {
        const $ = () => U(!1);
        return (
          window.addEventListener("blur", $),
          window.addEventListener("resize", $),
          () => {
            window.removeEventListener("blur", $),
              window.removeEventListener("resize", $);
          }
        );
      }, [U]);
    const [S, Y] = wg(($) => {
        const re = de().filter((Ee) => !Ee.disabled),
          Me = re.find((Ee) => Ee.ref.current === document.activeElement),
          Ne = Tg(re, $, Me);
        Ne && setTimeout(() => Ne.ref.current.focus());
      }),
      F = E.useCallback(
        ($, re, Me) => {
          const Ne = !ue.current && !Me;
          ((L.value !== void 0 && L.value === re) || Ne) &&
            (oe($), Ne && (ue.current = !0));
        },
        [L.value]
      ),
      J = E.useCallback(() => (B == null ? void 0 : B.focus()), [B]),
      P = E.useCallback(
        ($, re, Me) => {
          const Ne = !ue.current && !Me;
          ((L.value !== void 0 && L.value === re) || Ne) && be($);
        },
        [L.value]
      ),
      me = c === "popper" ? ts : sg,
      ie =
        me === ts
          ? {
              side: v,
              sideOffset: y,
              align: g,
              alignOffset: b,
              arrowPadding: T,
              collisionBoundary: R,
              collisionPadding: z,
              sticky: H,
              hideWhenDetached: A,
              avoidCollisions: _,
            }
          : {};
    return p.jsx(cg, {
      scope: o,
      content: B,
      viewport: V,
      onViewportChange: I,
      itemRefCallback: F,
      selectedItem: K,
      onItemLeave: J,
      itemTextRefCallback: P,
      focusSelectedItem: Q,
      selectedItemText: ve,
      position: c,
      isPositioned: ge,
      searchRef: S,
      children: p.jsx(Iv, {
        as: US,
        allowPinchZoom: !0,
        children: p.jsx(xv, {
          asChild: !0,
          trapped: L.open,
          onMountAutoFocus: ($) => {
            $.preventDefault();
          },
          onUnmountAutoFocus: Je(s, ($) => {
            var re;
            (re = L.trigger) == null || re.focus({ preventScroll: !0 }),
              $.preventDefault();
          }),
          children: p.jsx(yv, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: d,
            onPointerDownOutside: h,
            onFocusOutside: ($) => $.preventDefault(),
            onDismiss: () => L.onOpenChange(!1),
            children: p.jsx(me, {
              role: "listbox",
              id: L.contentId,
              "data-state": L.open ? "open" : "closed",
              dir: L.dir,
              onContextMenu: ($) => $.preventDefault(),
              ...q,
              ...ie,
              onPlaced: () => xe(!0),
              ref: W,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...q.style,
              },
              onKeyDown: Je(q.onKeyDown, ($) => {
                const re = $.ctrlKey || $.altKey || $.metaKey;
                if (
                  ($.key === "Tab" && $.preventDefault(),
                  !re && $.key.length === 1 && Y($.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes($.key))
                ) {
                  let Ne = de()
                    .filter((Ee) => !Ee.disabled)
                    .map((Ee) => Ee.ref.current);
                  if (
                    (["ArrowUp", "End"].includes($.key) &&
                      (Ne = Ne.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes($.key))
                  ) {
                    const Ee = $.target,
                      Ae = Ne.indexOf(Ee);
                    Ne = Ne.slice(Ae + 1);
                  }
                  setTimeout(() => C(Ne)), $.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
og.displayName = jS;
var HS = "SelectItemAlignedPosition",
  sg = E.forwardRef((a, u) => {
    const { __scopeSelect: o, onPlaced: c, ...s } = a,
      d = $l(Nn, o),
      h = Pl(Nn, o),
      [v, y] = E.useState(null),
      [g, b] = E.useState(null),
      T = lt(u, (W) => b(W)),
      R = su(o),
      z = E.useRef(!1),
      H = E.useRef(!0),
      {
        viewport: A,
        selectedItem: _,
        selectedItemText: q,
        focusSelectedItem: L,
      } = h,
      B = E.useCallback(() => {
        if (d.trigger && d.valueNode && v && g && A && _ && q) {
          const W = d.trigger.getBoundingClientRect(),
            K = g.getBoundingClientRect(),
            oe = d.valueNode.getBoundingClientRect(),
            ve = q.getBoundingClientRect();
          if (d.dir !== "rtl") {
            const Ee = ve.left - K.left,
              Ae = oe.left - Ee,
              nt = W.left - Ae,
              ht = W.width + nt,
              en = Math.max(ht, K.width),
              tn = window.innerWidth - Qt,
              ct = Mh(Ae, [Qt, Math.max(Qt, tn - en)]);
            (v.style.minWidth = ht + "px"), (v.style.left = ct + "px");
          } else {
            const Ee = K.right - ve.right,
              Ae = window.innerWidth - oe.right - Ee,
              nt = window.innerWidth - W.right - Ae,
              ht = W.width + nt,
              en = Math.max(ht, K.width),
              tn = window.innerWidth - Qt,
              ct = Mh(Ae, [Qt, Math.max(Qt, tn - en)]);
            (v.style.minWidth = ht + "px"), (v.style.right = ct + "px");
          }
          const be = R(),
            de = window.innerHeight - Qt * 2,
            ge = A.scrollHeight,
            xe = window.getComputedStyle(g),
            ue = parseInt(xe.borderTopWidth, 10),
            C = parseInt(xe.paddingTop, 10),
            Q = parseInt(xe.borderBottomWidth, 10),
            U = parseInt(xe.paddingBottom, 10),
            ne = ue + C + ge + U + Q,
            S = Math.min(_.offsetHeight * 5, ne),
            Y = window.getComputedStyle(A),
            F = parseInt(Y.paddingTop, 10),
            J = parseInt(Y.paddingBottom, 10),
            P = W.top + W.height / 2 - Qt,
            me = de - P,
            ie = _.offsetHeight / 2,
            $ = _.offsetTop + ie,
            re = ue + C + $,
            Me = ne - re;
          if (re <= P) {
            const Ee = be.length > 0 && _ === be[be.length - 1].ref.current;
            v.style.bottom = "0px";
            const Ae = g.clientHeight - A.offsetTop - A.offsetHeight,
              nt = Math.max(me, ie + (Ee ? J : 0) + Ae + Q),
              ht = re + nt;
            v.style.height = ht + "px";
          } else {
            const Ee = be.length > 0 && _ === be[0].ref.current;
            v.style.top = "0px";
            const nt = Math.max(P, ue + A.offsetTop + (Ee ? F : 0) + ie) + Me;
            (v.style.height = nt + "px"), (A.scrollTop = re - P + A.offsetTop);
          }
          (v.style.margin = `${Qt}px 0`),
            (v.style.minHeight = S + "px"),
            (v.style.maxHeight = de + "px"),
            c == null || c(),
            requestAnimationFrame(() => (z.current = !0));
        }
      }, [R, d.trigger, d.valueNode, v, g, A, _, q, d.dir, c]);
    St(() => B(), [B]);
    const [Z, V] = E.useState();
    St(() => {
      g && V(window.getComputedStyle(g).zIndex);
    }, [g]);
    const I = E.useCallback(
      (W) => {
        W && H.current === !0 && (B(), L == null || L(), (H.current = !1));
      },
      [B, L]
    );
    return p.jsx(LS, {
      scope: o,
      contentWrapper: v,
      shouldExpandOnScrollRef: z,
      onScrollButtonChange: I,
      children: p.jsx("div", {
        ref: y,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: Z,
        },
        children: p.jsx(Ve.div, {
          ...s,
          ref: T,
          style: { boxSizing: "border-box", maxHeight: "100%", ...s.style },
        }),
      }),
    });
  });
sg.displayName = HS;
var BS = "SelectPopperPosition",
  ts = E.forwardRef((a, u) => {
    const {
        __scopeSelect: o,
        align: c = "start",
        collisionPadding: s = Qt,
        ...d
      } = a,
      h = fu(o);
    return p.jsx(_x, {
      ...h,
      ...d,
      ref: u,
      align: c,
      collisionPadding: s,
      style: {
        boxSizing: "border-box",
        ...d.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
ts.displayName = BS;
var [LS, bs] = Aa(Nn, {}),
  ls = "SelectViewport",
  fg = E.forwardRef((a, u) => {
    const { __scopeSelect: o, nonce: c, ...s } = a,
      d = Pl(ls, o),
      h = bs(ls, o),
      v = lt(u, d.onViewportChange),
      y = E.useRef(0);
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: c,
        }),
        p.jsx(ou.Slot, {
          scope: o,
          children: p.jsx(Ve.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...s,
            ref: v,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...s.style,
            },
            onScroll: Je(s.onScroll, (g) => {
              const b = g.currentTarget,
                { contentWrapper: T, shouldExpandOnScrollRef: R } = h;
              if (R != null && R.current && T) {
                const z = Math.abs(y.current - b.scrollTop);
                if (z > 0) {
                  const H = window.innerHeight - Qt * 2,
                    A = parseFloat(T.style.minHeight),
                    _ = parseFloat(T.style.height),
                    q = Math.max(A, _);
                  if (q < H) {
                    const L = q + z,
                      B = Math.min(H, L),
                      Z = L - B;
                    (T.style.height = B + "px"),
                      T.style.bottom === "0px" &&
                        ((b.scrollTop = Z > 0 ? Z : 0),
                        (T.style.justifyContent = "flex-end"));
                  }
                }
              }
              y.current = b.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
fg.displayName = ls;
var dg = "SelectGroup",
  [qS, GS] = Aa(dg),
  YS = E.forwardRef((a, u) => {
    const { __scopeSelect: o, ...c } = a,
      s = os();
    return p.jsx(qS, {
      scope: o,
      id: s,
      children: p.jsx(Ve.div, {
        role: "group",
        "aria-labelledby": s,
        ...c,
        ref: u,
      }),
    });
  });
YS.displayName = dg;
var mg = "SelectLabel",
  kS = E.forwardRef((a, u) => {
    const { __scopeSelect: o, ...c } = a,
      s = GS(mg, o);
    return p.jsx(Ve.div, { id: s.id, ...c, ref: u });
  });
kS.displayName = mg;
var au = "SelectItem",
  [VS, hg] = Aa(au),
  vg = E.forwardRef((a, u) => {
    const {
        __scopeSelect: o,
        value: c,
        disabled: s = !1,
        textValue: d,
        ...h
      } = a,
      v = $l(au, o),
      y = Pl(au, o),
      g = v.value === c,
      [b, T] = E.useState(d ?? ""),
      [R, z] = E.useState(!1),
      H = lt(u, (L) => {
        var B;
        return (B = y.itemRefCallback) == null ? void 0 : B.call(y, L, c, s);
      }),
      A = os(),
      _ = E.useRef("touch"),
      q = () => {
        s || (v.onValueChange(c), v.onOpenChange(!1));
      };
    if (c === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return p.jsx(VS, {
      scope: o,
      value: c,
      disabled: s,
      textId: A,
      isSelected: g,
      onItemTextChange: E.useCallback((L) => {
        T((B) => B || ((L == null ? void 0 : L.textContent) ?? "").trim());
      }, []),
      children: p.jsx(ou.ItemSlot, {
        scope: o,
        value: c,
        disabled: s,
        textValue: b,
        children: p.jsx(Ve.div, {
          role: "option",
          "aria-labelledby": A,
          "data-highlighted": R ? "" : void 0,
          "aria-selected": g && R,
          "data-state": g ? "checked" : "unchecked",
          "aria-disabled": s || void 0,
          "data-disabled": s ? "" : void 0,
          tabIndex: s ? void 0 : -1,
          ...h,
          ref: H,
          onFocus: Je(h.onFocus, () => z(!0)),
          onBlur: Je(h.onBlur, () => z(!1)),
          onClick: Je(h.onClick, () => {
            _.current !== "mouse" && q();
          }),
          onPointerUp: Je(h.onPointerUp, () => {
            _.current === "mouse" && q();
          }),
          onPointerDown: Je(h.onPointerDown, (L) => {
            _.current = L.pointerType;
          }),
          onPointerMove: Je(h.onPointerMove, (L) => {
            var B;
            (_.current = L.pointerType),
              s
                ? (B = y.onItemLeave) == null || B.call(y)
                : _.current === "mouse" &&
                  L.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: Je(h.onPointerLeave, (L) => {
            var B;
            L.currentTarget === document.activeElement &&
              ((B = y.onItemLeave) == null || B.call(y));
          }),
          onKeyDown: Je(h.onKeyDown, (L) => {
            var Z;
            (((Z = y.searchRef) == null ? void 0 : Z.current) !== "" &&
              L.key === " ") ||
              (RS.includes(L.key) && q(), L.key === " " && L.preventDefault());
          }),
        }),
      }),
    });
  });
vg.displayName = au;
var wi = "SelectItemText",
  gg = E.forwardRef((a, u) => {
    const { __scopeSelect: o, className: c, style: s, ...d } = a,
      h = $l(wi, o),
      v = Pl(wi, o),
      y = hg(wi, o),
      g = _S(wi, o),
      [b, T] = E.useState(null),
      R = lt(
        u,
        (q) => T(q),
        y.onItemTextChange,
        (q) => {
          var L;
          return (L = v.itemTextRefCallback) == null
            ? void 0
            : L.call(v, q, y.value, y.disabled);
        }
      ),
      z = b == null ? void 0 : b.textContent,
      H = E.useMemo(
        () =>
          p.jsx(
            "option",
            { value: y.value, disabled: y.disabled, children: z },
            y.value
          ),
        [y.disabled, y.value, z]
      ),
      { onNativeOptionAdd: A, onNativeOptionRemove: _ } = g;
    return (
      St(() => (A(H), () => _(H)), [A, _, H]),
      p.jsxs(p.Fragment, {
        children: [
          p.jsx(Ve.span, { id: y.textId, ...d, ref: R }),
          y.isSelected && h.valueNode && !h.valueNodeHasChildren
            ? Oi.createPortal(d.children, h.valueNode)
            : null,
        ],
      })
    );
  });
gg.displayName = wi;
var pg = "SelectItemIndicator",
  yg = E.forwardRef((a, u) => {
    const { __scopeSelect: o, ...c } = a;
    return hg(pg, o).isSelected
      ? p.jsx(Ve.span, { "aria-hidden": !0, ...c, ref: u })
      : null;
  });
yg.displayName = pg;
var ns = "SelectScrollUpButton",
  bg = E.forwardRef((a, u) => {
    const o = Pl(ns, a.__scopeSelect),
      c = bs(ns, a.__scopeSelect),
      [s, d] = E.useState(!1),
      h = lt(u, c.onScrollButtonChange);
    return (
      St(() => {
        if (o.viewport && o.isPositioned) {
          let v = function () {
            const g = y.scrollTop > 0;
            d(g);
          };
          const y = o.viewport;
          return (
            v(),
            y.addEventListener("scroll", v),
            () => y.removeEventListener("scroll", v)
          );
        }
      }, [o.viewport, o.isPositioned]),
      s
        ? p.jsx(Sg, {
            ...a,
            ref: h,
            onAutoScroll: () => {
              const { viewport: v, selectedItem: y } = o;
              v && y && (v.scrollTop = v.scrollTop - y.offsetHeight);
            },
          })
        : null
    );
  });
bg.displayName = ns;
var as = "SelectScrollDownButton",
  xg = E.forwardRef((a, u) => {
    const o = Pl(as, a.__scopeSelect),
      c = bs(as, a.__scopeSelect),
      [s, d] = E.useState(!1),
      h = lt(u, c.onScrollButtonChange);
    return (
      St(() => {
        if (o.viewport && o.isPositioned) {
          let v = function () {
            const g = y.scrollHeight - y.clientHeight,
              b = Math.ceil(y.scrollTop) < g;
            d(b);
          };
          const y = o.viewport;
          return (
            v(),
            y.addEventListener("scroll", v),
            () => y.removeEventListener("scroll", v)
          );
        }
      }, [o.viewport, o.isPositioned]),
      s
        ? p.jsx(Sg, {
            ...a,
            ref: h,
            onAutoScroll: () => {
              const { viewport: v, selectedItem: y } = o;
              v && y && (v.scrollTop = v.scrollTop + y.offsetHeight);
            },
          })
        : null
    );
  });
xg.displayName = as;
var Sg = E.forwardRef((a, u) => {
    const { __scopeSelect: o, onAutoScroll: c, ...s } = a,
      d = Pl("SelectScrollButton", o),
      h = E.useRef(null),
      v = su(o),
      y = E.useCallback(() => {
        h.current !== null &&
          (window.clearInterval(h.current), (h.current = null));
      }, []);
    return (
      E.useEffect(() => () => y(), [y]),
      St(() => {
        var b;
        const g = v().find((T) => T.ref.current === document.activeElement);
        (b = g == null ? void 0 : g.ref.current) == null ||
          b.scrollIntoView({ block: "nearest" });
      }, [v]),
      p.jsx(Ve.div, {
        "aria-hidden": !0,
        ...s,
        ref: u,
        style: { flexShrink: 0, ...s.style },
        onPointerDown: Je(s.onPointerDown, () => {
          h.current === null && (h.current = window.setInterval(c, 50));
        }),
        onPointerMove: Je(s.onPointerMove, () => {
          var g;
          (g = d.onItemLeave) == null || g.call(d),
            h.current === null && (h.current = window.setInterval(c, 50));
        }),
        onPointerLeave: Je(s.onPointerLeave, () => {
          y();
        }),
      })
    );
  }),
  XS = "SelectSeparator",
  QS = E.forwardRef((a, u) => {
    const { __scopeSelect: o, ...c } = a;
    return p.jsx(Ve.div, { "aria-hidden": !0, ...c, ref: u });
  });
QS.displayName = XS;
var is = "SelectArrow",
  ZS = E.forwardRef((a, u) => {
    const { __scopeSelect: o, ...c } = a,
      s = fu(o),
      d = $l(is, o),
      h = Pl(is, o);
    return d.open && h.position === "popper"
      ? p.jsx(Dx, { ...s, ...c, ref: u })
      : null;
  });
ZS.displayName = is;
var KS = "SelectBubbleInput",
  Eg = E.forwardRef(({ __scopeSelect: a, value: u, ...o }, c) => {
    const s = E.useRef(null),
      d = lt(c, s),
      h = Bx(u);
    return (
      E.useEffect(() => {
        const v = s.current;
        if (!v) return;
        const y = window.HTMLSelectElement.prototype,
          b = Object.getOwnPropertyDescriptor(y, "value").set;
        if (h !== u && b) {
          const T = new Event("change", { bubbles: !0 });
          b.call(v, u), v.dispatchEvent(T);
        }
      }, [h, u]),
      p.jsx(Ve.select, {
        ...o,
        style: { ...Xv, ...o.style },
        ref: d,
        defaultValue: u,
      })
    );
  });
Eg.displayName = KS;
function Ag(a) {
  return a === "" || a === void 0;
}
function wg(a) {
  const u = An(a),
    o = E.useRef(""),
    c = E.useRef(0),
    s = E.useCallback(
      (h) => {
        const v = o.current + h;
        u(v),
          (function y(g) {
            (o.current = g),
              window.clearTimeout(c.current),
              g !== "" && (c.current = window.setTimeout(() => y(""), 1e3));
          })(v);
      },
      [u]
    ),
    d = E.useCallback(() => {
      (o.current = ""), window.clearTimeout(c.current);
    }, []);
  return E.useEffect(() => () => window.clearTimeout(c.current), []), [o, s, d];
}
function Tg(a, u, o) {
  const s = u.length > 1 && Array.from(u).every((g) => g === u[0]) ? u[0] : u,
    d = o ? a.indexOf(o) : -1;
  let h = JS(a, Math.max(d, 0));
  s.length === 1 && (h = h.filter((g) => g !== o));
  const y = h.find((g) =>
    g.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return y !== o ? y : void 0;
}
function JS(a, u) {
  return a.map((o, c) => a[(u + c) % a.length]);
}
var WS = eg,
  FS = lg,
  $S = ag,
  PS = ig,
  IS = rg,
  e1 = ug,
  t1 = fg,
  l1 = vg,
  n1 = gg,
  a1 = yg,
  i1 = bg,
  r1 = xg;
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const u1 = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  c1 = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (u, o, c) =>
      c ? c.toUpperCase() : o.toLowerCase()
    ),
  Ph = (a) => {
    const u = c1(a);
    return u.charAt(0).toUpperCase() + u.slice(1);
  },
  Ng = (...a) =>
    a
      .filter((u, o, c) => !!u && u.trim() !== "" && c.indexOf(u) === o)
      .join(" ")
      .trim(),
  o1 = (a) => {
    for (const u in a)
      if (u.startsWith("aria-") || u === "role" || u === "title") return !0;
  };
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var s1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f1 = E.forwardRef(
  (
    {
      color: a = "currentColor",
      size: u = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: c,
      className: s = "",
      children: d,
      iconNode: h,
      ...v
    },
    y
  ) =>
    E.createElement(
      "svg",
      {
        ref: y,
        ...s1,
        width: u,
        height: u,
        stroke: a,
        strokeWidth: c ? (Number(o) * 24) / Number(u) : o,
        className: Ng("lucide", s),
        ...(!d && !o1(v) && { "aria-hidden": "true" }),
        ...v,
      },
      [
        ...h.map(([g, b]) => E.createElement(g, b)),
        ...(Array.isArray(d) ? d : [d]),
      ]
    )
);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Il = (a, u) => {
  const o = E.forwardRef(({ className: c, ...s }, d) =>
    E.createElement(f1, {
      ref: d,
      iconNode: u,
      className: Ng(`lucide-${u1(Ph(a))}`, `lucide-${a}`, c),
      ...s,
    })
  );
  return (o.displayName = Ph(a)), o;
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const d1 = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  Ih = Il("calendar", d1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const m1 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  h1 = Il("check", m1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v1 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  Rg = Il("chevron-down", v1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g1 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  p1 = Il("chevron-up", g1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y1 = [
    [
      "path",
      {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        key: "1lielz",
      },
    ],
  ],
  b1 = Il("message-square", y1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const x1 = [
    [
      "path",
      {
        d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
        key: "1v9wt8",
      },
    ],
  ],
  S1 = Il("plane", x1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E1 = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  A1 = Il("users", E1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w1 = [
    ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
    ["path", { d: "M7 2v20", key: "1473qp" }],
    [
      "path",
      { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" },
    ],
  ],
  T1 = Il("utensils", w1);
function Vo({ ...a }) {
  return p.jsx(WS, { "data-slot": "select", ...a });
}
function Xo({ ...a }) {
  return p.jsx($S, { "data-slot": "select-value", ...a });
}
function Qo({ className: a, size: u = "default", children: o, ...c }) {
  return p.jsxs(FS, {
    "data-slot": "select-trigger",
    "data-size": u,
    className: xt(
      "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      a
    ),
    ...c,
    children: [
      o,
      p.jsx(PS, {
        asChild: !0,
        children: p.jsx(Rg, { className: "size-4 opacity-50" }),
      }),
    ],
  });
}
function Zo({ className: a, children: u, position: o = "popper", ...c }) {
  return p.jsx(IS, {
    children: p.jsxs(e1, {
      "data-slot": "select-content",
      className: xt(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        o === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        a
      ),
      position: o,
      ...c,
      children: [
        p.jsx(N1, {}),
        p.jsx(t1, {
          className: xt(
            "p-1",
            o === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          ),
          children: u,
        }),
        p.jsx(R1, {}),
      ],
    }),
  });
}
function ut({ className: a, children: u, ...o }) {
  return p.jsxs(l1, {
    "data-slot": "select-item",
    className: xt(
      "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
      a
    ),
    ...o,
    children: [
      p.jsx("span", {
        className: "absolute right-2 flex size-3.5 items-center justify-center",
        children: p.jsx(a1, { children: p.jsx(h1, { className: "size-4" }) }),
      }),
      p.jsx(n1, { children: u }),
    ],
  });
}
function N1({ className: a, ...u }) {
  return p.jsx(i1, {
    "data-slot": "select-scroll-up-button",
    className: xt("flex cursor-default items-center justify-center py-1", a),
    ...u,
    children: p.jsx(p1, { className: "size-4" }),
  });
}
function R1({ className: a, ...u }) {
  return p.jsx(r1, {
    "data-slot": "select-scroll-down-button",
    className: xt("flex cursor-default items-center justify-center py-1", a),
    ...u,
    children: p.jsx(Rg, { className: "size-4" }),
  });
}
const O1 = "/assets/sonesta_pool_hero-Bh9uOX9P.jpg",
  ev = "/assets/fontaine_travel_logo-hzdd6S0q.png";
function C1() {
  const [a, u] = E.useState({
      attendeeName: "",
      guestName: "",
      email: "",
      phone: "",
      attendeeTshirtSize: "",
      guestTshirtSize: "",
      arrivalDate: "",
      arrivalAirline: "",
      arrivalFlightNumber: "",
      arrivalTime: "",
      departureDate: "",
      departureAirline: "",
      departureFlightNumber: "",
      departureTime: "",
      departureAirport: "",
      fridayDinnerAttendee: !1,
      fridayDinnerGuest: !1,
      saturdayScavengerAttendee: !1,
      saturdayScavengerGuest: !1,
      saturdayDinnerAttendee: !1,
      saturdayDinnerGuest: !1,
      foodAllergies: "",
      mobilityIssues: "",
      additionalNotes: "",
      roomType: "",
      checkInDate: "",
      checkOutDate: "",
    }),
    o = (s, d) => {
      u((h) => ({ ...h, [s]: d }));
    },
    c = async (s) => {
      if ((s.preventDefault(), !a.attendeeName || !a.email || !a.phone)) {
        alert(
          "Please fill in all required fields (Attendee Name, Email, Phone)"
        );
        return;
      }
      try {
        const h = await (
          await fetch("/api/booking/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(a),
          })
        ).json();
        h.success
          ? (alert(
              "Thank you for your submission! We will contact you soon to plan your Puerto Rico adventure."
            ),
            u({
              attendeeName: "",
              guestName: "",
              email: "",
              phone: "",
              attendeeTshirtSize: "",
              guestTshirtSize: "",
              arrivalDate: "",
              arrivalAirline: "",
              arrivalFlightNumber: "",
              arrivalTime: "",
              departureDate: "",
              departureAirline: "",
              departureFlightNumber: "",
              departureTime: "",
              departureAirport: "",
              fridayDinnerAttendee: !1,
              fridayDinnerGuest: !1,
              saturdayScavengerAttendee: !1,
              saturdayScavengerGuest: !1,
              saturdayDinnerAttendee: !1,
              saturdayDinnerGuest: !1,
              foodAllergies: "",
              mobilityIssues: "",
              additionalNotes: "",
              roomType: "",
              checkInDate: "",
              checkOutDate: "",
            }))
          : alert(`Error: ${h.message}`);
      } catch (d) {
        console.error("Error submitting form:", d),
          alert(
            "There was an error submitting your request. Please try again."
          );
      }
    };
  return p.jsxs("div", {
    className: "min-h-screen bg-gradient-to-br from-blue-50 to-green-50",
    children: [
      p.jsx("header", {
        className: "bg-white shadow-sm",
        children: p.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
          children: p.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              p.jsx("div", {
                className: "flex items-center space-x-2",
                children: p.jsx("a", {
                  href: "https://www.fontainetravel.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: p.jsx("img", {
                    src: ev,
                    alt: "Fontaine Travel Logo",
                    className: "h-10",
                  }),
                }),
              }),
              p.jsxs("nav", {
                className: "hidden md:flex space-x-8",
                children: [
                  p.jsx("a", {
                    href: "https://www.fontainetravel.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-gray-700 hover:text-blue-600",
                    children: "Home",
                  }),
                  p.jsx("a", {
                    href: "https://www.fontainetravel.com/destinations",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-gray-700 hover:text-blue-600",
                    children: "Destinations",
                  }),
                  p.jsx("a", {
                    href: "https://www.fontainetravel.com/about",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-gray-700 hover:text-blue-600",
                    children: "About",
                  }),
                  p.jsx("a", {
                    href: "https://www.fontainetravel.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-gray-700 hover:text-blue-600",
                    children: "Contact",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      p.jsx("section", {
        className:
          "relative py-32 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat",
        style: {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${O1})`,
        },
        children: p.jsxs("div", {
          className: "max-w-4xl mx-auto text-center",
          children: [
            p.jsx("h2", {
              className: "text-4xl md:text-6xl font-bold text-white mb-6",
              children: p.jsxs("span", {
                className:
                  "bg-gradient-to-r from-blue-300 via-green-300 to-blue-400 bg-clip-text text-transparent",
                children: [
                  "Discover the Magic of",
                  p.jsx("br", {}),
                  "Puerto Rico",
                ],
              }),
            }),
            p.jsxs("p", {
              className: "text-xl text-gray-100 mb-8 max-w-2xl mx-auto",
              children: [
                "Join The Lapine Group team from November 13-16, 2025 at the",
                p.jsx("br", {}),
                "Royal Sonesta San Juan for a few days of business and fun.",
              ],
            }),
            p.jsx(Ch, {
              size: "lg",
              className:
                "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300",
              onClick: () =>
                document
                  .getElementById("booking-form")
                  .scrollIntoView({ behavior: "smooth" }),
              children: "Reserve Your Room Now",
            }),
          ],
        }),
      }),
      p.jsx("section", {
        id: "booking-form",
        className:
          "py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50",
        children: p.jsx("div", {
          className: "max-w-4xl mx-auto",
          children: p.jsxs($0, {
            className: "shadow-2xl border-0",
            children: [
              p.jsx(P0, {
                className:
                  "text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg",
                children: p.jsx(I0, {
                  className: "text-3xl font-bold",
                  children: "Sign up here to reserve your room",
                }),
              }),
              p.jsx(eb, {
                className: "p-8 bg-white",
                children: p.jsxs("form", {
                  onSubmit: c,
                  className: "space-y-8",
                  children: [
                    p.jsxs("div", {
                      className: "text-center mb-8",
                      children: [
                        p.jsx("p", {
                          className: "text-lg text-gray-700 mb-2",
                          children: p.jsx("a", {
                            href: "https://www.sonesta.com/royal-sonesta/pr/carolina/royal-sonesta-san-juan",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "text-blue-600 hover:text-blue-800 underline font-medium",
                            children: "Royal Sonesta San Juan",
                          }),
                        }),
                        p.jsx("p", {
                          className: "text-md text-gray-700 font-medium mb-2",
                          children:
                            "Please make your flight reservations prior to completing this form.",
                        }),
                        p.jsx("p", {
                          className: "text-md text-gray-700 mb-2",
                          children:
                            "Fontaine Travel will make all hotel reservations for travelers.",
                        }),
                        p.jsx("p", {
                          className: "text-md text-gray-700 font-bold",
                          children:
                            "All reservations MUST be booked by October 21, 2025 or reservation is not guaranteed.",
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        p.jsxs("div", {
                          className: "flex items-center space-x-2 mb-4",
                          children: [
                            p.jsx(A1, { className: "h-5 w-5 text-blue-600" }),
                            p.jsx("h3", {
                              className: "text-xl font-semibold text-gray-900",
                              children: "Personal Information",
                            }),
                          ],
                        }),
                        p.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                          children: [
                            p.jsxs("div", {
                              children: [
                                p.jsx(Be, {
                                  htmlFor: "attendeeName",
                                  className: "text-gray-700 font-medium",
                                  children: "Attendee Name *",
                                }),
                                p.jsx(mt, {
                                  id: "attendeeName",
                                  type: "text",
                                  value: a.attendeeName,
                                  onChange: (s) =>
                                    o("attendeeName", s.target.value),
                                  required: !0,
                                  className:
                                    "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                }),
                              ],
                            }),
                            p.jsxs("div", {
                              children: [
                                p.jsx(Be, {
                                  htmlFor: "guestName",
                                  className: "text-gray-700 font-medium",
                                  children: "Guest Name",
                                }),
                                p.jsx(mt, {
                                  id: "guestName",
                                  type: "text",
                                  value: a.guestName,
                                  onChange: (s) =>
                                    o("guestName", s.target.value),
                                  className:
                                    "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                }),
                              ],
                            }),
                          ],
                        }),
                        p.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                          children: [
                            p.jsxs("div", {
                              children: [
                                p.jsx(Be, {
                                  htmlFor: "email",
                                  className: "text-gray-700 font-medium",
                                  children: "Email Address *",
                                }),
                                p.jsx(mt, {
                                  id: "email",
                                  type: "email",
                                  value: a.email,
                                  onChange: (s) => o("email", s.target.value),
                                  required: !0,
                                  className:
                                    "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                }),
                              ],
                            }),
                            p.jsxs("div", {
                              children: [
                                p.jsx(Be, {
                                  htmlFor: "phone",
                                  className: "text-gray-700 font-medium",
                                  children: "Cell Phone Number *",
                                }),
                                p.jsx(mt, {
                                  id: "phone",
                                  type: "tel",
                                  value: a.phone,
                                  onChange: (s) => o("phone", s.target.value),
                                  required: !0,
                                  className:
                                    "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                }),
                              ],
                            }),
                          ],
                        }),
                        p.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                          children: [
                            p.jsxs("div", {
                              children: [
                                p.jsx(Be, {
                                  htmlFor: "attendeeTshirtSize",
                                  className: "text-gray-700 font-medium",
                                  children: "Attendee T-Shirt Size",
                                }),
                                p.jsxs(Vo, {
                                  onValueChange: (s) =>
                                    o("attendeeTshirtSize", s),
                                  children: [
                                    p.jsx(Qo, {
                                      className:
                                        "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                      children: p.jsx(Xo, {
                                        placeholder: "Select t-shirt size",
                                      }),
                                    }),
                                    p.jsxs(Zo, {
                                      children: [
                                        p.jsx(ut, {
                                          value: "xs",
                                          children: "XS",
                                        }),
                                        p.jsx(ut, {
                                          value: "s",
                                          children: "S",
                                        }),
                                        p.jsx(ut, {
                                          value: "m",
                                          children: "M",
                                        }),
                                        p.jsx(ut, {
                                          value: "l",
                                          children: "L",
                                        }),
                                        p.jsx(ut, {
                                          value: "xl",
                                          children: "XL",
                                        }),
                                        p.jsx(ut, {
                                          value: "xxl",
                                          children: "XXL",
                                        }),
                                        p.jsx(ut, {
                                          value: "xxxl",
                                          children: "XXXL",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            p.jsxs("div", {
                              children: [
                                p.jsx(Be, {
                                  htmlFor: "guestTshirtSize",
                                  className: "text-gray-700 font-medium",
                                  children: "Guest T-Shirt Size",
                                }),
                                p.jsxs(Vo, {
                                  onValueChange: (s) => o("guestTshirtSize", s),
                                  children: [
                                    p.jsx(Qo, {
                                      className:
                                        "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                      children: p.jsx(Xo, {
                                        placeholder: "Select t-shirt size",
                                      }),
                                    }),
                                    p.jsxs(Zo, {
                                      children: [
                                        p.jsx(ut, {
                                          value: "xs",
                                          children: "XS",
                                        }),
                                        p.jsx(ut, {
                                          value: "s",
                                          children: "S",
                                        }),
                                        p.jsx(ut, {
                                          value: "m",
                                          children: "M",
                                        }),
                                        p.jsx(ut, {
                                          value: "l",
                                          children: "L",
                                        }),
                                        p.jsx(ut, {
                                          value: "xl",
                                          children: "XL",
                                        }),
                                        p.jsx(ut, {
                                          value: "xxl",
                                          children: "XXL",
                                        }),
                                        p.jsx(ut, {
                                          value: "xxxl",
                                          children: "XXXL",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className: "space-y-6 border-t pt-8",
                      children: [
                        p.jsxs("div", {
                          className: "flex items-center space-x-2 mb-4",
                          children: [
                            p.jsx(S1, { className: "h-5 w-5 text-blue-600" }),
                            p.jsx("h3", {
                              className: "text-xl font-semibold text-gray-900",
                              children: "Flight Information",
                            }),
                          ],
                        }),
                        p.jsx("p", {
                          className: "text-gray-700 mb-6",
                          children:
                            "The Lapine Group will provide group transportation to and from the airport. Information about times and airport location will be shared closer to departure.",
                        }),
                        p.jsxs("div", {
                          className: "bg-green-50 p-6 rounded-lg",
                          children: [
                            p.jsx("h4", {
                              className:
                                "text-lg font-medium text-gray-900 mb-4 flex items-center",
                              children: p.jsx("span", {
                                className: "text-green-600 mr-2",
                                children: "✈️ Arrival Flight",
                              }),
                            }),
                            p.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-4",
                              children: [
                                p.jsxs("div", {
                                  children: [
                                    p.jsx(Be, {
                                      htmlFor: "arrivalDate",
                                      className: "text-gray-700 font-medium",
                                      children: "Arrival Date",
                                    }),
                                    p.jsx(mt, {
                                      id: "arrivalDate",
                                      type: "date",
                                      value: a.arrivalDate,
                                      onChange: (s) =>
                                        o("arrivalDate", s.target.value),
                                      className:
                                        "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                    }),
                                  ],
                                }),
                                p.jsxs("div", {
                                  children: [
                                    p.jsx(Be, {
                                      htmlFor: "arrivalAirline",
                                      className: "text-gray-700 font-medium",
                                      children: "Airline",
                                    }),
                                    p.jsx(mt, {
                                      id: "arrivalAirline",
                                      type: "text",
                                      placeholder:
                                        "e.g., American Airlines, Delta, JetBlue",
                                      value: a.arrivalAirline,
                                      onChange: (s) =>
                                        o("arrivalAirline", s.target.value),
                                      className:
                                        "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                    }),
                                  ],
                                }),
                                p.jsxs("div", {
                                  children: [
                                    p.jsx(Be, {
                                      htmlFor: "arrivalFlightNumber",
                                      className: "text-gray-700 font-medium",
                                      children: "Flight Number",
                                    }),
                                    p.jsx(mt, {
                                      id: "arrivalFlightNumber",
                                      type: "text",
                                      placeholder: "e.g., AA1234, DL567",
                                      value: a.arrivalFlightNumber,
                                      onChange: (s) =>
                                        o(
                                          "arrivalFlightNumber",
                                          s.target.value
                                        ),
                                      className:
                                        "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                    }),
                                  ],
                                }),
                                p.jsxs("div", {
                                  children: [
                                    p.jsx(Be, {
                                      htmlFor: "arrivalTime",
                                      className: "text-gray-700 font-medium",
                                      children: "Arrival Time",
                                    }),
                                    p.jsx(mt, {
                                      id: "arrivalTime",
                                      type: "time",
                                      value: a.arrivalTime,
                                      onChange: (s) =>
                                        o("arrivalTime", s.target.value),
                                      className:
                                        "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        p.jsxs("div", {
                          className: "bg-blue-50 p-6 rounded-lg",
                          children: [
                            p.jsx("h4", {
                              className:
                                "text-lg font-medium text-gray-900 mb-4 flex items-center",
                              children: p.jsx("span", {
                                className: "text-blue-600 mr-2",
                                children: "🛫 Departure Flight",
                              }),
                            }),
                            p.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-4",
                              children: [
                                p.jsxs("div", {
                                  children: [
                                    p.jsx(Be, {
                                      htmlFor: "departureDate",
                                      className: "text-gray-700 font-medium",
                                      children: "Departure Date",
                                    }),
                                    p.jsx(mt, {
                                      id: "departureDate",
                                      type: "date",
                                      value: a.departureDate,
                                      onChange: (s) =>
                                        o("departureDate", s.target.value),
                                      className:
                                        "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                    }),
                                  ],
                                }),
                                p.jsxs("div", {
                                  children: [
                                    p.jsx(Be, {
                                      htmlFor: "departureAirline",
                                      className: "text-gray-700 font-medium",
                                      children: "Airline",
                                    }),
                                    p.jsx(mt, {
                                      id: "departureAirline",
                                      type: "text",
                                      placeholder:
                                        "e.g., American Airlines, Delta, JetBlue",
                                      value: a.departureAirline,
                                      onChange: (s) =>
                                        o("departureAirline", s.target.value),
                                      className:
                                        "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                    }),
                                  ],
                                }),
                                p.jsxs("div", {
                                  children: [
                                    p.jsx(Be, {
                                      htmlFor: "departureFlightNumber",
                                      className: "text-gray-700 font-medium",
                                      children: "Flight Number",
                                    }),
                                    p.jsx(mt, {
                                      id: "departureFlightNumber",
                                      type: "text",
                                      placeholder: "e.g., AA1234, DL567",
                                      value: a.departureFlightNumber,
                                      onChange: (s) =>
                                        o(
                                          "departureFlightNumber",
                                          s.target.value
                                        ),
                                      className:
                                        "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                    }),
                                  ],
                                }),
                                p.jsxs("div", {
                                  children: [
                                    p.jsx(Be, {
                                      htmlFor: "departureTime",
                                      className: "text-gray-700 font-medium",
                                      children: "Departure Time",
                                    }),
                                    p.jsx(mt, {
                                      id: "departureTime",
                                      type: "time",
                                      value: a.departureTime,
                                      onChange: (s) =>
                                        o("departureTime", s.target.value),
                                      className:
                                        "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                    }),
                                  ],
                                }),
                                p.jsxs("div", {
                                  className: "md:col-span-2",
                                  children: [
                                    p.jsx(Be, {
                                      htmlFor: "departureAirport",
                                      className: "text-gray-700 font-medium",
                                      children: "Departure Airport",
                                    }),
                                    p.jsx(mt, {
                                      id: "departureAirport",
                                      type: "text",
                                      placeholder: "e.g., JFK, LAX, MIA",
                                      value: a.departureAirport,
                                      onChange: (s) =>
                                        o("departureAirport", s.target.value),
                                      className:
                                        "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className: "space-y-6 border-t pt-8",
                      children: [
                        p.jsxs("div", {
                          className: "flex items-center space-x-2 mb-4",
                          children: [
                            p.jsx(Ih, { className: "h-5 w-5 text-blue-600" }),
                            p.jsx("h3", {
                              className: "text-xl font-semibold text-gray-900",
                              children: "Accommodation Preferences",
                            }),
                          ],
                        }),
                        p.jsx("p", {
                          className: "text-gray-700 mb-6",
                          children:
                            "The meeting will take place 11/13-16. The Lapine Group will cover your hotel room from 11/13-17. If you wish to arrive early or stay longer, additional nights are self-pay at the prevailing rate. If you wish to upgrade to a suite, you will be responsible for the additional cost. Rate is $329/night for standard room.",
                        }),
                        p.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                          children: [
                            p.jsxs("div", {
                              children: [
                                p.jsx(Be, {
                                  htmlFor: "roomType",
                                  className: "text-gray-700 font-medium",
                                  children: "Room Type",
                                }),
                                p.jsxs(Vo, {
                                  onValueChange: (s) => o("roomType", s),
                                  children: [
                                    p.jsx(Qo, {
                                      className:
                                        "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                      children: p.jsx(Xo, {
                                        placeholder: "Select room type",
                                      }),
                                    }),
                                    p.jsxs(Zo, {
                                      children: [
                                        p.jsx(ut, {
                                          value: "2beds",
                                          children: "2 beds",
                                        }),
                                        p.jsx(ut, {
                                          value: "king",
                                          children: "King",
                                        }),
                                        p.jsx(ut, {
                                          value: "suite",
                                          children: "Suite",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            p.jsxs("div", {
                              children: [
                                p.jsx(Be, {
                                  htmlFor: "checkInDate",
                                  className: "text-gray-700 font-medium",
                                  children: "Check-in Date",
                                }),
                                p.jsx(mt, {
                                  id: "checkInDate",
                                  type: "date",
                                  value: a.checkInDate,
                                  onChange: (s) =>
                                    o("checkInDate", s.target.value),
                                  className:
                                    "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                }),
                              ],
                            }),
                            p.jsxs("div", {
                              children: [
                                p.jsx(Be, {
                                  htmlFor: "checkOutDate",
                                  className: "text-gray-700 font-medium",
                                  children: "Check-out Date",
                                }),
                                p.jsx(mt, {
                                  id: "checkOutDate",
                                  type: "date",
                                  value: a.checkOutDate,
                                  onChange: (s) =>
                                    o("checkOutDate", s.target.value),
                                  className:
                                    "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className: "space-y-6 border-t pt-8",
                      children: [
                        p.jsxs("div", {
                          className: "flex items-center space-x-2 mb-4",
                          children: [
                            p.jsx(Ih, { className: "h-5 w-5 text-blue-600" }),
                            p.jsx("h3", {
                              className: "text-xl font-semibold text-gray-900",
                              children: "Event Attendance",
                            }),
                          ],
                        }),
                        p.jsxs("div", {
                          className: "space-y-6",
                          children: [
                            p.jsxs("div", {
                              className: "bg-blue-50 p-6 rounded-lg",
                              children: [
                                p.jsx("h4", {
                                  className:
                                    "text-lg font-medium text-gray-900 mb-4",
                                  children: "Friday Night Dinner",
                                }),
                                p.jsxs("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 gap-4",
                                  children: [
                                    p.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        p.jsx("input", {
                                          type: "checkbox",
                                          id: "fridayDinnerAttendee",
                                          checked: a.fridayDinnerAttendee,
                                          onChange: (s) =>
                                            o(
                                              "fridayDinnerAttendee",
                                              s.target.checked
                                            ),
                                          className:
                                            "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                                        }),
                                        p.jsx(Be, {
                                          htmlFor: "fridayDinnerAttendee",
                                          className:
                                            "text-gray-700 font-medium",
                                          children: "Attendee will attend",
                                        }),
                                      ],
                                    }),
                                    p.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        p.jsx("input", {
                                          type: "checkbox",
                                          id: "fridayDinnerGuest",
                                          checked: a.fridayDinnerGuest,
                                          onChange: (s) =>
                                            o(
                                              "fridayDinnerGuest",
                                              s.target.checked
                                            ),
                                          className:
                                            "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                                        }),
                                        p.jsx(Be, {
                                          htmlFor: "fridayDinnerGuest",
                                          className:
                                            "text-gray-700 font-medium",
                                          children: "Guest will attend",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            p.jsxs("div", {
                              className: "bg-green-50 p-6 rounded-lg",
                              children: [
                                p.jsx("h4", {
                                  className:
                                    "text-lg font-medium text-gray-900 mb-4",
                                  children:
                                    "Saturday 6 Hour Scavenger Hunt with Lunch",
                                }),
                                p.jsxs("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 gap-4",
                                  children: [
                                    p.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        p.jsx("input", {
                                          type: "checkbox",
                                          id: "saturdayScavengerAttendee",
                                          checked: a.saturdayScavengerAttendee,
                                          onChange: (s) =>
                                            o(
                                              "saturdayScavengerAttendee",
                                              s.target.checked
                                            ),
                                          className:
                                            "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                                        }),
                                        p.jsx(Be, {
                                          htmlFor: "saturdayScavengerAttendee",
                                          className:
                                            "text-gray-700 font-medium",
                                          children: "Attendee will attend",
                                        }),
                                      ],
                                    }),
                                    p.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        p.jsx("input", {
                                          type: "checkbox",
                                          id: "saturdayScavengerGuest",
                                          checked: a.saturdayScavengerGuest,
                                          onChange: (s) =>
                                            o(
                                              "saturdayScavengerGuest",
                                              s.target.checked
                                            ),
                                          className:
                                            "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                                        }),
                                        p.jsx(Be, {
                                          htmlFor: "saturdayScavengerGuest",
                                          className:
                                            "text-gray-700 font-medium",
                                          children: "Guest will attend",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            p.jsxs("div", {
                              className: "bg-purple-50 p-6 rounded-lg",
                              children: [
                                p.jsx("h4", {
                                  className:
                                    "text-lg font-medium text-gray-900 mb-4",
                                  children: "Saturday Night Dinner",
                                }),
                                p.jsxs("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 gap-4",
                                  children: [
                                    p.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        p.jsx("input", {
                                          type: "checkbox",
                                          id: "saturdayDinnerAttendee",
                                          checked: a.saturdayDinnerAttendee,
                                          onChange: (s) =>
                                            o(
                                              "saturdayDinnerAttendee",
                                              s.target.checked
                                            ),
                                          className:
                                            "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                                        }),
                                        p.jsx(Be, {
                                          htmlFor: "saturdayDinnerAttendee",
                                          className:
                                            "text-gray-700 font-medium",
                                          children: "Attendee will attend",
                                        }),
                                      ],
                                    }),
                                    p.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        p.jsx("input", {
                                          type: "checkbox",
                                          id: "saturdayDinnerGuest",
                                          checked: a.saturdayDinnerGuest,
                                          onChange: (s) =>
                                            o(
                                              "saturdayDinnerGuest",
                                              s.target.checked
                                            ),
                                          className:
                                            "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                                        }),
                                        p.jsx(Be, {
                                          htmlFor: "saturdayDinnerGuest",
                                          className:
                                            "text-gray-700 font-medium",
                                          children: "Guest will attend",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className: "space-y-6 border-t pt-8",
                      children: [
                        p.jsxs("div", {
                          className: "flex items-center space-x-2 mb-4",
                          children: [
                            p.jsx(T1, { className: "h-5 w-5 text-blue-600" }),
                            p.jsx("h3", {
                              className: "text-xl font-semibold text-gray-900",
                              children: "Special Requirements",
                            }),
                          ],
                        }),
                        p.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                          children: [
                            p.jsxs("div", {
                              children: [
                                p.jsx(Be, {
                                  htmlFor: "foodAllergies",
                                  className: "text-gray-700 font-medium",
                                  children:
                                    "Food Allergies & Dietary Restrictions",
                                }),
                                p.jsx(zo, {
                                  id: "foodAllergies",
                                  placeholder:
                                    "Please list any food allergies or dietary restrictions...",
                                  value: a.foodAllergies,
                                  onChange: (s) =>
                                    o("foodAllergies", s.target.value),
                                  className:
                                    "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                  rows: 4,
                                }),
                              ],
                            }),
                            p.jsxs("div", {
                              children: [
                                p.jsx(Be, {
                                  htmlFor: "mobilityIssues",
                                  className: "text-gray-700 font-medium",
                                  children:
                                    "Mobility Issues & Accessibility Needs",
                                }),
                                p.jsx(zo, {
                                  id: "mobilityIssues",
                                  placeholder:
                                    "Please describe any mobility issues or accessibility requirements...",
                                  value: a.mobilityIssues,
                                  onChange: (s) =>
                                    o("mobilityIssues", s.target.value),
                                  className:
                                    "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                                  rows: 4,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className: "space-y-6 border-t pt-8",
                      children: [
                        p.jsxs("div", {
                          className: "flex items-center space-x-2 mb-4",
                          children: [
                            p.jsx(b1, { className: "h-5 w-5 text-blue-600" }),
                            p.jsx("h3", {
                              className: "text-xl font-semibold text-gray-900",
                              children: "Additional Notes",
                            }),
                          ],
                        }),
                        p.jsxs("div", {
                          children: [
                            p.jsx(Be, {
                              htmlFor: "additionalNotes",
                              className: "text-gray-700 font-medium",
                              children: "Additional Notes for Organizer",
                            }),
                            p.jsx(zo, {
                              id: "additionalNotes",
                              placeholder:
                                "Please share any additional information or special requests...",
                              value: a.additionalNotes,
                              onChange: (s) =>
                                o("additionalNotes", s.target.value),
                              className:
                                "mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                              rows: 4,
                            }),
                          ],
                        }),
                      ],
                    }),
                    p.jsx("div", {
                      className: "text-center pt-6 border-t",
                      children: p.jsx(Ch, {
                        type: "submit",
                        size: "lg",
                        className:
                          "bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-12 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105",
                        children: "Submit Here",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      p.jsx("section", {
        className: "py-12 px-4 sm:px-6 lg:px-8 bg-gray-50",
        children: p.jsx("div", {
          className: "max-w-4xl mx-auto text-center",
          children: p.jsxs("p", {
            className: "text-lg text-gray-700",
            children: [
              "If you have questions, please",
              " ",
              p.jsx("a", {
                href: "mailto:heidi@fontainetravel.com",
                className:
                  "text-blue-600 hover:text-blue-800 underline font-medium",
                children: "email us",
              }),
              ".",
            ],
          }),
        }),
      }),
      p.jsx("footer", {
        className: "bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",
        children: p.jsx("div", {
          className: "max-w-7xl mx-auto",
          children: p.jsxs("div", {
            className: "text-center",
            children: [
              p.jsx("div", {
                className: "flex items-center justify-center space-x-2 mb-4",
                children: p.jsx("a", {
                  href: "https://www.fontainetravel.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: p.jsx("img", {
                    src: ev,
                    alt: "Fontaine Travel Logo",
                    className: "h-10",
                  }),
                }),
              }),
              p.jsx("p", {
                className: "text-gray-400 mb-4",
                children: "Fla. Seller of Travel Reg. No. ST37113",
              }),
              p.jsx("p", {
                className: "text-gray-400 mb-4",
                children:
                  "California Seller of Travel Registration Number: 2089491-50",
              }),
              p.jsx("p", {
                className: "text-gray-400 mb-4",
                children:
                  "Registration as a seller of travel does not constitute approval by the State of California.",
              }),
              p.jsxs("p", {
                className: "text-gray-400 mb-4",
                children: [
                  "©2025 Fontaine Travel. ",
                  p.jsx("a", {
                    href: "https://www.fontainetravel.com/terms-conditions",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-blue-400 hover:text-white",
                    children: "Terms & Conditions",
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "flex justify-center space-x-6",
                children: [
                  p.jsx("a", {
                    href: "tel:703-850-1849",
                    className: "text-gray-400 hover:text-white",
                    children: "Call: 703-850-1849",
                  }),
                  p.jsx("a", {
                    href: "mailto:heidi@fontainetravel.com",
                    className: "text-gray-400 hover:text-white",
                    children: "Email Us",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
l0.createRoot(document.getElementById("root")).render(
  p.jsx(E.StrictMode, { children: p.jsx(C1, {}) })
);
