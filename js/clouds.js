! function(e, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports._vantaEffect = n() : e._vantaEffect = n()
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        var n = {};

        function t(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        return t.m = e, t.c = n, t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: i
            })
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.t = function(e, n) {
            if (1 & n && (e = t(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (t.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var o in e) t.d(i, o, function(n) {
                    return e[n]
                }.bind(null, o));
            return i
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, t.p = "", t(t.s = 6)
    }([function(e, n, t) {
        "use strict";

        function i(e, n) {
            for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
            return e
        }

        function o() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 600
        }
        t.d(n, "c", function() {
            return i
        }), t.d(n, "d", function() {
            return o
        }), t.d(n, "h", function() {
            return s
        }), t.d(n, "g", function() {
            return r
        }), t.d(n, "f", function() {
            return a
        }), t.d(n, "e", function() {
            return u
        }), t.d(n, "a", function() {
            return c
        }), t.d(n, "b", function() {
            return l
        }), Number.prototype.clamp = function(e, n) {
            return Math.min(Math.max(this, e), n)
        };
        const s = e => e[Math.floor(Math.random() * e.length)];

        function r(e, n) {
            return null == e && (e = 0), null == n && (n = 1), e + Math.random() * (n - e)
        }

        function a(e, n) {
            return null == e && (e = 0), null == n && (n = 1), Math.floor(e + Math.random() * (n - e + 1))
        }
        var u = e => document.querySelector(e);
        const c = e => "number" == typeof e ? "#" + ("00000" + e.toString(16)).slice(-6) : e,
            l = (e, n = 1) => {
                const t = c(e),
                    i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),
                    o = i ? {
                        r: parseInt(i[1], 16),
                        g: parseInt(i[2], 16),
                        b: parseInt(i[3], 16)
                    } : null;
                return "rgba(" + o.r + "," + o.g + "," + o.b + "," + n + ")"
            }
    }, function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return s
        });
        var i = t(0);
        const o = "object" == typeof window;
        o && !window.VANTA && (window.VANTA = {
            version: "0.3.1"
        });
        const s = o && window.VANTA || {};
        s.register || (s.register = (e, n) => (s[e] = e => new n(e), s[e]));
        var r = function() {
            return Array.prototype.unshift.call(arguments, "[VANTA]"), console.error.apply(this, arguments)
        };
        s.VantaBase = class {
            constructor(e = {}) {
                if (!o) return !1;
                var n, t, a, u;
                if (s.current = this, this.onMouseMoveWrapper = this.onMouseMoveWrapper.bind(this), this.resize = this.resize.bind(this), this.animationLoop = this.animationLoop.bind(this), this.restart = this.restart.bind(this), this.options = Object(i.c)({}, this.defaultOptions), e instanceof HTMLElement || "string" == typeof e ? Object(i.c)(this.options, {
                        el: e
                    }) : Object(i.c)(this.options, e), this.el = this.options.el, null == this.el) r('Instance needs "el" param!');
                else if (!(this.options.el instanceof HTMLElement || (u = this.el, this.el = Object(i.e)(u), this.el))) return void r("Cannot find element", u);
                for (a = 0; a < this.el.children.length; a++) n = this.el.children[a], "static" === getComputedStyle(n).position && (n.style.position = "relative"), "auto" === getComputedStyle(n).zIndex && (n.style.zIndex = 1);
                "static" === getComputedStyle(this.el).position && (this.el.style.position = "relative"), "object" == typeof THREE && this.initThree(), this.setSize(), this.uniforms = {
                    u_time: {
                        type: "f",
                        value: 1
                    },
                    u_resolution: {
                        type: "v2",
                        value: new THREE.Vector2(1, 1)
                    },
                    u_mouse: {
                        type: "v2",
                        value: new THREE.Vector2(0, 0)
                    }
                };
                try {
                    this.init()
                } catch (e) {
                    return t = e, r("Init error"), r(t), this.el.removeChild(this.renderer.domElement), void(this.options.backgroundColor && (console.log("[VANTA] Falling back to backgroundColor"), this.el.style.background = Object(i.a)(this.options.backgroundColor)))
                }
                window.addEventListener("resize", this.resize), this.resize(), this.animationLoop(), this.el.addEventListener("mousemove", this.onMouseMoveWrapper, !1), window.addEventListener("scroll", this.onMouseMoveWrapper)
            }
            applyCanvasStyles(e, n = {}) {
                Object(i.c)(e.style, {
                    position: "absolute",
                    zIndex: 0,
                    top: 0,
                    left: 0,
                    background: ""
                }), Object(i.c)(e.style, n), e.classList.add("vanta-canvas")
            }
            initThree() {
                this.renderer = new THREE.WebGLRenderer({
                    alpha: !0,
                    antialias: !0
                }), this.el.appendChild(this.renderer.domElement), this.applyCanvasStyles(this.renderer.domElement), isNaN(this.options.backgroundAlpha) && (this.options.backgroundAlpha = 1), this.scene = new THREE.Scene
            }
            onMouseMoveWrapper(e) {
                var n, t, i;
                n = this.renderer.domElement.getBoundingClientRect(), t = this.mouseX = e.clientX - n.left, i = this.mouseY = e.clientY - n.top, t >= 0 && i >= 0 && !this.options.mouseEase && this.triggerMouseMove(t, i)
            }
            triggerMouseMove(e, n) {
                this.uniforms && (this.uniforms.u_mouse.value.x = e / this.scale, this.uniforms.u_mouse.value.y = n / this.scale);
                const t = e / this.width,
                    i = n / this.height;
                "function" == typeof this.onMouseMove && this.onMouseMove(t, i)
            }
            setSize() {
                this.scale || (this.scale = 1), Object(i.d)() && this.options.scaleMobile ? this.scale = this.options.scaleMobile : this.options.scale && (this.scale = this.options.scale), this.width = this.el.offsetWidth || window.innerWidth, this.height = this.el.offsetHeight || window.innerHeight
            }
            resize() {
                var e, n;
                this.setSize(), null != (e = this.camera) && (e.aspect = this.width / this.height), null != (n = this.camera) && "function" == typeof n.updateProjectionMatrix && n.updateProjectionMatrix(), this.renderer && (this.renderer.setSize(this.width, this.height), this.renderer.setPixelRatio(window.devicePixelRatio / this.scale)), "function" == typeof this.onResize && this.onResize()
            }
            animationLoop() {
                var e, n, t, i, o, s, r, a;
                return this.t || (this.t = 0), this.t += 1, this.t2 || (this.t2 = 0), this.t2 += null != (s = this.options.speed) ? s : 1, this.uniforms && (this.uniforms.u_time.value = .016667 * this.t2), e = this.el.offsetHeight, n = this.el.getBoundingClientRect(), a = null != (r = window.pageYOffset) ? r : (document.documentElement || document.body.parentNode || document.body).scrollTop, i = (o = n.top + a) - window.innerHeight, t = o + e, this.options.mouseEase && (this.mouseEaseX = this.mouseEaseX || this.mouseX || 0, this.mouseEaseY = this.mouseEaseY || this.mouseY || 0, Math.abs(this.mouseEaseX - this.mouseX) + Math.abs(this.mouseEaseY - this.mouseY) > .1 && (this.mouseEaseX = this.mouseEaseX + .05 * (this.mouseX - this.mouseEaseX), this.mouseEaseY = this.mouseEaseY + .05 * (this.mouseY - this.mouseEaseY), this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))), i <= a && a <= t && ("function" == typeof this.onUpdate && this.onUpdate(), this.scene && this.camera && (this.renderer.render(this.scene, this.camera), this.renderer.setClearColor(this.options.backgroundColor, this.options.backgroundAlpha)), this.fps && this.fps.update && this.fps.update()), this.req = window.requestAnimationFrame(this.animationLoop)
            }
            restart() {
                if (this.scene)
                    for (; this.scene.children.length;) this.scene.remove(this.scene.children[0]);
                "function" == typeof this.onRestart && this.onRestart(), this.init()
            }
            init() {
                "function" == typeof this.onInit && this.onInit()
            }
            destroy() {
                "function" == typeof this.onDestroy && this.onDestroy(), this.el.removeEventListener("mousemove", this.onMouseMoveWrapper), window.removeEventListener("scroll", this.onMouseMoveWrapper), window.removeEventListener("resize", this.resize), window.cancelAnimationFrame(this.req), this.renderer && (this.el.removeChild(this.renderer.domElement), this.renderer = null, this.scene = null)
            }
        }, n.b = s.VantaBase
    }, function(e, n, t) {
        "use strict";
        t.d(n, "b", function() {
            return s
        });
        var i = t(1),
            o = t(0);
        t.d(n, "a", function() {
            return i.a
        }), "object" == typeof THREE && (THREE.Color.prototype.toVector = function() {
            return new THREE.Vector3(this.r, this.g, this.b)
        });
        class s extends i.b {
            constructor(e) {
                super(e), this.mode = "shader", this.updateUniforms = this.updateUniforms.bind(this)
            }
            initBasicShader(e = this.fragmentShader, n = this.vertexShader) {
                var t, i, o;
                return n || (n = "uniform float u_time;\nuniform vec2 u_resolution;\nvoid main() {\n  gl_Position = vec4( position, 1.0 );\n}"), this.updateUniforms(), "function" == typeof this.valuesChanger && this.valuesChanger(), t = new THREE.ShaderMaterial({
                    uniforms: this.uniforms,
                    vertexShader: n,
                    fragmentShader: e
                }), (o = this.options.texturePath) && (this.uniforms.u_tex = {
                    type: "t",
                    value: (new THREE.TextureLoader).load(o)
                }), i = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), t), this.scene.add(i), this.camera = new THREE.Camera, this.camera.position.z = 1
            }
            updateUniforms() {
                var e, n, t, i;
                for (e in n = {}, t = this.options) i = t[e], -1 !== e.toLowerCase().indexOf("color") ? n[e] = {
                    type: "v3",
                    value: new THREE.Color(i).toVector()
                } : "number" == typeof i && (n[e] = {
                    type: "f",
                    value: i
                });
                return Object(o.c)(this.uniforms, n)
            }
            init() {
                super.init(), this.fragmentShader && this.initBasicShader()
            }
            resize() {
                super.resize(), this.uniforms.u_resolution.value.x = this.width / this.scale, this.uniforms.u_resolution.value.y = this.height / this.scale
            }
        }
    }, , , , function(e, n, t) {
        "use strict";
        t.r(n);
        var i = t(2);
        class o extends i.b {}
        n.default = i.a.register("CLOUDS", o), o.prototype.defaultOptions = {
            backgroundColor: 16777215,
            skyColor: 6863063,
            cloudColor: 11387358,
            cloudShadowColor: 1586512,
            sunColor: 16750873,
            sunGlareColor: 16737843,
            sunlightColor: 16750899,
            scale: 3,
            scaleMobile: 12,
            mouseEase: !0
        }, o.prototype.fragmentShader = "uniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform sampler2D u_tex;\n\nuniform vec3 skyColor;\nuniform vec3 cloudColor;\nuniform vec3 cloudShadowColor;\nuniform vec3 sunColor;\nuniform vec3 sunlightColor;\nuniform vec3 sunGlareColor;\nuniform vec3 backgroundColor;\n\n// uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click\n// uniform samplerXX iChannel0..3;          // input channel. XX = 2D/Cube\n\n\n// Volumetric clouds. It performs level of detail (LOD) for faster rendering\nfloat iqhash( float n ){\n    return fract(sin(n)*3758.5453);\n    // return fract(n * (n-1.203) * (n-2.3) / 43758.5453);\n}\n\nfloat noise( vec3 x ){\n    // The noise function returns a value in the range -1.0f -> 1.0f\n    vec3 p = floor(x);\n    vec3 f = fract(x);\n    f       = f*f*(3.0-2.0*f);\n    float n = p.x + p.y*57.0 + 113.0*p.z;\n    return mix(mix(mix( iqhash(n+0.0  ), iqhash(n+1.0  ),f.x),\n                   mix( iqhash(n+57.0 ), iqhash(n+58.0 ),f.x),f.y),\n               mix(mix( iqhash(n+113.0), iqhash(n+114.0),f.x),\n                   mix( iqhash(n+170.0), iqhash(n+171.0),f.x),f.y),f.z);\n}\n\nvec3 speed = vec3(0.5,0.01,1.0) * 0.5;\nfloat constantTime = 1000.;\nfloat map5( in vec3 p ){\n    vec3 q = p - speed*(u_time + constantTime);\n    float f;\n    f  = 0.50000*noise( q ); q = q*2.02;\n    f += 0.25000*noise( q ); q = q*2.03;\n    f += 0.12500*noise( q ); q = q*2.01;\n    f += 0.06250*noise( q ); q = q*2.02;\n    f += 0.03125*noise( q );\n    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );\n}\nfloat map4( in vec3 p ){\n    vec3 q = p - speed*(u_time + constantTime);\n    float f;\n    f  = 0.50000*noise( q ); q = q*2.02;\n    f += 0.25000*noise( q ); q = q*2.03;\n    f += 0.12500*noise( q ); q = q*2.01;\n    f += 0.06250*noise( q );\n    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );\n}\nfloat map3( in vec3 p ){\n    vec3 q = p - speed*(u_time + constantTime);\n    float f;\n    f  = 0.50000*noise( q ); q = q*2.02;\n    f += 0.25000*noise( q ); q = q*2.03;\n    f += 0.12500*noise( q );\n    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );\n}\nfloat map2( in vec3 p ){\n    vec3 q = p - speed*(u_time + constantTime);\n    float f;\n    f  = 0.50000*noise( q ); q = q*2.02;\n    f += 0.25000*noise( q );\n    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );\n}\n\nvec3 sundir = normalize( vec3(-1.0,0.0,-1.0) );\n\nvec4 integrate( in vec4 sum, in float dif, in float den, in vec3 bgcol, in float t ){\n    // lighting\n    vec3 lin = cloudColor*1.4 + sunlightColor*dif;\n    vec4 col = vec4( mix( vec3(1.0,0.95,0.8), cloudShadowColor, den ), den );\n    col.xyz *= lin;\n    col.xyz = mix( col.xyz, bgcol, 1.0-exp(-0.003*t*t) );\n    // front to back blending\n    col.a *= 0.4;\n    col.rgb *= col.a;\n    return sum + col*(1.0-sum.a);\n}\n\n#define MARCH(STEPS,MAPLOD) for(int i=0; i<STEPS; i++) { vec3  pos = ro + t*rd; if( pos.y<-3.0 || pos.y>2.0 || sum.a > 0.99 ) break; float den = MAPLOD( pos ); if( den>0.01 ) { float dif = clamp((den - MAPLOD(pos+0.3*sundir))/0.6, 0.0, 1.0 ); sum = integrate( sum, dif, den, bgcol, t ); } t += max(0.075,0.02*t); }\n\nvec4 raymarch( in vec3 ro, in vec3 rd, in vec3 bgcol, in ivec2 px ){\n    vec4 sum = vec4(0.0);\n\n    float t = 0.0;\n\n    MARCH(20,map5);\n    MARCH(25,map4);\n    MARCH(30,map3);\n    MARCH(40,map2);\n\n    return clamp( sum, 0.0, 1.0 );\n}\n\nmat3 setCamera( in vec3 ro, in vec3 ta, float cr ){\n    vec3 cw = normalize(ta-ro);\n    vec3 cp = vec3(sin(cr), cos(cr),0.0);\n    vec3 cu = normalize( cross(cw,cp) );\n    vec3 cv = normalize( cross(cu,cw) );\n    return mat3( cu, cv, cw );\n}\n\nvec4 render( in vec3 ro, in vec3 rd, in ivec2 px ){\n    // background sky\n    float sun = clamp( dot(sundir,rd), 0.0, 1.0 );\n    vec3 col = skyColor - rd.y*0.2*vec3(1.0,0.5,1.0) + 0.15*0.5;\n    col += 0.2*sunColor*pow( sun, 8.0 );\n\n    // clouds\n    vec4 res = raymarch( ro, rd, col, px );\n    col = col*(1.0-res.w) + res.xyz;\n\n    // sun glare\n    col += 0.2*sunGlareColor*pow( sun, 3.0 );\n\n    return vec4( col, 1.0 );\n}\n\nvoid main(){\n    vec2 p = (-u_resolution.xy + 2.0*gl_FragCoord.xy)/ u_resolution.y;\n\n    vec2 m = u_mouse.xy/u_resolution.xy;\n    m.y = (1.0 - m.y) * 0.3 + 0.25; // camera height\n\n    m.x *= 0.25;\n    m.x += sin(u_time * 0.1 + 3.1415) * 0.25 + 0.25;\n\n    // camera\n    vec3 ro = 4.0*normalize(vec3(sin(3.0*m.x), 0.4*m.y, cos(3.0*m.x))); // origin\n    vec3 ta = vec3(0.0, -1.0, 0.0);\n    mat3 ca = setCamera( ro, ta, 0.0 );\n    // ray\n    vec3 rd = ca * normalize( vec3(p.xy,1.5));\n\n    gl_FragColor = render( ro, rd, ivec2(gl_FragCoord-0.5) );\n}\n"
    }])
});
