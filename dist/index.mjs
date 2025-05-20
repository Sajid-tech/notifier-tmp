import $e, { useState as ne, useCallback as Se, useEffect as Fe, useMemo as _r, createContext as wr, useContext as Tr, forwardRef as Cr, createElement as Oe } from "react";
var J = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function kr() {
  if (Ae) return W;
  Ae = 1;
  var n = $e, i = Symbol.for("react.element"), s = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(v, p, d) {
    var o, R = {}, T = null, O = null;
    d !== void 0 && (T = "" + d), p.key !== void 0 && (T = "" + p.key), p.ref !== void 0 && (O = p.ref);
    for (o in p) m.call(p, o) && !x.hasOwnProperty(o) && (R[o] = p[o]);
    if (v && v.defaultProps) for (o in p = v.defaultProps, p) R[o] === void 0 && (R[o] = p[o]);
    return { $$typeof: i, type: v, key: T, ref: O, props: R, _owner: y.current };
  }
  return W.Fragment = s, W.jsx = g, W.jsxs = g, W;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function jr() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var n = $e, i = Symbol.for("react.element"), s = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), v = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), o = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), ae = Symbol.iterator, Me = "@@iterator";
    function Ye(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ae && e[ae] || e[Me];
      return typeof r == "function" ? r : null;
    }
    var A = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Ve("error", e, t);
      }
    }
    function Ve(e, r, t) {
      {
        var a = A.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var f = t.map(function(c) {
          return String(c);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Ue = !1, Be = !1, qe = !1, Je = !1, ze = !1, oe;
    oe = Symbol.for("react.module.reference");
    function Ke(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === x || ze || e === y || e === d || e === o || Je || e === O || Ue || Be || qe || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === R || e.$$typeof === g || e.$$typeof === v || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function Xe(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case s:
          return "Portal";
        case x:
          return "Profiler";
        case y:
          return "StrictMode";
        case d:
          return "Suspense";
        case o:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return ie(r) + ".Consumer";
          case g:
            var t = e;
            return ie(t._context) + ".Provider";
          case p:
            return Xe(e, e.render, "ForwardRef");
          case R:
            var a = e.displayName || null;
            return a !== null ? a : j(e.type) || "Memo";
          case T: {
            var l = e, f = l._payload, c = l._init;
            try {
              return j(c(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, F = 0, se, ue, ce, le, fe, de, ve;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Ge() {
      {
        if (F === 0) {
          se = console.log, ue = console.info, ce = console.warn, le = console.error, fe = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function He() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: se
            }),
            info: P({}, e, {
              value: ue
            }),
            warn: P({}, e, {
              value: ce
            }),
            error: P({}, e, {
              value: le
            }),
            group: P({}, e, {
              value: fe
            }),
            groupCollapsed: P({}, e, {
              value: de
            }),
            groupEnd: P({}, e, {
              value: ve
            })
          });
        }
        F < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = A.ReactCurrentDispatcher, G;
    function V(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (l) {
            var a = l.stack.trim().match(/\n( *(at )?)/);
            G = a && a[1] || "";
          }
        return `
` + G + e;
      }
    }
    var H = !1, U;
    {
      var Ze = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Ze();
    }
    function me(e, r) {
      if (!e || H)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      H = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = X.current, X.current = null, Ge();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (C) {
              a = C;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (C) {
              a = C;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            a = C;
          }
          e();
        }
      } catch (C) {
        if (C && a && typeof C.stack == "string") {
          for (var u = C.stack.split(`
`), w = a.stack.split(`
`), h = u.length - 1, b = w.length - 1; h >= 1 && b >= 0 && u[h] !== w[b]; )
            b--;
          for (; h >= 1 && b >= 0; h--, b--)
            if (u[h] !== w[b]) {
              if (h !== 1 || b !== 1)
                do
                  if (h--, b--, b < 0 || u[h] !== w[b]) {
                    var k = `
` + u[h].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, k), k;
                  }
                while (h >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        H = !1, X.current = f, He(), Error.prepareStackTrace = l;
      }
      var D = e ? e.displayName || e.name : "", S = D ? V(D) : "";
      return typeof e == "function" && U.set(e, S), S;
    }
    function Qe(e, r, t) {
      return me(e, !1);
    }
    function er(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, er(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case d:
          return V("Suspense");
        case o:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Qe(e.render);
          case R:
            return B(e.type, r, t);
          case T: {
            var a = e, l = a._payload, f = a._init;
            try {
              return B(f(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ge = {}, he = A.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function rr(e, r, t, a, l) {
      {
        var f = Function.call.bind(I);
        for (var c in e)
          if (f(e, c)) {
            var u = void 0;
            try {
              if (typeof e[c] != "function") {
                var w = Error((a || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              u = e[c](r, c, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              u = h;
            }
            u && !(u instanceof Error) && (q(l), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, c, typeof u), q(null)), u instanceof Error && !(u.message in ge) && (ge[u.message] = !0, q(l), _("Failed %s type: %s", t, u.message), q(null));
          }
      }
    }
    var tr = Array.isArray;
    function Z(e) {
      return tr(e);
    }
    function nr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ar(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function be(e) {
      if (ar(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(e)), ye(e);
    }
    var Ee = A.ReactCurrentOwner, or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xe, Re;
    function ir(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function sr(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ur(e, r) {
      typeof e.ref == "string" && Ee.current;
    }
    function cr(e, r) {
      {
        var t = function() {
          xe || (xe = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function lr(e, r) {
      {
        var t = function() {
          Re || (Re = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var fr = function(e, r, t, a, l, f, c) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function dr(e, r, t, a, l) {
      {
        var f, c = {}, u = null, w = null;
        t !== void 0 && (be(t), u = "" + t), sr(r) && (be(r.key), u = "" + r.key), ir(r) && (w = r.ref, ur(r, l));
        for (f in r)
          I.call(r, f) && !or.hasOwnProperty(f) && (c[f] = r[f]);
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (f in h)
            c[f] === void 0 && (c[f] = h[f]);
        }
        if (u || w) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && cr(c, b), w && lr(c, b);
        }
        return fr(e, u, w, l, a, Ee.current, c);
      }
    }
    var Q = A.ReactCurrentOwner, _e = A.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function we() {
      {
        if (Q.current) {
          var e = j(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function vr(e) {
      return "";
    }
    var Te = {};
    function pr(e) {
      {
        var r = we();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ce(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = pr(r);
        if (Te[t])
          return;
        Te[t] = !0;
        var a = "";
        e && e._owner && e._owner !== Q.current && (a = " It was passed a child from " + j(e._owner.type) + "."), N(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), N(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            re(a) && Ce(a, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = Ye(e);
          if (typeof l == "function" && l !== e.entries)
            for (var f = l.call(e), c; !(c = f.next()).done; )
              re(c.value) && Ce(c.value, r);
        }
      }
    }
    function mr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = j(r);
          rr(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var l = j(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            N(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    var je = {};
    function Pe(e, r, t, a, l, f) {
      {
        var c = Ke(e);
        if (!c) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = vr();
          w ? u += w : u += we();
          var h;
          e === null ? h = "null" : Z(e) ? h = "array" : e !== void 0 && e.$$typeof === i ? (h = "<" + (j(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, u);
        }
        var b = dr(e, r, t, l, f);
        if (b == null)
          return b;
        if (c) {
          var k = r.children;
          if (k !== void 0)
            if (a)
              if (Z(k)) {
                for (var D = 0; D < k.length; D++)
                  ke(k[D], e);
                Object.freeze && Object.freeze(k);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(k, e);
        }
        if (I.call(r, "key")) {
          var S = j(e), C = Object.keys(r).filter(function(Rr) {
            return Rr !== "key";
          }), te = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[S + te]) {
            var xr = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, S, xr, S), je[S + te] = !0;
          }
        }
        return e === m ? gr(b) : mr(b), b;
      }
    }
    function hr(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function yr(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var br = yr, Er = hr;
    L.Fragment = m, L.jsx = br, L.jsxs = Er;
  }()), L;
}
var De;
function Pr() {
  return De || (De = 1, process.env.NODE_ENV === "production" ? J.exports = kr() : J.exports = jr()), J.exports;
}
var E = Pr();
const Ie = () => `${Date.now()}-${Math.floor(Math.random() * 1e4)}`, Sr = (n) => {
  switch (n) {
    case "top-left":
      return "top-4 left-4";
    case "top-center":
      return "top-4 left-1/2 -translate-x-1/2";
    case "top-right":
      return "top-4 right-4";
    case "bottom-left":
      return "bottom-4 left-4";
    case "bottom-center":
      return "bottom-4 left-1/2 -translate-x-1/2";
    case "bottom-right":
      return "bottom-4 right-4";
    default:
      return "top-4 right-4";
  }
}, Or = (n) => n.startsWith("bottom"), We = wr(void 0), zr = ({
  children: n,
  defaultPosition: i = "top-right"
}) => {
  const [s, m] = ne([]), [y, x] = ne(i), g = Se((d) => {
    m((o) => o.filter((R) => R.id !== d));
  }, []), v = Se(
    (d, o) => {
      const R = Ie(), T = {
        id: R,
        message: d,
        createdAt: Date.now(),
        duration: 4e3,
        closable: !0,
        ...o
      };
      return m((O) => [...O, T]), R;
    },
    []
  );
  Fe(() => {
    const d = s.map((o) => {
      if (o.duration !== 1 / 0) {
        const R = setTimeout(() => {
          var T;
          g(o.id), (T = o.onAutoClose) == null || T.call(o);
        }, o.duration);
        return { id: o.id, timer: R };
      }
      return null;
    }).filter(Boolean);
    return () => {
      d.forEach((o) => {
        o && clearTimeout(o.timer);
      });
    };
  }, [s, g]);
  const p = _r(
    () => ({
      toasts: s,
      position: y,
      setPosition: x,
      toast: v,
      success: (d, o) => v(d, { ...o, type: "success" }),
      error: (d, o) => v(d, { ...o, type: "error" }),
      warning: (d, o) => v(d, { ...o, type: "warning" }),
      info: (d, o) => v(d, { ...o, type: "info" }),
      remove: g,
      removeAll: () => m([])
    }),
    [s, y, v, g]
  );
  return /* @__PURE__ */ E.jsx(We.Provider, { value: p, children: n });
}, Ar = () => {
  const n = Tr(We);
  if (n === void 0)
    throw new Error("useNotifier must be used within a NotifierProvider");
  return n;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Nr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dr = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Y = (n, i) => {
  const s = Cr(
    ({
      color: m = "currentColor",
      size: y = 24,
      strokeWidth: x = 2,
      absoluteStrokeWidth: g,
      className: v = "",
      children: p,
      ...d
    }, o) => Oe(
      "svg",
      {
        ref: o,
        ...Nr,
        width: y,
        height: y,
        stroke: m,
        strokeWidth: g ? Number(x) * 24 / Number(y) : x,
        className: ["lucide", `lucide-${Dr(n)}`, v].join(" "),
        ...d
      },
      [
        ...i.map(([R, T]) => Oe(R, T)),
        ...Array.isArray(p) ? p : [p]
      ]
    )
  );
  return s.displayName = `${n}`, s;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = Y("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = Y("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = Y("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = Y("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = Y("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Mr = ({ type: n, customIcon: i }) => {
  if (i)
    return /* @__PURE__ */ E.jsx(E.Fragment, { children: i });
  const s = "h-5 w-5";
  switch (n) {
    case "success":
      return /* @__PURE__ */ E.jsx(Fr, { className: `${s} text-green-500` });
    case "error":
      return /* @__PURE__ */ E.jsx(Wr, { className: `${s} text-red-500` });
    case "warning":
      return /* @__PURE__ */ E.jsx($r, { className: `${s} text-amber-500` });
    case "info":
    default:
      return /* @__PURE__ */ E.jsx(Ir, { className: `${s} text-blue-500` });
  }
}, Yr = ({
  toast: n,
  onRemove: i,
  position: s,
  index: m
}) => {
  const [y, x] = ne(!1), g = () => {
    switch (n.type) {
      case "success":
        return "border-l-green-500 bg-green-50 dark:bg-green-950/30";
      case "error":
        return "border-l-red-500 bg-red-50 dark:bg-red-950/30";
      case "warning":
        return "border-l-amber-500 bg-amber-50 dark:bg-amber-950/30";
      case "info":
      default:
        return "border-l-blue-500 bg-blue-50 dark:bg-blue-950/30";
    }
  }, v = () => {
    x(!1), setTimeout(() => {
      var o;
      i(n.id), (o = n.onClose) == null || o.call(n);
    }, 200);
  };
  Fe(() => {
    const o = setTimeout(() => {
      x(!0);
    }, 50);
    return () => {
      clearTimeout(o);
    };
  }, []);
  const d = s.startsWith("bottom") ? y ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0" : y ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0";
  return /* @__PURE__ */ E.jsx(
    "div",
    {
      className: `
        pointer-events-auto min-w-80 max-w-md border-l-4 rounded-md shadow-lg
        transform transition-all duration-200 ${d} ${g()}
        ${n.className || ""}
      `,
      style: {
        zIndex: 9999 - m
      },
      children: /* @__PURE__ */ E.jsxs("div", { className: "flex items-start p-4", children: [
        /* @__PURE__ */ E.jsx("div", { className: "flex-shrink-0 pt-0.5", children: /* @__PURE__ */ E.jsx(Mr, { type: n.type || "info", customIcon: n.icon }) }),
        /* @__PURE__ */ E.jsxs("div", { className: "ml-3 flex-1", children: [
          /* @__PURE__ */ E.jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-gray-100", children: n.message }),
          n.action && /* @__PURE__ */ E.jsx("div", { className: "mt-2", children: /* @__PURE__ */ E.jsx(
            "button",
            {
              onClick: n.action.onClick,
              className: `rounded bg-white dark:bg-gray-800 px-2 py-1 text-xs font-medium text-gray-900 dark:text-gray-100 
                  hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`,
              children: n.action.label
            }
          ) })
        ] }),
        n.closable !== !1 && /* @__PURE__ */ E.jsx(
          "button",
          {
            onClick: v,
            className: "ml-4 flex-shrink-0 rounded hover:bg-gray-200 dark:hover:bg-gray-700 p-1 transition-colors",
            children: /* @__PURE__ */ E.jsx(Lr, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" })
          }
        )
      ] })
    }
  );
}, Vr = ({
  toasts: n,
  position: i,
  onRemove: s
}) => {
  const m = Sr(i), y = Or(i), x = [...n].sort((g, v) => y ? v.createdAt - g.createdAt : g.createdAt - v.createdAt);
  return /* @__PURE__ */ E.jsx(
    "div",
    {
      className: `fixed z-50 flex flex-col gap-3 w-full max-w-md p-4 sm:p-0 pointer-events-none ${m}`,
      "aria-live": "assertive",
      children: x.map((g, v) => /* @__PURE__ */ E.jsx(
        Yr,
        {
          toast: g,
          onRemove: s,
          position: i,
          index: v
        },
        g.id
      ))
    }
  );
}, Kr = () => {
  const { toasts: n, position: i, remove: s } = Ar();
  return /* @__PURE__ */ E.jsx(
    Vr,
    {
      toasts: n,
      position: i,
      onRemove: s
    }
  );
}, Ur = {
  position: "top-right",
  duration: 3e3,
  maxNotifications: 3
};
let M = { ...Ur }, $ = [], K = [];
const z = () => {
  K.forEach((n) => n());
}, Br = (n, i) => {
  i > 0 && setTimeout(() => {
    qr.dismiss(n);
  }, i);
}, Le = () => {
  const n = {
    configure: (i) => (M = { ...M, ...i }, z(), n),
    show: (i, s = "info", m) => {
      const y = Ie(), x = (m == null ? void 0 : m.duration) ?? M.duration;
      return $ = [{
        id: y,
        message: i,
        type: s,
        createdAt: Date.now(),
        duration: x || 3e3,
        ...m
      }, ...$].slice(0, M.maxNotifications), z(), x && x > 0 && Br(y, x), y;
    },
    info: (i, s) => n.show(i, "info", s),
    success: (i, s) => n.show(i, "success", s),
    warning: (i, s) => n.show(i, "warning", s),
    error: (i, s) => n.show(i, "error", s),
    dismiss: (i) => {
      $ = $.filter((s) => s.id !== i), z();
    },
    clear: () => ($ = [], z(), n),
    getNotifications: () => [...$],
    getOptions: () => ({ ...M }),
    addListener: (i) => (K.push(i), () => {
      K = K.filter((s) => s !== i);
    })
  };
  return n;
}, qr = Le(), Xr = Le();
export {
  Kr as NotifierComponent,
  zr as NotifierProvider,
  Xr as default,
  Ar as useNotifier
};
