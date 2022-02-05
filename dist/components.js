module.exports = {
  ".sa-alert": {
    "borderRadius": ".25rem",
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "marginBottom": ".5rem",
    "gridGap": ".5rem",
    "gap": ".5rem"
  },
  ".sa-avatar": {
    "fontWeight": "700",
    "height": "3rem",
    "fontSize": "1.25rem",
    "lineHeight": "1.75rem",
    "maxHeight": "3rem",
    "maxWidth": "3rem",
    "minHeight": "3rem",
    "minWidth": "3rem",
    "position": "relative",
    "width": "3rem"
  },
  ".sa-avatar>*": {
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "WebkitBoxPack": "center",
    "msFlexPack": "center",
    "WebkitJustifyContent": "center",
    "justifyContent": "center",
    "height": "100%",
    "width": "100%"
  },
  ".sa-avatar.sa-status:before,.sa-avatar[status]:before": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(209,213,219,var(--tw-bg-opacity))",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(255,255,255,var(--tw-border-opacity))",
    "borderRadius": "9999px",
    "borderWidth": "2px",
    "height": ".9rem",
    "position": "absolute",
    "top": "0px",
    "right": "0px",
    "width": ".9rem",
    "zIndex": "10",
    "content": "\"\""
  },
  ".sa-avatar.sa-sm,.sa-avatar[size=sm]": {
    "fontWeight": "700",
    "height": "2rem",
    "fontSize": ".875rem",
    "lineHeight": "1.25rem",
    "maxHeight": "2rem",
    "maxWidth": "2rem",
    "minHeight": "2rem",
    "minWidth": "2rem",
    "width": "2rem"
  },
  ".sa-avatar.sa-sm.sa-status:before,.sa-avatar.sa-sm[status]:before,.sa-avatar[size=sm].sa-status:before,.sa-avatar[size=sm][status]:before": {
    "borderWidth": "1px",
    "height": ".5rem",
    "top": ".05rem",
    "right": ".05rem",
    "width": ".5rem"
  },
  ".sa-avatar.sa-lg,.sa-avatar[size=lg]": {
    "fontWeight": "500",
    "height": "5rem",
    "fontSize": "2.25rem",
    "lineHeight": "2.5rem",
    "maxHeight": "5rem",
    "maxWidth": "5rem",
    "minHeight": "5rem",
    "minWidth": "5rem",
    "width": "5rem"
  },
  ".sa-avatar.sa-lg.sa-status:before,.sa-avatar.sa-lg[status]:before,.sa-avatar[size=lg].sa-status:before,.sa-avatar[size=lg][status]:before": {
    "borderWidth": "2px",
    "height": "1rem",
    "top": ".25rem",
    "right": ".25rem",
    "width": "1rem"
  },
  ".sa-avatar.sa-xl,.sa-avatar[size=xl]": {
    "fontWeight": "300",
    "height": "8rem",
    "fontSize": "4.5rem",
    "lineHeight": "1",
    "maxHeight": "8rem",
    "maxWidth": "8rem",
    "minHeight": "8rem",
    "minWidth": "8rem",
    "width": "8rem"
  },
  ".sa-avatar.sa-xl.sa-status:before,.sa-avatar.sa-xl[status]:before,.sa-avatar[size=xl].sa-status:before,.sa-avatar[size=xl][status]:before": {
    "borderWidth": "3px",
    "height": "1.25rem",
    "top": ".65rem",
    "right": ".65rem",
    "width": "1.25rem"
  },
  ".sa-avatar.sa-status-danger:before,.sa-avatar[status=danger]:before": {
    "--tw-bg-opacity": "1 !important",
    "backgroundColor": "rgba(239,68,68,var(--tw-bg-opacity)) !important"
  },
  ".sa-avatar.sa-status-success:before,.sa-avatar[status=success]:before": {
    "--tw-bg-opacity": "1 !important",
    "backgroundColor": "rgba(16,185,129,var(--tw-bg-opacity)) !important"
  },
  ".sa-avatar.sa-status-info:before,.sa-avatar[status=info]:before": {
    "--tw-bg-opacity": "1 !important",
    "backgroundColor": "rgba(14,165,233,var(--tw-bg-opacity)) !important"
  },
  ".sa-avatar.sa-status-warning:before,.sa-avatar[status=warning]:before": {
    "--tw-bg-opacity": "1 !important",
    "backgroundColor": "rgba(245,158,11,var(--tw-bg-opacity)) !important"
  },
  ".sa-btn": {
    "borderRadius": ".375rem",
    "cursor": "pointer",
    "display": [
      "-webkit-inline-box",
      "-ms-inline-flexbox",
      "-webkit-inline-flex",
      "inline-flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "WebkitBoxPack": "center",
    "msFlexPack": "center",
    "WebkitJustifyContent": "center",
    "justifyContent": "center",
    "fontWeight": "500",
    "minHeight": "2.25rem",
    "padding": ".25rem 1rem",
    "--tw-translate-x": "0",
    "--tw-translate-y": "0",
    "--tw-translate-z": "0",
    "--tw-rotate": "0",
    "--tw-rotate-x": "0",
    "--tw-rotate-y": "0",
    "--tw-rotate-z": "0",
    "--tw-skew-x": "0",
    "--tw-skew-y": "0",
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    "--tw-scale-z": "1",
    "WebkitTransform": "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))",
    "msTransform": "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))",
    "transform": "translate(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotate(var(--tw-rotate-z)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))",
    "WebkitTransitionDuration": ".15s",
    "OTransitionDuration": ".15s",
    "transitionDuration": ".15s"
  },
  ".sa-btn:focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px",
    "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    "WebkitBoxShadow": "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)",
    "boxShadow": "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)",
    "--tw-ring-offset-width": "1px",
    "--tw-ring-opacity": [
      "1",
      ".5"
    ],
    "--tw-ring-color": "rgba(24, 115, 232, var(--tw-ring-opacity))"
  },
  ".sa-btn:active": {
    "--tw-scale-x": ".9",
    "--tw-scale-y": ".9",
    "--tw-scale-z": ".9"
  },
  ".sa-btn-icon,.sa-btn[icon]:not([icon=\"false\"])": {
    "borderRadius": "9999px",
    "minWidth": "2.25rem",
    "padding": "0"
  },
  ".sa-btn.sa-xs,.sa-btn[size=xs]": {
    "fontSize": ".75rem",
    "lineHeight": [
      "1rem",
      "0rem"
    ],
    "minHeight": "1.25rem",
    "paddingLeft": ".5rem",
    "paddingRight": ".5rem"
  },
  ".sa-btn.sa-xs[icon],.sa-btn[size=xs][icon]": {
    "minWidth": "1.25rem"
  },
  ".sa-btn.sa-sm,.sa-btn[size=sm]": {
    "fontSize": ".875rem",
    "lineHeight": [
      "1.25rem",
      "0rem"
    ],
    "minHeight": "2rem",
    "paddingLeft": ".75rem",
    "paddingRight": ".75rem"
  },
  ".sa-btn.sa-sm[icon],.sa-btn[size=sm][icon]": {
    "minWidth": "2rem"
  },
  ".sa-btn.sa-lg,.sa-btn[size=lg]": {
    "fontSize": "1.125rem",
    "lineHeight": "1.75rem",
    "minHeight": "3rem",
    "paddingLeft": "1.5rem",
    "paddingRight": "1.5rem"
  },
  ".sa-btn.sa-lg[icon],.sa-btn[size=lg][icon]": {
    "minWidth": "3rem"
  },
  ".sa-btn.sa-xl,.sa-btn[size=xl]": {
    "fontSize": "1.25rem",
    "lineHeight": "1.75rem",
    "minHeight": "3.5rem",
    "paddingLeft": "2rem",
    "paddingRight": "2rem"
  },
  ".sa-btn.sa-xl[icon],.sa-btn[size=xl][icon]": {
    "minWidth": "3.5rem"
  },
  ".sa-btn.sa-btn-scale-none:active,.sa-btn[scale=none]:active": {
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    "--tw-scale-z": "1"
  },
  ".sa-btn.sa-btn-scale-none,.sa-btn[scale=none]": {
    "WebkitTransitionProperty": "none",
    "OTransitionProperty": "none",
    "transitionProperty": "none"
  },
  ".sa-btn.sa-btn-disabled,.sa-btn[disabled]:not([disabled=\"false\"])": {
    "--tw-bg-opacity": "1 !important",
    "backgroundColor": "rgba(203,213,225,var(--tw-bg-opacity)) !important",
    "--tw-border-opacity": "1 !important",
    "borderColor": "rgba(15,23,42,var(--tw-border-opacity)) !important",
    "cursor": "default !important",
    "opacity": "0.2 !important",
    "--tw-text-opacity": "1 !important",
    "color": "rgba(71,85,105,var(--tw-text-opacity)) !important",
    "--tw-scale-x": "1 !important",
    "--tw-scale-y": "1 !important",
    "--tw-scale-z": "1 !important"
  },
  ".dark .sa-btn.sa-btn-disabled,.dark .sa-btn[disabled]:not([disabled=\"false\"])": {
    "--tw-border-opacity": "1 !important",
    "borderColor": "rgba(15,23,42,var(--tw-border-opacity)) !important"
  },
  ".sa-link": {
    "borderRadius": ".25rem"
  },
  ".sa-link:hover": {
    "cursor": "pointer",
    "WebkitTextDecorationLine": "underline",
    "textDecorationLine": "underline"
  },
  ".sa-btn-group .sa-btn": {
    "borderRadius": "0 !important"
  },
  ".sa-btn-group>.sa-btn:first-child,.sa-btn-group>:first-child .sa-btn": {
    "borderTopLeftRadius": ".25rem !important",
    "borderBottomLeftRadius": ".25rem !important"
  },
  ".sa-btn-group>.sa-btn:last-child,.sa-btn-group>:last-child .sa-btn": {
    "borderTopRightRadius": ".25rem !important",
    "borderBottomRightRadius": ".25rem !important"
  },
  ".sa-carousel": {
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "overflowX": "scroll",
    "scrollSnapType": "x mandatory",
    "msOverflowStyle": "none",
    "scrollbarWidth": "none"
  },
  ".sa-carousel::-webkit-scrollbar": {
    "display": "none"
  },
  ".sa-carousel[direction=vertical],.sa-carousel.direction-vertical": {
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "msFlexDirection": "column",
    "WebkitFlexDirection": "column",
    "flexDirection": "column",
    "overflowX": "hidden",
    "overflowY": "scroll",
    "scrollSnapType": "y mandatory"
  },
  ".sa-carousel-item": {
    "WebkitBoxSizing": "content-box",
    "boxSizing": "content-box",
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxFlex": "0",
    "msFlex": "none",
    "WebkitFlex": "none",
    "flex": "none",
    "scrollSnapAlign": "start"
  },
  ".sa-codeinput": {
    "backgroundColor": "transparent !important",
    "borderStyle": "none !important",
    "display": [
      "-webkit-box !important",
      "-ms-flexbox !important",
      "-webkit-flex !important",
      "flex !important"
    ],
    "WebkitBoxAlign": "center !important",
    "msFlexAlign": "center !important",
    "WebkitAlignItems": "center !important",
    "alignItems": "center !important",
    "gridGap": ".5rem !important",
    "gap": ".5rem !important"
  },
  ".sa-codeinput input": {
    "backgroundColor": "transparent",
    "borderRadius": ".375rem",
    "fontWeight": "800",
    "height": "2.75rem",
    "fontSize": "1.5rem",
    "lineHeight": "2rem",
    "textAlign": "center",
    "textTransform": "uppercase",
    "width": "2.75rem"
  },
  ".sa-codeinput div[name=separator]": {
    "fontWeight": "700",
    "fontSize": "1.125rem",
    "lineHeight": "1.75rem",
    "textAlign": "center"
  },
  ".sa-codeinput div[name=separator]:after": {
    "content": "\"-\""
  },
  ".sa-collapse .down": {
    "position": "absolute",
    "bottom": "0px",
    "width": "100%"
  },
  ".sa-collapse-enter-active,.sa-collapse-leave-active": {
    "willChange": "height",
    "transition": "height .3s ease",
    "overflow": "hidden"
  },
  ".sa-collapse-enter-from,.sa-collapse-leave-to": {
    "height": "0 !important"
  },
  ".sa-datepicker-overlay:before": {
    "content": "\"\"",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(0,0,0,var(--tw-bg-opacity))",
    "display": "none",
    "opacity": "0",
    "position": "fixed",
    "top": "0px",
    "right": "0px",
    "bottom": "0px",
    "left": "0px",
    "WebkitTransitionProperty": "opacity",
    "OTransitionProperty": "opacity",
    "transitionProperty": "opacity",
    "WebkitTransitionTimingFunction": [
      "cubic-bezier(.4,0,.2,1)",
      "cubic-bezier(0,0,.2,1)"
    ],
    "OTransitionTimingFunction": [
      "cubic-bezier(.4,0,.2,1)",
      "cubic-bezier(0,0,.2,1)"
    ],
    "transitionTimingFunction": [
      "cubic-bezier(.4,0,.2,1)",
      "cubic-bezier(0,0,.2,1)"
    ],
    "WebkitTransitionDuration": [
      ".15s",
      ".2s"
    ],
    "OTransitionDuration": [
      ".15s",
      ".2s"
    ],
    "transitionDuration": [
      ".15s",
      ".2s"
    ]
  },
  ".sa-datepicker-overlay.open:before": {
    "display": "block",
    "opacity": "0.5"
  },
  ".sa-datepicker:before": {
    "--sa-datepicker": "0px",
    "content": "\"\"",
    "transform": "translate(50%,-50%) rotate(-45deg)",
    "clipPath": "polygon(calc(var(--sa-datepicker) * -1) calc(var(--sa-datepicker) * -1),calc(100% + var(--sa-datepicker)) calc(var(--sa-datepicker) * -1),calc(100% + var(--sa-datepicker)) calc(100% + var(--sa-datepicker)))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(255,255,255,var(--tw-bg-opacity))",
    "--tw-border-opacity": [
      "1",
      ".1"
    ],
    "borderColor": "rgba(0,0,0,var(--tw-border-opacity))",
    "borderWidth": "1px",
    "height": "1rem",
    "position": "absolute",
    "top": "0px",
    "--tw-shadow": "0 1px 3px 0 rgb(0 0 0/.1),0 1px 2px -1px rgb(0 0 0/.1)",
    "--tw-shadow-colored": "0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)",
    "WebkitBoxShadow": "var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)",
    "boxShadow": "var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)",
    "width": "1rem"
  },
  ".dark .sa-datepicker:before": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(31,41,55,var(--tw-bg-opacity))",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(55,65,81,var(--tw-border-opacity))"
  },
  ".sa-datepicker.place-left:before": {
    "left": ".25rem"
  },
  ".sa-datepicker.place-right:before": {
    "right": "1.25rem"
  },
  ".sa-dialog": {
    "borderRadius": ".25rem",
    "width": "100%"
  },
  ".sa-dialog [name=titlebar]": {
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "padding": ".5rem .5rem .5rem 1rem",
    "gridGap": ".5rem",
    "gap": ".5rem"
  },
  ".sa-dialog [name=close-icon]": {
    "height": "1.5rem",
    "width": "1.5rem"
  },
  ".sa-dialog [name=actions]": {
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "WebkitBoxPack": "end",
    "msFlexPack": "end",
    "WebkitJustifyContent": "flex-end",
    "justifyContent": "flex-end",
    "padding": ".5rem",
    "gridGap": ".5rem",
    "gap": ".5rem"
  },
  ".sa-drawer": {
    "minWidth": "18.75rem",
    "overflowX": "hidden",
    "overflowY": "auto",
    "width": "18.75rem"
  },
  ".sa-drawer-mini,.sa-drawer[mini]:not([mini=\"false\"])": {
    "maxWidth": "4rem",
    "minWidth": "4rem"
  },
  ".sa-drawer-mini~.sa-drawer-left": {
    "marginLeft": "4rem"
  },
  ".sa-drawer-autohide-sm,.sa-drawer[autohide=sm]": {
    "display": "none"
  },
  "@media (min-width: 640px)": [
    {
      ".sa-drawer-autohide-sm,.sa-drawer[autohide=sm]": {
        "display": "block"
      }
    },
    {
      ".sa-drawer-responsive-sm,.sa-drawer[responsive=sm]": {
        "maxWidth": "18.75rem",
        "minWidth": "18.75rem"
      }
    },
    {
      ".sa-formsection-content": {
        "padding": "1.5rem"
      }
    },
    {
      ".sa-overlay-center": {
        "WebkitBoxAlign": "center",
        "msFlexAlign": "center",
        "WebkitAlignItems": "center",
        "alignItems": "center"
      }
    }
  ],
  ".sa-drawer-autohide-md,.sa-drawer[autohide=md]": {
    "display": "none"
  },
  "@media (min-width: 768px)": [
    {
      ".sa-drawer-autohide-md,.sa-drawer[autohide=md]": {
        "display": "block"
      }
    },
    {
      ".sa-formsection": {
        "display": [
          "-ms-grid",
          "grid"
        ],
        "gridGap": "1.5rem",
        "gap": "1.5rem"
      }
    },
    {
      ".sa-col-3-2-1": {
        "gridTemplateColumns": "repeat(2,minmax(0,1fr))"
      }
    },
    {
      ".sa-col-2-1": {
        "gridTemplateColumns": "repeat(2,minmax(0,1fr))"
      }
    }
  ],
  ".sa-drawer-autohide-lg,.sa-drawer[autohide=lg]": {
    "display": "none"
  },
  "@media (min-width: 1024px)": [
    {
      ".sa-drawer-autohide-lg,.sa-drawer[autohide=lg]": {
        "display": "block"
      }
    },
    {
      ".sa-drawer-autohide-sm~.sa-drawer-left,.sa-drawer[autohide=sm]~.sa-drawer-left,.sa-drawer-autohide-md~.sa-drawer-left,.sa-drawer[autohide=md]~.sa-drawer-left,.sa-drawer-autohide-lg~.sa-drawer-left,.sa-drawer[autohide=lg]~.sa-drawer-left,.sa-drawer-autohide-xl~.sa-drawer-left,.sa-drawer[autohide=xl]~.sa-drawer-left": {
        "marginLeft": "18.75rem"
      }
    },
    {
      ".sa-drawer-responsive-lg,.sa-drawer[responsive=lg]": {
        "maxWidth": "18.75rem",
        "minWidth": "18.75rem"
      }
    },
    {
      ".sa-formsection": {
        "gridTemplateColumns": "repeat(3,minmax(0,1fr))"
      }
    },
    {
      ".sa-col-3-1": {
        "gridTemplateColumns": "repeat(3,minmax(0,1fr))"
      }
    },
    {
      ".sa-col-3-2-1": {
        "gridTemplateColumns": "repeat(3,minmax(0,1fr))"
      }
    }
  ],
  ".sa-drawer-autohide-xl,.sa-drawer[autohide=xl]": {
    "display": "none"
  },
  "@media (min-width: 1280px)": [
    {
      ".sa-drawer-autohide-xl,.sa-drawer[autohide=xl]": {
        "display": "block"
      }
    },
    {
      ".sa-drawer-responsive-xl,.sa-drawer[responsive=xl]": {
        "maxWidth": "18.75rem",
        "minWidth": "18.75rem"
      }
    }
  ],
  ".sa-drawer-responsive-sm,.sa-drawer[responsive=sm]": {
    "maxWidth": "4rem",
    "minWidth": "4rem"
  },
  ".sa-drawer-responsive-lg,.sa-drawer[responsive=lg]": {
    "maxWidth": "4rem",
    "minWidth": "4rem"
  },
  ".sa-drawer-responsive-xl,.sa-drawer[responsive=xl]": {
    "maxWidth": "4rem",
    "minWidth": "4rem"
  },
  ".sa-dropdown": {
    "display": "inline-block",
    "position": "relative"
  },
  ".sa-dropdown-enter-active,.sa-dropdown-leave-active": {
    "transition": "opacity .3s ease"
  },
  ".sa-dropdown-enter-from,.sa-dropdown-leave-to": {
    "opacity": "0"
  },
  ".sa-formsection [name=title]": {
    "fontWeight": "500",
    "fontSize": "1.25rem",
    "lineHeight": [
      "1.75rem",
      "1.5rem"
    ]
  },
  ".sa-formsection [name=desc]": {
    "marginTop": ".5rem",
    "--tw-text-opacity": "1",
    "color": "rgba(31,41,55,var(--tw-text-opacity))"
  },
  ".dark .sa-formsection [name=desc]": {
    "--tw-text-opacity": "1",
    "color": "rgba(156,163,175,var(--tw-text-opacity))"
  },
  ".sa-formsection-content>:not([hidden])~:not([hidden])": {
    "--tw-space-y-reverse": "0",
    "marginTop": "calc(1.5rem * calc(1 - var(--tw-space-y-reverse)))",
    "marginBottom": "calc(1.5rem * var(--tw-space-y-reverse))"
  },
  ".sa-formsection-content": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(255,255,255,var(--tw-bg-opacity))",
    "padding": "1.25rem 1rem"
  },
  ".dark .sa-formsection-content": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(30,41,59,var(--tw-bg-opacity))"
  },
  ".sa-line": {
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "WebkitBoxPack": "center",
    "msFlexPack": "center",
    "WebkitJustifyContent": "center",
    "justifyContent": "center"
  },
  ".sa-line>div[name=line]": {
    "--tw-border-opacity": [
      "1",
      ".1"
    ],
    "borderColor": "rgba(0,0,0,var(--tw-border-opacity))",
    "borderTopWidth": "1px",
    "WebkitBoxFlex": "1",
    "msFlexPositive": "1",
    "WebkitFlexGrow": "1",
    "flexGrow": "1"
  },
  ".dark .sa-line>div[name=line]": {
    "--tw-border-opacity": [
      "1",
      ".2"
    ],
    "borderColor": "rgba(255,255,255,var(--tw-border-opacity))"
  },
  ".sa-mock-window": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(255,255,255,var(--tw-bg-opacity))",
    "borderRadius": ".25rem",
    "overflow": "hidden",
    "overflowY": "auto",
    "paddingTop": "1.25rem",
    "position": "relative"
  },
  ".dark .sa-mock-window": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(30,41,59,var(--tw-bg-opacity))"
  },
  ".sa-mock-window:before": {
    "content": "\"\"",
    "boxShadow": "1.4em 0,2.8em 0,4.2em 0",
    "borderRadius": "9999px",
    "display": "block",
    "height": ".75rem",
    "marginBottom": "1rem",
    "opacity": "0.3",
    "width": ".75rem"
  },
  ".sa-overlay": {
    "height": "100%",
    "overflowY": "auto",
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "width": "100%"
  },
  ".sa-overlay-top": {
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "width": "100%"
  },
  ".sa-overlay-left": {
    "height": "100%",
    "position": "fixed",
    "top": "0px",
    "left": "0px"
  },
  ".sa-overlay-right": {
    "height": "100%",
    "position": "fixed",
    "top": "0px",
    "right": "0px"
  },
  ".sa-overlay-bottom": {
    "position": "fixed",
    "bottom": "0px",
    "left": "0px",
    "width": "100%"
  },
  ".sa-overlay-center": {
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxPack": "center",
    "msFlexPack": "center",
    "WebkitJustifyContent": "center",
    "justifyContent": "center",
    "height": "100%",
    "overflow": "auto",
    "pointerEvents": "none",
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "width": "100%"
  },
  ".sa-overlay-top>*,.sa-overlay-left>*,.sa-overlay-right>*,.sa-overlay-bottom>*,.sa-overlay-center>*": {
    "pointerEvents": "auto"
  },
  ".sa-overlay-absolute>.sa-overlay,.sa-overlay-absolute>.sa-overlay-top,.sa-overlay-absolute>.sa-overlay-left,.sa-overlay-absolute>.sa-overlay-right,.sa-overlay-absolute>.sa-overlay-bottom,.sa-overlay-absolute>.sa-overlay-center": {
    "position": "absolute"
  },
  ".sa-overlay-relative>.sa-overlay,.sa-overlay-relative>.sa-overlay-top,.sa-overlay-relative>.sa-overlay-left,.sa-overlay-relative>.sa-overlay-right,.sa-overlay-relative>.sa-overlay-bottom,.sa-overlay-relative>.sa-overlay-center": {
    "position": "relative"
  },
  ".sa-overlay-shade>.sa-overlay": {
    "--tw-bg-opacity": [
      "1",
      ".3"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".dark .sa-overlay-shade>.sa-overlay": {
    "--tw-bg-opacity": ".6"
  },
  ".sa-overlay-enter-active,.sa-overlay-leave-active": {
    "transition": "opacity .3s ease"
  },
  ".sa-overlay-enter-from,.sa-overlay-leave-to": {
    "opacity": "0"
  },
  ".sa-overlay-center-enter-active": {
    "transition": "opacity .2s ease-out,transform .2s ease-out"
  },
  ".sa-overlay-center-leave-active": {
    "transition": "opacity .2s ease-out,transform .2s ease-in"
  },
  ".sa-overlay-center-enter-from,.sa-overlay-center-leave-to": {
    "transform": "translateY(20px)",
    "opacity": "0"
  },
  ".sa-overlay-left-enter-active": {
    "transition": "transform .2s ease-out"
  },
  ".sa-overlay-left-leave-active": {
    "transition": "transform .2s ease-in"
  },
  ".sa-overlay-left-enter-from,.sa-overlay-left-leave-to": {
    "transform": "translate(-100%)"
  },
  ".sa-overlay-right-enter-active": {
    "transition": "transform .2s ease-out"
  },
  ".sa-overlay-right-leave-active": {
    "transition": "transform .2s ease-in"
  },
  ".sa-overlay-right-enter-from,.sa-overlay-right-leave-to": {
    "transform": "translate(100%)"
  },
  ".sa-overlay-bottom-enter-active": {
    "transition": "transform .2s ease-out"
  },
  ".sa-overlay-bottom-leave-active": {
    "transition": "transform .2s ease-in"
  },
  ".sa-overlay-bottom-enter-from,.sa-overlay-bottom-leave-to": {
    "transform": "translateY(100%)"
  },
  ".sa-overlay-top-enter-active": {
    "transition": "transform .2s ease-out"
  },
  ".sa-overlay-top-leave-active": {
    "transition": "transform .2s ease-in"
  },
  ".sa-overlay-top-enter-from,.sa-overlay-top-leave-to": {
    "transform": "translateY(-100%)"
  },
  ".sa-pagination": {
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center"
  },
  ".sa-pagination button[link]": {
    "backgroundColor": "transparent",
    "cursor": "pointer",
    "fontWeight": "700",
    "minWidth": "2.5rem",
    "width": "2.5rem"
  },
  ".sa-pagination button[link][active=true]": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(24,115,232,var(--tw-bg-opacity))",
    "borderRadius": ".25rem",
    "height": "2rem",
    "--tw-text-opacity": "1",
    "color": "rgba(255,255,255,var(--tw-text-opacity))",
    "width": "1.25rem"
  },
  ".sa-pagination button[link][active=true]:hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(29,102,202,var(--tw-bg-opacity))"
  },
  ".sa-pagination div[name=more]": {
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "msFlexDirection": "column",
    "WebkitFlexDirection": "column",
    "flexDirection": "column",
    "fontWeight": "700",
    "minWidth": "2.5rem",
    "textAlign": "center",
    "width": "2.5rem"
  },
  ".sa-pagination div[name=more] [name=page]": {
    "display": "none"
  },
  ".sa-pagination div[name=more][active=true]": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(24,115,232,var(--tw-bg-opacity))",
    "borderRadius": ".25rem",
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxPack": "center",
    "msFlexPack": "center",
    "WebkitJustifyContent": "center",
    "justifyContent": "center",
    "height": "2rem",
    "--tw-text-opacity": "1",
    "color": "rgba(255,255,255,var(--tw-text-opacity))"
  },
  ".sa-pagination div[name=more][active=true] [name=page]": {
    "display": "block",
    "fontSize": ".875rem",
    "lineHeight": [
      "1.25rem",
      "1.25"
    ],
    "marginBottom": "-.5rem"
  },
  ".sa-pagination div[name=more][active=true] [name=dots]": {
    "fontSize": ".75rem",
    "lineHeight": [
      "1rem",
      "1.25"
    ]
  },
  ".sa-pagination button[left]": {
    "borderRadius": ".25rem",
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "WebkitBoxPack": "center",
    "msFlexPack": "center",
    "WebkitJustifyContent": "center",
    "justifyContent": "center",
    "height": "2rem",
    "marginRight": ".5rem",
    "minWidth": "1.5rem",
    "width": "1.5rem"
  },
  ".sa-pagination button[left][disabled]": {
    "opacity": "0.2",
    "pointerEvents": "none"
  },
  ".sa-pagination button[right]": {
    "borderRadius": ".25rem",
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "WebkitBoxPack": "center",
    "msFlexPack": "center",
    "WebkitJustifyContent": "center",
    "justifyContent": "center",
    "height": "2rem",
    "marginLeft": ".5rem",
    "minWidth": "1.5rem",
    "width": "1.5rem"
  },
  ".sa-pagination button[right][disabled]": {
    "opacity": "0.2",
    "pointerEvents": "none"
  },
  ".sa-progress-bar>div": {
    "transition": "width .1s ease-in"
  },
  ".sa-progress-circle": {
    "borderRadius": "9999px",
    "height": "100%",
    "position": "absolute",
    "top": "0px",
    "left": "0px",
    "width": "100%"
  },
  ".sa-resizer": {
    "position": "relative"
  },
  ".sa-resizer.width": {
    "paddingRight": "1.25rem"
  },
  ".sa-resizer.height": {
    "paddingBottom": "1.25rem"
  },
  ".sa-resizer.both": {
    "padding": "0"
  },
  ".sa-resize-handle": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(71,85,105,var(--tw-bg-opacity))",
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "WebkitBoxPack": "center",
    "msFlexPack": "center",
    "WebkitJustifyContent": "center",
    "justifyContent": "center",
    "position": "absolute",
    "--tw-text-opacity": "1",
    "color": "rgba(226,232,240,var(--tw-text-opacity))"
  },
  ".sa-resize-handle.width": {
    "height": "100%",
    "top": "0px",
    "right": "0px",
    "width": "1.25rem",
    "cursor": "ew-resize"
  },
  ".sa-resize-handle.height": {
    "height": "1.25rem",
    "bottom": "0px",
    "left": "0px",
    "width": "100%",
    "cursor": "ns-resize"
  },
  ".sa-resize-handle.both": {
    "height": "1.25rem",
    "bottom": "0px",
    "right": "0px",
    "width": "1.25rem",
    "cursor": "nwse-resize"
  },
  ".sa-select:focus-within": {
    "--tw-border-opacity": [
      "1",
      "1 !important"
    ],
    "borderColor": "rgba(24,115,232,var(--tw-border-opacity))"
  },
  ".sa-select": {
    "borderRadius": ".25rem",
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "padding": ".5rem .75rem",
    "position": "relative",
    "gridGap": ".5rem",
    "gap": ".5rem"
  },
  ".sa-select label": {
    "display": "block",
    "fontSize": ".75rem",
    "lineHeight": "1rem",
    "pointerEvents": "none",
    "position": "absolute",
    "top": ".5rem",
    "--tw-text-opacity": [
      "1",
      ".4"
    ],
    "color": "rgba(0,0,0,var(--tw-text-opacity))"
  },
  ".dark .sa-select label": {
    "--tw-text-opacity": [
      "1",
      ".4"
    ],
    "color": "rgba(255,255,255,var(--tw-text-opacity))"
  },
  ".sa-select select": {
    "backgroundColor": "transparent",
    "height": "100%",
    "marginLeft": "-.25rem",
    "paddingTop": ".25rem",
    "paddingBottom": ".25rem",
    "resize": "none",
    "--tw-text-opacity": "1",
    "color": "rgba(0,0,0,var(--tw-text-opacity))",
    "width": "100%"
  },
  ".sa-select select:focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  ".dark .sa-select select": {
    "--tw-text-opacity": "1",
    "color": "rgba(255,255,255,var(--tw-text-opacity))"
  },
  ".sa-select label~select": {
    "paddingTop": "1.25rem"
  },
  ".sa-select-error": {
    "--tw-border-opacity": "1 !important",
    "borderColor": "rgba(220,38,38,var(--tw-border-opacity)) !important"
  },
  ".sa-select-error:focus-within": {
    "--tw-border-opacity": "1 !important",
    "borderColor": "rgba(220,38,38,var(--tw-border-opacity)) !important"
  },
  ".sa-select-error label": {
    "--tw-text-opacity": "1 !important",
    "color": "rgba(220,38,38,var(--tw-text-opacity)) !important"
  },
  ".dark .sa-select-error label": {
    "--tw-text-opacity": "1 !important",
    "color": "rgba(248,113,113,var(--tw-text-opacity)) !important"
  },
  ".sa-select-disabled": {
    "opacity": "0.5"
  },
  ".sa-select-disabled label": {
    "marginBottom": "-.25rem",
    "--tw-text-opacity": [
      "1",
      ".4"
    ],
    "color": "rgba(15,23,42,var(--tw-text-opacity))"
  },
  ".dark .sa-select-disabled label": {
    "--tw-text-opacity": [
      "1",
      ".4"
    ],
    "color": "rgba(255,255,255,var(--tw-text-opacity))"
  },
  ".sa-slider-sm": {
    "height": ".75rem",
    "position": "relative",
    "width": "100%"
  },
  ".sa-slider-sm input[type=range]": {
    "WebkitAppearance": "none",
    "MozAppearance": "none",
    "appearance": "none",
    "cursor": "pointer",
    "height": ".75rem",
    "opacity": "0",
    "pointerEvents": "none",
    "position": "absolute",
    "width": "100%",
    "zIndex": "1",
    "transform": "translateY(-50%)"
  },
  ".sa-slider-sm input[type=range]::-webkit-slider-runnable-track": {
    "cursor": "pointer",
    "height": "100%",
    "width": "100%"
  },
  ".sa-slider-sm input[type=range]::-webkit-slider-thumb": {
    "WebkitAppearance": "none",
    "MozAppearance": "none",
    "appearance": "none",
    "height": ".75rem",
    "pointerEvents": "auto",
    "width": ".75rem"
  },
  ".sa-slider-sm-track": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(243,244,246,var(--tw-bg-opacity))",
    "borderRadius": "9999px",
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "height": ".25rem",
    "position": "absolute",
    "left": "0px",
    "width": "100%"
  },
  ".dark .sa-slider-sm-track": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(55,65,81,var(--tw-bg-opacity))"
  },
  ".sa-slider-sm-highlight": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(56,189,248,var(--tw-bg-opacity))",
    "borderRadius": "9999px",
    "height": [
      "100%",
      ".25rem"
    ],
    "position": "absolute"
  },
  ".sa-slider-sm-thumb": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(255,255,255,var(--tw-bg-opacity))",
    "borderRadius": "9999px",
    "height": ".75rem",
    "position": "absolute",
    "width": ".75rem",
    "--tw-blur": "var(--tw-empty, )",
    "--tw-brightness": "var(--tw-empty, )",
    "--tw-contrast": "var(--tw-empty, )",
    "--tw-grayscale": "var(--tw-empty, )",
    "--tw-hue-rotate": "var(--tw-empty, )",
    "--tw-invert": "var(--tw-empty, )",
    "--tw-saturate": "var(--tw-empty, )",
    "--tw-sepia": "var(--tw-empty, )",
    "--tw-drop-shadow": [
      "var(--tw-empty, )",
      "drop-shadow(0 1px 2px rgba(0, 0, 0, .1)) drop-shadow(0 1px 1px rgba(0, 0, 0, .06))"
    ],
    "WebkitFilter": "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",
    "filter": "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
  },
  ".sa-slider": {
    "height": "1.25rem",
    "position": "relative",
    "width": "100%"
  },
  ".sa-slider input[type=range]": {
    "WebkitAppearance": "none",
    "MozAppearance": "none",
    "appearance": "none",
    "cursor": "pointer",
    "height": "1.25rem",
    "opacity": "0",
    "pointerEvents": "none",
    "position": "absolute",
    "width": "100%",
    "zIndex": "1",
    "transform": "translateY(-50%)"
  },
  ".sa-slider input[type=range]::-webkit-slider-runnable-track": {
    "cursor": "pointer",
    "height": "100%",
    "width": "100%"
  },
  ".sa-slider input[type=range]::-webkit-slider-thumb": {
    "WebkitAppearance": "none",
    "MozAppearance": "none",
    "appearance": "none",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(239,68,68,var(--tw-bg-opacity))",
    "height": "1.25rem",
    "pointerEvents": "auto",
    "width": "1.25rem"
  },
  ".sa-slider-track": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(243,244,246,var(--tw-bg-opacity))",
    "borderRadius": "9999px",
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "height": ".5rem",
    "position": "absolute",
    "left": "0px",
    "width": "100%"
  },
  ".dark .sa-slider-track": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(55,65,81,var(--tw-bg-opacity))"
  },
  ".sa-slider-highlight": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(56,189,248,var(--tw-bg-opacity))",
    "borderRadius": "9999px",
    "height": [
      "100%",
      ".5rem"
    ],
    "position": "absolute"
  },
  ".sa-slider-thumb": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(255,255,255,var(--tw-bg-opacity))",
    "borderRadius": "9999px",
    "height": "1.25rem",
    "position": "absolute",
    "width": "1.25rem",
    "--tw-blur": "var(--tw-empty, )",
    "--tw-brightness": "var(--tw-empty, )",
    "--tw-contrast": "var(--tw-empty, )",
    "--tw-grayscale": "var(--tw-empty, )",
    "--tw-hue-rotate": "var(--tw-empty, )",
    "--tw-invert": "var(--tw-empty, )",
    "--tw-saturate": "var(--tw-empty, )",
    "--tw-sepia": "var(--tw-empty, )",
    "--tw-drop-shadow": [
      "var(--tw-empty, )",
      "drop-shadow(0 1px 2px rgba(0, 0, 0, .1)) drop-shadow(0 1px 1px rgba(0, 0, 0, .06))"
    ],
    "WebkitFilter": "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",
    "filter": "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
  },
  ".sa-slider-lg": {
    "height": "2rem",
    "position": "relative"
  },
  ".sa-slider-lg input[type=range]": {
    "WebkitAppearance": "none",
    "MozAppearance": "none",
    "appearance": "none",
    "cursor": "pointer",
    "height": "2rem",
    "opacity": "0",
    "pointerEvents": "none",
    "position": "absolute",
    "width": "100%",
    "zIndex": "1",
    "transform": "translateY(-50%)"
  },
  ".sa-slider-lg input[type=range]::-webkit-slider-runnable-track": {
    "cursor": "pointer",
    "height": "100%",
    "width": "100%"
  },
  ".sa-slider-lg input[type=range]::-webkit-slider-thumb": {
    "WebkitAppearance": "none",
    "MozAppearance": "none",
    "appearance": "none",
    "height": "2rem",
    "pointerEvents": "auto",
    "width": "2rem"
  },
  ".sa-slider-lg-track": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(243,244,246,var(--tw-bg-opacity))",
    "borderRadius": "9999px",
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "height": "1rem",
    "position": "absolute",
    "left": "0px",
    "width": "100%"
  },
  ".dark .sa-slider-lg-track": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(55,65,81,var(--tw-bg-opacity))"
  },
  ".sa-slider-lg-highlight": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(56,189,248,var(--tw-bg-opacity))",
    "borderRadius": "9999px",
    "height": [
      "100%",
      "1rem"
    ],
    "position": "absolute"
  },
  ".sa-slider-lg-thumb": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(255,255,255,var(--tw-bg-opacity))",
    "borderRadius": "9999px",
    "height": "2rem",
    "position": "absolute",
    "width": "2rem",
    "--tw-blur": "var(--tw-empty, )",
    "--tw-brightness": "var(--tw-empty, )",
    "--tw-contrast": "var(--tw-empty, )",
    "--tw-grayscale": "var(--tw-empty, )",
    "--tw-hue-rotate": "var(--tw-empty, )",
    "--tw-invert": "var(--tw-empty, )",
    "--tw-saturate": "var(--tw-empty, )",
    "--tw-sepia": "var(--tw-empty, )",
    "--tw-drop-shadow": [
      "var(--tw-empty, )",
      "drop-shadow(0 1px 2px rgba(0, 0, 0, .1)) drop-shadow(0 1px 1px rgba(0, 0, 0, .06))"
    ],
    "WebkitFilter": "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",
    "filter": "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
  },
  ".sa-slider-xl": {
    "height": "2.5rem",
    "position": "relative"
  },
  ".sa-slider-xl input[type=range]": {
    "WebkitAppearance": "none",
    "MozAppearance": "none",
    "appearance": "none",
    "cursor": "pointer",
    "height": "2.5rem",
    "opacity": "0",
    "pointerEvents": "none",
    "position": "absolute",
    "width": "100%",
    "zIndex": "1",
    "transform": "translateY(-50%)"
  },
  ".sa-slider-xl input[type=range]::-webkit-slider-runnable-track": {
    "cursor": "pointer",
    "height": "100%",
    "width": "100%"
  },
  ".sa-slider-xl input[type=range]::-webkit-slider-thumb": {
    "WebkitAppearance": "none",
    "MozAppearance": "none",
    "appearance": "none",
    "height": "2.5rem",
    "pointerEvents": "auto",
    "width": "2.5rem"
  },
  ".sa-slider-xl-track": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(243,244,246,var(--tw-bg-opacity))",
    "borderRadius": "9999px",
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "height": "1.25rem",
    "position": "absolute",
    "left": "0px",
    "width": "100%"
  },
  ".dark .sa-slider-xl-track": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(55,65,81,var(--tw-bg-opacity))"
  },
  ".sa-slider-xl-highlight": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(56,189,248,var(--tw-bg-opacity))",
    "borderRadius": "9999px",
    "height": [
      "100%",
      "1.25rem"
    ],
    "position": "absolute"
  },
  ".sa-slider-xl-thumb": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(255,255,255,var(--tw-bg-opacity))",
    "borderRadius": "9999px",
    "height": "2.5rem",
    "position": "absolute",
    "width": "2.5rem",
    "--tw-blur": "var(--tw-empty, )",
    "--tw-brightness": "var(--tw-empty, )",
    "--tw-contrast": "var(--tw-empty, )",
    "--tw-grayscale": "var(--tw-empty, )",
    "--tw-hue-rotate": "var(--tw-empty, )",
    "--tw-invert": "var(--tw-empty, )",
    "--tw-saturate": "var(--tw-empty, )",
    "--tw-sepia": "var(--tw-empty, )",
    "--tw-drop-shadow": [
      "var(--tw-empty, )",
      "drop-shadow(0 1px 2px rgba(0, 0, 0, .1)) drop-shadow(0 1px 1px rgba(0, 0, 0, .06))"
    ],
    "WebkitFilter": "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",
    "filter": "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
  },
  ".sa-spinner": {
    "borderColor": "currentColor",
    "borderTopColor": "transparent",
    "borderRightColor": "transparent",
    "borderRadius": "9999px",
    "borderWidth": "2px",
    "display": "inline-block",
    "height": "3rem",
    "minHeight": "3rem",
    "minWidth": "3rem",
    "verticalAlign": "middle",
    "width": "3rem"
  },
  ".sa-switch": {
    "cursor": "pointer",
    "display": [
      "-webkit-inline-box",
      "-ms-inline-flexbox",
      "-webkit-inline-flex",
      "inline-flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "verticalAlign": "top"
  },
  ".sa-switch input~.dot": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(255,255,255,var(--tw-bg-opacity))",
    "borderRadius": "9999px",
    "height": "1.5rem",
    "position": "absolute",
    "left": ".25rem",
    "top": ".25rem",
    "width": "1.5rem",
    "WebkitTransitionProperty": "background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform,filter,backdrop-filter",
    "OTransitionProperty": "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
    "transitionProperty": "background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,transform,-webkit-transform,filter,backdrop-filter",
    "WebkitTransitionTimingFunction": "cubic-bezier(.4,0,.2,1)",
    "OTransitionTimingFunction": "cubic-bezier(.4,0,.2,1)",
    "transitionTimingFunction": "cubic-bezier(.4,0,.2,1)",
    "WebkitTransitionDuration": ".15s",
    "OTransitionDuration": ".15s",
    "transitionDuration": ".15s"
  },
  ".sa-switch input~.pill": {
    "--tw-bg-opacity": [
      "1",
      ".1"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))",
    "borderRadius": "9999px",
    "height": "2rem",
    "width": "3.5rem",
    "WebkitTransitionProperty": "background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform,filter,backdrop-filter",
    "OTransitionProperty": "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
    "transitionProperty": "background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,transform,-webkit-transform,filter,backdrop-filter",
    "WebkitTransitionTimingFunction": "cubic-bezier(.4,0,.2,1)",
    "OTransitionTimingFunction": "cubic-bezier(.4,0,.2,1)",
    "transitionTimingFunction": "cubic-bezier(.4,0,.2,1)",
    "WebkitTransitionDuration": ".15s",
    "OTransitionDuration": ".15s",
    "transitionDuration": ".15s"
  },
  ".dark .sa-switch input~.pill": {
    "--tw-bg-opacity": [
      "1",
      ".4"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".sa-switch input:checked~.dot": {
    "transform": "translate(100%)"
  },
  ".sa-switch input:checked~.pill": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(16,185,129,var(--tw-bg-opacity))"
  },
  ".sa-switch.disabled": {
    "cursor": "default",
    "opacity": "0.3"
  },
  ".dark .sa-switch.disabled": {
    "opacity": "0.4"
  },
  ".sa-switch.disabled input:checked~.pill": {
    "--tw-bg-opacity": [
      "1",
      ".1"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".dark .sa-switch.disabled input:checked~.pill": {
    "--tw-bg-opacity": [
      "1",
      ".4"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".sa-switch-sm input~.dot": {
    "height": "1rem",
    "width": "1rem"
  },
  ".sa-switch-sm input~.pill": {
    "height": "1.5rem",
    "width": "2.5rem"
  },
  ".sa-switch-lg input~.dot": {
    "height": "2rem",
    "width": "2rem"
  },
  ".sa-switch-lg input~.pill": {
    "height": "2.5rem",
    "width": "4.5rem"
  },
  ".sa-tab": {
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "WebkitBoxPack": "center",
    "msFlexPack": "center",
    "WebkitJustifyContent": "center",
    "justifyContent": "center",
    "padding": "1rem 1.5rem",
    "gridGap": ".5rem",
    "gap": ".5rem"
  },
  ".sa-tab-container": {
    "cursor": "pointer",
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitUserSelect": "none",
    "MozUserSelect": "none",
    "msUserSelect": "none",
    "userSelect": "none"
  },
  ".sa-tab-container-border": {
    "borderBottomWidth": "2px"
  },
  ".sa-tab-container-pill": {
    "paddingLeft": ".5rem",
    "paddingRight": ".5rem",
    "gridGap": ".5rem",
    "gap": ".5rem"
  },
  ".sa-tab-container-bar": {
    "borderRadius": ".5rem",
    "overflow": "hidden"
  },
  ".sa-tab-container-bar.sa-border": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(226,232,240,var(--tw-border-opacity))",
    "borderWidth": "1px"
  },
  ".dark .sa-tab-container-bar.sa-border": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(51,65,85,var(--tw-border-opacity))"
  },
  ".sa-tab-container-bar-tab": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(226,232,240,var(--tw-border-opacity))",
    "borderRightWidth": "1px"
  },
  ".dark .sa-tab-container-bar-tab": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(51,65,85,var(--tw-border-opacity))"
  },
  ".sa-tab-container-bar-tab:last-child": {
    "borderRightWidth": "0px"
  },
  ".sa-tab-container-w-full": {
    "WebkitBoxFlex": "1",
    "msFlexPositive": "1",
    "WebkitFlexGrow": "1",
    "flexGrow": "1"
  },
  ".sa-tab-border-active": {
    "--tw-border-opacity": "1",
    "borderBottomColor": "rgba(124,58,237,var(--tw-border-opacity))",
    "borderBottomWidth": "2px",
    "--tw-text-opacity": "1",
    "color": "rgba(124,58,237,var(--tw-text-opacity))"
  },
  ".dark .sa-tab-border-active": {
    "--tw-border-opacity": "1",
    "borderBottomColor": "rgba(167,139,250,var(--tw-border-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(250,250,250,var(--tw-text-opacity))"
  },
  ".sa-tab-border-spacer": {
    "borderBottomWidth": "2px",
    "WebkitBoxFlex": "1",
    "msFlexPositive": "1",
    "WebkitFlexGrow": "1",
    "flexGrow": "1"
  },
  ".sa-textinput:focus-within": {
    "--tw-border-opacity": [
      "1",
      "1 !important"
    ],
    "borderColor": "rgba(24,115,232,var(--tw-border-opacity))"
  },
  ".sa-textinput": {
    "borderRadius": ".25rem",
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "padding": ".5rem .75rem",
    "position": "relative",
    "gridGap": ".5rem",
    "gap": ".5rem"
  },
  ".sa-textinput label": {
    "display": "block",
    "fontSize": ".75rem",
    "lineHeight": "1rem",
    "pointerEvents": "none",
    "position": "absolute",
    "top": ".5rem",
    "--tw-text-opacity": ".4"
  },
  ".dark .sa-textinput label": {
    "--tw-text-opacity": ".4"
  },
  ".sa-textinput input,.sa-textinput textarea": {
    "backgroundColor": "transparent",
    "borderStyle": "none",
    "height": "100%",
    "paddingTop": ".25rem",
    "paddingBottom": ".25rem",
    "paddingLeft": "0",
    "paddingRight": "0",
    "resize": "none",
    "width": "100%"
  },
  ".sa-textinput input:focus,.sa-textinput textarea:focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px",
    "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    "WebkitBoxShadow": "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)",
    "boxShadow": "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)"
  },
  ".sa-textinput label~input,.sa-textinput label~textarea": {
    "margin": "0",
    "paddingTop": "1.25rem",
    "fontFamily": "inherit",
    "fontSize": "100%",
    "lineHeight": "inherit",
    "color": "inherit"
  },
  ".sa-textinput input[disabled]": {
    "opacity": "0.2"
  },
  ".dark .sa-textinput input[disabled]": {
    "opacity": "0.3"
  },
  ".sa-textinput input[disabled] label": {
    "marginBottom": "-.25rem",
    "--tw-text-opacity": ".4"
  },
  ".dark .sa-textinput input[disabled] label": {
    "--tw-text-opacity": ".4"
  },
  ".sa-textinput.has-error": {
    "--tw-border-opacity": "1 !important",
    "borderColor": "rgba(220,38,38,var(--tw-border-opacity)) !important"
  },
  ".sa-textinput.has-error:focus-within": {
    "--tw-border-opacity": "1 !important",
    "borderColor": "rgba(220,38,38,var(--tw-border-opacity)) !important"
  },
  ".sa-textinput.has-error label": {
    "--tw-text-opacity": "1 !important",
    "color": "rgba(220,38,38,var(--tw-text-opacity)) !important"
  },
  ".dark .sa-textinput.has-error label": {
    "--tw-text-opacity": "1 !important",
    "color": "rgba(248,113,113,var(--tw-text-opacity)) !important"
  },
  ".sa-tooltip": {
    "display": "inline-block"
  },
  ".sa-tooltip div[name=tooltip]": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(0,0,0,var(--tw-bg-opacity))",
    "borderRadius": ".5rem",
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "fontWeight": "600",
    "fontSize": ".875rem",
    "lineHeight": "1.25rem",
    "padding": ".5rem .75rem",
    "position": "absolute",
    "--tw-text-opacity": "1",
    "color": "rgba(255,255,255,var(--tw-text-opacity))",
    "zIndex": "1",
    "gridGap": ".5rem",
    "gap": ".5rem"
  },
  ".sa-tooltip div[name=arrow],.sa-tooltip div[name=arrow]:before": {
    "position": "absolute",
    "width": "8px",
    "height": "8px",
    "background": "inherit"
  },
  ".sa-tooltip div[name=arrow]": {
    "visibility": "hidden"
  },
  ".sa-tooltip div[name=arrow]:before": {
    "visibility": "visible",
    "content": "\"\"",
    "transform": "rotate(45deg)"
  },
  ".sa-tooltip div[data-popper-placement^=top]>div[name=arrow]": {
    "bottom": "-4px"
  },
  ".sa-tooltip div[data-popper-placement^=bottom]>div[name=arrow]": {
    "top": "-4px"
  },
  ".sa-tooltip div[data-popper-placement^=left]>div[name=arrow]": {
    "right": "-4px"
  },
  ".sa-tooltip div[data-popper-placement^=right]>div[name=arrow]": {
    "left": "-4px"
  },
  ".sa-main": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(255,255,255,var(--tw-bg-opacity))",
    "minHeight": "100vh",
    "overflowX": "hidden",
    "width": "100%"
  },
  ".dark .sa-main": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(209,213,219,var(--tw-text-opacity))"
  },
  ".sa-content": {
    "marginLeft": "auto",
    "marginRight": "auto",
    "maxWidth": "56rem",
    "width": "100%"
  },
  ".bg-danger": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(239,68,68,var(--tw-bg-opacity))"
  },
  ".bg-success": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(16,185,129,var(--tw-bg-opacity))"
  },
  ".bg-info": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(14,165,233,var(--tw-bg-opacity))"
  },
  ".bg-warning": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(245,158,11,var(--tw-bg-opacity))"
  },
  ".text-danger": {
    "--tw-text-opacity": "1",
    "color": "rgba(239,68,68,var(--tw-text-opacity))"
  },
  ".text-success": {
    "--tw-text-opacity": "1",
    "color": "rgba(16,185,129,var(--tw-text-opacity))"
  },
  ".text-info": {
    "--tw-text-opacity": "1",
    "color": "rgba(14,165,233,var(--tw-text-opacity))"
  },
  ".text-warning": {
    "--tw-text-opacity": "1",
    "color": "rgba(245,158,11,var(--tw-text-opacity))"
  },
  ".border-danger": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(239,68,68,var(--tw-border-opacity))"
  },
  ".border-success": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(16,185,129,var(--tw-border-opacity))"
  },
  ".border-info": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(14,165,233,var(--tw-border-opacity))"
  },
  ".border-warning": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(245,158,11,var(--tw-border-opacity))"
  },
  ".sa-danger": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(239,68,68,var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(255,255,255,var(--tw-text-opacity))"
  },
  ".sa-success": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(16,185,129,var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(255,255,255,var(--tw-text-opacity))"
  },
  ".sa-info": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(14,165,233,var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(255,255,255,var(--tw-text-opacity))"
  },
  ".sa-warning": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(245,158,11,var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(255,255,255,var(--tw-text-opacity))"
  },
  ".sa-bg-primary": {
    "backgroundColor": "#1873e8"
  },
  ".sa-bg-primary-light": {
    "backgroundColor": "\"#0694ff\""
  },
  ".sa-bg-primary-dark": {
    "backgroundColor": "\"#1d66ca\""
  },
  ".sa-primary": {
    "backgroundColor": "#1873e8",
    "color": "#fff"
  },
  ".sa-text-primary": {
    "color": "\"#1873e8\""
  },
  ".sa-text-primary-light": {
    "color": "\"#0694ff\""
  },
  ".sa-text-primary-dark": {
    "color": "\"#1d66ca\""
  },
  ".sa-light": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(248,250,252,var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(30,41,59,var(--tw-text-opacity))"
  },
  ".sa-dark": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(30,41,59,var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(222,226,230,var(--tw-text-opacity))"
  },
  ".sa-light-dark": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(248,250,252,var(--tw-bg-opacity))"
  },
  ".dark .sa-light-dark,.sa-dark-light": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(30,41,59,var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(222,226,230,var(--tw-text-opacity))"
  },
  ".dark .sa-dark-light": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(248,250,252,var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(30,41,59,var(--tw-text-opacity))"
  },
  ".dark .sa-dark-only": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(30,41,59,var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(222,226,230,var(--tw-text-opacity))"
  },
  ".sa-border": {
    "--tw-border-opacity": [
      "1",
      ".1"
    ],
    "borderColor": [
      "rgba(226,232,240,var(--tw-border-opacity))",
      "rgba(15,23,42,var(--tw-border-opacity))"
    ]
  },
  ".dark .sa-border": {
    "--tw-border-opacity": [
      "1",
      ".1"
    ],
    "borderColor": [
      "rgba(51,65,85,var(--tw-border-opacity))",
      "rgba(248,250,252,var(--tw-border-opacity))"
    ]
  },
  ".sa-border-inverted": {
    "--tw-border-opacity": "1",
    "borderBottomColor": "rgba(51,65,85,var(--tw-border-opacity))"
  },
  ".dark .sa-border-inverted": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(226,232,240,var(--tw-border-opacity))"
  },
  ".sa-bg": {
    "--tw-bg-opacity": [
      "1",
      ".05"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".dark .sa-bg": {
    "--tw-bg-opacity": [
      "1",
      ".4"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".sa-border-weakest": {
    "--tw-border-opacity": [
      "1",
      ".01"
    ],
    "borderColor": "rgba(15,23,42,var(--tw-border-opacity))"
  },
  ".dark .sa-border-weakest": {
    "--tw-border-opacity": [
      "1",
      ".05"
    ],
    "borderColor": "rgba(248,250,252,var(--tw-border-opacity))"
  },
  ".sa-border-weaker": {
    "--tw-border-opacity": [
      "1",
      ".05"
    ],
    "borderColor": "rgba(15,23,42,var(--tw-border-opacity))"
  },
  ".dark .sa-border-weaker": {
    "--tw-border-opacity": [
      "1",
      ".06"
    ],
    "borderColor": "rgba(248,250,252,var(--tw-border-opacity))"
  },
  ".sa-border-weak": {
    "--tw-border-opacity": [
      "1",
      ".08"
    ],
    "borderColor": "rgba(15,23,42,var(--tw-border-opacity))"
  },
  ".dark .sa-border-weak": {
    "--tw-border-opacity": [
      "1",
      ".08"
    ],
    "borderColor": "rgba(248,250,252,var(--tw-border-opacity))"
  },
  ".sa-border-strong": {
    "--tw-border-opacity": [
      "1",
      ".15"
    ],
    "borderColor": "rgba(15,23,42,var(--tw-border-opacity))"
  },
  ".dark .sa-border-strong": {
    "--tw-border-opacity": [
      "1",
      ".15"
    ],
    "borderColor": "rgba(248,250,252,var(--tw-border-opacity))"
  },
  ".sa-border-stronger": {
    "--tw-border-opacity": [
      "1",
      ".2"
    ],
    "borderColor": "rgba(15,23,42,var(--tw-border-opacity))"
  },
  ".dark .sa-border-stronger": {
    "--tw-border-opacity": [
      "1",
      ".2"
    ],
    "borderColor": "rgba(248,250,252,var(--tw-border-opacity))"
  },
  ".sa-border-strongest": {
    "--tw-border-opacity": [
      "1",
      ".25"
    ],
    "borderColor": "rgba(15,23,42,var(--tw-border-opacity))"
  },
  ".dark .sa-border-strongest": {
    "--tw-border-opacity": [
      "1",
      ".25"
    ],
    "borderColor": "rgba(248,250,252,var(--tw-border-opacity))"
  },
  ".sa-shade-weakest": {
    "--tw-bg-opacity": [
      "1",
      ".05 !important"
    ],
    "backgroundColor": "rgba(248,250,252,var(--tw-bg-opacity))"
  },
  ".dark .sa-shade-weakest": {
    "--tw-bg-opacity": [
      "1",
      ".01 !important"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".sa-shade-weaker": {
    "--tw-bg-opacity": [
      "1",
      ".1 !important"
    ],
    "backgroundColor": "rgba(248,250,252,var(--tw-bg-opacity))"
  },
  ".dark .sa-shade-weaker": {
    "--tw-bg-opacity": [
      "1",
      ".05 !important"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".sa-shade-weak": {
    "--tw-bg-opacity": [
      "1",
      ".15 !important"
    ],
    "backgroundColor": "rgba(248,250,252,var(--tw-bg-opacity))"
  },
  ".dark .sa-shade-weak": {
    "--tw-bg-opacity": [
      "1",
      ".1 !important"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".sa-shade": {
    "--tw-bg-opacity": [
      "1",
      ".2 !important"
    ],
    "backgroundColor": "rgba(248,250,252,var(--tw-bg-opacity))"
  },
  ".dark .sa-shade": {
    "--tw-bg-opacity": [
      "1",
      ".15 !important"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".sa-shade-strong": {
    "--tw-bg-opacity": [
      "1",
      ".3 !important"
    ],
    "backgroundColor": "rgba(248,250,252,var(--tw-bg-opacity))"
  },
  ".dark .sa-shade-strong": {
    "--tw-bg-opacity": [
      "1",
      ".2 !important"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".sa-shade-stronger": {
    "--tw-bg-opacity": [
      "1",
      ".4 !important"
    ],
    "backgroundColor": "rgba(248,250,252,var(--tw-bg-opacity))"
  },
  ".dark .sa-shade-stronger": {
    "--tw-bg-opacity": [
      "1",
      ".25 !important"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".sa-shade-strongest": {
    "--tw-bg-opacity": [
      "1",
      ".5 !important"
    ],
    "backgroundColor": "rgba(248,250,252,var(--tw-bg-opacity))"
  },
  ".dark .sa-shade-strongest": {
    "--tw-bg-opacity": [
      "1",
      ".3 !important"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".sa-highlight-weakest": {
    "--tw-bg-opacity": [
      "1",
      ".01 !important"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".dark .sa-highlight-weakest": {
    "--tw-bg-opacity": [
      "1",
      ".01 !important"
    ],
    "backgroundColor": "rgba(248,250,252,var(--tw-bg-opacity))"
  },
  ".sa-highlight-weaker": {
    "--tw-bg-opacity": [
      "1",
      ".02 !important"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".dark .sa-highlight-weaker": {
    "--tw-bg-opacity": [
      "1",
      ".02 !important"
    ],
    "backgroundColor": "rgba(248,250,252,var(--tw-bg-opacity))"
  },
  ".sa-highlight-weak": {
    "--tw-bg-opacity": [
      "1",
      ".03 !important"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".dark .sa-highlight-weak": {
    "--tw-bg-opacity": [
      "1",
      ".03 !important"
    ],
    "backgroundColor": "rgba(248,250,252,var(--tw-bg-opacity))"
  },
  ".sa-highlight": {
    "--tw-bg-opacity": [
      "1",
      ".04 !important"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".dark .sa-highlight": {
    "--tw-bg-opacity": [
      "1",
      ".04 !important"
    ],
    "backgroundColor": "rgba(248,250,252,var(--tw-bg-opacity))"
  },
  ".sa-highlight-strong": {
    "--tw-bg-opacity": [
      "1",
      ".05 !important"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".dark .sa-highlight-strong": {
    "--tw-bg-opacity": [
      "1",
      ".05 !important"
    ],
    "backgroundColor": "rgba(248,250,252,var(--tw-bg-opacity))"
  },
  ".sa-highlight-stronger": {
    "--tw-bg-opacity": [
      "1",
      ".08 !important"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".dark .sa-highlight-stronger": {
    "--tw-bg-opacity": [
      "1",
      ".08 !important"
    ],
    "backgroundColor": "rgba(248,250,252,var(--tw-bg-opacity))"
  },
  ".sa-highlight-strongest": {
    "--tw-bg-opacity": [
      "1",
      ".1 !important"
    ],
    "backgroundColor": "rgba(15,23,42,var(--tw-bg-opacity))"
  },
  ".dark .sa-highlight-strongest": {
    "--tw-bg-opacity": [
      "1",
      ".1 !important"
    ],
    "backgroundColor": "rgba(248,250,252,var(--tw-bg-opacity))"
  },
  ".sa-stripe": {
    "content": "\"\"",
    "position": "relative",
    "backgroundImage": "linear-gradient(-45deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent)",
    "backgroundSize": "50px 50px"
  },
  ".sa-col-3": {
    "display": [
      "-ms-grid",
      "grid"
    ],
    "gridTemplateColumns": "repeat(3,minmax(0,1fr))"
  },
  ".sa-col-3-1": {
    "display": [
      "-ms-grid",
      "grid"
    ],
    "gridTemplateColumns": "repeat(1,minmax(0,1fr))"
  },
  ".sa-col-3-2-1": {
    "display": [
      "-ms-grid",
      "grid"
    ],
    "gridTemplateColumns": "repeat(1,minmax(0,1fr))"
  },
  ".sa-col-2": {
    "display": [
      "-ms-grid",
      "grid"
    ],
    "gridTemplateColumns": "repeat(2,minmax(0,1fr))"
  },
  ".sa-col-2-1": {
    "display": [
      "-ms-grid",
      "grid"
    ],
    "gridTemplateColumns": "repeat(1,minmax(0,1fr))"
  },
  ".sa-col-1": {
    "display": [
      "-ms-grid",
      "grid"
    ]
  },
  ".sa-tl": {
    "left": "0",
    "top": "0"
  },
  ".sa-tc": {
    "top": "0",
    "left": "50%",
    "transform": "translate(-50%) !important"
  },
  ".sa-tr": {
    "top": "0",
    "right": "0"
  },
  ".sa-ml": {
    "top": "50%",
    "transform": "translateY(-50%) !important",
    "left": "0"
  },
  ".sa-mc": {
    "top": "50%",
    "transform": "translate(-50%,-50%) !important",
    "left": "50%"
  },
  ".sa-mr": {
    "top": "50%",
    "transform": "translateY(-50%) !important",
    "right": "0"
  },
  ".sa-bl": {
    "bottom": "0",
    "left": "0"
  },
  ".sa-bc": {
    "bottom": "0",
    "left": "50%",
    "transform": "translate(-50%) !important"
  },
  ".sa-br": {
    "bottom": "0",
    "right": "0"
  },
  ".sa-center": {
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center",
    "WebkitBoxPack": "center",
    "msFlexPack": "center",
    "WebkitJustifyContent": "center",
    "justifyContent": "center"
  },
  ".sa-row": {
    "display": [
      "-webkit-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ],
    "WebkitBoxAlign": "center",
    "msFlexAlign": "center",
    "WebkitAlignItems": "center",
    "alignItems": "center"
  },
  ".animate-spin.sa-fastest": {
    "animation": "sa-rotate .25s linear infinite"
  },
  ".animate-spin.sa-faster": {
    "animation": "sa-rotate .5s linear infinite"
  },
  ".animate-spin.sa-fast": {
    "animation": "sa-rotate .75s linear infinite"
  },
  ".animate-spin.sa-slow": {
    "animation": "sa-rotate 2s linear infinite"
  },
  ".animate-spin.sa-slower": {
    "animation": "sa-rotate 3s linear infinite"
  },
  ".animate-spin.sa-slowest": {
    "animation": "sa-rotate 4s linear infinite"
  },
  ".sa-stripe.sa-animate-right": {
    "animation": "sa-animate-right 1s linear infinite"
  },
  ".sa-stripe.sa-animate-right.sa-fastest": {
    "animation": "sa-animate-right .25s linear infinite"
  },
  ".sa-stripe.sa-animate-right.sa-faster": {
    "animation": "sa-animate-right .5s linear infinite"
  },
  ".sa-stripe.sa-animate-right.sa-fast": {
    "animation": "sa-animate-right .75s linear infinite"
  },
  ".sa-stripe.sa-animate-right.sa-slow": {
    "animation": "sa-animate-right 2s linear infinite"
  },
  ".sa-stripe.sa-animate-right.sa-slower": {
    "animation": "sa-animate-right 3s linear infinite"
  },
  ".sa-stripe.sa-animate-right.sa-slowest": {
    "animation": "sa-animate-right 4s linear infinite"
  },
  "@keyframes sa-rotate": {
    "0%": {
      "transform": "rotate(0)"
    },
    "to": {
      "transform": "rotate(360deg)"
    }
  },
  "@keyframes sa-animate-right": {
    "0%": {
      "backgroundPosition": "0 0"
    },
    "to": {
      "backgroundPosition": "50px 50px"
    }
  }
}