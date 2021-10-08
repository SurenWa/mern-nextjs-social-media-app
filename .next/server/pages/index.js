(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Home/MessageNotificationModal.js":
/*!*****************************************************!*\
  !*** ./components/Home/MessageNotificationModal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\mern-social-media-app\\components\\Home\\MessageNotificationModal.js";







function MessageNotificationModal({
  socket,
  showNewMessageModal,
  newMessageModal,
  newMessageReceived,
  user
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const onModalClose = () => showNewMessageModal(false);

  const formSubmit = e => {
    e.preventDefault();

    if (socket.current) {
      socket.current.emit("sendMsgFromNotification", {
        userId: user._id,
        msgSendToUserId: newMessageReceived.sender,
        msg: text
      });
      socket.current.on("msgSentFromNotification", () => {
        showNewMessageModal(false);
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      size: "small",
      open: newMessageModal,
      onClose: onModalClose,
      closeIcon: true,
      closeOnDimmerClick: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Header, {
        content: `New Message from ${newMessageReceived.senderName}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Content, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "bubbleWrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "inlineContainer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              className: "inlineIcon",
              src: newMessageReceived.senderProfilePic
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "otherBubble other",
            children: newMessageReceived.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
            className: "other",
            children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__.default)(newMessageReceived.date)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          style: {
            position: "sticky",
            bottom: "0px"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
            secondary: true,
            color: "teal",
            attached: "bottom",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
              reply: true,
              onSubmit: formSubmit,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
                size: "large",
                placeholder: "Send New Message",
                value: text,
                onChange: e => setText(e.target.value),
                action: {
                  color: "blue",
                  icon: "telegram plane",
                  disabled: text === "",
                  loading: loading
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          style: {
            marginTop: "5px"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: `/messages?message=${newMessageReceived.sender}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
              children: "View All Messages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Instructions, {
            username: user.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

const Instructions = ({
  username
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "help"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
        children: "If you do not like this popup to appear when you receive a new message:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "hand point right"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
      children: ["You can disable it by going to", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/${username}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          children: " Account "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, undefined), "Page and clicking on Settings Tab."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "hand point right"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, undefined), "Inside the menu,there is an setting named: Show New Message Popup?"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "hand point right"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, undefined), "Just toggle the setting to disable/enable the Message Popup to appear."]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 91,
  columnNumber: 3
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageNotificationModal);

/***/ }),

/***/ "./components/Home/NotificationPortal.js":
/*!***********************************************!*\
  !*** ./components/Home/NotificationPortal.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/newMsgSound */ "./utils/newMsgSound.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\mern-social-media-app\\components\\Home\\NotificationPortal.js";






function NotificationPortal({
  newNotification,
  notificationPopup,
  showNotificationPopup
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    name,
    profilePicUrl,
    username,
    postId
  } = newNotification;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.TransitionablePortal, {
    transition: {
      animation: "fade left",
      duration: "500"
    },
    onClose: () => notificationPopup && showNotificationPopup(false),
    onOpen: _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_1__.default,
    open: notificationPopup,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Segment, {
      style: {
        right: "5%",
        position: "fixed",
        top: "10%",
        zIndex: 1000
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
        name: "close",
        size: "large",
        style: {
          float: "right",
          cursor: "pointer"
        },
        onClick: () => showNotificationPopup(false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Feed, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Feed.Event, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Feed.Label, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              src: profilePicUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Feed.Content, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Feed.Summary, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Feed.User, {
                onClick: () => router.push(`/${username}`),
                children: [name, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 33
              }, this), " ", "liked your ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                onClick: () => router.push(`/post/${postId}`),
                children: " post"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 44
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Feed.Date, {
                children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__.default)(Date.now())
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationPortal);

/***/ }),

/***/ "./components/Layout/NoData.js":
/*!*************************************!*\
  !*** ./components/Layout/NoData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoProfilePosts": () => (/* binding */ NoProfilePosts),
/* harmony export */   "NoFollowData": () => (/* binding */ NoFollowData),
/* harmony export */   "NoMessages": () => (/* binding */ NoMessages),
/* harmony export */   "NoPosts": () => (/* binding */ NoPosts),
/* harmony export */   "NoProfile": () => (/* binding */ NoProfile),
/* harmony export */   "NoNotifications": () => (/* binding */ NoNotifications),
/* harmony export */   "NoPostFound": () => (/* binding */ NoPostFound)
/* harmony export */ });
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\mern-social-media-app\\components\\Layout\\NoData.js";



const NoProfilePosts = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Message, {
    info: true,
    icon: "meh",
    header: "Sorry",
    content: "User has not posted anything yet!"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
    icon: "long arrow alternate left",
    content: "Go Back",
    as: "a",
    href: "/"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined)]
}, void 0, true);
const NoFollowData = ({
  followersComponent,
  followingComponent
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [followersComponent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Message, {
    icon: "user outline",
    info: true,
    content: `User does not have followers`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }, undefined), followingComponent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Message, {
    icon: "user outline",
    info: true,
    content: `User does not follow any users`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }, undefined)]
}, void 0, true);
const NoMessages = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Message, {
  info: true,
  icon: "telegram plane",
  header: "Sorry",
  content: "You have not messaged anyone yet.Search above to message someone!"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 23,
  columnNumber: 3
}, undefined);
const NoPosts = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Posts. Make sure you have followed someone."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 32,
  columnNumber: 3
}, undefined);
const NoProfile = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Profile Found."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 41,
  columnNumber: 3
}, undefined);
const NoNotifications = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Message, {
  content: "No Notifications",
  icon: "smile",
  info: true
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 45,
  columnNumber: 3
}, undefined);
const NoPostFound = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Post Found."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 49,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./components/Layout/PlaceHolderGroup.js":
/*!***********************************************!*\
  !*** ./components/Layout/PlaceHolderGroup.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceHolderPosts": () => (/* binding */ PlaceHolderPosts),
/* harmony export */   "PlaceHolderSuggestions": () => (/* binding */ PlaceHolderSuggestions),
/* harmony export */   "PlaceHolderNotifications": () => (/* binding */ PlaceHolderNotifications),
/* harmony export */   "EndMessage": () => (/* binding */ EndMessage),
/* harmony export */   "LikesPlaceHolder": () => (/* binding */ LikesPlaceHolder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\mern-social-media-app\\components\\Layout\\PlaceHolderGroup.js";





const PlaceHolderPosts = () => (0,lodash__WEBPACK_IMPORTED_MODULE_2__.range)(1, 3).map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
    fluid: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Header, {
      image: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Paragraph, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }, undefined)]
}, item, true, {
  fileName: _jsxFileName,
  lineNumber: 15,
  columnNumber: 5
}, undefined));
const PlaceHolderSuggestions = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
      color: "red",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Image, {
          square: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Header, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {
              length: "medium"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
        extra: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          disabled: true,
          circular: true,
          size: "small",
          icon: "add user",
          content: "Follow",
          color: "twitter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined)
}, void 0, false);
const PlaceHolderNotifications = () => (0,lodash__WEBPACK_IMPORTED_MODULE_2__.range)(1, 10).map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Header, {
      image: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, undefined)
  }, item, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 7
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 7
  }, undefined)]
}, void 0, true));
const EndMessage = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
  textAlign: "center",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "refresh",
    size: "large"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 76,
  columnNumber: 3
}, undefined);
const LikesPlaceHolder = () => (0,lodash__WEBPACK_IMPORTED_MODULE_2__.range)(1, 6).map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
  style: {
    minWidth: "200px"
  },
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Header, {
    image: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {
      length: "full"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 7
  }, undefined)
}, item, false, {
  fileName: _jsxFileName,
  lineNumber: 84,
  columnNumber: 5
}, undefined));

/***/ }),

/***/ "./components/Layout/Toastr.js":
/*!*************************************!*\
  !*** ./components/Layout/Toastr.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDeleteToastr": () => (/* binding */ PostDeleteToastr),
/* harmony export */   "ErrorToastr": () => (/* binding */ ErrorToastr),
/* harmony export */   "MsgSentToastr": () => (/* binding */ MsgSentToastr)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\mern-social-media-app\\components\\Layout\\Toastr.js";


const PostDeleteToastr = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_0__.ToastContainer, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
    children: react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.info("Deleted Successfully", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};
const ErrorToastr = ({
  error
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_0__.ToastContainer, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
    children: react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(error, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
};
const MsgSentToastr = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_0__.ToastContainer, {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: false,
  children: react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success("Sent successfully", {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  })
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 54,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./components/Post/CardPost.js":
/*!*************************************!*\
  !*** ./components/Post/CardPost.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _LikesList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LikesList */ "./components/Post/LikesList.js");
/* harmony import */ var _ImageModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ImageModal */ "./components/Post/ImageModal.js");
/* harmony import */ var _NoImageModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NoImageModal */ "./components/Post/NoImageModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\mern-social-media-app\\components\\Post\\CardPost.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function CardPost({
  post,
  user,
  setPosts,
  setShowToastr,
  socket
}) {
  const {
    0: likes,
    1: setLikes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(post.likes);
  const isLiked = likes.length > 0 && likes.filter(like => like.user === user._id).length > 0;
  const {
    0: comments,
    1: setComments
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(post.comments);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const addPropsToModal = () => ({
    post,
    user,
    setLikes,
    likes,
    isLiked,
    comments,
    setComments
  });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [showModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      open: showModal,
      closeIcon: true,
      closeOnDimmerClick: true,
      onClose: () => setShowModal(false),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Content, {
        children: post.picUrl ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ImageModal__WEBPACK_IMPORTED_MODULE_8__.default, _objectSpread({}, addPropsToModal()), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 29
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_NoImageModal__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({}, addPropsToModal()), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
      basic: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
        color: "teal",
        fluid: true,
        children: [post.picUrl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: post.picUrl,
          style: {
            cursor: "pointer"
          },
          floated: "left",
          wrapped: true,
          ui: false,
          alt: "PostImage",
          onClick: () => setShowModal(true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
            floated: "left",
            src: post.user.profilePicUrl,
            avatar: true,
            circular: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, this), (user.role === "root" || post.user._id === user._id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Popup, {
              on: "click",
              position: "top right",
              trigger: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                src: "/deleteIcon.svg",
                style: {
                  cursor: "pointer"
                },
                size: "mini",
                floated: "right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 41
              }, this),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
                as: "h4",
                content: "Are you sure?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                children: "This action is irreversible!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                color: "red",
                icon: "trash",
                content: "Delete",
                onClick: () => (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_6__.deletePost)(post._id, setPosts, setShowToastr)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 33
            }, this)
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Header, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: `/${post.user.username}`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                children: post.user.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
            children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(post.createdAt)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, this), post.location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
            content: post.location
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 43
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Description, {
            style: {
              fontSize: "17px",
              letterSpacing: "0.1px",
              wordSpacing: "0.35px"
            },
            children: post.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
          extra: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            name: isLiked ? "heart" : "heart outline",
            color: "red",
            style: {
              cursor: "pointer"
            },
            onClick: () => {
              if (socket.current) {
                socket.current.emit("likePost", {
                  postId: post._id,
                  userId: user._id,
                  like: isLiked ? false : true
                });
                socket.current.on("postLiked", () => {
                  if (isLiked) {
                    setLikes(prev => prev.filter(like => like.user !== user._id));
                  } //
                  else {
                    setLikes(prev => [...prev, {
                      user: user._id
                    }]);
                  }
                });
              } else {
                (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_6__.likePost)(post._id, user._id, setLikes, isLiked ? false : true);
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_LikesList__WEBPACK_IMPORTED_MODULE_7__.default, {
            postId: post._id,
            trigger: likes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
              className: "spanLikesList",
              children: `${likes.length} ${likes.length === 1 ? "like" : "likes"}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            name: "comment outline",
            style: {
              marginLeft: "7px"
            },
            color: "blue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 25
          }, this), comments.length > 0 && comments.map((comment, i) => i < 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_PostComments__WEBPACK_IMPORTED_MODULE_2__.default, {
            comment: comment,
            postId: post._id,
            user: user,
            setComments: setComments
          }, comment._id, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 41
          }, this)), comments.length > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
            content: "View More",
            color: "teal",
            basic: true,
            circular: true,
            onClick: () => setShowModal(true)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
            hidden: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__.default, {
            user: user,
            postId: post._id,
            setComments: setComments
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
      hidden: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardPost);

/***/ }),

/***/ "./components/Post/CommentInputField.js":
/*!**********************************************!*\
  !*** ./components/Post/CommentInputField.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\mern-social-media-app\\components\\Post\\CommentInputField.js";





function CommentInputField({
  postId,
  user,
  setComments
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    reply: true,
    onSubmit: async e => {
      e.preventDefault();
      setLoading(true);
      await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_2__.postComment)(postId, user, text, setComments, setText);
      setLoading(false);
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
      value: text,
      onChange: e => setText(e.target.value),
      placeholder: "Add Comment",
      action: {
        color: "blue",
        icon: "edit",
        loading: loading,
        disabled: text === "" || loading
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentInputField);

/***/ }),

/***/ "./components/Post/CreatePost.js":
/*!***************************************!*\
  !*** ./components/Post/CreatePost.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _CropImageModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CropImageModal */ "./components/Post/CropImageModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\mern-social-media-app\\components\\Post\\CreatePost.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function CreatePost({
  user,
  setPosts
}) {
  const {
    0: newPost,
    1: setNewPost
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    text: "",
    location: ""
  });
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === "media") {
      if (files && files.length > 0) {
        setMedia(files[0]);
        setMediaPreview(URL.createObjectURL(files[0]));
      }
    }

    setNewPost(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const addStyles = () => ({
    textAlign: "center",
    height: "150px",
    width: "150px",
    border: "dotted",
    paddingTop: media === null && "60px",
    cursor: "pointer",
    borderColor: highlighted ? "green" : "black"
  });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    let picUrl;

    if (media !== null) {
      picUrl = await (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_2__.default)(media);

      if (!picUrl) {
        setLoading(false);
        return setError("Error Uploading Image");
      }
    }

    await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_3__.submitNewPost)(newPost.text, newPost.location, picUrl, setPosts, setNewPost, setError);
    setMedia(null);
    mediaPreview && URL.revokeObjectURL(mediaPreview);
    setTimeout(() => setMediaPreview(null), 3000);
    setLoading(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [showModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_CropImageModal__WEBPACK_IMPORTED_MODULE_4__.default, {
      mediaPreview: mediaPreview,
      setMedia: setMedia,
      showModal: showModal,
      setShowModal: setShowModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
      error: error !== null,
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
        error: true,
        onDismiss: () => setError(null),
        content: error,
        header: "Oops!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: user.profilePicUrl,
          circular: true,
          avatar: true,
          inline: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.TextArea, {
          placeholder: "Whats Happening",
          name: "text",
          value: newPost.text,
          onChange: handleChange,
          rows: 4,
          width: 14
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
          value: newPost.location,
          name: "location",
          onChange: handleChange,
          label: "Add Location",
          icon: "map marker alternate",
          placeholder: "Want to add Location?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          ref: inputRef,
          onChange: handleChange,
          name: "media",
          style: {
            display: "none"
          },
          type: "file",
          accept: "image/*"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        onClick: () => inputRef.current.click(),
        style: addStyles(),
        onDragOver: e => {
          e.preventDefault();
          setHighlighted(true);
        },
        onDragLeave: e => {
          e.preventDefault();
          setHighlighted(false);
        },
        onDrop: e => {
          e.preventDefault();
          setHighlighted(true);
          const droppedFile = Array.from(e.dataTransfer.files);
          setMedia(droppedFile[0]);
          setMediaPreview(URL.createObjectURL(droppedFile[0]));
        },
        children: media === null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
          name: "plus",
          size: "big"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          style: {
            height: "150px",
            width: "150px"
          },
          src: mediaPreview,
          alt: "PostImage",
          centered: true,
          size: "medium"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, this), mediaPreview !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
          hidden: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          content: "Crop Image",
          type: "button",
          primary: true,
          circular: true,
          onClick: () => setShowModal(true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 25
        }, this)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
        circular: true,
        disabled: newPost.text === "" || loading,
        content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("strong", {
          children: "Post"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 30
        }, this),
        style: {
          backgroundColor: "#1DA1F2",
          color: "white"
        },
        icon: "send",
        loading: loading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreatePost);

/***/ }),

/***/ "./components/Post/CropImageModal.js":
/*!*******************************************!*\
  !*** ./components/Post/CropImageModal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cropper */ "react-cropper");
/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cropper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\mern-social-media-app\\components\\Post\\CropImageModal.js";






function CropImageModal({
  mediaPreview,
  setMediaPreview,
  setMedia,
  showModal,
  setShowModal
}) {
  const {
    0: cropper,
    1: setCropper
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const getCropData = () => {
    if (cropper) {
      setMedia(cropper.getCroppedCanvas().toDataURL());
      cropper.destroy();
    }

    setShowModal(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("keydown", ({
      key
    }) => {
      if (cropper) {
        if (key === "m") cropper.setDragMode("move");
        if (key === "c") cropper.setDragMode("crop");
        if (key === "r") cropper.reset();
      }
    });
  }, [cropper]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      closeOnDimmerClick: false,
      size: "large",
      onClose: () => setShowModal(false),
      open: showModal,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Header, {
        content: "Crop image before upload"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        columns: 2,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Column, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Content, {
            image: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_cropper__WEBPACK_IMPORTED_MODULE_2___default()), {
              style: {
                height: "400px",
                width: "100%"
              },
              cropBoxResizable: true,
              zoomable: true,
              highlight: true,
              responsive: true,
              guides: true,
              dragMode: "move",
              initialAspectRatio: 1,
              preview: ".img-preview",
              src: mediaPreview,
              viewMode: 1,
              minCropBoxHeight: 10,
              minContainerWidth: 10,
              background: false,
              autoCropArea: 1,
              checkOrientation: false,
              onInitialized: cropper => setCropper(cropper)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Column, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Content, {
            image: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
                as: "h2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                  name: "file image outline"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header.Content, {
                  content: "Final"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  style: {
                    width: "100%",
                    height: "300px",
                    display: "inline-block",
                    padding: "10px",
                    overflow: "hidden",
                    boxSizing: "border-box"
                  },
                  className: "img-preview"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Actions, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          title: "Reset (R)",
          icon: "redo",
          circular: true,
          onClick: () => cropper && cropper.reset()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          title: "Move Canvas (M)",
          icon: "move",
          circular: true,
          onClick: () => cropper && cropper.setDragMode("move")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          title: "New Cropbox (C)",
          icon: "crop",
          circular: true,
          onClick: () => cropper && cropper.setDragMode("crop")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          negative: true,
          content: "Cancel",
          icon: "cancel",
          onClick: () => setShowModal(false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          content: "Crop Image",
          icon: "checkmark",
          positive: true,
          onClick: getCropData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CropImageModal);

/***/ }),

/***/ "./components/Post/ImageModal.js":
/*!***************************************!*\
  !*** ./components/Post/ImageModal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _LikesList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LikesList */ "./components/Post/LikesList.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\mern-social-media-app\\components\\Post\\ImageModal.js";











function ImageModal({
  post,
  user,
  setLikes,
  likes,
  isLiked,
  comments,
  setComments
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
      columns: 2,
      stackable: true,
      relaxed: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Column, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Content, {
          image: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
            wrapped: true,
            size: "large",
            src: post.picUrl
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Column, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
          fluid: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
              floated: "left",
              avatar: true,
              src: post.user.profilePicUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Header, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                href: `/${post.user.username}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
                  children: post.user.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
              children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(post.createdAt)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this), post.location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
              content: post.location
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Description, {
              style: {
                fontSize: "17px",
                letterSpacing: "0.1px",
                wordSpacing: "0.35px"
              },
              children: post.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
            extra: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              name: isLiked ? "heart" : "heart outline",
              color: "red",
              style: {
                cursor: "pointer"
              },
              onClick: () => (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_6__.likePost)(post._id, user._id, setLikes, isLiked ? false : true)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_LikesList__WEBPACK_IMPORTED_MODULE_7__.default, {
              postId: post._id,
              trigger: likes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
                className: "spanLikesList",
                children: `${likes.length} ${likes.length === 1 ? "like" : "likes"}`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
              hidden: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              style: {
                overflow: "auto",
                height: comments.length > 2 ? "200px" : "60px",
                marginBottom: "8px"
              },
              children: comments.length > 0 && comments.map(comment => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_PostComments__WEBPACK_IMPORTED_MODULE_2__.default, {
                comment: comment,
                postId: post._id,
                user: user,
                setComments: setComments
              }, comment._id, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 21
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__.default, {
              postId: post._id,
              user: user,
              setComments: setComments
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageModal);

/***/ }),

/***/ "./components/Post/LikesList.js":
/*!**************************************!*\
  !*** ./components/Post/LikesList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\mern-social-media-app\\components\\Post\\LikesList.js";











function LikesList({
  postId,
  trigger
}) {
  const {
    0: likesList,
    1: setLikesList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const getLikesList = async () => {
    setLoading(true);

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default}/api/posts/like/${postId}`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_5___default().get("token")
        }
      });
      setLikesList(res.data);
    } catch (error) {
      alert((0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__.default)(error));
    }

    setLoading(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Popup, {
    on: "click",
    onClose: () => setLikesList([]),
    onOpen: getLikesList,
    popperDependencies: [likesList],
    trigger: trigger,
    wide: true,
    children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_7__.LikesPlaceHolder, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: likesList.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        style: {
          overflow: "auto",
          maxHeight: "15rem",
          height: "15rem",
          minWidth: "210px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
          selection: true,
          size: "large",
          children: likesList.map(like => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
              avatar: true,
              src: like.user.profilePicUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
                onClick: () => next_router__WEBPACK_IMPORTED_MODULE_6___default().push(`/${like.user.username}`),
                as: "a",
                content: like.user.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 21
            }, this)]
          }, like._id, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 19
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, this)
    }, void 0, false)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikesList);

/***/ }),

/***/ "./components/Post/NoImageModal.js":
/*!*****************************************!*\
  !*** ./components/Post/NoImageModal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _LikesList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LikesList */ "./components/Post/LikesList.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\mern-social-media-app\\components\\Post\\NoImageModal.js";










function NoImageModal({
  post,
  user,
  setLikes,
  likes,
  isLiked,
  comments,
  setComments
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
    fluid: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
        floated: "left",
        avatar: true,
        src: post.user.profilePicUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Header, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: `/${post.user.username}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
            children: post.user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
        children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(post.createdAt)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), post.location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
        content: post.location
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 27
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Description, {
        style: {
          fontSize: "17px",
          letterSpacing: "0.1px",
          wordSpacing: "0.35px"
        },
        children: post.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
      extra: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        name: isLiked ? "heart" : "heart outline",
        color: "red",
        style: {
          cursor: "pointer"
        },
        onClick: () => (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_6__.likePost)(post._id, user._id, setLikes, isLiked ? false : true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_LikesList__WEBPACK_IMPORTED_MODULE_7__.default, {
        postId: post._id,
        trigger: likes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
          className: "spanLikesList",
          children: `${likes.length} ${likes.length === 1 ? "like" : "likes"}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        style: {
          overflow: "auto",
          height: comments.length > 2 ? "200px" : "60px",
          marginBottom: "8px"
        },
        children: comments.length > 0 && comments.map(comment => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_PostComments__WEBPACK_IMPORTED_MODULE_2__.default, {
          comment: comment,
          postId: post._id,
          user: user,
          setComments: setComments
        }, comment._id, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__.default, {
        postId: post._id,
        user: user,
        setComments: setComments
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoImageModal);

/***/ }),

/***/ "./components/Post/PostComments.js":
/*!*****************************************!*\
  !*** ./components/Post/PostComments.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\mern-social-media-app\\components\\Post\\PostComments.js";







function PostComments({
  comment,
  user,
  setComments,
  postId
}) {
  const {
    0: disabled,
    1: setDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Group, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Avatar, {
          src: comment.user.profilePicUrl
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Content, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Author, {
            as: "a",
            href: `/${comment.user.username}`,
            children: comment.user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Metadata, {
            children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__.default)(comment.date)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Text, {
            children: comment.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Actions, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Action, {
              children: (user.role === "root" || comment.user._id === user._id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                disabled: disabled,
                color: "red",
                name: "trash",
                onClick: async () => {
                  setDisabled(true);
                  await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_3__.deleteComment)(postId, comment._id, setComments);
                  setDisabled(false);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostComments);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Post/CreatePost */ "./components/Post/CreatePost.js");
/* harmony import */ var _components_Post_CardPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Post/CardPost */ "./components/Post/CardPost.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout/Toastr */ "./components/Layout/Toastr.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-infinite-scroll-component */ "react-infinite-scroll-component");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_getUserInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/getUserInfo */ "./utils/getUserInfo.js");
/* harmony import */ var _components_Home_MessageNotificationModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Home/MessageNotificationModal */ "./components/Home/MessageNotificationModal.js");
/* harmony import */ var _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/newMsgSound */ "./utils/newMsgSound.js");
/* harmony import */ var _components_Home_NotificationPortal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Home/NotificationPortal */ "./components/Home/NotificationPortal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\mern-social-media-app\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















function Index({
  user,
  postsData,
  errorLoading
}) {
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(postsData || []);
  const {
    0: showToastr,
    1: setShowToastr
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: hasMore,
    1: setHasMore
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: pageNumber,
    1: setPageNumber
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
  const socket = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    0: newMessageReceived,
    1: setNewMessageReceived
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: newMessageModal,
    1: showNewMessageModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: newNotification,
    1: setNewNotification
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: notificationPopup,
    1: showNotificationPopup
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!socket.current) {
      socket.current = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default);
    }

    if (socket.current) {
      socket.current.emit("join", {
        userId: user._id
      });
      socket.current.on("newMsgReceived", async ({
        newMsg
      }) => {
        const {
          name,
          profilePicUrl
        } = await (0,_utils_getUserInfo__WEBPACK_IMPORTED_MODULE_13__.default)(newMsg.sender);

        if (user.newMessagePopup) {
          setNewMessageReceived(_objectSpread(_objectSpread({}, newMsg), {}, {
            senderName: name,
            senderProfilePic: profilePicUrl
          }));
          showNewMessageModal(true);
        }

        (0,_utils_newMsgSound__WEBPACK_IMPORTED_MODULE_15__.default)(name);
      });
    }

    document.title = `Welcome, ${user.name.split(" ")[0]}`;
    return () => {
      if (socket.current) {
        socket.current.emit("disconnect");
        socket.current.off();
      }
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    showToastr && setTimeout(() => setShowToastr(false), 3000);
  }, [showToastr]);

  const fetchDataOnScroll = async () => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default}/api/posts`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_12___default().get("token")
        },
        params: {
          pageNumber
        }
      });
      if (res.data.length === 0) setHasMore(false);
      setPosts(prev => [...prev, ...res.data]);
      setPageNumber(prev => prev + 1);
    } catch (error) {
      alert("Error fetching Posts");
    }
  };

  if (posts.length === 0 || errorLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_8__.NoPosts, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 52
  }, this);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (socket.current) {
      socket.current.on("newNotificationReceived", ({
        name,
        profilePicUrl,
        username,
        postId
      }) => {
        setNewNotification({
          name,
          profilePicUrl,
          username,
          postId
        });
        showNotificationPopup(true);
      });
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
    children: [notificationPopup && newNotification !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_Home_NotificationPortal__WEBPACK_IMPORTED_MODULE_16__.default, {
      newNotification: newNotification,
      notificationPopup: notificationPopup,
      showNotificationPopup: showNotificationPopup
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }, this), showToastr && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_9__.PostDeleteToastr, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 28
    }, this), newMessageModal && newMessageReceived !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_Home_MessageNotificationModal__WEBPACK_IMPORTED_MODULE_14__.default, {
      socket: socket,
      showNewMessageModal: showNewMessageModal,
      newMessageModal: newMessageModal,
      newMessageReceived: newMessageReceived,
      user: user
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_4__.default, {
        user: user,
        setPosts: setPosts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default()), {
        hasMore: hasMore,
        next: fetchDataOnScroll,
        loader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__.PlaceHolderPosts, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 29
        }, this),
        endMessage: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__.EndMessage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 33
        }, this),
        dataLength: posts.length,
        children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_5__.default, {
          socket: socket,
          post: post,
          user: user,
          setPosts: setPosts,
          setShowToastr: setShowToastr
        }, post._id, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

Index.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_7__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default}/api/posts`, {
      headers: {
        Authorization: token
      },
      params: {
        pageNumber: 1
      }
    });
    return {
      postsData: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl = "http://localhost:3000";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);

/***/ }),

/***/ "./utils/calculateTime.js":
/*!********************************!*\
  !*** ./utils/calculateTime.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\mern-social-media-app\\utils\\calculateTime.js";





const calculateTime = createdAt => {
  const today = moment__WEBPACK_IMPORTED_MODULE_0___default()(Date.now());
  const postDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(createdAt);
  const diffInHours = today.diff(postDate, "hours");

  if (diffInHours < 24) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: ["Today ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_1___default()), {
        format: "hh:mm A",
        children: createdAt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }, undefined)]
    }, void 0, true);
  } else if (diffInHours > 24 && diffInHours < 36) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: ["Yesterday ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_1___default()), {
        format: "hh:mm A",
        children: createdAt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 19
      }, undefined)]
    }, void 0, true);
  } else if (diffInHours > 36) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_1___default()), {
      format: "DD/MM/YYYY hh:mm A",
      children: createdAt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }, undefined);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculateTime);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const catchErrors = error => {
  let errorMsg;

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catchErrors);

/***/ }),

/***/ "./utils/getUserInfo.js":
/*!******************************!*\
  !*** ./utils/getUserInfo.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);




const getUserInfo = async userToFindId => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/chats/user/${userToFindId}`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("token")
      }
    });
    return {
      name: res.data.name,
      profilePicUrl: res.data.profilePicUrl
    };
  } catch (error) {
    console.error(error);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserInfo);

/***/ }),

/***/ "./utils/newMsgSound.js":
/*!******************************!*\
  !*** ./utils/newMsgSound.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const newMsgSound = senderName => {
  const sound = new Audio("/light.mp3");
  sound && sound.play();

  if (senderName) {
    document.title = `New message from ${senderName}`;

    if (document.visibilityState === "visible") {
      setTimeout(() => {
        document.title = "Messages";
      }, 5000);
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newMsgSound);

/***/ }),

/***/ "./utils/postActions.js":
/*!******************************!*\
  !*** ./utils/postActions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitNewPost": () => (/* binding */ submitNewPost),
/* harmony export */   "deletePost": () => (/* binding */ deletePost),
/* harmony export */   "likePost": () => (/* binding */ likePost),
/* harmony export */   "postComment": () => (/* binding */ postComment),
/* harmony export */   "deleteComment": () => (/* binding */ deleteComment)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);




const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: `${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/posts`,
  headers: {
    Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("token")
  }
});
const submitNewPost = async (text, location, picUrl, setPosts, setNewPost, setError) => {
  try {
    const res = await Axios.post("/", {
      text,
      location,
      picUrl
    });
    setPosts(prev => [res.data, ...prev]);
    setNewPost({
      text: "",
      location: ""
    });
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }
};
const deletePost = async (postId, setPosts, setShowToastr) => {
  try {
    await Axios.delete(`/${postId}`);
    setPosts(prev => prev.filter(post => post._id !== postId));
    setShowToastr(true);
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const likePost = async (postId, userId, setLikes, like = true) => {
  try {
    if (like) {
      await Axios.post(`/like/${postId}`);
      setLikes(prev => [...prev, {
        user: userId
      }]);
    } //
    else if (!like) {
      await Axios.put(`/unlike/${postId}`);
      setLikes(prev => prev.filter(like => like.user !== userId));
    }
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const postComment = async (postId, user, text, setComments, setText) => {
  try {
    const res = await Axios.post(`/comment/${postId}`, {
      text
    });
    const newComment = {
      _id: res.data,
      user,
      text,
      date: Date.now()
    };
    setComments(prev => [newComment, ...prev]);
    setText("");
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const deleteComment = async (postId, commentId, setComments) => {
  try {
    await Axios.delete(`/${postId}/${commentId}`);
    setComments(prev => prev.filter(comment => comment._id !== commentId));
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};

/***/ }),

/***/ "./utils/uploadPicToCloudinary.js":
/*!****************************************!*\
  !*** ./utils/uploadPicToCloudinary.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const uploadPic = async media => {
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", "social-media-app");
    form.append("cloud_name", "dcghcxchy");
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("https://api.cloudinary.com/v1_1/dcghcxchy/image/upload", form);
    return res.data.url;
  } catch (error) {
    return;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uploadPic);

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-cropper":
/*!********************************!*\
  !*** external "react-cropper" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-cropper");

/***/ }),

/***/ "react-infinite-scroll-component":
/*!**************************************************!*\
  !*** external "react-infinite-scroll-component" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-moment");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("semantic-ui-react");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("socket.io-client");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxTQUFTUyx3QkFBVCxDQUFrQztBQUNoQ0MsRUFBQUEsTUFEZ0M7QUFFaENDLEVBQUFBLG1CQUZnQztBQUdoQ0MsRUFBQUEsZUFIZ0M7QUFJaENDLEVBQUFBLGtCQUpnQztBQUtoQ0MsRUFBQUE7QUFMZ0MsQ0FBbEMsRUFNRztBQUNELFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQmYsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNnQixPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QmpCLCtDQUFRLENBQUMsS0FBRCxDQUF0Qzs7QUFFQSxRQUFNa0IsWUFBWSxHQUFHLE1BQU1SLG1CQUFtQixDQUFDLEtBQUQsQ0FBOUM7O0FBRUEsUUFBTVMsVUFBVSxHQUFHQyxDQUFDLElBQUk7QUFDdEJBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjs7QUFFQSxRQUFJWixNQUFNLENBQUNhLE9BQVgsRUFBb0I7QUFDbEJiLE1BQUFBLE1BQU0sQ0FBQ2EsT0FBUCxDQUFlQyxJQUFmLENBQW9CLHlCQUFwQixFQUErQztBQUM3Q0MsUUFBQUEsTUFBTSxFQUFFWCxJQUFJLENBQUNZLEdBRGdDO0FBRTdDQyxRQUFBQSxlQUFlLEVBQUVkLGtCQUFrQixDQUFDZSxNQUZTO0FBRzdDQyxRQUFBQSxHQUFHLEVBQUVkO0FBSHdDLE9BQS9DO0FBTUFMLE1BQUFBLE1BQU0sQ0FBQ2EsT0FBUCxDQUFlTyxFQUFmLENBQWtCLHlCQUFsQixFQUE2QyxNQUFNO0FBQ2pEbkIsUUFBQUEsbUJBQW1CLENBQUMsS0FBRCxDQUFuQjtBQUNELE9BRkQ7QUFHRDtBQUNGLEdBZEQ7O0FBZ0JBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsb0RBQUQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBRUMsZUFGUjtBQUdFLGFBQU8sRUFBRU8sWUFIWDtBQUlFLGVBQVMsTUFKWDtBQUtFLHdCQUFrQixNQUxwQjtBQUFBLDhCQU9FLDhEQUFDLDJEQUFEO0FBQWMsZUFBTyxFQUFHLG9CQUFtQk4sa0JBQWtCLENBQUNrQixVQUFXO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVNFLDhEQUFDLDREQUFEO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsWUFBZjtBQUE0QixpQkFBRyxFQUFFbEIsa0JBQWtCLENBQUNtQjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUtFO0FBQUsscUJBQVMsRUFBQyxtQkFBZjtBQUFBLHNCQUFvQ25CLGtCQUFrQixDQUFDZ0I7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixlQU9FO0FBQU0scUJBQVMsRUFBQyxPQUFoQjtBQUFBLHNCQUF5QnJCLDZEQUFhLENBQUNLLGtCQUFrQixDQUFDb0IsSUFBcEI7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFXRTtBQUFLLGVBQUssRUFBRTtBQUFFQyxZQUFBQSxRQUFRLEVBQUUsUUFBWjtBQUFzQkMsWUFBQUEsTUFBTSxFQUFFO0FBQTlCLFdBQVo7QUFBQSxpQ0FDRSw4REFBQyxzREFBRDtBQUFTLHFCQUFTLE1BQWxCO0FBQW1CLGlCQUFLLEVBQUMsTUFBekI7QUFBZ0Msb0JBQVEsRUFBQyxRQUF6QztBQUFBLG1DQUNFLDhEQUFDLG1EQUFEO0FBQU0sbUJBQUssTUFBWDtBQUFZLHNCQUFRLEVBQUVmLFVBQXRCO0FBQUEscUNBQ0UsOERBQUMseURBQUQ7QUFDRSxvQkFBSSxFQUFDLE9BRFA7QUFFRSwyQkFBVyxFQUFDLGtCQUZkO0FBR0UscUJBQUssRUFBRUwsSUFIVDtBQUlFLHdCQUFRLEVBQUVNLENBQUMsSUFBSUwsT0FBTyxDQUFDSyxDQUFDLENBQUNlLE1BQUYsQ0FBU0MsS0FBVixDQUp4QjtBQUtFLHNCQUFNLEVBQUU7QUFDTkMsa0JBQUFBLEtBQUssRUFBRSxNQUREO0FBRU5DLGtCQUFBQSxJQUFJLEVBQUUsZ0JBRkE7QUFHTkMsa0JBQUFBLFFBQVEsRUFBRXpCLElBQUksS0FBSyxFQUhiO0FBSU5FLGtCQUFBQSxPQUFPLEVBQUVBO0FBSkg7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhGLGVBOEJFO0FBQUssZUFBSyxFQUFFO0FBQUV3QixZQUFBQSxTQUFTLEVBQUU7QUFBYixXQUFaO0FBQUEsa0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFHLHFCQUFvQjVCLGtCQUFrQixDQUFDZSxNQUFPLEVBQTNEO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixlQU9FLDhEQUFDLFlBQUQ7QUFBYyxvQkFBUSxFQUFFZCxJQUFJLENBQUM0QjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFzREQ7O0FBRUQsTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFBRUQsRUFBQUE7QUFBRixDQUFELGtCQUNuQiw4REFBQyxtREFBRDtBQUFBLDBCQUNFLDhEQUFDLHdEQUFEO0FBQUEsNEJBQ0UsOERBQUMsbURBQUQ7QUFBTSxVQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsMkRBQUQ7QUFBQSw2QkFDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFVRSw4REFBQyx3REFBRDtBQUFBLDRCQUNFLDhEQUFDLG1EQUFEO0FBQU0sVUFBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDJEQUFEO0FBQUEsZ0VBRUUsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUcsSUFBR0EsUUFBUyxFQUF6QjtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsZUFxQkUsOERBQUMsd0RBQUQ7QUFBQSw0QkFDRSw4REFBQyxtREFBRDtBQUFNLFVBQUksRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJGLGVBMEJFLDhEQUFDLHdEQUFEO0FBQUEsNEJBQ0UsOERBQUMsbURBQUQ7QUFBTSxVQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUFrQ0EsaUVBQWVqQyx3QkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTdUMsa0JBQVQsQ0FBNEI7QUFDeEJDLEVBQUFBLGVBRHdCO0FBRXhCQyxFQUFBQSxpQkFGd0I7QUFHeEJDLEVBQUFBO0FBSHdCLENBQTVCLEVBSUc7QUFDQyxRQUFNQyxNQUFNLEdBQUdMLHNEQUFTLEVBQXhCO0FBRUEsUUFBTTtBQUFFTSxJQUFBQSxJQUFGO0FBQVFDLElBQUFBLGFBQVI7QUFBdUJaLElBQUFBLFFBQXZCO0FBQWlDYSxJQUFBQTtBQUFqQyxNQUE0Q04sZUFBbEQ7QUFFQSxzQkFDSSw4REFBQyxtRUFBRDtBQUNJLGNBQVUsRUFBRTtBQUFFTyxNQUFBQSxTQUFTLEVBQUUsV0FBYjtBQUEwQkMsTUFBQUEsUUFBUSxFQUFFO0FBQXBDLEtBRGhCO0FBRUksV0FBTyxFQUFFLE1BQU1QLGlCQUFpQixJQUFJQyxxQkFBcUIsQ0FBQyxLQUFELENBRjdEO0FBR0ksVUFBTSxFQUFFTCx1REFIWjtBQUlJLFFBQUksRUFBRUksaUJBSlY7QUFBQSwyQkFNSSw4REFBQyxzREFBRDtBQUFTLFdBQUssRUFBRTtBQUFFUSxRQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFleEIsUUFBQUEsUUFBUSxFQUFFLE9BQXpCO0FBQWtDeUIsUUFBQUEsR0FBRyxFQUFFLEtBQXZDO0FBQThDQyxRQUFBQSxNQUFNLEVBQUU7QUFBdEQsT0FBaEI7QUFBQSw4QkFDSSw4REFBQyxtREFBRDtBQUNJLFlBQUksRUFBQyxPQURUO0FBRUksWUFBSSxFQUFDLE9BRlQ7QUFHSSxhQUFLLEVBQUU7QUFBRUMsVUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLFVBQUFBLE1BQU0sRUFBRTtBQUExQixTQUhYO0FBSUksZUFBTyxFQUFFLE1BQU1YLHFCQUFxQixDQUFDLEtBQUQ7QUFKeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBUUksOERBQUMsbURBQUQ7QUFBQSwrQkFDSSw4REFBQyx5REFBRDtBQUFBLGtDQUNJLDhEQUFDLHlEQUFEO0FBQUEsbUNBQ0k7QUFBSyxpQkFBRyxFQUFFRztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBSUksOERBQUMsMkRBQUQ7QUFBQSxtQ0FDSSw4REFBQywyREFBRDtBQUFBLHNDQUNJLDhEQUFDLHdEQUFEO0FBQVcsdUJBQU8sRUFBRSxNQUFNRixNQUFNLENBQUNXLElBQVAsQ0FBYSxJQUFHckIsUUFBUyxFQUF6QixDQUExQjtBQUFBLDJCQUF3RFcsSUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLEVBQytFLEdBRC9FLDhCQUVlO0FBQUcsdUJBQU8sRUFBRSxNQUFNRCxNQUFNLENBQUNXLElBQVAsQ0FBYSxTQUFRUixNQUFPLEVBQTVCLENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZmLGVBR0ksOERBQUMsd0RBQUQ7QUFBQSwwQkFBWS9DLDZEQUFhLENBQUN3RCxJQUFJLENBQUNDLEdBQUwsRUFBRDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdDSDs7QUFFRCxpRUFBZWpCLGtCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTs7O0FBRU8sTUFBTW9CLGNBQWMsR0FBRyxtQkFDNUI7QUFBQSwwQkFDRSw4REFBQyxzREFBRDtBQUFTLFFBQUksTUFBYjtBQUFjLFFBQUksRUFBQyxLQUFuQjtBQUF5QixVQUFNLEVBQUMsT0FBaEM7QUFBd0MsV0FBTyxFQUFDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLHFEQUFEO0FBQVEsUUFBSSxFQUFDLDJCQUFiO0FBQXlDLFdBQU8sRUFBQyxTQUFqRDtBQUEyRCxNQUFFLEVBQUMsR0FBOUQ7QUFBa0UsUUFBSSxFQUFDO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBLGdCQURLO0FBT0EsTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFBRUMsRUFBQUEsa0JBQUY7QUFBc0JDLEVBQUFBO0FBQXRCLENBQUQsa0JBQzFCO0FBQUEsYUFDR0Qsa0JBQWtCLGlCQUNqQiw4REFBQyxzREFBRDtBQUFTLFFBQUksRUFBQyxjQUFkO0FBQTZCLFFBQUksTUFBakM7QUFBa0MsV0FBTyxFQUFHO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixFQUtHQyxrQkFBa0IsaUJBQ2pCLDhEQUFDLHNEQUFEO0FBQVMsUUFBSSxFQUFDLGNBQWQ7QUFBNkIsUUFBSSxNQUFqQztBQUFrQyxXQUFPLEVBQUc7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KO0FBQUEsZ0JBREs7QUFZQSxNQUFNQyxVQUFVLEdBQUcsbUJBQ3hCLDhEQUFDLHNEQUFEO0FBQ0UsTUFBSSxNQUROO0FBRUUsTUFBSSxFQUFDLGdCQUZQO0FBR0UsUUFBTSxFQUFDLE9BSFQ7QUFJRSxTQUFPLEVBQUM7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREs7QUFTQSxNQUFNQyxPQUFPLEdBQUcsbUJBQ3JCLDhEQUFDLHNEQUFEO0FBQ0UsTUFBSSxNQUROO0FBRUUsTUFBSSxFQUFDLEtBRlA7QUFHRSxRQUFNLEVBQUMsTUFIVDtBQUlFLFNBQU8sRUFBQztBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESztBQVNBLE1BQU1DLFNBQVMsR0FBRyxtQkFDdkIsOERBQUMsc0RBQUQ7QUFBUyxNQUFJLE1BQWI7QUFBYyxNQUFJLEVBQUMsS0FBbkI7QUFBeUIsUUFBTSxFQUFDLE1BQWhDO0FBQXVDLFNBQU8sRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREs7QUFJQSxNQUFNQyxlQUFlLEdBQUcsbUJBQzdCLDhEQUFDLHNEQUFEO0FBQVMsU0FBTyxFQUFDLGtCQUFqQjtBQUFvQyxNQUFJLEVBQUMsT0FBekM7QUFBaUQsTUFBSTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREs7QUFJQSxNQUFNQyxXQUFXLEdBQUcsbUJBQ3pCLDhEQUFDLHNEQUFEO0FBQVMsTUFBSSxNQUFiO0FBQWMsTUFBSSxFQUFDLEtBQW5CO0FBQXlCLFFBQU0sRUFBQyxNQUFoQztBQUF1QyxTQUFPLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NQO0FBQ0E7QUFTQTs7O0FBRU8sTUFBTU0sZ0JBQWdCLEdBQUcsTUFDOUJELDZDQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBTCxDQUFZRSxHQUFaLENBQWdCQyxJQUFJLGlCQUNsQjtBQUFBLDBCQUNFLDhEQUFDLDBEQUFEO0FBQWEsU0FBSyxNQUFsQjtBQUFBLDRCQUNFLDhEQUFDLGlFQUFEO0FBQW9CLFdBQUssTUFBekI7QUFBQSw4QkFDRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRSw4REFBQyxvRUFBRDtBQUFBLDhCQUNFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBYUUsOERBQUMsc0RBQUQ7QUFBUyxVQUFNO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUEsR0FBVUEsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQ0FESztBQW1CQSxNQUFNQyxzQkFBc0IsR0FBRyxtQkFDcEM7QUFBQSx5QkFDRSw4REFBQyx3REFBRDtBQUFBLDJCQUNFLDhEQUFDLG1EQUFEO0FBQU0sV0FBSyxFQUFDLEtBQVo7QUFBQSw4QkFDRSw4REFBQywwREFBRDtBQUFBLCtCQUNFLDhEQUFDLGdFQUFEO0FBQW1CLGdCQUFNO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUUsOERBQUMsMkRBQUQ7QUFBQSwrQkFDRSw4REFBQywwREFBRDtBQUFBLGlDQUNFLDhEQUFDLGlFQUFEO0FBQUEsbUNBQ0UsOERBQUMsK0RBQUQ7QUFBa0Isb0JBQU0sRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBWUUsOERBQUMsMkRBQUQ7QUFBYyxhQUFLLE1BQW5CO0FBQUEsK0JBQ0UsOERBQUMscURBQUQ7QUFDRSxrQkFBUSxNQURWO0FBRUUsa0JBQVEsTUFGVjtBQUdFLGNBQUksRUFBQyxPQUhQO0FBSUUsY0FBSSxFQUFDLFVBSlA7QUFLRSxpQkFBTyxFQUFDLFFBTFY7QUFNRSxlQUFLLEVBQUM7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBREs7QUE4QkEsTUFBTUMsd0JBQXdCLEdBQUcsTUFDdENMLDZDQUFLLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FBTCxDQUFhRSxHQUFiLENBQWlCQyxJQUFJLGlCQUNuQjtBQUFBLDBCQUNFLDhEQUFDLDBEQUFEO0FBQUEsMkJBQ0UsOERBQUMsaUVBQUQ7QUFBb0IsV0FBSyxNQUF6QjtBQUFBLDhCQUNFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLEtBQWtCQSxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFPRSw4REFBQyxzREFBRDtBQUFTLFVBQU07QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQSxnQkFERixDQURLO0FBYUEsTUFBTUcsVUFBVSxHQUFHLG1CQUN4Qiw4REFBQyx3REFBRDtBQUFXLFdBQVMsRUFBQyxRQUFyQjtBQUFBLDBCQUNFLDhEQUFDLG1EQUFEO0FBQU0sUUFBSSxFQUFDLFNBQVg7QUFBcUIsUUFBSSxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLHNEQUFEO0FBQVMsVUFBTTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESztBQU9BLE1BQU1DLGdCQUFnQixHQUFHLE1BQzlCUCw2Q0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUwsQ0FBWUUsR0FBWixDQUFnQkMsSUFBSSxpQkFDbEIsOERBQUMsMERBQUQ7QUFBd0IsT0FBSyxFQUFFO0FBQUVLLElBQUFBLFFBQVEsRUFBRTtBQUFaLEdBQS9CO0FBQUEseUJBQ0UsOERBQUMsaUVBQUQ7QUFBb0IsU0FBSyxNQUF6QjtBQUFBLDJCQUNFLDhEQUFDLCtEQUFEO0FBQWtCLFlBQU0sRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLEdBQWtCTCxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQ0FESzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGUDs7QUFFTyxNQUFNUSxnQkFBZ0IsR0FBRyxNQUFNO0FBQ3BDLHNCQUNFLDhEQUFDLDBEQUFEO0FBQ0UsWUFBUSxFQUFDLGVBRFg7QUFFRSxhQUFTLEVBQUUsSUFGYjtBQUdFLG1CQUFlLEVBQUUsS0FIbkI7QUFJRSxlQUFXLEVBQUUsS0FKZjtBQUtFLGdCQUFZLE1BTGQ7QUFNRSxPQUFHLEVBQUUsS0FOUDtBQU9FLG9CQUFnQixNQVBsQjtBQVFFLGFBQVMsTUFSWDtBQVNFLGdCQUFZLEVBQUUsS0FUaEI7QUFBQSxjQVVHRixzREFBQSxDQUFXLHNCQUFYLEVBQW1DO0FBQ2xDeEQsTUFBQUEsUUFBUSxFQUFFLGVBRHdCO0FBRWxDNEQsTUFBQUEsU0FBUyxFQUFFLElBRnVCO0FBR2xDQyxNQUFBQSxlQUFlLEVBQUUsS0FIaUI7QUFJbENDLE1BQUFBLFlBQVksRUFBRSxJQUpvQjtBQUtsQ0MsTUFBQUEsWUFBWSxFQUFFLEtBTG9CO0FBTWxDQyxNQUFBQSxTQUFTLEVBQUUsSUFOdUI7QUFPbENDLE1BQUFBLFFBQVEsRUFBRUM7QUFQd0IsS0FBbkM7QUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFzQkQsQ0F2Qk07QUF5QkEsTUFBTUMsV0FBVyxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWU7QUFDeEMsc0JBQ0UsOERBQUMsMERBQUQ7QUFDRSxZQUFRLEVBQUMsZUFEWDtBQUVFLGFBQVMsRUFBRSxJQUZiO0FBR0UsbUJBQWUsRUFBRSxLQUhuQjtBQUlFLGVBQVcsRUFBRSxLQUpmO0FBS0UsZ0JBQVksTUFMZDtBQU1FLE9BQUcsRUFBRSxLQU5QO0FBT0Usb0JBQWdCLE1BUGxCO0FBUUUsYUFBUyxNQVJYO0FBU0UsZ0JBQVksRUFBRSxLQVRoQjtBQUFBLGNBVUdaLHVEQUFBLENBQVlZLEtBQVosRUFBbUI7QUFDbEJwRSxNQUFBQSxRQUFRLEVBQUUsZUFEUTtBQUVsQjRELE1BQUFBLFNBQVMsRUFBRSxJQUZPO0FBR2xCQyxNQUFBQSxlQUFlLEVBQUUsS0FIQztBQUlsQkMsTUFBQUEsWUFBWSxFQUFFLElBSkk7QUFLbEJDLE1BQUFBLFlBQVksRUFBRSxLQUxJO0FBTWxCQyxNQUFBQSxTQUFTLEVBQUUsSUFOTztBQU9sQkMsTUFBQUEsUUFBUSxFQUFFQztBQVBRLEtBQW5CO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBc0JELENBdkJNO0FBeUJBLE1BQU1HLGFBQWEsR0FBRyxtQkFDM0IsOERBQUMsMERBQUQ7QUFDRSxVQUFRLEVBQUMsZUFEWDtBQUVFLFdBQVMsRUFBRSxJQUZiO0FBR0UsaUJBQWUsRUFBRSxLQUhuQjtBQUlFLGFBQVcsRUFBRSxLQUpmO0FBS0UsY0FBWSxNQUxkO0FBTUUsS0FBRyxFQUFFLEtBTlA7QUFPRSxrQkFBZ0IsTUFQbEI7QUFRRSxXQUFTLE1BUlg7QUFTRSxjQUFZLEVBQUUsS0FUaEI7QUFBQSxZQVVHYix5REFBQSxDQUFjLG1CQUFkLEVBQW1DO0FBQ2xDeEQsSUFBQUEsUUFBUSxFQUFFLGVBRHdCO0FBRWxDNEQsSUFBQUEsU0FBUyxFQUFFLElBRnVCO0FBR2xDQyxJQUFBQSxlQUFlLEVBQUUsS0FIaUI7QUFJbENDLElBQUFBLFlBQVksRUFBRSxJQUpvQjtBQUtsQ0MsSUFBQUEsWUFBWSxFQUFFLEtBTG9CO0FBTWxDQyxJQUFBQSxTQUFTLEVBQUUsSUFOdUI7QUFPbENDLElBQUFBLFFBQVEsRUFBRUM7QUFQd0IsR0FBbkM7QUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERQO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU2UsUUFBVCxDQUFrQjtBQUFFQyxFQUFBQSxJQUFGO0FBQVF0RyxFQUFBQSxJQUFSO0FBQWN1RyxFQUFBQSxRQUFkO0FBQXdCQyxFQUFBQSxhQUF4QjtBQUF1QzVHLEVBQUFBO0FBQXZDLENBQWxCLEVBQW1FO0FBQy9ELFFBQU07QUFBQSxPQUFDNkcsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0J2SCwrQ0FBUSxDQUFDbUgsSUFBSSxDQUFDRyxLQUFOLENBQWxDO0FBRUEsUUFBTUUsT0FBTyxHQUNURixLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUFmLElBQW9CSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBSSxJQUFJQSxJQUFJLENBQUM5RyxJQUFMLEtBQWNBLElBQUksQ0FBQ1ksR0FBeEMsRUFBNkNnRyxNQUE3QyxHQUFzRCxDQUQ5RTtBQUdBLFFBQU07QUFBQSxPQUFDRyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQjdILCtDQUFRLENBQUNtSCxJQUFJLENBQUNTLFFBQU4sQ0FBeEM7QUFFQSxRQUFNO0FBQUEsT0FBQ3ZCLEtBQUQ7QUFBQSxPQUFReUI7QUFBUixNQUFvQjlILCtDQUFRLENBQUMsSUFBRCxDQUFsQztBQUVBLFFBQU07QUFBQSxPQUFDK0gsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJoSSwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7O0FBRUEsUUFBTWlJLGVBQWUsR0FBRyxPQUFPO0FBQzNCZCxJQUFBQSxJQUQyQjtBQUUzQnRHLElBQUFBLElBRjJCO0FBRzNCMEcsSUFBQUEsUUFIMkI7QUFJM0JELElBQUFBLEtBSjJCO0FBSzNCRSxJQUFBQSxPQUwyQjtBQU0zQkksSUFBQUEsUUFOMkI7QUFPM0JDLElBQUFBO0FBUDJCLEdBQVAsQ0FBeEI7O0FBVUEsc0JBQ0k7QUFBQSxlQUNLRSxTQUFTLGlCQUNOLCtEQUFDLG9EQUFEO0FBQ0ksVUFBSSxFQUFFQSxTQURWO0FBRUksZUFBUyxNQUZiO0FBR0ksd0JBQWtCLE1BSHRCO0FBSUksYUFBTyxFQUFFLE1BQU1DLFlBQVksQ0FBQyxLQUFELENBSi9CO0FBQUEsNkJBTUksK0RBQUMsNERBQUQ7QUFBQSxrQkFDS2IsSUFBSSxDQUFDZSxNQUFMLGdCQUNHLCtEQUFDLGdEQUFELG9CQUFnQkQsZUFBZSxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURILGdCQUdHLCtEQUFDLGtEQUFELG9CQUFrQkEsZUFBZSxFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGUixlQWtCSSwrREFBQyxzREFBRDtBQUFTLFdBQUssTUFBZDtBQUFBLDZCQUNJLCtEQUFDLG1EQUFEO0FBQU0sYUFBSyxFQUFDLE1BQVo7QUFBbUIsYUFBSyxNQUF4QjtBQUFBLG1CQUNLZCxJQUFJLENBQUNlLE1BQUwsaUJBQ0csK0RBQUMsb0RBQUQ7QUFDSSxhQUFHLEVBQUVmLElBQUksQ0FBQ2UsTUFEZDtBQUVJLGVBQUssRUFBRTtBQUFFckUsWUFBQUEsTUFBTSxFQUFFO0FBQVYsV0FGWDtBQUdJLGlCQUFPLEVBQUMsTUFIWjtBQUlJLGlCQUFPLE1BSlg7QUFLSSxZQUFFLEVBQUUsS0FMUjtBQU1JLGFBQUcsRUFBQyxXQU5SO0FBT0ksaUJBQU8sRUFBRSxNQUFNbUUsWUFBWSxDQUFDLElBQUQ7QUFQL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGUixlQWFJLCtEQUFDLDJEQUFEO0FBQUEsa0NBQ0ksK0RBQUMsb0RBQUQ7QUFBTyxtQkFBTyxFQUFDLE1BQWY7QUFBc0IsZUFBRyxFQUFFYixJQUFJLENBQUN0RyxJQUFMLENBQVV3QyxhQUFyQztBQUFvRCxrQkFBTSxNQUExRDtBQUEyRCxvQkFBUTtBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBR0ssQ0FBQ3hDLElBQUksQ0FBQ3NILElBQUwsS0FBYyxNQUFkLElBQXdCaEIsSUFBSSxDQUFDdEcsSUFBTCxDQUFVWSxHQUFWLEtBQWtCWixJQUFJLENBQUNZLEdBQWhELGtCQUNHO0FBQUEsbUNBQ0ksK0RBQUMsb0RBQUQ7QUFDSSxnQkFBRSxFQUFDLE9BRFA7QUFFSSxzQkFBUSxFQUFDLFdBRmI7QUFHSSxxQkFBTyxlQUNILCtEQUFDLG9EQUFEO0FBQ0ksbUJBQUcsRUFBQyxpQkFEUjtBQUVJLHFCQUFLLEVBQUU7QUFBRW9DLGtCQUFBQSxNQUFNLEVBQUU7QUFBVixpQkFGWDtBQUdJLG9CQUFJLEVBQUMsTUFIVDtBQUlJLHVCQUFPLEVBQUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpSO0FBQUEsc0NBWUksK0RBQUMscURBQUQ7QUFBUSxrQkFBRSxFQUFDLElBQVg7QUFBZ0IsdUJBQU8sRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVpKLGVBYUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBYkosZUFlSSwrREFBQyxxREFBRDtBQUNJLHFCQUFLLEVBQUMsS0FEVjtBQUVJLG9CQUFJLEVBQUMsT0FGVDtBQUdJLHVCQUFPLEVBQUMsUUFIWjtBQUlJLHVCQUFPLEVBQUUsTUFBTWdELDhEQUFVLENBQUNNLElBQUksQ0FBQzFGLEdBQU4sRUFBVzJGLFFBQVgsRUFBcUJDLGFBQXJCO0FBSjdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosMkJBSlIsZUE4QkksK0RBQUMsMERBQUQ7QUFBQSxtQ0FDSSwrREFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUcsSUFBR0YsSUFBSSxDQUFDdEcsSUFBTCxDQUFVNEIsUUFBUyxFQUFuQztBQUFBLHFDQUNJO0FBQUEsMEJBQUkwRSxJQUFJLENBQUN0RyxJQUFMLENBQVV1QztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE5QkosZUFvQ0ksK0RBQUMsd0RBQUQ7QUFBQSxzQkFBWTdDLDZEQUFhLENBQUM0RyxJQUFJLENBQUNpQixTQUFOO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBcENKLEVBc0NLakIsSUFBSSxDQUFDa0IsUUFBTCxpQkFBaUIsK0RBQUMsd0RBQUQ7QUFBVyxtQkFBTyxFQUFFbEIsSUFBSSxDQUFDa0I7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF0Q3RCLGVBd0NJLCtEQUFDLCtEQUFEO0FBQ0ksaUJBQUssRUFBRTtBQUNIQyxjQUFBQSxRQUFRLEVBQUUsTUFEUDtBQUVIQyxjQUFBQSxhQUFhLEVBQUUsT0FGWjtBQUdIQyxjQUFBQSxXQUFXLEVBQUU7QUFIVixhQURYO0FBQUEsc0JBT0tyQixJQUFJLENBQUNyRztBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBeENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiSixlQWdFSSwrREFBQywyREFBRDtBQUFjLGVBQUssTUFBbkI7QUFBQSxrQ0FDSSwrREFBQyxtREFBRDtBQUNJLGdCQUFJLEVBQUUwRyxPQUFPLEdBQUcsT0FBSCxHQUFhLGVBRDlCO0FBRUksaUJBQUssRUFBQyxLQUZWO0FBR0ksaUJBQUssRUFBRTtBQUFFM0QsY0FBQUEsTUFBTSxFQUFFO0FBQVYsYUFIWDtBQUlJLG1CQUFPLEVBQUUsTUFBTTtBQUNYLGtCQUFJcEQsTUFBTSxDQUFDYSxPQUFYLEVBQW9CO0FBQ2hCYixnQkFBQUEsTUFBTSxDQUFDYSxPQUFQLENBQWVDLElBQWYsQ0FBb0IsVUFBcEIsRUFBZ0M7QUFDNUIrQixrQkFBQUEsTUFBTSxFQUFFNkQsSUFBSSxDQUFDMUYsR0FEZTtBQUU1QkQsa0JBQUFBLE1BQU0sRUFBRVgsSUFBSSxDQUFDWSxHQUZlO0FBRzVCa0csa0JBQUFBLElBQUksRUFBRUgsT0FBTyxHQUFHLEtBQUgsR0FBVztBQUhJLGlCQUFoQztBQU1BL0csZ0JBQUFBLE1BQU0sQ0FBQ2EsT0FBUCxDQUFlTyxFQUFmLENBQWtCLFdBQWxCLEVBQStCLE1BQU07QUFDakMsc0JBQUkyRixPQUFKLEVBQWE7QUFDVEQsb0JBQUFBLFFBQVEsQ0FBQ2tCLElBQUksSUFBSUEsSUFBSSxDQUFDZixNQUFMLENBQVlDLElBQUksSUFBSUEsSUFBSSxDQUFDOUcsSUFBTCxLQUFjQSxJQUFJLENBQUNZLEdBQXZDLENBQVQsQ0FBUjtBQUNILG1CQUZELENBR0E7QUFIQSx1QkFJSztBQUNEOEYsb0JBQUFBLFFBQVEsQ0FBQ2tCLElBQUksSUFBSSxDQUFDLEdBQUdBLElBQUosRUFBVTtBQUFFNUgsc0JBQUFBLElBQUksRUFBRUEsSUFBSSxDQUFDWTtBQUFiLHFCQUFWLENBQVQsQ0FBUjtBQUNIO0FBQ0osaUJBUkQ7QUFTSCxlQWhCRCxNQWdCTztBQUNIcUYsZ0JBQUFBLDREQUFRLENBQUNLLElBQUksQ0FBQzFGLEdBQU4sRUFBV1osSUFBSSxDQUFDWSxHQUFoQixFQUFxQjhGLFFBQXJCLEVBQStCQyxPQUFPLEdBQUcsS0FBSCxHQUFXLElBQWpELENBQVI7QUFDSDtBQUNKO0FBeEJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUE0QkksK0RBQUMsK0NBQUQ7QUFDSSxrQkFBTSxFQUFFTCxJQUFJLENBQUMxRixHQURqQjtBQUVJLG1CQUFPLEVBQ0g2RixLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUFmLGlCQUNJO0FBQU0sdUJBQVMsRUFBQyxlQUFoQjtBQUFBLHdCQUNNLEdBQUVILEtBQUssQ0FBQ0csTUFBTyxJQUFHSCxLQUFLLENBQUNHLE1BQU4sS0FBaUIsQ0FBakIsR0FBcUIsTUFBckIsR0FBOEIsT0FBUTtBQUQ5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE1QkosZUF1Q0ksK0RBQUMsbURBQUQ7QUFBTSxnQkFBSSxFQUFDLGlCQUFYO0FBQTZCLGlCQUFLLEVBQUU7QUFBRWlCLGNBQUFBLFVBQVUsRUFBRTtBQUFkLGFBQXBDO0FBQTJELGlCQUFLLEVBQUM7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF2Q0osRUF5Q0tkLFFBQVEsQ0FBQ0gsTUFBVCxHQUFrQixDQUFsQixJQUNHRyxRQUFRLENBQUMxQyxHQUFULENBQ0ksQ0FBQ3lELE9BQUQsRUFBVUMsQ0FBVixLQUNJQSxDQUFDLEdBQUcsQ0FBSixpQkFDSSwrREFBQyxrREFBRDtBQUVJLG1CQUFPLEVBQUVELE9BRmI7QUFHSSxrQkFBTSxFQUFFeEIsSUFBSSxDQUFDMUYsR0FIakI7QUFJSSxnQkFBSSxFQUFFWixJQUpWO0FBS0ksdUJBQVcsRUFBRWdIO0FBTGpCLGFBQ1NjLE9BQU8sQ0FBQ2xILEdBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSFosQ0ExQ1IsRUF1REttRyxRQUFRLENBQUNILE1BQVQsR0FBa0IsQ0FBbEIsaUJBQ0csK0RBQUMscURBQUQ7QUFDSSxtQkFBTyxFQUFDLFdBRFo7QUFFSSxpQkFBSyxFQUFDLE1BRlY7QUFHSSxpQkFBSyxNQUhUO0FBSUksb0JBQVEsTUFKWjtBQUtJLG1CQUFPLEVBQUUsTUFBTU8sWUFBWSxDQUFDLElBQUQ7QUFML0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4RFIsZUFpRUksK0RBQUMsc0RBQUQ7QUFBUyxrQkFBTTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakVKLGVBbUVJLCtEQUFDLHVEQUFEO0FBQW1CLGdCQUFJLEVBQUVuSCxJQUF6QjtBQUErQixrQkFBTSxFQUFFc0csSUFBSSxDQUFDMUYsR0FBNUM7QUFBaUQsdUJBQVcsRUFBRW9HO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbkVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoRUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCSixlQTBKSSwrREFBQyxzREFBRDtBQUFTLFlBQU07QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUpKO0FBQUEsa0JBREo7QUE4Skg7O0FBRUQsaUVBQWVYLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM01BO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU04saUJBQVQsQ0FBMkI7QUFBRXRELEVBQUFBLE1BQUY7QUFBVXpDLEVBQUFBLElBQVY7QUFBZ0JnSCxFQUFBQTtBQUFoQixDQUEzQixFQUEwRDtBQUN4RCxRQUFNO0FBQUEsT0FBQy9HLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCZiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2dCLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCakIsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBRUEsc0JBQ0UsOERBQUMsbURBQUQ7QUFDRSxTQUFLLE1BRFA7QUFFRSxZQUFRLEVBQUUsTUFBTW9CLENBQU4sSUFBVztBQUNuQkEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FKLE1BQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFDQSxZQUFNNEgsK0RBQVcsQ0FBQ3ZGLE1BQUQsRUFBU3pDLElBQVQsRUFBZUMsSUFBZixFQUFxQitHLFdBQXJCLEVBQWtDOUcsT0FBbEMsQ0FBakI7QUFFQUUsTUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBUkg7QUFBQSwyQkFTRSw4REFBQyx5REFBRDtBQUNFLFdBQUssRUFBRUgsSUFEVDtBQUVFLGNBQVEsRUFBRU0sQ0FBQyxJQUFJTCxPQUFPLENBQUNLLENBQUMsQ0FBQ2UsTUFBRixDQUFTQyxLQUFWLENBRnhCO0FBR0UsaUJBQVcsRUFBQyxhQUhkO0FBSUUsWUFBTSxFQUFFO0FBQ05DLFFBQUFBLEtBQUssRUFBRSxNQUREO0FBRU5DLFFBQUFBLElBQUksRUFBRSxNQUZBO0FBR050QixRQUFBQSxPQUFPLEVBQUVBLE9BSEg7QUFJTnVCLFFBQUFBLFFBQVEsRUFBRXpCLElBQUksS0FBSyxFQUFULElBQWVFO0FBSm5CO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVCRDs7QUFFRCxpRUFBZTRGLGlCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU3NDLFVBQVQsQ0FBb0I7QUFBRXJJLEVBQUFBLElBQUY7QUFBUXVHLEVBQUFBO0FBQVIsQ0FBcEIsRUFBd0M7QUFDcEMsUUFBTTtBQUFBLE9BQUMrQixPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QnBKLCtDQUFRLENBQUM7QUFBRWMsSUFBQUEsSUFBSSxFQUFFLEVBQVI7QUFBWXVILElBQUFBLFFBQVEsRUFBRTtBQUF0QixHQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNySCxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QmpCLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBLFFBQU1xSixRQUFRLEdBQUdQLDZDQUFNLEVBQXZCO0FBRUEsUUFBTTtBQUFBLE9BQUN6QyxLQUFEO0FBQUEsT0FBUXlCO0FBQVIsTUFBb0I5SCwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ3NKLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDdkosK0NBQVEsQ0FBQyxLQUFELENBQTlDO0FBRUEsUUFBTTtBQUFBLE9BQUN3SixLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQnpKLCtDQUFRLENBQUMsSUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDMEosWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0MzSiwrQ0FBUSxDQUFDLElBQUQsQ0FBaEQ7QUFFQSxRQUFNO0FBQUEsT0FBQytILFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCaEksK0NBQVEsQ0FBQyxLQUFELENBQTFDOztBQUVBLFFBQU00SixZQUFZLEdBQUd4SSxDQUFDLElBQUk7QUFDdEIsVUFBTTtBQUFFZ0MsTUFBQUEsSUFBRjtBQUFRaEIsTUFBQUEsS0FBUjtBQUFleUgsTUFBQUE7QUFBZixRQUF5QnpJLENBQUMsQ0FBQ2UsTUFBakM7O0FBRUEsUUFBSWlCLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ2xCLFVBQUl5RyxLQUFLLElBQUlBLEtBQUssQ0FBQ3BDLE1BQU4sR0FBZSxDQUE1QixFQUErQjtBQUMzQmdDLFFBQUFBLFFBQVEsQ0FBQ0ksS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFSO0FBQ0FGLFFBQUFBLGVBQWUsQ0FBQ0csR0FBRyxDQUFDQyxlQUFKLENBQW9CRixLQUFLLENBQUMsQ0FBRCxDQUF6QixDQUFELENBQWY7QUFDSDtBQUNKOztBQUVEVCxJQUFBQSxVQUFVLENBQUNYLElBQUksb0NBQVVBLElBQVY7QUFBZ0IsT0FBQ3JGLElBQUQsR0FBUWhCO0FBQXhCLE1BQUwsQ0FBVjtBQUNILEdBWEQ7O0FBYUEsUUFBTTRILFNBQVMsR0FBRyxPQUFPO0FBQ3JCQyxJQUFBQSxTQUFTLEVBQUUsUUFEVTtBQUVyQkMsSUFBQUEsTUFBTSxFQUFFLE9BRmE7QUFHckJDLElBQUFBLEtBQUssRUFBRSxPQUhjO0FBSXJCQyxJQUFBQSxNQUFNLEVBQUUsUUFKYTtBQUtyQkMsSUFBQUEsVUFBVSxFQUFFYixLQUFLLEtBQUssSUFBVixJQUFrQixNQUxUO0FBTXJCM0YsSUFBQUEsTUFBTSxFQUFFLFNBTmE7QUFPckJ5RyxJQUFBQSxXQUFXLEVBQUVoQixXQUFXLEdBQUcsT0FBSCxHQUFhO0FBUGhCLEdBQVAsQ0FBbEI7O0FBVUEsUUFBTWlCLFlBQVksR0FBRyxNQUFNbkosQ0FBTixJQUFXO0FBQzVCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUosSUFBQUEsVUFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBLFFBQUlpSCxNQUFKOztBQUVBLFFBQUlzQixLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNoQnRCLE1BQUFBLE1BQU0sR0FBRyxNQUFNYSxxRUFBUyxDQUFDUyxLQUFELENBQXhCOztBQUNBLFVBQUksQ0FBQ3RCLE1BQUwsRUFBYTtBQUNUakgsUUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBLGVBQU82RyxRQUFRLENBQUMsdUJBQUQsQ0FBZjtBQUNIO0FBQ0o7O0FBRUQsVUFBTWtCLGlFQUFhLENBQ2ZHLE9BQU8sQ0FBQ3JJLElBRE8sRUFFZnFJLE9BQU8sQ0FBQ2QsUUFGTyxFQUdmSCxNQUhlLEVBSWZkLFFBSmUsRUFLZmdDLFVBTGUsRUFNZnRCLFFBTmUsQ0FBbkI7QUFTQTJCLElBQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDQUMsSUFBQUEsWUFBWSxJQUFJSSxHQUFHLENBQUNVLGVBQUosQ0FBb0JkLFlBQXBCLENBQWhCO0FBQ0FlLElBQUFBLFVBQVUsQ0FBQyxNQUFNZCxlQUFlLENBQUMsSUFBRCxDQUF0QixFQUE4QixJQUE5QixDQUFWO0FBQ0ExSSxJQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0gsR0ExQkQ7O0FBNEJBLHNCQUNJO0FBQUEsZUFDSzhHLFNBQVMsaUJBQ04sOERBQUMsb0RBQUQ7QUFDSSxrQkFBWSxFQUFFMkIsWUFEbEI7QUFFSSxjQUFRLEVBQUVELFFBRmQ7QUFHSSxlQUFTLEVBQUUxQixTQUhmO0FBSUksa0JBQVksRUFBRUM7QUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZSLGVBVUksOERBQUMsbURBQUQ7QUFBTSxXQUFLLEVBQUUzQixLQUFLLEtBQUssSUFBdkI7QUFBNkIsY0FBUSxFQUFFa0UsWUFBdkM7QUFBQSw4QkFDSSw4REFBQyxzREFBRDtBQUNJLGFBQUssTUFEVDtBQUVJLGlCQUFTLEVBQUUsTUFBTXpDLFFBQVEsQ0FBQyxJQUFELENBRjdCO0FBR0ksZUFBTyxFQUFFekIsS0FIYjtBQUlJLGNBQU0sRUFBQztBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVFJLDhEQUFDLHlEQUFEO0FBQUEsZ0NBQ0ksOERBQUMsb0RBQUQ7QUFBTyxhQUFHLEVBQUV4RixJQUFJLENBQUN3QyxhQUFqQjtBQUFnQyxrQkFBUSxNQUF4QztBQUF5QyxnQkFBTSxNQUEvQztBQUFnRCxnQkFBTTtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUksOERBQUMsNERBQUQ7QUFDSSxxQkFBVyxFQUFDLGlCQURoQjtBQUVJLGNBQUksRUFBQyxNQUZUO0FBR0ksZUFBSyxFQUFFOEYsT0FBTyxDQUFDckksSUFIbkI7QUFJSSxrQkFBUSxFQUFFOEksWUFKZDtBQUtJLGNBQUksRUFBRSxDQUxWO0FBTUksZUFBSyxFQUFFO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSixlQW9CSSw4REFBQyx5REFBRDtBQUFBLGdDQUNJLDhEQUFDLHlEQUFEO0FBQ0ksZUFBSyxFQUFFVCxPQUFPLENBQUNkLFFBRG5CO0FBRUksY0FBSSxFQUFDLFVBRlQ7QUFHSSxrQkFBUSxFQUFFdUIsWUFIZDtBQUlJLGVBQUssRUFBQyxjQUpWO0FBS0ksY0FBSSxFQUFDLHNCQUxUO0FBTUkscUJBQVcsRUFBQztBQU5oQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBVUk7QUFDSSxhQUFHLEVBQUVQLFFBRFQ7QUFFSSxrQkFBUSxFQUFFTyxZQUZkO0FBR0ksY0FBSSxFQUFDLE9BSFQ7QUFJSSxlQUFLLEVBQUU7QUFBRWMsWUFBQUEsT0FBTyxFQUFFO0FBQVgsV0FKWDtBQUtJLGNBQUksRUFBQyxNQUxUO0FBTUksZ0JBQU0sRUFBQztBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJKLGVBd0NJO0FBQ0ksZUFBTyxFQUFFLE1BQU1yQixRQUFRLENBQUMvSCxPQUFULENBQWlCcUosS0FBakIsRUFEbkI7QUFFSSxhQUFLLEVBQUVYLFNBQVMsRUFGcEI7QUFHSSxrQkFBVSxFQUFFNUksQ0FBQyxJQUFJO0FBQ2JBLFVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBa0ksVUFBQUEsY0FBYyxDQUFDLElBQUQsQ0FBZDtBQUNILFNBTkw7QUFPSSxtQkFBVyxFQUFFbkksQ0FBQyxJQUFJO0FBQ2RBLFVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBa0ksVUFBQUEsY0FBYyxDQUFDLEtBQUQsQ0FBZDtBQUNILFNBVkw7QUFXSSxjQUFNLEVBQUVuSSxDQUFDLElBQUk7QUFDVEEsVUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FrSSxVQUFBQSxjQUFjLENBQUMsSUFBRCxDQUFkO0FBRUEsZ0JBQU1xQixXQUFXLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXMUosQ0FBQyxDQUFDMkosWUFBRixDQUFlbEIsS0FBMUIsQ0FBcEI7QUFFQUosVUFBQUEsUUFBUSxDQUFDbUIsV0FBVyxDQUFDLENBQUQsQ0FBWixDQUFSO0FBQ0FqQixVQUFBQSxlQUFlLENBQUNHLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQmEsV0FBVyxDQUFDLENBQUQsQ0FBL0IsQ0FBRCxDQUFmO0FBQ0gsU0FuQkw7QUFBQSxrQkFxQktwQixLQUFLLEtBQUssSUFBVixnQkFDRyw4REFBQyxtREFBRDtBQUFNLGNBQUksRUFBQyxNQUFYO0FBQWtCLGNBQUksRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURILGdCQUdHLDhEQUFDLG9EQUFEO0FBQ0ksZUFBSyxFQUFFO0FBQUVVLFlBQUFBLE1BQU0sRUFBRSxPQUFWO0FBQW1CQyxZQUFBQSxLQUFLLEVBQUU7QUFBMUIsV0FEWDtBQUVJLGFBQUcsRUFBRVQsWUFGVDtBQUdJLGFBQUcsRUFBQyxXQUhSO0FBSUksa0JBQVEsTUFKWjtBQUtJLGNBQUksRUFBQztBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhDSixFQTBFS0EsWUFBWSxLQUFLLElBQWpCLGlCQUNHO0FBQUEsZ0NBQ0ksOERBQUMsc0RBQUQ7QUFBUyxnQkFBTTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFHSSw4REFBQyxxREFBRDtBQUNJLGlCQUFPLEVBQUMsWUFEWjtBQUVJLGNBQUksRUFBQyxRQUZUO0FBR0ksaUJBQU8sTUFIWDtBQUlJLGtCQUFRLE1BSlo7QUFLSSxpQkFBTyxFQUFFLE1BQU0xQixZQUFZLENBQUMsSUFBRDtBQUwvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKO0FBQUEsc0JBM0VSLGVBd0ZJLDhEQUFDLHNEQUFEO0FBQVMsY0FBTTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4RkosZUEwRkksOERBQUMscURBQUQ7QUFDSSxnQkFBUSxNQURaO0FBRUksZ0JBQVEsRUFBRW1CLE9BQU8sQ0FBQ3JJLElBQVIsS0FBaUIsRUFBakIsSUFBdUJFLE9BRnJDO0FBR0ksZUFBTyxlQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhiO0FBSUksYUFBSyxFQUFFO0FBQUVnSyxVQUFBQSxlQUFlLEVBQUUsU0FBbkI7QUFBOEIzSSxVQUFBQSxLQUFLLEVBQUU7QUFBckMsU0FKWDtBQUtJLFlBQUksRUFBQyxNQUxUO0FBTUksZUFBTyxFQUFFckI7QUFOYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKLGVBNkdJLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3R0o7QUFBQSxrQkFESjtBQWlISDs7QUFFRCxpRUFBZWtJLFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pMQTtBQUNBO0FBQ0E7Ozs7QUFFQSxTQUFTRCxjQUFULENBQXdCO0FBQUVTLEVBQUFBLFlBQUY7QUFBZ0JDLEVBQUFBLGVBQWhCO0FBQWlDRixFQUFBQSxRQUFqQztBQUEyQzFCLEVBQUFBLFNBQTNDO0FBQXNEQyxFQUFBQTtBQUF0RCxDQUF4QixFQUE4RjtBQUMxRixRQUFNO0FBQUEsT0FBQ29ELE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCckwsK0NBQVEsRUFBdEM7O0FBRUEsUUFBTXNMLFdBQVcsR0FBRyxNQUFNO0FBQ3RCLFFBQUlGLE9BQUosRUFBYTtBQUNUM0IsTUFBQUEsUUFBUSxDQUFDMkIsT0FBTyxDQUFDRyxnQkFBUixHQUEyQkMsU0FBM0IsRUFBRCxDQUFSO0FBQ0FKLE1BQUFBLE9BQU8sQ0FBQ0ssT0FBUjtBQUNIOztBQUVEekQsSUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNILEdBUEQ7O0FBU0FpRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDWlMsSUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxDQUFDO0FBQUVDLE1BQUFBO0FBQUYsS0FBRCxLQUFhO0FBQzVDLFVBQUlSLE9BQUosRUFBYTtBQUNULFlBQUlRLEdBQUcsS0FBSyxHQUFaLEVBQWlCUixPQUFPLENBQUNTLFdBQVIsQ0FBb0IsTUFBcEI7QUFDakIsWUFBSUQsR0FBRyxLQUFLLEdBQVosRUFBaUJSLE9BQU8sQ0FBQ1MsV0FBUixDQUFvQixNQUFwQjtBQUNqQixZQUFJRCxHQUFHLEtBQUssR0FBWixFQUFpQlIsT0FBTyxDQUFDVSxLQUFSO0FBQ3BCO0FBQ0osS0FORDtBQU9ILEdBUlEsRUFRTixDQUFDVixPQUFELENBUk0sQ0FBVDtBQVVBLHNCQUNJO0FBQUEsMkJBQ0ksOERBQUMsb0RBQUQ7QUFDSSx3QkFBa0IsRUFBRSxLQUR4QjtBQUVJLFVBQUksRUFBQyxPQUZUO0FBR0ksYUFBTyxFQUFFLE1BQU1wRCxZQUFZLENBQUMsS0FBRCxDQUgvQjtBQUlJLFVBQUksRUFBRUQsU0FKVjtBQUFBLDhCQU1JLDhEQUFDLDJEQUFEO0FBQWMsZUFBTyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQVFJLDhEQUFDLG1EQUFEO0FBQU0sZUFBTyxFQUFFLENBQWY7QUFBQSxnQ0FDSSw4REFBQywwREFBRDtBQUFBLGlDQUNJLDhEQUFDLDREQUFEO0FBQWUsaUJBQUssTUFBcEI7QUFBQSxtQ0FDSSw4REFBQyxzREFBRDtBQUNJLG1CQUFLLEVBQUU7QUFBRW1DLGdCQUFBQSxNQUFNLEVBQUUsT0FBVjtBQUFtQkMsZ0JBQUFBLEtBQUssRUFBRTtBQUExQixlQURYO0FBRUksOEJBQWdCLE1BRnBCO0FBR0ksc0JBQVEsTUFIWjtBQUlJLHVCQUFTLE1BSmI7QUFLSSx3QkFBVSxNQUxkO0FBTUksb0JBQU0sTUFOVjtBQU9JLHNCQUFRLEVBQUMsTUFQYjtBQVFJLGdDQUFrQixFQUFFLENBUnhCO0FBU0kscUJBQU8sRUFBQyxjQVRaO0FBVUksaUJBQUcsRUFBRVQsWUFWVDtBQVdJLHNCQUFRLEVBQUUsQ0FYZDtBQVlJLDhCQUFnQixFQUFFLEVBWnRCO0FBYUksK0JBQWlCLEVBQUUsRUFidkI7QUFjSSx3QkFBVSxFQUFFLEtBZGhCO0FBZUksMEJBQVksRUFBRSxDQWZsQjtBQWdCSSw4QkFBZ0IsRUFBRSxLQWhCdEI7QUFpQkksMkJBQWEsRUFBRTBCLE9BQU8sSUFBSUMsVUFBVSxDQUFDRCxPQUFEO0FBakJ4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUF5QkksOERBQUMsMERBQUQ7QUFBQSxpQ0FDSSw4REFBQyw0REFBRDtBQUFlLGlCQUFLLE1BQXBCO0FBQUEsbUNBQ0k7QUFBQSxzQ0FDSSw4REFBQyxxREFBRDtBQUFRLGtCQUFFLEVBQUMsSUFBWDtBQUFBLHdDQUNJLDhEQUFDLG1EQUFEO0FBQU0sc0JBQUksRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFFSSw4REFBQyw2REFBRDtBQUFnQix5QkFBTyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBTUk7QUFBQSx1Q0FDSTtBQUNJLHVCQUFLLEVBQUU7QUFDSGpCLG9CQUFBQSxLQUFLLEVBQUUsTUFESjtBQUVIRCxvQkFBQUEsTUFBTSxFQUFFLE9BRkw7QUFHSFEsb0JBQUFBLE9BQU8sRUFBRSxjQUhOO0FBSUhxQixvQkFBQUEsT0FBTyxFQUFFLE1BSk47QUFLSEMsb0JBQUFBLFFBQVEsRUFBRSxRQUxQO0FBTUhDLG9CQUFBQSxTQUFTLEVBQUU7QUFOUixtQkFEWDtBQVNJLDJCQUFTLEVBQUM7QUFUZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkosZUEyREksOERBQUMsNERBQUQ7QUFBQSxnQ0FDSSw4REFBQyxxREFBRDtBQUNJLGVBQUssRUFBQyxXQURWO0FBRUksY0FBSSxFQUFDLE1BRlQ7QUFHSSxrQkFBUSxNQUhaO0FBSUksaUJBQU8sRUFBRSxNQUFNYixPQUFPLElBQUlBLE9BQU8sQ0FBQ1UsS0FBUjtBQUo5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBUUksOERBQUMscURBQUQ7QUFDSSxlQUFLLEVBQUMsaUJBRFY7QUFFSSxjQUFJLEVBQUMsTUFGVDtBQUdJLGtCQUFRLE1BSFo7QUFJSSxpQkFBTyxFQUFFLE1BQU1WLE9BQU8sSUFBSUEsT0FBTyxDQUFDUyxXQUFSLENBQW9CLE1BQXBCO0FBSjlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkosZUFlSSw4REFBQyxxREFBRDtBQUNJLGVBQUssRUFBQyxpQkFEVjtBQUVJLGNBQUksRUFBQyxNQUZUO0FBR0ksa0JBQVEsTUFIWjtBQUlJLGlCQUFPLEVBQUUsTUFBTVQsT0FBTyxJQUFJQSxPQUFPLENBQUNTLFdBQVIsQ0FBb0IsTUFBcEI7QUFKOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmSixlQXNCSSw4REFBQyxxREFBRDtBQUNJLGtCQUFRLE1BRFo7QUFFSSxpQkFBTyxFQUFDLFFBRlo7QUFHSSxjQUFJLEVBQUMsUUFIVDtBQUlJLGlCQUFPLEVBQUUsTUFBTTdELFlBQVksQ0FBQyxLQUFEO0FBSi9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEJKLGVBNkJJLDhEQUFDLHFEQUFEO0FBQVEsaUJBQU8sRUFBQyxZQUFoQjtBQUE2QixjQUFJLEVBQUMsV0FBbEM7QUFBOEMsa0JBQVEsTUFBdEQ7QUFBdUQsaUJBQU8sRUFBRXNEO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQStGSDs7QUFFRCxpRUFBZXJDLGNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxTQUFTakMsVUFBVCxDQUFvQjtBQUNsQkcsRUFBQUEsSUFEa0I7QUFFbEJ0RyxFQUFBQSxJQUZrQjtBQUdsQjBHLEVBQUFBLFFBSGtCO0FBSWxCRCxFQUFBQSxLQUprQjtBQUtsQkUsRUFBQUEsT0FMa0I7QUFNbEJJLEVBQUFBLFFBTmtCO0FBT2xCQyxFQUFBQTtBQVBrQixDQUFwQixFQVFHO0FBQ0Qsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxtREFBRDtBQUFNLGFBQU8sRUFBRSxDQUFmO0FBQWtCLGVBQVMsTUFBM0I7QUFBNEIsYUFBTyxNQUFuQztBQUFBLDhCQUNFLDhEQUFDLDBEQUFEO0FBQUEsK0JBQ0UsOERBQUMsNERBQUQ7QUFBZSxlQUFLLE1BQXBCO0FBQUEsaUNBQ0UsOERBQUMsb0RBQUQ7QUFBTyxtQkFBTyxNQUFkO0FBQWUsZ0JBQUksRUFBQyxPQUFwQjtBQUE0QixlQUFHLEVBQUVWLElBQUksQ0FBQ2U7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRSw4REFBQywwREFBRDtBQUFBLCtCQUNFLDhEQUFDLG1EQUFEO0FBQU0sZUFBSyxNQUFYO0FBQUEsa0NBQ0UsOERBQUMsMkRBQUQ7QUFBQSxvQ0FDRSw4REFBQyxvREFBRDtBQUFPLHFCQUFPLEVBQUMsTUFBZjtBQUFzQixvQkFBTSxNQUE1QjtBQUE2QixpQkFBRyxFQUFFZixJQUFJLENBQUN0RyxJQUFMLENBQVV3QztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBR0UsOERBQUMsMERBQUQ7QUFBQSxxQ0FDRSw4REFBQyxrREFBRDtBQUFNLG9CQUFJLEVBQUcsSUFBRzhELElBQUksQ0FBQ3RHLElBQUwsQ0FBVTRCLFFBQVMsRUFBbkM7QUFBQSx1Q0FDRTtBQUFBLDRCQUFJMEUsSUFBSSxDQUFDdEcsSUFBTCxDQUFVdUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEYsZUFTRSw4REFBQyx3REFBRDtBQUFBLHdCQUFZN0MsNkRBQWEsQ0FBQzRHLElBQUksQ0FBQ2lCLFNBQU47QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFURixFQVdHakIsSUFBSSxDQUFDa0IsUUFBTCxpQkFBaUIsOERBQUMsd0RBQUQ7QUFBVyxxQkFBTyxFQUFFbEIsSUFBSSxDQUFDa0I7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFYcEIsZUFhRSw4REFBQywrREFBRDtBQUNFLG1CQUFLLEVBQUU7QUFDTEMsZ0JBQUFBLFFBQVEsRUFBRSxNQURMO0FBRUxDLGdCQUFBQSxhQUFhLEVBQUUsT0FGVjtBQUdMQyxnQkFBQUEsV0FBVyxFQUFFO0FBSFIsZUFEVDtBQUFBLHdCQU1HckIsSUFBSSxDQUFDckc7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQXdCRSw4REFBQywyREFBRDtBQUFjLGlCQUFLLE1BQW5CO0FBQUEsb0NBQ0UsOERBQUMsbURBQUQ7QUFDRSxrQkFBSSxFQUFFMEcsT0FBTyxHQUFHLE9BQUgsR0FBYSxlQUQ1QjtBQUVFLG1CQUFLLEVBQUMsS0FGUjtBQUdFLG1CQUFLLEVBQUU7QUFBRTNELGdCQUFBQSxNQUFNLEVBQUU7QUFBVixlQUhUO0FBSUUscUJBQU8sRUFBRSxNQUNQaUQsNERBQVEsQ0FBQ0ssSUFBSSxDQUFDMUYsR0FBTixFQUFXWixJQUFJLENBQUNZLEdBQWhCLEVBQXFCOEYsUUFBckIsRUFBK0JDLE9BQU8sR0FBRyxLQUFILEdBQVcsSUFBakQ7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBVUUsOERBQUMsK0NBQUQ7QUFDRSxvQkFBTSxFQUFFTCxJQUFJLENBQUMxRixHQURmO0FBRUUscUJBQU8sRUFDTDZGLEtBQUssQ0FBQ0csTUFBTixHQUFlLENBQWYsaUJBQ0U7QUFBTSx5QkFBUyxFQUFDLGVBQWhCO0FBQUEsMEJBQ0ksR0FBRUgsS0FBSyxDQUFDRyxNQUFPLElBQUdILEtBQUssQ0FBQ0csTUFBTixLQUFpQixDQUFqQixHQUFxQixNQUFyQixHQUE4QixPQUFRO0FBRDVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZGLGVBcUJFLDhEQUFDLHNEQUFEO0FBQVMsb0JBQU07QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXJCRixlQXVCRTtBQUNFLG1CQUFLLEVBQUU7QUFDTHVFLGdCQUFBQSxRQUFRLEVBQUUsTUFETDtBQUVMOUIsZ0JBQUFBLE1BQU0sRUFBRXRDLFFBQVEsQ0FBQ0gsTUFBVCxHQUFrQixDQUFsQixHQUFzQixPQUF0QixHQUFnQyxNQUZuQztBQUdMeUUsZ0JBQUFBLFlBQVksRUFBRTtBQUhULGVBRFQ7QUFBQSx3QkFNR3RFLFFBQVEsQ0FBQ0gsTUFBVCxHQUFrQixDQUFsQixJQUNDRyxRQUFRLENBQUMxQyxHQUFULENBQWF5RCxPQUFPLGlCQUNsQiw4REFBQyxrREFBRDtBQUVFLHVCQUFPLEVBQUVBLE9BRlg7QUFHRSxzQkFBTSxFQUFFeEIsSUFBSSxDQUFDMUYsR0FIZjtBQUlFLG9CQUFJLEVBQUVaLElBSlI7QUFLRSwyQkFBVyxFQUFFZ0g7QUFMZixpQkFDT2MsT0FBTyxDQUFDbEgsR0FEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF2QkYsZUF5Q0UsOERBQUMsdURBQUQ7QUFDRSxvQkFBTSxFQUFFMEYsSUFBSSxDQUFDMUYsR0FEZjtBQUVFLGtCQUFJLEVBQUVaLElBRlI7QUFHRSx5QkFBVyxFQUFFZ0g7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXNGRDs7QUFFRCxpRUFBZWIsVUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU0QsU0FBVCxDQUFtQjtBQUFFekQsRUFBQUEsTUFBRjtBQUFVa0osRUFBQUE7QUFBVixDQUFuQixFQUF3QztBQUN0QyxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEIxTSwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ2dCLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCakIsK0NBQVEsQ0FBQyxLQUFELENBQXRDOztBQUVBLFFBQU0yTSxZQUFZLEdBQUcsWUFBWTtBQUMvQjFMLElBQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7O0FBQ0EsUUFBSTtBQUNGLFlBQU0yTCxHQUFHLEdBQUcsTUFBTVQsZ0RBQUEsQ0FBVyxHQUFFQyxtREFBUSxtQkFBa0I5SSxNQUFPLEVBQTlDLEVBQWlEO0FBQ2pFd0osUUFBQUEsT0FBTyxFQUFFO0FBQUVDLFVBQUFBLGFBQWEsRUFBRVQsb0RBQUEsQ0FBVyxPQUFYO0FBQWpCO0FBRHdELE9BQWpELENBQWxCO0FBR0FJLE1BQUFBLFlBQVksQ0FBQ0UsR0FBRyxDQUFDSSxJQUFMLENBQVo7QUFDRCxLQUxELENBS0UsT0FBTzNHLEtBQVAsRUFBYztBQUNkNEcsTUFBQUEsS0FBSyxDQUFDWiwyREFBVyxDQUFDaEcsS0FBRCxDQUFaLENBQUw7QUFDRDs7QUFDRHBGLElBQUFBLFVBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxHQVhEOztBQWFBLHNCQUNFLDhEQUFDLG9EQUFEO0FBQ0UsTUFBRSxFQUFDLE9BREw7QUFFRSxXQUFPLEVBQUUsTUFBTXlMLFlBQVksQ0FBQyxFQUFELENBRjdCO0FBR0UsVUFBTSxFQUFFQyxZQUhWO0FBSUUsc0JBQWtCLEVBQUUsQ0FBQ0YsU0FBRCxDQUp0QjtBQUtFLFdBQU8sRUFBRUQsT0FMWDtBQU1FLFFBQUksTUFOTjtBQUFBLGNBT0d4TCxPQUFPLGdCQUNOLDhEQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETSxnQkFHTjtBQUFBLGdCQUNHeUwsU0FBUyxDQUFDaEYsTUFBVixHQUFtQixDQUFuQixpQkFDQztBQUNFLGFBQUssRUFBRTtBQUNMdUUsVUFBQUEsUUFBUSxFQUFFLE1BREw7QUFFTGtCLFVBQUFBLFNBQVMsRUFBRSxPQUZOO0FBR0xoRCxVQUFBQSxNQUFNLEVBQUUsT0FISDtBQUlMMUUsVUFBQUEsUUFBUSxFQUFFO0FBSkwsU0FEVDtBQUFBLCtCQU9FLDhEQUFDLG1EQUFEO0FBQU0sbUJBQVMsTUFBZjtBQUFnQixjQUFJLEVBQUMsT0FBckI7QUFBQSxvQkFDR2lILFNBQVMsQ0FBQ3ZILEdBQVYsQ0FBY3lDLElBQUksaUJBQ2pCLDhEQUFDLHdEQUFEO0FBQUEsb0NBQ0UsOERBQUMsb0RBQUQ7QUFBTyxvQkFBTSxNQUFiO0FBQWMsaUJBQUcsRUFBRUEsSUFBSSxDQUFDOUcsSUFBTCxDQUFVd0M7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUdFLDhEQUFDLDJEQUFEO0FBQUEscUNBQ0UsOERBQUMsMERBQUQ7QUFDRSx1QkFBTyxFQUFFLE1BQU1rSix1REFBQSxDQUFhLElBQUc1RSxJQUFJLENBQUM5RyxJQUFMLENBQVU0QixRQUFTLEVBQW5DLENBRGpCO0FBRUUsa0JBQUUsRUFBQyxHQUZMO0FBR0UsdUJBQU8sRUFBRWtGLElBQUksQ0FBQzlHLElBQUwsQ0FBVXVDO0FBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUEsYUFBZ0J1RSxJQUFJLENBQUNsRyxHQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlDRDs7QUFFRCxpRUFBZXNGLFNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNFLFlBQVQsQ0FBc0I7QUFDcEJFLEVBQUFBLElBRG9CO0FBRXBCdEcsRUFBQUEsSUFGb0I7QUFHcEIwRyxFQUFBQSxRQUhvQjtBQUlwQkQsRUFBQUEsS0FKb0I7QUFLcEJFLEVBQUFBLE9BTG9CO0FBTXBCSSxFQUFBQSxRQU5vQjtBQU9wQkMsRUFBQUE7QUFQb0IsQ0FBdEIsRUFRRztBQUNELHNCQUNFLDhEQUFDLG1EQUFEO0FBQU0sU0FBSyxNQUFYO0FBQUEsNEJBQ0UsOERBQUMsMkRBQUQ7QUFBQSw4QkFDRSw4REFBQyxvREFBRDtBQUFPLGVBQU8sRUFBQyxNQUFmO0FBQXNCLGNBQU0sTUFBNUI7QUFBNkIsV0FBRyxFQUFFVixJQUFJLENBQUN0RyxJQUFMLENBQVV3QztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRSw4REFBQywwREFBRDtBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFHLElBQUc4RCxJQUFJLENBQUN0RyxJQUFMLENBQVU0QixRQUFTLEVBQW5DO0FBQUEsaUNBQ0U7QUFBQSxzQkFBSTBFLElBQUksQ0FBQ3RHLElBQUwsQ0FBVXVDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFTRSw4REFBQyx3REFBRDtBQUFBLGtCQUFZN0MsNkRBQWEsQ0FBQzRHLElBQUksQ0FBQ2lCLFNBQU47QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLEVBV0dqQixJQUFJLENBQUNrQixRQUFMLGlCQUFpQiw4REFBQyx3REFBRDtBQUFXLGVBQU8sRUFBRWxCLElBQUksQ0FBQ2tCO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYcEIsZUFhRSw4REFBQywrREFBRDtBQUNFLGFBQUssRUFBRTtBQUNMQyxVQUFBQSxRQUFRLEVBQUUsTUFETDtBQUVMQyxVQUFBQSxhQUFhLEVBQUUsT0FGVjtBQUdMQyxVQUFBQSxXQUFXLEVBQUU7QUFIUixTQURUO0FBQUEsa0JBTUdyQixJQUFJLENBQUNyRztBQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQXdCRSw4REFBQywyREFBRDtBQUFjLFdBQUssTUFBbkI7QUFBQSw4QkFDRSw4REFBQyxtREFBRDtBQUNFLFlBQUksRUFBRTBHLE9BQU8sR0FBRyxPQUFILEdBQWEsZUFENUI7QUFFRSxhQUFLLEVBQUMsS0FGUjtBQUdFLGFBQUssRUFBRTtBQUFFM0QsVUFBQUEsTUFBTSxFQUFFO0FBQVYsU0FIVDtBQUlFLGVBQU8sRUFBRSxNQUNQaUQsNERBQVEsQ0FBQ0ssSUFBSSxDQUFDMUYsR0FBTixFQUFXWixJQUFJLENBQUNZLEdBQWhCLEVBQXFCOEYsUUFBckIsRUFBK0JDLE9BQU8sR0FBRyxLQUFILEdBQVcsSUFBakQ7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFVRSw4REFBQywrQ0FBRDtBQUNFLGNBQU0sRUFBRUwsSUFBSSxDQUFDMUYsR0FEZjtBQUVFLGVBQU8sRUFDTDZGLEtBQUssQ0FBQ0csTUFBTixHQUFlLENBQWYsaUJBQ0U7QUFBTSxtQkFBUyxFQUFDLGVBQWhCO0FBQUEsb0JBQ0ksR0FBRUgsS0FBSyxDQUFDRyxNQUFPLElBQUdILEtBQUssQ0FBQ0csTUFBTixLQUFpQixDQUFqQixHQUFxQixNQUFyQixHQUE4QixPQUFRO0FBRDVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUFxQkUsOERBQUMsc0RBQUQ7QUFBUyxjQUFNO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCRixlQXVCRTtBQUNFLGFBQUssRUFBRTtBQUNMdUUsVUFBQUEsUUFBUSxFQUFFLE1BREw7QUFFTDlCLFVBQUFBLE1BQU0sRUFBRXRDLFFBQVEsQ0FBQ0gsTUFBVCxHQUFrQixDQUFsQixHQUFzQixPQUF0QixHQUFnQyxNQUZuQztBQUdMeUUsVUFBQUEsWUFBWSxFQUFFO0FBSFQsU0FEVDtBQUFBLGtCQU1HdEUsUUFBUSxDQUFDSCxNQUFULEdBQWtCLENBQWxCLElBQ0NHLFFBQVEsQ0FBQzFDLEdBQVQsQ0FBYXlELE9BQU8saUJBQ2xCLDhEQUFDLGtEQUFEO0FBRUUsaUJBQU8sRUFBRUEsT0FGWDtBQUdFLGdCQUFNLEVBQUV4QixJQUFJLENBQUMxRixHQUhmO0FBSUUsY0FBSSxFQUFFWixJQUpSO0FBS0UscUJBQVcsRUFBRWdIO0FBTGYsV0FDT2MsT0FBTyxDQUFDbEgsR0FEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCRixlQXlDRSw4REFBQyx1REFBRDtBQUFtQixjQUFNLEVBQUUwRixJQUFJLENBQUMxRixHQUFoQztBQUFxQyxZQUFJLEVBQUVaLElBQTNDO0FBQWlELG1CQUFXLEVBQUVnSDtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNFRDs7QUFFRCxpRUFBZVosWUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU04sWUFBVCxDQUFzQjtBQUFFZ0MsRUFBQUEsT0FBRjtBQUFXOUgsRUFBQUEsSUFBWDtBQUFpQmdILEVBQUFBLFdBQWpCO0FBQThCdkUsRUFBQUE7QUFBOUIsQ0FBdEIsRUFBOEQ7QUFDNUQsUUFBTTtBQUFBLE9BQUNmLFFBQUQ7QUFBQSxPQUFXOEs7QUFBWCxNQUEwQnJOLCtDQUFRLENBQUMsS0FBRCxDQUF4QztBQUVBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsNERBQUQ7QUFBQSw2QkFDRSw4REFBQyxzREFBRDtBQUFBLGdDQUNFLDhEQUFDLDZEQUFEO0FBQWdCLGFBQUcsRUFBRTJJLE9BQU8sQ0FBQzlILElBQVIsQ0FBYXdDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyw4REFBRDtBQUFBLGtDQUNFLDhEQUFDLDZEQUFEO0FBQWdCLGNBQUUsRUFBQyxHQUFuQjtBQUF1QixnQkFBSSxFQUFHLElBQUdzRixPQUFPLENBQUM5SCxJQUFSLENBQWE0QixRQUFTLEVBQXZEO0FBQUEsc0JBQ0drRyxPQUFPLENBQUM5SCxJQUFSLENBQWF1QztBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUUsOERBQUMsK0RBQUQ7QUFBQSxzQkFBbUI3Qyw2REFBYSxDQUFDb0ksT0FBTyxDQUFDM0csSUFBVDtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBTUUsOERBQUMsMkRBQUQ7QUFBQSxzQkFBZTJHLE9BQU8sQ0FBQzdIO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkYsZUFRRSw4REFBQyw4REFBRDtBQUFBLG1DQUNFLDhEQUFDLDZEQUFEO0FBQUEsd0JBQ0csQ0FBQ0QsSUFBSSxDQUFDc0gsSUFBTCxLQUFjLE1BQWQsSUFBd0JRLE9BQU8sQ0FBQzlILElBQVIsQ0FBYVksR0FBYixLQUFxQlosSUFBSSxDQUFDWSxHQUFuRCxrQkFDQyw4REFBQyxtREFBRDtBQUNFLHdCQUFRLEVBQUVjLFFBRFo7QUFFRSxxQkFBSyxFQUFDLEtBRlI7QUFHRSxvQkFBSSxFQUFDLE9BSFA7QUFJRSx1QkFBTyxFQUFFLFlBQVk7QUFDbkI4SyxrQkFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNBLHdCQUFNRCxpRUFBYSxDQUFDOUosTUFBRCxFQUFTcUYsT0FBTyxDQUFDbEgsR0FBakIsRUFBc0JvRyxXQUF0QixDQUFuQjtBQUNBd0Ysa0JBQUFBLFdBQVcsQ0FBQyxLQUFELENBQVg7QUFDRDtBQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBa0NEOztBQUVELGlFQUFlMUcsWUFBZjs7Ozs7Ozs7Ozs7QUM1Q2E7O0FBQ2IyRyw4Q0FBNkM7QUFDekNsTCxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQW9MLGVBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7QUFDQSxJQUFJRSxNQUFNLEdBQUdDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLHlGQUFELENBQXJCOztBQUNBLElBQUlFLFFBQVEsR0FBR0YsbUJBQU8sQ0FBQywyREFBRCxDQUF0Qjs7QUFDQSxJQUFJRyxnQkFBZ0IsR0FBR0gsbUJBQU8sQ0FBQywrRUFBRCxDQUE5Qjs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ0ssR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0FBQ2pDUCxJQUFBQSxPQUFPLEVBQUVPO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsTUFBTUUsVUFBVSxHQUFHLEVBQW5COztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JoTCxNQUFsQixFQUEwQmlMLElBQTFCLEVBQWdDQyxFQUFoQyxFQUFvQ0MsT0FBcEMsRUFBNkM7QUFDekMsTUFBSSxJQUFKLEVBQThDO0FBQzlDLE1BQUksQ0FBQyxDQUFDLEdBQUdULE9BQUosRUFBYVUsVUFBYixDQUF3QkgsSUFBeEIsQ0FBTCxFQUFvQyxPQUZLLENBR3pDO0FBQ0E7QUFDQTtBQUNBOztBQUNBakwsRUFBQUEsTUFBTSxDQUFDZ0wsUUFBUCxDQUFnQkMsSUFBaEIsRUFBc0JDLEVBQXRCLEVBQTBCQyxPQUExQixFQUFtQ0UsS0FBbkMsQ0FBMENDLEdBQUQsSUFBTztBQUM1QyxjQUEyQztBQUN2QztBQUNBLFlBQU1BLEdBQU47QUFDSDtBQUNKLEdBTEQ7QUFNQSxRQUFNQyxTQUFTLEdBQUdKLE9BQU8sSUFBSSxPQUFPQSxPQUFPLENBQUNLLE1BQWYsS0FBMEIsV0FBckMsR0FBbURMLE9BQU8sQ0FBQ0ssTUFBM0QsR0FBb0V4TCxNQUFNLElBQUlBLE1BQU0sQ0FBQ3dMLE1BQXZHLENBYnlDLENBY3pDOztBQUNBVCxFQUFBQSxVQUFVLENBQUNFLElBQUksR0FBRyxHQUFQLEdBQWFDLEVBQWIsSUFBbUJLLFNBQVMsR0FBRyxNQUFNQSxTQUFULEdBQXFCLEVBQWpELENBQUQsQ0FBVixHQUFtRSxJQUFuRTtBQUNIOztBQUNELFNBQVNFLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQzVCLFFBQU07QUFBRTFNLElBQUFBO0FBQUYsTUFBYzBNLEtBQUssQ0FBQ0MsYUFBMUI7QUFDQSxTQUFPM00sTUFBTSxJQUFJQSxNQUFNLEtBQUssT0FBckIsSUFBZ0MwTSxLQUFLLENBQUNFLE9BQXRDLElBQWlERixLQUFLLENBQUNHLE9BQXZELElBQWtFSCxLQUFLLENBQUNJLFFBQXhFLElBQW9GSixLQUFLLENBQUNLLE1BQTFGLElBQW9HTCxLQUFLLENBQUNNLFdBQU4sSUFBcUJOLEtBQUssQ0FBQ00sV0FBTixDQUFrQkMsS0FBbEIsS0FBNEIsQ0FBNUo7QUFDSDs7QUFDRCxTQUFTQyxXQUFULENBQXFCak8sQ0FBckIsRUFBd0IrQixNQUF4QixFQUFnQ2lMLElBQWhDLEVBQXNDQyxFQUF0QyxFQUEwQ2lCLE9BQTFDLEVBQW1EQyxPQUFuRCxFQUE0REMsTUFBNUQsRUFBb0ViLE1BQXBFLEVBQTRFO0FBQ3hFLFFBQU07QUFBRWMsSUFBQUE7QUFBRixNQUFnQnJPLENBQUMsQ0FBQzBOLGFBQXhCOztBQUNBLE1BQUlXLFFBQVEsS0FBSyxHQUFiLEtBQXFCYixlQUFlLENBQUN4TixDQUFELENBQWYsSUFBc0IsQ0FBQyxDQUFDLEdBQUd5TSxPQUFKLEVBQWFVLFVBQWIsQ0FBd0JILElBQXhCLENBQTVDLENBQUosRUFBZ0Y7QUFDNUU7QUFDQTtBQUNIOztBQUNEaE4sRUFBQUEsQ0FBQyxDQUFDQyxjQUFGLEdBTndFLENBT3hFOztBQUNBLE1BQUltTyxNQUFNLElBQUksSUFBVixJQUFrQm5CLEVBQUUsQ0FBQ3FCLE9BQUgsQ0FBVyxHQUFYLEtBQW1CLENBQXpDLEVBQTRDO0FBQ3hDRixJQUFBQSxNQUFNLEdBQUcsS0FBVDtBQUNILEdBVnVFLENBV3hFOzs7QUFDQXJNLEVBQUFBLE1BQU0sQ0FBQ21NLE9BQU8sR0FBRyxTQUFILEdBQWUsTUFBdkIsQ0FBTixDQUFxQ2xCLElBQXJDLEVBQTJDQyxFQUEzQyxFQUErQztBQUMzQ2tCLElBQUFBLE9BRDJDO0FBRTNDWixJQUFBQSxNQUYyQztBQUczQ2EsSUFBQUE7QUFIMkMsR0FBL0M7QUFLSDs7QUFDRCxTQUFTbFAsSUFBVCxDQUFjcVAsS0FBZCxFQUFxQjtBQUNqQixZQUEyQztBQUN2QyxhQUFTQyxlQUFULENBQXlCQyxJQUF6QixFQUErQjtBQUMzQixhQUFPLElBQUlDLEtBQUosQ0FBVyxnQ0FBK0JELElBQUksQ0FBQ2pFLEdBQUksZ0JBQWVpRSxJQUFJLENBQUNFLFFBQVMsNkJBQTRCRixJQUFJLENBQUNHLE1BQU8sYUFBOUcsSUFBOEgsU0FBZ0MsQ0FBaEMsR0FBcUcsRUFBbk8sQ0FBVixDQUFQO0FBQ0gsS0FIc0MsQ0FJdkM7OztBQUNBLFVBQU1DLGtCQUFrQixHQUFHO0FBQ3ZCN0IsTUFBQUEsSUFBSSxFQUFFO0FBRGlCLEtBQTNCO0FBR0EsVUFBTThCLGFBQWEsR0FBRzVDLE1BQU0sQ0FBQzZDLElBQVAsQ0FBWUYsa0JBQVosQ0FBdEI7QUFDQUMsSUFBQUEsYUFBYSxDQUFDRSxPQUFkLENBQXVCeEUsR0FBRCxJQUFPO0FBQ3pCLFVBQUlBLEdBQUcsS0FBSyxNQUFaLEVBQW9CO0FBQ2hCLFlBQUkrRCxLQUFLLENBQUMvRCxHQUFELENBQUwsSUFBYyxJQUFkLElBQXNCLE9BQU8rRCxLQUFLLENBQUMvRCxHQUFELENBQVosS0FBc0IsUUFBdEIsSUFBa0MsT0FBTytELEtBQUssQ0FBQy9ELEdBQUQsQ0FBWixLQUFzQixRQUFsRixFQUE0RjtBQUN4RixnQkFBTWdFLGVBQWUsQ0FBQztBQUNsQmhFLFlBQUFBLEdBRGtCO0FBRWxCbUUsWUFBQUEsUUFBUSxFQUFFLHNCQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUVMLEtBQUssQ0FBQy9ELEdBQUQsQ0FBTCxLQUFlLElBQWYsR0FBc0IsTUFBdEIsR0FBK0IsT0FBTytELEtBQUssQ0FBQy9ELEdBQUQ7QUFIakMsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSRCxNQVFPO0FBQ0g7QUFDQTtBQUNBLGNBQU15RSxDQUFDLEdBQUd6RSxHQUFWO0FBQ0g7QUFDSixLQWRELEVBVHVDLENBd0J2Qzs7QUFDQSxVQUFNMEUsa0JBQWtCLEdBQUc7QUFDdkJqQyxNQUFBQSxFQUFFLEVBQUUsSUFEbUI7QUFFdkJpQixNQUFBQSxPQUFPLEVBQUUsSUFGYztBQUd2QkUsTUFBQUEsTUFBTSxFQUFFLElBSGU7QUFJdkJELE1BQUFBLE9BQU8sRUFBRSxJQUpjO0FBS3ZCZ0IsTUFBQUEsUUFBUSxFQUFFLElBTGE7QUFNdkJwQyxNQUFBQSxRQUFRLEVBQUUsSUFOYTtBQU92QlEsTUFBQUEsTUFBTSxFQUFFO0FBUGUsS0FBM0I7QUFTQSxVQUFNNkIsYUFBYSxHQUFHbEQsTUFBTSxDQUFDNkMsSUFBUCxDQUFZRyxrQkFBWixDQUF0QjtBQUNBRSxJQUFBQSxhQUFhLENBQUNKLE9BQWQsQ0FBdUJ4RSxHQUFELElBQU87QUFDekIsWUFBTTZFLE9BQU8sR0FBRyxPQUFPZCxLQUFLLENBQUMvRCxHQUFELENBQTVCOztBQUNBLFVBQUlBLEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQ2QsWUFBSStELEtBQUssQ0FBQy9ELEdBQUQsQ0FBTCxJQUFjNkUsT0FBTyxLQUFLLFFBQTFCLElBQXNDQSxPQUFPLEtBQUssUUFBdEQsRUFBZ0U7QUFDNUQsZ0JBQU1iLGVBQWUsQ0FBQztBQUNsQmhFLFlBQUFBLEdBRGtCO0FBRWxCbUUsWUFBQUEsUUFBUSxFQUFFLHNCQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUVTO0FBSFUsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSRCxNQVFPLElBQUk3RSxHQUFHLEtBQUssUUFBWixFQUFzQjtBQUN6QixZQUFJK0QsS0FBSyxDQUFDL0QsR0FBRCxDQUFMLElBQWM2RSxPQUFPLEtBQUssUUFBOUIsRUFBd0M7QUFDcEMsZ0JBQU1iLGVBQWUsQ0FBQztBQUNsQmhFLFlBQUFBLEdBRGtCO0FBRWxCbUUsWUFBQUEsUUFBUSxFQUFFLFVBRlE7QUFHbEJDLFlBQUFBLE1BQU0sRUFBRVM7QUFIVSxXQUFELENBQXJCO0FBS0g7QUFDSixPQVJNLE1BUUEsSUFBSTdFLEdBQUcsS0FBSyxTQUFSLElBQXFCQSxHQUFHLEtBQUssUUFBN0IsSUFBeUNBLEdBQUcsS0FBSyxTQUFqRCxJQUE4REEsR0FBRyxLQUFLLFVBQXRFLElBQW9GQSxHQUFHLEtBQUssVUFBaEcsRUFBNEc7QUFDL0csWUFBSStELEtBQUssQ0FBQy9ELEdBQUQsQ0FBTCxJQUFjLElBQWQsSUFBc0I2RSxPQUFPLEtBQUssU0FBdEMsRUFBaUQ7QUFDN0MsZ0JBQU1iLGVBQWUsQ0FBQztBQUNsQmhFLFlBQUFBLEdBRGtCO0FBRWxCbUUsWUFBQUEsUUFBUSxFQUFFLFdBRlE7QUFHbEJDLFlBQUFBLE1BQU0sRUFBRVM7QUFIVSxXQUFELENBQXJCO0FBS0g7QUFDSixPQVJNLE1BUUE7QUFDSDtBQUNBO0FBQ0EsY0FBTUosQ0FBQyxHQUFHekUsR0FBVjtBQUNIO0FBQ0osS0EvQkQsRUFuQ3VDLENBbUV2QztBQUNBOztBQUNBLFVBQU04RSxTQUFTLEdBQUdoRCxNQUFNLENBQUNELE9BQVAsQ0FBZTNFLE1BQWYsQ0FBc0IsS0FBdEIsQ0FBbEI7O0FBQ0EsUUFBSTZHLEtBQUssQ0FBQ3hCLFFBQU4sSUFBa0IsQ0FBQ3VDLFNBQVMsQ0FBQ3BQLE9BQWpDLEVBQTBDO0FBQ3RDb1AsTUFBQUEsU0FBUyxDQUFDcFAsT0FBVixHQUFvQixJQUFwQjtBQUNBcVAsTUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsc0tBQWI7QUFDSDtBQUNKOztBQUNELFFBQU1DLENBQUMsR0FBR2xCLEtBQUssQ0FBQ3hCLFFBQU4sS0FBbUIsS0FBN0I7QUFDQSxRQUFNaEwsTUFBTSxHQUFHLENBQUMsR0FBRzJLLFFBQUosRUFBY2hMLFNBQWQsRUFBZjs7QUFDQSxRQUFNO0FBQUVzTCxJQUFBQSxJQUFGO0FBQVNDLElBQUFBO0FBQVQsTUFBaUJYLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlcUQsT0FBZixDQUF1QixNQUFJO0FBQzlDLFVBQU0sQ0FBQ0MsWUFBRCxFQUFlQyxVQUFmLElBQTZCLENBQUMsR0FBR25ELE9BQUosRUFBYW9ELFdBQWIsQ0FBeUI5TixNQUF6QixFQUFpQ3dNLEtBQUssQ0FBQ3ZCLElBQXZDLEVBQTZDLElBQTdDLENBQW5DO0FBQ0EsV0FBTztBQUNIQSxNQUFBQSxJQUFJLEVBQUUyQyxZQURIO0FBRUgxQyxNQUFBQSxFQUFFLEVBQUVzQixLQUFLLENBQUN0QixFQUFOLEdBQVcsQ0FBQyxHQUFHUixPQUFKLEVBQWFvRCxXQUFiLENBQXlCOU4sTUFBekIsRUFBaUN3TSxLQUFLLENBQUN0QixFQUF2QyxDQUFYLEdBQXdEMkMsVUFBVSxJQUFJRDtBQUZ2RSxLQUFQO0FBSUgsR0FOc0IsRUFNcEIsQ0FDQzVOLE1BREQsRUFFQ3dNLEtBQUssQ0FBQ3ZCLElBRlAsRUFHQ3VCLEtBQUssQ0FBQ3RCLEVBSFAsQ0FOb0IsQ0FBdkI7O0FBV0EsTUFBSTtBQUFFNkMsSUFBQUEsUUFBRjtBQUFhNUIsSUFBQUEsT0FBYjtBQUF1QkMsSUFBQUEsT0FBdkI7QUFBaUNDLElBQUFBLE1BQWpDO0FBQTBDYixJQUFBQTtBQUExQyxNQUFzRGdCLEtBQTFELENBekZpQixDQTBGakI7O0FBQ0EsTUFBSSxPQUFPdUIsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUM5QkEsSUFBQUEsUUFBUSxHQUFHLGFBQWN4RCxNQUFNLENBQUNELE9BQVAsQ0FBZTBELGFBQWYsQ0FBNkIsR0FBN0IsRUFBa0MsSUFBbEMsRUFBd0NELFFBQXhDLENBQXpCO0FBQ0gsR0E3RmdCLENBOEZqQjs7O0FBQ0EsTUFBSUUsS0FBSjs7QUFDQSxZQUE0QztBQUN4QyxRQUFJO0FBQ0FBLE1BQUFBLEtBQUssR0FBRzFELE1BQU0sQ0FBQ0QsT0FBUCxDQUFlNEQsUUFBZixDQUF3QkMsSUFBeEIsQ0FBNkJKLFFBQTdCLENBQVI7QUFDSCxLQUZELENBRUUsT0FBT3pDLEdBQVAsRUFBWTtBQUNWLFlBQU0sSUFBSXFCLEtBQUosQ0FBVyw4REFBNkRILEtBQUssQ0FBQ3ZCLElBQUssNEZBQXpFLElBQXdLLFNBQWdDLENBQWhDLEdBQXNHLEVBQTlRLENBQVYsQ0FBTjtBQUNIO0FBQ0osR0FORCxNQU1PLEVBRU47O0FBQ0QsUUFBTW1ELFFBQVEsR0FBR0gsS0FBSyxJQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBMUIsSUFBc0NBLEtBQUssQ0FBQ0ksR0FBN0Q7QUFDQSxRQUFNLENBQUNDLGtCQUFELEVBQXFCQyxTQUFyQixJQUFrQyxDQUFDLEdBQUczRCxnQkFBSixFQUFzQjRELGVBQXRCLENBQXNDO0FBQzFFQyxJQUFBQSxVQUFVLEVBQUU7QUFEOEQsR0FBdEMsQ0FBeEM7O0FBR0EsUUFBTUMsTUFBTSxHQUFHbkUsTUFBTSxDQUFDRCxPQUFQLENBQWVxRSxXQUFmLENBQTRCQyxFQUFELElBQU07QUFDNUNOLElBQUFBLGtCQUFrQixDQUFDTSxFQUFELENBQWxCOztBQUNBLFFBQUlSLFFBQUosRUFBYztBQUNWLFVBQUksT0FBT0EsUUFBUCxLQUFvQixVQUF4QixFQUFvQ0EsUUFBUSxDQUFDUSxFQUFELENBQVIsQ0FBcEMsS0FDSyxJQUFJLE9BQU9SLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDbkNBLFFBQUFBLFFBQVEsQ0FBQ2pRLE9BQVQsR0FBbUJ5USxFQUFuQjtBQUNIO0FBQ0o7QUFDSixHQVJjLEVBUVosQ0FDQ1IsUUFERCxFQUVDRSxrQkFGRCxDQVJZLENBQWY7O0FBWUEvRCxFQUFBQSxNQUFNLENBQUNELE9BQVAsQ0FBZXhDLFNBQWYsQ0FBeUIsTUFBSTtBQUN6QixVQUFNK0csY0FBYyxHQUFHTixTQUFTLElBQUliLENBQWIsSUFBa0IsQ0FBQyxHQUFHaEQsT0FBSixFQUFhVSxVQUFiLENBQXdCSCxJQUF4QixDQUF6QztBQUNBLFVBQU1NLFNBQVMsR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFoQyxHQUF5Q3hMLE1BQU0sSUFBSUEsTUFBTSxDQUFDd0wsTUFBNUU7QUFDQSxVQUFNc0QsWUFBWSxHQUFHL0QsVUFBVSxDQUFDRSxJQUFJLEdBQUcsR0FBUCxHQUFhQyxFQUFiLElBQW1CSyxTQUFTLEdBQUcsTUFBTUEsU0FBVCxHQUFxQixFQUFqRCxDQUFELENBQS9COztBQUNBLFFBQUlzRCxjQUFjLElBQUksQ0FBQ0MsWUFBdkIsRUFBcUM7QUFDakM5RCxNQUFBQSxRQUFRLENBQUNoTCxNQUFELEVBQVNpTCxJQUFULEVBQWVDLEVBQWYsRUFBbUI7QUFDdkJNLFFBQUFBLE1BQU0sRUFBRUQ7QUFEZSxPQUFuQixDQUFSO0FBR0g7QUFDSixHQVRELEVBU0csQ0FDQ0wsRUFERCxFQUVDRCxJQUZELEVBR0NzRCxTQUhELEVBSUMvQyxNQUpELEVBS0NrQyxDQUxELEVBTUMxTixNQU5ELENBVEg7O0FBaUJBLFFBQU0rTyxVQUFVLEdBQUc7QUFDZlYsSUFBQUEsR0FBRyxFQUFFSyxNQURVO0FBRWZNLElBQUFBLE9BQU8sRUFBRy9RLENBQUQsSUFBSztBQUNWLFVBQUlnUSxLQUFLLENBQUN6QixLQUFOLElBQWUsT0FBT3lCLEtBQUssQ0FBQ3pCLEtBQU4sQ0FBWXdDLE9BQW5CLEtBQStCLFVBQWxELEVBQThEO0FBQzFEZixRQUFBQSxLQUFLLENBQUN6QixLQUFOLENBQVl3QyxPQUFaLENBQW9CL1EsQ0FBcEI7QUFDSDs7QUFDRCxVQUFJLENBQUNBLENBQUMsQ0FBQ2dSLGdCQUFQLEVBQXlCO0FBQ3JCL0MsUUFBQUEsV0FBVyxDQUFDak8sQ0FBRCxFQUFJK0IsTUFBSixFQUFZaUwsSUFBWixFQUFrQkMsRUFBbEIsRUFBc0JpQixPQUF0QixFQUErQkMsT0FBL0IsRUFBd0NDLE1BQXhDLEVBQWdEYixNQUFoRCxDQUFYO0FBQ0g7QUFDSjtBQVRjLEdBQW5COztBQVdBdUQsRUFBQUEsVUFBVSxDQUFDRyxZQUFYLEdBQTJCalIsQ0FBRCxJQUFLO0FBQzNCLFFBQUksQ0FBQyxDQUFDLEdBQUd5TSxPQUFKLEVBQWFVLFVBQWIsQ0FBd0JILElBQXhCLENBQUwsRUFBb0M7O0FBQ3BDLFFBQUlnRCxLQUFLLENBQUN6QixLQUFOLElBQWUsT0FBT3lCLEtBQUssQ0FBQ3pCLEtBQU4sQ0FBWTBDLFlBQW5CLEtBQW9DLFVBQXZELEVBQW1FO0FBQy9EakIsTUFBQUEsS0FBSyxDQUFDekIsS0FBTixDQUFZMEMsWUFBWixDQUF5QmpSLENBQXpCO0FBQ0g7O0FBQ0QrTSxJQUFBQSxRQUFRLENBQUNoTCxNQUFELEVBQVNpTCxJQUFULEVBQWVDLEVBQWYsRUFBbUI7QUFDdkJpRSxNQUFBQSxRQUFRLEVBQUU7QUFEYSxLQUFuQixDQUFSO0FBR0gsR0FSRCxDQXJKaUIsQ0E4SmpCO0FBQ0E7OztBQUNBLE1BQUkzQyxLQUFLLENBQUNZLFFBQU4sSUFBa0JhLEtBQUssQ0FBQ21CLElBQU4sS0FBZSxHQUFmLElBQXNCLEVBQUUsVUFBVW5CLEtBQUssQ0FBQ3pCLEtBQWxCLENBQTVDLEVBQXNFO0FBQ2xFLFVBQU1qQixTQUFTLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBaEMsR0FBeUN4TCxNQUFNLElBQUlBLE1BQU0sQ0FBQ3dMLE1BQTVFLENBRGtFLENBRWxFO0FBQ0E7O0FBQ0EsVUFBTTZELFlBQVksR0FBR3JQLE1BQU0sSUFBSUEsTUFBTSxDQUFDc1AsY0FBakIsSUFBbUMsQ0FBQyxHQUFHNUUsT0FBSixFQUFhNkUsZUFBYixDQUE2QnJFLEVBQTdCLEVBQWlDSyxTQUFqQyxFQUE0Q3ZMLE1BQU0sSUFBSUEsTUFBTSxDQUFDd1AsT0FBN0QsRUFBc0V4UCxNQUFNLElBQUlBLE1BQU0sQ0FBQ3lQLGFBQXZGLENBQXhEO0FBQ0FWLElBQUFBLFVBQVUsQ0FBQzlELElBQVgsR0FBa0JvRSxZQUFZLElBQUksQ0FBQyxHQUFHM0UsT0FBSixFQUFhZ0YsV0FBYixDQUF5QixDQUFDLEdBQUdoRixPQUFKLEVBQWFpRixTQUFiLENBQXVCekUsRUFBdkIsRUFBMkJLLFNBQTNCLEVBQXNDdkwsTUFBTSxJQUFJQSxNQUFNLENBQUM0UCxhQUF2RCxDQUF6QixDQUFsQztBQUNIOztBQUNELFNBQU8sYUFBY3JGLE1BQU0sQ0FBQ0QsT0FBUCxDQUFldUYsWUFBZixDQUE0QjVCLEtBQTVCLEVBQW1DYyxVQUFuQyxDQUFyQjtBQUNIOztBQUNELElBQUllLFFBQVEsR0FBRzNTLElBQWY7QUFDQWtOLGVBQUEsR0FBa0J5RixRQUFsQjs7Ozs7Ozs7Ozs7QUNqT2E7O0FBQ2IzRiw4Q0FBNkM7QUFDekNsTCxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQW9MLCtCQUFBLEdBQWtDMEYsdUJBQWxDO0FBQ0ExRixrQ0FBQSxHQUFxQyxLQUFLLENBQTFDOztBQUNBLFNBQVMwRix1QkFBVCxDQUFpQ0UsSUFBakMsRUFBdUM7QUFDbkMsU0FBT0EsSUFBSSxDQUFDQyxRQUFMLENBQWMsR0FBZCxLQUFzQkQsSUFBSSxLQUFLLEdBQS9CLEdBQXFDQSxJQUFJLENBQUNFLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBQyxDQUFmLENBQXJDLEdBQXlERixJQUFoRTtBQUNIOztBQUNELE1BQU1ELDBCQUEwQixHQUFHSSxNQUFBLEdBQXFDSCxDQUFyQyxHQVEvQkYsdUJBUko7QUFTQTFGLGtDQUFBLEdBQXFDMkYsMEJBQXJDOzs7Ozs7Ozs7OztBQ2xCYTs7QUFDYjdGLDhDQUE2QztBQUN6Q2xMLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBb0wsMkJBQUEsR0FBOEJBLDBCQUFBLEdBQTZCLEtBQUssQ0FBaEU7O0FBQ0EsTUFBTW1HLG1CQUFtQixHQUFHLE9BQU9FLElBQVAsS0FBZ0IsV0FBaEIsSUFBK0JBLElBQUksQ0FBQ0YsbUJBQXBDLElBQTJERSxJQUFJLENBQUNGLG1CQUFMLENBQXlCRyxJQUF6QixDQUE4QnBJLE1BQTlCLENBQTNELElBQW9HLFVBQVNxSSxFQUFULEVBQWE7QUFDekksTUFBSUMsS0FBSyxHQUFHalEsSUFBSSxDQUFDQyxHQUFMLEVBQVo7QUFDQSxTQUFPeUcsVUFBVSxDQUFDLFlBQVc7QUFDekJzSixJQUFBQSxFQUFFLENBQUM7QUFDQ0UsTUFBQUEsVUFBVSxFQUFFLEtBRGI7QUFFQ0MsTUFBQUEsYUFBYSxFQUFFLFlBQVc7QUFDdEIsZUFBT0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFZLE1BQU1yUSxJQUFJLENBQUNDLEdBQUwsS0FBYWdRLEtBQW5CLENBQVosQ0FBUDtBQUNIO0FBSkYsS0FBRCxDQUFGO0FBTUgsR0FQZ0IsRUFPZCxDQVBjLENBQWpCO0FBUUgsQ0FWRDs7QUFXQXhHLDJCQUFBLEdBQThCbUcsbUJBQTlCOztBQUNBLE1BQU1DLGtCQUFrQixHQUFHLE9BQU9DLElBQVAsS0FBZ0IsV0FBaEIsSUFBK0JBLElBQUksQ0FBQ0Qsa0JBQXBDLElBQTBEQyxJQUFJLENBQUNELGtCQUFMLENBQXdCRSxJQUF4QixDQUE2QnBJLE1BQTdCLENBQTFELElBQWtHLFVBQVMySSxFQUFULEVBQWE7QUFDdEksU0FBT0MsWUFBWSxDQUFDRCxFQUFELENBQW5CO0FBQ0gsQ0FGRDs7QUFHQTdHLDBCQUFBLEdBQTZCb0csa0JBQTdCOzs7Ozs7Ozs7OztBQ3BCYTs7QUFDYnRHLDhDQUE2QztBQUN6Q2xMLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBb0wsc0JBQUEsR0FBeUIrRyxjQUF6QjtBQUNBL0csb0JBQUEsR0FBdUJnSCxZQUF2QjtBQUNBaEgsOEJBQUEsR0FBaUNpSCxzQkFBakM7QUFDQWpILHlCQUFBLEdBQTRCa0gsaUJBQTVCOztBQUNBLElBQUlDLHNCQUFzQixHQUFHaEgsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsa0hBQUQsQ0FBUixDQUFuRDs7QUFDQSxJQUFJZ0gsb0JBQW9CLEdBQUdoSCxtQkFBTyxDQUFDLHlGQUFELENBQWxDOztBQUNBLFNBQVNELHNCQUFULENBQWdDSyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDakNQLElBQUFBLE9BQU8sRUFBRU87QUFEd0IsR0FBckM7QUFHSCxFQUNEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxNQUFNNkcsaUJBQWlCLEdBQUcsSUFBMUI7O0FBQ0EsU0FBU0MsVUFBVCxDQUFvQmxKLEdBQXBCLEVBQXlCMUcsR0FBekIsRUFBOEI2UCxTQUE5QixFQUF5QztBQUNyQyxNQUFJQyxLQUFLLEdBQUc5UCxHQUFHLENBQUMySCxHQUFKLENBQVFqQixHQUFSLENBQVo7O0FBQ0EsTUFBSW9KLEtBQUosRUFBVztBQUNQLFFBQUksWUFBWUEsS0FBaEIsRUFBdUI7QUFDbkIsYUFBT0EsS0FBSyxDQUFDQyxNQUFiO0FBQ0g7O0FBQ0QsV0FBT0MsT0FBTyxDQUFDQyxPQUFSLENBQWdCSCxLQUFoQixDQUFQO0FBQ0g7O0FBQ0QsTUFBSUksUUFBSjtBQUNBLFFBQU1DLElBQUksR0FBRyxJQUFJSCxPQUFKLENBQWFDLE9BQUQsSUFBVztBQUNoQ0MsSUFBQUEsUUFBUSxHQUFHRCxPQUFYO0FBQ0gsR0FGWSxDQUFiO0FBR0FqUSxFQUFBQSxHQUFHLENBQUNvUSxHQUFKLENBQVExSixHQUFSLEVBQWFvSixLQUFLLEdBQUc7QUFDakJHLElBQUFBLE9BQU8sRUFBRUMsUUFEUTtBQUVqQkgsSUFBQUEsTUFBTSxFQUFFSTtBQUZTLEdBQXJCO0FBSUEsU0FBT04sU0FBUyxHQUFHQSxTQUFTLEdBQUdRLElBQVosQ0FBa0JuVCxLQUFELEtBQVVnVCxRQUFRLENBQUNoVCxLQUFELENBQVIsRUFBaUJBLEtBQTNCLENBQWpCLENBQUgsR0FDWmlULElBREo7QUFFSDs7QUFDRCxTQUFTRyxXQUFULENBQXFCQyxJQUFyQixFQUEyQjtBQUN2QixNQUFJO0FBQ0FBLElBQUFBLElBQUksR0FBR0MsUUFBUSxDQUFDdkUsYUFBVCxDQUF1QixNQUF2QixDQUFQO0FBQ0EsV0FBTztBQUNQO0FBQ0MsT0FBQyxDQUFDekYsTUFBTSxDQUFDaUssb0JBQVQsSUFBaUMsQ0FBQyxDQUFDRCxRQUFRLENBQUNFLFlBQTdDLElBQThESCxJQUFJLENBQUNJLE9BQUwsQ0FBYUMsUUFBYixDQUFzQixVQUF0QjtBQUY5RDtBQUdILEdBTEQsQ0FLRSxPQUFPMVUsQ0FBUCxFQUFVO0FBQ1IsV0FBTyxLQUFQO0FBQ0g7QUFDSjs7QUFDRCxNQUFNMlUsV0FBVyxHQUFHUCxXQUFXLEVBQS9COztBQUNBLFNBQVNRLGNBQVQsQ0FBd0I1SCxJQUF4QixFQUE4QkMsRUFBOUIsRUFBa0NvSCxJQUFsQyxFQUF3QztBQUNwQyxTQUFPLElBQUlQLE9BQUosQ0FBWSxDQUFDdEksR0FBRCxFQUFNcUosR0FBTixLQUFZO0FBQzNCLFFBQUlQLFFBQVEsQ0FBQ1EsYUFBVCxDQUF3QiwrQkFBOEI5SCxJQUFLLElBQTNELENBQUosRUFBcUU7QUFDakUsYUFBT3hCLEdBQUcsRUFBVjtBQUNIOztBQUNENkksSUFBQUEsSUFBSSxHQUFHQyxRQUFRLENBQUN2RSxhQUFULENBQXVCLE1BQXZCLENBQVAsQ0FKMkIsQ0FLM0I7O0FBQ0EsUUFBSTlDLEVBQUosRUFBUW9ILElBQUksQ0FBQ3BILEVBQUwsR0FBVUEsRUFBVjtBQUNSb0gsSUFBQUEsSUFBSSxDQUFDVSxHQUFMLEdBQVksVUFBWjtBQUNBVixJQUFBQSxJQUFJLENBQUNXLFdBQUwsR0FBbUI3QyxTQUFuQjtBQUNBa0MsSUFBQUEsSUFBSSxDQUFDYSxNQUFMLEdBQWMxSixHQUFkO0FBQ0E2SSxJQUFBQSxJQUFJLENBQUNjLE9BQUwsR0FBZU4sR0FBZixDQVYyQixDQVczQjs7QUFDQVIsSUFBQUEsSUFBSSxDQUFDckgsSUFBTCxHQUFZQSxJQUFaO0FBQ0FzSCxJQUFBQSxRQUFRLENBQUNjLElBQVQsQ0FBY0MsV0FBZCxDQUEwQmhCLElBQTFCO0FBQ0gsR0FkTSxDQUFQO0FBZUg7O0FBQ0QsTUFBTWlCLGdCQUFnQixHQUFHQyxNQUFNLENBQUMsa0JBQUQsQ0FBL0I7O0FBQ0EsU0FBU3BDLGNBQVQsQ0FBd0I5RixHQUF4QixFQUE2QjtBQUN6QixTQUFPbkIsTUFBTSxDQUFDQyxjQUFQLENBQXNCa0IsR0FBdEIsRUFBMkJpSSxnQkFBM0IsRUFBNkMsRUFBN0MsQ0FBUDtBQUVIOztBQUNELFNBQVNsQyxZQUFULENBQXNCL0YsR0FBdEIsRUFBMkI7QUFDdkIsU0FBT0EsR0FBRyxJQUFJaUksZ0JBQWdCLElBQUlqSSxHQUFsQztBQUNIOztBQUNELFNBQVNtSSxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsTUFBM0IsRUFBbUM7QUFDL0IsU0FBTyxJQUFJNUIsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVTRCLE1BQVYsS0FBbUI7QUFDbENELElBQUFBLE1BQU0sR0FBR3BCLFFBQVEsQ0FBQ3ZFLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVCxDQURrQyxDQUVsQztBQUNBO0FBQ0E7O0FBQ0EyRixJQUFBQSxNQUFNLENBQUNSLE1BQVAsR0FBZ0JuQixPQUFoQjs7QUFDQTJCLElBQUFBLE1BQU0sQ0FBQ1AsT0FBUCxHQUFpQixNQUFJUSxNQUFNLENBQUN4QyxjQUFjLENBQUMsSUFBSXpFLEtBQUosQ0FBVywwQkFBeUIrRyxHQUFJLEVBQXhDLENBQUQsQ0FBZixDQUEzQixDQU5rQyxDQVFsQztBQUNBOzs7QUFDQUMsSUFBQUEsTUFBTSxDQUFDVixXQUFQLEdBQXFCN0MsU0FBckIsQ0FWa0MsQ0FXbEM7QUFDQTs7QUFDQXVELElBQUFBLE1BQU0sQ0FBQ0QsR0FBUCxHQUFhQSxHQUFiO0FBQ0FuQixJQUFBQSxRQUFRLENBQUNzQixJQUFULENBQWNQLFdBQWQsQ0FBMEJLLE1BQTFCO0FBQ0gsR0FmTSxDQUFQO0FBZ0JILEVBQ0Q7QUFDQTs7O0FBQ0EsSUFBSUcsZUFBSixFQUNBOztBQUNBLFNBQVNDLHlCQUFULENBQW1DckcsQ0FBbkMsRUFBc0NzRyxFQUF0QyxFQUEwQzFJLEdBQTFDLEVBQStDO0FBQzNDLFNBQU8sSUFBSXlHLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVU0QixNQUFWLEtBQW1CO0FBQ2xDLFFBQUlLLFNBQVMsR0FBRyxLQUFoQjtBQUNBdkcsSUFBQUEsQ0FBQyxDQUFDMEUsSUFBRixDQUFROEIsQ0FBRCxJQUFLO0FBQ1I7QUFDQUQsTUFBQUEsU0FBUyxHQUFHLElBQVo7QUFDQWpDLE1BQUFBLE9BQU8sQ0FBQ2tDLENBQUQsQ0FBUDtBQUNILEtBSkQsRUFJRzdJLEtBSkgsQ0FJU3VJLE1BSlQsRUFGa0MsQ0FPbEM7QUFDQTs7QUFDQSxjQUE0QztBQUN4QyxPQUFDRSxlQUFlLElBQUkvQixPQUFPLENBQUNDLE9BQVIsRUFBcEIsRUFBdUNJLElBQXZDLENBQTRDLE1BQUk7QUFDNUMsU0FBQyxHQUFHWCxvQkFBSixFQUEwQmpCLG1CQUExQixDQUE4QyxNQUFJbEosVUFBVSxDQUFDLE1BQUk7QUFDekQsY0FBSSxDQUFDMk0sU0FBTCxFQUFnQjtBQUNaTCxZQUFBQSxNQUFNLENBQUN0SSxHQUFELENBQU47QUFDSDtBQUNKLFNBSnVELEVBSXJEMEksRUFKcUQsQ0FBNUQ7QUFNSCxPQVBEO0FBUUg7O0FBQ0QsZUFBNEMsRUFPM0M7QUFDSixHQTNCTSxDQUFQO0FBNEJIOztBQUNELFNBQVMxQyxzQkFBVCxHQUFrQztBQUM5QixNQUFJWixJQUFJLENBQUN5RCxnQkFBVCxFQUEyQjtBQUN2QixXQUFPcEMsT0FBTyxDQUFDQyxPQUFSLENBQWdCdEIsSUFBSSxDQUFDeUQsZ0JBQXJCLENBQVA7QUFDSDs7QUFDRCxRQUFNQyxlQUFlLEdBQUcsSUFBSXJDLE9BQUosQ0FBYUMsT0FBRCxJQUFXO0FBQzNDO0FBQ0EsVUFBTXBCLEVBQUUsR0FBR0YsSUFBSSxDQUFDMkQsbUJBQWhCOztBQUNBM0QsSUFBQUEsSUFBSSxDQUFDMkQsbUJBQUwsR0FBMkIsTUFBSTtBQUMzQnJDLE1BQUFBLE9BQU8sQ0FBQ3RCLElBQUksQ0FBQ3lELGdCQUFOLENBQVA7QUFDQXZELE1BQUFBLEVBQUUsSUFBSUEsRUFBRSxFQUFSO0FBQ0gsS0FIRDtBQUlILEdBUHVCLENBQXhCO0FBUUEsU0FBT21ELHlCQUF5QixDQUFDSyxlQUFELEVBQWtCMUMsaUJBQWxCLEVBQXFDTixjQUFjLENBQUMsSUFBSXpFLEtBQUosQ0FBVSxzQ0FBVixDQUFELENBQW5ELENBQWhDO0FBQ0g7O0FBQ0QsU0FBUzJILGdCQUFULENBQTBCQyxXQUExQixFQUF1Q0MsS0FBdkMsRUFBOEM7QUFDMUMsWUFBNEM7QUFDeEMsV0FBT3pDLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjtBQUNuQnlDLE1BQUFBLE9BQU8sRUFBRSxDQUNMRixXQUFXLEdBQUcsNEJBQWQsR0FBNkNHLFNBQVMsQ0FBQyxDQUFDLEdBQUdsRCxzQkFBSixFQUE0QmxILE9BQTVCLENBQW9Da0ssS0FBcEMsRUFBMkMsS0FBM0MsQ0FBRCxDQURqRCxDQURVO0FBSW5CO0FBQ0FHLE1BQUFBLEdBQUcsRUFBRTtBQUxjLEtBQWhCLENBQVA7QUFPSDs7QUFDRCxTQUFPckQsc0JBQXNCLEdBQUdjLElBQXpCLENBQStCd0MsUUFBRCxJQUFZO0FBQzdDLFFBQUksRUFBRUosS0FBSyxJQUFJSSxRQUFYLENBQUosRUFBMEI7QUFDdEIsWUFBTXhELGNBQWMsQ0FBQyxJQUFJekUsS0FBSixDQUFXLDJCQUEwQjZILEtBQU0sRUFBM0MsQ0FBRCxDQUFwQjtBQUNIOztBQUNELFVBQU1LLFFBQVEsR0FBR0QsUUFBUSxDQUFDSixLQUFELENBQVIsQ0FBZ0J6UyxHQUFoQixDQUFxQjhQLEtBQUQsSUFBUzBDLFdBQVcsR0FBRyxTQUFkLEdBQTBCRyxTQUFTLENBQUM3QyxLQUFELENBQWhFLENBQWpCO0FBRUEsV0FBTztBQUNINEMsTUFBQUEsT0FBTyxFQUFFSSxRQUFRLENBQUN0USxNQUFULENBQWlCdVEsQ0FBRCxJQUFLQSxDQUFDLENBQUM1RSxRQUFGLENBQVcsS0FBWCxDQUFyQixDQUROO0FBR0h5RSxNQUFBQSxHQUFHLEVBQUVFLFFBQVEsQ0FBQ3RRLE1BQVQsQ0FBaUJ1USxDQUFELElBQUtBLENBQUMsQ0FBQzVFLFFBQUYsQ0FBVyxNQUFYLENBQXJCO0FBSEYsS0FBUDtBQU1ILEdBWk0sQ0FBUDtBQWFIOztBQUNELFNBQVNxQixpQkFBVCxDQUEyQmdELFdBQTNCLEVBQXdDO0FBQ3BDLFFBQU1RLFdBQVcsR0FBRyxJQUFJQyxHQUFKLEVBQXBCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHLElBQUlELEdBQUosRUFBdEI7QUFDQSxRQUFNRSxXQUFXLEdBQUcsSUFBSUYsR0FBSixFQUFwQjtBQUNBLFFBQU1HLE1BQU0sR0FBRyxJQUFJSCxHQUFKLEVBQWY7O0FBQ0EsV0FBU0ksa0JBQVQsQ0FBNEIxQixHQUE1QixFQUFpQztBQUM3QixRQUFJeEIsSUFBSSxHQUFHK0MsYUFBYSxDQUFDdkwsR0FBZCxDQUFrQmdLLEdBQWxCLENBQVg7O0FBQ0EsUUFBSXhCLElBQUosRUFBVTtBQUNOLGFBQU9BLElBQVA7QUFDSCxLQUo0QixDQUs3Qjs7O0FBQ0EsUUFBSUssUUFBUSxDQUFDUSxhQUFULENBQXdCLGdCQUFlVyxHQUFJLElBQTNDLENBQUosRUFBcUQ7QUFDakQsYUFBTzNCLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQ0g7O0FBQ0RpRCxJQUFBQSxhQUFhLENBQUM5QyxHQUFkLENBQWtCdUIsR0FBbEIsRUFBdUJ4QixJQUFJLEdBQUd1QixZQUFZLENBQUNDLEdBQUQsQ0FBMUM7QUFDQSxXQUFPeEIsSUFBUDtBQUNIOztBQUNELFdBQVNtRCxlQUFULENBQXlCcEssSUFBekIsRUFBK0I7QUFDM0IsUUFBSWlILElBQUksR0FBR2dELFdBQVcsQ0FBQ3hMLEdBQVosQ0FBZ0J1QixJQUFoQixDQUFYOztBQUNBLFFBQUlpSCxJQUFKLEVBQVU7QUFDTixhQUFPQSxJQUFQO0FBQ0g7O0FBQ0RnRCxJQUFBQSxXQUFXLENBQUMvQyxHQUFaLENBQWdCbEgsSUFBaEIsRUFBc0JpSCxJQUFJLEdBQUdvRCxLQUFLLENBQUNySyxJQUFELENBQUwsQ0FBWW1ILElBQVosQ0FBa0IzSSxHQUFELElBQU87QUFDakQsVUFBSSxDQUFDQSxHQUFHLENBQUM4TCxFQUFULEVBQWE7QUFDVCxjQUFNLElBQUk1SSxLQUFKLENBQVcsOEJBQTZCMUIsSUFBSyxFQUE3QyxDQUFOO0FBQ0g7O0FBQ0QsYUFBT3hCLEdBQUcsQ0FBQzlMLElBQUosR0FBV3lVLElBQVgsQ0FBaUJ6VSxJQUFELEtBQVM7QUFDeEJzTixRQUFBQSxJQUFJLEVBQUVBLElBRGtCO0FBRXhCdUssUUFBQUEsT0FBTyxFQUFFN1g7QUFGZSxPQUFULENBQWhCLENBQVA7QUFLSCxLQVQ0QixFQVMxQjBOLEtBVDBCLENBU25CQyxHQUFELElBQU87QUFDWixZQUFNOEYsY0FBYyxDQUFDOUYsR0FBRCxDQUFwQjtBQUNILEtBWDRCLENBQTdCO0FBWUEsV0FBTzRHLElBQVA7QUFDSDs7QUFDRCxTQUFPO0FBQ0h1RCxJQUFBQSxjQUFjLENBQUVqQixLQUFGLEVBQVM7QUFDbkIsYUFBTzdDLFVBQVUsQ0FBQzZDLEtBQUQsRUFBUU8sV0FBUixDQUFqQjtBQUNILEtBSEU7O0FBSUhXLElBQUFBLFlBQVksQ0FBRWxCLEtBQUYsRUFBU21CLE9BQVQsRUFBa0I7QUFDMUI1RCxNQUFBQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IyRCxPQUFoQixFQUF5QnZELElBQXpCLENBQStCd0QsRUFBRCxJQUFNQSxFQUFFLEVBQXRDLEVBQ0V4RCxJQURGLENBQ1EvSCxPQUFELEtBQVk7QUFDWHdMLFFBQUFBLFNBQVMsRUFBRXhMLE9BQU8sSUFBSUEsT0FBTyxDQUFDQyxPQUFuQixJQUE4QkQsT0FEOUI7QUFFWEEsUUFBQUEsT0FBTyxFQUFFQTtBQUZFLE9BQVosQ0FEUCxFQUtHaUIsR0FBRCxLQUFRO0FBQ0ZwSSxRQUFBQSxLQUFLLEVBQUVvSTtBQURMLE9BQVIsQ0FMRixFQVFFOEcsSUFSRixDQVFRMEQsS0FBRCxJQUFTO0FBQ1osY0FBTUMsR0FBRyxHQUFHaEIsV0FBVyxDQUFDckwsR0FBWixDQUFnQjhLLEtBQWhCLENBQVo7QUFDQU8sUUFBQUEsV0FBVyxDQUFDNUMsR0FBWixDQUFnQnFDLEtBQWhCLEVBQXVCc0IsS0FBdkI7QUFDQSxZQUFJQyxHQUFHLElBQUksYUFBYUEsR0FBeEIsRUFBNkJBLEdBQUcsQ0FBQy9ELE9BQUosQ0FBWThELEtBQVo7QUFDaEMsT0FaRDtBQWFILEtBbEJFOztBQW1CSEUsSUFBQUEsU0FBUyxDQUFFeEIsS0FBRixFQUFTeEosUUFBVCxFQUFtQjtBQUN4QixhQUFPMkcsVUFBVSxDQUFDNkMsS0FBRCxFQUFRVyxNQUFSLEVBQWdCLE1BQUk7QUFDakMsY0FBTWMsaUJBQWlCLEdBQUczQixnQkFBZ0IsQ0FBQ0MsV0FBRCxFQUFjQyxLQUFkLENBQWhCLENBQXFDcEMsSUFBckMsQ0FBMEMsQ0FBQztBQUFFcUMsVUFBQUEsT0FBRjtBQUFZRSxVQUFBQTtBQUFaLFNBQUQsS0FBc0I7QUFDdEYsaUJBQU81QyxPQUFPLENBQUNtRSxHQUFSLENBQVksQ0FDZm5CLFdBQVcsQ0FBQ29CLEdBQVosQ0FBZ0IzQixLQUFoQixJQUF5QixFQUF6QixHQUE4QnpDLE9BQU8sQ0FBQ21FLEdBQVIsQ0FBWXpCLE9BQU8sQ0FBQzFTLEdBQVIsQ0FBWXFULGtCQUFaLENBQVosQ0FEZixFQUVmckQsT0FBTyxDQUFDbUUsR0FBUixDQUFZdkIsR0FBRyxDQUFDNVMsR0FBSixDQUFRc1QsZUFBUixDQUFaLENBRmUsQ0FBWixDQUFQO0FBSUgsU0FMeUIsRUFLdkJqRCxJQUx1QixDQUtqQjNJLEdBQUQsSUFBTztBQUNYLGlCQUFPLEtBQUtnTSxjQUFMLENBQW9CakIsS0FBcEIsRUFBMkJwQyxJQUEzQixDQUFpQ2dFLFVBQUQsS0FBZTtBQUM5Q0EsWUFBQUEsVUFEOEM7QUFFOUNDLFlBQUFBLE1BQU0sRUFBRTVNLEdBQUcsQ0FBQyxDQUFEO0FBRm1DLFdBQWYsQ0FBaEMsQ0FBUDtBQUtILFNBWHlCLENBQTFCOztBQVlBLGtCQUE0QztBQUN4Q3FLLFVBQUFBLGVBQWUsR0FBRyxJQUFJL0IsT0FBSixDQUFhQyxPQUFELElBQVc7QUFDckMsZ0JBQUlpRSxpQkFBSixFQUF1QjtBQUNuQixxQkFBT0EsaUJBQWlCLENBQUNLLE9BQWxCLENBQTBCLE1BQUk7QUFDakN0RSxnQkFBQUEsT0FBTztBQUNWLGVBRk0sQ0FBUDtBQUdIO0FBQ0osV0FOaUIsQ0FBbEI7QUFPSDs7QUFDRCxlQUFPK0IseUJBQXlCLENBQUNrQyxpQkFBRCxFQUFvQnZFLGlCQUFwQixFQUF1Q04sY0FBYyxDQUFDLElBQUl6RSxLQUFKLENBQVcsbUNBQWtDNkgsS0FBTSxFQUFuRCxDQUFELENBQXJELENBQXpCLENBQXVJcEMsSUFBdkksQ0FBNEksQ0FBQztBQUFFZ0UsVUFBQUEsVUFBRjtBQUFlQyxVQUFBQTtBQUFmLFNBQUQsS0FBNEI7QUFDM0ssZ0JBQU01TSxHQUFHLEdBQUdVLE1BQU0sQ0FBQ29NLE1BQVAsQ0FBYztBQUN0QkYsWUFBQUEsTUFBTSxFQUFFQTtBQURjLFdBQWQsRUFFVEQsVUFGUyxDQUFaO0FBR0EsaUJBQU8sV0FBV0EsVUFBWCxHQUF3QkEsVUFBeEIsR0FBcUMzTSxHQUE1QztBQUNILFNBTE0sRUFLSjRCLEtBTEksQ0FLR0MsR0FBRCxJQUFPO0FBQ1osY0FBSU4sUUFBSixFQUFjO0FBQ1Y7QUFDQSxrQkFBTU0sR0FBTjtBQUNIOztBQUNELGlCQUFPO0FBQ0hwSSxZQUFBQSxLQUFLLEVBQUVvSTtBQURKLFdBQVA7QUFHSCxTQWJNLENBQVA7QUFjSCxPQXBDZ0IsQ0FBakI7QUFxQ0gsS0F6REU7O0FBMERITixJQUFBQSxRQUFRLENBQUV3SixLQUFGLEVBQVM7QUFDYjtBQUNBO0FBQ0EsVUFBSWdDLEVBQUo7O0FBQ0EsVUFBSUEsRUFBRSxHQUFHQyxTQUFTLENBQUNDLFVBQW5CLEVBQStCO0FBQzNCO0FBQ0EsWUFBSUYsRUFBRSxDQUFDRyxRQUFILElBQWUsS0FBS3BHLElBQUwsQ0FBVWlHLEVBQUUsQ0FBQ0ksYUFBYixDQUFuQixFQUFnRCxPQUFPN0UsT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDbkQ7O0FBQ0QsYUFBT3NDLGdCQUFnQixDQUFDQyxXQUFELEVBQWNDLEtBQWQsQ0FBaEIsQ0FBcUNwQyxJQUFyQyxDQUEyQ3lFLE1BQUQsSUFBVTlFLE9BQU8sQ0FBQ21FLEdBQVIsQ0FBWXRELFdBQVcsR0FBR2lFLE1BQU0sQ0FBQ3BDLE9BQVAsQ0FBZTFTLEdBQWYsQ0FBb0I0UixNQUFELElBQVVkLGNBQWMsQ0FBQ2MsTUFBRCxFQUFTLFFBQVQsQ0FBM0MsQ0FBSCxHQUMxRSxFQURtRCxDQUFwRCxFQUVMdkIsSUFGSyxDQUVBLE1BQUk7QUFDUCxTQUFDLEdBQUdYLG9CQUFKLEVBQTBCakIsbUJBQTFCLENBQThDLE1BQUksS0FBS3dGLFNBQUwsQ0FBZXhCLEtBQWYsRUFBc0IsSUFBdEIsRUFBNEJuSixLQUE1QixDQUFrQyxNQUFJLENBQ25GLENBRDZDLENBQWxEO0FBR0gsT0FOTSxFQU1KQSxLQU5JLEVBTUU7QUFDVCxZQUFJLENBQ0gsQ0FSTSxDQUFQO0FBU0g7O0FBM0VFLEdBQVA7QUE2RUg7Ozs7Ozs7Ozs7O0FDdFJZOztBQUNibEIsOENBQTZDO0FBQ3pDbEwsRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FrTCwwQ0FBeUM7QUFDckMyTSxFQUFBQSxVQUFVLEVBQUUsSUFEeUI7QUFFckNwTixFQUFBQSxHQUFHLEVBQUUsWUFBVztBQUNaLFdBQU9nQixPQUFPLENBQUNKLE9BQWY7QUFDSDtBQUpvQyxDQUF6QztBQU1BSCw4Q0FBNkM7QUFDekMyTSxFQUFBQSxVQUFVLEVBQUUsSUFENkI7QUFFekNwTixFQUFBQSxHQUFHLEVBQUUsWUFBVztBQUNaLFdBQU9xTixXQUFXLENBQUN6TSxPQUFuQjtBQUNIO0FBSndDLENBQTdDO0FBTUFELGlCQUFBLEdBQW9CMUssU0FBcEI7QUFDQTBLLG9CQUFBLEdBQXVCMk0sWUFBdkI7QUFDQTNNLGdDQUFBLEdBQW1DNE0sd0JBQW5DO0FBQ0E1TSxlQUFBLEdBQWtCLEtBQUssQ0FBdkI7O0FBQ0EsSUFBSUUsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQW5DOztBQUNBLElBQUlDLE9BQU8sR0FBR0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMseUZBQUQsQ0FBUixDQUFwQzs7QUFDQSxJQUFJeU0sY0FBYyxHQUFHek0sbUJBQU8sQ0FBQyxrRUFBRCxDQUE1Qjs7QUFDQSxJQUFJc00sV0FBVyxHQUFHdk0sc0JBQXNCLENBQUNDLG1CQUFPLENBQUMscUVBQUQsQ0FBUixDQUF4Qzs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ0ssR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0FBQ2pDUCxJQUFBQSxPQUFPLEVBQUVPO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsTUFBTXNNLGVBQWUsR0FBRztBQUNwQm5YLEVBQUFBLE1BQU0sRUFBRSxJQURZO0FBRXBCb1gsRUFBQUEsY0FBYyxFQUFFLEVBRkk7O0FBR3BCQyxFQUFBQSxLQUFLLENBQUV6RyxFQUFGLEVBQU07QUFDUCxRQUFJLEtBQUs1USxNQUFULEVBQWlCLE9BQU80USxFQUFFLEVBQVQ7O0FBQ2pCLGVBQW1DLEVBRWxDO0FBQ0o7O0FBUm1CLENBQXhCLEVBVUE7O0FBQ0EsTUFBTTBHLGlCQUFpQixHQUFHLENBQ3RCLFVBRHNCLEVBRXRCLE9BRnNCLEVBR3RCLE9BSHNCLEVBSXRCLFFBSnNCLEVBS3RCLFlBTHNCLEVBTXRCLFlBTnNCLEVBT3RCLFVBUHNCLEVBUXRCLFFBUnNCLEVBU3RCLFNBVHNCLEVBVXRCLGVBVnNCLEVBV3RCLFNBWHNCLEVBWXRCLFdBWnNCLEVBYXRCLGdCQWJzQixFQWN0QixlQWRzQixDQUExQjtBQWdCQSxNQUFNQyxZQUFZLEdBQUcsQ0FDakIsa0JBRGlCLEVBRWpCLHFCQUZpQixFQUdqQixxQkFIaUIsRUFJakIsa0JBSmlCLEVBS2pCLGlCQUxpQixFQU1qQixvQkFOaUIsQ0FBckI7QUFRQSxNQUFNQyxnQkFBZ0IsR0FBRyxDQUNyQixNQURxQixFQUVyQixTQUZxQixFQUdyQixRQUhxQixFQUlyQixNQUpxQixFQUtyQixVQUxxQixFQU1yQixnQkFOcUIsQ0FBekIsRUFRQTs7QUFDQXJOLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQitNLGVBQXRCLEVBQXVDLFFBQXZDLEVBQWlEO0FBQzdDek4sRUFBQUEsR0FBRyxHQUFJO0FBQ0gsV0FBT2dCLE9BQU8sQ0FBQ0osT0FBUixDQUFnQm1OLE1BQXZCO0FBQ0g7O0FBSDRDLENBQWpEO0FBS0FILGlCQUFpQixDQUFDckssT0FBbEIsQ0FBMkJ5SyxLQUFELElBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQXZOLEVBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQitNLGVBQXRCLEVBQXVDTyxLQUF2QyxFQUE4QztBQUMxQ2hPLElBQUFBLEdBQUcsR0FBSTtBQUNILFlBQU0xSixNQUFNLEdBQUcyWCxTQUFTLEVBQXhCO0FBQ0EsYUFBTzNYLE1BQU0sQ0FBQzBYLEtBQUQsQ0FBYjtBQUNIOztBQUp5QyxHQUE5QztBQU1ILENBWEQ7QUFZQUYsZ0JBQWdCLENBQUN2SyxPQUFqQixDQUEwQnlLLEtBQUQsSUFBUztBQUM5QlAsRUFBQUEsZUFBZSxDQUFDTyxLQUFELENBQWYsR0FBeUIsQ0FBQyxHQUFHaEwsSUFBSixLQUFXO0FBQ2hDLFVBQU0xTSxNQUFNLEdBQUcyWCxTQUFTLEVBQXhCO0FBQ0EsV0FBTzNYLE1BQU0sQ0FBQzBYLEtBQUQsQ0FBTixDQUFjLEdBQUdoTCxJQUFqQixDQUFQO0FBQ0gsR0FIRDtBQUlILENBTEQ7QUFNQTZLLFlBQVksQ0FBQ3RLLE9BQWIsQ0FBc0J2QixLQUFELElBQVM7QUFDMUJ5TCxFQUFBQSxlQUFlLENBQUNFLEtBQWhCLENBQXNCLE1BQUk7QUFDdEIzTSxJQUFBQSxPQUFPLENBQUNKLE9BQVIsQ0FBZ0JtTixNQUFoQixDQUF1Qi9ZLEVBQXZCLENBQTBCZ04sS0FBMUIsRUFBaUMsQ0FBQyxHQUFHZ0IsSUFBSixLQUFXO0FBQ3hDLFlBQU1rTCxVQUFVLEdBQUksS0FBSWxNLEtBQUssQ0FBQ21NLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxXQUFoQixFQUE4QixHQUFFcE0sS0FBSyxDQUFDcU0sU0FBTixDQUFnQixDQUFoQixDQUFtQixFQUEzRTtBQUNBLFlBQU1DLGdCQUFnQixHQUFHYixlQUF6Qjs7QUFDQSxVQUFJYSxnQkFBZ0IsQ0FBQ0osVUFBRCxDQUFwQixFQUFrQztBQUM5QixZQUFJO0FBQ0FJLFVBQUFBLGdCQUFnQixDQUFDSixVQUFELENBQWhCLENBQTZCLEdBQUdsTCxJQUFoQztBQUNILFNBRkQsQ0FFRSxPQUFPcEIsR0FBUCxFQUFZO0FBQ1ZrQyxVQUFBQSxPQUFPLENBQUN0SyxLQUFSLENBQWUsd0NBQXVDMFUsVUFBVyxFQUFqRTtBQUNBcEssVUFBQUEsT0FBTyxDQUFDdEssS0FBUixDQUFlLEdBQUVvSSxHQUFHLENBQUMyTSxPQUFRLEtBQUkzTSxHQUFHLENBQUM0TSxLQUFNLEVBQTNDO0FBQ0g7QUFDSjtBQUNKLEtBWEQ7QUFZSCxHQWJEO0FBY0gsQ0FmRDs7QUFnQkEsU0FBU1AsU0FBVCxHQUFxQjtBQUNqQixNQUFJLENBQUNSLGVBQWUsQ0FBQ25YLE1BQXJCLEVBQTZCO0FBQ3pCLFVBQU1pWSxPQUFPLEdBQUcsZ0NBQWdDLHFFQUFoRDtBQUNBLFVBQU0sSUFBSXRMLEtBQUosQ0FBVXNMLE9BQVYsQ0FBTjtBQUNIOztBQUNELFNBQU9kLGVBQWUsQ0FBQ25YLE1BQXZCO0FBQ0g7O0FBQ0QsSUFBSThQLFFBQVEsR0FBR3FILGVBQWY7QUFDQTlNLGVBQUEsR0FBa0J5RixRQUFsQjs7QUFDQSxTQUFTblEsU0FBVCxHQUFxQjtBQUNqQixTQUFPNEssTUFBTSxDQUFDRCxPQUFQLENBQWU2TixVQUFmLENBQTBCakIsY0FBYyxDQUFDa0IsYUFBekMsQ0FBUDtBQUNIOztBQUNELFNBQVNwQixZQUFULENBQXNCLEdBQUd0SyxJQUF6QixFQUErQjtBQUMzQnlLLEVBQUFBLGVBQWUsQ0FBQ25YLE1BQWhCLEdBQXlCLElBQUkwSyxPQUFPLENBQUNKLE9BQVosQ0FBb0IsR0FBR29DLElBQXZCLENBQXpCO0FBQ0F5SyxFQUFBQSxlQUFlLENBQUNDLGNBQWhCLENBQStCbkssT0FBL0IsQ0FBd0MyRCxFQUFELElBQU1BLEVBQUUsRUFBL0M7QUFFQXVHLEVBQUFBLGVBQWUsQ0FBQ0MsY0FBaEIsR0FBaUMsRUFBakM7QUFDQSxTQUFPRCxlQUFlLENBQUNuWCxNQUF2QjtBQUNIOztBQUNELFNBQVNpWCx3QkFBVCxDQUFrQ2pYLE1BQWxDLEVBQTBDO0FBQ3RDLFFBQU0ySyxRQUFRLEdBQUczSyxNQUFqQjtBQUNBLFFBQU1xWSxRQUFRLEdBQUcsRUFBakI7O0FBRUEsT0FBSyxNQUFNQyxRQUFYLElBQXVCaEIsaUJBQXZCLEVBQXlDO0FBQ3JDLFFBQUksT0FBTzNNLFFBQVEsQ0FBQzJOLFFBQUQsQ0FBZixLQUE4QixRQUFsQyxFQUE0QztBQUN4Q0QsTUFBQUEsUUFBUSxDQUFDQyxRQUFELENBQVIsR0FBcUJuTyxNQUFNLENBQUNvTSxNQUFQLENBQWM3TyxLQUFLLENBQUM2USxPQUFOLENBQWM1TixRQUFRLENBQUMyTixRQUFELENBQXRCLElBQW9DLEVBQXBDLEdBQXlDLEVBQXZELEVBQ2xCM04sUUFBUSxDQUFDMk4sUUFBRCxDQURVLENBQXJCLENBQ3VCO0FBRHZCO0FBR0E7QUFDSDs7QUFDREQsSUFBQUEsUUFBUSxDQUFDQyxRQUFELENBQVIsR0FBcUIzTixRQUFRLENBQUMyTixRQUFELENBQTdCO0FBQ0gsR0FacUMsQ0FhdEM7OztBQUNBRCxFQUFBQSxRQUFRLENBQUNaLE1BQVQsR0FBa0IvTSxPQUFPLENBQUNKLE9BQVIsQ0FBZ0JtTixNQUFsQztBQUNBRCxFQUFBQSxnQkFBZ0IsQ0FBQ3ZLLE9BQWpCLENBQTBCeUssS0FBRCxJQUFTO0FBQzlCVyxJQUFBQSxRQUFRLENBQUNYLEtBQUQsQ0FBUixHQUFrQixDQUFDLEdBQUdoTCxJQUFKLEtBQVc7QUFDekIsYUFBTy9CLFFBQVEsQ0FBQytNLEtBQUQsQ0FBUixDQUFnQixHQUFHaEwsSUFBbkIsQ0FBUDtBQUNILEtBRkQ7QUFHSCxHQUpEO0FBS0EsU0FBTzJMLFFBQVA7QUFDSDs7Ozs7Ozs7Ozs7QUN4Slk7O0FBQ2JsTyw4Q0FBNkM7QUFDekNsTCxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQW9MLHVCQUFBLEdBQTBCbUUsZUFBMUI7O0FBQ0EsSUFBSWpFLE1BQU0sR0FBR0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFwQjs7QUFDQSxJQUFJZ0gsb0JBQW9CLEdBQUdoSCxtQkFBTyxDQUFDLHlGQUFELENBQWxDOztBQUNBLE1BQU0rTix1QkFBdUIsR0FBRyxPQUFPQyxvQkFBUCxLQUFnQyxXQUFoRTs7QUFDQSxTQUFTakssZUFBVCxDQUF5QjtBQUFFQyxFQUFBQSxVQUFGO0FBQWVyUCxFQUFBQTtBQUFmLENBQXpCLEVBQXFEO0FBQ2pELFFBQU1zWixVQUFVLEdBQUd0WixRQUFRLElBQUksQ0FBQ29aLHVCQUFoQztBQUNBLFFBQU1HLFNBQVMsR0FBRyxDQUFDLEdBQUdwTyxNQUFKLEVBQVk1RSxNQUFaLEVBQWxCO0FBQ0EsUUFBTSxDQUFDaVQsT0FBRCxFQUFVQyxVQUFWLElBQXdCLENBQUMsR0FBR3RPLE1BQUosRUFBWTFOLFFBQVosQ0FBcUIsS0FBckIsQ0FBOUI7QUFDQSxRQUFNNlIsTUFBTSxHQUFHLENBQUMsR0FBR25FLE1BQUosRUFBWW9FLFdBQVosQ0FBeUJDLEVBQUQsSUFBTTtBQUN6QyxRQUFJK0osU0FBUyxDQUFDeGEsT0FBZCxFQUF1QjtBQUNuQndhLE1BQUFBLFNBQVMsQ0FBQ3hhLE9BQVY7QUFDQXdhLE1BQUFBLFNBQVMsQ0FBQ3hhLE9BQVYsR0FBb0I2RSxTQUFwQjtBQUNIOztBQUNELFFBQUkwVixVQUFVLElBQUlFLE9BQWxCLEVBQTJCOztBQUMzQixRQUFJaEssRUFBRSxJQUFJQSxFQUFFLENBQUNrSyxPQUFiLEVBQXNCO0FBQ2xCSCxNQUFBQSxTQUFTLENBQUN4YSxPQUFWLEdBQW9CNGEsT0FBTyxDQUFDbkssRUFBRCxFQUFNTCxTQUFELElBQWFBLFNBQVMsSUFBSXNLLFVBQVUsQ0FBQ3RLLFNBQUQsQ0FBekMsRUFDekI7QUFDRUUsUUFBQUE7QUFERixPQUR5QixDQUEzQjtBQUlIO0FBQ0osR0FaYyxFQVlaLENBQ0NpSyxVQURELEVBRUNqSyxVQUZELEVBR0NtSyxPQUhELENBWlksQ0FBZjtBQWlCQSxHQUFDLEdBQUdyTyxNQUFKLEVBQVl6QyxTQUFaLENBQXNCLE1BQUk7QUFDdEIsUUFBSSxDQUFDMFEsdUJBQUwsRUFBOEI7QUFDMUIsVUFBSSxDQUFDSSxPQUFMLEVBQWM7QUFDVixjQUFNSSxZQUFZLEdBQUcsQ0FBQyxHQUFHdkgsb0JBQUosRUFBMEJqQixtQkFBMUIsQ0FBOEMsTUFBSXFJLFVBQVUsQ0FBQyxJQUFELENBQTVELENBQXJCO0FBRUEsZUFBTyxNQUFJLENBQUMsR0FBR3BILG9CQUFKLEVBQTBCaEIsa0JBQTFCLENBQTZDdUksWUFBN0MsQ0FBWDtBQUVIO0FBQ0o7QUFDSixHQVRELEVBU0csQ0FDQ0osT0FERCxDQVRIO0FBWUEsU0FBTyxDQUNIbEssTUFERyxFQUVIa0ssT0FGRyxDQUFQO0FBSUg7O0FBQ0QsU0FBU0csT0FBVCxDQUFpQkUsT0FBakIsRUFBMEJDLFFBQTFCLEVBQW9DL04sT0FBcEMsRUFBNkM7QUFDekMsUUFBTTtBQUFFK0YsSUFBQUEsRUFBRjtBQUFPaUksSUFBQUEsUUFBUDtBQUFrQkMsSUFBQUE7QUFBbEIsTUFBZ0NDLGNBQWMsQ0FBQ2xPLE9BQUQsQ0FBcEQ7QUFDQWlPLEVBQUFBLFFBQVEsQ0FBQ2pILEdBQVQsQ0FBYThHLE9BQWIsRUFBc0JDLFFBQXRCO0FBQ0FDLEVBQUFBLFFBQVEsQ0FBQ0osT0FBVCxDQUFpQkUsT0FBakI7QUFDQSxTQUFPLFNBQVNOLFNBQVQsR0FBcUI7QUFDeEJTLElBQUFBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkwsT0FBaEI7QUFDQUUsSUFBQUEsUUFBUSxDQUFDUixTQUFULENBQW1CTSxPQUFuQixFQUZ3QixDQUd4Qjs7QUFDQSxRQUFJRyxRQUFRLENBQUNHLElBQVQsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckJKLE1BQUFBLFFBQVEsQ0FBQ0ssVUFBVDtBQUNBQyxNQUFBQSxTQUFTLENBQUNILE1BQVYsQ0FBaUJwSSxFQUFqQjtBQUNIO0FBQ0osR0FSRDtBQVNIOztBQUNELE1BQU11SSxTQUFTLEdBQUcsSUFBSXpFLEdBQUosRUFBbEI7O0FBQ0EsU0FBU3FFLGNBQVQsQ0FBd0JsTyxPQUF4QixFQUFpQztBQUM3QixRQUFNK0YsRUFBRSxHQUFHL0YsT0FBTyxDQUFDc0QsVUFBUixJQUFzQixFQUFqQztBQUNBLE1BQUk0SixRQUFRLEdBQUdvQixTQUFTLENBQUMvUCxHQUFWLENBQWN3SCxFQUFkLENBQWY7O0FBQ0EsTUFBSW1ILFFBQUosRUFBYztBQUNWLFdBQU9BLFFBQVA7QUFDSDs7QUFDRCxRQUFNZSxRQUFRLEdBQUcsSUFBSXBFLEdBQUosRUFBakI7QUFDQSxRQUFNbUUsUUFBUSxHQUFHLElBQUlWLG9CQUFKLENBQTBCaUIsT0FBRCxJQUFXO0FBQ2pEQSxJQUFBQSxPQUFPLENBQUN6TSxPQUFSLENBQWlCNEUsS0FBRCxJQUFTO0FBQ3JCLFlBQU1xSCxRQUFRLEdBQUdFLFFBQVEsQ0FBQzFQLEdBQVQsQ0FBYW1JLEtBQUssQ0FBQzdTLE1BQW5CLENBQWpCO0FBQ0EsWUFBTXVQLFNBQVMsR0FBR3NELEtBQUssQ0FBQzhILGNBQU4sSUFBd0I5SCxLQUFLLENBQUMrSCxpQkFBTixHQUEwQixDQUFwRTs7QUFDQSxVQUFJVixRQUFRLElBQUkzSyxTQUFoQixFQUEyQjtBQUN2QjJLLFFBQUFBLFFBQVEsQ0FBQzNLLFNBQUQsQ0FBUjtBQUNIO0FBQ0osS0FORDtBQU9ILEdBUmdCLEVBUWRwRCxPQVJjLENBQWpCO0FBU0FzTyxFQUFBQSxTQUFTLENBQUN0SCxHQUFWLENBQWNqQixFQUFkLEVBQWtCbUgsUUFBUSxHQUFHO0FBQ3pCbkgsSUFBQUEsRUFEeUI7QUFFekJpSSxJQUFBQSxRQUZ5QjtBQUd6QkMsSUFBQUE7QUFIeUIsR0FBN0I7QUFLQSxTQUFPZixRQUFQO0FBQ0g7Ozs7Ozs7Ozs7O0FDbkZZOztBQUNibE8sOENBQTZDO0FBQ3pDbEwsRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FvTCxlQUFBLEdBQWtCd1AsVUFBbEI7O0FBQ0EsSUFBSXRQLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELG1CQUFPLENBQUMsMkRBQUQsQ0FBckI7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NLLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ1AsSUFBQUEsT0FBTyxFQUFFTztBQUR3QixHQUFyQztBQUdIOztBQUNELFNBQVNnUCxVQUFULENBQW9CQyxpQkFBcEIsRUFBdUM7QUFDbkMsV0FBU0MsaUJBQVQsQ0FBMkJ2TixLQUEzQixFQUFrQztBQUM5QixXQUFPLGFBQWNqQyxNQUFNLENBQUNELE9BQVAsQ0FBZTBELGFBQWYsQ0FBNkI4TCxpQkFBN0IsRUFBZ0QzUCxNQUFNLENBQUNvTSxNQUFQLENBQWM7QUFDL0V2VyxNQUFBQSxNQUFNLEVBQUUsQ0FBQyxHQUFHMEssT0FBSixFQUFhL0ssU0FBYjtBQUR1RSxLQUFkLEVBRWxFNk0sS0FGa0UsQ0FBaEQsQ0FBckI7QUFHSDs7QUFDRHVOLEVBQUFBLGlCQUFpQixDQUFDQyxlQUFsQixHQUFvQ0YsaUJBQWlCLENBQUNFLGVBQXREO0FBQ0FELEVBQUFBLGlCQUFpQixDQUFDRSxtQkFBbEIsR0FBd0NILGlCQUFpQixDQUFDRyxtQkFBMUQ7O0FBQ0EsWUFBMkM7QUFDdkMsVUFBTWhhLElBQUksR0FBRzZaLGlCQUFpQixDQUFDSSxXQUFsQixJQUFpQ0osaUJBQWlCLENBQUM3WixJQUFuRCxJQUEyRCxTQUF4RTtBQUNBOFosSUFBQUEsaUJBQWlCLENBQUNHLFdBQWxCLEdBQWlDLGNBQWFqYSxJQUFLLEdBQW5EO0FBQ0g7O0FBQ0QsU0FBTzhaLGlCQUFQO0FBQ0g7Ozs7Ozs7Ozs7O0FDekJZOztBQUNiNVAsOENBQTZDO0FBQ3pDbEwsRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FvTCx1QkFBQSxHQUEwQmtGLGVBQTFCO0FBQ0FsRixpQkFBQSxHQUFvQnNGLFNBQXBCO0FBQ0F0RixpQkFBQSxHQUFvQjhQLFNBQXBCO0FBQ0E5UCxtQkFBQSxHQUFzQitQLFdBQXRCO0FBQ0EvUCxtQkFBQSxHQUFzQnFGLFdBQXRCO0FBQ0FyRixtQkFBQSxHQUFzQmdRLFdBQXRCO0FBQ0FoUSxrQkFBQSxHQUFxQmUsVUFBckI7QUFDQWYscUJBQUEsR0FBd0JpUSxhQUF4QjtBQUNBalEsbUJBQUEsR0FBc0J5RCxXQUF0QjtBQUNBekQsZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlrUSx1QkFBdUIsR0FBRzlQLG1CQUFPLENBQUMsNkdBQUQsQ0FBckM7O0FBQ0EsSUFBSStQLFlBQVksR0FBRy9QLG1CQUFPLENBQUMscUZBQUQsQ0FBMUI7O0FBQ0EsSUFBSWdRLG9CQUFvQixHQUFHaFEsbUJBQU8sQ0FBQyxvRkFBRCxDQUFsQzs7QUFDQSxJQUFJaVEsb0JBQW9CLEdBQUdqUSxtQkFBTyxDQUFDLG9FQUFELENBQWxDOztBQUNBLElBQUlrUSxLQUFLLEdBQUduUSxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyx3QkFBRCxDQUFSLENBQWxDOztBQUNBLElBQUltUSxNQUFNLEdBQUduUSxtQkFBTyxDQUFDLHFDQUFELENBQXBCOztBQUNBLElBQUlvUSxVQUFVLEdBQUdwUSxtQkFBTyxDQUFDLDhDQUFELENBQXhCOztBQUNBLElBQUlxUSxpQkFBaUIsR0FBR3JRLG1CQUFPLENBQUMsOERBQUQsQ0FBL0I7O0FBQ0EsSUFBSXNRLFlBQVksR0FBR3RRLG1CQUFPLENBQUMsZ0RBQUQsQ0FBMUI7O0FBQ0EsSUFBSXVRLGdCQUFnQixHQUFHeFEsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsdUNBQUQsQ0FBUixDQUE3Qzs7QUFDQSxJQUFJd1EsYUFBYSxHQUFHeFEsbUJBQU8sQ0FBQyxvREFBRCxDQUEzQjs7QUFDQSxJQUFJeVEsV0FBVyxHQUFHelEsbUJBQU8sQ0FBQyxnREFBRCxDQUF6Qjs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ0ssR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0FBQ2pDUCxJQUFBQSxPQUFPLEVBQUVPO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsSUFBSXNRLGtCQUFKOztBQUNBLElBQUkvSyxLQUFKLEVBQXFDLEVBRXBDOztBQUNELE1BQU1pTCxRQUFRLEdBQUdqTCxNQUFBLElBQXNDLEVBQXZEOztBQUNBLFNBQVNtTCxzQkFBVCxHQUFrQztBQUM5QixTQUFPcFIsTUFBTSxDQUFDb00sTUFBUCxDQUFjLElBQUk1SixLQUFKLENBQVUsaUJBQVYsQ0FBZCxFQUE0QztBQUMvQ3NILElBQUFBLFNBQVMsRUFBRTtBQURvQyxHQUE1QyxDQUFQO0FBR0g7O0FBQ0QsU0FBU3VILGFBQVQsQ0FBdUJ2TCxJQUF2QixFQUE2QndMLE1BQTdCLEVBQXFDO0FBQ2pDLFNBQU9BLE1BQU0sSUFBSXhMLElBQUksQ0FBQ3lMLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBVixHQUFpQ3pMLElBQUksS0FBSyxHQUFULEdBQWUsQ0FBQyxHQUFHc0ssdUJBQUosRUFBNkJ2SywwQkFBN0IsQ0FBd0R5TCxNQUF4RCxDQUFmLEdBQWtGLEdBQUVBLE1BQU8sR0FBRUUsZUFBZSxDQUFDMUwsSUFBRCxDQUFmLEtBQTBCLEdBQTFCLEdBQWdDQSxJQUFJLENBQUM4SCxTQUFMLENBQWUsQ0FBZixDQUFoQyxHQUFvRDlILElBQUssRUFBdkwsR0FBMkxBLElBQWxNO0FBQ0g7O0FBQ0QsU0FBU1YsZUFBVCxDQUF5QlUsSUFBekIsRUFBK0J6RSxNQUEvQixFQUF1Q2dFLE9BQXZDLEVBQWdEQyxhQUFoRCxFQUErRDtBQUMzRCxNQUFJVyxLQUFKLEVBQXFDLEVBQXJDLE1BT087QUFDSCxXQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELFNBQVNULFNBQVQsQ0FBbUJNLElBQW5CLEVBQXlCekUsTUFBekIsRUFBaUNvRSxhQUFqQyxFQUFnRDtBQUM1QyxNQUFJUSxLQUFKLEVBQXFDLEVBS3BDOztBQUNELFNBQU9ILElBQVA7QUFDSDs7QUFDRCxTQUFTa0ssU0FBVCxDQUFtQmxLLElBQW5CLEVBQXlCekUsTUFBekIsRUFBaUM7QUFDN0IsTUFBSTRFLEtBQUosRUFBcUMsRUFLcEM7O0FBQ0QsU0FBT0gsSUFBUDtBQUNIOztBQUNELFNBQVMwTCxlQUFULENBQXlCMUwsSUFBekIsRUFBK0I7QUFDM0IsUUFBTXFNLFVBQVUsR0FBR3JNLElBQUksQ0FBQzFELE9BQUwsQ0FBYSxHQUFiLENBQW5CO0FBQ0EsUUFBTWdRLFNBQVMsR0FBR3RNLElBQUksQ0FBQzFELE9BQUwsQ0FBYSxHQUFiLENBQWxCOztBQUNBLE1BQUkrUCxVQUFVLEdBQUcsQ0FBQyxDQUFkLElBQW1CQyxTQUFTLEdBQUcsQ0FBQyxDQUFwQyxFQUF1QztBQUNuQ3RNLElBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDOEgsU0FBTCxDQUFlLENBQWYsRUFBa0J1RSxVQUFVLEdBQUcsQ0FBQyxDQUFkLEdBQWtCQSxVQUFsQixHQUErQkMsU0FBakQsQ0FBUDtBQUNIOztBQUNELFNBQU90TSxJQUFQO0FBQ0g7O0FBQ0QsU0FBU21LLFdBQVQsQ0FBcUJuSyxJQUFyQixFQUEyQjtBQUN2QkEsRUFBQUEsSUFBSSxHQUFHMEwsZUFBZSxDQUFDMUwsSUFBRCxDQUF0QjtBQUNBLFNBQU9BLElBQUksS0FBS29MLFFBQVQsSUFBcUJwTCxJQUFJLENBQUN5TCxVQUFMLENBQWdCTCxRQUFRLEdBQUcsR0FBM0IsQ0FBNUI7QUFDSDs7QUFDRCxTQUFTM0wsV0FBVCxDQUFxQk8sSUFBckIsRUFBMkI7QUFDdkI7QUFDQSxTQUFPdUwsYUFBYSxDQUFDdkwsSUFBRCxFQUFPb0wsUUFBUCxDQUFwQjtBQUNIOztBQUNELFNBQVNoQixXQUFULENBQXFCcEssSUFBckIsRUFBMkI7QUFDdkJBLEVBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDRSxLQUFMLENBQVdrTCxRQUFRLENBQUMvVyxNQUFwQixDQUFQO0FBQ0EsTUFBSSxDQUFDMkwsSUFBSSxDQUFDeUwsVUFBTCxDQUFnQixHQUFoQixDQUFMLEVBQTJCekwsSUFBSSxHQUFJLElBQUdBLElBQUssRUFBaEI7QUFDM0IsU0FBT0EsSUFBUDtBQUNIOztBQUNELFNBQVM3RSxVQUFULENBQW9Cb1IsR0FBcEIsRUFBeUI7QUFDckI7QUFDQSxNQUFJQSxHQUFHLENBQUNkLFVBQUosQ0FBZSxHQUFmLEtBQXVCYyxHQUFHLENBQUNkLFVBQUosQ0FBZSxHQUFmLENBQXZCLElBQThDYyxHQUFHLENBQUNkLFVBQUosQ0FBZSxHQUFmLENBQWxELEVBQXVFLE9BQU8sSUFBUDs7QUFDdkUsTUFBSTtBQUNBO0FBQ0EsVUFBTWUsY0FBYyxHQUFHLENBQUMsR0FBRzdCLE1BQUosRUFBWThCLGlCQUFaLEVBQXZCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLElBQUloVyxHQUFKLENBQVE2VixHQUFSLEVBQWFDLGNBQWIsQ0FBakI7QUFDQSxXQUFPRSxRQUFRLENBQUNDLE1BQVQsS0FBb0JILGNBQXBCLElBQXNDckMsV0FBVyxDQUFDdUMsUUFBUSxDQUFDVixRQUFWLENBQXhEO0FBQ0gsR0FMRCxDQUtFLE9BQU8vTyxDQUFQLEVBQVU7QUFDUixXQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELFNBQVNvTixhQUFULENBQXVCOUYsS0FBdkIsRUFBOEJxSSxVQUE5QixFQUEwQ0MsS0FBMUMsRUFBaUQ7QUFDN0MsTUFBSUMsaUJBQWlCLEdBQUcsRUFBeEI7QUFDQSxRQUFNQyxZQUFZLEdBQUcsQ0FBQyxHQUFHOUIsV0FBSixFQUFpQitCLGFBQWpCLENBQStCekksS0FBL0IsQ0FBckI7QUFDQSxRQUFNMEksYUFBYSxHQUFHRixZQUFZLENBQUNHLE1BQW5DO0FBQ0EsUUFBTUMsY0FBYyxHQUFHO0FBQ3ZCLEdBQUNQLFVBQVUsS0FBS3JJLEtBQWYsR0FBdUIsQ0FBQyxHQUFHeUcsYUFBSixFQUFtQm9DLGVBQW5CLENBQW1DTCxZQUFuQyxFQUFpREgsVUFBakQsQ0FBdkIsR0FBc0YsRUFBdkYsS0FBOEY7QUFDOUY7QUFDQUMsRUFBQUEsS0FIQTtBQUlBQyxFQUFBQSxpQkFBaUIsR0FBR3ZJLEtBQXBCO0FBQ0EsUUFBTThJLE1BQU0sR0FBR25ULE1BQU0sQ0FBQzZDLElBQVAsQ0FBWWtRLGFBQVosQ0FBZjs7QUFDQSxNQUFJLENBQUNJLE1BQU0sQ0FBQ0MsS0FBUCxDQUFjQyxLQUFELElBQVM7QUFDdkIsUUFBSXZlLEtBQUssR0FBR21lLGNBQWMsQ0FBQ0ksS0FBRCxDQUFkLElBQXlCLEVBQXJDO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQSxNQUFGO0FBQVdDLE1BQUFBO0FBQVgsUUFBeUJSLGFBQWEsQ0FBQ00sS0FBRCxDQUE1QyxDQUZ1QixDQUd2QjtBQUNBOztBQUNBLFFBQUlHLFFBQVEsR0FBSSxJQUFHRixNQUFNLEdBQUcsS0FBSCxHQUFXLEVBQUcsR0FBRUQsS0FBTSxHQUEvQzs7QUFDQSxRQUFJRSxRQUFKLEVBQWM7QUFDVkMsTUFBQUEsUUFBUSxHQUFJLEdBQUUsQ0FBQzFlLEtBQUQsR0FBUyxHQUFULEdBQWUsRUFBRyxJQUFHMGUsUUFBUyxHQUE1QztBQUNIOztBQUNELFFBQUlGLE1BQU0sSUFBSSxDQUFDL1YsS0FBSyxDQUFDNlEsT0FBTixDQUFjdFosS0FBZCxDQUFmLEVBQXFDQSxLQUFLLEdBQUcsQ0FDekNBLEtBRHlDLENBQVI7QUFHckMsV0FBTyxDQUFDeWUsUUFBUSxJQUFJRixLQUFLLElBQUlKLGNBQXRCLE1BQ05MLGlCQUFpQixHQUFHQSxpQkFBaUIsQ0FBQzVRLE9BQWxCLENBQTBCd1IsUUFBMUIsRUFBb0NGLE1BQU0sR0FBR3hlLEtBQUssQ0FBQzhDLEdBQU4sRUFBVTtBQUM1RTtBQUNBO0FBQ0E7QUFDQzZiLElBQUFBLE9BQUQsSUFBV0Msa0JBQWtCLENBQUNELE9BQUQsQ0FKcUMsRUFLaEVFLElBTGdFLENBSzNELEdBTDJELENBQUgsR0FLakRELGtCQUFrQixDQUFDNWUsS0FBRCxDQUxYLEtBS3VCLEdBTnJDLENBQVA7QUFPSCxHQW5CSSxDQUFMLEVBbUJJO0FBQ0E4ZCxJQUFBQSxpQkFBaUIsR0FBRyxFQUFwQixDQUF1QjtBQUF2QixLQURBLENBR0o7QUFDQTtBQUNDOztBQUNELFNBQU87QUFDSE8sSUFBQUEsTUFERztBQUVIUyxJQUFBQSxNQUFNLEVBQUVoQjtBQUZMLEdBQVA7QUFJSDs7QUFDRCxTQUFTaUIsa0JBQVQsQ0FBNEJsQixLQUE1QixFQUFtQ1EsTUFBbkMsRUFBMkM7QUFDdkMsUUFBTVcsYUFBYSxHQUFHLEVBQXRCO0FBRUE5VCxFQUFBQSxNQUFNLENBQUM2QyxJQUFQLENBQVk4UCxLQUFaLEVBQW1CN1AsT0FBbkIsQ0FBNEJ4RSxHQUFELElBQU87QUFDOUIsUUFBSSxDQUFDNlUsTUFBTSxDQUFDWSxRQUFQLENBQWdCelYsR0FBaEIsQ0FBTCxFQUEyQjtBQUN2QndWLE1BQUFBLGFBQWEsQ0FBQ3hWLEdBQUQsQ0FBYixHQUFxQnFVLEtBQUssQ0FBQ3JVLEdBQUQsQ0FBMUI7QUFDSDtBQUNKLEdBSkQ7QUFLQSxTQUFPd1YsYUFBUDtBQUNIOztBQUNELFNBQVNuUSxXQUFULENBQXFCOU4sTUFBckIsRUFBNkJpTCxJQUE3QixFQUFtQ2tULFNBQW5DLEVBQThDO0FBQzFDO0FBQ0EsTUFBSUMsSUFBSjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxPQUFPcFQsSUFBUCxLQUFnQixRQUFoQixHQUEyQkEsSUFBM0IsR0FBa0MsQ0FBQyxHQUFHMlAsTUFBSixFQUFZMEQsb0JBQVosQ0FBaUNyVCxJQUFqQyxDQUFwRCxDQUgwQyxDQUkxQztBQUNBOztBQUNBLFFBQU1zVCxhQUFhLEdBQUdGLFdBQVcsQ0FBQ0csS0FBWixDQUFrQixvQkFBbEIsQ0FBdEI7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR0YsYUFBYSxHQUFHRixXQUFXLENBQUNoQyxNQUFaLENBQW1Ca0MsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQmphLE1BQXBDLENBQUgsR0FBaUQrWixXQUF6RjtBQUNBLFFBQU1LLFFBQVEsR0FBR0Qsa0JBQWtCLENBQUNFLEtBQW5CLENBQXlCLEdBQXpCLENBQWpCOztBQUNBLE1BQUksQ0FBQ0QsUUFBUSxDQUFDLENBQUQsQ0FBUixJQUFlLEVBQWhCLEVBQW9CRixLQUFwQixDQUEwQixXQUExQixDQUFKLEVBQTRDO0FBQ3hDaFIsSUFBQUEsT0FBTyxDQUFDdEssS0FBUixDQUFlLHVDQUFzQ21iLFdBQVksNkVBQWpFO0FBQ0EsVUFBTU8sYUFBYSxHQUFHLENBQUMsR0FBR2hFLE1BQUosRUFBWWlFLHdCQUFaLENBQXFDSixrQkFBckMsQ0FBdEI7QUFDQUosSUFBQUEsV0FBVyxHQUFHLENBQUNFLGFBQWEsR0FBR0EsYUFBYSxDQUFDLENBQUQsQ0FBaEIsR0FBc0IsRUFBcEMsSUFBMENLLGFBQXhEO0FBQ0gsR0FieUMsQ0FjMUM7OztBQUNBLE1BQUksQ0FBQ3hULFVBQVUsQ0FBQ2lULFdBQUQsQ0FBZixFQUE4QjtBQUMxQixXQUFPRixTQUFTLEdBQUcsQ0FDZkUsV0FEZSxDQUFILEdBRVpBLFdBRko7QUFHSDs7QUFDRCxNQUFJO0FBQ0FELElBQUFBLElBQUksR0FBRyxJQUFJelgsR0FBSixDQUFRMFgsV0FBVyxDQUFDM0MsVUFBWixDQUF1QixHQUF2QixJQUE4QjFiLE1BQU0sQ0FBQzhlLE1BQXJDLEdBQThDOWUsTUFBTSxDQUFDaWMsUUFBN0QsRUFBdUUsVUFBdkUsQ0FBUDtBQUNILEdBRkQsQ0FFRSxPQUFPL08sQ0FBUCxFQUFVO0FBQ1I7QUFDQWtSLElBQUFBLElBQUksR0FBRyxJQUFJelgsR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFiLENBQVA7QUFDSDs7QUFDRCxNQUFJO0FBQ0EsVUFBTW9ZLFFBQVEsR0FBRyxJQUFJcFksR0FBSixDQUFRMFgsV0FBUixFQUFxQkQsSUFBckIsQ0FBakI7QUFDQVcsSUFBQUEsUUFBUSxDQUFDOUMsUUFBVCxHQUFvQixDQUFDLEdBQUcxQix1QkFBSixFQUE2QnZLLDBCQUE3QixDQUF3RCtPLFFBQVEsQ0FBQzlDLFFBQWpFLENBQXBCO0FBQ0EsUUFBSStDLGNBQWMsR0FBRyxFQUFyQjs7QUFDQSxRQUFJLENBQUMsR0FBR25FLFVBQUosRUFBZ0JvRSxjQUFoQixDQUErQkYsUUFBUSxDQUFDOUMsUUFBeEMsS0FBcUQ4QyxRQUFRLENBQUNHLFlBQTlELElBQThFZixTQUFsRixFQUE2RjtBQUN6RixZQUFNckIsS0FBSyxHQUFHLENBQUMsR0FBRy9CLFlBQUosRUFBa0JvRSxzQkFBbEIsQ0FBeUNKLFFBQVEsQ0FBQ0csWUFBbEQsQ0FBZDtBQUNBLFlBQU07QUFBRW5CLFFBQUFBLE1BQUY7QUFBV1QsUUFBQUE7QUFBWCxVQUF1QmhELGFBQWEsQ0FBQ3lFLFFBQVEsQ0FBQzlDLFFBQVYsRUFBb0I4QyxRQUFRLENBQUM5QyxRQUE3QixFQUF1Q2EsS0FBdkMsQ0FBMUM7O0FBQ0EsVUFBSWlCLE1BQUosRUFBWTtBQUNSaUIsUUFBQUEsY0FBYyxHQUFHLENBQUMsR0FBR3BFLE1BQUosRUFBWTBELG9CQUFaLENBQWlDO0FBQzlDckMsVUFBQUEsUUFBUSxFQUFFOEIsTUFEb0M7QUFFOUNxQixVQUFBQSxJQUFJLEVBQUVMLFFBQVEsQ0FBQ0ssSUFGK0I7QUFHOUN0QyxVQUFBQSxLQUFLLEVBQUVrQixrQkFBa0IsQ0FBQ2xCLEtBQUQsRUFBUVEsTUFBUjtBQUhxQixTQUFqQyxDQUFqQjtBQUtIO0FBQ0osS0FkRCxDQWVBOzs7QUFDQSxVQUFNMVAsWUFBWSxHQUFHbVIsUUFBUSxDQUFDbkMsTUFBVCxLQUFvQndCLElBQUksQ0FBQ3hCLE1BQXpCLEdBQWtDbUMsUUFBUSxDQUFDOVQsSUFBVCxDQUFja0YsS0FBZCxDQUFvQjRPLFFBQVEsQ0FBQ25DLE1BQVQsQ0FBZ0J0WSxNQUFwQyxDQUFsQyxHQUFnRnlhLFFBQVEsQ0FBQzlULElBQTlHO0FBQ0EsV0FBT2tULFNBQVMsR0FBRyxDQUNmdlEsWUFEZSxFQUVmb1IsY0FBYyxJQUFJcFIsWUFGSCxDQUFILEdBR1pBLFlBSEo7QUFJSCxHQXJCRCxDQXFCRSxPQUFPVixDQUFQLEVBQVU7QUFDUixXQUFPaVIsU0FBUyxHQUFHLENBQ2ZFLFdBRGUsQ0FBSCxHQUVaQSxXQUZKO0FBR0g7QUFDSjs7QUFDRCxTQUFTZ0IsV0FBVCxDQUFxQjdDLEdBQXJCLEVBQTBCO0FBQ3RCLFFBQU1JLE1BQU0sR0FBRyxDQUFDLEdBQUdoQyxNQUFKLEVBQVk4QixpQkFBWixFQUFmO0FBQ0EsU0FBT0YsR0FBRyxDQUFDZCxVQUFKLENBQWVrQixNQUFmLElBQXlCSixHQUFHLENBQUN6RSxTQUFKLENBQWM2RSxNQUFNLENBQUN0WSxNQUFyQixDQUF6QixHQUF3RGtZLEdBQS9EO0FBQ0g7O0FBQ0QsU0FBUzhDLFlBQVQsQ0FBc0J0ZixNQUF0QixFQUE4QndjLEdBQTlCLEVBQW1DdFIsRUFBbkMsRUFBdUM7QUFDbkM7QUFDQTtBQUNBLE1BQUksQ0FBQzBDLFlBQUQsRUFBZUMsVUFBZixJQUE2QkMsV0FBVyxDQUFDOU4sTUFBRCxFQUFTd2MsR0FBVCxFQUFjLElBQWQsQ0FBNUM7QUFDQSxRQUFNSSxNQUFNLEdBQUcsQ0FBQyxHQUFHaEMsTUFBSixFQUFZOEIsaUJBQVosRUFBZjtBQUNBLFFBQU02QyxhQUFhLEdBQUczUixZQUFZLENBQUM4TixVQUFiLENBQXdCa0IsTUFBeEIsQ0FBdEI7QUFDQSxRQUFNNEMsV0FBVyxHQUFHM1IsVUFBVSxJQUFJQSxVQUFVLENBQUM2TixVQUFYLENBQXNCa0IsTUFBdEIsQ0FBbEM7QUFDQWhQLEVBQUFBLFlBQVksR0FBR3lSLFdBQVcsQ0FBQ3pSLFlBQUQsQ0FBMUI7QUFDQUMsRUFBQUEsVUFBVSxHQUFHQSxVQUFVLEdBQUd3UixXQUFXLENBQUN4UixVQUFELENBQWQsR0FBNkJBLFVBQXBEO0FBQ0EsUUFBTTRSLFdBQVcsR0FBR0YsYUFBYSxHQUFHM1IsWUFBSCxHQUFrQjhCLFdBQVcsQ0FBQzlCLFlBQUQsQ0FBOUQ7QUFDQSxRQUFNOFIsVUFBVSxHQUFHeFUsRUFBRSxHQUFHbVUsV0FBVyxDQUFDdlIsV0FBVyxDQUFDOU4sTUFBRCxFQUFTa0wsRUFBVCxDQUFaLENBQWQsR0FBMEMyQyxVQUFVLElBQUlELFlBQTdFO0FBQ0EsU0FBTztBQUNINE8sSUFBQUEsR0FBRyxFQUFFaUQsV0FERjtBQUVIdlUsSUFBQUEsRUFBRSxFQUFFc1UsV0FBVyxHQUFHRSxVQUFILEdBQWdCaFEsV0FBVyxDQUFDZ1EsVUFBRDtBQUZ2QyxHQUFQO0FBSUg7O0FBQ0QsU0FBU0MsbUJBQVQsQ0FBNkIxRCxRQUE3QixFQUF1QzJELEtBQXZDLEVBQThDO0FBQzFDLFFBQU1DLGFBQWEsR0FBRyxDQUFDLEdBQUd0Rix1QkFBSixFQUE2QnhLLHVCQUE3QixDQUFxRCxDQUFDLEdBQUcwSyxvQkFBSixFQUEwQnFGLG1CQUExQixDQUE4QzdELFFBQTlDLENBQXJELENBQXRCOztBQUNBLE1BQUk0RCxhQUFhLEtBQUssTUFBbEIsSUFBNEJBLGFBQWEsS0FBSyxTQUFsRCxFQUE2RDtBQUN6RCxXQUFPNUQsUUFBUDtBQUNILEdBSnlDLENBSzFDOzs7QUFDQSxNQUFJLENBQUMyRCxLQUFLLENBQUMxQixRQUFOLENBQWUyQixhQUFmLENBQUwsRUFBb0M7QUFDaEM7QUFDQUQsSUFBQUEsS0FBSyxDQUFDRyxJQUFOLENBQVlDLElBQUQsSUFBUTtBQUNmLFVBQUksQ0FBQyxHQUFHbkYsVUFBSixFQUFnQm9FLGNBQWhCLENBQStCZSxJQUEvQixLQUF3QyxDQUFDLEdBQUc5RSxXQUFKLEVBQWlCK0IsYUFBakIsQ0FBK0IrQyxJQUEvQixFQUFxQ0MsRUFBckMsQ0FBd0MxUCxJQUF4QyxDQUE2Q3NQLGFBQTdDLENBQTVDLEVBQXlHO0FBQ3JHNUQsUUFBQUEsUUFBUSxHQUFHK0QsSUFBWDtBQUNBLGVBQU8sSUFBUDtBQUNIO0FBQ0osS0FMRDtBQU1IOztBQUNELFNBQU8sQ0FBQyxHQUFHekYsdUJBQUosRUFBNkJ4Syx1QkFBN0IsQ0FBcURrTSxRQUFyRCxDQUFQO0FBQ0g7O0FBQ0QsTUFBTWlFLHVCQUF1QixHQUFHOVAsTUFBQSxJQUFtSCxDQUFuSjtBQVFBLE1BQU1xUSxrQkFBa0IsR0FBR2pOLE1BQU0sQ0FBQyxvQkFBRCxDQUFqQzs7QUFDQSxTQUFTa04sVUFBVCxDQUFvQmxFLEdBQXBCLEVBQXlCbUUsUUFBekIsRUFBbUM7QUFDL0IsU0FBT3JMLEtBQUssQ0FBQ2tILEdBQUQsRUFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQW9FLElBQUFBLFdBQVcsRUFBRTtBQVpDLEdBQU4sQ0FBTCxDQWFKeE8sSUFiSSxDQWFFM0ksR0FBRCxJQUFPO0FBQ1gsUUFBSSxDQUFDQSxHQUFHLENBQUM4TCxFQUFULEVBQWE7QUFDVCxVQUFJb0wsUUFBUSxHQUFHLENBQVgsSUFBZ0JsWCxHQUFHLENBQUNvWCxNQUFKLElBQWMsR0FBbEMsRUFBdUM7QUFDbkMsZUFBT0gsVUFBVSxDQUFDbEUsR0FBRCxFQUFNbUUsUUFBUSxHQUFHLENBQWpCLENBQWpCO0FBQ0g7O0FBQ0QsVUFBSWxYLEdBQUcsQ0FBQ29YLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUNwQixlQUFPcFgsR0FBRyxDQUFDcVgsSUFBSixHQUFXMU8sSUFBWCxDQUFpQnZJLElBQUQsSUFBUTtBQUMzQixjQUFJQSxJQUFJLENBQUNrWCxRQUFULEVBQW1CO0FBQ2YsbUJBQU87QUFDSEEsY0FBQUEsUUFBUSxFQUFFTjtBQURQLGFBQVA7QUFHSDs7QUFDRCxnQkFBTSxJQUFJOVQsS0FBSixDQUFXLDZCQUFYLENBQU47QUFDSCxTQVBNLENBQVA7QUFRSDs7QUFDRCxZQUFNLElBQUlBLEtBQUosQ0FBVyw2QkFBWCxDQUFOO0FBQ0g7O0FBQ0QsV0FBT2xELEdBQUcsQ0FBQ3FYLElBQUosRUFBUDtBQUNILEdBL0JNLENBQVA7QUFnQ0g7O0FBQ0QsU0FBU0UsYUFBVCxDQUF1QkMsUUFBdkIsRUFBaUNDLGNBQWpDLEVBQWlEO0FBQzdDLFNBQU9SLFVBQVUsQ0FBQ08sUUFBRCxFQUFXQyxjQUFjLEdBQUcsQ0FBSCxHQUFPLENBQWhDLENBQVYsQ0FBNkM3VixLQUE3QyxDQUFvREMsR0FBRCxJQUFPO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLFFBQUksQ0FBQzRWLGNBQUwsRUFBcUI7QUFDakIsT0FBQyxHQUFHMUcsWUFBSixFQUFrQnBKLGNBQWxCLENBQWlDOUYsR0FBakM7QUFDSDs7QUFDRCxVQUFNQSxHQUFOO0FBQ0gsR0FSTSxDQUFQO0FBU0g7O0FBQ0QsTUFBTWxDLE1BQU4sQ0FBYTtBQUNUK1gsRUFBQUEsV0FBVyxDQUFDQyxTQUFELEVBQVlDLE1BQVosRUFBb0JDLEdBQXBCLEVBQXlCO0FBQUVDLElBQUFBLFlBQUY7QUFBaUJDLElBQUFBLFVBQWpCO0FBQThCQyxJQUFBQSxHQUE5QjtBQUFvQ0MsSUFBQUEsT0FBcEM7QUFBOENDLElBQUFBLFNBQVMsRUFBRUMsVUFBekQ7QUFBc0V0VyxJQUFBQSxHQUFHLEVBQUV1VyxJQUEzRTtBQUFrRkMsSUFBQUEsWUFBbEY7QUFBaUdDLElBQUFBLFVBQWpHO0FBQThHdlcsSUFBQUEsTUFBOUc7QUFBdUhnRSxJQUFBQSxPQUF2SDtBQUFpSUksSUFBQUEsYUFBakk7QUFBaUpILElBQUFBLGFBQWpKO0FBQWlLdVMsSUFBQUE7QUFBakssR0FBekIsRUFBdU07QUFDOU07QUFDQSxTQUFLQyxHQUFMLEdBQVcsRUFBWCxDQUY4TSxDQUk5TTs7QUFDQSxTQUFLQyxHQUFMLEdBQVcsRUFBWDtBQUVBLFNBQUtDLElBQUwsR0FBWSxDQUFaOztBQUNBLFNBQUtDLFVBQUwsR0FBbUJua0IsQ0FBRCxJQUFLO0FBQ25CLFlBQU1va0IsS0FBSyxHQUFHcGtCLENBQUMsQ0FBQ29rQixLQUFoQjs7QUFDQSxVQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFBRXBHLFVBQUFBLFFBQVEsRUFBRW1GLFNBQVo7QUFBd0J0RSxVQUFBQSxLQUFLLEVBQUV1RTtBQUEvQixZQUEyQyxJQUFqRDtBQUNBLGFBQUtpQixXQUFMLENBQWlCLGNBQWpCLEVBQWlDLENBQUMsR0FBRzFILE1BQUosRUFBWTBELG9CQUFaLENBQWlDO0FBQzlEckMsVUFBQUEsUUFBUSxFQUFFdk0sV0FBVyxDQUFDMFIsU0FBRCxDQUR5QztBQUU5RHRFLFVBQUFBLEtBQUssRUFBRXVFO0FBRnVELFNBQWpDLENBQWpDLEVBR0ksQ0FBQyxHQUFHekcsTUFBSixFQUFZMkgsTUFBWixFQUhKO0FBSUE7QUFDSDs7QUFDRCxVQUFJLENBQUNGLEtBQUssQ0FBQ0csR0FBWCxFQUFnQjtBQUNaO0FBQ0g7O0FBQ0QsVUFBSUMsWUFBSjtBQUNBLFlBQU07QUFBRWpHLFFBQUFBLEdBQUY7QUFBUXRSLFFBQUFBLEVBQUUsRUFBRW9XLEdBQVo7QUFBa0JuVyxRQUFBQSxPQUFsQjtBQUE0QnVYLFFBQUFBO0FBQTVCLFVBQXFDTCxLQUEzQzs7QUFDQSxVQUFJalMsS0FBSixFQUEyQyxFQXVCMUM7O0FBQ0QsV0FBSytSLElBQUwsR0FBWU8sR0FBWjtBQUNBLFlBQU07QUFBRXpHLFFBQUFBLFFBQVEsRUFBRW1GO0FBQVosVUFBMkIsQ0FBQyxHQUFHdEcsaUJBQUosRUFBdUJxSSxnQkFBdkIsQ0FBd0MzRyxHQUF4QyxDQUFqQyxDQWpEbUIsQ0FrRG5CO0FBQ0E7O0FBQ0EsVUFBSSxLQUFLNEcsS0FBTCxJQUFjOUIsR0FBRyxLQUFLLEtBQUt4QyxNQUEzQixJQUFxQ3NDLFNBQVMsS0FBSyxLQUFLbkYsUUFBNUQsRUFBc0U7QUFDbEU7QUFDSCxPQXREa0IsQ0F1RG5CO0FBQ0E7OztBQUNBLFVBQUksS0FBS29ILElBQUwsSUFBYSxDQUFDLEtBQUtBLElBQUwsQ0FBVWhCLEtBQVYsQ0FBbEIsRUFBb0M7QUFDaEM7QUFDSDs7QUFDRCxXQUFLaUIsTUFBTCxDQUFZLGNBQVosRUFBNEI5RyxHQUE1QixFQUFpQzhFLEdBQWpDLEVBQXNDblgsTUFBTSxDQUFDb00sTUFBUCxDQUFjLEVBQWQsRUFDbkNwTCxPQURtQyxFQUMxQjtBQUNSaUIsUUFBQUEsT0FBTyxFQUFFakIsT0FBTyxDQUFDaUIsT0FBUixJQUFtQixLQUFLbVgsUUFEekI7QUFFUi9YLFFBQUFBLE1BQU0sRUFBRUwsT0FBTyxDQUFDSyxNQUFSLElBQWtCLEtBQUtvRTtBQUZ2QixPQUQwQixDQUF0QyxFQUlJNlMsWUFKSjtBQUtILEtBakVELENBUjhNLENBMEU5TTs7O0FBQ0EsU0FBS2pPLEtBQUwsR0FBYSxDQUFDLEdBQUcrRix1QkFBSixFQUE2QnhLLHVCQUE3QixDQUFxRHFSLFNBQXJELENBQWIsQ0EzRThNLENBNEU5TTs7QUFDQSxTQUFLb0MsVUFBTCxHQUFrQixFQUFsQixDQTdFOE0sQ0ErRTlNO0FBQ0E7QUFDQTs7QUFDQSxRQUFJcEMsU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0FBQ3pCLFdBQUtvQyxVQUFMLENBQWdCLEtBQUtoUCxLQUFyQixJQUE4QjtBQUMxQm1OLFFBQUFBLFNBQVMsRUFBRUMsVUFEZTtBQUUxQjZCLFFBQUFBLE9BQU8sRUFBRSxJQUZpQjtBQUcxQmpYLFFBQUFBLEtBQUssRUFBRStVLFlBSG1CO0FBSTFCalcsUUFBQUEsR0FBRyxFQUFFdVcsSUFKcUI7QUFLMUI2QixRQUFBQSxPQUFPLEVBQUVuQyxZQUFZLElBQUlBLFlBQVksQ0FBQ21DLE9BTFo7QUFNMUJDLFFBQUFBLE9BQU8sRUFBRXBDLFlBQVksSUFBSUEsWUFBWSxDQUFDb0M7QUFOWixPQUE5QjtBQVFIOztBQUNELFNBQUtILFVBQUwsQ0FBZ0IsT0FBaEIsSUFBMkI7QUFDdkI3QixNQUFBQSxTQUFTLEVBQUVGLEdBRFk7QUFFdkJ2TSxNQUFBQSxXQUFXLEVBQUU7QUFGVSxLQUEzQixDQTVGOE0sQ0FnRzlNO0FBQ0E7O0FBQ0EsU0FBS3VDLE1BQUwsR0FBY3JPLE1BQU0sQ0FBQ3FPLE1BQXJCO0FBQ0EsU0FBSytKLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS3ZGLFFBQUwsR0FBZ0JtRixTQUFoQjtBQUNBLFNBQUt0RSxLQUFMLEdBQWF1RSxNQUFiLENBckc4TSxDQXNHOU07QUFDQTs7QUFDQSxVQUFNdUMsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHL0ksVUFBSixFQUFnQm9FLGNBQWhCLENBQStCbUMsU0FBL0IsS0FBNkMxUSxJQUFJLENBQUNtVCxhQUFMLENBQW1CQyxVQUExRjs7QUFDQSxTQUFLaEYsTUFBTCxHQUFjOEUsaUJBQWlCLEdBQUd4QyxTQUFILEdBQWVFLEdBQTlDO0FBQ0EsU0FBS2pHLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBSzBJLEdBQUwsR0FBV2pDLFlBQVg7QUFDQSxTQUFLa0MsR0FBTCxHQUFXLElBQVg7QUFDQSxTQUFLQyxRQUFMLEdBQWdCdkMsT0FBaEIsQ0E3RzhNLENBOEc5TTtBQUNBOztBQUNBLFNBQUswQixLQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUtyQixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUttQyxPQUFMLEdBQWUsQ0FBQyxFQUFFeFQsSUFBSSxDQUFDbVQsYUFBTCxDQUFtQk0sSUFBbkIsSUFBMkJ6VCxJQUFJLENBQUNtVCxhQUFMLENBQW1CTyxHQUE5QyxJQUFxRDFULElBQUksQ0FBQ21ULGFBQUwsQ0FBbUJRLE1BQW5CLElBQTZCLENBQUMzVCxJQUFJLENBQUNtVCxhQUFMLENBQW1CUyxHQUF0RyxJQUE2RyxDQUFDVixpQkFBRCxJQUFzQixDQUFDbFQsSUFBSSxDQUFDeEwsUUFBTCxDQUFjcWYsTUFBckMsSUFBK0MsQ0FBQ25VLEtBQS9KLENBQWhCO0FBQ0EsU0FBSzRSLFNBQUwsR0FBaUIsQ0FBQyxDQUFDQSxTQUFuQjtBQUNBLFNBQUsxUyxjQUFMLEdBQXNCLEtBQXRCOztBQUNBLFFBQUljLEtBQUosRUFBcUMsRUFNcEM7O0FBQ0QsZUFBbUMsRUF1QmxDO0FBQ0o7O0FBQ0R3VSxFQUFBQSxNQUFNLEdBQUc7QUFDTHJjLElBQUFBLE1BQU0sQ0FBQ3JELFFBQVAsQ0FBZ0IwZixNQUFoQjtBQUNIO0FBQ0Q7QUFDSjtBQUNBOzs7QUFBTUMsRUFBQUEsSUFBSSxHQUFHO0FBQ0x0YyxJQUFBQSxNQUFNLENBQUM2WCxPQUFQLENBQWV5RSxJQUFmO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFNbGtCLEVBQUFBLElBQUksQ0FBQzZiLEdBQUQsRUFBTXRSLEVBQU4sRUFBVUMsT0FBTyxHQUFHLEVBQXBCLEVBQ0g7QUFDQyxRQUFJaUYsS0FBSixFQUEyQyxFQWExQzs7QUFDRCxLQUFDO0FBQUVvTSxNQUFBQSxHQUFGO0FBQVF0UixNQUFBQTtBQUFSLFFBQWdCb1UsWUFBWSxDQUFDLElBQUQsRUFBTzlDLEdBQVAsRUFBWXRSLEVBQVosQ0FBN0I7QUFDQSxXQUFPLEtBQUtvWSxNQUFMLENBQVksV0FBWixFQUF5QjlHLEdBQXpCLEVBQThCdFIsRUFBOUIsRUFBa0NDLE9BQWxDLENBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQU1nQixFQUFBQSxPQUFPLENBQUNxUSxHQUFELEVBQU10UixFQUFOLEVBQVVDLE9BQU8sR0FBRyxFQUFwQixFQUNOO0FBQ0MsS0FBQztBQUFFcVIsTUFBQUEsR0FBRjtBQUFRdFIsTUFBQUE7QUFBUixRQUFnQm9VLFlBQVksQ0FBQyxJQUFELEVBQU85QyxHQUFQLEVBQVl0UixFQUFaLENBQTdCO0FBQ0EsV0FBTyxLQUFLb1ksTUFBTCxDQUFZLGNBQVosRUFBNEI5RyxHQUE1QixFQUFpQ3RSLEVBQWpDLEVBQXFDQyxPQUFyQyxDQUFQO0FBQ0g7O0FBQ1csUUFBTm1ZLE1BQU0sQ0FBQ3dCLE1BQUQsRUFBU3RJLEdBQVQsRUFBY3RSLEVBQWQsRUFBa0JDLE9BQWxCLEVBQTJCc1gsWUFBM0IsRUFBeUM7QUFDakQsUUFBSSxDQUFDclgsVUFBVSxDQUFDb1IsR0FBRCxDQUFmLEVBQXNCO0FBQ2xCalUsTUFBQUEsTUFBTSxDQUFDckQsUUFBUCxDQUFnQitGLElBQWhCLEdBQXVCdVIsR0FBdkI7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFNdUksaUJBQWlCLEdBQUd2SSxHQUFHLEtBQUt0UixFQUFSLElBQWNDLE9BQU8sQ0FBQzZaLEVBQXRCLElBQTRCN1osT0FBTyxDQUFDdVosa0JBQTlELENBTGlELENBTWpEO0FBQ0E7O0FBQ0EsUUFBSXZaLE9BQU8sQ0FBQzZaLEVBQVosRUFBZ0I7QUFDWixXQUFLZCxPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUNELFVBQU1lLFVBQVUsR0FBRyxLQUFLelosTUFBeEI7O0FBQ0EsUUFBSTRFLEtBQUosRUFBcUMsWUE2Q3BDOztBQUNELFFBQUksQ0FBQ2pGLE9BQU8sQ0FBQzZaLEVBQWIsRUFBaUI7QUFDYixXQUFLNUIsS0FBTCxHQUFhLEtBQWI7QUFDSCxLQTVEZ0QsQ0E2RGpEOzs7QUFDQSxRQUFJeEksTUFBTSxDQUFDMEssRUFBWCxFQUFlO0FBQ1hDLE1BQUFBLFdBQVcsQ0FBQ0MsSUFBWixDQUFpQixhQUFqQjtBQUNIOztBQUNELFVBQU07QUFBRXBaLE1BQUFBLE9BQU8sR0FBRTtBQUFYLFFBQXNCakIsT0FBNUI7QUFDQSxVQUFNc2EsVUFBVSxHQUFHO0FBQ2ZyWixNQUFBQTtBQURlLEtBQW5COztBQUdBLFFBQUksS0FBS3NaLGNBQVQsRUFBeUI7QUFDckIsV0FBS0Msa0JBQUwsQ0FBd0IsS0FBS0QsY0FBN0IsRUFBNkNELFVBQTdDO0FBQ0g7O0FBQ0R2YSxJQUFBQSxFQUFFLEdBQUd3RSxXQUFXLENBQUNDLFNBQVMsQ0FBQ3lLLFdBQVcsQ0FBQ2xQLEVBQUQsQ0FBWCxHQUFrQm1QLFdBQVcsQ0FBQ25QLEVBQUQsQ0FBN0IsR0FBb0NBLEVBQXJDLEVBQXlDQyxPQUFPLENBQUNLLE1BQWpELEVBQXlELEtBQUtvRSxhQUE5RCxDQUFWLENBQWhCO0FBQ0EsVUFBTWdXLFNBQVMsR0FBR3pMLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDbFAsRUFBRCxDQUFYLEdBQWtCbVAsV0FBVyxDQUFDblAsRUFBRCxDQUE3QixHQUFvQ0EsRUFBckMsRUFBeUMsS0FBS00sTUFBOUMsQ0FBM0I7QUFDQSxTQUFLa2EsY0FBTCxHQUFzQnhhLEVBQXRCO0FBQ0EsUUFBSTJhLFlBQVksR0FBR1osVUFBVSxLQUFLLEtBQUt6WixNQUF2QyxDQTNFaUQsQ0E0RWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDTCxPQUFPLENBQUM2WixFQUFULElBQWUsS0FBS2MsZUFBTCxDQUFxQkYsU0FBckIsQ0FBZixJQUFrRCxDQUFDQyxZQUF2RCxFQUFxRTtBQUNqRSxXQUFLL0csTUFBTCxHQUFjOEcsU0FBZDtBQUNBeGMsTUFBQUEsTUFBTSxDQUFDcU8sTUFBUCxDQUFjclosSUFBZCxDQUFtQixpQkFBbkIsRUFBc0M4TSxFQUF0QyxFQUEwQ3VhLFVBQTFDLEVBRmlFLENBR2pFOztBQUNBLFdBQUtuRCxXQUFMLENBQWlCd0MsTUFBakIsRUFBeUJ0SSxHQUF6QixFQUE4QnRSLEVBQTlCLEVBQWtDQyxPQUFsQztBQUNBLFdBQUs0YSxZQUFMLENBQWtCSCxTQUFsQjtBQUNBLFdBQUtJLE1BQUwsQ0FBWSxLQUFLeEMsVUFBTCxDQUFnQixLQUFLaFAsS0FBckIsQ0FBWixFQUF5QyxJQUF6QztBQUNBcEwsTUFBQUEsTUFBTSxDQUFDcU8sTUFBUCxDQUFjclosSUFBZCxDQUFtQixvQkFBbkIsRUFBeUM4TSxFQUF6QyxFQUE2Q3VhLFVBQTdDO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7O0FBQ0QsUUFBSVEsTUFBTSxHQUFHLENBQUMsR0FBR25MLGlCQUFKLEVBQXVCcUksZ0JBQXZCLENBQXdDM0csR0FBeEMsQ0FBYjtBQUNBLFFBQUk7QUFBRVAsTUFBQUEsUUFBUSxFQUFFbUYsU0FBWjtBQUF3QnRFLE1BQUFBLEtBQUssRUFBRXVFO0FBQS9CLFFBQTJDNEUsTUFBL0MsQ0E1RmlELENBNkZqRDtBQUNBO0FBQ0E7O0FBQ0EsUUFBSXJHLEtBQUosRUFBV3NHLFFBQVg7O0FBQ0EsUUFBSTtBQUNBdEcsTUFBQUEsS0FBSyxHQUFHLE1BQU0sS0FBSzRCLFVBQUwsQ0FBZ0IyRSxXQUFoQixFQUFkO0FBQ0EsT0FBQztBQUFFQyxRQUFBQSxVQUFVLEVBQUVGO0FBQWQsVUFBNEIsTUFBTSxDQUFDLEdBQUcxTCxZQUFKLEVBQWtCbEosc0JBQWxCLEVBQW5DO0FBQ0gsS0FIRCxDQUdFLE9BQU91USxJQUFQLEVBQWE7QUFDWDtBQUNBO0FBQ0F0WixNQUFBQSxNQUFNLENBQUNyRCxRQUFQLENBQWdCK0YsSUFBaEIsR0FBdUJDLEVBQXZCO0FBQ0EsYUFBTyxLQUFQO0FBQ0gsS0F6R2dELENBMEdqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxRQUFJLENBQUMsS0FBS21iLFFBQUwsQ0FBY1QsU0FBZCxDQUFELElBQTZCLENBQUNDLFlBQWxDLEVBQWdEO0FBQzVDZixNQUFBQSxNQUFNLEdBQUcsY0FBVDtBQUNILEtBakhnRCxDQWtIakQ7QUFDQTs7O0FBQ0EsUUFBSWpYLFVBQVUsR0FBRzNDLEVBQWpCLENBcEhpRCxDQXFIakQ7QUFDQTtBQUNBOztBQUNBa1csSUFBQUEsU0FBUyxHQUFHQSxTQUFTLEdBQUcsQ0FBQyxHQUFHN0csdUJBQUosRUFBNkJ4Syx1QkFBN0IsQ0FBcURzSyxXQUFXLENBQUMrRyxTQUFELENBQWhFLENBQUgsR0FBa0ZBLFNBQXZHOztBQUNBLFFBQUkyRCxpQkFBaUIsSUFBSTNELFNBQVMsS0FBSyxTQUF2QyxFQUFrRDtBQUM5Q2pXLE1BQUFBLE9BQU8sQ0FBQ3VaLGtCQUFSLEdBQTZCLElBQTdCOztBQUNBLFVBQUl0VSxLQUFKLEVBQTJELEVBQTNELE1BV087QUFDSDZWLFFBQUFBLE1BQU0sQ0FBQ2hLLFFBQVAsR0FBa0IwRCxtQkFBbUIsQ0FBQ3lCLFNBQUQsRUFBWXhCLEtBQVosQ0FBckM7O0FBQ0EsWUFBSXFHLE1BQU0sQ0FBQ2hLLFFBQVAsS0FBb0JtRixTQUF4QixFQUFtQztBQUMvQkEsVUFBQUEsU0FBUyxHQUFHNkUsTUFBTSxDQUFDaEssUUFBbkI7QUFDQWdLLFVBQUFBLE1BQU0sQ0FBQ2hLLFFBQVAsR0FBa0J2TSxXQUFXLENBQUMwUixTQUFELENBQTdCO0FBQ0E1RSxVQUFBQSxHQUFHLEdBQUcsQ0FBQyxHQUFHNUIsTUFBSixFQUFZMEQsb0JBQVosQ0FBaUMySCxNQUFqQyxDQUFOO0FBQ0g7QUFDSjtBQUNKOztBQUNELFVBQU16UixLQUFLLEdBQUcsQ0FBQyxHQUFHK0YsdUJBQUosRUFBNkJ4Syx1QkFBN0IsQ0FBcURxUixTQUFyRCxDQUFkOztBQUNBLFFBQUksQ0FBQ2hXLFVBQVUsQ0FBQ0YsRUFBRCxDQUFmLEVBQXFCO0FBQ2pCLGdCQUEyQztBQUN2QyxjQUFNLElBQUl5QixLQUFKLENBQVcsa0JBQWlCNlAsR0FBSSxjQUFhdFIsRUFBRywyQ0FBdEMsR0FBb0Ysb0ZBQTlGLENBQU47QUFDSDs7QUFDRDNDLE1BQUFBLE1BQU0sQ0FBQ3JELFFBQVAsQ0FBZ0IrRixJQUFoQixHQUF1QkMsRUFBdkI7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFDRDJDLElBQUFBLFVBQVUsR0FBR3NNLFNBQVMsQ0FBQ0UsV0FBVyxDQUFDeE0sVUFBRCxDQUFaLEVBQTBCLEtBQUtyQyxNQUEvQixDQUF0Qjs7QUFDQSxRQUFJLENBQUMsR0FBR3FQLFVBQUosRUFBZ0JvRSxjQUFoQixDQUErQnpLLEtBQS9CLENBQUosRUFBMkM7QUFDdkMsWUFBTTBRLFFBQVEsR0FBRyxDQUFDLEdBQUdwSyxpQkFBSixFQUF1QnFJLGdCQUF2QixDQUF3Q3RWLFVBQXhDLENBQWpCO0FBQ0EsWUFBTWdQLFVBQVUsR0FBR3FJLFFBQVEsQ0FBQ2pKLFFBQTVCO0FBQ0EsWUFBTXVLLFVBQVUsR0FBRyxDQUFDLEdBQUd0TCxXQUFKLEVBQWlCK0IsYUFBakIsQ0FBK0J6SSxLQUEvQixDQUFuQjtBQUNBLFlBQU1pUyxVQUFVLEdBQUcsQ0FBQyxHQUFHeEwsYUFBSixFQUFtQm9DLGVBQW5CLENBQW1DbUosVUFBbkMsRUFBK0MzSixVQUEvQyxDQUFuQjtBQUNBLFlBQU02SixpQkFBaUIsR0FBR2xTLEtBQUssS0FBS3FJLFVBQXBDO0FBQ0EsWUFBTW1DLGNBQWMsR0FBRzBILGlCQUFpQixHQUFHcE0sYUFBYSxDQUFDOUYsS0FBRCxFQUFRcUksVUFBUixFQUFvQndFLE1BQXBCLENBQWhCLEdBQThDLEVBQXRGOztBQUVBLFVBQUksQ0FBQ29GLFVBQUQsSUFBZUMsaUJBQWlCLElBQUksQ0FBQzFILGNBQWMsQ0FBQ2pCLE1BQXhELEVBQWdFO0FBQzVELGNBQU00SSxhQUFhLEdBQUd4YyxNQUFNLENBQUM2QyxJQUFQLENBQVl3WixVQUFVLENBQUNySixNQUF2QixFQUErQjVZLE1BQS9CLENBQXVDaVosS0FBRCxJQUFTLENBQUM2RCxNQUFNLENBQUM3RCxLQUFELENBQXRELENBQXRCOztBQUVBLFlBQUltSixhQUFhLENBQUNyaUIsTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUMxQixvQkFBMkM7QUFDdkNrSixZQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYyxHQUFFaVosaUJBQWlCLEdBQUksb0JBQUosR0FBMkIsaUNBQWlDLDhCQUFoRixHQUFpSCxlQUFjQyxhQUFhLENBQUM3SSxJQUFkLENBQW1CLElBQW5CLENBQXlCLDhCQUFySztBQUNIOztBQUNELGdCQUFNLElBQUluUixLQUFKLENBQVUsQ0FBQytaLGlCQUFpQixHQUFJLDBCQUF5QmxLLEdBQUksb0NBQW1DbUssYUFBYSxDQUFDN0ksSUFBZCxDQUFtQixJQUFuQixDQUF5QixpQ0FBN0YsR0FBaUksOEJBQTZCakIsVUFBVyw4Q0FBNkNySSxLQUFNLEtBQTlPLElBQXVQLCtDQUE4Q2tTLGlCQUFpQixHQUFHLDJCQUFILEdBQWlDLHNCQUF1QixFQUF4WCxDQUFOO0FBQ0g7QUFDSixPQVRELE1BU08sSUFBSUEsaUJBQUosRUFBdUI7QUFDMUJ4YixRQUFBQSxFQUFFLEdBQUcsQ0FBQyxHQUFHMFAsTUFBSixFQUFZMEQsb0JBQVosQ0FBaUNuVSxNQUFNLENBQUNvTSxNQUFQLENBQWMsRUFBZCxFQUNuQzJPLFFBRG1DLEVBQ3pCO0FBQ1RqSixVQUFBQSxRQUFRLEVBQUUrQyxjQUFjLENBQUNqQixNQURoQjtBQUVUakIsVUFBQUEsS0FBSyxFQUFFa0Isa0JBQWtCLENBQUNxRCxNQUFELEVBQVNyQyxjQUFjLENBQUMxQixNQUF4QjtBQUZoQixTQUR5QixDQUFqQyxDQUFMO0FBS0gsT0FOTSxNQU1BO0FBQ0g7QUFDQW5ULFFBQUFBLE1BQU0sQ0FBQ29NLE1BQVAsQ0FBYzhLLE1BQWQsRUFBc0JvRixVQUF0QjtBQUNIO0FBQ0o7O0FBQ0RyZCxJQUFBQSxNQUFNLENBQUNxTyxNQUFQLENBQWNyWixJQUFkLENBQW1CLGtCQUFuQixFQUF1QzhNLEVBQXZDLEVBQTJDdWEsVUFBM0M7O0FBQ0EsUUFBSTtBQUNBLFVBQUlwWCxHQUFKLEVBQVN1WSxJQUFUO0FBQ0EsVUFBSUMsU0FBUyxHQUFHLE1BQU0sS0FBS0MsWUFBTCxDQUFrQnRTLEtBQWxCLEVBQXlCNE0sU0FBekIsRUFBb0NDLE1BQXBDLEVBQTRDblcsRUFBNUMsRUFBZ0QyQyxVQUFoRCxFQUE0RDRYLFVBQTVELENBQXRCO0FBQ0EsVUFBSTtBQUFFdmlCLFFBQUFBLEtBQUY7QUFBVXNKLFFBQUFBLEtBQVY7QUFBa0JrWCxRQUFBQSxPQUFsQjtBQUE0QkMsUUFBQUE7QUFBNUIsVUFBeUNrRCxTQUE3QyxDQUhBLENBSUE7O0FBQ0EsVUFBSSxDQUFDbkQsT0FBTyxJQUFJQyxPQUFaLEtBQXdCblgsS0FBNUIsRUFBbUM7QUFDL0IsWUFBSUEsS0FBSyxDQUFDdWEsU0FBTixJQUFtQnZhLEtBQUssQ0FBQ3VhLFNBQU4sQ0FBZ0JDLFlBQXZDLEVBQXFEO0FBQ2pELGdCQUFNQyxXQUFXLEdBQUd6YSxLQUFLLENBQUN1YSxTQUFOLENBQWdCQyxZQUFwQyxDQURpRCxDQUVqRDtBQUNBO0FBQ0E7O0FBQ0EsY0FBSUMsV0FBVyxDQUFDdkwsVUFBWixDQUF1QixHQUF2QixDQUFKLEVBQWlDO0FBQzdCLGtCQUFNd0wsVUFBVSxHQUFHLENBQUMsR0FBR3BNLGlCQUFKLEVBQXVCcUksZ0JBQXZCLENBQXdDOEQsV0FBeEMsQ0FBbkI7QUFDQUMsWUFBQUEsVUFBVSxDQUFDakwsUUFBWCxHQUFzQjBELG1CQUFtQixDQUFDdUgsVUFBVSxDQUFDakwsUUFBWixFQUFzQjJELEtBQXRCLENBQXpDO0FBQ0Esa0JBQU07QUFBRXBELGNBQUFBLEdBQUcsRUFBRTJLLE1BQVA7QUFBZ0JqYyxjQUFBQSxFQUFFLEVBQUVrYztBQUFwQixnQkFBK0I5SCxZQUFZLENBQUMsSUFBRCxFQUFPMkgsV0FBUCxFQUFvQkEsV0FBcEIsQ0FBakQ7QUFDQSxtQkFBTyxLQUFLM0QsTUFBTCxDQUFZd0IsTUFBWixFQUFvQnFDLE1BQXBCLEVBQTRCQyxLQUE1QixFQUFtQ2pjLE9BQW5DLENBQVA7QUFDSDs7QUFDRDVDLFVBQUFBLE1BQU0sQ0FBQ3JELFFBQVAsQ0FBZ0IrRixJQUFoQixHQUF1QmdjLFdBQXZCO0FBQ0EsaUJBQU8sSUFBSWxWLE9BQUosQ0FBWSxNQUFJLENBQ3RCLENBRE0sQ0FBUDtBQUVIOztBQUNELGFBQUtpUSxTQUFMLEdBQWlCLENBQUMsQ0FBQ3hWLEtBQUssQ0FBQzZhLFdBQXpCLENBaEIrQixDQWlCL0I7O0FBQ0EsWUFBSTdhLEtBQUssQ0FBQ3VVLFFBQU4sS0FBbUJOLGtCQUF2QixFQUEyQztBQUN2QyxjQUFJNkcsYUFBSjs7QUFDQSxjQUFJO0FBQ0Esa0JBQU0sS0FBS0MsY0FBTCxDQUFvQixNQUFwQixDQUFOO0FBQ0FELFlBQUFBLGFBQWEsR0FBRyxNQUFoQjtBQUNILFdBSEQsQ0FHRSxPQUFPcGEsQ0FBUCxFQUFVO0FBQ1JvYSxZQUFBQSxhQUFhLEdBQUcsU0FBaEI7QUFDSDs7QUFDRFQsVUFBQUEsU0FBUyxHQUFHLE1BQU0sS0FBS0MsWUFBTCxDQUFrQlEsYUFBbEIsRUFBaUNBLGFBQWpDLEVBQWdEakcsTUFBaEQsRUFBd0RuVyxFQUF4RCxFQUE0RDJDLFVBQTVELEVBQXdFO0FBQ3RGekIsWUFBQUEsT0FBTyxFQUFFO0FBRDZFLFdBQXhFLENBQWxCO0FBR0g7QUFDSjs7QUFDRGhELE1BQUFBLE1BQU0sQ0FBQ3FPLE1BQVAsQ0FBY3JaLElBQWQsQ0FBbUIscUJBQW5CLEVBQTBDOE0sRUFBMUMsRUFBOEN1YSxVQUE5QztBQUNBLFdBQUtuRCxXQUFMLENBQWlCd0MsTUFBakIsRUFBeUJ0SSxHQUF6QixFQUE4QnRSLEVBQTlCLEVBQWtDQyxPQUFsQzs7QUFDQSxnQkFBMkM7QUFDdkMsY0FBTXFjLE9BQU8sR0FBRyxLQUFLaEUsVUFBTCxDQUFnQixPQUFoQixFQUF5QjdCLFNBQXpDO0FBQ0FwWixRQUFBQSxNQUFNLENBQUNrZixJQUFQLENBQVlDLGFBQVosR0FBNEJGLE9BQU8sQ0FBQ3hOLGVBQVIsS0FBNEJ3TixPQUFPLENBQUN2TixtQkFBcEMsSUFBMkQsQ0FBQzRNLFNBQVMsQ0FBQ2xGLFNBQVYsQ0FBb0IzSCxlQUE1RztBQUNIOztBQUNELFVBQUk3TyxPQUFPLENBQUM2WixFQUFSLElBQWM1RCxTQUFTLEtBQUssU0FBNUIsSUFBeUMsQ0FBQyxDQUFDL1MsR0FBRyxHQUFHcUMsSUFBSSxDQUFDbVQsYUFBTCxDQUFtQnJYLEtBQTFCLE1BQXFDLElBQXJDLElBQTZDNkIsR0FBRyxLQUFLLEtBQUssQ0FBMUQsR0FBOEQsS0FBSyxDQUFuRSxHQUF1RSxDQUFDdVksSUFBSSxHQUFHdlksR0FBRyxDQUFDMFksU0FBWixNQUEyQixJQUEzQixJQUFtQ0gsSUFBSSxLQUFLLEtBQUssQ0FBakQsR0FBcUQsS0FBSyxDQUExRCxHQUE4REEsSUFBSSxDQUFDZSxVQUEzSSxNQUEySixHQUFwTSxLQUE0TW5iLEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUssS0FBSyxDQUFqQyxHQUFxQyxLQUFLLENBQTFDLEdBQThDQSxLQUFLLENBQUN1YSxTQUFoUSxDQUFKLEVBQWdSO0FBQzVRO0FBQ0E7QUFDQXZhLFFBQUFBLEtBQUssQ0FBQ3VhLFNBQU4sQ0FBZ0JZLFVBQWhCLEdBQTZCLEdBQTdCO0FBQ0gsT0E5Q0QsQ0ErQ0E7OztBQUNBLFlBQU1DLG1CQUFtQixHQUFHemMsT0FBTyxDQUFDaUIsT0FBUixJQUFtQixLQUFLb0ksS0FBTCxLQUFlQSxLQUE5RDs7QUFDQSxVQUFJcVQsT0FBSjs7QUFDQSxZQUFNQyxZQUFZLEdBQUcsQ0FBQ0QsT0FBTyxHQUFHMWMsT0FBTyxDQUFDa0IsTUFBbkIsTUFBK0IsSUFBL0IsSUFBdUN3YixPQUFPLEtBQUssS0FBSyxDQUF4RCxHQUE0REEsT0FBNUQsR0FBc0UsQ0FBQ0QsbUJBQTVGO0FBQ0EsWUFBTUcsV0FBVyxHQUFHRCxZQUFZLEdBQUc7QUFDL0JqRixRQUFBQSxDQUFDLEVBQUUsQ0FENEI7QUFFL0JFLFFBQUFBLENBQUMsRUFBRTtBQUY0QixPQUFILEdBRzVCLElBSEo7QUFJQSxZQUFNLEtBQUs1USxHQUFMLENBQVNxQyxLQUFULEVBQWdCNE0sU0FBaEIsRUFBMkJDLE1BQTNCLEVBQW1DdUUsU0FBbkMsRUFBOENpQixTQUE5QyxFQUF5RHBFLFlBQVksS0FBSyxJQUFqQixJQUF5QkEsWUFBWSxLQUFLLEtBQUssQ0FBL0MsR0FBbURBLFlBQW5ELEdBQWtFc0YsV0FBM0gsRUFBd0kxYyxLQUF4SSxDQUErSXBOLENBQUQsSUFBSztBQUNySixZQUFJQSxDQUFDLENBQUNnVyxTQUFOLEVBQWlCL1EsS0FBSyxHQUFHQSxLQUFLLElBQUlqRixDQUFqQixDQUFqQixLQUNLLE1BQU1BLENBQU47QUFDUixPQUhLLENBQU47O0FBSUEsVUFBSWlGLEtBQUosRUFBVztBQUNQa0csUUFBQUEsTUFBTSxDQUFDcU8sTUFBUCxDQUFjclosSUFBZCxDQUFtQixrQkFBbkIsRUFBdUM4RSxLQUF2QyxFQUE4QzBpQixTQUE5QyxFQUF5REgsVUFBekQ7QUFDQSxjQUFNdmlCLEtBQU47QUFDSDs7QUFDRCxVQUFJa04sS0FBSixFQUFxQyxFQUlwQzs7QUFDRGhILE1BQUFBLE1BQU0sQ0FBQ3FPLE1BQVAsQ0FBY3JaLElBQWQsQ0FBbUIscUJBQW5CLEVBQTBDOE0sRUFBMUMsRUFBOEN1YSxVQUE5QztBQUNBLGFBQU8sSUFBUDtBQUNILEtBdEVELENBc0VFLE9BQU81RCxJQUFQLEVBQWE7QUFDWCxVQUFJQSxJQUFJLENBQUM1TixTQUFULEVBQW9CO0FBQ2hCLGVBQU8sS0FBUDtBQUNIOztBQUNELFlBQU00TixJQUFOO0FBQ0g7QUFDSjs7QUFDRFMsRUFBQUEsV0FBVyxDQUFDd0MsTUFBRCxFQUFTdEksR0FBVCxFQUFjdFIsRUFBZCxFQUFrQkMsT0FBTyxHQUFHLEVBQTVCLEVBQ1I7QUFDQyxjQUEyQztBQUN2QyxVQUFJLE9BQU81QyxNQUFNLENBQUM2WCxPQUFkLEtBQTBCLFdBQTlCLEVBQTJDO0FBQ3ZDNVMsUUFBQUEsT0FBTyxDQUFDdEssS0FBUixDQUFlLDJDQUFmO0FBQ0E7QUFDSDs7QUFDRCxVQUFJLE9BQU9xRixNQUFNLENBQUM2WCxPQUFQLENBQWUwRSxNQUFmLENBQVAsS0FBa0MsV0FBdEMsRUFBbUQ7QUFDL0N0WCxRQUFBQSxPQUFPLENBQUN0SyxLQUFSLENBQWUsMkJBQTBCNGhCLE1BQU8sbUJBQWhEO0FBQ0E7QUFDSDtBQUNKOztBQUNELFFBQUlBLE1BQU0sS0FBSyxXQUFYLElBQTBCLENBQUMsR0FBR2xLLE1BQUosRUFBWTJILE1BQVosT0FBeUJyWCxFQUF2RCxFQUEyRDtBQUN2RCxXQUFLcVksUUFBTCxHQUFnQnBZLE9BQU8sQ0FBQ2lCLE9BQXhCO0FBQ0E3RCxNQUFBQSxNQUFNLENBQUM2WCxPQUFQLENBQWUwRSxNQUFmLEVBQXVCO0FBQ25CdEksUUFBQUEsR0FEbUI7QUFFbkJ0UixRQUFBQSxFQUZtQjtBQUduQkMsUUFBQUEsT0FIbUI7QUFJbkJxWCxRQUFBQSxHQUFHLEVBQUUsSUFKYztBQUtuQkUsUUFBQUEsR0FBRyxFQUFFLEtBQUtQLElBQUwsR0FBWTJDLE1BQU0sS0FBSyxXQUFYLEdBQXlCLEtBQUszQyxJQUE5QixHQUFxQyxLQUFLQSxJQUFMLEdBQVk7QUFML0MsT0FBdkIsRUFNRztBQUNIO0FBQ0E7QUFDQSxRQVRBLEVBU0lqWCxFQVRKO0FBVUg7QUFDSjs7QUFDeUIsUUFBcEJnZCxvQkFBb0IsQ0FBQzVjLEdBQUQsRUFBTTJRLFFBQU4sRUFBZ0JhLEtBQWhCLEVBQXVCNVIsRUFBdkIsRUFBMkJ1YSxVQUEzQixFQUF1QzBDLGFBQXZDLEVBQXNEO0FBQzVFLFFBQUk3YyxHQUFHLENBQUMySSxTQUFSLEVBQW1CO0FBQ2Y7QUFDQSxZQUFNM0ksR0FBTjtBQUNIOztBQUNELFFBQUksQ0FBQyxHQUFHa1AsWUFBSixFQUFrQm5KLFlBQWxCLENBQStCL0YsR0FBL0IsS0FBdUM2YyxhQUEzQyxFQUEwRDtBQUN0RC9lLE1BQUFBLE1BQU0sQ0FBQ3FPLE1BQVAsQ0FBY3JaLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDa04sR0FBdkMsRUFBNENKLEVBQTVDLEVBQWdEdWEsVUFBaEQsRUFEc0QsQ0FFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQWxkLE1BQUFBLE1BQU0sQ0FBQ3JELFFBQVAsQ0FBZ0IrRixJQUFoQixHQUF1QkMsRUFBdkIsQ0FQc0QsQ0FRdEQ7QUFDQTs7QUFDQSxZQUFNcVEsc0JBQXNCLEVBQTVCO0FBQ0g7O0FBQ0QsUUFBSTtBQUNBLFVBQUlxRyxVQUFKO0FBQ0EsVUFBSTFNLFdBQUo7QUFDQSxVQUFJMUksS0FBSjs7QUFDQSxVQUFJLE9BQU9vVixVQUFQLEtBQXNCLFdBQXRCLElBQXFDLE9BQU8xTSxXQUFQLEtBQXVCLFdBQWhFLEVBQTZFO0FBQ3pFLFNBQUM7QUFBRThLLFVBQUFBLElBQUksRUFBRTRCLFVBQVI7QUFBcUIxTSxVQUFBQTtBQUFyQixZQUFzQyxNQUFNLEtBQUtxUyxjQUFMLENBQW9CLFNBQXBCLENBQTdDO0FBQ0g7O0FBQ0QsWUFBTVYsU0FBUyxHQUFHO0FBQ2RyYSxRQUFBQSxLQURjO0FBRWRtVixRQUFBQSxTQUFTLEVBQUVDLFVBRkc7QUFHZDFNLFFBQUFBLFdBSGM7QUFJZDVKLFFBQUFBLEdBSmM7QUFLZHBJLFFBQUFBLEtBQUssRUFBRW9JO0FBTE8sT0FBbEI7O0FBT0EsVUFBSSxDQUFDdWIsU0FBUyxDQUFDcmEsS0FBZixFQUFzQjtBQUNsQixZQUFJO0FBQ0FxYSxVQUFBQSxTQUFTLENBQUNyYSxLQUFWLEdBQWtCLE1BQU0sS0FBS3dOLGVBQUwsQ0FBcUI0SCxVQUFyQixFQUFpQztBQUNyRHRXLFlBQUFBLEdBRHFEO0FBRXJEMlEsWUFBQUEsUUFGcUQ7QUFHckRhLFlBQUFBO0FBSHFELFdBQWpDLENBQXhCO0FBS0gsU0FORCxDQU1FLE9BQU9zTCxNQUFQLEVBQWU7QUFDYjVhLFVBQUFBLE9BQU8sQ0FBQ3RLLEtBQVIsQ0FBYyx5Q0FBZCxFQUF5RGtsQixNQUF6RDtBQUNBdkIsVUFBQUEsU0FBUyxDQUFDcmEsS0FBVixHQUFrQixFQUFsQjtBQUVIO0FBQ0o7O0FBQ0QsYUFBT3FhLFNBQVA7QUFDSCxLQTVCRCxDQTRCRSxPQUFPd0IsWUFBUCxFQUFxQjtBQUNuQixhQUFPLEtBQUtILG9CQUFMLENBQTBCRyxZQUExQixFQUF3Q3BNLFFBQXhDLEVBQWtEYSxLQUFsRCxFQUF5RDVSLEVBQXpELEVBQTZEdWEsVUFBN0QsRUFBeUUsSUFBekUsQ0FBUDtBQUNIO0FBQ0o7O0FBQ2lCLFFBQVpxQixZQUFZLENBQUN0UyxLQUFELEVBQVF5SCxRQUFSLEVBQWtCYSxLQUFsQixFQUF5QjVSLEVBQXpCLEVBQTZCMkMsVUFBN0IsRUFBeUM0WCxVQUF6QyxFQUFxRDtBQUNuRSxRQUFJO0FBQ0EsWUFBTTZDLGlCQUFpQixHQUFHLEtBQUs5RSxVQUFMLENBQWdCaFAsS0FBaEIsQ0FBMUI7O0FBQ0EsVUFBSWlSLFVBQVUsQ0FBQ3JaLE9BQVgsSUFBc0JrYyxpQkFBdEIsSUFBMkMsS0FBSzlULEtBQUwsS0FBZUEsS0FBOUQsRUFBcUU7QUFDakUsZUFBTzhULGlCQUFQO0FBQ0g7O0FBQ0QsWUFBTUMsZUFBZSxHQUFHRCxpQkFBaUIsSUFBSSxhQUFhQSxpQkFBbEMsR0FBc0R0bEIsU0FBdEQsR0FBa0VzbEIsaUJBQTFGO0FBQ0EsWUFBTXpCLFNBQVMsR0FBRzBCLGVBQWUsR0FBR0EsZUFBSCxHQUFxQixNQUFNLEtBQUtoQixjQUFMLENBQW9CL1MsS0FBcEIsRUFBMkJwQyxJQUEzQixDQUFpQzNJLEdBQUQsS0FBUTtBQUM1RmtZLFFBQUFBLFNBQVMsRUFBRWxZLEdBQUcsQ0FBQ3VXLElBRDZFO0FBRTVGOUssUUFBQUEsV0FBVyxFQUFFekwsR0FBRyxDQUFDeUwsV0FGMkU7QUFHNUZ3TyxRQUFBQSxPQUFPLEVBQUVqYSxHQUFHLENBQUMrZSxHQUFKLENBQVE5RSxPQUgyRTtBQUk1RkMsUUFBQUEsT0FBTyxFQUFFbGEsR0FBRyxDQUFDK2UsR0FBSixDQUFRN0U7QUFKMkUsT0FBUixDQUFoQyxDQUE1RDtBQU9BLFlBQU07QUFBRWhDLFFBQUFBLFNBQVMsRUFBRUMsVUFBYjtBQUEwQjhCLFFBQUFBLE9BQTFCO0FBQW9DQyxRQUFBQTtBQUFwQyxVQUFpRGtELFNBQXZEOztBQUNBLGdCQUEyQztBQUN2QyxjQUFNO0FBQUU0QixVQUFBQTtBQUFGLFlBQTBCaGUsbUJBQU8sQ0FBQywwQkFBRCxDQUF2Qzs7QUFDQSxZQUFJLENBQUNnZSxrQkFBa0IsQ0FBQzdHLFVBQUQsQ0FBdkIsRUFBcUM7QUFDakMsZ0JBQU0sSUFBSWpWLEtBQUosQ0FBVyx5REFBd0RzUCxRQUFTLEdBQTVFLENBQU47QUFDSDtBQUNKOztBQUNELFVBQUlnRixRQUFKOztBQUNBLFVBQUl5QyxPQUFPLElBQUlDLE9BQWYsRUFBd0I7QUFDcEIxQyxRQUFBQSxRQUFRLEdBQUcsS0FBS08sVUFBTCxDQUFnQmtILFdBQWhCLENBQTRCLENBQUMsR0FBRzlOLE1BQUosRUFBWTBELG9CQUFaLENBQWlDO0FBQ3BFckMsVUFBQUEsUUFEb0U7QUFFcEVhLFVBQUFBO0FBRm9FLFNBQWpDLENBQTVCLEVBR1BqUCxVQUhPLEVBR0s2VixPQUhMLEVBR2MsS0FBS2xZLE1BSG5CLENBQVg7QUFJSDs7QUFDRCxZQUFNZ0IsS0FBSyxHQUFHLE1BQU0sS0FBS21jLFFBQUwsQ0FBYyxNQUFJakYsT0FBTyxHQUFHLEtBQUtrRixjQUFMLENBQW9CM0gsUUFBcEIsQ0FBSCxHQUFtQzBDLE9BQU8sR0FBRyxLQUFLa0YsY0FBTCxDQUFvQjVILFFBQXBCLENBQUgsR0FBbUMsS0FBS2pILGVBQUwsQ0FBcUI0SCxVQUFyQixFQUFpQztBQUN2SjtBQUNJM0YsUUFBQUEsUUFESjtBQUVJYSxRQUFBQSxLQUZKO0FBR0lnQyxRQUFBQSxNQUFNLEVBQUU1VCxFQUhaO0FBSUlNLFFBQUFBLE1BQU0sRUFBRSxLQUFLQSxNQUpqQjtBQUtJZ0UsUUFBQUEsT0FBTyxFQUFFLEtBQUtBLE9BTGxCO0FBTUlJLFFBQUFBLGFBQWEsRUFBRSxLQUFLQTtBQU54QixPQURzSCxDQUF0RyxDQUFwQjtBQVVBaVgsTUFBQUEsU0FBUyxDQUFDcmEsS0FBVixHQUFrQkEsS0FBbEI7QUFDQSxXQUFLZ1gsVUFBTCxDQUFnQmhQLEtBQWhCLElBQXlCcVMsU0FBekI7QUFDQSxhQUFPQSxTQUFQO0FBQ0gsS0F4Q0QsQ0F3Q0UsT0FBT2lDLElBQVAsRUFBYTtBQUNYLGFBQU8sS0FBS1osb0JBQUwsQ0FBMEJZLElBQTFCLEVBQWdDN00sUUFBaEMsRUFBMENhLEtBQTFDLEVBQWlENVIsRUFBakQsRUFBcUR1YSxVQUFyRCxDQUFQO0FBQ0g7QUFDSjs7QUFDRHRULEVBQUFBLEdBQUcsQ0FBQ3FDLEtBQUQsRUFBUXlILFFBQVIsRUFBa0JhLEtBQWxCLEVBQXlCNVIsRUFBekIsRUFBNkJyQixJQUE3QixFQUFtQ2tlLFdBQW5DLEVBQWdEO0FBQy9DLFNBQUtoRyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBS3ZOLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUt5SCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUthLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtnQyxNQUFMLEdBQWM1VCxFQUFkO0FBQ0EsV0FBTyxLQUFLOGEsTUFBTCxDQUFZbmMsSUFBWixFQUFrQmtlLFdBQWxCLENBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBOzs7QUFBTWdCLEVBQUFBLGNBQWMsQ0FBQ25ZLEVBQUQsRUFBSztBQUNqQixTQUFLeVMsSUFBTCxHQUFZelMsRUFBWjtBQUNIOztBQUNEa1YsRUFBQUEsZUFBZSxDQUFDNWEsRUFBRCxFQUFLO0FBQ2hCLFFBQUksQ0FBQyxLQUFLNFQsTUFBVixFQUFrQixPQUFPLEtBQVA7QUFDbEIsVUFBTSxDQUFDa0ssWUFBRCxFQUFlQyxPQUFmLElBQTBCLEtBQUtuSyxNQUFMLENBQVlILEtBQVosQ0FBa0IsR0FBbEIsQ0FBaEM7QUFDQSxVQUFNLENBQUN1SyxZQUFELEVBQWVDLE9BQWYsSUFBMEJqZSxFQUFFLENBQUN5VCxLQUFILENBQVMsR0FBVCxDQUFoQyxDQUhnQixDQUloQjs7QUFDQSxRQUFJd0ssT0FBTyxJQUFJSCxZQUFZLEtBQUtFLFlBQTVCLElBQTRDRCxPQUFPLEtBQUtFLE9BQTVELEVBQXFFO0FBQ2pFLGFBQU8sSUFBUDtBQUNILEtBUGUsQ0FRaEI7OztBQUNBLFFBQUlILFlBQVksS0FBS0UsWUFBckIsRUFBbUM7QUFDL0IsYUFBTyxLQUFQO0FBQ0gsS0FYZSxDQVloQjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBT0QsT0FBTyxLQUFLRSxPQUFuQjtBQUNIOztBQUNEcEQsRUFBQUEsWUFBWSxDQUFDN2EsRUFBRCxFQUFLO0FBQ2IsVUFBTSxHQUFHa1UsSUFBSCxJQUFXbFUsRUFBRSxDQUFDeVQsS0FBSCxDQUFTLEdBQVQsQ0FBakIsQ0FEYSxDQUViO0FBQ0E7O0FBQ0EsUUFBSVMsSUFBSSxLQUFLLEVBQVQsSUFBZUEsSUFBSSxLQUFLLEtBQTVCLEVBQW1DO0FBQy9CN1csTUFBQUEsTUFBTSxDQUFDNmdCLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDQTtBQUNILEtBUFksQ0FRYjs7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHOVcsUUFBUSxDQUFDK1csY0FBVCxDQUF3QmxLLElBQXhCLENBQWI7O0FBQ0EsUUFBSWlLLElBQUosRUFBVTtBQUNOQSxNQUFBQSxJQUFJLENBQUNFLGNBQUw7QUFDQTtBQUNILEtBYlksQ0FjYjtBQUNBOzs7QUFDQSxVQUFNQyxNQUFNLEdBQUdqWCxRQUFRLENBQUNrWCxpQkFBVCxDQUEyQnJLLElBQTNCLEVBQWlDLENBQWpDLENBQWY7O0FBQ0EsUUFBSW9LLE1BQUosRUFBWTtBQUNSQSxNQUFBQSxNQUFNLENBQUNELGNBQVA7QUFDSDtBQUNKOztBQUNEbEQsRUFBQUEsUUFBUSxDQUFDdkgsTUFBRCxFQUFTO0FBQ2IsV0FBTyxLQUFLQSxNQUFMLEtBQWdCQSxNQUF2QjtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBb0IsUUFBUjlULFFBQVEsQ0FBQ3dSLEdBQUQsRUFBTXNDLE1BQU0sR0FBR3RDLEdBQWYsRUFBb0JyUixPQUFPLEdBQUcsRUFBOUIsRUFDYjtBQUNDLFFBQUk4YSxNQUFNLEdBQUcsQ0FBQyxHQUFHbkwsaUJBQUosRUFBdUJxSSxnQkFBdkIsQ0FBd0MzRyxHQUF4QyxDQUFiO0FBQ0EsUUFBSTtBQUFFUCxNQUFBQSxRQUFRLEVBQUV5TjtBQUFaLFFBQTJCekQsTUFBL0I7O0FBQ0EsUUFBSTdWLEtBQUosRUFBcUMsRUFXcEM7O0FBQ0QsVUFBTXdQLEtBQUssR0FBRyxNQUFNLEtBQUs0QixVQUFMLENBQWdCMkUsV0FBaEIsRUFBcEI7QUFDQSxRQUFJdFksVUFBVSxHQUFHaVIsTUFBakI7O0FBQ0EsUUFBSTFPLEtBQUosRUFBK0QsRUFBL0QsTUFhTztBQUNINlYsTUFBQUEsTUFBTSxDQUFDaEssUUFBUCxHQUFrQjBELG1CQUFtQixDQUFDc0csTUFBTSxDQUFDaEssUUFBUixFQUFrQjJELEtBQWxCLENBQXJDOztBQUNBLFVBQUlxRyxNQUFNLENBQUNoSyxRQUFQLEtBQW9CeU4sU0FBeEIsRUFBbUM7QUFDL0JBLFFBQUFBLFNBQVMsR0FBR3pELE1BQU0sQ0FBQ2hLLFFBQW5CO0FBQ0FnSyxRQUFBQSxNQUFNLENBQUNoSyxRQUFQLEdBQWtCeU4sU0FBbEI7QUFDQWxOLFFBQUFBLEdBQUcsR0FBRyxDQUFDLEdBQUc1QixNQUFKLEVBQVkwRCxvQkFBWixDQUFpQzJILE1BQWpDLENBQU47QUFDSDtBQUNKOztBQUNELFVBQU16UixLQUFLLEdBQUcsQ0FBQyxHQUFHK0YsdUJBQUosRUFBNkJ4Syx1QkFBN0IsQ0FBcUQyWixTQUFyRCxDQUFkLENBdENELENBdUNDOztBQUNBLGNBQTJDO0FBQ3ZDO0FBQ0g7O0FBQ0QsVUFBTTNYLE9BQU8sQ0FBQ21FLEdBQVIsQ0FBWSxDQUNkLEtBQUtzTCxVQUFMLENBQWdCbUksTUFBaEIsQ0FBdUJuVixLQUF2QixFQUE4QnBDLElBQTlCLENBQW9Dd1gsS0FBRCxJQUFTO0FBQ3hDLGFBQU9BLEtBQUssR0FBRyxLQUFLaEIsY0FBTCxDQUFvQixLQUFLcEgsVUFBTCxDQUFnQmtILFdBQWhCLENBQTRCbE0sR0FBNUIsRUFBaUMzTyxVQUFqQyxFQUE2QyxJQUE3QyxFQUFtRCxPQUFPMUMsT0FBTyxDQUFDSyxNQUFmLEtBQTBCLFdBQTFCLEdBQXdDTCxPQUFPLENBQUNLLE1BQWhELEdBQXlELEtBQUtBLE1BQWpILENBQXBCLENBQUgsR0FBbUosS0FBL0o7QUFDSCxLQUZELENBRGMsRUFJZCxLQUFLZ1csVUFBTCxDQUFnQnJXLE9BQU8sQ0FBQ2dFLFFBQVIsR0FBbUIsVUFBbkIsR0FBZ0MsVUFBaEQsRUFBNERxRixLQUE1RCxDQUpjLENBQVosQ0FBTjtBQU1IOztBQUNtQixRQUFkK1MsY0FBYyxDQUFDL1MsS0FBRCxFQUFRO0FBQ3hCLFFBQUlQLFNBQVMsR0FBRyxLQUFoQjs7QUFDQSxVQUFNNFYsTUFBTSxHQUFHLEtBQUs3RixHQUFMLEdBQVcsTUFBSTtBQUMxQi9QLE1BQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0gsS0FGRDs7QUFHQSxVQUFNNlYsZUFBZSxHQUFHLE1BQU0sS0FBS3RJLFVBQUwsQ0FBZ0J1SSxRQUFoQixDQUF5QnZWLEtBQXpCLENBQTlCOztBQUNBLFFBQUlQLFNBQUosRUFBZTtBQUNYLFlBQU0vUSxLQUFLLEdBQUcsSUFBSXlKLEtBQUosQ0FBVyx3Q0FBdUM2SCxLQUFNLEdBQXhELENBQWQ7QUFDQXRSLE1BQUFBLEtBQUssQ0FBQytRLFNBQU4sR0FBa0IsSUFBbEI7QUFDQSxZQUFNL1EsS0FBTjtBQUNIOztBQUNELFFBQUkybUIsTUFBTSxLQUFLLEtBQUs3RixHQUFwQixFQUF5QjtBQUNyQixXQUFLQSxHQUFMLEdBQVcsSUFBWDtBQUNIOztBQUNELFdBQU84RixlQUFQO0FBQ0g7O0FBQ0RuQixFQUFBQSxRQUFRLENBQUMvUyxFQUFELEVBQUs7QUFDVCxRQUFJM0IsU0FBUyxHQUFHLEtBQWhCOztBQUNBLFVBQU00VixNQUFNLEdBQUcsTUFBSTtBQUNmNVYsTUFBQUEsU0FBUyxHQUFHLElBQVo7QUFDSCxLQUZEOztBQUdBLFNBQUsrUCxHQUFMLEdBQVc2RixNQUFYO0FBQ0EsV0FBT2pVLEVBQUUsR0FBR3hELElBQUwsQ0FBV3ZJLElBQUQsSUFBUTtBQUNyQixVQUFJZ2dCLE1BQU0sS0FBSyxLQUFLN0YsR0FBcEIsRUFBeUI7QUFDckIsYUFBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDs7QUFDRCxVQUFJL1AsU0FBSixFQUFlO0FBQ1gsY0FBTTZVLElBQUksR0FBRyxJQUFJbmMsS0FBSixDQUFVLGlDQUFWLENBQWI7QUFDQW1jLFFBQUFBLElBQUksQ0FBQzdVLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxjQUFNNlUsSUFBTjtBQUNIOztBQUNELGFBQU9qZixJQUFQO0FBQ0gsS0FWTSxDQUFQO0FBV0g7O0FBQ0QrZSxFQUFBQSxjQUFjLENBQUMzSCxRQUFELEVBQVc7QUFDckIsVUFBTTtBQUFFaFcsTUFBQUEsSUFBSSxFQUFFK2U7QUFBUixRQUFzQixJQUFJcmpCLEdBQUosQ0FBUXNhLFFBQVIsRUFBa0IxWSxNQUFNLENBQUNyRCxRQUFQLENBQWdCK0YsSUFBbEMsQ0FBNUI7O0FBQ0EsUUFBSSxLQUFKLEVBQW9GLEVBRW5GOztBQUNELFdBQU8rVixhQUFhLENBQUNDLFFBQUQsRUFBVyxLQUFLbUMsS0FBaEIsQ0FBYixDQUFvQ2hSLElBQXBDLENBQTBDdkksSUFBRCxJQUFRO0FBQ3BELFdBQUtvWSxHQUFMLENBQVMrSCxRQUFULElBQXFCbmdCLElBQXJCO0FBQ0EsYUFBT0EsSUFBUDtBQUNILEtBSE0sQ0FBUDtBQUlIOztBQUNEZ2YsRUFBQUEsY0FBYyxDQUFDNUgsUUFBRCxFQUFXO0FBQ3JCLFVBQU07QUFBRWhXLE1BQUFBLElBQUksRUFBRWdmO0FBQVIsUUFBeUIsSUFBSXRqQixHQUFKLENBQVFzYSxRQUFSLEVBQWtCMVksTUFBTSxDQUFDckQsUUFBUCxDQUFnQitGLElBQWxDLENBQS9COztBQUNBLFFBQUksS0FBS2lYLEdBQUwsQ0FBUytILFdBQVQsQ0FBSixFQUEyQjtBQUN2QixhQUFPLEtBQUsvSCxHQUFMLENBQVMrSCxXQUFULENBQVA7QUFDSDs7QUFDRCxXQUFPLEtBQUsvSCxHQUFMLENBQVMrSCxXQUFULElBQXdCakosYUFBYSxDQUFDQyxRQUFELEVBQVcsS0FBS21DLEtBQWhCLENBQWIsQ0FBb0NoUixJQUFwQyxDQUEwQ3ZJLElBQUQsSUFBUTtBQUM1RSxhQUFPLEtBQUtxWSxHQUFMLENBQVMrSCxXQUFULENBQVA7QUFDQSxhQUFPcGdCLElBQVA7QUFDSCxLQUg4QixFQUc1QndCLEtBSDRCLENBR3JCeWQsSUFBRCxJQUFRO0FBQ2IsYUFBTyxLQUFLNUcsR0FBTCxDQUFTK0gsV0FBVCxDQUFQO0FBQ0EsWUFBTW5CLElBQU47QUFDSCxLQU44QixDQUEvQjtBQU9IOztBQUNEOU8sRUFBQUEsZUFBZSxDQUFDMkgsU0FBRCxFQUFZdUksR0FBWixFQUFpQjtBQUM1QixVQUFNO0FBQUV2SSxNQUFBQSxTQUFTLEVBQUV3STtBQUFiLFFBQXVCLEtBQUszRyxVQUFMLENBQWdCLE9BQWhCLENBQTdCOztBQUNBLFVBQU00RyxPQUFPLEdBQUcsS0FBS25HLFFBQUwsQ0FBY2tHLElBQWQsQ0FBaEI7O0FBQ0FELElBQUFBLEdBQUcsQ0FBQ0UsT0FBSixHQUFjQSxPQUFkO0FBQ0EsV0FBTyxDQUFDLEdBQUd4UCxNQUFKLEVBQVl5UCxtQkFBWixDQUFnQ0YsSUFBaEMsRUFBc0M7QUFDekNDLE1BQUFBLE9BRHlDO0FBRXpDekksTUFBQUEsU0FGeUM7QUFHekMzaEIsTUFBQUEsTUFBTSxFQUFFLElBSGlDO0FBSXpDa3FCLE1BQUFBO0FBSnlDLEtBQXRDLENBQVA7QUFNSDs7QUFDRHZFLEVBQUFBLGtCQUFrQixDQUFDemEsRUFBRCxFQUFLdWEsVUFBTCxFQUFpQjtBQUMvQixRQUFJLEtBQUt6QixHQUFULEVBQWM7QUFDVjVhLE1BQUFBLE1BQU0sQ0FBQ3FPLE1BQVAsQ0FBY3JaLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDbWQsc0JBQXNCLEVBQTdELEVBQWlFclEsRUFBakUsRUFBcUV1YSxVQUFyRTtBQUNBLFdBQUt6QixHQUFMO0FBQ0EsV0FBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDtBQUNKOztBQUNEZ0MsRUFBQUEsTUFBTSxDQUFDbmMsSUFBRCxFQUFPa2UsV0FBUCxFQUFvQjtBQUN0QixXQUFPLEtBQUtoRSxHQUFMLENBQVNsYSxJQUFULEVBQWUsS0FBSzJaLFVBQUwsQ0FBZ0IsT0FBaEIsRUFBeUI3QixTQUF4QyxFQUFtRG9HLFdBQW5ELENBQVA7QUFDSDs7QUF2dkJROztBQXl2QmIzZSxNQUFNLENBQUNxTyxNQUFQLEdBQWdCLENBQUMsR0FBR2tELEtBQUosRUFBV3JRLE9BQVgsRUFBaEI7QUFDQUQsZUFBQSxHQUFrQmpCLE1BQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdmlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU3NoQixLQUFULENBQWU7QUFBRWh0QixFQUFBQSxJQUFGO0FBQVFpdEIsRUFBQUEsU0FBUjtBQUFtQkMsRUFBQUE7QUFBbkIsQ0FBZixFQUFrRDtBQUM5QyxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVE1bUI7QUFBUixNQUFvQnBILCtDQUFRLENBQUM4dEIsU0FBUyxJQUFJLEVBQWQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csVUFBRDtBQUFBLE9BQWE1bUI7QUFBYixNQUE4QnJILCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDa3VCLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCbnVCLCtDQUFRLENBQUMsSUFBRCxDQUF0QztBQUVBLFFBQU07QUFBQSxPQUFDb3VCLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCcnVCLCtDQUFRLENBQUMsQ0FBRCxDQUE1QztBQUVBLFFBQU1TLE1BQU0sR0FBR3FJLDZDQUFNLEVBQXJCO0FBRUEsUUFBTTtBQUFBLE9BQUNsSSxrQkFBRDtBQUFBLE9BQXFCMHRCO0FBQXJCLE1BQThDdHVCLCtDQUFRLENBQUMsSUFBRCxDQUE1RDtBQUNBLFFBQU07QUFBQSxPQUFDVyxlQUFEO0FBQUEsT0FBa0JEO0FBQWxCLE1BQXlDViwrQ0FBUSxDQUFDLEtBQUQsQ0FBdkQ7QUFFQSxRQUFNO0FBQUEsT0FBQ2dELGVBQUQ7QUFBQSxPQUFrQnVyQjtBQUFsQixNQUF3Q3Z1QiwrQ0FBUSxDQUFDLElBQUQsQ0FBdEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ2lELGlCQUFEO0FBQUEsT0FBb0JDO0FBQXBCLE1BQTZDbEQsK0NBQVEsQ0FBQyxLQUFELENBQTNEO0FBRUFpTCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDWixRQUFJLENBQUN4SyxNQUFNLENBQUNhLE9BQVosRUFBcUI7QUFDakJiLE1BQUFBLE1BQU0sQ0FBQ2EsT0FBUCxHQUFpQm1zQix1REFBRSxDQUFDcmhCLG1EQUFELENBQW5CO0FBQ0g7O0FBRUQsUUFBSTNMLE1BQU0sQ0FBQ2EsT0FBWCxFQUFvQjtBQUNoQmIsTUFBQUEsTUFBTSxDQUFDYSxPQUFQLENBQWVDLElBQWYsQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRUMsUUFBQUEsTUFBTSxFQUFFWCxJQUFJLENBQUNZO0FBQWYsT0FBNUI7QUFFQWhCLE1BQUFBLE1BQU0sQ0FBQ2EsT0FBUCxDQUFlTyxFQUFmLENBQWtCLGdCQUFsQixFQUFvQyxPQUFPO0FBQUUyc0IsUUFBQUE7QUFBRixPQUFQLEtBQXNCO0FBQ3RELGNBQU07QUFBRXByQixVQUFBQSxJQUFGO0FBQVFDLFVBQUFBO0FBQVIsWUFBMEIsTUFBTXVxQiw0REFBVyxDQUFDWSxNQUFNLENBQUM3c0IsTUFBUixDQUFqRDs7QUFFQSxZQUFJZCxJQUFJLENBQUM0dEIsZUFBVCxFQUEwQjtBQUN0QkgsVUFBQUEscUJBQXFCLGlDQUNkRSxNQURjO0FBRWpCMXNCLFlBQUFBLFVBQVUsRUFBRXNCLElBRks7QUFHakJyQixZQUFBQSxnQkFBZ0IsRUFBRXNCO0FBSEQsYUFBckI7QUFLQTNDLFVBQUFBLG1CQUFtQixDQUFDLElBQUQsQ0FBbkI7QUFDSDs7QUFDRG1DLFFBQUFBLDREQUFXLENBQUNPLElBQUQsQ0FBWDtBQUNILE9BWkQ7QUFhSDs7QUFFRHNTLElBQUFBLFFBQVEsQ0FBQ2daLEtBQVQsR0FBa0IsWUFBVzd0QixJQUFJLENBQUN1QyxJQUFMLENBQVUwZSxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLENBQXJCLENBQXdCLEVBQXJEO0FBRUEsV0FBTyxNQUFNO0FBQ1QsVUFBSXJoQixNQUFNLENBQUNhLE9BQVgsRUFBb0I7QUFDaEJiLFFBQUFBLE1BQU0sQ0FBQ2EsT0FBUCxDQUFlQyxJQUFmLENBQW9CLFlBQXBCO0FBQ0FkLFFBQUFBLE1BQU0sQ0FBQ2EsT0FBUCxDQUFlcXRCLEdBQWY7QUFDSDtBQUNKLEtBTEQ7QUFNSCxHQS9CUSxFQStCTixFQS9CTSxDQUFUO0FBaUNBMWpCLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNaZ2pCLElBQUFBLFVBQVUsSUFBSXhqQixVQUFVLENBQUMsTUFBTXBELGFBQWEsQ0FBQyxLQUFELENBQXBCLEVBQTZCLElBQTdCLENBQXhCO0FBQ0gsR0FGUSxFQUVOLENBQUM0bUIsVUFBRCxDQUZNLENBQVQ7O0FBSUEsUUFBTVcsaUJBQWlCLEdBQUcsWUFBWTtBQUNsQyxRQUFJO0FBQ0EsWUFBTWhpQixHQUFHLEdBQUcsTUFBTVQsZ0RBQUEsQ0FBVyxHQUFFQyxtREFBUSxZQUFyQixFQUFrQztBQUNoRFUsUUFBQUEsT0FBTyxFQUFFO0FBQUVDLFVBQUFBLGFBQWEsRUFBRVQscURBQUEsQ0FBVyxPQUFYO0FBQWpCLFNBRHVDO0FBRWhEbVUsUUFBQUEsTUFBTSxFQUFFO0FBQUUyTixVQUFBQTtBQUFGO0FBRndDLE9BQWxDLENBQWxCO0FBS0EsVUFBSXhoQixHQUFHLENBQUNJLElBQUosQ0FBU3ZGLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkIwbUIsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUUzQi9tQixNQUFBQSxRQUFRLENBQUNxQixJQUFJLElBQUksQ0FBQyxHQUFHQSxJQUFKLEVBQVUsR0FBR21FLEdBQUcsQ0FBQ0ksSUFBakIsQ0FBVCxDQUFSO0FBQ0FxaEIsTUFBQUEsYUFBYSxDQUFDNWxCLElBQUksSUFBSUEsSUFBSSxHQUFHLENBQWhCLENBQWI7QUFDSCxLQVZELENBVUUsT0FBT3BDLEtBQVAsRUFBYztBQUNaNEcsTUFBQUEsS0FBSyxDQUFDLHNCQUFELENBQUw7QUFDSDtBQUNKLEdBZEQ7O0FBZ0JBLE1BQUkrZ0IsS0FBSyxDQUFDdm1CLE1BQU4sS0FBaUIsQ0FBakIsSUFBc0JzbUIsWUFBMUIsRUFBd0Msb0JBQU8sK0RBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRXhDOWlCLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUl4SyxNQUFNLENBQUNhLE9BQVgsRUFBb0I7QUFDaEJiLE1BQUFBLE1BQU0sQ0FBQ2EsT0FBUCxDQUFlTyxFQUFmLENBQ0kseUJBREosRUFFSSxDQUFDO0FBQUV1QixRQUFBQSxJQUFGO0FBQVFDLFFBQUFBLGFBQVI7QUFBdUJaLFFBQUFBLFFBQXZCO0FBQWlDYSxRQUFBQTtBQUFqQyxPQUFELEtBQStDO0FBQzNDaXJCLFFBQUFBLGtCQUFrQixDQUFDO0FBQUVuckIsVUFBQUEsSUFBRjtBQUFRQyxVQUFBQSxhQUFSO0FBQXVCWixVQUFBQSxRQUF2QjtBQUFpQ2EsVUFBQUE7QUFBakMsU0FBRCxDQUFsQjtBQUVBSixRQUFBQSxxQkFBcUIsQ0FBQyxJQUFELENBQXJCO0FBQ0gsT0FOTDtBQVFIO0FBQ0osR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQWFBLHNCQUNJO0FBQUEsZUFDS0QsaUJBQWlCLElBQUlELGVBQWUsS0FBSyxJQUF6QyxpQkFDRywrREFBQyx5RUFBRDtBQUNJLHFCQUFlLEVBQUVBLGVBRHJCO0FBRUksdUJBQWlCLEVBQUVDLGlCQUZ2QjtBQUdJLDJCQUFxQixFQUFFQztBQUgzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlIsRUFTSytxQixVQUFVLGlCQUFJLCtEQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUbkIsRUFXS3R0QixlQUFlLElBQUlDLGtCQUFrQixLQUFLLElBQTFDLGlCQUNHLCtEQUFDLCtFQUFEO0FBQ0ksWUFBTSxFQUFFSCxNQURaO0FBRUkseUJBQW1CLEVBQUVDLG1CQUZ6QjtBQUdJLHFCQUFlLEVBQUVDLGVBSHJCO0FBSUksd0JBQWtCLEVBQUVDLGtCQUp4QjtBQUtJLFVBQUksRUFBRUM7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWlIsZUFxQkksK0RBQUMsc0RBQUQ7QUFBQSw4QkFDSSwrREFBQyxnRUFBRDtBQUFZLFlBQUksRUFBRUEsSUFBbEI7QUFBd0IsZ0JBQVEsRUFBRXVHO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUdJLCtEQUFDLHlFQUFEO0FBQ0ksZUFBTyxFQUFFOG1CLE9BRGI7QUFFSSxZQUFJLEVBQUVVLGlCQUZWO0FBR0ksY0FBTSxlQUFFLCtEQUFDLGtGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSFo7QUFJSSxrQkFBVSxlQUFFLCtEQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSmhCO0FBS0ksa0JBQVUsRUFBRVosS0FBSyxDQUFDdm1CLE1BTHRCO0FBQUEsa0JBT0t1bUIsS0FBSyxDQUFDOW9CLEdBQU4sQ0FBVWlDLElBQUksaUJBQ1gsK0RBQUMsOERBQUQ7QUFDSSxnQkFBTSxFQUFFMUcsTUFEWjtBQUdJLGNBQUksRUFBRTBHLElBSFY7QUFJSSxjQUFJLEVBQUV0RyxJQUpWO0FBS0ksa0JBQVEsRUFBRXVHLFFBTGQ7QUFNSSx1QkFBYSxFQUFFQztBQU5uQixXQUVTRixJQUFJLENBQUMxRixHQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREg7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJKO0FBQUEsa0JBREo7QUE4Q0g7O0FBRURvc0IsS0FBSyxDQUFDMVEsZUFBTixHQUF3QixNQUFNa1EsR0FBTixJQUFhO0FBQ2pDLE1BQUk7QUFDQSxVQUFNO0FBQUV3QixNQUFBQTtBQUFGLFFBQVluQixxREFBWSxDQUFDTCxHQUFELENBQTlCO0FBRUEsVUFBTXpnQixHQUFHLEdBQUcsTUFBTVQsZ0RBQUEsQ0FBVyxHQUFFQyxtREFBUSxZQUFyQixFQUFrQztBQUNoRFUsTUFBQUEsT0FBTyxFQUFFO0FBQUVDLFFBQUFBLGFBQWEsRUFBRThoQjtBQUFqQixPQUR1QztBQUVoRHBPLE1BQUFBLE1BQU0sRUFBRTtBQUFFMk4sUUFBQUEsVUFBVSxFQUFFO0FBQWQ7QUFGd0MsS0FBbEMsQ0FBbEI7QUFLQSxXQUFPO0FBQUVOLE1BQUFBLFNBQVMsRUFBRWxoQixHQUFHLENBQUNJO0FBQWpCLEtBQVA7QUFDSCxHQVRELENBU0UsT0FBTzNHLEtBQVAsRUFBYztBQUNaLFdBQU87QUFBRTBuQixNQUFBQSxZQUFZLEVBQUU7QUFBaEIsS0FBUDtBQUNIO0FBQ0osQ0FiRDs7QUFlQSxpRUFBZUYsS0FBZjs7Ozs7Ozs7Ozs7Ozs7O0FDcEtBLE1BQU16aEIsT0FBTyxHQUFFLHVCQUFmO0FBRUEsaUVBQWVBLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7O0FBRUEsTUFBTTdMLGFBQWEsR0FBRzZILFNBQVMsSUFBSTtBQUNqQyxRQUFNNG1CLEtBQUssR0FBR0YsNkNBQU0sQ0FBQy9xQixJQUFJLENBQUNDLEdBQUwsRUFBRCxDQUFwQjtBQUNBLFFBQU1pckIsUUFBUSxHQUFHSCw2Q0FBTSxDQUFDMW1CLFNBQUQsQ0FBdkI7QUFDQSxRQUFNOG1CLFdBQVcsR0FBR0YsS0FBSyxDQUFDRyxJQUFOLENBQVdGLFFBQVgsRUFBcUIsT0FBckIsQ0FBcEI7O0FBRUEsTUFBSUMsV0FBVyxHQUFHLEVBQWxCLEVBQXNCO0FBQ3BCLHdCQUNFO0FBQUEsd0NBQ1EsOERBQUMscURBQUQ7QUFBUSxjQUFNLEVBQUMsU0FBZjtBQUFBLGtCQUEwQjltQjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURSO0FBQUEsb0JBREY7QUFLRCxHQU5ELE1BTU8sSUFBSThtQixXQUFXLEdBQUcsRUFBZCxJQUFvQkEsV0FBVyxHQUFHLEVBQXRDLEVBQTBDO0FBQy9DLHdCQUNFO0FBQUEsNENBQ1ksOERBQUMscURBQUQ7QUFBUSxjQUFNLEVBQUMsU0FBZjtBQUFBLGtCQUEwQjltQjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURaO0FBQUEsb0JBREY7QUFLRCxHQU5NLE1BTUEsSUFBSThtQixXQUFXLEdBQUcsRUFBbEIsRUFBc0I7QUFDM0Isd0JBQU8sOERBQUMscURBQUQ7QUFBUSxZQUFNLEVBQUMsb0JBQWY7QUFBQSxnQkFBcUM5bUI7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEO0FBQ0YsQ0FwQkQ7O0FBc0JBLGlFQUFlN0gsYUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDekJBLE1BQU04TCxXQUFXLEdBQUdoRyxLQUFLLElBQUk7QUFDM0IsTUFBSStvQixRQUFKOztBQUVBLE1BQUkvb0IsS0FBSyxDQUFDZ3BCLFFBQVYsRUFBb0I7QUFDbEI7QUFFQUQsSUFBQUEsUUFBUSxHQUFHL29CLEtBQUssQ0FBQ2dwQixRQUFOLENBQWVyaUIsSUFBMUI7QUFFQTJELElBQUFBLE9BQU8sQ0FBQ3RLLEtBQVIsQ0FBYytvQixRQUFkO0FBQ0QsR0FORCxNQU1PLElBQUkvb0IsS0FBSyxDQUFDaXBCLE9BQVYsRUFBbUI7QUFDeEI7QUFDQUYsSUFBQUEsUUFBUSxHQUFHL29CLEtBQUssQ0FBQ2lwQixPQUFqQjtBQUVBM2UsSUFBQUEsT0FBTyxDQUFDdEssS0FBUixDQUFjK29CLFFBQWQ7QUFDRCxHQUxNLE1BS0E7QUFDTDtBQUNBQSxJQUFBQSxRQUFRLEdBQUcvb0IsS0FBSyxDQUFDK1UsT0FBakI7QUFFQXpLLElBQUFBLE9BQU8sQ0FBQ3RLLEtBQVIsQ0FBYytvQixRQUFkO0FBQ0Q7O0FBQ0QsU0FBT0EsUUFBUDtBQUNELENBckJEOztBQXVCQSxpRUFBZS9pQixXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTXVoQixXQUFXLEdBQUcsTUFBTTJCLFlBQU4sSUFBc0I7QUFDdEMsTUFBSTtBQUNBLFVBQU0zaUIsR0FBRyxHQUFHLE1BQU1ULGdEQUFBLENBQVcsR0FBRUMsNkNBQVEsbUJBQWtCbWpCLFlBQWEsRUFBcEQsRUFBdUQ7QUFDckV6aUIsTUFBQUEsT0FBTyxFQUFFO0FBQUVDLFFBQUFBLGFBQWEsRUFBRVQsb0RBQUEsQ0FBVyxPQUFYO0FBQWpCO0FBRDRELEtBQXZELENBQWxCO0FBSUEsV0FBTztBQUFFbEosTUFBQUEsSUFBSSxFQUFFd0osR0FBRyxDQUFDSSxJQUFKLENBQVM1SixJQUFqQjtBQUF1QkMsTUFBQUEsYUFBYSxFQUFFdUosR0FBRyxDQUFDSSxJQUFKLENBQVMzSjtBQUEvQyxLQUFQO0FBQ0gsR0FORCxDQU1FLE9BQU9nRCxLQUFQLEVBQWM7QUFDWnNLLElBQUFBLE9BQU8sQ0FBQ3RLLEtBQVIsQ0FBY0EsS0FBZDtBQUNIO0FBQ0osQ0FWRDs7QUFZQSxpRUFBZXVuQixXQUFmOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkEsTUFBTS9xQixXQUFXLEdBQUdmLFVBQVUsSUFBSTtBQUNoQyxRQUFNMHRCLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVUsWUFBVixDQUFkO0FBRUFELEVBQUFBLEtBQUssSUFBSUEsS0FBSyxDQUFDRSxJQUFOLEVBQVQ7O0FBRUEsTUFBSTV0QixVQUFKLEVBQWdCO0FBQ2Q0VCxJQUFBQSxRQUFRLENBQUNnWixLQUFULEdBQWtCLG9CQUFtQjVzQixVQUFXLEVBQWhEOztBQUVBLFFBQUk0VCxRQUFRLENBQUNpYSxlQUFULEtBQTZCLFNBQWpDLEVBQTRDO0FBQzFDbGxCLE1BQUFBLFVBQVUsQ0FBQyxNQUFNO0FBQ2ZpTCxRQUFBQSxRQUFRLENBQUNnWixLQUFULEdBQWlCLFVBQWpCO0FBQ0QsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdEO0FBQ0Y7QUFDRixDQWREOztBQWdCQSxpRUFBZTdyQixXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTStzQixLQUFLLEdBQUd6akIsbURBQUEsQ0FBYTtBQUN2QjJqQixFQUFBQSxPQUFPLEVBQUcsR0FBRTFqQiw2Q0FBUSxZQURHO0FBRXZCVSxFQUFBQSxPQUFPLEVBQUU7QUFBRUMsSUFBQUEsYUFBYSxFQUFFVCxvREFBQSxDQUFXLE9BQVg7QUFBakI7QUFGYyxDQUFiLENBQWQ7QUFLTyxNQUFNdEQsYUFBYSxHQUFHLE9BQ3pCbEksSUFEeUIsRUFFekJ1SCxRQUZ5QixFQUd6QkgsTUFIeUIsRUFJekJkLFFBSnlCLEVBS3pCZ0MsVUFMeUIsRUFNekJ0QixRQU55QixLQU94QjtBQUNELE1BQUk7QUFDQSxVQUFNOEUsR0FBRyxHQUFHLE1BQU1nakIsS0FBSyxDQUFDem9CLElBQU4sQ0FBVyxHQUFYLEVBQWdCO0FBQUVyRyxNQUFBQSxJQUFGO0FBQVF1SCxNQUFBQSxRQUFSO0FBQWtCSCxNQUFBQTtBQUFsQixLQUFoQixDQUFsQjtBQUVBZCxJQUFBQSxRQUFRLENBQUNxQixJQUFJLElBQUksQ0FBQ21FLEdBQUcsQ0FBQ0ksSUFBTCxFQUFXLEdBQUd2RSxJQUFkLENBQVQsQ0FBUjtBQUNBVyxJQUFBQSxVQUFVLENBQUM7QUFBRXRJLE1BQUFBLElBQUksRUFBRSxFQUFSO0FBQVl1SCxNQUFBQSxRQUFRLEVBQUU7QUFBdEIsS0FBRCxDQUFWO0FBQ0gsR0FMRCxDQUtFLE9BQU9oQyxLQUFQLEVBQWM7QUFDWixVQUFNK29CLFFBQVEsR0FBRy9pQixxREFBVyxDQUFDaEcsS0FBRCxDQUE1QjtBQUNBeUIsSUFBQUEsUUFBUSxDQUFDc25CLFFBQUQsQ0FBUjtBQUNIO0FBQ0osQ0FqQk07QUFtQkEsTUFBTXZvQixVQUFVLEdBQUcsT0FBT3ZELE1BQVAsRUFBZThELFFBQWYsRUFBeUJDLGFBQXpCLEtBQTJDO0FBQ2pFLE1BQUk7QUFDQSxVQUFNdW9CLEtBQUssQ0FBQ25ULE1BQU4sQ0FBYyxJQUFHblosTUFBTyxFQUF4QixDQUFOO0FBQ0E4RCxJQUFBQSxRQUFRLENBQUNxQixJQUFJLElBQUlBLElBQUksQ0FBQ2YsTUFBTCxDQUFZUCxJQUFJLElBQUlBLElBQUksQ0FBQzFGLEdBQUwsS0FBYTZCLE1BQWpDLENBQVQsQ0FBUjtBQUNBK0QsSUFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYjtBQUNILEdBSkQsQ0FJRSxPQUFPaEIsS0FBUCxFQUFjO0FBQ1o0RyxJQUFBQSxLQUFLLENBQUNaLHFEQUFXLENBQUNoRyxLQUFELENBQVosQ0FBTDtBQUNIO0FBQ0osQ0FSTTtBQVVBLE1BQU1TLFFBQVEsR0FBRyxPQUFPeEQsTUFBUCxFQUFlOUIsTUFBZixFQUF1QitGLFFBQXZCLEVBQWlDSSxJQUFJLEdBQUcsSUFBeEMsS0FBaUQ7QUFDckUsTUFBSTtBQUNBLFFBQUlBLElBQUosRUFBVTtBQUNOLFlBQU1pb0IsS0FBSyxDQUFDem9CLElBQU4sQ0FBWSxTQUFRN0QsTUFBTyxFQUEzQixDQUFOO0FBQ0FpRSxNQUFBQSxRQUFRLENBQUNrQixJQUFJLElBQUksQ0FBQyxHQUFHQSxJQUFKLEVBQVU7QUFBRTVILFFBQUFBLElBQUksRUFBRVc7QUFBUixPQUFWLENBQVQsQ0FBUjtBQUNILEtBSEQsQ0FJQTtBQUpBLFNBS0ssSUFBSSxDQUFDbUcsSUFBTCxFQUFXO0FBQ1osWUFBTWlvQixLQUFLLENBQUNHLEdBQU4sQ0FBVyxXQUFVenNCLE1BQU8sRUFBNUIsQ0FBTjtBQUNBaUUsTUFBQUEsUUFBUSxDQUFDa0IsSUFBSSxJQUFJQSxJQUFJLENBQUNmLE1BQUwsQ0FBWUMsSUFBSSxJQUFJQSxJQUFJLENBQUM5RyxJQUFMLEtBQWNXLE1BQWxDLENBQVQsQ0FBUjtBQUNIO0FBQ0osR0FWRCxDQVVFLE9BQU82RSxLQUFQLEVBQWM7QUFDWjRHLElBQUFBLEtBQUssQ0FBQ1oscURBQVcsQ0FBQ2hHLEtBQUQsQ0FBWixDQUFMO0FBQ0g7QUFDSixDQWRNO0FBZ0JBLE1BQU13QyxXQUFXLEdBQUcsT0FBT3ZGLE1BQVAsRUFBZXpDLElBQWYsRUFBcUJDLElBQXJCLEVBQTJCK0csV0FBM0IsRUFBd0M5RyxPQUF4QyxLQUFvRDtBQUMzRSxNQUFJO0FBQ0EsVUFBTTZMLEdBQUcsR0FBRyxNQUFNZ2pCLEtBQUssQ0FBQ3pvQixJQUFOLENBQVksWUFBVzdELE1BQU8sRUFBOUIsRUFBaUM7QUFBRXhDLE1BQUFBO0FBQUYsS0FBakMsQ0FBbEI7QUFFQSxVQUFNa3ZCLFVBQVUsR0FBRztBQUNmdnVCLE1BQUFBLEdBQUcsRUFBRW1MLEdBQUcsQ0FBQ0ksSUFETTtBQUVmbk0sTUFBQUEsSUFGZTtBQUdmQyxNQUFBQSxJQUhlO0FBSWZrQixNQUFBQSxJQUFJLEVBQUUrQixJQUFJLENBQUNDLEdBQUw7QUFKUyxLQUFuQjtBQU9BNkQsSUFBQUEsV0FBVyxDQUFDWSxJQUFJLElBQUksQ0FBQ3VuQixVQUFELEVBQWEsR0FBR3ZuQixJQUFoQixDQUFULENBQVg7QUFDQTFILElBQUFBLE9BQU8sQ0FBQyxFQUFELENBQVA7QUFDSCxHQVpELENBWUUsT0FBT3NGLEtBQVAsRUFBYztBQUNaNEcsSUFBQUEsS0FBSyxDQUFDWixxREFBVyxDQUFDaEcsS0FBRCxDQUFaLENBQUw7QUFDSDtBQUNKLENBaEJNO0FBa0JBLE1BQU0rRyxhQUFhLEdBQUcsT0FBTzlKLE1BQVAsRUFBZTJzQixTQUFmLEVBQTBCcG9CLFdBQTFCLEtBQTBDO0FBQ25FLE1BQUk7QUFDQSxVQUFNK25CLEtBQUssQ0FBQ25ULE1BQU4sQ0FBYyxJQUFHblosTUFBTyxJQUFHMnNCLFNBQVUsRUFBckMsQ0FBTjtBQUNBcG9CLElBQUFBLFdBQVcsQ0FBQ1ksSUFBSSxJQUFJQSxJQUFJLENBQUNmLE1BQUwsQ0FBWWlCLE9BQU8sSUFBSUEsT0FBTyxDQUFDbEgsR0FBUixLQUFnQnd1QixTQUF2QyxDQUFULENBQVg7QUFDSCxHQUhELENBR0UsT0FBTzVwQixLQUFQLEVBQWM7QUFDWjRHLElBQUFBLEtBQUssQ0FBQ1oscURBQVcsQ0FBQ2hHLEtBQUQsQ0FBWixDQUFMO0FBQ0g7QUFDSixDQVBNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFUDs7QUFFQSxNQUFNMEMsU0FBUyxHQUFHLE1BQU1TLEtBQU4sSUFBZTtBQUM3QixNQUFJO0FBQ0EsVUFBTTBtQixJQUFJLEdBQUcsSUFBSUMsUUFBSixFQUFiO0FBQ0FELElBQUFBLElBQUksQ0FBQ0UsTUFBTCxDQUFZLE1BQVosRUFBb0I1bUIsS0FBcEI7QUFDQTBtQixJQUFBQSxJQUFJLENBQUNFLE1BQUwsQ0FBWSxlQUFaLEVBQTZCLGtCQUE3QjtBQUNBRixJQUFBQSxJQUFJLENBQUNFLE1BQUwsQ0FBWSxZQUFaLEVBQTBCLFdBQTFCO0FBRUEsVUFBTXhqQixHQUFHLEdBQUcsTUFBTVQsaURBQUEsQ0FBV29ILHdEQUFYLEVBQXVDMmMsSUFBdkMsQ0FBbEI7QUFDQSxXQUFPdGpCLEdBQUcsQ0FBQ0ksSUFBSixDQUFTMlMsR0FBaEI7QUFDSCxHQVJELENBUUUsT0FBT3RaLEtBQVAsRUFBYztBQUNaO0FBQ0g7QUFDSixDQVpEOztBQWNBLGlFQUFlMEMsU0FBZjs7Ozs7Ozs7OztBQ2hCQSx5R0FBOEM7Ozs7Ozs7Ozs7OztBQ0E5Qzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VyZW4tc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Ib21lL01lc3NhZ2VOb3RpZmljYXRpb25Nb2RhbC5qcyIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0hvbWUvTm90aWZpY2F0aW9uUG9ydGFsLmpzIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTGF5b3V0L05vRGF0YS5qcyIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9QbGFjZUhvbGRlckdyb3VwLmpzIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTGF5b3V0L1RvYXN0ci5qcyIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvQ2FyZFBvc3QuanMiLCJ3ZWJwYWNrOi8vc3VyZW4tc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L0NvbW1lbnRJbnB1dEZpZWxkLmpzIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9DcmVhdGVQb3N0LmpzIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9Dcm9wSW1hZ2VNb2RhbC5qcyIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvSW1hZ2VNb2RhbC5qcyIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvTGlrZXNMaXN0LmpzIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9Ob0ltYWdlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vc3VyZW4tc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L1Bvc3RDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vc3VyZW4tc29jaWFsLW1lZGlhLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vc3VyZW4tc29jaWFsLW1lZGlhLy4vdXRpbHMvY2FsY3VsYXRlVGltZS5qcyIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvLi91dGlscy9jYXRjaEVycm9ycy5qcyIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvLi91dGlscy9nZXRVc2VySW5mby5qcyIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvLi91dGlscy9uZXdNc2dTb3VuZC5qcyIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvLi91dGlscy9wb3N0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnkuanMiLCJ3ZWJwYWNrOi8vc3VyZW4tc29jaWFsLW1lZGlhLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vc3VyZW4tc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8vc3VyZW4tc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8vc3VyZW4tc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vc3VyZW4tc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vc3VyZW4tc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWNyb3BwZXJcIiIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vc3VyZW4tc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnRcIiIsIndlYnBhY2s6Ly9zdXJlbi1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vc3VyZW4tc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIiwid2VicGFjazovL3N1cmVuLXNvY2lhbC1tZWRpYS9pZ25vcmVkfEM6XFxVc2Vyc1xcTGVub3ZvXFxEZXNrdG9wXFxtZXJuLXNvY2lhbC1tZWRpYS1hcHBcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIE1vZGFsLCBTZWdtZW50LCBMaXN0LCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VOb3RpZmljYXRpb25Nb2RhbCh7XHJcbiAgc29ja2V0LFxyXG4gIHNob3dOZXdNZXNzYWdlTW9kYWwsXHJcbiAgbmV3TWVzc2FnZU1vZGFsLFxyXG4gIG5ld01lc3NhZ2VSZWNlaXZlZCxcclxuICB1c2VyXHJcbn0pIHtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uTW9kYWxDbG9zZSA9ICgpID0+IHNob3dOZXdNZXNzYWdlTW9kYWwoZmFsc2UpO1xyXG5cclxuICBjb25zdCBmb3JtU3VibWl0ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHNvY2tldC5jdXJyZW50KSB7XHJcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJzZW5kTXNnRnJvbU5vdGlmaWNhdGlvblwiLCB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VyLl9pZCxcclxuICAgICAgICBtc2dTZW5kVG9Vc2VySWQ6IG5ld01lc3NhZ2VSZWNlaXZlZC5zZW5kZXIsXHJcbiAgICAgICAgbXNnOiB0ZXh0XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJtc2dTZW50RnJvbU5vdGlmaWNhdGlvblwiLCAoKSA9PiB7XHJcbiAgICAgICAgc2hvd05ld01lc3NhZ2VNb2RhbChmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgIG9wZW49e25ld01lc3NhZ2VNb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VJY29uXHJcbiAgICAgICAgY2xvc2VPbkRpbW1lckNsaWNrXHJcbiAgICAgID5cclxuICAgICAgICA8TW9kYWwuSGVhZGVyIGNvbnRlbnQ9e2BOZXcgTWVzc2FnZSBmcm9tICR7bmV3TWVzc2FnZVJlY2VpdmVkLnNlbmRlck5hbWV9YH0gLz5cclxuXHJcbiAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1YmJsZVdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmVDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlubGluZUljb25cIiBzcmM9e25ld01lc3NhZ2VSZWNlaXZlZC5zZW5kZXJQcm9maWxlUGljfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJCdWJibGUgb3RoZXJcIj57bmV3TWVzc2FnZVJlY2VpdmVkLm1zZ308L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm90aGVyXCI+e2NhbGN1bGF0ZVRpbWUobmV3TWVzc2FnZVJlY2VpdmVkLmRhdGUpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwic3RpY2t5XCIsIGJvdHRvbTogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgPFNlZ21lbnQgc2Vjb25kYXJ5IGNvbG9yPVwidGVhbFwiIGF0dGFjaGVkPVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0gcmVwbHkgb25TdWJtaXQ9e2Zvcm1TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZW5kIE5ldyBNZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb249e3tcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJ0ZWxlZ3JhbSBwbGFuZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0ZXh0ID09PSBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9tZXNzYWdlcz9tZXNzYWdlPSR7bmV3TWVzc2FnZVJlY2VpdmVkLnNlbmRlcn1gfT5cclxuICAgICAgICAgICAgICA8YT5WaWV3IEFsbCBNZXNzYWdlczwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8SW5zdHJ1Y3Rpb25zIHVzZXJuYW1lPXt1c2VyLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgSW5zdHJ1Y3Rpb25zID0gKHsgdXNlcm5hbWUgfSkgPT4gKFxyXG4gIDxMaXN0PlxyXG4gICAgPExpc3QuSXRlbT5cclxuICAgICAgPEljb24gbmFtZT1cImhlbHBcIiAvPlxyXG4gICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgIDxMaXN0LkhlYWRlcj5cclxuICAgICAgICAgIElmIHlvdSBkbyBub3QgbGlrZSB0aGlzIHBvcHVwIHRvIGFwcGVhciB3aGVuIHlvdSByZWNlaXZlIGEgbmV3IG1lc3NhZ2U6XHJcbiAgICAgICAgPC9MaXN0LkhlYWRlcj5cclxuICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICA8L0xpc3QuSXRlbT5cclxuXHJcbiAgICA8TGlzdC5JdGVtPlxyXG4gICAgICA8SWNvbiBuYW1lPVwiaGFuZCBwb2ludCByaWdodFwiIC8+XHJcbiAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgWW91IGNhbiBkaXNhYmxlIGl0IGJ5IGdvaW5nIHRvXHJcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke3VzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgPGE+IEFjY291bnQgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICBQYWdlIGFuZCBjbGlja2luZyBvbiBTZXR0aW5ncyBUYWIuXHJcbiAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgPC9MaXN0Lkl0ZW0+XHJcblxyXG4gICAgPExpc3QuSXRlbT5cclxuICAgICAgPEljb24gbmFtZT1cImhhbmQgcG9pbnQgcmlnaHRcIiAvPlxyXG4gICAgICBJbnNpZGUgdGhlIG1lbnUsdGhlcmUgaXMgYW4gc2V0dGluZyBuYW1lZDogU2hvdyBOZXcgTWVzc2FnZSBQb3B1cD9cclxuICAgIDwvTGlzdC5JdGVtPlxyXG5cclxuICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgIDxJY29uIG5hbWU9XCJoYW5kIHBvaW50IHJpZ2h0XCIgLz5cclxuICAgICAgSnVzdCB0b2dnbGUgdGhlIHNldHRpbmcgdG8gZGlzYWJsZS9lbmFibGUgdGhlIE1lc3NhZ2UgUG9wdXAgdG8gYXBwZWFyLlxyXG4gICAgPC9MaXN0Lkl0ZW0+XHJcbiAgPC9MaXN0PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZU5vdGlmaWNhdGlvbk1vZGFsO1xyXG4iLCJpbXBvcnQgeyBTZWdtZW50LCBUcmFuc2l0aW9uYWJsZVBvcnRhbCwgSWNvbiwgRmVlZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgbmV3TXNnU291bmQgZnJvbSBcIi4uLy4uL3V0aWxzL25ld01zZ1NvdW5kXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xyXG5cclxuZnVuY3Rpb24gTm90aWZpY2F0aW9uUG9ydGFsKHtcclxuICAgIG5ld05vdGlmaWNhdGlvbixcclxuICAgIG5vdGlmaWNhdGlvblBvcHVwLFxyXG4gICAgc2hvd05vdGlmaWNhdGlvblBvcHVwXHJcbn0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHsgbmFtZSwgcHJvZmlsZVBpY1VybCwgdXNlcm5hbWUsIHBvc3RJZCB9ID0gbmV3Tm90aWZpY2F0aW9uO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRyYW5zaXRpb25hYmxlUG9ydGFsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgYW5pbWF0aW9uOiBcImZhZGUgbGVmdFwiLCBkdXJhdGlvbjogXCI1MDBcIiB9fVxyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBub3RpZmljYXRpb25Qb3B1cCAmJiBzaG93Tm90aWZpY2F0aW9uUG9wdXAoZmFsc2UpfVxyXG4gICAgICAgICAgICBvbk9wZW49e25ld01zZ1NvdW5kfVxyXG4gICAgICAgICAgICBvcGVuPXtub3RpZmljYXRpb25Qb3B1cH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZWdtZW50IHN0eWxlPXt7IHJpZ2h0OiBcIjUlXCIsIHBvc2l0aW9uOiBcImZpeGVkXCIsIHRvcDogXCIxMCVcIiwgekluZGV4OiAxMDAwIH19PlxyXG4gICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dOb3RpZmljYXRpb25Qb3B1cChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGZWVkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGZWVkLkV2ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlZC5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9maWxlUGljVXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZlZWQuTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlZC5TdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVkLlVzZXIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC8ke3VzZXJuYW1lfWApfT57bmFtZX0gPC9GZWVkLlVzZXI+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VkIHlvdXIgPGEgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wb3N0LyR7cG9zdElkfWApfT4gcG9zdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlZC5EYXRlPntjYWxjdWxhdGVUaW1lKERhdGUubm93KCkpfTwvRmVlZC5EYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GZWVkLlN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmVlZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmVlZC5FdmVudD5cclxuICAgICAgICAgICAgICAgIDwvRmVlZD5cclxuICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgIDwvVHJhbnNpdGlvbmFibGVQb3J0YWw+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25Qb3J0YWw7XHJcbiIsImltcG9ydCB7IE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUHJvZmlsZVBvc3RzID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8TWVzc2FnZSBpbmZvIGljb249XCJtZWhcIiBoZWFkZXI9XCJTb3JyeVwiIGNvbnRlbnQ9XCJVc2VyIGhhcyBub3QgcG9zdGVkIGFueXRoaW5nIHlldCFcIiAvPlxyXG4gICAgPEJ1dHRvbiBpY29uPVwibG9uZyBhcnJvdyBhbHRlcm5hdGUgbGVmdFwiIGNvbnRlbnQ9XCJHbyBCYWNrXCIgYXM9XCJhXCIgaHJlZj1cIi9cIiAvPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vRm9sbG93RGF0YSA9ICh7IGZvbGxvd2Vyc0NvbXBvbmVudCwgZm9sbG93aW5nQ29tcG9uZW50IH0pID0+IChcclxuICA8PlxyXG4gICAge2ZvbGxvd2Vyc0NvbXBvbmVudCAmJiAoXHJcbiAgICAgIDxNZXNzYWdlIGljb249XCJ1c2VyIG91dGxpbmVcIiBpbmZvIGNvbnRlbnQ9e2BVc2VyIGRvZXMgbm90IGhhdmUgZm9sbG93ZXJzYH0gLz5cclxuICAgICl9XHJcblxyXG4gICAge2ZvbGxvd2luZ0NvbXBvbmVudCAmJiAoXHJcbiAgICAgIDxNZXNzYWdlIGljb249XCJ1c2VyIG91dGxpbmVcIiBpbmZvIGNvbnRlbnQ9e2BVc2VyIGRvZXMgbm90IGZvbGxvdyBhbnkgdXNlcnNgfSAvPlxyXG4gICAgKX1cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb01lc3NhZ2VzID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlXHJcbiAgICBpbmZvXHJcbiAgICBpY29uPVwidGVsZWdyYW0gcGxhbmVcIlxyXG4gICAgaGVhZGVyPVwiU29ycnlcIlxyXG4gICAgY29udGVudD1cIllvdSBoYXZlIG5vdCBtZXNzYWdlZCBhbnlvbmUgeWV0LlNlYXJjaCBhYm92ZSB0byBtZXNzYWdlIHNvbWVvbmUhXCJcclxuICAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUG9zdHMgPSAoKSA9PiAoXHJcbiAgPE1lc3NhZ2VcclxuICAgIGluZm9cclxuICAgIGljb249XCJtZWhcIlxyXG4gICAgaGVhZGVyPVwiSGV5IVwiXHJcbiAgICBjb250ZW50PVwiTm8gUG9zdHMuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBmb2xsb3dlZCBzb21lb25lLlwiXHJcbiAgLz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Byb2ZpbGUgPSAoKSA9PiAoXHJcbiAgPE1lc3NhZ2UgaW5mbyBpY29uPVwibWVoXCIgaGVhZGVyPVwiSGV5IVwiIGNvbnRlbnQ9XCJObyBQcm9maWxlIEZvdW5kLlwiIC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Ob3RpZmljYXRpb25zID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlIGNvbnRlbnQ9XCJObyBOb3RpZmljYXRpb25zXCIgaWNvbj1cInNtaWxlXCIgaW5mbyAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUG9zdEZvdW5kID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIkhleSFcIiBjb250ZW50PVwiTm8gUG9zdCBGb3VuZC5cIiAvPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgUGxhY2Vob2xkZXIsXHJcbiAgRGl2aWRlcixcclxuICBMaXN0LFxyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIENvbnRhaW5lcixcclxuICBJY29uXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHJhbmdlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYWNlSG9sZGVyUG9zdHMgPSAoKSA9PlxyXG4gIHJhbmdlKDEsIDMpLm1hcChpdGVtID0+IChcclxuICAgIDxkaXYga2V5PXtpdGVtfT5cclxuICAgICAgPFBsYWNlaG9sZGVyIGZsdWlkPlxyXG4gICAgICAgIDxQbGFjZWhvbGRlci5IZWFkZXIgaW1hZ2U+XHJcbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxyXG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cclxuICAgICAgICA8L1BsYWNlaG9sZGVyLkhlYWRlcj5cclxuICAgICAgICA8UGxhY2Vob2xkZXIuUGFyYWdyYXBoPlxyXG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cclxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XHJcbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxyXG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cclxuICAgICAgICA8L1BsYWNlaG9sZGVyLlBhcmFncmFwaD5cclxuICAgICAgPC9QbGFjZWhvbGRlcj5cclxuICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICA8L2Rpdj5cclxuICApKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQbGFjZUhvbGRlclN1Z2dlc3Rpb25zID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8TGlzdC5JdGVtPlxyXG4gICAgICA8Q2FyZCBjb2xvcj1cInJlZFwiPlxyXG4gICAgICAgIDxQbGFjZWhvbGRlcj5cclxuICAgICAgICAgIDxQbGFjZWhvbGRlci5JbWFnZSBzcXVhcmUgLz5cclxuICAgICAgICA8L1BsYWNlaG9sZGVyPlxyXG4gICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8UGxhY2Vob2xkZXI+XHJcbiAgICAgICAgICAgIDxQbGFjZWhvbGRlci5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPVwibWVkaXVtXCIgLz5cclxuICAgICAgICAgICAgPC9QbGFjZWhvbGRlci5IZWFkZXI+XHJcbiAgICAgICAgICA8L1BsYWNlaG9sZGVyPlxyXG4gICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG5cclxuICAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBjaXJjdWxhclxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBpY29uPVwiYWRkIHVzZXJcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiRm9sbG93XCJcclxuICAgICAgICAgICAgY29sb3I9XCJ0d2l0dGVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvTGlzdC5JdGVtPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYWNlSG9sZGVyTm90aWZpY2F0aW9ucyA9ICgpID0+XHJcbiAgcmFuZ2UoMSwgMTApLm1hcChpdGVtID0+IChcclxuICAgIDw+XHJcbiAgICAgIDxQbGFjZWhvbGRlciBrZXk9e2l0ZW19PlxyXG4gICAgICAgIDxQbGFjZWhvbGRlci5IZWFkZXIgaW1hZ2U+XHJcbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxyXG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cclxuICAgICAgICA8L1BsYWNlaG9sZGVyLkhlYWRlcj5cclxuICAgICAgPC9QbGFjZWhvbGRlcj5cclxuICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICA8Lz5cclxuICApKTtcclxuXHJcbmV4cG9ydCBjb25zdCBFbmRNZXNzYWdlID0gKCkgPT4gKFxyXG4gIDxDb250YWluZXIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICA8SWNvbiBuYW1lPVwicmVmcmVzaFwiIHNpemU9XCJsYXJnZVwiIC8+XHJcbiAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICA8L0NvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMaWtlc1BsYWNlSG9sZGVyID0gKCkgPT5cclxuICByYW5nZSgxLCA2KS5tYXAoaXRlbSA9PiAoXHJcbiAgICA8UGxhY2Vob2xkZXIga2V5PXtpdGVtfSBzdHlsZT17eyBtaW5XaWR0aDogXCIyMDBweFwiIH19PlxyXG4gICAgICA8UGxhY2Vob2xkZXIuSGVhZGVyIGltYWdlPlxyXG4gICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD1cImZ1bGxcIiAvPlxyXG4gICAgICA8L1BsYWNlaG9sZGVyLkhlYWRlcj5cclxuICAgIDwvUGxhY2Vob2xkZXI+XHJcbiAgKSk7XHJcbiIsImltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3REZWxldGVUb2FzdHIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2FzdENvbnRhaW5lclxyXG4gICAgICBwb3NpdGlvbj1cImJvdHRvbS1jZW50ZXJcIlxyXG4gICAgICBhdXRvQ2xvc2U9ezMwMDB9XHJcbiAgICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XHJcbiAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cclxuICAgICAgY2xvc2VPbkNsaWNrXHJcbiAgICAgIHJ0bD17ZmFsc2V9XHJcbiAgICAgIHBhdXNlT25Gb2N1c0xvc3NcclxuICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgIHBhdXNlT25Ib3Zlcj17ZmFsc2V9PlxyXG4gICAgICB7dG9hc3QuaW5mbyhcIkRlbGV0ZWQgU3VjY2Vzc2Z1bGx5XCIsIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWRcclxuICAgICAgfSl9XHJcbiAgICA8L1RvYXN0Q29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3JUb2FzdHIgPSAoeyBlcnJvciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2FzdENvbnRhaW5lclxyXG4gICAgICBwb3NpdGlvbj1cImJvdHRvbS1jZW50ZXJcIlxyXG4gICAgICBhdXRvQ2xvc2U9ezMwMDB9XHJcbiAgICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XHJcbiAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cclxuICAgICAgY2xvc2VPbkNsaWNrXHJcbiAgICAgIHJ0bD17ZmFsc2V9XHJcbiAgICAgIHBhdXNlT25Gb2N1c0xvc3NcclxuICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgIHBhdXNlT25Ib3Zlcj17ZmFsc2V9PlxyXG4gICAgICB7dG9hc3QuZXJyb3IoZXJyb3IsIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWRcclxuICAgICAgfSl9XHJcbiAgICA8L1RvYXN0Q29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTXNnU2VudFRvYXN0ciA9ICgpID0+IChcclxuICA8VG9hc3RDb250YWluZXJcclxuICAgIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiXHJcbiAgICBhdXRvQ2xvc2U9ezMwMDB9XHJcbiAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxyXG4gICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxyXG4gICAgY2xvc2VPbkNsaWNrXHJcbiAgICBydGw9e2ZhbHNlfVxyXG4gICAgcGF1c2VPbkZvY3VzTG9zc1xyXG4gICAgZHJhZ2dhYmxlXHJcbiAgICBwYXVzZU9uSG92ZXI9e2ZhbHNlfT5cclxuICAgIHt0b2FzdC5zdWNjZXNzKFwiU2VudCBzdWNjZXNzZnVsbHlcIiwge1xyXG4gICAgICBwb3NpdGlvbjogXCJib3R0b20tY2VudGVyXCIsXHJcbiAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWRcclxuICAgIH0pfVxyXG4gIDwvVG9hc3RDb250YWluZXI+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ2FyZCxcclxuICAgIEljb24sXHJcbiAgICBJbWFnZSxcclxuICAgIERpdmlkZXIsXHJcbiAgICBTZWdtZW50LFxyXG4gICAgQnV0dG9uLFxyXG4gICAgUG9wdXAsXHJcbiAgICBIZWFkZXIsXHJcbiAgICBNb2RhbFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgUG9zdENvbW1lbnRzIGZyb20gXCIuL1Bvc3RDb21tZW50c1wiO1xyXG5pbXBvcnQgQ29tbWVudElucHV0RmllbGQgZnJvbSBcIi4vQ29tbWVudElucHV0RmllbGRcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBkZWxldGVQb3N0LCBsaWtlUG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xyXG5pbXBvcnQgTGlrZXNMaXN0IGZyb20gXCIuL0xpa2VzTGlzdFwiO1xyXG5pbXBvcnQgSW1hZ2VNb2RhbCBmcm9tIFwiLi9JbWFnZU1vZGFsXCI7XHJcbmltcG9ydCBOb0ltYWdlTW9kYWwgZnJvbSBcIi4vTm9JbWFnZU1vZGFsXCI7XHJcblxyXG5mdW5jdGlvbiBDYXJkUG9zdCh7IHBvc3QsIHVzZXIsIHNldFBvc3RzLCBzZXRTaG93VG9hc3RyLCBzb2NrZXQgfSkge1xyXG4gICAgY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZShwb3N0Lmxpa2VzKTtcclxuXHJcbiAgICBjb25zdCBpc0xpa2VkID1cclxuICAgICAgICBsaWtlcy5sZW5ndGggPiAwICYmIGxpa2VzLmZpbHRlcihsaWtlID0+IGxpa2UudXNlciA9PT0gdXNlci5faWQpLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShwb3N0LmNvbW1lbnRzKTtcclxuXHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgYWRkUHJvcHNUb01vZGFsID0gKCkgPT4gKHtcclxuICAgICAgICBwb3N0LFxyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgc2V0TGlrZXMsXHJcbiAgICAgICAgbGlrZXMsXHJcbiAgICAgICAgaXNMaWtlZCxcclxuICAgICAgICBjb21tZW50cyxcclxuICAgICAgICBzZXRDb21tZW50c1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd01vZGFsICYmIChcclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBjbG9zZUljb25cclxuICAgICAgICAgICAgICAgICAgICBjbG9zZU9uRGltbWVyQ2xpY2tcclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5waWNVcmwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VNb2RhbCB7Li4uYWRkUHJvcHNUb01vZGFsKCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9JbWFnZU1vZGFsIHsuLi5hZGRQcm9wc1RvTW9kYWwoKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPFNlZ21lbnQgYmFzaWM+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjb2xvcj1cInRlYWxcIiBmbHVpZD5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdC5waWNVcmwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5waWNVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGVkPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQb3N0SW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBmbG9hdGVkPVwibGVmdFwiIHNyYz17cG9zdC51c2VyLnByb2ZpbGVQaWNVcmx9IGF2YXRhciBjaXJjdWxhciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh1c2VyLnJvbGUgPT09IFwicm9vdFwiIHx8IHBvc3QudXNlci5faWQgPT09IHVzZXIuX2lkKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3B1cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbj1cImNsaWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AgcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9kZWxldGVJY29uLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtaW5pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz1cImg0XCIgY29udGVudD1cIkFyZSB5b3Ugc3VyZT9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGlzIGFjdGlvbiBpcyBpcnJldmVyc2libGUhPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJEZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlUG9zdChwb3N0Ll9pZCwgc2V0UG9zdHMsIHNldFNob3dUb2FzdHIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Bvc3QudXNlci5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLk1ldGE+e2NhbGN1bGF0ZVRpbWUocG9zdC5jcmVhdGVkQXQpfTwvQ2FyZC5NZXRhPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QubG9jYXRpb24gJiYgPENhcmQuTWV0YSBjb250ZW50PXtwb3N0LmxvY2F0aW9ufSAvPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjAuMXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yZFNwYWNpbmc6IFwiMC4zNXB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2lzTGlrZWQgPyBcImhlYXJ0XCIgOiBcImhlYXJ0IG91dGxpbmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcImxpa2VQb3N0XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZDogcG9zdC5faWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXIuX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZTogaXNMaWtlZCA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwicG9zdExpa2VkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0xpa2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGlrZXMocHJldiA9PiBwcmV2LmZpbHRlcihsaWtlID0+IGxpa2UudXNlciAhPT0gdXNlci5faWQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMaWtlcyhwcmV2ID0+IFsuLi5wcmV2LCB7IHVzZXI6IHVzZXIuX2lkIH1dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZVBvc3QocG9zdC5faWQsIHVzZXIuX2lkLCBzZXRMaWtlcywgaXNMaWtlZCA/IGZhbHNlIDogdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaWtlc0xpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbkxpa2VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2xpa2VzLmxlbmd0aH0gJHtsaWtlcy5sZW5ndGggPT09IDEgPyBcImxpa2VcIiA6IFwibGlrZXNcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImNvbW1lbnQgb3V0bGluZVwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiN3B4XCIgfX0gY29sb3I9XCJibHVlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50cy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbW1lbnQsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPCAzICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0Q29tbWVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29tbWVudHMubGVuZ3RoID4gMyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIlZpZXcgTW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNpY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmN1bGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRJbnB1dEZpZWxkIHVzZXI9e3VzZXJ9IHBvc3RJZD17cG9zdC5faWR9IHNldENvbW1lbnRzPXtzZXRDb21tZW50c30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQb3N0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBwb3N0Q29tbWVudCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gQ29tbWVudElucHV0RmllbGQoeyBwb3N0SWQsIHVzZXIsIHNldENvbW1lbnRzIH0pIHtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVxyXG4gICAgICByZXBseVxyXG4gICAgICBvblN1Ym1pdD17YXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgYXdhaXQgcG9zdENvbW1lbnQocG9zdElkLCB1c2VyLCB0ZXh0LCBzZXRDb21tZW50cywgc2V0VGV4dCk7XHJcblxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9fT5cclxuICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBDb21tZW50XCJcclxuICAgICAgICBhY3Rpb249e3tcclxuICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcclxuICAgICAgICAgIGljb246IFwiZWRpdFwiLFxyXG4gICAgICAgICAgbG9hZGluZzogbG9hZGluZyxcclxuICAgICAgICAgIGRpc2FibGVkOiB0ZXh0ID09PSBcIlwiIHx8IGxvYWRpbmdcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRJbnB1dEZpZWxkO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIEltYWdlLCBEaXZpZGVyLCBNZXNzYWdlLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB1cGxvYWRQaWMgZnJvbSBcIi4uLy4uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeVwiO1xyXG5pbXBvcnQgeyBzdWJtaXROZXdQb3N0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XHJcbmltcG9ydCBDcm9wSW1hZ2VNb2RhbCBmcm9tIFwiLi9Dcm9wSW1hZ2VNb2RhbFwiO1xyXG5cclxuZnVuY3Rpb24gQ3JlYXRlUG9zdCh7IHVzZXIsIHNldFBvc3RzIH0pIHtcclxuICAgIGNvbnN0IFtuZXdQb3N0LCBzZXROZXdQb3N0XSA9IHVzZVN0YXRlKHsgdGV4dDogXCJcIiwgbG9jYXRpb246IFwiXCIgfSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaGlnaGxpZ2h0ZWQsIHNldEhpZ2hsaWdodGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbbWVkaWEsIHNldE1lZGlhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW21lZGlhUHJldmlldywgc2V0TWVkaWFQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgZmlsZXMgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJtZWRpYVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWxlcyAmJiBmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRNZWRpYShmaWxlc1swXSk7XHJcbiAgICAgICAgICAgICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXROZXdQb3N0KHByZXYgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFkZFN0eWxlcyA9ICgpID0+ICh7XHJcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxNTBweFwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjE1MHB4XCIsXHJcbiAgICAgICAgYm9yZGVyOiBcImRvdHRlZFwiLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6IG1lZGlhID09PSBudWxsICYmIFwiNjBweFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IGhpZ2hsaWdodGVkID8gXCJncmVlblwiIDogXCJibGFja1wiXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBsZXQgcGljVXJsO1xyXG5cclxuICAgICAgICBpZiAobWVkaWEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcGljVXJsID0gYXdhaXQgdXBsb2FkUGljKG1lZGlhKTtcclxuICAgICAgICAgICAgaWYgKCFwaWNVcmwpIHtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldEVycm9yKFwiRXJyb3IgVXBsb2FkaW5nIEltYWdlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBzdWJtaXROZXdQb3N0KFxyXG4gICAgICAgICAgICBuZXdQb3N0LnRleHQsXHJcbiAgICAgICAgICAgIG5ld1Bvc3QubG9jYXRpb24sXHJcbiAgICAgICAgICAgIHBpY1VybCxcclxuICAgICAgICAgICAgc2V0UG9zdHMsXHJcbiAgICAgICAgICAgIHNldE5ld1Bvc3QsXHJcbiAgICAgICAgICAgIHNldEVycm9yXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0TWVkaWEobnVsbCk7XHJcbiAgICAgICAgbWVkaWFQcmV2aWV3ICYmIFVSTC5yZXZva2VPYmplY3RVUkwobWVkaWFQcmV2aWV3KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldE1lZGlhUHJldmlldyhudWxsKSwgMzAwMCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dNb2RhbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Q3JvcEltYWdlTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBtZWRpYVByZXZpZXc9e21lZGlhUHJldmlld31cclxuICAgICAgICAgICAgICAgICAgICBzZXRNZWRpYT17c2V0TWVkaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPEZvcm0gZXJyb3I9e2Vycm9yICE9PSBudWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldEVycm9yKG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIk9vcHMhXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dXNlci5wcm9maWxlUGljVXJsfSBjaXJjdWxhciBhdmF0YXIgaW5saW5lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0cyBIYXBwZW5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9jYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFkZCBMb2NhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJtYXAgbWFya2VyIGFsdGVybmF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2FudCB0byBhZGQgTG9jYXRpb24/XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2FkZFN0eWxlcygpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25EcmFnTGVhdmU9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRHJvcD17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcm9wcGVkRmlsZSA9IEFycmF5LmZyb20oZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVkaWEoZHJvcHBlZEZpbGVbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChkcm9wcGVkRmlsZVswXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge21lZGlhID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwicGx1c1wiIHNpemU9XCJiaWdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjE1MHB4XCIsIHdpZHRoOiBcIjE1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUG9zdEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge21lZGlhUHJldmlldyAhPT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiQ3JvcCBJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmN1bGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjaXJjdWxhclxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtuZXdQb3N0LnRleHQgPT09IFwiXCIgfHwgbG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXs8c3Ryb25nPlBvc3Q8L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxREExRjJcIiwgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJzZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUG9zdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9kYWwsIEhlYWRlciwgQnV0dG9uLCBHcmlkLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBDcm9wcGVyIGZyb20gXCJyZWFjdC1jcm9wcGVyXCI7XHJcblxyXG5mdW5jdGlvbiBDcm9wSW1hZ2VNb2RhbCh7IG1lZGlhUHJldmlldywgc2V0TWVkaWFQcmV2aWV3LCBzZXRNZWRpYSwgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwgfSkge1xyXG4gICAgY29uc3QgW2Nyb3BwZXIsIHNldENyb3BwZXJdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBnZXRDcm9wRGF0YSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY3JvcHBlcikge1xyXG4gICAgICAgICAgICBzZXRNZWRpYShjcm9wcGVyLmdldENyb3BwZWRDYW52YXMoKS50b0RhdGFVUkwoKSk7XHJcbiAgICAgICAgICAgIGNyb3BwZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKHsga2V5IH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGNyb3BwZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwibVwiKSBjcm9wcGVyLnNldERyYWdNb2RlKFwibW92ZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwiY1wiKSBjcm9wcGVyLnNldERyYWdNb2RlKFwiY3JvcFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwiclwiKSBjcm9wcGVyLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sIFtjcm9wcGVyXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIGNsb3NlT25EaW1tZXJDbGljaz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIG9wZW49e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjb250ZW50PVwiQ3JvcCBpbWFnZSBiZWZvcmUgdXBsb2FkXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb2x1bW5zPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbC5Db250ZW50IGltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyb3BwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNDAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JvcEJveFJlc2l6YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb21hYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1aWRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdNb2RlPVwibW92ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbEFzcGVjdFJhdGlvPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXc9XCIuaW1nLXByZXZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdNb2RlPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkNyb3BCb3hIZWlnaHQ9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkNvbnRhaW5lcldpZHRoPXsxMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ3JvcEFyZWE9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tPcmllbnRhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Jbml0aWFsaXplZD17Y3JvcHBlciA9PiBzZXRDcm9wcGVyKGNyb3BwZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkNvbnRlbnQgaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiZmlsZSBpbWFnZSBvdXRsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlci5Db250ZW50IGNvbnRlbnQ9XCJGaW5hbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1wcmV2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVzZXQgKFIpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInJlZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaXJjdWxhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjcm9wcGVyICYmIGNyb3BwZXIucmVzZXQoKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTW92ZSBDYW52YXMgKE0pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIm1vdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaXJjdWxhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjcm9wcGVyICYmIGNyb3BwZXIuc2V0RHJhZ01vZGUoXCJtb3ZlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOZXcgQ3JvcGJveCAoQylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiY3JvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpcmN1bGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNyb3BwZXIgJiYgY3JvcHBlci5zZXREcmFnTW9kZShcImNyb3BcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWdhdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiQ2FuY2VsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiQ3JvcCBJbWFnZVwiIGljb249XCJjaGVja21hcmtcIiBwb3NpdGl2ZSBvbkNsaWNrPXtnZXRDcm9wRGF0YX0gLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyb3BJbWFnZU1vZGFsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1vZGFsLCBHcmlkLCBJbWFnZSwgQ2FyZCwgSWNvbiwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgUG9zdENvbW1lbnRzIGZyb20gXCIuL1Bvc3RDb21tZW50c1wiO1xyXG5pbXBvcnQgQ29tbWVudElucHV0RmllbGQgZnJvbSBcIi4vQ29tbWVudElucHV0RmllbGRcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBsaWtlUG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xyXG5pbXBvcnQgTGlrZXNMaXN0IGZyb20gXCIuL0xpa2VzTGlzdFwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VNb2RhbCh7XHJcbiAgcG9zdCwgIFxyXG4gIHVzZXIsXHJcbiAgc2V0TGlrZXMsXHJcbiAgbGlrZXMsXHJcbiAgaXNMaWtlZCxcclxuICBjb21tZW50cyxcclxuICBzZXRDb21tZW50c1xyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHcmlkIGNvbHVtbnM9ezJ9IHN0YWNrYWJsZSByZWxheGVkPlxyXG4gICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDxNb2RhbC5Db250ZW50IGltYWdlPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugd3JhcHBlZCBzaXplPVwibGFyZ2VcIiBzcmM9e3Bvc3QucGljVXJsfSAvPlxyXG4gICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDxDYXJkIGZsdWlkPlxyXG4gICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBmbG9hdGVkPVwibGVmdFwiIGF2YXRhciBzcmM9e3Bvc3QudXNlci5wcm9maWxlUGljVXJsfSAvPlxyXG5cclxuICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7cG9zdC51c2VyLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YT57cG9zdC51c2VyLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxDYXJkLk1ldGE+e2NhbGN1bGF0ZVRpbWUocG9zdC5jcmVhdGVkQXQpfTwvQ2FyZC5NZXRhPlxyXG5cclxuICAgICAgICAgICAgICB7cG9zdC5sb2NhdGlvbiAmJiA8Q2FyZC5NZXRhIGNvbnRlbnQ9e3Bvc3QubG9jYXRpb259IC8+fVxyXG5cclxuICAgICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxyXG4gICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjAuMXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHdvcmRTcGFjaW5nOiBcIjAuMzVweFwiXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHtwb3N0LnRleHR9XHJcbiAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuXHJcbiAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XHJcbiAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgIG5hbWU9e2lzTGlrZWQgPyBcImhlYXJ0XCIgOiBcImhlYXJ0IG91dGxpbmVcIn1cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIGxpa2VQb3N0KHBvc3QuX2lkLCB1c2VyLl9pZCwgc2V0TGlrZXMsIGlzTGlrZWQgPyBmYWxzZSA6IHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPExpa2VzTGlzdFxyXG4gICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICAgICAgICBsaWtlcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuTGlrZXNMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YCR7bGlrZXMubGVuZ3RofSAke2xpa2VzLmxlbmd0aCA9PT0gMSA/IFwibGlrZVwiIDogXCJsaWtlc1wifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjb21tZW50cy5sZW5ndGggPiAyID8gXCIyMDBweFwiIDogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIlxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7Y29tbWVudHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICBjb21tZW50cy5tYXAoY29tbWVudCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RDb21tZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtjb21tZW50Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPENvbW1lbnRJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZU1vZGFsO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGlzdCwgUG9wdXAsIEltYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gXCIuLi8uLi91dGlscy9jYXRjaEVycm9yc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTGlrZXNQbGFjZUhvbGRlciB9IGZyb20gXCIuLi9MYXlvdXQvUGxhY2VIb2xkZXJHcm91cFwiO1xyXG5cclxuZnVuY3Rpb24gTGlrZXNMaXN0KHsgcG9zdElkLCB0cmlnZ2VyIH0pIHtcclxuICBjb25zdCBbbGlrZXNMaXN0LCBzZXRMaWtlc0xpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZ2V0TGlrZXNMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvcG9zdHMvbGlrZS8ke3Bvc3RJZH1gLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG4gICAgICB9KTtcclxuICAgICAgc2V0TGlrZXNMaXN0KHJlcy5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBvcHVwXHJcbiAgICAgIG9uPVwiY2xpY2tcIlxyXG4gICAgICBvbkNsb3NlPXsoKSA9PiBzZXRMaWtlc0xpc3QoW10pfVxyXG4gICAgICBvbk9wZW49e2dldExpa2VzTGlzdH1cclxuICAgICAgcG9wcGVyRGVwZW5kZW5jaWVzPXtbbGlrZXNMaXN0XX1cclxuICAgICAgdHJpZ2dlcj17dHJpZ2dlcn1cclxuICAgICAgd2lkZT5cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPExpa2VzUGxhY2VIb2xkZXIgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2xpa2VzTGlzdC5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMTVyZW1cIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMjEwcHhcIlxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIDxMaXN0IHNlbGVjdGlvbiBzaXplPVwibGFyZ2VcIj5cclxuICAgICAgICAgICAgICAgIHtsaWtlc0xpc3QubWFwKGxpa2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17bGlrZS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBhdmF0YXIgc3JjPXtsaWtlLnVzZXIucHJvZmlsZVBpY1VybH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChgLyR7bGlrZS51c2VyLnVzZXJuYW1lfWApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtsaWtlLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L1BvcHVwPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpa2VzTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNb2RhbCwgSW1hZ2UsIENhcmQsIEljb24sIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IFBvc3RDb21tZW50cyBmcm9tIFwiLi9Qb3N0Q29tbWVudHNcIjtcclxuaW1wb3J0IENvbW1lbnRJbnB1dEZpZWxkIGZyb20gXCIuL0NvbW1lbnRJbnB1dEZpZWxkXCI7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgbGlrZVBvc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcclxuaW1wb3J0IExpa2VzTGlzdCBmcm9tIFwiLi9MaWtlc0xpc3RcIjtcclxuXHJcbmZ1bmN0aW9uIE5vSW1hZ2VNb2RhbCh7XHJcbiAgcG9zdCxcclxuICB1c2VyLFxyXG4gIHNldExpa2VzLFxyXG4gIGxpa2VzLFxyXG4gIGlzTGlrZWQsXHJcbiAgY29tbWVudHMsXHJcbiAgc2V0Q29tbWVudHNcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBmbHVpZD5cclxuICAgICAgPENhcmQuQ29udGVudD5cclxuICAgICAgICA8SW1hZ2UgZmxvYXRlZD1cImxlZnRcIiBhdmF0YXIgc3JjPXtwb3N0LnVzZXIucHJvZmlsZVBpY1VybH0gLz5cclxuXHJcbiAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QudXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgPGE+e3Bvc3QudXNlci5uYW1lfTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG5cclxuICAgICAgICA8Q2FyZC5NZXRhPntjYWxjdWxhdGVUaW1lKHBvc3QuY3JlYXRlZEF0KX08L0NhcmQuTWV0YT5cclxuXHJcbiAgICAgICAge3Bvc3QubG9jYXRpb24gJiYgPENhcmQuTWV0YSBjb250ZW50PXtwb3N0LmxvY2F0aW9ufSAvPn1cclxuXHJcbiAgICAgICAgPENhcmQuRGVzY3JpcHRpb25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcclxuICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjFweFwiLFxyXG4gICAgICAgICAgICB3b3JkU3BhY2luZzogXCIwLjM1cHhcIlxyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICB7cG9zdC50ZXh0fVxyXG4gICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcblxyXG4gICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxyXG4gICAgICAgIDxJY29uXHJcbiAgICAgICAgICBuYW1lPXtpc0xpa2VkID8gXCJoZWFydFwiIDogXCJoZWFydCBvdXRsaW5lXCJ9XHJcbiAgICAgICAgICBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICBsaWtlUG9zdChwb3N0Ll9pZCwgdXNlci5faWQsIHNldExpa2VzLCBpc0xpa2VkID8gZmFsc2UgOiB0cnVlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxMaWtlc0xpc3RcclxuICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICB0cmlnZ2VyPXtcclxuICAgICAgICAgICAgbGlrZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbkxpa2VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAge2Ake2xpa2VzLmxlbmd0aH0gJHtsaWtlcy5sZW5ndGggPT09IDEgPyBcImxpa2VcIiA6IFwibGlrZXNcIn1gfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogY29tbWVudHMubGVuZ3RoID4gMiA/IFwiMjAwcHhcIiA6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiOHB4XCJcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgY29tbWVudHMubWFwKGNvbW1lbnQgPT4gKFxyXG4gICAgICAgICAgICAgIDxQb3N0Q29tbWVudHNcclxuICAgICAgICAgICAgICAgIGtleT17Y29tbWVudC5faWR9XHJcbiAgICAgICAgICAgICAgICBjb21tZW50PXtjb21tZW50fVxyXG4gICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgICBzZXRDb21tZW50cz17c2V0Q29tbWVudHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxDb21tZW50SW5wdXRGaWVsZCBwb3N0SWQ9e3Bvc3QuX2lkfSB1c2VyPXt1c2VyfSBzZXRDb21tZW50cz17c2V0Q29tbWVudHN9IC8+XHJcbiAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vSW1hZ2VNb2RhbDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbW1lbnQsIEljb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuaW1wb3J0IHsgZGVsZXRlQ29tbWVudCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gUG9zdENvbW1lbnRzKHsgY29tbWVudCwgdXNlciwgc2V0Q29tbWVudHMsIHBvc3RJZCB9KSB7XHJcbiAgY29uc3QgW2Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29tbWVudC5Hcm91cD5cclxuICAgICAgICA8Q29tbWVudD5cclxuICAgICAgICAgIDxDb21tZW50LkF2YXRhciBzcmM9e2NvbW1lbnQudXNlci5wcm9maWxlUGljVXJsfSAvPlxyXG4gICAgICAgICAgPENvbW1lbnQuQ29udGVudD5cclxuICAgICAgICAgICAgPENvbW1lbnQuQXV0aG9yIGFzPVwiYVwiIGhyZWY9e2AvJHtjb21tZW50LnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAge2NvbW1lbnQudXNlci5uYW1lfVxyXG4gICAgICAgICAgICA8L0NvbW1lbnQuQXV0aG9yPlxyXG4gICAgICAgICAgICA8Q29tbWVudC5NZXRhZGF0YT57Y2FsY3VsYXRlVGltZShjb21tZW50LmRhdGUpfTwvQ29tbWVudC5NZXRhZGF0YT5cclxuXHJcbiAgICAgICAgICAgIDxDb21tZW50LlRleHQ+e2NvbW1lbnQudGV4dH08L0NvbW1lbnQuVGV4dD5cclxuXHJcbiAgICAgICAgICAgIDxDb21tZW50LkFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgPENvbW1lbnQuQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgeyh1c2VyLnJvbGUgPT09IFwicm9vdFwiIHx8IGNvbW1lbnQudXNlci5faWQgPT09IHVzZXIuX2lkKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHJhc2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldERpc2FibGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGVsZXRlQ29tbWVudChwb3N0SWQsIGNvbW1lbnQuX2lkLCBzZXRDb21tZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXREaXNhYmxlZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Db21tZW50LkFjdGlvbj5cclxuICAgICAgICAgICAgPC9Db21tZW50LkFjdGlvbnM+XHJcbiAgICAgICAgICA8L0NvbW1lbnQuQ29udGVudD5cclxuICAgICAgICA8L0NvbW1lbnQ+XHJcbiAgICAgIDwvQ29tbWVudC5Hcm91cD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDb21tZW50cztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiIFxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgQ3JlYXRlUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0NyZWF0ZVBvc3RcIjtcclxuaW1wb3J0IENhcmRQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3QvQ2FyZFBvc3RcIjtcclxuaW1wb3J0IHsgU2VnbWVudCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgeyBOb1Bvc3RzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L05vRGF0YVwiO1xyXG5pbXBvcnQgeyBQb3N0RGVsZXRlVG9hc3RyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1RvYXN0clwiO1xyXG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSBcInJlYWN0LWluZmluaXRlLXNjcm9sbC1jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGxhY2VIb2xkZXJQb3N0cywgRW5kTWVzc2FnZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9QbGFjZUhvbGRlckdyb3VwXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgZ2V0VXNlckluZm8gZnJvbSBcIi4uL3V0aWxzL2dldFVzZXJJbmZvXCI7XHJcbmltcG9ydCBNZXNzYWdlTm90aWZpY2F0aW9uTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9NZXNzYWdlTm90aWZpY2F0aW9uTW9kYWxcIjtcclxuaW1wb3J0IG5ld01zZ1NvdW5kIGZyb20gXCIuLi91dGlscy9uZXdNc2dTb3VuZFwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uUG9ydGFsIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvTm90aWZpY2F0aW9uUG9ydGFsXCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleCh7IHVzZXIsIHBvc3RzRGF0YSwgZXJyb3JMb2FkaW5nIH0pIHtcclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUocG9zdHNEYXRhIHx8IFtdKTtcclxuICAgIGNvbnN0IFtzaG93VG9hc3RyLCBzZXRTaG93VG9hc3RyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtoYXNNb3JlLCBzZXRIYXNNb3JlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXRQYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDIpO1xyXG5cclxuICAgIGNvbnN0IHNvY2tldCA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IFtuZXdNZXNzYWdlUmVjZWl2ZWQsIHNldE5ld01lc3NhZ2VSZWNlaXZlZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtuZXdNZXNzYWdlTW9kYWwsIHNob3dOZXdNZXNzYWdlTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtuZXdOb3RpZmljYXRpb24sIHNldE5ld05vdGlmaWNhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtub3RpZmljYXRpb25Qb3B1cCwgc2hvd05vdGlmaWNhdGlvblBvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgc29ja2V0LmN1cnJlbnQgPSBpbyhiYXNlVXJsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xyXG4gICAgICAgICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiam9pblwiLCB7IHVzZXJJZDogdXNlci5faWQgfSk7XHJcblxyXG4gICAgICAgICAgICBzb2NrZXQuY3VycmVudC5vbihcIm5ld01zZ1JlY2VpdmVkXCIsIGFzeW5jICh7IG5ld01zZyB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IG5hbWUsIHByb2ZpbGVQaWNVcmwgfSA9IGF3YWl0IGdldFVzZXJJbmZvKG5ld01zZy5zZW5kZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLm5ld01lc3NhZ2VQb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE5ld01lc3NhZ2VSZWNlaXZlZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5ld01zZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGVyTmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGVyUHJvZmlsZVBpYzogcHJvZmlsZVBpY1VybFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dOZXdNZXNzYWdlTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXdNc2dTb3VuZChuYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IGBXZWxjb21lLCAke3VzZXIubmFtZS5zcGxpdChcIiBcIilbMF19YDtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNvY2tldC5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiZGlzY29ubmVjdFwiKTtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5jdXJyZW50Lm9mZigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNob3dUb2FzdHIgJiYgc2V0VGltZW91dCgoKSA9PiBzZXRTaG93VG9hc3RyKGZhbHNlKSwgMzAwMCk7XHJcbiAgICB9LCBbc2hvd1RvYXN0cl0pO1xyXG5cclxuICAgIGNvbnN0IGZldGNoRGF0YU9uU2Nyb2xsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvcG9zdHNgLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9LFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7IHBhZ2VOdW1iZXIgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPT09IDApIHNldEhhc01vcmUoZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgc2V0UG9zdHMocHJldiA9PiBbLi4ucHJldiwgLi4ucmVzLmRhdGFdKTtcclxuICAgICAgICAgICAgc2V0UGFnZU51bWJlcihwcmV2ID0+IHByZXYgKyAxKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydChcIkVycm9yIGZldGNoaW5nIFBvc3RzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKHBvc3RzLmxlbmd0aCA9PT0gMCB8fCBlcnJvckxvYWRpbmcpIHJldHVybiA8Tm9Qb3N0cyAvPjtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xyXG4gICAgICAgICAgICBzb2NrZXQuY3VycmVudC5vbihcclxuICAgICAgICAgICAgICAgIFwibmV3Tm90aWZpY2F0aW9uUmVjZWl2ZWRcIixcclxuICAgICAgICAgICAgICAgICh7IG5hbWUsIHByb2ZpbGVQaWNVcmwsIHVzZXJuYW1lLCBwb3N0SWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE5ld05vdGlmaWNhdGlvbih7IG5hbWUsIHByb2ZpbGVQaWNVcmwsIHVzZXJuYW1lLCBwb3N0SWQgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb25Qb3B1cCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7bm90aWZpY2F0aW9uUG9wdXAgJiYgbmV3Tm90aWZpY2F0aW9uICE9PSBudWxsICYmIChcclxuICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25Qb3J0YWxcclxuICAgICAgICAgICAgICAgICAgICBuZXdOb3RpZmljYXRpb249e25ld05vdGlmaWNhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25Qb3B1cD17bm90aWZpY2F0aW9uUG9wdXB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvblBvcHVwPXtzaG93Tm90aWZpY2F0aW9uUG9wdXB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3Nob3dUb2FzdHIgJiYgPFBvc3REZWxldGVUb2FzdHIgLz59XHJcblxyXG4gICAgICAgICAgICB7bmV3TWVzc2FnZU1vZGFsICYmIG5ld01lc3NhZ2VSZWNlaXZlZCAhPT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZU5vdGlmaWNhdGlvbk1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0PXtzb2NrZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd05ld01lc3NhZ2VNb2RhbD17c2hvd05ld01lc3NhZ2VNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBuZXdNZXNzYWdlTW9kYWw9e25ld01lc3NhZ2VNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBuZXdNZXNzYWdlUmVjZWl2ZWQ9e25ld01lc3NhZ2VSZWNlaXZlZH1cclxuICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZVBvc3QgdXNlcj17dXNlcn0gc2V0UG9zdHM9e3NldFBvc3RzfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxJbmZpbml0ZVNjcm9sbFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc01vcmU9e2hhc01vcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dD17ZmV0Y2hEYXRhT25TY3JvbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXs8UGxhY2VIb2xkZXJQb3N0cyAvPn1cclxuICAgICAgICAgICAgICAgICAgICBlbmRNZXNzYWdlPXs8RW5kTWVzc2FnZSAvPn1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhTGVuZ3RoPXtwb3N0cy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRQb3N0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQ9e3NvY2tldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0PXtwb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc3RzPXtzZXRQb3N0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dUb2FzdHI9e3NldFNob3dUb2FzdHJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0luZmluaXRlU2Nyb2xsPlxyXG4gICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wb3N0c2AsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxyXG4gICAgICAgICAgICBwYXJhbXM6IHsgcGFnZU51bWJlcjogMSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHBvc3RzRGF0YTogcmVzLmRhdGEgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3JMb2FkaW5nOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwiY29uc3QgYmFzZVVybCA9XCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VVcmw7XHJcbiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIjtcclxuXHJcbmNvbnN0IGNhbGN1bGF0ZVRpbWUgPSBjcmVhdGVkQXQgPT4ge1xyXG4gIGNvbnN0IHRvZGF5ID0gbW9tZW50KERhdGUubm93KCkpO1xyXG4gIGNvbnN0IHBvc3REYXRlID0gbW9tZW50KGNyZWF0ZWRBdCk7XHJcbiAgY29uc3QgZGlmZkluSG91cnMgPSB0b2RheS5kaWZmKHBvc3REYXRlLCBcImhvdXJzXCIpO1xyXG5cclxuICBpZiAoZGlmZkluSG91cnMgPCAyNCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICBUb2RheSA8TW9tZW50IGZvcm1hdD1cImhoOm1tIEFcIj57Y3JlYXRlZEF0fTwvTW9tZW50PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChkaWZmSW5Ib3VycyA+IDI0ICYmIGRpZmZJbkhvdXJzIDwgMzYpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgWWVzdGVyZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGRpZmZJbkhvdXJzID4gMzYpIHtcclxuICAgIHJldHVybiA8TW9tZW50IGZvcm1hdD1cIkREL01NL1lZWVkgaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhbGN1bGF0ZVRpbWU7XHJcbiIsImNvbnN0IGNhdGNoRXJyb3JzID0gZXJyb3IgPT4ge1xyXG4gIGxldCBlcnJvck1zZztcclxuXHJcbiAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAvLyBJZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciBub3QgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZSBpbiB0aGUgcmFuZ2Ugb2YgMnh4XHJcblxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgLy8gaWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIG5vIHJlc3BvbnNlIHdhcyByZWNldmllZCBmcm9tIHNlcnZlclxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiBzb21ldGhpbmcgZWxzZSBoYXBwZW5lZCB3aGlsZSBtYWtpbmcgdGhlIHJlcXVlc3RcclxuICAgIGVycm9yTXNnID0gZXJyb3IubWVzc2FnZTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yTXNnO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hFcnJvcnM7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybFwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IGdldFVzZXJJbmZvID0gYXN5bmMgdXNlclRvRmluZElkID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9jaGF0cy91c2VyLyR7dXNlclRvRmluZElkfWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBuYW1lOiByZXMuZGF0YS5uYW1lLCBwcm9maWxlUGljVXJsOiByZXMuZGF0YS5wcm9maWxlUGljVXJsIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0VXNlckluZm87XHJcbiIsImNvbnN0IG5ld01zZ1NvdW5kID0gc2VuZGVyTmFtZSA9PiB7XHJcbiAgY29uc3Qgc291bmQgPSBuZXcgQXVkaW8oXCIvbGlnaHQubXAzXCIpO1xyXG5cclxuICBzb3VuZCAmJiBzb3VuZC5wbGF5KCk7XHJcblxyXG4gIGlmIChzZW5kZXJOYW1lKSB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9IGBOZXcgbWVzc2FnZSBmcm9tICR7c2VuZGVyTmFtZX1gO1xyXG5cclxuICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJNZXNzYWdlc1wiO1xyXG4gICAgICB9LCA1MDAwKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdNc2dTb3VuZDtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi9iYXNlVXJsXCI7XHJcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi9jYXRjaEVycm9yc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IEF4aW9zID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IGAke2Jhc2VVcmx9L2FwaS9wb3N0c2AsXHJcbiAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1Ym1pdE5ld1Bvc3QgPSBhc3luYyAoXHJcbiAgICB0ZXh0LFxyXG4gICAgbG9jYXRpb24sXHJcbiAgICBwaWNVcmwsXHJcbiAgICBzZXRQb3N0cyxcclxuICAgIHNldE5ld1Bvc3QsXHJcbiAgICBzZXRFcnJvclxyXG4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgQXhpb3MucG9zdChcIi9cIiwgeyB0ZXh0LCBsb2NhdGlvbiwgcGljVXJsIH0pO1xyXG5cclxuICAgICAgICBzZXRQb3N0cyhwcmV2ID0+IFtyZXMuZGF0YSwgLi4ucHJldl0pO1xyXG4gICAgICAgIHNldE5ld1Bvc3QoeyB0ZXh0OiBcIlwiLCBsb2NhdGlvbjogXCJcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBjYXRjaEVycm9ycyhlcnJvcik7XHJcbiAgICAgICAgc2V0RXJyb3IoZXJyb3JNc2cpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVBvc3QgPSBhc3luYyAocG9zdElkLCBzZXRQb3N0cywgc2V0U2hvd1RvYXN0cikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBBeGlvcy5kZWxldGUoYC8ke3Bvc3RJZH1gKTtcclxuICAgICAgICBzZXRQb3N0cyhwcmV2ID0+IHByZXYuZmlsdGVyKHBvc3QgPT4gcG9zdC5faWQgIT09IHBvc3RJZCkpO1xyXG4gICAgICAgIHNldFNob3dUb2FzdHIodHJ1ZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlrZVBvc3QgPSBhc3luYyAocG9zdElkLCB1c2VySWQsIHNldExpa2VzLCBsaWtlID0gdHJ1ZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAobGlrZSkge1xyXG4gICAgICAgICAgICBhd2FpdCBBeGlvcy5wb3N0KGAvbGlrZS8ke3Bvc3RJZH1gKTtcclxuICAgICAgICAgICAgc2V0TGlrZXMocHJldiA9PiBbLi4ucHJldiwgeyB1c2VyOiB1c2VySWQgfV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGVsc2UgaWYgKCFsaWtlKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IEF4aW9zLnB1dChgL3VubGlrZS8ke3Bvc3RJZH1gKTtcclxuICAgICAgICAgICAgc2V0TGlrZXMocHJldiA9PiBwcmV2LmZpbHRlcihsaWtlID0+IGxpa2UudXNlciAhPT0gdXNlcklkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RDb21tZW50ID0gYXN5bmMgKHBvc3RJZCwgdXNlciwgdGV4dCwgc2V0Q29tbWVudHMsIHNldFRleHQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgQXhpb3MucG9zdChgL2NvbW1lbnQvJHtwb3N0SWR9YCwgeyB0ZXh0IH0pO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdDb21tZW50ID0ge1xyXG4gICAgICAgICAgICBfaWQ6IHJlcy5kYXRhLFxyXG4gICAgICAgICAgICB1c2VyLFxyXG4gICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICBkYXRlOiBEYXRlLm5vdygpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0Q29tbWVudHMocHJldiA9PiBbbmV3Q29tbWVudCwgLi4ucHJldl0pO1xyXG4gICAgICAgIHNldFRleHQoXCJcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ29tbWVudCA9IGFzeW5jIChwb3N0SWQsIGNvbW1lbnRJZCwgc2V0Q29tbWVudHMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgQXhpb3MuZGVsZXRlKGAvJHtwb3N0SWR9LyR7Y29tbWVudElkfWApO1xyXG4gICAgICAgIHNldENvbW1lbnRzKHByZXYgPT4gcHJldi5maWx0ZXIoY29tbWVudCA9PiBjb21tZW50Ll9pZCAhPT0gY29tbWVudElkKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IHVwbG9hZFBpYyA9IGFzeW5jIG1lZGlhID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kKFwiZmlsZVwiLCBtZWRpYSk7XHJcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJ1cGxvYWRfcHJlc2V0XCIsIFwic29jaWFsLW1lZGlhLWFwcFwiKTtcclxuICAgICAgICBmb3JtLmFwcGVuZChcImNsb3VkX25hbWVcIiwgXCJkY2doY3hjaHlcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QocHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9VUkwsIGZvcm0pO1xyXG4gICAgICAgIHJldHVybiByZXMuZGF0YS51cmw7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwbG9hZFBpYztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jcm9wcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWluZmluaXRlLXNjcm9sbC1jb21wb25lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybSIsIk1vZGFsIiwiU2VnbWVudCIsIkxpc3QiLCJJY29uIiwiTGluayIsImNhbGN1bGF0ZVRpbWUiLCJNZXNzYWdlTm90aWZpY2F0aW9uTW9kYWwiLCJzb2NrZXQiLCJzaG93TmV3TWVzc2FnZU1vZGFsIiwibmV3TWVzc2FnZU1vZGFsIiwibmV3TWVzc2FnZVJlY2VpdmVkIiwidXNlciIsInRleHQiLCJzZXRUZXh0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJvbk1vZGFsQ2xvc2UiLCJmb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsImVtaXQiLCJ1c2VySWQiLCJfaWQiLCJtc2dTZW5kVG9Vc2VySWQiLCJzZW5kZXIiLCJtc2ciLCJvbiIsInNlbmRlck5hbWUiLCJzZW5kZXJQcm9maWxlUGljIiwiZGF0ZSIsInBvc2l0aW9uIiwiYm90dG9tIiwidGFyZ2V0IiwidmFsdWUiLCJjb2xvciIsImljb24iLCJkaXNhYmxlZCIsIm1hcmdpblRvcCIsInVzZXJuYW1lIiwiSW5zdHJ1Y3Rpb25zIiwiVHJhbnNpdGlvbmFibGVQb3J0YWwiLCJGZWVkIiwibmV3TXNnU291bmQiLCJ1c2VSb3V0ZXIiLCJOb3RpZmljYXRpb25Qb3J0YWwiLCJuZXdOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25Qb3B1cCIsInNob3dOb3RpZmljYXRpb25Qb3B1cCIsInJvdXRlciIsIm5hbWUiLCJwcm9maWxlUGljVXJsIiwicG9zdElkIiwiYW5pbWF0aW9uIiwiZHVyYXRpb24iLCJyaWdodCIsInRvcCIsInpJbmRleCIsImZsb2F0IiwiY3Vyc29yIiwicHVzaCIsIkRhdGUiLCJub3ciLCJNZXNzYWdlIiwiQnV0dG9uIiwiTm9Qcm9maWxlUG9zdHMiLCJOb0ZvbGxvd0RhdGEiLCJmb2xsb3dlcnNDb21wb25lbnQiLCJmb2xsb3dpbmdDb21wb25lbnQiLCJOb01lc3NhZ2VzIiwiTm9Qb3N0cyIsIk5vUHJvZmlsZSIsIk5vTm90aWZpY2F0aW9ucyIsIk5vUG9zdEZvdW5kIiwiUGxhY2Vob2xkZXIiLCJEaXZpZGVyIiwiQ2FyZCIsIkNvbnRhaW5lciIsInJhbmdlIiwiUGxhY2VIb2xkZXJQb3N0cyIsIm1hcCIsIml0ZW0iLCJQbGFjZUhvbGRlclN1Z2dlc3Rpb25zIiwiUGxhY2VIb2xkZXJOb3RpZmljYXRpb25zIiwiRW5kTWVzc2FnZSIsIkxpa2VzUGxhY2VIb2xkZXIiLCJtaW5XaWR0aCIsInRvYXN0IiwiVG9hc3RDb250YWluZXIiLCJQb3N0RGVsZXRlVG9hc3RyIiwiaW5mbyIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiRXJyb3JUb2FzdHIiLCJlcnJvciIsIk1zZ1NlbnRUb2FzdHIiLCJzdWNjZXNzIiwiSW1hZ2UiLCJQb3B1cCIsIkhlYWRlciIsIlBvc3RDb21tZW50cyIsIkNvbW1lbnRJbnB1dEZpZWxkIiwiZGVsZXRlUG9zdCIsImxpa2VQb3N0IiwiTGlrZXNMaXN0IiwiSW1hZ2VNb2RhbCIsIk5vSW1hZ2VNb2RhbCIsIkNhcmRQb3N0IiwicG9zdCIsInNldFBvc3RzIiwic2V0U2hvd1RvYXN0ciIsImxpa2VzIiwic2V0TGlrZXMiLCJpc0xpa2VkIiwibGVuZ3RoIiwiZmlsdGVyIiwibGlrZSIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJzZXRFcnJvciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImFkZFByb3BzVG9Nb2RhbCIsInBpY1VybCIsInJvbGUiLCJjcmVhdGVkQXQiLCJsb2NhdGlvbiIsImZvbnRTaXplIiwibGV0dGVyU3BhY2luZyIsIndvcmRTcGFjaW5nIiwicHJldiIsIm1hcmdpbkxlZnQiLCJjb21tZW50IiwiaSIsInBvc3RDb21tZW50IiwidXNlUmVmIiwidXBsb2FkUGljIiwic3VibWl0TmV3UG9zdCIsIkNyb3BJbWFnZU1vZGFsIiwiQ3JlYXRlUG9zdCIsIm5ld1Bvc3QiLCJzZXROZXdQb3N0IiwiaW5wdXRSZWYiLCJoaWdobGlnaHRlZCIsInNldEhpZ2hsaWdodGVkIiwibWVkaWEiLCJzZXRNZWRpYSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsImhhbmRsZUNoYW5nZSIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYWRkU3R5bGVzIiwidGV4dEFsaWduIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXIiLCJwYWRkaW5nVG9wIiwiYm9yZGVyQ29sb3IiLCJoYW5kbGVTdWJtaXQiLCJyZXZva2VPYmplY3RVUkwiLCJzZXRUaW1lb3V0IiwiZGlzcGxheSIsImNsaWNrIiwiZHJvcHBlZEZpbGUiLCJBcnJheSIsImZyb20iLCJkYXRhVHJhbnNmZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ1c2VFZmZlY3QiLCJHcmlkIiwiQ3JvcHBlciIsImNyb3BwZXIiLCJzZXRDcm9wcGVyIiwiZ2V0Q3JvcERhdGEiLCJnZXRDcm9wcGVkQ2FudmFzIiwidG9EYXRhVVJMIiwiZGVzdHJveSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXkiLCJzZXREcmFnTW9kZSIsInJlc2V0IiwicGFkZGluZyIsIm92ZXJmbG93IiwiYm94U2l6aW5nIiwibWFyZ2luQm90dG9tIiwiYXhpb3MiLCJiYXNlVXJsIiwiY2F0Y2hFcnJvcnMiLCJjb29raWUiLCJSb3V0ZXIiLCJ0cmlnZ2VyIiwibGlrZXNMaXN0Iiwic2V0TGlrZXNMaXN0IiwiZ2V0TGlrZXNMaXN0IiwicmVzIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwiYWxlcnQiLCJtYXhIZWlnaHQiLCJDb21tZW50IiwiZGVsZXRlQ29tbWVudCIsInNldERpc2FibGVkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwiX3VzZUludGVyc2VjdGlvbiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJpbmRleE9mIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiY29uc29sZSIsIndhcm4iLCJwIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJjYiIsInN0YXJ0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiaWQiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ0aGVuIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJob3N0bmFtZSIsIl9zaG91bGRSZXNvbHZlSHJlZiIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyZXdyaXRlc1Jlc3VsdCIsIm1hdGNoZWRQYWdlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyZWYxIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiX3Njcm9sbCIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJlcnIyIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInBhdGhuYW1lMiIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwMSIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaW8iLCJwYXJzZUNvb2tpZXMiLCJJbmZpbml0ZVNjcm9sbCIsImdldFVzZXJJbmZvIiwiSW5kZXgiLCJwb3N0c0RhdGEiLCJlcnJvckxvYWRpbmciLCJwb3N0cyIsInNob3dUb2FzdHIiLCJoYXNNb3JlIiwic2V0SGFzTW9yZSIsInBhZ2VOdW1iZXIiLCJzZXRQYWdlTnVtYmVyIiwic2V0TmV3TWVzc2FnZVJlY2VpdmVkIiwic2V0TmV3Tm90aWZpY2F0aW9uIiwibmV3TXNnIiwibmV3TWVzc2FnZVBvcHVwIiwidGl0bGUiLCJvZmYiLCJmZXRjaERhdGFPblNjcm9sbCIsInRva2VuIiwibW9tZW50IiwiTW9tZW50IiwidG9kYXkiLCJwb3N0RGF0ZSIsImRpZmZJbkhvdXJzIiwiZGlmZiIsImVycm9yTXNnIiwicmVzcG9uc2UiLCJyZXF1ZXN0IiwidXNlclRvRmluZElkIiwic291bmQiLCJBdWRpbyIsInBsYXkiLCJ2aXNpYmlsaXR5U3RhdGUiLCJBeGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwdXQiLCJuZXdDb21tZW50IiwiY29tbWVudElkIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQ0xPVURJTkFSWV9VUkwiXSwic291cmNlUm9vdCI6IiJ9