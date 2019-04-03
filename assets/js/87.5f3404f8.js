(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{207:function(e,o,r){"use strict";r.r(o);var s=r(0),t=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"new-features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-features","aria-hidden":"true"}},[e._v("#")]),e._v(" New features")]),e._v(" "),r("h2",{attrs:{id:"express-containers-2-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#express-containers-2-1","aria-hidden":"true"}},[e._v("#")]),e._v(" Express Containers 2.1")]),e._v(" "),r("p",[e._v("This release of the Docker-SimpliVity playbooks deploys Docker EE 2.1, featuring Kubernetes 1.11. It is recommended that\nyou set the DTR version to "),r("code",[e._v("2.6.4")]),e._v(" (released 2019-3-28) to avoid a known issue restoring after backup.")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("Prometheus/Grafana on Kubernetes:")]),e._v(" The playbooks now set up  a full monitoring stack for the deployed  Kubernetes infrastructure using Prometheus Operator. They install "),r("code",[e._v("kube-state-metrics")]),e._v(" and "),r("code",[e._v("node-exporter")]),e._v(" components, as well as supporting Kubelet and Apiserver metrics. Sample dashboards for Grafana are installed to help you monitor your Kubernetes infrastructure.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Docker UCP metrics for Kubernetes:")]),e._v(" A separate, standalone Prometheus/Grafana deployment is provided to support visualization of UCP metrics. This will be integrated into the full stack deployment in a future release.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Sysdig for Kubernetes:")]),e._v(" The Sysdig deployment has been updated to use Kubernetes  1.11 RBAC and config maps for sensitive data.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("NFS Provisioner for Kubernetes:")]),e._v(" The NFS Provisioner has been updated to use Kubernetes 1.11 RBAC.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("WordPress and MySQL using NFS Provisioner:")]),e._v(" Playbooks are provided to validate the NFS Provisioner, featuring a WordPress and MySQL deployment with persistent storage.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("kubectl:")]),e._v(" A convenience playbook is provided to download and install "),r("code",[e._v("kubectl")]),e._v(".")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Client bundle:")]),e._v(" A convenience playbook is available to download and configure the client bundle from UCP.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Helm charts:")]),e._v(" Playbooks for downloading, installing and configuring Helm are provided, with the use of sample charts for validation purposes.")])])]),e._v(" "),r("h2",{attrs:{id:"express-containers-2-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#express-containers-2-0","aria-hidden":"true"}},[e._v("#")]),e._v(" Express Containers 2.0")]),e._v(" "),r("p",[e._v("This release of the Docker-SimpliVity playbooks is based on the recent release of the corresponding Docker-Synergy playbooks with some specific additions:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Load balancers:")]),e._v(" The playbooks now support load balancers based on VRRP, using "),r("code",[e._v("HAproxy")]),e._v(" and "),r("code",[e._v("keepalived")]),e._v(". The solution can be deployed using these loadbalancers, external load balancers, no load balancers or the legacy version of standalone load balancers.")]),e._v(" "),r("li",[r("strong",[e._v("Default storage driver:")]),e._v(" The default storage driver is now "),r("code",[e._v("overlay2")]),e._v(", as recommended by Docker. Previously, the "),r("code",[e._v("devicemapper")]),e._v(" was configured in "),r("code",[e._v("direct-lvm")]),e._v(" mode.")]),e._v(" "),r("li",[r("strong",[e._v("Windows workers behind proxy:")]),e._v(" Windows worker nodes can now be deployed behind a proxy. Simple HTTP proxy support is provided and the playbooks do not support any type of authentication with the proxy (on either RHEL or Windows nodes).")]),e._v(" "),r("li",[r("strong",[e._v("Windows boot drive:")]),e._v(" The OS partition of Windows worker nodes is now resized to occupy all the boot disk, whereas, previously, there would have been some unallocated space.")])])])}],!1,null,null,null);t.options.__file="new-features.md";o.default=t.exports}}]);