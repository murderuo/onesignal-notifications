(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(t,e,i){"use strict";i.r(e);var n=i(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),i("p",[t._v("There are different types of notifications:")]),i("ul",[i("li",[t._v("You can send a "),i("router-link",{attrs:{to:"segment-notification.html"}},[i("code",[t._v("SegmentNotification")])]),t._v(" to a specific segment of users. For example to all users.")],1),i("li",[t._v("You can send a "),i("router-link",{attrs:{to:"filter-notification.html"}},[i("code",[t._v("FilterNotification")])]),t._v(" based on filters. For  example only users who have a specific version of the app.")],1),i("li",[t._v("You can send a "),i("router-link",{attrs:{to:"device-notification.html"}},[i("code",[t._v("DeviceNotification")])]),t._v(" to specific devices using their id.")],1)]),i("p",[t._v("Let's send a notification to all users. If the users clicks on the notification, GitHub opens.")]),t._m(1),t._m(2),t._m(3),t._m(4),i("p",[i("a",{attrs:{href:"https://documentation.onesignal.com/reference#section-content-language",target:"_blank",rel:"noopener noreferrer"}},[t._v("More details"),i("OutboundLink")],1)]),t._m(5),t._m(6),i("p",[i("a",{attrs:{href:"https://documentation.onesignal.com/reference#section-email-content",target:"_blank",rel:"noopener noreferrer"}},[t._v("More details"),i("OutboundLink")],1)]),t._m(7),t._m(8),i("p",[i("a",{attrs:{href:"https://documentation.onesignal.com/reference#section-attachments",target:"_blank",rel:"noopener noreferrer"}},[t._v("More details"),i("OutboundLink")],1)]),t._m(9),t._m(10),i("p",[i("a",{attrs:{href:"https://documentation.onesignal.com/reference#section-action-buttons",target:"_blank",rel:"noopener noreferrer"}},[t._v("More details"),i("OutboundLink")],1)]),t._m(11),t._m(12),i("p",[i("a",{attrs:{href:"https://documentation.onesignal.com/reference#section-appearance",target:"_blank",rel:"noopener noreferrer"}},[t._v("More details"),i("OutboundLink")],1)]),t._m(13),t._m(14),i("p",[i("a",{attrs:{href:"https://documentation.onesignal.com/reference#section-delivery",target:"_blank",rel:"noopener noreferrer"}},[t._v("More details"),i("OutboundLink")],1)]),t._m(15),t._m(16),i("p",[i("a",{attrs:{href:"https://documentation.onesignal.com/reference#section-grouping-collapsing",target:"_blank",rel:"noopener noreferrer"}},[t._v("More details"),i("OutboundLink")],1)]),t._m(17),t._m(18),i("p",[i("a",{attrs:{href:"https://documentation.onesignal.com/reference#section-platform-to-deliver-to",target:"_blank",rel:"noopener noreferrer"}},[t._v("More details"),i("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"send-notifications"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#send-notifications","aria-hidden":"true"}},[this._v("#")]),this._v(" Send Notifications")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"language-python extra-class"},[i("pre",{pre:!0,attrs:{class:"language-python"}},[i("code",[i("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" onesignal "),i("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" OneSignal"),i("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SegmentNotification\n\nclient "),i("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" OneSignal"),i("span",{attrs:{class:"token punctuation"}},[t._v("(")]),i("span",{attrs:{class:"token string"}},[t._v('"MY_APP_ID"')]),i("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),i("span",{attrs:{class:"token string"}},[t._v('"MY_REST_API_KEY"')]),i("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnotification_to_all_users "),i("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SegmentNotification"),i("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),i("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),i("span",{attrs:{class:"token string"}},[t._v('"en"')]),i("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),i("span",{attrs:{class:"token string"}},[t._v('"Hello from OneSignal-Notifications"')]),t._v("\n    "),i("span",{attrs:{class:"token punctuation"}},[t._v("}")]),i("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    included_segments"),i("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("SegmentNotification"),i("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ALL"),i("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    url"),i("span",{attrs:{class:"token operator"}},[t._v("=")]),i("span",{attrs:{class:"token string"}},[t._v('"https://github.com"')]),t._v("\n"),i("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nclient"),i("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),i("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("notification_to_all_users"),i("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"common-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-parameters","aria-hidden":"true"}},[this._v("#")]),this._v(" Common parameters")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"notification-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notification-content","aria-hidden":"true"}},[this._v("#")]),this._v(" Notification Content")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("contents")]),e("li",[this._v("headings")]),e("li",[this._v("subtitle")]),e("li",[this._v("template_id")]),e("li",[this._v("content_available")]),e("li",[this._v("mutable_content")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"e-mail-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#e-mail-content","aria-hidden":"true"}},[this._v("#")]),this._v(" E-Mail Content")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("email_body")]),e("li",[this._v("email_subject")]),e("li",[this._v("email_from_name")]),e("li",[this._v("email_from_address")]),e("li",[this._v("email_from_address")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"attachments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attachments","aria-hidden":"true"}},[this._v("#")]),this._v(" Attachments")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("data")]),e("li",[this._v("url")]),e("li",[this._v("ios_attachments")]),e("li",[this._v("big_picture")]),e("li",[this._v("adm_big_picture")]),e("li",[this._v("chrome_big_picture")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"action-buttons"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#action-buttons","aria-hidden":"true"}},[this._v("#")]),this._v(" Action Buttons")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("buttons")]),e("li",[this._v("web_buttons")]),e("li",[this._v("ios_category")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"appearance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#appearance","aria-hidden":"true"}},[this._v("#")]),this._v(" Appearance")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("android_channel_id")]),i("li",[t._v("existing_android_channel_id")]),i("li",[t._v("android_background_layout")]),i("li",[t._v("small_icon")]),i("li",[t._v("large_icon")]),i("li",[t._v("adm_small_icon")]),i("li",[t._v("adm_large_icon")]),i("li",[t._v("chrome_web_icon")]),i("li",[t._v("chrome_web_image")]),i("li",[t._v("chrome_web_badge")]),i("li",[t._v("firefox_icon")]),i("li",[t._v("chrome_icon")]),i("li",[t._v("ios_sound")]),i("li",[t._v("android_sound")]),i("li",[t._v("adm_sound")]),i("li",[t._v("wp_sound")]),i("li",[t._v("wp_wns_sound")]),i("li",[t._v("android_led_color")]),i("li",[t._v("android_accent_color")]),i("li",[t._v("android_visibility (available values: "),i("code",[t._v("Notification.ANDROID_VISIBILITY_PUBLIC")]),t._v(", "),i("code",[t._v("Notification.ANDROID_VISIBILITY_PRIVATE")]),t._v(", "),i("code",[t._v("Notification.ANDROID_VISIBILITY_SECRET")]),t._v(")")]),i("li",[t._v("ios_badge_type (available values: "),i("code",[t._v("Notification.IOS_BADGE_TYPE_NONE")]),t._v(", "),i("code",[t._v("Notification.IOS_BADGE_TYPE_SET_TO")]),t._v(", "),i("code",[t._v("Notification.IOS_BADGE_TYPE_INCREASE")]),t._v(")")]),i("li",[t._v("ios_badge_count")]),i("li",[t._v("collapse_id")]),i("li",[t._v("apns_alert")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"delivery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delivery","aria-hidden":"true"}},[this._v("#")]),this._v(" Delivery")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("send_after")]),i("li",[t._v("delayed_option (available values: "),i("code",[t._v("Notification.DELAYED_OPTION_TIMEZONE")]),t._v(", "),i("code",[t._v("Notification.DELAYED_OPTION_LAST_ACTIVE")]),t._v(")")]),i("li",[t._v("delivery_time_of_day")]),i("li",[t._v("ttl")]),i("li",[t._v("priority")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"grouping-collapsing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grouping-collapsing","aria-hidden":"true"}},[this._v("#")]),this._v(" Grouping & Collapsing")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("android_group")]),e("li",[this._v("android_group_message")]),e("li",[this._v("adm_group")]),e("li",[this._v("adm_group_message")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"platform-to-deliver-to"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#platform-to-deliver-to","aria-hidden":"true"}},[this._v("#")]),this._v(" Platform to Deliver To")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("is_ios")]),i("li",[t._v("is_android")]),i("li",[t._v("is_any_web")]),i("li",[t._v("is_email")]),i("li",[t._v("is_chrome_web")]),i("li",[t._v("is_firefox")]),i("li",[t._v("is_wp")]),i("li",[t._v("is_wp_wns")]),i("li",[t._v("is_adm")]),i("li",[t._v("is_chrome")])])}],!1,null,null,null);e.default=a.exports}}]);