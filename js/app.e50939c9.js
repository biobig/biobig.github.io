(function(e){function n(n){for(var t,r,s=n[0],l=n[1],c=n[2],v=0,h=[];v<s.length;v++)r=s[v],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);u&&u(n);while(h.length)h.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,n=0;n<o.length;n++){for(var i=o[n],t=!0,s=1;s<i.length;s++){var l=i[s];0!==a[l]&&(t=!1)}t&&(o.splice(n--,1),e=r(r.s=i[0]))}return e}var t={},a={app:0},o=[];function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,n,i){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(i,t,function(n){return e[n]}.bind(null,t));return i},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var u=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,n,i){e.exports=i("56d7")},"09c9":function(e,n,i){e.exports=i.p+"img/Photo.5fa4799f.jpg"},"11e8":function(e,n,i){"use strict";var t=i("2d40"),a=i.n(t);a.a},"140f":function(e,n,i){},"191e":function(e,n,i){"use strict";var t=i("c4a9"),a=i.n(t);a.a},"1f77":function(e,n,i){"use strict";var t=i("ffbc"),a=i.n(t);a.a},2395:function(e,n,i){},"265f":function(e,n,i){"use strict";var t=i("d7ae"),a=i.n(t);a.a},"2d40":function(e,n,i){},"56d7":function(e,n,i){"use strict";i.r(n);i("e260"),i("e6cf"),i("cca6"),i("a79d");var t=i("2b0e"),a=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},o=[],r=(i("7c55"),i("2877")),s={},l=Object(r["a"])(s,a,o,!1,null,null,null),c=l.exports,u=i("8c4f"),v=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"home"},[0==e.isPortrait&&!1===e.isPhone?i("v-leftcard"):e._e(),i("div",{staticStyle:{width:"98%"}},[i("el-row",{staticStyle:{width:"100%"},attrs:{align:"middle"}},[i("el-button",{on:{click:function(n){return e.toGo("biography")}}},[i("a",[e._v("Homepage")])]),i("el-button",{on:{click:function(n){return e.toGo("research")}}},[i("a",[e._v("Research")])]),i("el-button",{on:{click:function(n){return e.toGo("publications")}}},[i("a",[e._v("Publications")])]),i("el-button",{on:{click:function(n){return e.toGo("services")}}},[i("a",[e._v("Services")])]),i("el-button",{on:{click:function(n){return e.toGo("people")}}},[i("a",[e._v("People")])])],1),i("el-divider"),i("div",{style:"height:"+e.windowHeight+"px;overflow: auto; text-align: left; font-size: 18px; line-height: 1.75; padding: 0% 2% 0% 3%; overflow-y: scroll;",attrs:{id:"#top"}},[!0===e.isPortrait||!0===e.isPhone?i("v-centercard",{}):e._e(),i("v-biography",{attrs:{id:"biography"}}),i("v-research",{attrs:{id:"research"}}),i("v-publications",{attrs:{id:"publications"}}),i("v-services",{attrs:{id:"services"}}),i("v-people",{attrs:{id:"people"}})],1)],1)],1)},h=[],_=(i("ac1f"),i("466d"),{name:"Home",methods:{toGo:function(e){console.log(e),document.querySelector("#"+e).scrollIntoView(!0)}},mounted:function(){var e=this;null!=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)?this.isPhone=!0:this.isPhone=!1,console.log("Test",document.documentElement.clientWidth),document.documentElement.clientWidth<1200?e.isPortrait=!0:e.isPortrait=!1,window.onresize=function(){return function(){window.fullHeight=document.documentElement.clientHeight,window.fullWidth=document.documentElement.clientWidth,e.windowHeight=window.fullHeight-100,e.windowWidth=window.fullWidth,console.log("Window Height: ",e.windowHeight),console.log("Window Width: ",e.windowWidth),e.windowWidth<1200?e.isPortrait=!0:e.isPortrait=!1}()}},data:function(){return{isPhone:!1,isPortrait:!1,windowHeight:document.documentElement.clientHeight-100,windowWidth:document.documentElement.clientWidth}},watch:{isPhone:function(e){console.log("Phone",e)}},windowWidth:function(e){this.windowWidth<1200?this.isPortrait=!0:this.isPortrait=!1,console.log(e)}}),d=_,f=(i("265f"),Object(r["a"])(d,v,h,!1,null,"266fe299",null)),p=f.exports;t["default"].use(u["a"]);var g=[{path:"/",name:"Home",component:p}],m=new u["a"]({mode:"history",base:"",routes:g}),b=m,S=i("2f62");t["default"].use(S["a"]);var w=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}}),y=i("5c96"),L=i.n(y),C=(i("0fae"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("el-card",{staticStyle:{"padding-top":"2%",width:"320px",height:"auto"}},[t("div",{staticStyle:{width:"auto",height:"320px"}},[t("el-image",{staticStyle:{width:"160px",height:"240px","border-radius":"5%"},attrs:{src:i("09c9"),fit:"cover"}}),t("h2",[e._v("DU, Lei (杜磊)")])],1),t("div",{staticClass:"box"},[t("p",[e._v("Associate Professor")]),t("p",[t("a",{attrs:{href:"http://zdhxy.nwpu.edu.cn/",target:"_blank"}},[e._v("School of Automation")])]),t("p",[t("a",{attrs:{href:"https://www.nwpu.edu.cn/",target:"_blank"}},[e._v("Northwestern Polytechnical University")])]),t("p",[t("b",[e._v("Email:")]),e._v(" dulei at nwpu dot edu dot cn")])])])],1)}),I=[],A={data:function(){return{}}},B=A,k=(i("a84a"),Object(r["a"])(B,C,I,!1,null,"24f7bcdd",null)),M=k.exports,E=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("br"),e._m(0),i("el-divider")],1)},J=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{display:"flex"}},[t("div",{staticStyle:{width:"200px",height:"250px"}},[t("img",{attrs:{src:i("09c9"),width:"160px",height:"240px"}})]),t("div",{staticStyle:{width:"auto",height:"250px"}},[t("h2",[e._v("DU, Lei (杜磊)")]),e._v(" Associate Professor"),t("br"),t("a",{attrs:{href:"http://zdhxy.nwpu.edu.cn/",target:"_blank"}},[e._v("School of Automation")]),t("br"),t("a",{attrs:{href:"https://www.nwpu.edu.cn/",target:"_blank"}},[e._v("Northwestern Polytechnical University")]),t("br"),t("b",[e._v("Email:")]),e._v(" dulei at nwpu dot edu dot cn ")])])}],P={},H=P,G=(i("11e8"),Object(r["a"])(H,E,J,!1,null,"4586bea4",null)),D=G.exports,T=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("p",[i("font",{attrs:{size:"5"}},[i("b",[e._v("Biography")])])],1),e._m(0),i("p",[i("font",{attrs:{size:"4",color:"red"}},[i("b",[e._v("News")])])],1),e._m(1)])},x=[function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("p",[e._v(" I'm an Associate Professor of the "),i("a",{attrs:{href:"http://zdhxy.nwpu.edu.cn/",target:"_blank"}},[e._v("School of Automation")]),e._v(" at "),i("a",{attrs:{href:"https://www.nwpu.edu.cn/",target:"_blank"}},[e._v("Northwestern Polytechnical University")]),e._v(". My research interests include brain imaging genomics, bioinformatics, machine learning, and big data mining. I received my Ph.D. degree from "),i("a",{attrs:{href:"http://www.xjtu.edu.cn/",target:"_blank"}},[e._v("Xi'an Jiaotong University")]),e._v(" in Jun. 2013. From Aug. 2013 to Jan. 2016, I was a PostDoc at Indiana University School of Medicine, working with Prof. "),i("a",{attrs:{href:"https://www.med.upenn.edu/shenlab/",target:"_blank"}},[e._v("Li Shen")]),e._v(" (now at University of Pennsylvania). ")])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ul",[i("li",[e._v("[2021.02] One paper accepted by MedIA!")])])}],j={},z=j,O=(i("ab3e"),Object(r["a"])(z,T,x,!1,null,"bfe2a58e",null)),R=O.exports,W=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("p",[i("font",{attrs:{size:"5"}},[i("b",[e._v("Research")])])],1),i("p",[i("font",{attrs:{size:"4"}},[i("b",[e._v("Brain Imaging Genomics")])])],1),i("p",[i("font",{attrs:{size:"4"}},[i("b",[e._v("Fundings")])])],1),e._m(0)])},$=[function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ul",[i("li",[e._v("[2020.01-2023.12] 国家自然科学基金面上项目 (No. 61973255, 主持)")]),i("li",[e._v("[2020.07-2022.06] 中国博士后特别资助项目 (3102018zy029, 主持)")]),i("li",[e._v("[2020.01-2021.12] 陕西省自然科学基础研究计划面上项目 (2020JM-142, 主持)")]),i("li",[e._v("[2020.07-2022.06] 计算神经科学与类脑智能教育部重点实验室开放课题 (主持)")]),i("li",[e._v("[2019.01-2023.12] 国家自然科学基金重点项目 (No. 61836006, 参与)")]),i("li",[e._v("[2020.01-2024.12] 国家自然科学基金重点项目 (No. 61936007, 参与)")])])}],Y={},K=Y,N=(i("a51c"),Object(r["a"])(K,W,$,!1,null,"1278ce4b",null)),X=N.exports,F=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("p",[i("font",{attrs:{size:"5"}},[i("b",[e._v("Publications")])])],1),e._v(" [* Corresponding; # Equal contribution] ["),i("a",{attrs:{href:"https://scholar.google.com/citations?hl=en&user=sGIDKDQAAAAJ",target:"_blank"}},[e._v("Google Scholar")]),e._v("] ["),i("a",{attrs:{href:"https://github.com/dulei323",target:"_blank"}},[e._v("Codes")]),e._v("] "),i("p",[i("font",{attrs:{size:"4"}},[i("b",[e._v("2021")])])],1),e._m(0),i("p",[i("font",{attrs:{size:"4"}},[i("b",[e._v("2020")])])],1),e._m(1),i("p",[i("font",{attrs:{size:"4"}},[i("b",[e._v("2019")])])],1),e._m(2),i("p",[i("font",{attrs:{size:"4"}},[i("b",[e._v("2018")])])],1),i("ul",[i("li",[i("b",[e._v("Lei Du")]),e._v("*, Kefei Liu, Xiaohui Yao, Shannon L. Risacher, Junwei Han, Lei Guo, Andrew J. Saykin, Li Shen. "),i("a",{attrs:{href:"https://doi.org/10.1109/BIBM.2018.8621298",target:"_blank"}},[e._v(" Fast Multi-Task SCCA Learning with Feature Selection for Multi-Modal Brain Imaging Genetics. ")]),i("i",[e._v("IEEE International Conference on Bioinformatics and Biomedicine")]),e._v(" (BIBM, CCF B conference). Madrid, Spain, December 3-6, 2018. ["),i("font",{attrs:{color:"red"}},[e._v("Best Paper Award")]),e._v("] ")],1),e._m(3)]),i("p",[i("font",{attrs:{size:"4"}},[i("b",[e._v("2017")])])],1),e._m(4),i("p",[i("font",{attrs:{size:"4"}},[i("b",[e._v("2016")])])],1),e._m(5),i("p",[i("font",{attrs:{size:"4"}},[i("b",[e._v("2015")])])],1),e._m(6),i("p",[i("font",{attrs:{size:"4"}},[i("b",[e._v("2014")])])],1),e._m(7),i("p",[i("font",{attrs:{size:"4"}},[i("b",[e._v("2013")])])],1),e._m(8)])},Z=[function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ul",[i("li",[i("b",[e._v("Lei Du")]),e._v("*, Jin Zhang, Fang Liu, Huiai Wang, Lei Guo, Junwei Han. "),i("a",{attrs:{href:"https://doi.org/10.1016/j.media.2021.102003",target:"_blank"}},[e._v(" Identifying Associations among Genomic, Proteomic and Imaging Biomarkers via Adaptive Sparse Multi-view Canonical Correlation Analysis. ")]),i("i",[e._v("Medical Image Analysis")]),e._v(" (Top journal). vol. 70, no. 102003, pp. 1-12, 2021. ")]),i("li",[i("b",[e._v("Lei Du")]),e._v("*, Kefei Liu, Xiaohui Yao, Shannon L. Risacher, Junwei Han, Andrew J. Saykin, Lei Guo, Li Shen. "),i("a",{attrs:{href:"https://doi.org/10.1109/TCBB.2019.2947428",target:"_blank"}},[e._v(" Multi-Task Sparse Canonical Correlation Analysis with Application to Multi-Modal Brain Imaging Genetics. ")]),i("i",[e._v("IEEE/ACM Transactions on Computational Biology and Bioinformatics")]),e._v(" (CCF B journal). vol. 18, no. 1, pp. 227-239, 2021. ")])])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ul",[i("li",[i("b",[e._v("Lei Du")]),e._v("*, Fang Liu, Kefei Liu, Xiaohui Yao, Shannon L. Risacher, Junwei Han, Andrew J. Saykin, Li Shen*. "),i("a",{attrs:{href:"https://doi.org/10.1109/TMI.2020.2995510",target:"_blank"}},[e._v(" Associating Multi-modal Brain Imaging Phenotypes and Genetic Risk Factors via A Dirty Multi-Task Learning Method. ")]),i("i",[e._v("IEEE Transactions on Medical Imaging")]),e._v(" (Top journal). vol. 39, no. 11, pp. 3416-3428, 2020. ")]),i("li",[i("b",[e._v("Lei Du")]),e._v("*, Fang Liu,Kefei Liu, Xiaohui Yao, Shannon L. Risacher, Junwei Han, Lei Guo, Andrew J. Saykin, Li Shen*. "),i("a",{attrs:{href:"https://doi.org/10.1093/bioinformatics/btaa434",target:"_blank"}},[e._v(" Identifying Diagnosis-Specific Genotype-Phenotype Associations via Joint Multi-Task Sparse Canonical Correlation Analysis and Classification. ")]),i("i",[e._v("Bioinformatics")]),e._v(" (Top journal). vol. 36, no. Supplement_1, pp. i371-i379, 2020. [ISMB 2020 Issue] ")]),i("li",[i("b",[e._v("Lei Du")]),e._v("*, Kefei Liu, Xiaohui Yao, Shannon L. Risacher, Junwei Han, Andrew J. Saykin, Lei Guo, Li Shen*. "),i("a",{attrs:{href:"https://doi.org/10.1016/j.media.2020.101656",target:"_blank"}},[e._v(" Detecting Genetic Associations with Brain Imaging Phenotypes in Alzheimer's Disease via A Novel Structured SCCA Approach. ")]),i("i",[e._v("Medical Image Analysis")]),e._v(" (Top journal). vol. 61, no. 101656, pp. 1-13, 2020. ")]),i("li",[i("b",[e._v("Lei Du")]),e._v("*, Jin Zhang, Fang Liu, Minjianan Zhang, Huiai Wang, Lei Guo, Junwei Han. "),i("a",{attrs:{href:"https://doi.org/10.1109/BIBM49941.2020.9313503",target:"_blank"}},[e._v(" Mining High-order Multimodal Brain Image Associations via Sparse Tensor Canonical Correlation Analysis. ")]),i("i",[e._v("IEEE International Conference on Bioinformatics and Biomedicine")]),e._v(" (BIBM, CCF B conference). Seoul, South Korea, December 16-19, 2020. ")]),i("li",[e._v(" Tuo Zhang, Zhibin He, Xi Jiang, Lei Guo, Xiaoping Hu, Tianming Liu, "),i("b",[e._v("Lei Du")]),e._v("*. "),i("a",{attrs:{href:"https://doi.org/10.1007/978-3-030-59728-3_10",target:"_blank"}},[e._v(" Species-Shared and -Specific Structural Connections Revealed by Dirty Multi-Task Regression. ")]),i("i",[e._v("International Conference on Medical Image Computing and Computer Assisted Intervention")]),e._v(" (MICCAI, Top conference). Lima, Peru, October 4-8, 2020. [Early accept] ")])])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ul",[i("li",[i("b",[e._v("Lei Du")]),e._v("*, Kefei Liu, Lei Zhu, Xiaohui Yao, Shannon L. Risacher, Lei Guo, Andrew J. Saykin, Li Shen*. "),i("a",{attrs:{href:"https://doi.org/10.1093/bioinformatics/btz320",target:"_blank"}},[e._v(" Identifying progressive imaging genetic patterns via multi-task sparse canonical correlation analysis: a longitudinal study of the ADNI cohort. ")]),i("i",[e._v("Bioinformatics")]),e._v(" (Top journal). vol. 35, no. 14, pp. i474-i483, 2019. [ISMB/ECCB 2019 Issue] ")]),i("li",[i("b",[e._v("Lei Du")]),e._v("*, Fang Liu, Kefei Liu, Xiaohui Yao, Shannon L. Risacher, Junwei Han, Lei Guo, Andrew J. Saykin, Li Shen. "),i("a",{attrs:{href:"https://doi.org/10.1007/978-3-030-32251-9_49",target:"_blank"}},[e._v(" A Dirty Multi-Task Learning Method for Multi-Modal Brain Imaging Genetics. ")]),i("i",[e._v("International Conference on Medical Image Computing and Computer Assisted Intervention")]),e._v(" (MICCAI, Top conference). Shenzhen, China, October 13-17, 2019. ")]),i("li",[i("b",[e._v("Lei Du")]),e._v("*, Kefei Liu, Xiaohui Yao, Shannon L. Risacher, Lei Guo, Andrew J. Saykin, Li Shen*. "),i("a",{attrs:{href:"https://doi.org/10.1109/ISBI.2019.8759489",target:"_blank"}},[e._v(" Diagnosis Status Guided Brain Imaging Genetics via Integrated Regression and Sparse Canonical Correlation Analysis. ")]),i("i",[e._v("IEEE International Symposium on Biomedical Imaging")]),e._v(" (ISBI). Venice, Italy, April 8-11, 2019. ")])])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("li",[i("b",[e._v("Lei Du")]),e._v("*, Kefei Liu, Tuo Zhang, Xiaohui Yao, Jingwen Yan, Shannon L. Risacher, Junwei Han, Lei Guo, Andrew J. Saykin, Li Shen*. "),i("a",{attrs:{href:"https://doi.org/10.1093/bioinformatics/btx594",target:"_blank"}},[e._v(" A Novel SCCA Approach via Truncated L1-norm and Truncated Group Lasso for Brain Imaging Genetics. ")]),i("i",[e._v("Bioinformatics")]),e._v(" (Top journal). vol. 34, no. 2, pp. 278-285, 2018. ")])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ul",[i("li",[i("b",[e._v("Lei Du")]),e._v("*, Kefei Liu, Xiaohui Yao, Jingwen Yan, Shannon L. Risacher, Junwei Han, Lei Guo, Andrew J. Saykin, Li Shen*. "),i("a",{attrs:{href:"https://doi.org/10.1038/s41598-017-13930-y",target:"_blank"}},[e._v(" Pattern Discovery in Brain Imaging Genetics via SCCA Modeling with a Generic Non-convex Penalty. ")]),i("i",[e._v("Scientific Reports")]),e._v(". vol. 7, no. 1, pp. 1-14, 2017. ")]),i("li",[i("b",[e._v("Lei Du")]),e._v(", Tuo Zhang, Kefei Liu, Jingwen Yan, Xiaohui Yao, Shannon L. Risacher, Andrew J. Saykin, Junwei Han, Lei Guo, Li Shen*. "),i("a",{attrs:{href:"https://doi.org/10.1007/978-3-319-59050-9_43",target:"_blank"}},[e._v(" Identifying Associations between Brain Imaging Phenotypes and Genetic Factors via a Novel Structured SCCA Approach. ")]),i("i",[e._v("International Conference on Information Processing in Medical Imaging")]),e._v(" (IPMI, Top conference). Boone, USA, June 24-30, 2017. ")]),i("li",[e._v(" Yuming Huang, "),i("b",[e._v("Lei Du")]),e._v("*, Kefei Liu, Xiaohui Yao, Shannon L. Risacher, Lei Guo, Andrew J. Saykin, Li Shen. "),i("a",{attrs:{href:"https://doi.org/10.1007/978-3-319-67675-3_19",target:"_blank"}},[e._v(" A fast SCCA algorithm for big data analysis in brain imaging genetics. ")]),i("i",[e._v("MICCAI Workshop on Imaging Genetics")]),e._v(". Quebec, Canada, September 10-14, 2017. ")])])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ul",[i("li",[i("b",[e._v("Lei Du")]),e._v(", Heng Huang, Jingwen Yan, Sungeun Kim, Shannon L. Risacher, Mark Inlow, Jason H. Moore, Andrew J. Saykin, Li Shen*. "),i("a",{attrs:{href:"https://doi.org/10.1093/bioinformatics/btw033",target:"_blank"}},[e._v(" Structured Sparse Canonical Correlation Analysis for Brain Imaging Genetics: An Improved GraphNet Method. ")]),i("i",[e._v("Bioinformatics")]),e._v(" (Top journal). vol. 32, no. 10, pp. 1544-1551, 2016. ")]),i("li",[i("b",[e._v("Lei Du")]),e._v(", Heng Huang, Jingwen Yan, Sungeun Kim, Shannon L. Risacher, Mark Inlow, Jason H. Moore, Andrew J. Saykin, Li Shen*. "),i("a",{attrs:{href:"https://doi.org/10.1186/s12918-016-0312-1",target:"_blank"}},[e._v(" Structured Sparse CCA for Brain Imaging Genetics via graph OSCAR. ")]),i("i",[e._v("BMC Systems Biology")]),e._v(". vol. 10, no. 3, pp. 335-345, 2016. ")]),i("li",[i("b",[e._v("Lei Du")]),e._v(", Tuo Zhang, Kefei Liu, Xiaohui Yao, Jingwen Yan, Shannon L. Risacher, Lei Guo, Andrew J. Saykin, Li Shen*. "),i("a",{attrs:{href:"https://doi.org/10.1109/bibm.2016.7822605",target:"_blank"}},[e._v(" Sparse Canonical Correlation Analysis via Truncated L1-norm with Application to Brain Imaging Genetics. ")]),i("i",[e._v("IEEE International Conference on Bioinformatics and Biomedicine")]),e._v(" (BIBM, CCF B conference). Shenzhen, China, December 14-18, 2016. ")]),i("li",[e._v(" Xiao Li*"),i("sup",[e._v(",#")]),e._v(", "),i("b",[e._v("Lei Du")]),i("sup",[e._v("#")]),e._v(", Tuo Zhang"),i("sup",[e._v("#")]),e._v(", Xintao Hu, Xi Jiang, Lei Guo, Tianming Liu. "),i("a",{attrs:{href:"https://doi.org/10.1007/978-3-319-46720-7_15",target:"_blank"}},[e._v(" Species Preserved and Exclusive Structural Connections Revealed by Sparse CCA. ")]),i("i",[e._v("International Conference on Medical Image Computing and Computer Assisted Intervention")]),e._v(" (MICCAI, Top conference). Athens, Greece, October 17-21, 2016. ")])])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ul",[i("li",[i("b",[e._v("Lei Du")]),e._v("*, Qinbao Song, Lei Zhu, Xiaoyan Zhu. "),i("a",{attrs:{href:"https://doi.org/10.1093/comjnl/bxu050",target:"_blank"}},[e._v(" A Selective Detector Ensemble for Concept Drift Detection. ")]),i("i",[e._v("The Computer Journal")]),e._v(". vol. 58, no. 3, pp. 457-471, 2015. ")]),i("li",[i("b",[e._v("Lei Du")]),e._v(", Jingwen Yan, Sungeun Kim, Shannon L. Risacher, Heng Huang, Mark Inlow, Jason H. Moore, Andrew J. Saykin, Li Shen*. "),i("a",{attrs:{href:"https://doi.org/10.1007/978-3-319-23344-4_27",target:"_blank"}},[e._v(" GN-SCCA: GraphNet Based Sparse Canonical Correlation Analysis for Brain Imaging Genetics. ")]),i("i",[e._v("Brain Informatics and Health")]),e._v(" (BIH). London, UK, August 30 - September 2, 2015. ")]),i("li",[i("b",[e._v("L Du")]),i("sup",[e._v("#")]),e._v(", A Chakraborty"),i("sup",[e._v("#")]),e._v(", C‐W Chiang, L Cheng, SK Quinney, H Wu, P Zhang, L Li*, L Shen*. "),i("a",{attrs:{href:"https://doi.org/10.1002/psp4.59",target:"_blank"}},[e._v(" Graphic mining of high-order drug interactions and their directional effects on myopathy using electronic medical records. ")]),i("i",[e._v("CPT: pharmacometrics & systems pharmacology")]),e._v(". vol. 4, no. 8, pp. 481-488, 2015. ")]),i("li",[e._v(" P Zhang"),i("sup",[e._v("#")]),e._v(", "),i("b",[e._v("L Du")]),i("sup",[e._v("#")]),e._v(", L Wang, M Liu, L Cheng, C‐W Chiang, H‐Y Wu, SK Quinney, L Shen, L Li*. "),i("a",{attrs:{href:"https://doi.org/10.1002/psp4.53",target:"_blank"}},[e._v(" A mixture dose-response model for identifying high-dimensional drug interaction effects on myopathy using electronic medical record databases. ")]),i("i",[e._v("CPT: pharmacometrics & systems pharmacology")]),e._v(". vol. 4, no. 8, pp. 474-480, 2015. ")])])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ul",[i("li",[i("b",[e._v("Lei Du")]),e._v("*, Qinbao Song, Xiaolin Jia. "),i("a",{attrs:{href:"https://doi.org/10.3233/IDA-140645",target:"_blank"}},[e._v(" Detecting Concept Drift: An Information Entropy based Method Using an Adaptive Sliding Window. ")]),i("i",[e._v("Intelligent data analysis")]),e._v(". vol. 18, no. 3, pp. 337-364, 2014. ")]),i("li",[i("b",[e._v("Lei Du")]),i("sup",[e._v("#")]),e._v(", Jingwen Yan"),i("sup",[e._v("#")]),e._v(", Sungeun Kim, Shannon L. Risacher, Heng Huang, Mark Inlow, Jason H. Moore, Andrew J. Saykin, Li Shen*. "),i("a",{attrs:{href:"https://doi.org/10.1007/978-3-319-10443-0_42",target:"_blank"}},[e._v(" A Novel Structure-aware Sparse Learning Algorithm for Brain Imaging Genetics. ")]),i("i",[e._v("International Conference on Medical Image Computing and Computer Assisted Intervention")]),e._v(" (MICCAI, Top conference). Boston, USA, September 14-18, 2014. ")]),i("li",[e._v(" Jingwen Yan, "),i("b",[e._v("Lei Du")]),e._v(", Sungeun Kim, Shannon L. Risacher, Heng Huang, Jason H. Moore, Andrew J. Saykin, Li Shen*. "),i("a",{attrs:{href:"https://doi.org/10.1093/bioinformatics/btu465",target:"_blank"}},[e._v(" Transcriptome-guided amyloid imaging genetic analysis via a novel structured sparse learning algorithm. ")]),i("i",[e._v("Bioinformatics")]),e._v(" (Top journal). vol. 30, no. 17, pp. i564-i571, 2014. ")])])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ul",[i("li",[i("b",[e._v("杜磊")]),e._v(", 杜星, 宋擒豹. "),i("a",{attrs:{href:"https://doi.org/10.13195/j.cd.2013.07.116.dul.028",target:"_blank"}},[e._v(" 一种k-NN分类器k值自动选取方法. ")]),i("i",[e._v("控制与决策")]),e._v(", 2013, 28(07): 1073-1077+1082. ")]),i("li",[i("b",[e._v("Lei Du")]),e._v(", Qinbao Song. "),i("a",{attrs:{href:"https://doi.org/10.1109/HPCC.2012.94",target:"_blank"}},[e._v(" A Simple Classifier Based on a Single Attribute. ")]),i("i",[e._v("IEEE International Conferences on High Performance Computing and Communications")]),e._v(" (HPCC). Liverpool, UK, June 24-28, 2012. ")])])}],U={},Q=U,q=(i("1f77"),Object(r["a"])(Q,F,Z,!1,null,"60bfb5fb",null)),V=q.exports,ee=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("p",[i("font",{attrs:{size:"5"}},[i("b",[e._v("Services")])])],1),i("p",[i("font",{attrs:{size:"4"}},[i("b")])],1),e._m(0),i("p",[i("font",{attrs:{size:"4"}},[i("b",[e._v("Reviewer")])])],1),e._m(1)])},ne=[function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ul",[i("li",[e._v("BIBM 2018 Session Chair")]),i("li",[e._v("BI 2017, 2019 Special Session Chair")]),i("li",[e._v("BIBM 2019, 2020, 2021 PC Member")]),i("li",[e._v("CCF, CAA, ISCB, MICCAI, IEEE Member")])])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ul",[i("li",[i("b",[e._v("Journal:")]),e._v(" TMI, Medical Image Analysis, Bioinformatics, Briefings in Bioinformatics, Human Brain Mapping, Brain Imaging Behavior, TCBB, JBHI")]),i("li",[i("b",[e._v("Conference:")]),e._v(" IPMI, MICCAI, BIBM")])])}],ie={},te=ie,ae=(i("191e"),Object(r["a"])(te,ee,ne,!1,null,"bb32a416",null)),oe=ae.exports,re=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("p",[i("font",{attrs:{size:"5"}},[i("b",[e._v("People")])])],1),i("p",[i("font",{attrs:{size:"4"}},[i("b",[e._v("PhD Students")])])],1),e._m(0),i("p",[i("font",{attrs:{size:"4"}},[i("b",[e._v("MS Students")])])],1),e._m(1)])},se=[function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ul",[i("li",[e._v("XI, Duo (席朵, 2020, co-advising)")]),i("li",[e._v("ZHANG, Minjianan (张旻嘉楠, 2021, co-advising)")]),i("li",[e._v("SHANG, Muheng (尚沐衡, 2021)")])])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ul",[i("li",[e._v("LIU, Fang (刘方, 2019)")]),i("li",[e._v("ZHANG, Jin (张金, 2019)")]),i("li",[e._v("WANG, Huiai (王惠爱, 2019)")]),i("li",[e._v("ZHAO, Ying (赵颖, 2020)")]),i("li",[e._v("YU, Chenglin (余城林, 2020)")]),i("li",[e._v("CUI, Dingnan (崔鼎男, 2020)")]),i("li",[e._v("ZHANG, Jianting (张建婷, 2021)")]),i("li",[e._v("XIE, Qiang (谢强, 2021)")])])}],le={},ce=le,ue=(i("7827"),Object(r["a"])(ce,re,se,!1,null,"32a88fcb",null)),ve=ue.exports,he={install:function(e){e.component("v-leftcard",M),e.component("v-centercard",D),e.component("v-biography",R),e.component("v-research",X),e.component("v-publications",V),e.component("v-services",oe),e.component("v-people",ve)}};t["default"].config.productionTip=!1,t["default"].use(he),t["default"].use(L.a),new t["default"]({router:b,store:w,render:function(e){return e(c)}}).$mount("#app")},"5f06":function(e,n,i){},7827:function(e,n,i){"use strict";var t=i("f76e"),a=i.n(t);a.a},"7c55":function(e,n,i){"use strict";var t=i("2395"),a=i.n(t);a.a},"8af9":function(e,n,i){},a51c:function(e,n,i){"use strict";var t=i("5f06"),a=i.n(t);a.a},a84a:function(e,n,i){"use strict";var t=i("140f"),a=i.n(t);a.a},ab3e:function(e,n,i){"use strict";var t=i("8af9"),a=i.n(t);a.a},c4a9:function(e,n,i){},d7ae:function(e,n,i){},f76e:function(e,n,i){},ffbc:function(e,n,i){}});
//# sourceMappingURL=app.e50939c9.js.map