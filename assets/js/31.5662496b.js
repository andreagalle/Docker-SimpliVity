(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{282:function(e,t,n){"use strict";n.r(t);var o=n(0),a=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"deploy-docker-containers-as-a-service-in-minutes-on-hpe-simplivity"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deploy-docker-containers-as-a-service-in-minutes-on-hpe-simplivity","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploy Docker Containers as a Service in minutes on HPE SimpliVity")]),e._v(" "),n("p",[e._v("I recently blogged about understanding containers and the related monitoring challenges. Now it’s time to discuss the\nresources available to help you tackle those challenges and to speed deployment of Docker Containers-as-a-Service (CaaS) on HPE SimpliVity.")]),e._v(" "),n("p",[e._v("The recently updated deployment guide for HPE Express Containers with Docker Enterprise Edition on HPE SimpliVity delivers\none-click deployment of a complete private cloud including compute, network and storage resources.")]),e._v(" "),n("p",[e._v("The accompanying Ansible playbooks allow you to quickly deploy Docker Enterprise Edition 2.0 and Kubernetes on top of VMware vSphere.\nAlso included are scripts to backup and restore your cloud, along with software to integrate with leading container-aware\nmonitoring offerings. The Ansible playbooks and online documentation are available now.")]),e._v(" "),n("h2",{attrs:{id:"new-features-in-this-release"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#new-features-in-this-release","aria-hidden":"true"}},[e._v("#")]),e._v(" New features in this release")]),e._v(" "),n("p",[e._v("This release deploys Docker Enterprise Edition 2.0 and provides a choice of orchestrator: Docker Swarm or Kubernetes.\nYou can use the same simple, declarative syntax to deploy applications to either orchestrator, so this provides a\nconvenient migration path for existing Docker swarm users to move to Kubernetes. The Docker Universal Control Plane\nuses a single pane of glass to control the deployment and management of applications across both orchestrators and\ngives role-based access control (RBAC) to secure your cluster. Docker Trusted Registry (DTR) is also deployed\nso that you can build, store, scan and sign your container images locally.")]),e._v(" "),n("p",[e._v("The solution also supports Windows worker nodes, but the functionality is lagging behind what is available for Linux,\nparticularly in the areas of networking and monitoring. This situation should improve soon with upcoming releases\nof Docker EE and Windows Server. Other functionality under consideration for future releases of the solution\nincludes support for bare-metal worker nodes and more storage options.")]),e._v(" "),n("p",[e._v("The solution addresses both the opportunities and the challenges presented by the shift to cloud-native applications.\nThis change promises to deliver functionality in a faster and more streamlined manner, but comes at the cost of\nincreased system complexity that necessitates new working practices and tools for developers and system administrators.\nThe remainder of this blog post outlines the monitoring solutions that the solutuon provides to help you transition\nto this new software lifecycle, from development and testing to deployment and day-to-day operations.")]),e._v(" "),n("h2",{attrs:{id:"monitoring-support-in-the-solution"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-support-in-the-solution","aria-hidden":"true"}},[e._v("#")]),e._v(" Monitoring support in the solution")]),e._v(" "),n("h3",{attrs:{id:"sysdig"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sysdig","aria-hidden":"true"}},[e._v("#")]),e._v(" Sysdig")]),e._v(" "),n("p",[e._v("HPE has teamed up with Sysdig to offer a fully featured, 90-day trial version of Sysdig Monitor and Secure as\npart of HPE Express Containers with Docker Enterprise Edition on HPE SimpliVity.")]),e._v(" "),n("p",[e._v("For more details on how to sign up, see the GitHub repository. The Sysdig Agent runs in a container on each\nLinux VM in the solution and can infer both the physical and the logical structure of the applications deployed\non your cloud. This allows Sysdig Monitor, running as Software-as-a-Service (SaaS), to provide rich visibility\nfrom an infrastructure-centric point of view for the operations engineer and from an application-centric point\nof view for the software developer.")]),e._v(" "),n("h3",{attrs:{id:"prometheus-and-grafana"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prometheus-and-grafana","aria-hidden":"true"}},[e._v("#")]),e._v(" Prometheus and Grafana")]),e._v(" "),n("p",[e._v("Prometheus is a hugely popular, open-source time-series database for collecting and querying monitoring data,\nand is typically used in conjunction with Grafana for data visualization. You can instrument your application\ncode to generate custom metrics, while there are custom exporters for common third-party software.\ncAdvisor generates container metrics, node-exporter reports on the underlying servers while Kubernetes itself\nproduces metrics on how it is performing. All this data can be gathered and queried in Prometheus for\nrules-based alerting and to produce management dashboards in Grafana.")]),e._v(" "),n("h3",{attrs:{id:"splunk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#splunk","aria-hidden":"true"}},[e._v("#")]),e._v(" Splunk")]),e._v(" "),n("p",[e._v("Splunk Enterprise allows you to aggregate and analyze data from any source, both structured or unstructured,\nusing machine leaning to provide insight into patterns and trends and to help you make faster, better-informed\nbusiness decisions. This solution deploys a fully-featured (but capacity-restricted) demo version of\nSplunk Enterprise that has been updated to support Kubernetes, while also facilitating integration with\nexisting installations of Splunk Enterprise that your company may already have.")])])}],!1,null,null,null);a.options.__file="docker-caas-simplivity.md";t.default=a.exports}}]);